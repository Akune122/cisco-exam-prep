#!/usr/bin/env node
/**
 * Script d'importation automatique de pages d'examen depuis itexamanswers.net
 * Supporte :
 *   - Questions à choix unique / choix multiples (<ul><li>)
 *   - Questions d'association "Match" (<table><tbody><tr><td>...</td><td>...</td></tr>)
 *   - Extraits CLI (<pre>) et Images (<img>)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

export function decodeHtml(str) {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\u00a0/g, ' ');
}

export function stripTags(str) {
  const preservedNetconf = str.replace(
    /<(get-config|edit-config|copy-config|delete-config|get|rpc|rpc-reply)>/gi,
    '&lt;$1&gt;'
  );
  return decodeHtml(
    preservedNetconf
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')
      .replace(/<li>/gi, '• ')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractPairsFromTable(tableHtml) {
  const ths = [...tableHtml.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)].map(m => stripTags(m[1])).filter(Boolean);
  const tbodyMatch = tableHtml.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
  const bodyHtml = tbodyMatch ? tbodyMatch[1] : tableHtml;
  const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const pairs = [];
  let pairIdx = 0;

  if (ths.length >= 2) {
    // Table de catégories (ex: Cut-through | Store-and-forward, Layer 2 | Layer 3 | Layer 4)
    for (const trm of bodyHtml.matchAll(trRegex)) {
      const tds = [...trm[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(td => stripTags(td[1]));
      for (let c = 0; c < Math.min(tds.length, ths.length); c++) {
        if (tds[c]) {
          pairs.push({
            id: `p${pairIdx + 1}`,
            prompt: tds[c],
            answer: ths[c]
          });
          pairIdx++;
        }
      }
    }
  } else {
    // Table d'association 2 colonnes (prompt -> answer)
    for (const trm of bodyHtml.matchAll(trRegex)) {
      const tds = [...trm[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(td => stripTags(td[1]));
      if (tds.length >= 2 && tds[0] && tds[1]) {
        pairs.push({
          id: `p${pairIdx + 1}`,
          prompt: tds[0],
          answer: tds[1]
        });
        pairIdx++;
      }
    }
  }

  return pairs.length > 0 ? pairs : null;
}

export function parseItExamHtml(html) {
  const startIdx = html.indexOf('<div class="thecontent clearfix">');
  const endIdx = html.indexOf('<nav class="navigation post-navigation"', startIdx);
  const contentHtml = startIdx !== -1 && endIdx !== -1 ? html.slice(startIdx, endIdx) : html;

  const questionRegex = /<p[^>]*>\s*<strong>\s*(\d{1,3})\.\s*((?:(?!<\/strong>)[\s\S])*?)<\/strong>/g;
  const rawMatches = [...contentHtml.matchAll(questionRegex)].filter(m => {
    const n = parseInt(m[1], 10);
    return n >= 1 && n <= 300;
  });

  const questions = [];

  for (let i = 0; i < rawMatches.length; i++) {
    const m = rawMatches[i];
    const origNum = parseInt(m[1], 10);
    let qText = stripTags(m[2]);
    const blockStart = m.index + m[0].length;
    const blockEnd = i + 1 < rawMatches.length ? rawMatches[i + 1].index : contentHtml.length;
    const block = contentHtml.slice(blockStart, blockEnd);

    const expIdx = block.indexOf('<div class="message_box');
    const mainBlock = expIdx !== -1 ? block.slice(0, expIdx) : block;

    // S'il y a un paragraphe <p><strong>...</strong></p> supplémentaire dans mainBlock (ex: Q22)
    const extraPromptRegex = /<p><strong>([\s\S]*?)<\/strong><\/p>/g;
    for (const em of mainBlock.matchAll(extraPromptRegex)) {
      const extraText = stripTags(em[1]);
      if (extraText) {
        qText = `${qText}\n\n${extraText}`;
      }
    }

    const exhibits = [];
    const preRegex = /<pre[^>]*>([\s\S]*?)<\/pre>/g;
    for (const pm of mainBlock.matchAll(preRegex)) {
      const content = decodeHtml(pm[1]).replace(/\r\n/g, '\n').trimEnd();
      let kind = 'cli';
      if (content.trim().startsWith('{')) kind = 'json';
      else if (content.includes('for index, device in enumerate')) kind = 'python';
      else if (content.includes('[Core Layer]')) kind = 'diagram';
      exhibits.push({
        type: kind,
        title:
          kind === 'diagram'
            ? 'Schéma de Topologie'
            : kind === 'python'
            ? 'Script Python'
            : kind === 'json'
            ? 'JSON REST API'
            : 'Cisco CLI',
        content
      });
    }

    // Options classiques <ul><li>
    const ulMatch = mainBlock.match(/<ul[^>]*>([\s\S]*?)<\/ul>/);
    const options = [];
    if (ulMatch) {
      const liRegex = /<li([^>]*)>([\s\S]*?)<\/li>/g;
      let optIdx = 0;
      for (const lm of ulMatch[1].matchAll(liRegex)) {
        const attrs = lm[1] || '';
        const isCorrect = attrs.includes('correct_answer') || lm[2].includes('correct_answer');
        const text = stripTags(lm[2]);
        options.push({
          id: String.fromCharCode(97 + optIdx),
          text,
          isCorrect
        });
        optIdx++;
      }
    }

    // Extraction de l'explication ou d'une table de correspondance (Match question)
    let explanation = null;
    let topic = null;
    let pairs = null;
    let keepFirstImageOnly = false;

    // 1. Vérifier s'il y a une table dans mainBlock (format fréquent sur CCNA v7)
    if (options.length === 0) {
      const mainTableMatch = mainBlock.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
      if (mainTableMatch) {
        pairs = extractPairsFromTable(mainTableMatch[1]);
      }
    }

    // 2. Cas spéciaux dans mainBlock sans <ul> ni <table>
    if (options.length === 0 && !pairs) {
      // Cas connecteurs en légendes wp-caption (ex: CCNA 1 Q122)
      const captions = [...mainBlock.matchAll(/<p[^>]*class="wp-caption-text"[^>]*>([\s\S]*?)<\/p>/gi)]
        .map(m => stripTags(m[1]))
        .filter(Boolean);
      if (captions.length >= 3 && captions.some(c => /\(true answer\)/i.test(c))) {
        captions.forEach((cap, idx) => {
          const isCorrect = /\(true answer\)/i.test(cap);
          const cleanLabel = cap
            .replace(/\s*\(true answer\)\s*/i, '')
            .replace(/conector/gi, 'connector')
            .replace(/^RJ\s+(\d+)$/i, 'RJ-$1')
            .trim();
          options.push({
            id: String.fromCharCode(97 + idx),
            text: cleanLabel,
            isCorrect
          });
        });
      }

      // Cas QCM en paragraphes <p> (ex: CCNA 1 Q33)
      if (options.length === 0 && /Layer 2 destination address\s*=/i.test(mainBlock)) {
        const pBlocks = [...mainBlock.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
        let optIdx = 0;
        for (const pb of pBlocks) {
          const rawP = pb[1];
          if (!/Layer 2 destination address\s*=/i.test(rawP)) continue;
          const isCorrect = /color:\s*#ff0000|color:\s*red/i.test(rawP);
          const cleanP = stripTags(rawP.replace(/<img[^>]*>/gi, '')).trim();
          if (cleanP) {
            options.push({
              id: String.fromCharCode(97 + optIdx),
              text: cleanP,
              isCorrect
            });
            optIdx++;
          }
        }
      }

      // Cas "Place the options in the following order:" (ex: CCNA 1 Q96 / Q120)
      if (options.length === 0 && /Place the options in the following order:/i.test(mainBlock)) {
        const stripped = stripTags(mainBlock);
        const afterOrder = stripped.split(/Place the options in the following order:/i)[1] || '';
        const lines = afterOrder.split('\n').map(l => l.trim()).filter(Boolean);
        let currentCat = null;
        const extracted = [];
        for (const line of lines) {
          const itemMatch = line.match(/^\[[+#*x-]\]\s*(.+)$/);
          if (itemMatch && currentCat) {
            extracted.push({
              id: `p${extracted.length + 1}`,
              prompt: itemMatch[1].trim(),
              answer: currentCat
            });
          } else if (!line.startsWith('[')) {
            currentCat = line.replace(/aplication/gi, 'application').trim();
          }
        }
        if (extracted.length > 0) pairs = extracted;
      }
    }

    if (expIdx !== -1) {
      const expHtml = block.slice(expIdx);
      const expMatch = expHtml.match(/<div class="message_box[^>]*>([\s\S]*?)<\/div>/);
      if (expMatch) {
        const innerExp = expMatch[1];

        // Vérifier s'il s'agit d'une question "Match" avec un tableau <table> dans l'explication
        const tableMatch = innerExp.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
        if (options.length === 0 && !pairs && tableMatch) {
          pairs = extractPairsFromTable(tableMatch[1]);
        }

        // Cas VLSM Match où les réponses sont détaillées dans l'explication (ex: CCNA 1 Q17 / Q28)
        if (options.length === 0 && !pairs) {
          const rawExpText = stripTags(innerExp);
          const netMatches = [...rawExpText.matchAll(/(Network\s+[A-Z])\s+needs\s+to\s+use\s+([\d.]+\s*\/\d+)/gi)];
          if (netMatches.length >= 2) {
            pairs = netMatches.map((nm, idx) => ({
              id: `p${idx + 1}`,
              prompt: nm[1].trim(),
              answer: nm[2].replace(/\s+\//g, '/').trim()
            }));
            keepFirstImageOnly = true;
          }
        }

        // Extraire le texte d'explication (et le Topic)
        let rawExp = stripTags(innerExp);
        const topicMatch = rawExp.match(/^Explanation:\s*(Topic\s+[\d.,\sand]+)\s*/i);
        if (topicMatch) {
          topic = topicMatch[1].trim();
          rawExp = rawExp.slice(topicMatch[0].length).trim();
        } else {
          rawExp = rawExp.replace(/^Explanation:\s*/i, '').trim();
        }
        if (rawExp && (!tableMatch || !pairs)) {
          explanation = rawExp;
        }
      }
    }

    // Conserver les images de mainBlock comme exhibits (pour QCM, ou uniquement le schéma pour VLSM Match)
    if (!pairs || keepFirstImageOnly) {
      const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
      const imgs = [...mainBlock.matchAll(imgRegex)];
      // Ne pas inclure les images d'options si c'est la question connecteurs (Q122)
      const isCaptionChoices = options.length > 0 && /class="wp-caption-text"/i.test(mainBlock) && /\(true answer\)/i.test(mainBlock);
      if (!isCaptionChoices) {
        const selectedImgs = keepFirstImageOnly ? imgs.slice(0, 1) : imgs;
        for (const im of selectedImgs) {
          exhibits.push({
            type: 'image',
            title: 'Illustration',
            src: im[1]
          });
        }
      }
    }

    if (options.length === 0 && (!pairs || pairs.length === 0)) continue;

    if (pairs && pairs.length > 0) {
      questions.push({
        id: questions.length + 1,
        originalNumber: origNum,
        questionType: 'matching',
        question: qText,
        chooseCount: pairs.length,
        isMultipleChoice: false,
        exhibits,
        pairs,
        options: [],
        topic,
        explanation
      });
    } else {
      const correctCount = options.filter(o => o.isCorrect).length;
      let finalQuestionText = qText;
      if (correctCount > 1 && !/\(Choose\s+/i.test(finalQuestionText)) {
        const words = ['', 'one', 'two', 'three', 'four', 'five'];
        const word = words[correctCount] || String(correctCount);
        finalQuestionText = `${finalQuestionText} (Choose ${word}.)`;
      }

      questions.push({
        id: questions.length + 1,
        originalNumber: origNum,
        questionType: 'choice',
        question: finalQuestionText,
        chooseCount: Math.max(1, correctCount),
        isMultipleChoice: correctCount > 1,
        exhibits,
        options,
        topic,
        explanation
      });
    }
  }

  // Fusionner Q51 / Q64 en doublon sur le Final Exam ENCOR v9 si présent
  const q51 = questions.find(q => q.id === 51 && q.question.includes('GRE tunnel'));
  const q64 = questions.find(q => q.id === 64 && q.question.includes('GRE tunnel'));
  if (q51 && q64 && q51.exhibits.length === 0 && q64.exhibits.length > 0) {
    q51.exhibits = q64.exhibits;
    q51.question = q64.question;
    questions.pop();
  }

  return questions;
}

export function rebuildBundle() {
  const catalogPath = path.join(ROOT_DIR, 'data', 'catalog.json');
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  const exams = {};

  for (const course of catalog.courses) {
    const examPath = path.join(ROOT_DIR, course.dataFile);
    if (fs.existsSync(examPath)) {
      exams[course.id] = JSON.parse(fs.readFileSync(examPath, 'utf8'));
    }
  }

  const bundleContent = `// Auto-generated fallback bundle so the site also works when opened via file:// without a local HTTP server
window.__EXAM_DATA_BUNDLE__ = ${JSON.stringify({ catalog, exams }, null, 2)};
`;
  fs.writeFileSync(path.join(ROOT_DIR, 'data', 'fallback-bundle.js'), bundleContent, 'utf8');
  console.log('✔ Bundle data/fallback-bundle.js mis à jour avec succès.');
}

const args = process.argv.slice(2);
if (args.includes('--rebuild-bundle')) {
  rebuildBundle();
} else if (args.includes('--build-routing')) {
  const htmlPath = args[args.indexOf('--build-routing') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const questions = parseItExamHtml(html);

  const examData = {
    id: 'ccnp-encor-v9-routing',
    categoryId: 'ccnp-v9',
    categoryName: 'CCNP ENCOR v9',
    courseCode: 'Modules 8 – 13',
    title: 'Checkpoint Exam : Network Routing (Modules 8 – 13)',
    description: 'Examen Checkpoint officiel sur le routage réseau (EIGRP, OSPF, BGP, Multicast, NAT/PAT) du cours CCNP ENCOR v9.',
    sourceUrl: 'https://itexamanswers.net/modules-8-13-checkpoint-exam-network-routing-answers-ccnp-encor-v9.html',
    lastUpdated: '2026-05-01',
    quizChunkSize: 10,
    examModeQuestionCount: questions.length,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccnp-encor-v9-routing.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath}`);
} else if (args.includes('--build-security')) {
  const htmlPath = args[args.indexOf('--build-security') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const questions = parseItExamHtml(html);

  const examData = {
    id: 'ccnp-encor-v9-security',
    categoryId: 'ccnp-v9',
    categoryName: 'CCNP ENCOR v9',
    courseCode: 'Modules 14 – 16',
    title: 'Checkpoint Exam : Network Security (Modules 14 – 16)',
    description: 'Examen Checkpoint officiel sur la sécurité réseau (ACLs, CoPP, AAA, RADIUS/TACACS+, 802.1X, WebAuth, Firewalls) du cours CCNP ENCOR v9.',
    sourceUrl: 'https://itexamanswers.net/modules-14-16-checkpoint-exam-network-security-answers-ccnp-encor-v9.html',
    lastUpdated: '2026-05-01',
    quizChunkSize: 10,
    examModeQuestionCount: questions.length,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccnp-encor-v9-security.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath}`);
} else if (args.includes('--build-virtualization')) {
  const htmlPath = args[args.indexOf('--build-virtualization') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const questions = parseItExamHtml(html);

  const examData = {
    id: 'ccnp-encor-v9-virtualization',
    categoryId: 'ccnp-v9',
    categoryName: 'CCNP ENCOR v9',
    courseCode: 'Modules 17 – 20',
    title: 'Checkpoint Exam : Virtualization & Network Services (Modules 17 – 20)',
    description: 'Examen Checkpoint officiel sur la virtualisation et les services réseau (Hyperviseurs, VRF, GRE, IPsec, NTP, SNMP, Syslog, NetFlow, IP SLA, EEM) du cours CCNP ENCOR v9.',
    sourceUrl: 'https://itexamanswers.net/modules-17-20-checkpoint-exam-virtualization-and-network-services-answers-ccnp-encor-v9.html',
    lastUpdated: '2026-05-01',
    quizChunkSize: 10,
    examModeQuestionCount: questions.length,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccnp-encor-v9-virtualization.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath}`);
} else if (args.includes('--build-programmability')) {
  const htmlPath = args[args.indexOf('--build-programmability') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const questions = parseItExamHtml(html);

  const examData = {
    id: 'ccnp-encor-v9-programmability',
    categoryId: 'ccnp-v9',
    categoryName: 'CCNP ENCOR v9',
    courseCode: 'Modules 21 – 22',
    title: 'Checkpoint Exam : Programmability (Modules 21 – 22)',
    description: 'Examen Checkpoint officiel sur la programmabilité réseau (Python, JSON/XML, YANG, NETCONF, RESTCONF, Ansible, Puppet, Chef, SaltStack) du cours CCNP ENCOR v9.',
    sourceUrl: 'https://itexamanswers.net/modules-21-22-checkpoint-exam-programmability-answers-ccnp-encor-v9.html',
    lastUpdated: '2026-05-01',
    quizChunkSize: 10,
    examModeQuestionCount: questions.length,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccnp-encor-v9-programmability.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath}`);
} else if (args.includes('--build-sdn')) {
  const htmlPath = args[args.indexOf('--build-sdn') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const questions = parseItExamHtml(html);

  const examData = {
    id: 'ccnp-encor-v9-sdn',
    categoryId: 'ccnp-v9',
    categoryName: 'CCNP ENCOR v9',
    courseCode: 'Modules 23 – 26',
    title: 'Checkpoint Exam : Software-Defined Networking (Modules 23 – 26)',
    description: 'Examen Checkpoint officiel sur le SDN (Cisco Catalyst Center, Assurance, IBN, SD-Access, LISP, VXLAN, Cisco Catalyst SD-WAN, REST APIs) du cours CCNP ENCOR v9.',
    sourceUrl: 'https://itexamanswers.net/modules-23-26-checkpoint-exam-software-defined-networking-answers-ccnp-encor-v9.html',
    lastUpdated: '2026-05-01',
    quizChunkSize: 10,
    examModeQuestionCount: questions.length,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccnp-encor-v9-sdn.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath}`);
} else if (args.includes('--build-switching')) {
  const htmlPath = args[args.indexOf('--build-switching') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const questions = parseItExamHtml(html);

  const examData = {
    id: 'ccnp-encor-v9-switching',
    categoryId: 'ccnp-v9',
    categoryName: 'CCNP ENCOR v9',
    courseCode: 'Modules 1 – 7',
    title: 'Checkpoint Exam : Network Switching (Modules 1 – 7)',
    description: 'Examen Checkpoint officiel sur la commutation réseau (Architecture Campus, CEF, VLANs, Trunks, STP/RSTP/MST, EtherChannel LACP/PAgP, HSRP/VRRP/GLBP, QoS) du cours CCNP ENCOR v9.',
    sourceUrl: 'https://itexamanswers.net/modules-1-7-checkpoint-exam-network-switching-answers-ccnp-encor-v9.html',
    lastUpdated: '2026-05-01',
    quizChunkSize: 10,
    examModeQuestionCount: questions.length,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccnp-encor-v9-switching.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath}`);
} else if (args.includes('--build-ccna1-final')) {
  const htmlPath = args[args.indexOf('--build-ccna1-final') + 1];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rawQuestions = parseItExamHtml(html);

  // Dédupliquer les questions strictement identiques (même énoncé + mêmes options/paires)
  const seenKeys = new Set();
  const questions = [];
  for (const q of rawQuestions) {
    const normQ = q.question.toLowerCase().replace(/\s+/g, ' ').trim();
    const sig = q.questionType === 'matching'
      ? `${normQ}||M||${q.pairs.map(p => `${p.prompt}=${p.answer}`).sort().join('|')}`
      : `${normQ}||C||${q.options.map(o => o.text).sort().join('|')}`;
    if (seenKeys.has(sig)) continue;
    seenKeys.add(sig);
    questions.push({ ...q, id: questions.length + 1 });
  }

  const examData = {
    id: 'ccna-1-v7-final',
    categoryId: 'ccna',
    categoryName: 'CCNA v7',
    courseCode: 'CCNA 1 — Final Exam',
    title: 'Course Final Exam — CCNA 1 v7.0 (ITN)',
    description: 'Examen Final complet du cours CCNA 1 v7.0 Introduction to Networks (Modèle OSI/TCP-IP, Ethernet, Adressage IPv4/IPv6, Sous-réseaux VLSM, Couche Transport, Sécurité de base).',
    sourceUrl: 'https://itexamanswers.net/ccna-1-v7-0-final-exam-answers-full-introduction-to-networks.html',
    lastUpdated: new Date().toISOString().slice(0, 10),
    quizChunkSize: 10,
    examModeQuestionCount: 60,
    passingScorePercent: 70,
    totalQuestions: questions.length,
    questions
  };

  const outPath = path.join(ROOT_DIR, 'data', 'exams', 'ccna-1-v7-final.json');
  fs.writeFileSync(outPath, JSON.stringify(examData, null, 2), 'utf8');
  console.log(`✔ ${questions.length} questions sauvegardées dans ${outPath} (${rawQuestions.length - questions.length} doublon(s) retiré(s))`);
}
