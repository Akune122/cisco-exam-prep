/**
 * Cisco Exam Prep — Logique Principale (Style Moderne, Épuré & Animé)
 */

(function () {
  'use strict';

  const STORAGE_KEY_PROGRESS = 'netexam_prep_progress_v1';
  const STORAGE_KEY_THEME = 'netexam_prep_theme_v1';
  const STORAGE_KEY_REQUESTS = 'netexam_prep_requests_v1';
  const PASSING_PERCENT = 70;

  const state = {
    catalog: null,
    examsCache: {},
    selectedCategory: 'all',
    currentCourseId: null,
    session: null
  };

  // =========================================================================
  // Utilitaires & Stockage
  // =========================================================================

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return raw ? JSON.parse(raw) : { courses: {} };
    } catch {
      return { courses: {} };
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
    } catch {
      // Ignore
    }
  }

  function getCourseProgress(courseId) {
    const progress = loadProgress();
    if (!progress.courses[courseId]) {
      progress.courses[courseId] = { quizzes: {}, examMode: null };
    }
    return progress.courses[courseId];
  }

  function recordResult(courseId, modeKey, score, total) {
    const progress = loadProgress();
    if (!progress.courses[courseId]) {
      progress.courses[courseId] = { quizzes: {}, examMode: null };
    }
    const percent = Math.round((score / total) * 100);
    const cProg = progress.courses[courseId];

    if (modeKey === 'exam') {
      const prevBest = cProg.examMode?.bestPercent ?? -1;
      cProg.examMode = {
        bestPercent: Math.max(prevBest, percent),
        bestScore: percent >= prevBest ? score : cProg.examMode.bestScore,
        lastScore: score,
        total
      };
    } else {
      const prev = cProg.quizzes[modeKey] || { bestPercent: -1 };
      cProg.quizzes[modeKey] = {
        bestPercent: Math.max(prev.bestPercent, percent),
        bestScore: percent >= prev.bestPercent ? score : prev.bestScore,
        lastScore: score,
        total
      };
    }
    saveProgress(progress);
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function formatCliHtml(rawText) {
    return escapeHtml(rawText)
      .split('\n')
      .map(line =>
        line.replace(
          /^([A-Za-z0-9_-]+(?:\([a-z0-9_-]+\))?[#>])/i,
          '<span class="cli-prompt">$1</span>'
        )
      )
      .join('\n');
  }

  function launchConfetti() {
    const existing = document.getElementById('confetti-canvas');
    if (existing) existing.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#10b981', '#38bdf8', '#6366f1', '#f59e0b', '#ec4899'];
    const pieces = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.5,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 2.5 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 2.5,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.14
    }));

    let frame = 0;
    function tick() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let active = false;

      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        if (p.y < canvas.height + 20) active = true;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (active && frame < 240) {
        requestAnimationFrame(tick);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(tick);
  }

  // =========================================================================
  // Chargement JSON
  // =========================================================================

  async function loadCatalog() {
    if (state.catalog) return state.catalog;
    try {
      const res = await fetch('data/catalog.json', { cache: 'no-cache' });
      if (res.ok) {
        state.catalog = await res.json();
        return state.catalog;
      }
    } catch {
      // Fallback file://
    }
    if (window.__EXAM_DATA_BUNDLE__?.catalog) {
      state.catalog = window.__EXAM_DATA_BUNDLE__.catalog;
      return state.catalog;
    }
    throw new Error('Catalogue introuvable');
  }

  async function loadCourseData(courseId) {
    if (state.examsCache[courseId]) return state.examsCache[courseId];
    const catalog = await loadCatalog();
    const meta = catalog.courses.find(c => c.id === courseId);
    if (!meta) throw new Error('Cours introuvable');

    try {
      const res = await fetch(meta.dataFile, { cache: 'no-cache' });
      if (res.ok) {
        const data = await res.json();
        state.examsCache[courseId] = data;
        return data;
      }
    } catch {
      // Fallback file://
    }
    if (window.__EXAM_DATA_BUNDLE__?.exams?.[courseId]) {
      state.examsCache[courseId] = window.__EXAM_DATA_BUNDLE__.exams[courseId];
      return state.examsCache[courseId];
    }
    throw new Error('Données du cours introuvables');
  }

  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId)?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToCategoryView(categoryId) {
    const targetHash = `#/category/${categoryId}`;
    if (window.location.hash === targetHash) {
      renderCategoryView(categoryId);
    } else {
      window.location.hash = targetHash;
    }
  }

  function goToCourseDashboard(courseId, subMode = 'quizzes') {
    const targetHash = subMode === 'study' ? `#/course/${courseId}/study` : `#/course/${courseId}`;
    if (window.location.hash === targetHash) {
      renderCourseDashboard(courseId, subMode);
    } else {
      window.location.hash = targetHash;
    }
  }

  // =========================================================================
  // VUE 1 : Accueil (Sélection de la Certification / Partie : CCNP V9, CCNA 1...)
  // =========================================================================

  async function renderHomeView() {
    state.session = null;
    const catalog = await loadCatalog();
    showView('view-home');

    const gridEl = document.getElementById('categories-home-grid');
    if (!gridEl) return;

    gridEl.innerHTML = catalog.categories
      .map((cat, idx) => {
        const catCourses = catalog.courses.filter(c => c.categoryId === cat.id);
        const finalExams = catCourses.filter(c => c.type === 'final' || /final/i.test(c.code));
        const checkpoints = catCourses.filter(c => c.type === 'checkpoint' || (!/final/i.test(c.code) && c.type !== 'final'));
        const totalQuestions = catCourses.reduce((acc, c) => acc + (c.totalQuestions || 0), 0);

        let certifiedCount = 0;
        catCourses.forEach(c => {
          const p = getCourseProgress(c.id);
          if (p.examMode && p.examMode.bestPercent >= PASSING_PERCENT) certifiedCount++;
        });

        const certBadgeHtml =
          certifiedCount > 0
            ? `<span class="score-pill good">🏆 ${certifiedCount}/${catCourses.length} validé(s)</span>`
            : '';

        return `
          <article class="category-hero-card" data-category-id="${escapeHtml(cat.id)}" style="animation-delay: ${idx * 0.08}s;">
            <div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem; flex-wrap:wrap;">
                <span class="course-tag" style="margin-bottom:0.35rem;">${escapeHtml(cat.badge || cat.shortName || cat.name)}</span>
                ${certBadgeHtml}
              </div>
              <h2 class="category-hero-title">${escapeHtml(cat.name)}</h2>
              ${cat.subtitle ? `<p class="category-hero-subtitle">${escapeHtml(cat.subtitle)}</p>` : ''}
              <p class="category-hero-desc">${escapeHtml(cat.description || '')}</p>

              <div class="category-metrics-row">
                <span class="metric-chip accent">🏆 ${finalExams.length} Final Exam</span>
                <span class="metric-chip">📍 ${checkpoints.length > 0 ? `${checkpoints.length} Checkpoints` : 'Checkpoints à venir'}</span>
                <span class="metric-chip">❓ ${totalQuestions} Questions</span>
                <span class="metric-chip">📚 Cours &amp; Schémas Interactifs</span>
              </div>
            </div>

            <div class="category-card-footer">
              <span>Explorer ${escapeHtml(cat.shortName || cat.name)} (Checkpoints, Cours &amp; Final Exam)</span>
              <span class="course-arrow">&rarr;</span>
            </div>
          </article>
        `;
      })
      .join('');

    gridEl.querySelectorAll('.category-hero-card').forEach(card => {
      card.addEventListener('click', () => {
        goToCategoryView(card.dataset.categoryId);
      });
    });
  }

  // =========================================================================
  // VUE 1-BIS : Page d'un Parcours (Checkpoints + Final Exam séparés)
  // =========================================================================

  function buildCourseCardHtml(course, idx, isFinal = false) {
    const quizCount = Math.ceil(course.totalQuestions / (course.quizChunkSize || 10));
    const cProg = getCourseProgress(course.id);
    const hasGuide = Boolean(window.__STUDY_GUIDES__?.[course.id]);
    const certBadge =
      cProg.examMode && cProg.examMode.bestPercent >= PASSING_PERCENT
        ? `<span class="score-pill good" style="margin-left:0.5rem;">🏆 ${cProg.examMode.bestPercent}%</span>`
        : '';

    return `
      <article class="course-card ${isFinal ? 'final-exam-card' : ''}" data-course-id="${escapeHtml(course.id)}" style="animation-delay: ${idx * 0.05}s;">
        <div>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
            <span class="course-tag">${escapeHtml(course.code || course.categoryName)}</span>
            ${certBadge}
          </div>
          <h3>${escapeHtml(course.title)}</h3>
          <p class="course-sub">
            ${course.totalQuestions} questions &bull; ${quizCount} Quizz &bull; Mode Examen
            ${hasGuide ? ' &bull; <strong>📚 Fiche de Cours</strong>' : ''}
          </p>
        </div>
        <div class="course-card-actions">
          ${
            hasGuide
              ? `<button type="button" class="btn-card-study" data-study-course="${escapeHtml(course.id)}">
                   📚 Cours &amp; Schémas
                 </button>`
              : '<span></span>'
          }
          <span style="font-size:0.88rem; font-weight:600; color:var(--accent); display:inline-flex; align-items:center; gap:0.35rem;">
            Accéder aux Quizz <span class="course-arrow">&rarr;</span>
          </span>
        </div>
      </article>
    `;
  }

  async function renderCategoryView(categoryId) {
    state.session = null;
    const catalog = await loadCatalog();
    const cat = catalog.categories.find(c => c.id === categoryId);
    if (!cat) {
      return renderHomeView();
    }

    showView('view-category');

    const catCourses = catalog.courses.filter(c => c.categoryId === cat.id);
    const finalExams = catCourses.filter(c => c.type === 'final' || /final/i.test(c.code));
    const checkpoints = catCourses.filter(c => c.type === 'checkpoint' || (!/final/i.test(c.code) && c.type !== 'final'));

    const finalHtml = finalExams.length
      ? `<div class="courses-grid">${finalExams.map((c, i) => buildCourseCardHtml(c, i, true)).join('')}</div>`
      : `<div class="empty-category">Aucun Examen Final dans cette section pour le moment.</div>`;

    const checkpointsHtml = checkpoints.length
      ? `<div class="courses-grid">${checkpoints.map((c, i) => buildCourseCardHtml(c, i, false)).join('')}</div>`
      : `
        <div class="empty-category">
          <h3 style="margin:0 0 0.45rem; color:var(--text-main); font-size:1.05rem;">📍 Checkpoints ${escapeHtml(cat.shortName || cat.name)} bientôt disponibles</h3>
          <p style="margin:0 0 1.1rem;">
            Cette section accueillera prochainement les Checkpoints par modules (Modules 1–3, Modules 4–7, Modules 8–10, Modules 11–13, Modules 14–15, Modules 16–17) avec leurs fiches de cours dédiées. En attendant, la fiche de cours complète et les 156 questions sont disponibles dans le Final Exam ci-dessus !
          </p>
          <a href="#/request" class="btn btn-secondary">+ Proposer un lien de Checkpoint à ajouter</a>
        </div>
      `;

    const container = document.getElementById('category-dashboard-content');
    container.innerHTML = `
      <a href="#/" class="back-link">&larr; Retour aux parcours (Accueil)</a>

      <div class="course-header" style="margin-bottom:2.2rem;">
        <span class="course-tag">${escapeHtml(cat.badge || cat.shortName)}</span>
        <h1>${escapeHtml(cat.name)}</h1>
        <p class="page-intro-sub">${escapeHtml(cat.description || '')}</p>
      </div>

      <div class="category-section-block">
        <div class="category-section-header">
          <h2 class="category-section-title">🏆 Examen Final du Cours (Final Exam)</h2>
        </div>
        ${finalHtml}
      </div>

      <div class="category-section-block">
        <div class="category-section-header">
          <h2 class="category-section-title">📍 Checkpoints par Modules (${checkpoints.length})</h2>
        </div>
        ${checkpointsHtml}
      </div>
    `;

    container.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', e => {
        const studyBtn = e.target.closest('[data-study-course]');
        if (studyBtn) {
          e.stopPropagation();
          goToCourseDashboard(studyBtn.dataset.studyCourse, 'study');
          return;
        }
        goToCourseDashboard(card.dataset.courseId, 'quizzes');
      });
    });
  }

  // =========================================================================
  // Schémas Interactifs des Fiches de Cours
  // =========================================================================

  function renderInteractiveWidgetHtml(type) {
    if (type === 'switching-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-sw-tab="etherchannel">🔗 Simulateur Négociation EtherChannel (LACP / PAgP)</button>
          <button type="button" class="sim-pill-btn" data-sw-tab="fhrp">🛡️ Comparateur Topologie FHRP (HSRP / VRRP / GLBP)</button>
        </div>
        <div id="sw-sim-body"></div>
      `;
    }
    if (type === 'routing-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-rt-tab="ospf">🗺️ Filtrage LSA &amp; Aires OSPF (Standard / Stub / NSSA)</button>
          <button type="button" class="sim-pill-btn" data-rt-tab="bgp">🌐 Algorithme BGP Best Path (10 étapes WLLA OMNI)</button>
        </div>
        <div id="rt-sim-body"></div>
      `;
    }
    if (type === 'security-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-sec-tab="l2">🛡️ Chaîne de Défense Layer 2 (DHCP Snooping → DAI → IPSG)</button>
          <button type="button" class="sim-pill-btn" data-sec-tab="8021x">🔐 Flux d'Authentification IEEE 802.1X &amp; AAA</button>
        </div>
        <div id="sec-sim-body"></div>
      `;
    }
    if (type === 'virtualization-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-virt-tab="headers">📦 Inspecteur d'Encapsulation (IP / GRE / IPsec / GRE+IPsec)</button>
          <button type="button" class="sim-pill-btn" data-virt-tab="syslog">📊 Échelle Interactive de Sévérité Syslog (0 à 7)</button>
        </div>
        <div id="virt-sim-body"></div>
      `;
    }
    if (type === 'programmability-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-prog-tab="protocols">⚡ Pile YANG : NETCONF (SSH 830) vs RESTCONF (HTTPS 443) vs gNMI</button>
          <button type="button" class="sim-pill-btn" data-prog-tab="formats">🧾 Traducteur d'Interface : JSON vs XML vs YAML</button>
        </div>
        <div id="prog-sim-body"></div>
      `;
    }
    if (type === 'sdn-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-sdn-tab="sda">🏢 Fabric Cisco SD-Access (LISP + VXLAN + TrustSec SGT)</button>
          <button type="button" class="sim-pill-btn" data-sdn-tab="sdwan">☁️ Les 4 Plans Cisco Catalyst SD-WAN (vBond / vManage / vSmart / cEdge)</button>
        </div>
        <div id="sdn-sim-body"></div>
      `;
    }
    if (type === 'ccna1-sim') {
      return `
        <div class="sim-subtabs">
          <button type="button" class="sim-pill-btn active" data-ccna-tab="osi">📚 Modèle OSI (7 Couches) &amp; Encapsulation PDU</button>
          <button type="button" class="sim-pill-btn" data-ccna-tab="subnet">🧮 Calculateur Interactif de Sous-Réseaux IPv4 (/24 à /30)</button>
        </div>
        <div id="ccna-sim-body"></div>
      `;
    }
    return `
      <div class="sim-subtabs">
        <button type="button" class="sim-pill-btn active" data-final-tab="ad">📏 Distances Administratives (AD)</button>
        <button type="button" class="sim-pill-btn" data-final-tab="mcast">📡 Adresses Multicast Réservées Cisco</button>
        <button type="button" class="sim-pill-btn" data-final-tab="ports">🔌 Ports TCP / UDP &amp; Numéros de Protocoles IP</button>
      </div>
      <div id="final-sim-body"></div>
    `;
  }

  function bindInteractiveWidget(container, type) {
    // 1. SWITCHING SIMULATOR
    if (type === 'switching-sim') {
      const body = container.querySelector('#sw-sim-body');
      let modeA = 'active';
      let modeB = 'passive';
      let fhrpProto = 'hsrp';

      const evaluateEc = (a, b) => {
        const lacp = ['active', 'passive'];
        const pagp = ['desirable', 'auto'];
        if (a === 'on' && b === 'on') {
          return { ok: true, proto: 'Statique (Mode ON)', msg: '✅ Canal EtherChannel formé manuellement sans protocole de négociation. Attention : aucune détection de panne de câblage LACP/PAgP.' };
        }
        if (lacp.includes(a) && lacp.includes(b)) {
          if (a === 'passive' && b === 'passive') {
            return { ok: false, proto: 'Aucun (LACP Passive/Passive)', msg: '❌ ÉCHEC : Les deux switches sont en mode LACP Passive (écoute seule). Au moins un côté doit être en mode ACTIVE pour envoyer des trames LACP !' };
          }
          return { ok: true, proto: 'LACP (IEEE 802.3ad)', msg: '✅ Canal EtherChannel formé en LACP ! Supporte jusqu’à 8 liens actifs + 8 liens en secours (hot-standby).' };
        }
        if (pagp.includes(a) && pagp.includes(b)) {
          if (a === 'auto' && b === 'auto') {
            return { ok: false, proto: 'Aucun (PAgP Auto/Auto)', msg: '❌ ÉCHEC : Les deux switches sont en mode PAgP Auto (écoute seule). Au moins un côté doit être en mode DESIRABLE !' };
          }
          return { ok: true, proto: 'PAgP (Propriétaire Cisco)', msg: '✅ Canal EtherChannel formé en PAgP ! Jusqu’à 8 liens actifs regroupés dans le Port-Channel.' };
        }
        return { ok: false, proto: 'Incompatibilité de protocole !', msg: '❌ ÉCHEC CRITIQUE : Incompatibilité entre les modes choisis (ex: LACP vs PAgP ou Mode ON face à LACP/PAgP). Risque de boucle STP ou mise en err-disabled !' };
      };

      const renderEtherchannel = () => {
        const res = evaluateEc(modeA, modeB);
        const modes = [
          { id: 'active', label: 'LACP Active' },
          { id: 'passive', label: 'LACP Passive' },
          { id: 'desirable', label: 'PAgP Desirable' },
          { id: 'auto', label: 'PAgP Auto' },
          { id: 'on', label: 'Statique (ON)' }
        ];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:1rem;">
              <div>
                <div style="font-size:0.8rem; font-weight:700; margin-bottom:0.4rem; color:var(--text-secondary);">Mode Switch Distribution A :</div>
                <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
                  ${modes.map(m => `<button type="button" class="sim-pill-btn ${modeA === m.id ? 'active' : ''}" data-set-a="${m.id}">${m.label}</button>`).join('')}
                </div>
              </div>
              <div>
                <div style="font-size:0.8rem; font-weight:700; margin-bottom:0.4rem; color:var(--text-secondary);">Mode Switch Accès B :</div>
                <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
                  ${modes.map(m => `<button type="button" class="sim-pill-btn ${modeB === m.id ? 'active' : ''}" data-set-b="${m.id}">${m.label}</button>`).join('')}
                </div>
              </div>
            </div>

            <div class="sim-nodes-row">
              <div class="sim-node ${res.ok ? 'good' : 'bad'}">
                <div class="sim-node-title">🖧 Switch A (Po1)</div>
                <div class="sim-node-sub">channel-group 1 mode <strong>${modeA}</strong></div>
              </div>
              <div class="sim-link-pipe ${res.ok ? 'up' : 'down'}">
                ${res.ok ? '════ Port-Channel UP ════' : '✕ ✕ Liens Séparés (STP) ✕ ✕'}<br/>
                <span style="font-size:0.72rem;">${res.proto}</span>
              </div>
              <div class="sim-node ${res.ok ? 'good' : 'bad'}">
                <div class="sim-node-title">🖧 Switch B (Po1)</div>
                <div class="sim-node-sub">channel-group 1 mode <strong>${modeB}</strong></div>
              </div>
            </div>

            <div class="sim-result-panel">${res.msg}</div>
          </div>
        `;
        body.querySelectorAll('[data-set-a]').forEach(b => b.addEventListener('click', () => { modeA = b.dataset.setA; renderEtherchannel(); }));
        body.querySelectorAll('[data-set-b]').forEach(b => b.addEventListener('click', () => { modeB = b.dataset.setB; renderEtherchannel(); }));
      };

      const renderFhrp = () => {
        const specs = {
          hsrp: {
            name: 'HSRP v1 / v2 (Propriétaire Cisco)',
            r1Role: 'ACTIVE (Priorité 110)',
            r2Role: 'STANDBY (Priorité 100)',
            mcast: '224.0.0.2 (v1) / 224.0.0.102 (v2) • UDP 1985',
            vmac: '0000.0c07.ac0a (v1) / 0000.0c9f.f00a (v2)',
            preempt: '❌ Désactivé par défaut (ajouter standby 10 preempt)',
            flow: 'Seul le routeur Active (R1) achemine le trafic pour la VIP 192.168.10.1. R2 surveille les Hellos (3s / Hold 10s) et prend la relève en cas de panne.'
          },
          vrrp: {
            name: 'VRRP (Standard IETF RFC 5798)',
            r1Role: 'MASTER (Priorité 110)',
            r2Role: 'BACKUP (Priorité 100)',
            mcast: '224.0.0.18 • IP Protocole 112',
            vmac: '0000.5e00.010a (Groupe 10 en hexa)',
            preempt: '✅ Activé par défaut !',
            flow: 'Interopérable multi-constructeurs. Le Master (R1) répond à l’ARP avec la MAC virtuelle 0000.5e00.01XX et peut utiliser sa propre IP réelle comme VIP.'
          },
          glbp: {
            name: 'GLBP (Cisco — Équilibrage de Charge Actif/Actif)',
            r1Role: 'AVG + AVF 1 (Transmet 50%)',
            r2Role: 'AVF 2 (Transmet 50%)',
            mcast: '224.0.0.102 • UDP 3222',
            vmac: '0007.b400.0a01 (R1) & 0007.b400.0a02 (R2)',
            preempt: '❌ Désactivé sur l’AVG / ✅ Activé sur les AVF',
            flow: 'Les DEUX routeurs acheminent simultanément le trafic ! L’AVG (R1) répond aux requêtes ARP vers 192.168.10.1 en alternant les adresses MAC virtuelles de R1 et R2 (jusqu’à 4 AVF).'
          }
        };
        const cur = specs[fhrpProto];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="sim-pill-btn ${fhrpProto === 'hsrp' ? 'active' : ''}" data-fhrp="hsrp">HSRP v1 / v2</button>
              <button type="button" class="sim-pill-btn ${fhrpProto === 'vrrp' ? 'active' : ''}" data-fhrp="vrrp">VRRP (Standard IETF)</button>
              <button type="button" class="sim-pill-btn ${fhrpProto === 'glbp' ? 'active' : ''}" data-fhrp="glbp">GLBP (Actif / Actif)</button>
            </div>

            <div class="sim-nodes-row">
              <div class="sim-node good">
                <div class="sim-node-title">🌐 Routeur R1</div>
                <div class="sim-node-sub">${cur.r1Role}</div>
              </div>
              <div class="sim-link-pipe up">
                VIP : 192.168.10.1<br/>
                <span style="font-size:0.72rem;">${cur.mcast}</span>
              </div>
              <div class="sim-node ${fhrpProto === 'glbp' ? 'good' : 'highlight'}">
                <div class="sim-node-title">🌐 Routeur R2</div>
                <div class="sim-node-sub">${cur.r2Role}</div>
              </div>
            </div>

            <div class="sim-result-panel">
              <strong>${cur.name}</strong><br/>
              • <strong>Adresse MAC Virtuelle</strong> : <code>${cur.vmac}</code><br/>
              • <strong>Préemption</strong> : ${cur.preempt}<br/>
              • <strong>Fonctionnement du flux</strong> : ${cur.flow}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-fhrp]').forEach(b => b.addEventListener('click', () => { fhrpProto = b.dataset.fhrp; renderFhrp(); }));
      };

      renderEtherchannel();
      container.querySelectorAll('[data-sw-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-sw-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.swTab === 'etherchannel') renderEtherchannel();
          else renderFhrp();
        });
      });
    }

    // 2. ROUTING SIMULATOR
    if (type === 'routing-sim') {
      const body = container.querySelector('#rt-sim-body');
      let areaType = 'standard';
      let bgpStep = 0;

      const renderOspf = () => {
        const areas = {
          standard: {
            name: 'Standard Area / Backbone Area 0',
            lsaAllowed: ['LSA 1 (Router)', 'LSA 2 (Network DR)', 'LSA 3 (Summary ABR)', 'LSA 4 (ASBR Summary)', 'LSA 5 (AS External)'],
            lsaBlocked: ['LSA 7 (réservé aux NSSA)'],
            defRoute: 'Aucune route par défaut automatique (nécessite default-information originate).',
            cmd: 'network X.X.X.X Y.Y.Y.Y area 10'
          },
          stub: {
            name: 'Stub Area (Bloque les routes externes LSA 4 & 5)',
            lsaAllowed: ['LSA 1 (Router)', 'LSA 2 (Network DR)', 'LSA 3 (Summary Inter-Area)'],
            lsaBlocked: ['❌ LSA 4 (ASBR Summary)', '❌ LSA 5 (External)', '❌ LSA 7'],
            defRoute: '✅ L’ABR injecte automatiquement une route par défaut LSA Type 3 (O*IA 0.0.0.0/0). Aucun ASBR n’est autorisé dans l’aire.',
            cmd: 'area 10 stub (sur tous les routeurs de l’aire 10)'
          },
          totally_stub: {
            name: 'Totally Stubby Area (Propriétaire Cisco — Table minimale)',
            lsaAllowed: ['LSA 1 (Router)', 'LSA 2 (Network DR)', 'LSA 3 (UNIQUEMENT la route 0.0.0.0/0)'],
            lsaBlocked: ['❌ LSA 3 (Inter-Area)', '❌ LSA 4', '❌ LSA 5', '❌ LSA 7'],
            defRoute: '✅ L’ABR bloque même les routes Inter-Area (LSA 3) et n’injecte qu’une seule route par défaut O*IA 0.0.0.0/0 !',
            cmd: 'Sur l’ABR : area 10 stub no-summary | Sur les routeurs internes : area 10 stub'
          },
          nssa: {
            name: 'NSSA (Not-So-Stubby Area — Autorise un ASBR local avec LSA 7)',
            lsaAllowed: ['LSA 1 (Router)', 'LSA 2 (Network DR)', 'LSA 3 (Summary ABR)', '✅ LSA 7 (NSSA External reconverti en LSA 5 par l’ABR)'],
            lsaBlocked: ['❌ LSA 4', '❌ LSA 5 venant de l’Area 0'],
            defRoute: '⚠️ Route par défaut NON injectée automatiquement (ajouter area 10 nssa default-information-originate -> crée une route O*N2).',
            cmd: 'area 10 nssa'
          },
          totally_nssa: {
            name: 'Totally NSSA (Bloque LSA 3/4/5 mais accepte un ASBR local LSA 7)',
            lsaAllowed: ['LSA 1 & 2', 'LSA 3 (0.0.0.0/0 uniquement)', '✅ LSA 7 (ASBR local traduit en LSA 5 vers Area 0)'],
            lsaBlocked: ['❌ LSA 3 (Inter-Area)', '❌ LSA 4 & LSA 5'],
            defRoute: '✅ L’ABR injecte automatiquement une route par défaut LSA Type 3 (O*IA 0.0.0.0/0).',
            cmd: 'Sur l’ABR : area 10 nssa no-summary | Sur les routeurs internes : area 10 nssa'
          }
        };
        const cur = areas[areaType];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="sim-pill-btn ${areaType === 'standard' ? 'active' : ''}" data-area="standard">Standard Area</button>
              <button type="button" class="sim-pill-btn ${areaType === 'stub' ? 'active' : ''}" data-area="stub">Stub Area</button>
              <button type="button" class="sim-pill-btn ${areaType === 'totally_stub' ? 'active' : ''}" data-area="totally_stub">Totally Stubby</button>
              <button type="button" class="sim-pill-btn ${areaType === 'nssa' ? 'active' : ''}" data-area="nssa">NSSA</button>
              <button type="button" class="sim-pill-btn ${areaType === 'totally_nssa' ? 'active' : ''}" data-area="totally_nssa">Totally NSSA</button>
            </div>

            <div class="sim-nodes-row">
              <div class="sim-node highlight">
                <div class="sim-node-title">🏛️ Area 0 (Backbone)</div>
                <div class="sim-node-sub">LSA 1, 2, 3, 4, 5</div>
              </div>
              <div class="sim-link-pipe up">
                 Filtrage ABR <br/>
                <span style="font-size:0.72rem;">Area Border Router</span>
              </div>
              <div class="sim-node good">
                <div class="sim-node-title">📍 Area 10 (${areaType.toUpperCase()})</div>
                <div class="sim-node-sub">${cur.lsaAllowed.length} types de LSA actifs</div>
              </div>
            </div>

            <div class="sim-result-panel">
              <strong>${cur.name}</strong><br/>
              • <strong>LSA Autorisés dans l'aire</strong> : ${cur.lsaAllowed.map(x => `<span class="score-pill good" style="margin:0.15rem; display:inline-block;">${x}</span>`).join(' ')}<br/>
              • <strong>LSA Bloqués par l'ABR</strong> : ${cur.lsaBlocked.map(x => `<span class="score-pill mid" style="margin:0.15rem; display:inline-block;">${x}</span>`).join(' ')}<br/>
              • <strong>Route par défaut (0.0.0.0/0)</strong> : ${cur.defRoute}<br/>
              • <strong>Commande IOS</strong> : <code>${cur.cmd}</code>
            </div>
          </div>
        `;
        body.querySelectorAll('[data-area]').forEach(b => b.addEventListener('click', () => { areaType = b.dataset.area; renderOspf(); }));
      };

      const renderBgp = () => {
        const steps = [
          { num: 1, name: '1. Weight (Cisco)', rule: 'Le PLUS GRAND gagne (défaut: 32768 local / 0 appris)', scope: 'Local au routeur uniquement (jamais transmis aux voisins BGP)', usage: 'Influencer le trafic SORTANT depuis un routeur précis (neighbor X weight 500).' },
          { num: 2, name: '2. Local Preference', rule: 'Le PLUS GRAND gagne (défaut: 100)', scope: 'Propagé à tous les routeurs iBGP au sein de notre AS', usage: 'Attribut n°1 pour choisir le point de sortie de tout notre AS (trafic SORTANT).' },
          { num: 3, name: '3. Locally Originated', rule: 'Préfère les routes créées localement', scope: 'Local au routeur (network / redistribute > aggregate-address)', usage: 'Privilégie un préfixe injecté par le routeur lui-même.' },
          { num: 4, name: '4. AS_PATH Length', rule: 'Le PLUS COURT gagne (moins d’AS traversés)', scope: 'Well-Known Mandatory — propagé entre tous les AS (eBGP)', usage: 'Allongé artificiellement (AS-Path Prepending) pour influencer le trafic ENTRANT.' },
          { num: 5, name: '5. Origin Code', rule: 'i (IGP) > e (EGP) > ? (Incomplete / Redistribute)', scope: 'Well-Known Mandatory', usage: 'Une route déclarée par la commande network (i) bat une route redistribuée (?).' },
          { num: 6, name: '6. MED (Metric)', rule: 'Le PLUS PETIT gagne (défaut: 0)', scope: 'Optional Non-Transitive — échangé entre 2 AS voisins', usage: 'Indique à un AS voisin par quel lien entrer dans notre AS (trafic ENTRANT).' },
          { num: 7, name: '7. eBGP over iBGP', rule: 'eBGP (AD 20) bat toujours iBGP (AD 200)', scope: 'Protocole externe vs interne', usage: 'Sortir directement de l’AS est préféré au transit interne iBGP.' },
          { num: 8, name: '8. IGP Metric & Router-ID', rule: 'Plus petit coût IGP vers le Next-Hop (puis plus petit RID)', scope: 'Table de routage IGP interne (OSPF/EIGRP)', usage: 'Hot-Potato Routing : rejoindre la porte de sortie BGP la plus proche en coût IGP.' }
        ];
        const cur = steps[bgpStep];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-bottom:1rem;">
              ${steps.map((s, idx) => `<button type="button" class="sim-pill-btn ${bgpStep === idx ? 'active' : ''}" data-bgp="${idx}">${s.name}</button>`).join('')}
            </div>
            <div class="sim-result-panel">
              <div style="font-size:1.05rem; font-weight:700; color:var(--accent); margin-bottom:0.4rem;">Étape ${cur.num} : ${cur.name}</div>
              • <strong>Règle de victoire</strong> : <strong>${cur.rule}</strong><br/>
              • <strong>Portée de l'attribut</strong> : ${cur.scope}<br/>
              • <strong>Application pratique &amp; Examen</strong> : ${cur.usage}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-bgp]').forEach(b => b.addEventListener('click', () => { bgpStep = parseInt(b.dataset.bgp, 10); renderBgp(); }));
      };

      renderOspf();
      container.querySelectorAll('[data-rt-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-rt-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.rtTab === 'ospf') renderOspf();
          else renderBgp();
        });
      });
    }

    // 3. SECURITY SIMULATOR
    if (type === 'security-sim') {
      const body = container.querySelector('#sec-sim-body');
      let l2Feature = 'snooping';

      const renderL2 = () => {
        const info = {
          snooping: {
            title: '1. DHCP Snooping — Construit la Table de Liaison (Binding Database)',
            untrusted: 'Port Client (Untrusted) : Bloque tout message serveur (DHCPOFFER / DHCPACK) provenant d’un pirate (Rogue DHCP). Autorise DHCPDISCOVER / REQUEST.',
            trusted: 'Port Uplink (Trusted) : Autorise les réponses DHCPOFFER / DHCPACK du serveur DHCP légitime et enregistre (MAC + IP + VLAN + Port) dans la Binding Table.'
          },
          dai: {
            title: '2. Dynamic ARP Inspection (DAI) — Bloque l’ARP Poisoning / Man-in-the-Middle',
            untrusted: 'Port Client (Untrusted) : Intercepte chaque paquet ARP et vérifie dans la table DHCP Snooping que l’IP annoncée appartient bien à cette adresse MAC. Sinon : DROP !',
            trusted: 'Port Uplink (Trusted) : Laisse passer les trames ARP vers le routeur/switch cœur sans inspection.'
          },
          ipsg: {
            title: '3. IP Source Guard (IPSG) — Bloque l’Usurpation d’Adresse IP (IP Spoofing)',
            untrusted: 'Port Client (ip verify source) : Crée automatiquement une ACL matérielle qui n’autorise sur ce port que l’adresse IP exacte attribuée par DHCP Snooping.',
            trusted: 'Serveur DHCP / Routeur : Source de vérité du bail IP.'
          }
        };
        const cur = info[l2Feature];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="sim-pill-btn ${l2Feature === 'snooping' ? 'active' : ''}" data-l2="snooping">1. DHCP Snooping</button>
              <button type="button" class="sim-pill-btn ${l2Feature === 'dai' ? 'active' : ''}" data-l2="dai">2. Dynamic ARP Inspection (DAI)</button>
              <button type="button" class="sim-pill-btn ${l2Feature === 'ipsg' ? 'active' : ''}" data-l2="ipsg">3. IP Source Guard (IPSG)</button>
            </div>

            <div class="sim-nodes-row">
              <div class="sim-node bad">
                <div class="sim-node-title">💻 Port Client Gi0/2</div>
                <div class="sim-node-sub">UNTRUSTED (Par défaut)</div>
              </div>
              <div class="sim-node highlight">
                <div class="sim-node-title">🖧 Switch Catalyt L2</div>
                <div class="sim-node-sub">Binding Table (MAC ↔ IP ↔ Port)</div>
              </div>
              <div class="sim-node good">
                <div class="sim-node-title">🏢 Uplink Serveur DHCP Gi0/1</div>
                <div class="sim-node-sub">TRUSTED (ip dhcp snooping trust)</div>
              </div>
            </div>

            <div class="sim-result-panel">
              <strong>${cur.title}</strong><br/>
              • <strong>Comportement sur Port Untrusted (Gi0/2)</strong> : ${cur.untrusted}<br/>
              • <strong>Comportement sur Port Trusted (Gi0/1)</strong> : ${cur.trusted}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-l2]').forEach(b => b.addEventListener('click', () => { l2Feature = b.dataset.l2; renderL2(); }));
      };

      const render8021x = () => {
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div class="sim-nodes-row">
              <div class="sim-node highlight">
                <div class="sim-node-title">💻 Supplicant</div>
                <div class="sim-node-sub">Poste Client (Agent 802.1X)</div>
              </div>
              <div class="sim-link-pipe up">
                EAPOL (Layer 2)<br/>
                <span style="font-size:0.7rem;">EAP over LAN</span>
              </div>
              <div class="sim-node highlight">
                <div class="sim-node-title">🖧 Authenticator</div>
                <div class="sim-node-sub">Switch Cisco / WLC</div>
              </div>
              <div class="sim-link-pipe up">
                RADIUS (UDP 1812)<br/>
                <span style="font-size:0.7rem;">EAP encapsulé dans RADIUS</span>
              </div>
              <div class="sim-node good">
                <div class="sim-node-title">🛡️ Auth Server</div>
                <div class="sim-node-sub">Cisco ISE (RADIUS)</div>
              </div>
            </div>
            <div class="sim-result-panel">
              <strong>Cycle d'accès IEEE 802.1X :</strong><br/>
              1. <strong>Avant authentification</strong> : le port du switch (Authenticator) est en état <em>Unauthorized</em> — seuls les protocoles <strong>EAPOL, CDP et STP</strong> sont autorisés.<br/>
              2. <strong>Échange</strong> : le Switch traduit les trames L2 <strong>EAPOL</strong> du client en paquets L3 <strong>RADIUS (UDP 1812)</strong> vers <strong>Cisco ISE</strong>.<br/>
              3. <strong>Autorisation dynamique</strong> : dès réception du <code>RADIUS Access-Accept</code>, le switch ouvre le port et applique dynamiquement le <strong>VLAN, la dACL (Downloadable ACL) et le tag SGT TrustSec</strong> poussés par ISE !
            </div>
          </div>
        `;
      };

      renderL2();
      container.querySelectorAll('[data-sec-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-sec-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.secTab === 'l2') renderL2();
          else render8021x();
        });
      });
    }

    // 4. VIRTUALIZATION SIMULATOR
    if (type === 'virtualization-sim') {
      const body = container.querySelector('#virt-sim-body');
      let pktMode = 'gre_ipsec';
      let syslogLvl = 4;

      const renderHeaders = () => {
        const modes = {
          ip: {
            label: 'Paquet IPv4 Standard (Sans Tunnel)',
            overhead: '20 octets (MTU Data = 1480)',
            mcast: '✅ Oui (local)',
            enc: '❌ Aucun chiffrement',
            fields: [
              { cls: 'inner-ip', text: 'En-tête IP Original (20B)' },
              { cls: 'payload', text: 'TCP / UDP + Données Applicatives' }
            ]
          },
          gre: {
            label: 'Tunnel GRE (Protocole IP 47)',
            overhead: '+24 octets (20B Outer IP + 4B GRE → MTU = 1476)',
            mcast: '✅ Oui (supporte OSPF, EIGRP, Multicast)',
            enc: '❌ En clair (Aucune confidentialité)',
            fields: [
              { cls: 'outer-ip', text: 'Nouvel En-tête IP Tunnel (20B)' },
              { cls: 'gre', text: 'En-tête GRE (4B • Proto 47)' },
              { cls: 'inner-ip', text: 'En-tête IP Original (20B)' },
              { cls: 'payload', text: 'Payload (OSPF / Données)' }
            ]
          },
          ipsec_tunnel: {
            label: 'IPsec ESP Mode Tunnel (VPN Site-à-Site)',
            overhead: '~50 à 70 octets (Protocole IP 50)',
            mcast: '❌ Unicast uniquement (ne peut pas faire tourner OSPF/EIGRP seul)',
            enc: '✅ Chiffre l’en-tête IP original + les données (AES/GCM)',
            fields: [
              { cls: 'outer-ip', text: 'Nouvel En-tête IP Externe (20B)' },
              { cls: 'esp', text: 'ESP Header (SPI)' },
              { cls: 'inner-ip', text: '🔒 IP Original Chiffré' },
              { cls: 'payload', text: '🔒 Payload Chiffré + ESP Trailer' },
              { cls: 'esp', text: 'ESP Auth (ICV)' }
            ]
          },
          gre_ipsec: {
            label: 'GRE over IPsec (Mode Tunnel — Routage Dynamique + Chiffrement)',
            overhead: '~74 à 90 octets (IP MTU recommandée = 1400, TCP MSS = 1360)',
            mcast: '✅ Oui ! GRE encapsule OSPF/EIGRP, puis IPsec chiffre tout le paquet GRE',
            enc: '✅ Chiffrement complet de l’en-tête GRE, de l’IP interne et des données',
            fields: [
              { cls: 'outer-ip', text: 'En-tête IP Public IPsec (20B)' },
              { cls: 'esp', text: 'ESP Header' },
              { cls: 'gre', text: '🔒 GRE Header (4B)' },
              { cls: 'inner-ip', text: '🔒 IP Interne (20B)' },
              { cls: 'payload', text: '🔒 OSPF / EIGRP / Data' },
              { cls: 'esp', text: 'ESP Trailer & Auth' }
            ]
          }
        };
        const cur = modes[pktMode];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:0.9rem;">
              <button type="button" class="sim-pill-btn ${pktMode === 'ip' ? 'active' : ''}" data-pkt="ip">IPv4 Standard</button>
              <button type="button" class="sim-pill-btn ${pktMode === 'gre' ? 'active' : ''}" data-pkt="gre">Tunnel GRE seul</button>
              <button type="button" class="sim-pill-btn ${pktMode === 'ipsec_tunnel' ? 'active' : ''}" data-pkt="ipsec_tunnel">IPsec Mode Tunnel</button>
              <button type="button" class="sim-pill-btn ${pktMode === 'gre_ipsec' ? 'active' : ''}" data-pkt="gre_ipsec">GRE over IPsec</button>
            </div>

            <div class="packet-bar">
              ${cur.fields.map(f => `<div class="packet-field ${f.cls}">${f.text}</div>`).join('')}
            </div>

            <div class="sim-result-panel">
              <strong>${cur.label}</strong><br/>
              • <strong>Overhead &amp; MTU</strong> : ${cur.overhead}<br/>
              • <strong>Routage Dynamique / Multicast (OSPF, EIGRP)</strong> : ${cur.mcast}<br/>
              • <strong>Sécurité &amp; Chiffrement</strong> : ${cur.enc}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-pkt]').forEach(b => b.addEventListener('click', () => { pktMode = b.dataset.pkt; renderHeaders(); }));
      };

      const renderSyslog = () => {
        const levels = [
          { l: 0, name: 'Emergencies', desc: 'Système inutilisable' },
          { l: 1, name: 'Alerts', desc: 'Action immédiate requise' },
          { l: 2, name: 'Critical', desc: 'Conditions critiques' },
          { l: 3, name: 'Errors', desc: 'Interface tombée (%LINK-3-UPDOWN)' },
          { l: 4, name: 'Warnings', desc: 'Avertissements (Native VLAN mismatch)' },
          { l: 5, name: 'Notifications', desc: 'Line protocol UP/DOWN, config modifiée' },
          { l: 6, name: 'Informational', desc: 'Informations générales' },
          { l: 7, name: 'Debugging', desc: 'Traces de debug détaillées' }
        ];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="font-size:0.86rem; font-weight:600; margin-bottom:0.65rem;">
              Simuler la commande <code>logging trap ${syslogLvl}</code> (${levels[syslogLvl].name}) — cliquez sur un seuil :
            </div>
            <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-bottom:1rem;">
              ${levels.map(x => `<button type="button" class="sim-pill-btn ${syslogLvl === x.l ? 'active' : ''}" data-sys="${x.l}">${x.l} - ${x.name}</button>`).join('')}
            </div>
            <div class="sim-result-panel">
              Avec <code>logging trap ${syslogLvl}</code> (ou <code>logging trap ${levels[syslogLvl].name.toLowerCase()}</code>), le routeur envoie au serveur Syslog <strong>tous les niveaux de 0 jusqu'à ${syslogLvl} inclus</strong> :<br/>
              <div style="margin-top:0.6rem; display:flex; flex-wrap:wrap; gap:0.4rem;">
                ${levels
                  .map(
                    x =>
                      `<span class="score-pill ${x.l <= syslogLvl ? 'good' : 'mid'}">${x.l <= syslogLvl ? '✓ Transmis' : '✗ Ignoré'} : ${x.l} (${x.name})</span>`
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `;
        body.querySelectorAll('[data-sys]').forEach(b => b.addEventListener('click', () => { syslogLvl = parseInt(b.dataset.sys, 10); renderSyslog(); }));
      };

      renderHeaders();
      container.querySelectorAll('[data-virt-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-virt-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.virtTab === 'headers') renderHeaders();
          else renderSyslog();
        });
      });
    }

    // 5. PROGRAMMABILITY SIMULATOR
    if (type === 'programmability-sim') {
      const body = container.querySelector('#prog-sim-body');
      let proto = 'netconf';

      const renderProtocols = () => {
        const specs = {
          netconf: {
            title: 'NETCONF (RFC 6241) — Piloté par Modèles YANG via SSH',
            transport: 'SSH sur TCP Port 830',
            encoding: 'XML uniquement (<rpc>, <rpc-reply>)',
            strengths: 'Supporte les Datastores multiples (<running>, <candidate>, <startup>), le verrouillage (<lock>) et les transactions atomiques sur plusieurs équipements.',
            sample: `<rpc message-id="101" xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">\n  <get-config>\n    <source><running/></source>\n  </get-config>\n</rpc>`
          },
          restconf: {
            title: 'RESTCONF (RFC 8040) — Accès HTTP RESTful aux Modèles YANG',
            transport: 'HTTPS sur TCP Port 443',
            encoding: 'JSON (application/yang-data+json) ou XML (application/yang-data+xml)',
            strengths: 'Idéal pour les scripts Python (requests) et applications Web grâce aux verbes HTTP standard (GET, POST, PUT, PATCH, DELETE).',
            sample: `GET /restconf/data/ietf-interfaces:interfaces/interface=GigabitEthernet1 HTTP/1.1\nHost: 10.1.1.1\nAccept: application/yang-data+json`
          },
          gnmi: {
            title: 'gRPC / gNMI — Model-Driven Streaming Telemetry',
            transport: 'HTTP/2 avec TLS',
            encoding: 'Protocol Buffers (Protobuf binaire ultra-rapide) / JSON',
            strengths: 'Télémétrie temps réel en mode Push (Streaming Periodic ou On-Change), remplace avantageusement le polling SNMP.',
            sample: `gNMI SubscribeRequest {\n  mode: STREAM,\n  subscription: { path: "interfaces/interface[name=Gi1]/state/counters", mode: ON_CHANGE }\n}`
          }
        };
        const cur = specs[proto];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="sim-pill-btn ${proto === 'netconf' ? 'active' : ''}" data-p="netconf">NETCONF (SSH 830)</button>
              <button type="button" class="sim-pill-btn ${proto === 'restconf' ? 'active' : ''}" data-p="restconf">RESTCONF (HTTPS 443)</button>
              <button type="button" class="sim-pill-btn ${proto === 'gnmi' ? 'active' : ''}" data-p="gnmi">gRPC / gNMI (Telemetry)</button>
            </div>
            <div class="sim-result-panel">
              <strong>${cur.title}</strong><br/>
              • <strong>Transport &amp; Port</strong> : <code>${cur.transport}</code><br/>
              • <strong>Encodage des données</strong> : <code>${cur.encoding}</code><br/>
              • <strong>Atout majeur</strong> : ${cur.strengths}
              <div class="exhibit-block exhibit-terminal" style="margin-top:0.75rem; margin-bottom:0;">
                <pre class="exhibit-pre">${escapeHtml(cur.sample)}</pre>
              </div>
            </div>
          </div>
        `;
        body.querySelectorAll('[data-p]').forEach(b => b.addEventListener('click', () => { proto = b.dataset.p; renderProtocols(); }));
      };

      const renderFormats = () => {
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.85rem;">
              <div class="exhibit-block exhibit-terminal" style="margin:0;">
                <div class="exhibit-terminal-bar"><span class="term-dot g"></span><span class="term-label">JSON (Accolades &amp; Crochets)</span></div>
                <pre class="exhibit-pre">{
  "interface": {
    "name": "GigabitEthernet1",
    "enabled": true,
    "ipv4": [
      {
        "ip": "10.1.1.1",
        "prefix": 24
      }
    ]
  }
}</pre>
              </div>
              <div class="exhibit-block exhibit-terminal" style="margin:0;">
                <div class="exhibit-terminal-bar"><span class="term-dot y"></span><span class="term-label">YAML (Indentation &amp; Tirets)</span></div>
                <pre class="exhibit-pre">---
interface:
  name: GigabitEthernet1
  enabled: true
  ipv4:
    - ip: 10.1.1.1
      prefix: 24</pre>
              </div>
              <div class="exhibit-block exhibit-terminal" style="margin:0;">
                <div class="exhibit-terminal-bar"><span class="term-dot r"></span><span class="term-label">XML (Balises &lt;tag&gt;)</span></div>
                <pre class="exhibit-pre">&lt;interface&gt;
  &lt;name&gt;GigabitEthernet1&lt;/name&gt;
  &lt;enabled&gt;true&lt;/enabled&gt;
  &lt;ipv4&gt;
    &lt;ip&gt;10.1.1.1&lt;/ip&gt;
    &lt;prefix&gt;24&lt;/prefix&gt;
  &lt;/ipv4&gt;
&lt;/interface&gt;</pre>
              </div>
            </div>
          </div>
        `;
      };

      renderProtocols();
      container.querySelectorAll('[data-prog-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-prog-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.progTab === 'protocols') renderProtocols();
          else renderFormats();
        });
      });
    }

    // 6. SDN SIMULATOR
    if (type === 'sdn-sim') {
      const body = container.querySelector('#sdn-sim-body');
      let sdaNode = 'cp';
      let sdwanNode = 'vsmart';

      const renderSda = () => {
        const nodes = {
          cp: {
            title: 'Control Plane Node (LISP Map-Server / Map-Resolver)',
            role: 'Maintient la base de données Host Tracking Database qui associe chaque EID (adresse IP/MAC d’un hôte connecté) au RLOC (adresse IP Loopback0 du Fabric Edge Switch où il se trouve). Supprime le besoin d’inondation ARP.'
          },
          edge: {
            title: 'Fabric Edge Node (Switch d’Accès SD-Access)',
            role: 'Fournit une passerelle Anycast Layer 3 sur tous les switches d’accès. Authentifie les hôtes via 802.1X/MAB, enregistre leur EID auprès du Control Plane Node et encapsule le trafic en VXLAN-GPO (UDP 4789).'
          },
          border: {
            title: 'Fabric Border Node (Passerelle Interne / Externe)',
            role: 'Relie la Fabric SD-Access aux réseaux externes (Internet, WAN, Data Center non-Fabric). Exporte et importe les routes entre les VRFs (Virtual Networks) de la Fabric et le monde extérieur.'
          },
          ise: {
            title: 'Policy Plane : Cisco ISE & TrustSec (SGT / SGACL)',
            role: 'Assigne dynamiquement un Scalable Group Tag (SGT 16 bits) à chaque utilisateur/appareil. Le SGT est transporté dans l’en-tête VXLAN pour appliquer les règles SGACL indépendamment de l’adresse IP.'
          }
        };
        const cur = nodes[sdaNode];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="sim-pill-btn ${sdaNode === 'cp' ? 'active' : ''}" data-sda="cp">🧠 Control Plane Node (LISP)</button>
              <button type="button" class="sim-pill-btn ${sdaNode === 'edge' ? 'active' : ''}" data-sda="edge">🖧 Fabric Edge Node (VXLAN)</button>
              <button type="button" class="sim-pill-btn ${sdaNode === 'border' ? 'active' : ''}" data-sda="border">🌐 Fabric Border Node</button>
              <button type="button" class="sim-pill-btn ${sdaNode === 'ise' ? 'active' : ''}" data-sda="ise">🛡️ Cisco ISE (TrustSec SGT)</button>
            </div>
            <div class="sim-result-panel">
              <strong>${cur.title}</strong><br/>
              ${cur.role}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-sda]').forEach(b => b.addEventListener('click', () => { sdaNode = b.dataset.sda; renderSda(); }));
      };

      const renderSdwan = () => {
        const planes = {
          vbond: {
            title: 'Orchestration Plane — Cisco vBond (Validator)',
            proto: 'DTLS / TLS (Nécessite une IP publique)',
            desc: 'Point de rendez-vous initial (Zero-Touch Provisioning). Authentifie les contrôleurs et les routeurs WAN Edge, découvre le NAT et distribue les coordonnées de vManage et vSmart.'
          },
          vmanage: {
            title: 'Management Plane — Cisco vManage (Manager)',
            proto: 'HTTPS REST API / NETCONF / DTLS',
            desc: 'Interface graphique unique (Single Pane of Glass) pour créer les Templates de configuration, visualiser l’état du réseau, gérer les certificats et programmer via API REST.'
          },
          vsmart: {
            title: 'Control Plane — Cisco vSmart (Controller)',
            proto: 'OMP (Overlay Management Protocol) dans un tunnel DTLS/TLS',
            desc: 'Cerveau du SD-WAN. Distribue les routes (vRoutes), les TLOCs, les clés IPsec et les politiques de contrôle/données à tous les WAN Edges. Ne transporte JAMAIS de paquets utilisateurs !'
          },
          cedge: {
            title: 'Data Plane — Routeurs WAN Edge (cEdge / vEdge)',
            proto: 'IPsec + BFD entre sites | OMP vers vSmart',
            desc: 'Achemine le trafic des utilisateurs directement de site à site via des tunnels IPsec, tout en mesurant en continu la qualité des liens (latence, perte, gigue) grâce aux sondes BFD.'
          }
        };
        const cur = planes[sdwanNode];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem;">
              <button type="button" class="sim-pill-btn ${sdwanNode === 'vbond' ? 'active' : ''}" data-sdw="vbond">1. vBond (Orchestration)</button>
              <button type="button" class="sim-pill-btn ${sdwanNode === 'vmanage' ? 'active' : ''}" data-sdw="vmanage">2. vManage (Management)</button>
              <button type="button" class="sim-pill-btn ${sdwanNode === 'vsmart' ? 'active' : ''}" data-sdw="vsmart">3. vSmart (Control / OMP)</button>
              <button type="button" class="sim-pill-btn ${sdwanNode === 'cedge' ? 'active' : ''}" data-sdw="cedge">4. WAN Edge (Data / IPsec)</button>
            </div>
            <div class="sim-result-panel">
              <strong>${cur.title}</strong><br/>
              • <strong>Protocoles</strong> : <code>${cur.proto}</code><br/>
              • <strong>Fonction</strong> : ${cur.desc}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-sdw]').forEach(b => b.addEventListener('click', () => { sdwanNode = b.dataset.sdw; renderSdwan(); }));
      };

      renderSda();
      container.querySelectorAll('[data-sdn-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-sdn-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.sdnTab === 'sda') renderSda();
          else renderSdwan();
        });
      });
    }

    // 7. CCNA 1 SIMULATOR (OSI + SUBNETTING)
    if (type === 'ccna1-sim') {
      const body = container.querySelector('#ccna-sim-body');
      let layerIdx = 2; // Layer 3 default
      let cidr = 26;

      const renderOsi = () => {
        const layers = [
          { num: 7, name: 'Couche 7 — Application', tcpip: 'Application', pdu: 'Données (Data)', addr: 'Noms / URI', proto: 'HTTP, HTTPS, DNS, DHCP, FTP, SSH, SMTP, IMAP, Telnet', role: 'Fournit l’accès aux services réseau aux applications de l’utilisateur.' },
          { num: 6, name: 'Couche 6 — Présentation', tcpip: 'Application', pdu: 'Données (Data)', addr: 'Formats (JPEG, ASCII, JSON, TLS)', proto: 'SSL/TLS, MIME, MPEG, ASCII/UTF-8', role: 'Formatage, compression et chiffrement des données.' },
          { num: 5, name: 'Couche 5 — Session', tcpip: 'Application', pdu: 'Données (Data)', addr: 'Session ID', proto: 'NetBIOS, RPC, SIP', role: 'Établit, gère et termine les sessions entre applications.' },
          { num: 4, name: 'Couche 4 — Transport', tcpip: 'Transport', pdu: 'Segment (TCP) / Datagramme (UDP)', addr: 'Numéros de Ports TCP/UDP (Source & Destination)', proto: 'TCP (fiable, ACK, Window) & UDP (rapide, best-effort)', role: 'Segmentation, multiplexage des conversations et fiabilité de bout-en-bout.' },
          { num: 3, name: 'Couche 3 — Réseau (Network)', tcpip: 'Internet', pdu: 'Paquet (Packet)', addr: 'Adresse IP Logique (IPv4 32 bits / IPv6 128 bits)', proto: 'IPv4, IPv6, ICMP, OSPF, EIGRP • Équipement : Routeur', role: 'Adressage logique et détermination du meilleur chemin (routage) d’un réseau à un autre.' },
          { num: 2, name: 'Couche 2 — Liaison de données (Data Link)', tcpip: 'Accès Réseau (Network Access)', pdu: 'Trame (Frame)', addr: 'Adresse MAC Physique (48 bits / 12 chiffres Hexa)', proto: 'Ethernet 802.3, Wi-Fi 802.11, ARP, VLAN 802.1Q • Équipement : Switch L2', role: 'Livraison locale de la trame sur le même lien physique (MAC Source → MAC Destination) et détection d’erreurs FCS/CRC.' },
          { num: 1, name: 'Couche 1 — Physique', tcpip: 'Accès Réseau (Network Access)', pdu: 'Bits (0 et 1)', addr: 'Signaux Physiques', proto: 'Câbles Cuivre UTP (RJ-45), Fibre Optique, Ondes Radio RF, Hub', role: 'Transmission brute des bits sous forme électrique, lumineuse ou radio sur le support.' }
        ];
        const cur = layers[layerIdx];
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-bottom:1rem;">
              ${layers.map((l, idx) => `<button type="button" class="sim-pill-btn ${layerIdx === idx ? 'active' : ''}" data-osi="${idx}">L${l.num} - ${l.name.split('—')[1].trim()}</button>`).join('')}
            </div>
            <div class="sim-result-panel">
              <div style="font-size:1.05rem; font-weight:700; color:var(--accent); margin-bottom:0.4rem;">${cur.name} (Équivalent TCP/IP : ${cur.tcpip})</div>
              • <strong>Nom de la PDU</strong> : <span class="score-pill good">${cur.pdu}</span><br/>
              • <strong>Type d'adressage</strong> : <strong>${cur.addr}</strong><br/>
              • <strong>Protocoles &amp; Équipements</strong> : ${cur.proto}<br/>
              • <strong>Rôle principal</strong> : ${cur.role}
            </div>
          </div>
        `;
        body.querySelectorAll('[data-osi]').forEach(b => b.addEventListener('click', () => { layerIdx = parseInt(b.dataset.osi, 10); renderOsi(); }));
      };

      const renderSubnet = () => {
        const hostBits = 32 - cidr;
        const totalAddr = Math.pow(2, hostBits);
        const usableHosts = Math.max(0, totalAddr - 2);
        const subnetsInC = Math.pow(2, cidr - 24);
        const lastOctetMask = 256 - totalAddr;
        const binaryOctet = '1'.repeat(cidr - 24) + '0'.repeat(hostBits);
        body.innerHTML = `
          <div class="sim-diagram-stage">
            <div style="font-size:0.86rem; font-weight:600; margin-bottom:0.55rem;">Choisissez un préfixe CIDR pour calculer le sous-réseau sur <code>192.168.10.0/${cidr}</code> :</div>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem;">
              ${[24, 25, 26, 27, 28, 29, 30].map(p => `<button type="button" class="sim-pill-btn ${cidr === p ? 'active' : ''}" data-cidr="${p}">/${p}</button>`).join('')}
            </div>
            <div class="sim-result-panel">
              <strong>Analyse instantanée pour <code>192.168.10.0/${cidr}</code> :</strong><br/>
              • <strong>Masque de sous-réseau décimal</strong> : <code>255.255.255.${lastOctetMask}</code> (Dernier octet binaire : <code>${binaryOctet}</code>)<br/>
              • <strong>Bits empruntés (depuis /24)</strong> : <strong>${cidr - 24} bit(s)</strong> → crée <strong>${subnetsInC} sous-réseau(x)</strong> avec un pas (block size) de <strong>${totalAddr}</strong><br/>
              • <strong>Bits d'hôtes restants (h)</strong> : <strong>${hostBits} bits</strong> → 2<sup>${hostBits}</sup> = ${totalAddr} adresses au total<br/>
              • <strong>Adresses d'hôtes utilisables (2<sup>h</sup> - 2)</strong> : <span class="score-pill good">${usableHosts} hôtes utilisables par sous-réseau</span><br/>
              • <strong>1er sous-réseau</strong> : Réseau = <code>192.168.10.0</code> | 1er hôte = <code>192.168.10.1</code> | Dernier hôte = <code>192.168.10.${totalAddr - 2}</code> | Broadcast = <code>192.168.10.${totalAddr - 1}</code>
            </div>
          </div>
        `;
        body.querySelectorAll('[data-cidr]').forEach(b => b.addEventListener('click', () => { cidr = parseInt(b.dataset.cidr, 10); renderSubnet(); }));
      };

      renderOsi();
      container.querySelectorAll('[data-ccna-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-ccna-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          if (btn.dataset.ccnaTab === 'osi') renderOsi();
          else renderSubnet();
        });
      });
    }

    // 8. CCNP FINAL QUICK REFERENCE SIMULATOR
    if (type === 'ccnp-final-sim') {
      const body = container.querySelector('#final-sim-body');
      let tab = 'ad';
      const renderFinalRef = () => {
        if (tab === 'ad') {
          body.innerHTML = `
            <div class="sim-diagram-stage">
              <div class="study-table-wrap" style="margin-top:0;">
                <table class="study-table">
                  <thead><tr><th>Source de la Route</th><th>Administrative Distance (AD)</th></tr></thead>
                  <tbody>
                    <tr><td>Interface Directement Connectée (Connected)</td><td><strong>0</strong></td></tr>
                    <tr><td>Route Statique (Static Route)</td><td><strong>1</strong></td></tr>
                    <tr><td>eBGP (External BGP)</td><td><strong>20</strong></td></tr>
                    <tr><td>EIGRP Interne (Internal EIGRP)</td><td><strong>90</strong></td></tr>
                    <tr><td>OSPF (Toutes les routes Intra / Inter / Externe)</td><td><strong>110</strong></td></tr>
                    <tr><td>IS-IS</td><td><strong>115</strong></td></tr>
                    <tr><td>RIPv2</td><td><strong>120</strong></td></tr>
                    <tr><td>EIGRP Externe (Redistribué dans EIGRP)</td><td><strong>170</strong></td></tr>
                    <tr><td>iBGP (Internal BGP)</td><td><strong>200</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `;
        } else if (tab === 'mcast') {
          body.innerHTML = `
            <div class="sim-diagram-stage">
              <div class="study-table-wrap" style="margin-top:0;">
                <table class="study-table">
                  <thead><tr><th>Protocole</th><th>Adresse Multicast IPv4</th><th>Adresse Multicast IPv6</th></tr></thead>
                  <tbody>
                    <tr><td>Tous les Hôtes / Nœuds (All Nodes)</td><td><code>224.0.0.1</code></td><td><code>FF02::1</code></td></tr>
                    <tr><td>Tous les Routeurs + HSRPv1</td><td><code>224.0.0.2</code></td><td><code>FF02::2</code></td></tr>
                    <tr><td>OSPF Tous les Routeurs (AllSPFRouters)</td><td><code>224.0.0.5</code></td><td><code>FF02::5</code></td></tr>
                    <tr><td>OSPF DR &amp; BDR uniquement (AllDRouters)</td><td><code>224.0.0.6</code></td><td><code>FF02::6</code></td></tr>
                    <tr><td>RIPv2 / RIPng</td><td><code>224.0.0.9</code></td><td><code>FF02::9</code></td></tr>
                    <tr><td>EIGRP</td><td><code>224.0.0.10</code></td><td><code>FF02::A</code></td></tr>
                    <tr><td>PIMv2</td><td><code>224.0.0.13</code></td><td><code>FF02::D</code></td></tr>
                    <tr><td>VRRP</td><td><code>224.0.0.18</code></td><td><code>FF02::12</code></td></tr>
                    <tr><td>HSRPv2 &amp; GLBP</td><td><code>224.0.0.102</code></td><td><code>FF02::66</code></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `;
        } else {
          body.innerHTML = `
            <div class="sim-diagram-stage">
              <div class="study-table-wrap" style="margin-top:0;">
                <table class="study-table">
                  <thead><tr><th>Protocole / Service</th><th>Transport &amp; Numéro de Port / Protocole IP</th></tr></thead>
                  <tbody>
                    <tr><td>GRE / IPsec ESP / IPsec AH / OSPF / EIGRP / VRRP</td><td>IP Proto <strong>47</strong> (GRE) • <strong>50</strong> (ESP) • <strong>51</strong> (AH) • <strong>89</strong> (OSPF) • <strong>88</strong> (EIGRP) • <strong>112</strong> (VRRP)</td></tr>
                    <tr><td>TACACS+ vs RADIUS</td><td>TACACS+ = <strong>TCP 49</strong> • RADIUS = <strong>UDP 1812 / 1813</strong> (ou 1645 / 1646)</td></tr>
                    <tr><td>BGP / NTP / SNMP / Syslog</td><td>BGP = <strong>TCP 179</strong> • NTP = <strong>UDP 123</strong> • SNMP = <strong>UDP 161/162</strong> • Syslog = <strong>UDP 514</strong></td></tr>
                    <tr><td>IKE (IPsec) / VXLAN / CAPWAP</td><td>IKE = <strong>UDP 500 &amp; 4500</strong> • VXLAN = <strong>UDP 4789</strong> • CAPWAP = <strong>UDP 5246 &amp; 5247</strong></td></tr>
                    <tr><td>NETCONF / RESTCONF</td><td>NETCONF = <strong>TCP 830 (SSH)</strong> • RESTCONF = <strong>TCP 443 (HTTPS)</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `;
        }
      };
      renderFinalRef();
      container.querySelectorAll('[data-final-tab]').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('[data-final-tab]').forEach(x => x.classList.remove('active'));
          btn.classList.add('active');
          tab = btn.dataset.finalTab;
          renderFinalRef();
        });
      });
    }
  }

  function renderStudyGuideHtml(guide) {
    const defsHtml = (guide.definitions || [])
      .map(
        d => `
        <div class="def-card">
          <div class="def-term">🔹 ${escapeHtml(d.term)}</div>
          <p class="def-simple">${escapeHtml(d.simple)}</p>
        </div>
      `
      )
      .join('');

    const sectionsHtml = (guide.sections || [])
      .map(sec => {
        const pointsList = sec.points || sec.bullets || [];
        const bulletsHtml = pointsList.map(b => `<li>${b}</li>`).join('');

        let tableHtml = '';
        if (sec.table) {
          const ths = sec.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
          const trs = sec.table.rows
            .map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`)
            .join('');
          tableHtml = `
            <div class="study-table-wrap">
              <table class="study-table">
                <thead><tr>${ths}</tr></thead>
                <tbody>${trs}</tbody>
              </table>
            </div>
          `;
        }

        const ideaText = sec.idea || sec.summary || '';
        const ideaHtml = ideaText
          ? `<div class="study-idea-box"><strong>💡 L'idée simple :</strong> ${escapeHtml(ideaText)}</div>`
          : '';

        const tipText = sec.tip || sec.examTip || '';
        const tipHtml = tipText
          ? `<div class="study-exam-tip"><strong>⚠️ À retenir pour les questions :</strong> ${escapeHtml(tipText)}</div>`
          : '';

        return `
          <article class="study-section-card" id="${escapeHtml(sec.id)}">
            <span class="course-tag">${escapeHtml(sec.tag)}</span>
            <h3>${escapeHtml(sec.title)}</h3>
            ${ideaHtml}
            <ul class="study-bullets">${bulletsHtml}</ul>
            ${tableHtml}
            ${tipHtml}
          </article>
        `;
      })
      .join('');

    return `
      <div class="study-guide-wrapper">
        <div class="study-hero-banner">
          <span class="course-tag" style="margin-bottom:0.35rem;">${escapeHtml(guide.badge)}</span>
          <h2>${escapeHtml(guide.title)}</h2>
          <p style="margin-bottom:0;">${escapeHtml(guide.intro || guide.subtitle || '')}</p>
        </div>

        ${
          defsHtml
            ? `
              <div class="study-defs-section">
                <h3 class="section-label" style="font-size:1.05rem; color:var(--text-main); margin-bottom:0.85rem;">
                  📖 1. Les Termes Clés Expliqués Simplement (C'est quoi ?)
                </h3>
                <div class="definitions-grid">
                  ${defsHtml}
                </div>
              </div>
            `
            : ''
        }

        <div class="study-essentials-section">
          <h3 class="section-label" style="font-size:1.05rem; color:var(--text-main); margin-bottom:0.85rem;">
            🎯 2. L'Essentiel à Comprendre pour les Questions
          </h3>
          <div style="display:flex; flex-direction:column; gap:1.35rem;">
            ${sectionsHtml}
          </div>
        </div>

        <div class="interactive-box" id="interactive-widget-box">
          <div class="interactive-header">
            <h3 class="interactive-title">⚡ 3. ${escapeHtml(guide.interactiveTitle || 'Schéma Interactif')}</h3>
            <span class="course-tag" style="margin:0;">Interactif • Cliquez pour tester</span>
          </div>
          ${renderInteractiveWidgetHtml(guide.interactiveType)}
        </div>

        <div class="study-callout-box" style="margin-bottom:0;">
          <div>
            <span class="study-callout-badge">Prêt à tester vos connaissances ?</span>
            <h2>Passer aux Quizz et au Mode Examen</h2>
            <p>Entraînez-vous maintenant sur les séries de 10 questions de ce module.</p>
          </div>
          <button type="button" class="btn btn-primary" id="btn-study-to-quizzes">
            🎯 Aller aux Quizz &rarr;
          </button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // VUE 2 : Page du Checkpoint / Cours (Onglet Quizz + Onglet Fiche de Cours)
  // =========================================================================

  async function renderCourseDashboard(courseId, subMode = 'quizzes') {
    state.session = null;
    state.currentCourseId = courseId;

    const catalog = await loadCatalog();
    const courseMeta = catalog.courses.find(c => c.id === courseId);
    const courseData = await loadCourseData(courseId);
    const cProg = getCourseProgress(courseId);
    const studyGuide = window.__STUDY_GUIDES__?.[courseId] || null;
    const activeTab = subMode === 'study' && studyGuide ? 'study' : 'quizzes';

    showView('view-course');

    const categoryId = courseMeta?.categoryId || courseData.categoryId || 'ccnp-v9';
    const categoryName = courseMeta?.categoryName || courseData.categoryName || 'Parcours';

    const chunkSize = courseData.quizChunkSize || 10;
    const totalQuestions = courseData.questions.length;
    const numQuizzes = Math.ceil(totalQuestions / chunkSize);
    const examCount = Math.min(courseData.examModeQuestionCount || 60, totalQuestions);

    const quizCardsHtml = [];
    for (let i = 0; i < numQuizzes; i++) {
      const startIdx = i * chunkSize;
      const endIdx = Math.min(startIdx + chunkSize, totalQuestions);
      const quizKey = `quiz-${i + 1}`;
      const qStat = cProg.quizzes[quizKey];

      let scoreHtml = `<span class="quiz-start-label">Commencer &rarr;</span>`;
      if (qStat) {
        const cls = qStat.bestPercent >= PASSING_PERCENT ? 'good' : 'mid';
        scoreHtml = `<span class="score-pill ${cls}">${qStat.bestScore}/${qStat.total} (${qStat.bestPercent}%)</span>`;
      }

      quizCardsHtml.push(`
        <div class="quiz-card" data-quiz-index="${i}" style="animation-delay: ${i * 0.04}s;">
          <div>
            <h3>Quizz ${i + 1}</h3>
            <div class="quiz-range">Questions ${startIdx + 1} à ${endIdx}</div>
          </div>
          <div class="quiz-card-bottom">
            <span>${endIdx - startIdx} questions</span>
            ${scoreHtml}
          </div>
        </div>
      `);
    }

    const examStat = cProg.examMode;
    const examScoreBadge = examStat
      ? `<span class="score-pill ${examStat.bestPercent >= PASSING_PERCENT ? 'good' : 'mid'}" style="margin-right:0.5rem;">
           ${examStat.bestPercent >= PASSING_PERCENT ? '🏆 Certifié' : 'Meilleur'} : ${examStat.bestScore}/${examStat.total} (${examStat.bestPercent}%)
         </span>`
      : '';

    const studyBannerHtml = studyGuide
      ? `
        <div class="study-callout-box">
          <div>
            <span class="study-callout-badge">📚 Fiche de Cours &amp; Schéma Interactif</span>
            <h2>Comprendre le Cours : ${escapeHtml(studyGuide.title)}</h2>
            <p>${escapeHtml(studyGuide.intro || studyGuide.subtitle || '')}</p>
          </div>
          <button type="button" class="btn btn-secondary" id="btn-open-study-guide" style="border-color: rgba(16, 185, 129, 0.5); color: var(--success);">
            📖 Voir le Cours &amp; Définitions &rarr;
          </button>
        </div>
      `
      : '';

    const quizzesViewHtml = `
      ${studyBannerHtml}

      <div class="exam-box">
        <div>
          <span class="exam-badge">Objectif Certification &bull; ${PASSING_PERCENT}% requis</span>
          <h2>Mode Examen Final (${examCount} questions aléatoires)</h2>
          <p>Tire ${examCount} questions au hasard dans la banque avec ordre et réponses aléatoires.</p>
        </div>
        <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
          ${examScoreBadge}
          <button type="button" class="btn btn-primary" id="btn-launch-exam">
            Lancer l'Examen (${examCount} Q) &rarr;
          </button>
        </div>
      </div>

      <h2 class="section-label">Entraînement par Quizz (${chunkSize} par ${chunkSize})</h2>
      <div class="quizzes-grid">
        ${quizCardsHtml.join('')}
      </div>
    `;

    const container = document.getElementById('course-dashboard-content');
    container.innerHTML = `
      <a href="#/category/${encodeURIComponent(categoryId)}" class="back-link">&larr; Retour à ${escapeHtml(categoryName)}</a>

      <div class="course-top-bar">
        <div class="course-header" style="margin-bottom:0;">
          <span class="course-tag">${escapeHtml(courseData.categoryName || categoryName)} &bull; ${escapeHtml(courseData.courseCode || courseMeta?.code || '')}</span>
          <h1>${escapeHtml(courseData.title)}</h1>
        </div>

        ${
          studyGuide
            ? `
              <div class="course-mode-tabs">
                <button type="button" class="course-mode-tab ${activeTab === 'quizzes' ? 'active' : ''}" id="tab-mode-quizzes">
                  🎯 Quizz &amp; Examen (${totalQuestions} Q)
                </button>
                <button type="button" class="course-mode-tab ${activeTab === 'study' ? 'active' : ''}" id="tab-mode-study">
                  📚 Cours &amp; Schémas Interactifs
                </button>
              </div>
            `
            : ''
        }
      </div>

      ${activeTab === 'study' ? renderStudyGuideHtml(studyGuide) : quizzesViewHtml}
    `;

    document.getElementById('tab-mode-quizzes')?.addEventListener('click', () => {
      goToCourseDashboard(courseId, 'quizzes');
    });

    document.getElementById('tab-mode-study')?.addEventListener('click', () => {
      goToCourseDashboard(courseId, 'study');
    });

    document.getElementById('btn-open-study-guide')?.addEventListener('click', () => {
      goToCourseDashboard(courseId, 'study');
    });

    document.getElementById('btn-study-to-quizzes')?.addEventListener('click', () => {
      goToCourseDashboard(courseId, 'quizzes');
    });

    if (activeTab === 'study' && studyGuide) {
      bindInteractiveWidget(container, studyGuide.interactiveType);
      container.querySelectorAll('[data-scroll-sec]').forEach(btn => {
        btn.addEventListener('click', () => {
          const el = document.getElementById(btn.dataset.scrollSec);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      container.querySelectorAll('.quiz-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.dataset.quizIndex, 10);
          startSession(courseData, { type: 'quiz', quizIndex: idx });
        });
      });

      document.getElementById('btn-launch-exam')?.addEventListener('click', () => {
        startSession(courseData, { type: 'exam' });
      });
    }
  }

  // =========================================================================
  // VUE 3 : Session de Quizz / Examen
  // =========================================================================

  function startSession(courseData, config) {
    const chunkSize = courseData.quizChunkSize || 10;
    let baseQuestions = [];
    let sessionTitle = '';
    let modeKey = '';
    let quizIndex = null;

    if (config.type === 'exam') {
      const count = Math.min(courseData.examModeQuestionCount || 60, courseData.questions.length);
      baseQuestions = shuffleArray(courseData.questions).slice(0, count);
      sessionTitle = `Mode Examen (${count} questions)`;
      modeKey = 'exam';
    } else {
      quizIndex = config.quizIndex || 0;
      const startIdx = quizIndex * chunkSize;
      const endIdx = Math.min(startIdx + chunkSize, courseData.questions.length);
      // Toujours les mêmes 10 questions du Quizz, mais dans un ordre aléatoire
      baseQuestions = shuffleArray(courseData.questions.slice(startIdx, endIdx));
      sessionTitle = `Quizz ${quizIndex + 1}`;
      modeKey = `quiz-${quizIndex + 1}`;
    }

    // Mélange systématique des réponses (et des paires pour les questions d'association)
    const preparedQuestions = baseQuestions.map(q => {
      if (q.questionType === 'matching' && Array.isArray(q.pairs)) {
        const isOrderedSteps = q.pairs.every(p => /^step\s*\d+/i.test(p.prompt));
        const preparedPairs = isOrderedSteps
          ? q.pairs.map(p => ({ ...p }))
          : shuffleArray(q.pairs.map(p => ({ ...p })));
        const choicesPool = shuffleArray([...new Set(q.pairs.map(p => p.answer))]);
        return {
          ...q,
          pairs: preparedPairs,
          matchingChoices: choicesPool
        };
      }
      return {
        ...q,
        options: shuffleArray(q.options.map(o => ({ ...o })))
      };
    });

    state.session = {
      courseId: courseData.id,
      courseTitle: courseData.title,
      type: config.type,
      modeKey,
      quizIndex,
      title: sessionTitle,
      questions: preparedQuestions,
      currentIndex: 0,
      userAnswers: {}, // question.id -> Set(option.id)
      userMatches: {} // question.id -> { pairId: selectedAnswer }
    };

    showView('view-quiz');
    renderQuestion(true);
  }

  function getSelectedSet(questionId) {
    if (!state.session.userAnswers[questionId]) {
      state.session.userAnswers[questionId] = new Set();
    }
    return state.session.userAnswers[questionId];
  }

  function getMatchMap(questionId) {
    if (!state.session.userMatches[questionId]) {
      state.session.userMatches[questionId] = {};
    }
    return state.session.userMatches[questionId];
  }

  function isQuestionAnswered(q) {
    if (q.questionType === 'matching') {
      const mMap = state.session.userMatches[q.id];
      if (!mMap) return false;
      return q.pairs.every(p => Boolean(mMap[p.id]));
    }
    const sel = state.session.userAnswers[q.id];
    return Boolean(sel && sel.size === q.chooseCount);
  }

  function evaluateQuestion(q) {
    if (q.questionType === 'matching') {
      const mMap = state.session.userMatches[q.id] || {};
      return q.pairs.every(p => mMap[p.id] === p.answer);
    }
    const sel = state.session.userAnswers[q.id] || new Set();
    const correctIds = q.options.filter(o => o.isCorrect).map(o => o.id);
    if (sel.size !== correctIds.length) return false;
    return correctIds.every(id => sel.has(id));
  }

  function renderQuestion(animateCard = true) {
    const sess = state.session;
    if (!sess) return;

    const q = sess.questions[sess.currentIndex];
    const total = sess.questions.length;
    const pct = Math.round(((sess.currentIndex + 1) / total) * 100);

    const exhibitsHtml = (q.exhibits || [])
      .map(ex => {
        if (ex.type === 'image') {
          return `
            <div class="exhibit-block exhibit-image">
              <img src="${escapeHtml(ex.src)}" alt="Illustration" class="zoomable-img" />
            </div>
          `;
        }
        return `
          <div class="exhibit-block exhibit-terminal">
            <div class="exhibit-terminal-bar">
              <span class="term-dot r"></span>
              <span class="term-dot y"></span>
              <span class="term-dot g"></span>
              <span class="term-label">${escapeHtml(ex.title || 'Cisco CLI')}</span>
            </div>
            <pre class="exhibit-pre">${formatCliHtml(ex.content)}</pre>
          </div>
        `;
      })
      .join('');

    let hintClass = 'choice-hint';
    let hintText = 'Choisissez 1 réponse';
    let interactionHtml = '';

    if (q.questionType === 'matching') {
      const mMap = getMatchMap(q.id);
      const filledCount = q.pairs.filter(p => Boolean(mMap[p.id])).length;
      hintClass = filledCount === q.pairs.length ? 'choice-hint multi done' : 'choice-hint multi';
      hintText = `Associez chaque élément (${filledCount}/${q.pairs.length})`;

      const rowsHtml = q.pairs
        .map(pair => {
          const currentVal = mMap[pair.id] || '';
          const opts = q.matchingChoices
            .map(
              ans =>
                `<option value="${escapeHtml(ans)}" ${currentVal === ans ? 'selected' : ''}>${escapeHtml(ans)}</option>`
            )
            .join('');
          return `
            <div class="matching-row ${currentVal ? 'filled' : ''}">
              <div class="matching-prompt">${escapeHtml(pair.prompt)}</div>
              <select class="matching-select" data-pair-id="${escapeHtml(pair.id)}">
                <option value="">— Sélectionner —</option>
                ${opts}
              </select>
            </div>
          `;
        })
        .join('');

      interactionHtml = `<div class="matching-list">${rowsHtml}</div>`;
    } else {
      const selectedSet = getSelectedSet(q.id);
      if (q.chooseCount > 1) {
        hintClass = selectedSet.size === q.chooseCount ? 'choice-hint multi done' : 'choice-hint multi';
        hintText = `Choisissez ${q.chooseCount} réponses (${selectedSet.size}/${q.chooseCount})`;
      }

      const shape = q.chooseCount > 1 ? 'checkbox' : 'radio';
      const optionsHtml = q.options
        .map(opt => {
          const isSelected = selectedSet.has(opt.id);
          return `
            <button
              type="button"
              class="option-btn ${isSelected ? 'selected' : ''}"
              data-option-id="${escapeHtml(opt.id)}"
            >
              <span class="option-check ${shape}">&#10003;</span>
              <span>${escapeHtml(opt.text)}</span>
            </button>
          `;
        })
        .join('');

      interactionHtml = `<div class="options-list">${optionsHtml}</div>`;
    }

    const dotsHtml = sess.questions
      .map((item, idx) => {
        const classes = ['dot-btn'];
        if (idx === sess.currentIndex) classes.push('current');
        if (isQuestionAnswered(item)) classes.push('done');
        return `<button type="button" class="${classes.join(' ')}" data-idx="${idx}">${idx + 1}</button>`;
      })
      .join('');

    const container = document.getElementById('quiz-session-content');
    container.innerHTML = `
      <div class="quiz-header">
        <button type="button" class="back-link" id="btn-quit" style="margin:0;">&larr; ${escapeHtml(sess.title)}</button>
        <span>${sess.currentIndex + 1} / ${total}</span>
      </div>

      <div class="progress-line">
        <div class="progress-line-fill" style="width: ${pct}%"></div>
      </div>

      <div class="question-box" style="${animateCard ? '' : 'animation: none;'}">
        <div class="question-step">Question ${sess.currentIndex + 1}</div>
        <h2 class="question-title">${escapeHtml(q.question)}</h2>

        ${exhibitsHtml}

        <div class="${hintClass}">${hintText}</div>

        ${interactionHtml}

        <div class="quiz-footer">
          <button type="button" class="btn btn-secondary" id="btn-prev" ${sess.currentIndex === 0 ? 'disabled' : ''}>
            Précédent
          </button>

          <div class="dots-nav">
            ${dotsHtml}
          </div>

          ${
            sess.currentIndex < total - 1
              ? `<button type="button" class="btn btn-primary" id="btn-next">Suivant &rarr;</button>`
              : `<button type="button" class="btn btn-primary" id="btn-finish">Terminer &check;</button>`
          }
        </div>
      </div>
    `;

    // Clic sur une option classique
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedSet = getSelectedSet(q.id);
        const optId = btn.dataset.optionId;
        if (q.chooseCount === 1) {
          selectedSet.clear();
          selectedSet.add(optId);
        } else {
          if (selectedSet.has(optId)) {
            selectedSet.delete(optId);
          } else if (selectedSet.size < q.chooseCount) {
            selectedSet.add(optId);
          }
        }
        renderQuestion(false);
      });
    });

    // Changement sur un menu déroulant (Matching)
    container.querySelectorAll('.matching-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const mMap = getMatchMap(q.id);
        mMap[sel.dataset.pairId] = sel.value;
        renderQuestion(false);
      });
    });

    container.querySelectorAll('.zoomable-img').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src));
    });

    document.getElementById('btn-prev')?.addEventListener('click', () => {
      if (sess.currentIndex > 0) {
        sess.currentIndex--;
        renderQuestion(true);
      }
    });

    document.getElementById('btn-next')?.addEventListener('click', () => {
      if (sess.currentIndex < total - 1) {
        sess.currentIndex++;
        renderQuestion(true);
      }
    });

    document.getElementById('btn-finish')?.addEventListener('click', () => {
      finishSession();
    });

    container.querySelectorAll('.dot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetIdx = parseInt(btn.dataset.idx, 10);
        if (targetIdx !== sess.currentIndex) {
          sess.currentIndex = targetIdx;
          renderQuestion(true);
        }
      });
    });

    // Retour direct au tableau des Quizz du cours
    document.getElementById('btn-quit').addEventListener('click', () => {
      goToCourseDashboard(sess.courseId);
    });
  }

  // =========================================================================
  // VUE 4 : Résultats & Certification (70%)
  // =========================================================================

  function finishSession() {
    const sess = state.session;
    if (!sess) return;

    const total = sess.questions.length;
    let correctCount = 0;
    sess.questions.forEach(q => {
      if (evaluateQuestion(q)) correctCount++;
    });

    const percent = Math.round((correctCount / total) * 100);
    const isPass = percent >= PASSING_PERCENT;

    recordResult(sess.courseId, sess.modeKey, correctCount, total);
    showView('view-results');

    if (isPass) {
      launchConfetti();
    }

    const courseData = state.examsCache[sess.courseId];
    const chunkSize = courseData?.quizChunkSize || 10;
    const totalQuizzes = courseData ? Math.ceil(courseData.questions.length / chunkSize) : 0;
    const hasNextQuiz = sess.type === 'quiz' && sess.quizIndex !== null && sess.quizIndex + 1 < totalQuizzes;

    let summaryCardClass = isPass ? 'result-summary certified' : 'result-summary failed-exam';
    let badgeIcon = isPass ? '🏆' : '💪';
    let headlineText = '';
    let subText = '';

    if (sess.type === 'exam') {
      if (isPass) {
        headlineText = 'Félicitations, vous avez votre certification !';
        subText = `Vous avez validé ${sess.courseTitle} avec ${percent}% (minimum requis : ${PASSING_PERCENT}%).`;
      } else {
        headlineText = 'Dommage, il faut s’entraîner encore un peu plus !';
        subText = `Vous avez obtenu ${percent}% (${correctCount}/${total}). Il faut atteindre au moins ${PASSING_PERCENT}% pour décrocher la certification.`;
      }
    } else {
      if (isPass) {
        headlineText = `${sess.title} réussi !`;
        subText = `Excellent travail, vous avez obtenu ${percent}% sur cette série.`;
      } else {
        headlineText = 'Dommage, il faut s’entraîner encore un peu plus !';
        subText = `Vous avez obtenu ${percent}% sur ce Quizz (objectif : ${PASSING_PERCENT}%).`;
      }
    }

    const reviewHtml = sess.questions
      .map((q, idx) => {
        const isCorrect = evaluateQuestion(q);

        const exhibitsHtml = (q.exhibits || [])
          .map(ex => {
            if (ex.type === 'image') {
              return `<div class="exhibit-block exhibit-image"><img src="${escapeHtml(ex.src)}" alt="Illustration" class="zoomable-img" /></div>`;
            }
            return `
              <div class="exhibit-block exhibit-terminal">
                <div class="exhibit-terminal-bar">
                  <span class="term-dot r"></span>
                  <span class="term-dot y"></span>
                  <span class="term-dot g"></span>
                  <span class="term-label">${escapeHtml(ex.title || 'Cisco CLI')}</span>
                </div>
                <pre class="exhibit-pre">${formatCliHtml(ex.content)}</pre>
              </div>
            `;
          })
          .join('');

        let detailsHtml = '';

        if (q.questionType === 'matching') {
          const mMap = sess.userMatches[q.id] || {};
          detailsHtml = q.pairs
            .map(p => {
              const userAns = mMap[p.id];
              const ok = userAns === p.answer;
              return `
                <div class="review-opt ${ok ? 'correct' : 'wrong'}">
                  <span>${escapeHtml(p.prompt)}</span>
                  <span class="review-opt-label">
                    ${ok ? `✓ ${escapeHtml(p.answer)}` : `✗ ${escapeHtml(userAns || '—')} (Attendu : ${escapeHtml(p.answer)})`}
                  </span>
                </div>
              `;
            })
            .join('');
        } else {
          const sel = sess.userAnswers[q.id] || new Set();
          detailsHtml = q.options
            .map(opt => {
              const picked = sel.has(opt.id);
              let cls = '';
              let label = '';

              if (opt.isCorrect && picked) {
                cls = 'correct';
                label = '✓ Bonne réponse';
              } else if (opt.isCorrect && !picked) {
                cls = 'correct';
                label = '✓ Bonne réponse (manquée)';
              } else if (!opt.isCorrect && picked) {
                cls = 'wrong';
                label = '✗ Votre choix';
              }

              return `
                <div class="review-opt ${cls}">
                  <span>${escapeHtml(opt.text)}</span>
                  ${label ? `<span class="review-opt-label">${label}</span>` : ''}
                </div>
              `;
            })
            .join('');
        }

        return `
          <div class="review-card">
            <span class="review-status ${isCorrect ? 'ok' : 'ko'}">
              Question ${idx + 1} — ${isCorrect ? 'Correct' : 'Incorrect'}
            </span>
            <h3 class="question-title" style="font-size:1.03rem; margin-bottom:0.9rem;">${escapeHtml(q.question)}</h3>
            ${exhibitsHtml}
            <div class="review-options">${detailsHtml}</div>
            ${q.explanation ? `<div class="review-explanation">${escapeHtml(q.explanation)}</div>` : ''}
          </div>
        `;
      })
      .join('');

    const container = document.getElementById('quiz-results-content');
    container.innerHTML = `
      <div class="${summaryCardClass}">
        <div class="cert-icon-badge ${isPass ? 'pass' : 'fail'}">${badgeIcon}</div>
        <div class="result-score ${isPass ? 'pass' : 'fail'}">${correctCount} / ${total} (${percent}%)</div>
        <h2 class="result-headline">${escapeHtml(headlineText)}</h2>
        <p class="result-sub">${escapeHtml(subText)}</p>
        <div class="result-actions">
          ${
            hasNextQuiz
              ? `<button type="button" class="btn btn-primary" id="btn-next-quiz">Quizz ${sess.quizIndex + 2} &rarr;</button>`
              : ''
          }
          <button type="button" class="btn btn-secondary" id="btn-retry">Recommencer</button>
          <button type="button" class="btn btn-secondary" id="btn-back-to-quizzes">Retour aux Quizz</button>
        </div>
      </div>

      <div class="review-list">
        ${reviewHtml}
      </div>
    `;

    container.querySelectorAll('.zoomable-img').forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src));
    });

    document.getElementById('btn-next-quiz')?.addEventListener('click', () => {
      startSession(courseData, { type: 'quiz', quizIndex: sess.quizIndex + 1 });
    });

    document.getElementById('btn-retry').addEventListener('click', () => {
      startSession(courseData, { type: sess.type, quizIndex: sess.quizIndex });
    });

    document.getElementById('btn-back-to-quizzes').addEventListener('click', () => {
      goToCourseDashboard(sess.courseId);
    });
  }

  // =========================================================================
  // VUE 5 : Demander l'ajout d'un cours (Formulaire + Aperçu des demandes)
  // =========================================================================

  function loadCourseRequests() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_REQUESTS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveCourseRequests(list) {
    try {
      localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(list));
    } catch {
      // Ignore
    }
  }

  function renderRequestView(showSuccessBanner = false) {
    state.session = null;
    showView('view-request');

    const requests = loadCourseRequests();
    const container = document.getElementById('request-course-content');

    const requestsListHtml = requests.length
      ? requests
          .map(
            req => `
            <div class="request-item">
              <div class="request-item-top">
                <div>
                  <span class="course-tag" style="margin-bottom:0; margin-right:0.5rem;">${escapeHtml(req.category)}</span>
                  <span class="request-item-title">${escapeHtml(req.subject)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.65rem;">
                  <span class="request-item-meta">${escapeHtml(req.date)}</span>
                  <button type="button" class="btn-text" data-del-req="${escapeHtml(req.id)}" style="padding:0.2rem 0.45rem; font-size:0.78rem;">
                    Supprimer
                  </button>
                </div>
              </div>
              <div class="request-item-meta">De : <strong>${escapeHtml(req.email)}</strong></div>
              ${req.details ? `<div class="request-item-body">${escapeHtml(req.details)}</div>` : ''}
            </div>
          `
          )
          .join('')
      : `<div class="empty-category">Aucune demande enregistrée pour le moment.</div>`;

    container.innerHTML = `
      <a href="#/" class="back-link">&larr; Retour à l'accueil</a>

      <div class="request-card">
        <h1>Demander l'ajout d'un cours</h1>
        <p>Vous souhaitez réviser un examen ou un module qui n'est pas encore sur le site ? Envoyez votre demande ci-dessous.</p>

        ${
          showSuccessBanner
            ? `<div class="request-toast" style="margin-bottom:1.25rem;">
                 &#10003; Votre demande a bien été enregistrée !
               </div>`
            : ''
        }

        <form class="request-form" id="course-request-form">
          <div class="form-row-grid">
            <div class="form-group">
              <label for="req-email">Votre adresse e-mail *</label>
              <input
                type="email"
                id="req-email"
                class="form-input"
                placeholder="exemple@domaine.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="req-category">Catégorie</label>
              <select id="req-category" class="form-select">
                <option value="CCNA v7">CCNA v7</option>
                <option value="CCNP">CCNP (ENCOR / ENARSI)</option>
                <option value="CyberOps / Sécurité">CyberOps / Sécurité</option>
                <option value="Autre">Autre cours</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="req-subject">Sujet / Titre du cours souhaité *</label>
            <input
              type="text"
              id="req-subject"
              class="form-input"
              placeholder="Ex : CCNA 2 (SRWE v7) — Final Exam, Modules 1–4 Checkpoint..."
              required
            />
          </div>

          <div class="form-group">
            <label for="req-details">Informations complémentaires (lien vers les questions, chapitres, détails...)</label>
            <textarea
              id="req-details"
              class="form-textarea"
              placeholder="Collez ici le lien vers la page des questions (ex: itexamanswers.net/...) ou précisez votre besoin..."
            ></textarea>
          </div>

          <div style="display:flex; justify-content:flex-end; margin-top:0.35rem;">
            <button type="submit" class="btn btn-primary">
              Envoyer la demande &rarr;
            </button>
          </div>
        </form>
      </div>

      <div class="requests-inbox-header">
        <h2 class="section-label" style="margin:0;">Demandes envoyées (${requests.length})</h2>
      </div>
      <div class="requests-list">
        ${requestsListHtml}
      </div>
    `;

    document.getElementById('course-request-form').addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('req-email').value.trim();
      const category = document.getElementById('req-category').value;
      const subject = document.getElementById('req-subject').value.trim();
      const details = document.getElementById('req-details').value.trim();

      if (!email || !subject) return;

      const list = loadCourseRequests();
      list.unshift({
        id: `req_${Date.now()}`,
        email,
        category,
        subject,
        details,
        date: new Date().toLocaleDateString('fr-FR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      });
      saveCourseRequests(list);
      renderRequestView(true);
    });

    container.querySelectorAll('[data-del-req]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.delReq;
        const updated = loadCourseRequests().filter(r => r.id !== id);
        saveCourseRequests(updated);
        renderRequestView(false);
      });
    });
  }

  // =========================================================================
  // Modales & Événements Globaux
  // =========================================================================

  function openLightbox(src) {
    const lb = document.getElementById('image-lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.hidden = false;
  }

  function closeLightbox() {
    document.getElementById('image-lightbox').hidden = true;
  }

  let confirmCallback = null;
  function openConfirmModal(title, message, onConfirm) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    confirmCallback = onConfirm;
    document.getElementById('confirm-modal').hidden = false;
  }

  function closeConfirmModal() {
    document.getElementById('confirm-modal').hidden = true;
    confirmCallback = null;
  }

  function initGlobalEvents() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    document.getElementById('btn-theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY_THEME, next);
    });

    document.getElementById('btn-reset-progress').addEventListener('click', () => {
      openConfirmModal(
        'Réinitialiser les scores ?',
        'Vos scores enregistrés seront remis à zéro.',
        () => {
          localStorage.removeItem(STORAGE_KEY_PROGRESS);
          handleRoute();
        }
      );
    });

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('image-lightbox').addEventListener('click', e => {
      if (e.target.id === 'image-lightbox') closeLightbox();
    });

    document.getElementById('modal-cancel').addEventListener('click', closeConfirmModal);
    document.getElementById('modal-confirm').addEventListener('click', () => {
      const cb = confirmCallback;
      closeConfirmModal();
      if (cb) cb();
    });

    document.getElementById('nav-request-link')?.addEventListener('click', e => {
      if (window.location.hash === '#/request') {
        e.preventDefault();
        renderRequestView(false);
      }
    });

    window.addEventListener('hashchange', handleRoute);
  }

  async function handleRoute() {
    const hash = window.location.hash || '#/';
    try {
      if (hash === '#/request') {
        renderRequestView(false);
      } else if (hash.startsWith('#/category/')) {
        const categoryId = decodeURIComponent(hash.replace('#/category/', '').trim());
        await renderCategoryView(categoryId);
      } else if (hash.startsWith('#/course/')) {
        const raw = hash.replace('#/course/', '').trim();
        if (raw.endsWith('/study')) {
          const courseId = decodeURIComponent(raw.slice(0, -6));
          await renderCourseDashboard(courseId, 'study');
        } else {
          const courseId = decodeURIComponent(raw);
          await renderCourseDashboard(courseId, 'quizzes');
        }
      } else {
        await renderHomeView();
      }
    } catch {
      await renderHomeView();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initGlobalEvents();
    handleRoute();
  });
})();
