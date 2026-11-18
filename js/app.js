/**
 * Cisco Exam Prep — Logique Principale (Style Moderne, Épuré & Animé)
 */

(function () {
  'use strict';

  const STORAGE_KEY_PROGRESS = 'netexam_prep_progress_v1';
  const STORAGE_KEY_THEME = 'netexam_prep_theme_v1';
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

  function goToCourseDashboard(courseId) {
    const targetHash = `#/course/${courseId}`;
    if (window.location.hash === targetHash) {
      renderCourseDashboard(courseId);
    } else {
      window.location.hash = targetHash;
    }
  }

  // =========================================================================
  // VUE 1 : Accueil
  // =========================================================================

  async function renderHomeView() {
    state.session = null;
    const catalog = await loadCatalog();
    showView('view-home');

    const tabsEl = document.getElementById('category-tabs');
    const tabs = [
      { id: 'all', name: 'Tous' },
      ...catalog.categories.map(c => ({ id: c.id, name: c.shortName || c.name }))
    ];

    tabsEl.innerHTML = tabs
      .map(
        t => `
        <button type="button" class="category-tab ${state.selectedCategory === t.id ? 'active' : ''}" data-cat="${escapeHtml(t.id)}">
          ${escapeHtml(t.name)}
        </button>
      `
      )
      .join('');

    tabsEl.querySelectorAll('.category-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedCategory = btn.dataset.cat;
        renderHomeView();
      });
    });

    const courses = catalog.courses.filter(
      c => state.selectedCategory === 'all' || c.categoryId === state.selectedCategory
    );

    const gridEl = document.getElementById('courses-grid');
    if (courses.length === 0) {
      gridEl.innerHTML = `<div class="empty-category">Aucun cours dans cette catégorie pour le moment.</div>`;
      return;
    }

    gridEl.innerHTML = courses
      .map((course, idx) => {
        const quizCount = Math.ceil(course.totalQuestions / (course.quizChunkSize || 10));
        const cProg = getCourseProgress(course.id);
        const certBadge =
          cProg.examMode && cProg.examMode.bestPercent >= PASSING_PERCENT
            ? `<span class="score-pill good" style="margin-left:0.5rem;">🏆 ${cProg.examMode.bestPercent}%</span>`
            : '';

        return `
          <article class="course-card" data-course-id="${escapeHtml(course.id)}" style="animation-delay: ${idx * 0.06}s;">
            <div>
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <span class="course-tag">${escapeHtml(course.categoryName)} &bull; ${escapeHtml(course.code || '')}</span>
                ${certBadge}
              </div>
              <h3>${escapeHtml(course.title)}</h3>
              <p class="course-sub">${course.totalQuestions} questions &bull; ${quizCount} Quizz &bull; Mode Examen</p>
            </div>
            <div class="course-card-bottom">
              <span>Accéder aux Quizz</span>
              <span class="course-arrow">&rarr;</span>
            </div>
          </article>
        `;
      })
      .join('');

    gridEl.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('click', () => {
        goToCourseDashboard(card.dataset.courseId);
      });
    });
  }

  // =========================================================================
  // VUE 2 : Page du Cours (Mode Examen + Quizz 1, 2, 3...)
  // =========================================================================

  async function renderCourseDashboard(courseId) {
    state.session = null;
    state.currentCourseId = courseId;

    const courseData = await loadCourseData(courseId);
    const cProg = getCourseProgress(courseId);

    showView('view-course');

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

    const container = document.getElementById('course-dashboard-content');
    container.innerHTML = `
      <a href="#/" class="back-link">&larr; Retour à l'accueil</a>

      <div class="course-header">
        <h1>${escapeHtml(courseData.title)}</h1>
      </div>

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

    container.querySelectorAll('.quiz-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.quizIndex, 10);
        startSession(courseData, { type: 'quiz', quizIndex: idx });
      });
    });

    document.getElementById('btn-launch-exam').addEventListener('click', () => {
      startSession(courseData, { type: 'exam' });
    });
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
        const choicesPool = shuffleArray(q.pairs.map(p => p.answer));
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

    window.addEventListener('hashchange', handleRoute);
  }

  async function handleRoute() {
    const hash = window.location.hash || '#/';
    try {
      if (hash.startsWith('#/course/')) {
        const courseId = decodeURIComponent(hash.replace('#/course/', '').trim());
        await renderCourseDashboard(courseId);
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
