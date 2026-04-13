const teacherEmail = "mrmohamedruby@gmail.com";

const modules = [
  {
    id: "phrasal",
    index: "Module 01",
    title: "Phrasal Verbs Intensive",
    summary:
      "شرح منظم لوحدات come / cut / do / get / give / go مع التركيز على المعنى، الحرف الصحيح، وهل الفعل يقبل object أم لا.",
    skills: ["come across", "cut down on", "do away with", "get over", "give up", "go off"],
    note:
      "التركيز الأساسي هنا يكون على المعنى السياقي؛ لأن نفس الفعل قد يتغير تمامًا بمجرد تغيير حرف الجر.",
    image: "assets/phrasal-come.jpeg",
  },
  {
    id: "pairs",
    index: "Module 02",
    title: "Confusing Pairs & False Friends",
    summary:
      "تفريق عملي بين الكلمات المتشابهة مثل alternate / alternative, among / between, advice / advise, affect / effect.",
    skills: ["actual vs current", "pass vs take", "raise vs rise", "look / see / watch"],
    note:
      "هذا الجزء يقيس الدقة في اختيار الكلمة المناسبة داخل الجملة، وليس معرفة المعنى العام فقط.",
    image: "assets/pairs-false-friends.jpeg",
  },
  {
    id: "work",
    index: "Module 03",
    title: "Employment & Work Vocabulary",
    summary:
      "وحدات الوظائف والعمل: apply for, fill in, attend an interview, commute, get promoted, lay off, retire, hand in notice.",
    skills: ["employment", "working life", "job or work", "office language"],
    note:
      "الجزء ده مهم جدًا لأنه يجمع بين vocabulary وcollocations وصياغات شبه ثابتة تظهر كثيرًا في الامتحان.",
    image: "assets/employment.jpeg",
  },
  {
    id: "grammar",
    index: "Module 04",
    title: "Grammar Fixes",
    summary:
      "تثبيت الفروق الأساسية: and / but / or, during / for / since, do / make, near / nearby / next to, have / pass / spend / take.",
    skills: ["connectors", "time expressions", "verb patterns", "place expressions"],
    note:
      "غالبية الأخطاء هنا تأتي من حفظ ترجمة عربية واحدة لكل كلمة بدل فهم الوظيفة النحوية داخل الجملة.",
    image: "assets/near-nearby.jpeg",
  },
  {
    id: "mistakes",
    index: "Module 05",
    title: "Common Mistake Clinic",
    summary:
      "عيادة أخطاء شائعة مثل accused of, agrees with, alive vs live, as vs like, anything vs nothing, attempt vs intend.",
    skills: ["word class", "prepositions", "logic of meaning", "natural expression"],
    note:
      "هذا الجزء يحاكي مباشرة أسئلة Which one is wrong? وأسئلة التصحيح السريع.",
    image: "assets/phrasal-do-get.jpeg",
  },
  {
    id: "strategy",
    index: "Module 06",
    title: "Exam Strategy & Analysis",
    summary:
      "تعلم كيف تكتشف الخطأ بسرعة: حدد نوع الكلمة، راقب الحرف، افحص collocation، ثم اسأل هل الجملة طبيعية أم مترجمة حرفيًا.",
    skills: ["diagnosis", "exam tactics", "error tracking", "feedback loops"],
    note:
      "الهدف ليس الحل فقط، بل معرفة لماذا أخطأ الطالب وما الذي يجب أن يتدرب عليه بعد ذلك.",
    image: "assets/phrasal-give-go.jpeg",
  },
];

const formats = [
  {
    id: "f1",
    title: "Multiple Choice",
    description:
      "اختيار الكلمة أو العبارة الصحيحة من بين أربع بدائل بنفس طريقة Google Forms والامتحانات المصورة.",
    example: "The secret meeting was held ___ the five board members.",
  },
  {
    id: "f2",
    title: "Choose The Correct Sentence",
    description:
      "تمييز الجملة الطبيعية من الجملة الخاطئة أو المترجمة حرفيًا، خاصة في common mistakes.",
    example: "Which sentence correctly uses “alternative”?",
  },
  {
    id: "f3",
    title: "Gap Filling",
    description:
      "ملء فراغات باستخدام كلمات دقيقة مثل since / for / during أو do / make أو مفردات work.",
    example: "I have lived here ___ the beginning of July.",
  },
  {
    id: "f4",
    title: "Meaning Diagnosis",
    description:
      "اختيار المعنى الصحيح لـ phrasal verbs أو collocations بناءً على السياق وليس الترجمة الحرفية.",
    example: "She decided to give up smoking.",
  },
  {
    id: "f5",
    title: "Error Spotting",
    description:
      "رصد الكلمة الخطأ داخل جملة تبدو صحيحة في الظاهر، وهو من أهم أجزاء التدريب على error analysis.",
    example: "Greta is agree with you.",
  },
];

const gallery = [
  {
    title: "Phrasal Verbs with Come & Cut",
    subtitle: "Vocabulary Pages",
    copy: "صفحات مباشرة من جزء الـ phrasal verbs المستخدمة في بناء شروحات الوحدة الأولى.",
    image: "assets/phrasal-come.jpeg",
  },
  {
    title: "Do / Get / Make Practice",
    subtitle: "Vocabulary Workbook",
    copy: "جزء يوضح نمط الأسئلة القائم على الاختيار بين الكلمات المتشابهة أو الـ phrasal verbs.",
    image: "assets/phrasal-do-get.jpeg",
  },
  {
    title: "Give / Go Review",
    subtitle: "Phrasal Verb Blocks",
    copy: "تمثيل لأسئلة الإكمال والتبديل بين الحروف والمعاني في سياق الجملة.",
    image: "assets/phrasal-give-go.jpeg",
  },
  {
    title: "Confusing Pairs",
    subtitle: "False Friends",
    copy: "مثل pass / take و practice / practise و principle / principal وغيرها من الأزواج المتشابهة.",
    image: "assets/pairs-false-friends.jpeg",
  },
  {
    title: "Employment & Work",
    subtitle: "Topic-Specific Vocabulary",
    copy: "مفردات التوظيف والحياة العملية والوظائف ومشاكل العمل، وهي محور مهم في الاختبار.",
    image: "assets/employment.jpeg",
  },
  {
    title: "Near / Nearby / Next to",
    subtitle: "Grammar Precision",
    copy: "جزء القواعد الشائعة التي تصنع فروقًا كبيرة في الدقة اللغوية داخل الجملة.",
    image: "assets/near-nearby.jpeg",
  },
];

const focusLibrary = {
  phrasal: {
    strength: "يفهم العلاقات بين الفعل والحرف بشكل جيد ويقرأ السياق قبل الاختيار.",
    priority:
      "يحتاج إلى مراجعة phrasal verbs في مجموعات معنوية: recovery, interruption, continuation, surrender.",
  },
  pairs: {
    strength: "يميز بين الكلمات المتقاربة ويلاحظ الفروق الدقيقة في الاستخدام.",
    priority:
      "يراجع confusing pairs على شكل جمل قصيرة يومية بدل حفظ القوائم بدون سياق.",
  },
  work: {
    strength: "لديه رصيد لغوي جيد في وحدات work, employment, office, and career.",
    priority:
      "يحتاج إلى تثبيت collocations الخاصة بالتوظيف والعمل مثل hand in notice, lay off, attend an interview.",
  },
  grammar: {
    strength: "يتعامل بثبات مع الروابط الزمنية وأدوات الربط والاختيارات النحوية الأساسية.",
    priority:
      "يراجع قاعدة الكلمة من حيث الوظيفة: preposition, conjunction, adjective, adverb, or noun.",
  },
  mistakes: {
    strength: "يستطيع اكتشاف الجملة غير الطبيعية ويميز بين الصحيح والمترجم حرفيًا.",
    priority:
      "يركز على common mistakes المرتبطة بحروف الجر والـ word class والمنطق الدلالي للجملة.",
  },
  strategy: {
    strength: "يقرأ السؤال بذكاء ويعرف من أين يبدأ البحث عن الخطأ.",
    priority:
      "يحتاج إلى تدريب أسرع على ترتيب خطوات الحل: word class -> preposition -> collocation -> meaning.",
  },
};

const questions = [
  {
    id: 1,
    section: "phrasal",
    type: "mcq",
    prompt: "Which phrasal verb means 'recover from a shock or illness'?",
    options: ["get over", "get away with", "get by", "get on with"],
    answer: "get over",
    explanation: "In the source material, get over is used for recovery after illness, shock, or difficulty.",
  },
  {
    id: 2,
    section: "phrasal",
    type: "mcq",
    prompt: "The children have come down ___ measles.",
    options: ["with", "to", "for", "by"],
    answer: "with",
    explanation: "come down with is the natural phrasal verb used for catching an illness.",
  },
  {
    id: 3,
    section: "phrasal",
    type: "mcq",
    prompt: "She has decided to give up smoking. The underlined phrasal verb means:",
    options: ["delay", "stop", "hide", "admit"],
    answer: "stop",
    explanation: "give up means stop doing something, especially a habit.",
  },
  {
    id: 4,
    section: "pairs",
    type: "mcq",
    prompt: "The secret meeting was held ___ the five board members.",
    options: ["between", "among", "across", "within"],
    answer: "among",
    explanation: "among is used with three or more people or things.",
  },
  {
    id: 5,
    section: "pairs",
    type: "mcq",
    prompt: "Which sentence correctly uses 'alternative'?",
    options: [
      "He couldn't find an alternative route when the road was closed.",
      "The lights flash in an alternative pattern.",
      "She wears an alternative dress every day.",
      "The team members play in an alternative order.",
    ],
    answer: "He couldn't find an alternative route when the road was closed.",
    explanation: "alternative means another possible choice or option.",
  },
  {
    id: 6,
    section: "pairs",
    type: "text",
    prompt: "Complete the sentence with one word: My grandfather gave me some useful ______.",
    answer: ["advice"],
    explanation: "advice is the noun; advise is the verb.",
    placeholder: "Type one word",
  },
  {
    id: 7,
    section: "work",
    type: "mcq",
    prompt: "Brian filled in the application form and was asked to attend an ______.",
    options: ["interview", "office", "salary", "promotion"],
    answer: "interview",
    explanation: "attend an interview is a fixed expression in the employment unit.",
  },
  {
    id: 8,
    section: "work",
    type: "mcq",
    prompt: "If a company no longer needs workers because it cannot afford them, it may ______ them.",
    options: ["retire", "lay off", "commute", "promote"],
    answer: "lay off",
    explanation: "lay off is used when employees lose their jobs because of business problems.",
  },
  {
    id: 9,
    section: "work",
    type: "mcq",
    prompt: "Choose the best completion: I'm starting a new ______ next week.",
    options: ["work", "job", "careerly", "working"],
    answer: "job",
    explanation: "A single position is a job; work is usually uncountable in this context.",
  },
  {
    id: 10,
    section: "grammar",
    type: "text",
    prompt: "I have lived here ______ the beginning of July.",
    answer: ["since"],
    explanation: "since is used from a point in time in the past until now.",
    placeholder: "Type one word",
  },
  {
    id: 11,
    section: "grammar",
    type: "mcq",
    prompt: "My hotel room was clean ___ uncomfortable.",
    options: ["and", "but", "or", "so"],
    answer: "but",
    explanation: "but joins two contrasting ideas.",
  },
  {
    id: 12,
    section: "grammar",
    type: "mcq",
    prompt: "It ______ me four hours to complete the report.",
    options: ["spent", "passed", "had", "took"],
    answer: "took",
    explanation: "It took me four hours is the correct time-expression pattern.",
  },
  {
    id: 13,
    section: "mistakes",
    type: "mcq",
    prompt: "Which sentence is correct?",
    options: [
      "Only three people were live after the accident.",
      "Only three people were alive after the accident.",
      "Only three people are alive after the accident yesterday.",
      "Only three people alived after the accident.",
    ],
    answer: "Only three people were alive after the accident.",
    explanation: "alive describes living people; live in this context is incorrect.",
  },
  {
    id: 14,
    section: "mistakes",
    type: "mcq",
    prompt: "Choose the correct sentence.",
    options: [
      "She can't see nothing.",
      "She can't see anything.",
      "She doesn't can see anything.",
      "She not can see nothing.",
    ],
    answer: "She can't see anything.",
    explanation: "The source material highlights the problem of double negatives.",
  },
  {
    id: 15,
    section: "mistakes",
    type: "mcq",
    prompt: "This year she'll ______ the climb again.",
    options: ["intend", "attempt", "axis", "alternate"],
    answer: "attempt",
    explanation: "attempt means try; intend means plan.",
  },
  {
    id: 16,
    section: "strategy",
    type: "mcq",
    prompt: "Which step should come first when you solve an error analysis item?",
    options: [
      "Memorize the Arabic translation only",
      "Check the word class and sentence function",
      "Choose the longest option",
      "Ignore the preposition",
    ],
    answer: "Check the word class and sentence function",
    explanation: "The fastest reliable method begins with identifying the grammatical role of the target word.",
  },
  {
    id: 17,
    section: "strategy",
    type: "mcq",
    prompt: "If two answers look similar, the best move is to:",
    options: [
      "guess immediately",
      "translate both literally into Arabic only",
      "check collocation, context, and natural usage",
      "skip all the grammar clues",
    ],
    answer: "check collocation, context, and natural usage",
    explanation: "Error analysis rewards natural usage and collocation awareness.",
  },
  {
    id: 18,
    section: "grammar",
    type: "mcq",
    prompt: "Jasmine sat right ___ me so she could see what I was writing.",
    options: ["near", "nearby", "next to", "nearest"],
    answer: "next to",
    explanation: "next to is used when two people or things are very close to each other.",
  },
];

const state = {
  student: {
    name: "",
    group: "",
    email: "",
  },
  started: false,
  currentIndex: 0,
  answers: {},
  results: null,
};

const elements = {
  moduleGrid: document.getElementById("moduleGrid"),
  formatGrid: document.getElementById("formatGrid"),
  galleryGrid: document.getElementById("galleryGrid"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  studentName: document.getElementById("studentName"),
  studentGroup: document.getElementById("studentGroup"),
  studentEmail: document.getElementById("studentEmail"),
  quizPlaceholder: document.getElementById("quizPlaceholder"),
  quizShell: document.getElementById("quizShell"),
  questionLabel: document.getElementById("questionLabel"),
  progressFraction: document.getElementById("progressFraction"),
  progressFill: document.getElementById("progressFill"),
  questionCard: document.getElementById("questionCard"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  resultsSection: document.getElementById("results"),
  scorePercent: document.getElementById("scorePercent"),
  scoreLabel: document.getElementById("scoreLabel"),
  scoreArc: document.getElementById("scoreArc"),
  studentSummary: document.getElementById("studentSummary"),
  breakdownList: document.getElementById("breakdownList"),
  strengthList: document.getElementById("strengthList"),
  priorityList: document.getElementById("priorityList"),
  teacherReport: document.getElementById("teacherReport"),
  sendReportBtn: document.getElementById("sendReportBtn"),
  copyReportBtn: document.getElementById("copyReportBtn"),
  resetQuizBtn: document.getElementById("resetQuizBtn"),
  teacherEmailLabel: document.getElementById("teacherEmailLabel"),
};

function renderModules() {
  elements.moduleGrid.innerHTML = modules
    .map(
      (module) => `
        <article class="module-card" data-reveal>
          <div class="module-cover">
            <img src="${module.image}" alt="${module.title}" />
          </div>
          <div class="module-content">
            <div class="module-meta">
              <span>${module.index}</span>
            </div>
            <h3>${module.title}</h3>
            <p>${module.summary}</p>
            <div class="tag-row">
              ${module.skills.map((skill) => `<span>${skill}</span>`).join("")}
            </div>
            <div class="module-note">${module.note}</div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFormats() {
  elements.formatGrid.innerHTML = formats
    .map(
      (format, index) => `
        <article class="format-card" data-reveal>
          <div class="format-index">${String(index + 1).padStart(2, "0")}</div>
          <h3>${format.title}</h3>
          <p>${format.description}</p>
          <div class="format-example">${format.example}</div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  elements.galleryGrid.innerHTML = gallery
    .map(
      (item) => `
        <article class="gallery-card" data-reveal>
          <img src="${item.image}" alt="${item.title}" />
          <div class="gallery-copy">
            <span>${item.subtitle}</span>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function getCurrentQuestion() {
  return questions[state.currentIndex];
}

function escapeAttribute(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderQuestion() {
  const question = getCurrentQuestion();
  if (!question) return;

  const storedAnswer = state.answers[question.id] || "";
  elements.questionLabel.textContent = `Question ${state.currentIndex + 1}`;
  elements.progressFraction.textContent = `${state.currentIndex + 1} / ${questions.length}`;
  elements.progressFill.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  elements.prevBtn.disabled = state.currentIndex === 0;
  elements.nextBtn.textContent =
    state.currentIndex === questions.length - 1 ? "Finish Assessment" : "Next";

  let answerMarkup = "";

  if (question.type === "mcq") {
    answerMarkup = `
      <div class="options-grid">
        ${question.options
          .map(
            (option) => `
              <button
                type="button"
                class="option-card ${storedAnswer === option ? "selected" : ""}"
                data-option="${escapeAttribute(option)}"
              >
                ${option}
              </button>
            `
          )
          .join("")}
      </div>
    `;
  } else {
    answerMarkup = `
      <div class="options-grid">
        <input
          class="answer-input"
          type="text"
          id="textAnswer"
          placeholder="${question.placeholder || "Type your answer"}"
          value="${escapeAttribute(storedAnswer)}"
        />
      </div>
    `;
  }

  elements.questionCard.innerHTML = `
    <span class="question-skill">Skill Area: ${question.section}</span>
    <h3>${question.prompt}</h3>
    <p class="question-hint">Style note: this question follows the same exam voice used in the uploaded material.</p>
    ${answerMarkup}
    <div class="answer-feedback">Focus: ${question.explanation}</div>
  `;

  if (question.type === "mcq") {
    elements.questionCard.querySelectorAll(".option-card").forEach((button) => {
      button.addEventListener("click", () => {
        state.answers[question.id] = button.dataset.option;
        renderQuestion();
      });
    });
  } else {
    const input = document.getElementById("textAnswer");
    input.addEventListener("input", (event) => {
      state.answers[question.id] = event.target.value;
    });
  }
}

function startQuiz() {
  state.student.name = elements.studentName.value.trim() || "طالب بدون اسم";
  state.student.group = elements.studentGroup.value.trim() || "Unspecified Group";
  state.student.email = elements.studentEmail.value.trim() || "No student email provided";
  state.started = true;
  state.currentIndex = 0;
  state.answers = {};
  state.results = null;

  elements.quizPlaceholder.classList.add("hidden");
  elements.quizShell.classList.remove("hidden");
  elements.resultsSection.classList.add("hidden");
  renderQuestion();
}

function moveQuestion(direction) {
  const question = getCurrentQuestion();
  if (!question) return;

  if (direction === 1) {
    if (!state.answers[question.id] || !String(state.answers[question.id]).trim()) {
      window.alert("Please answer the current question before moving on.");
      return;
    }

    if (state.currentIndex === questions.length - 1) {
      finishQuiz();
      return;
    }
  }

  state.currentIndex = Math.max(0, Math.min(questions.length - 1, state.currentIndex + direction));
  renderQuestion();
}

function calculateResults() {
  const totals = {};
  const correct = {};
  const missedQuestions = [];

  questions.forEach((question) => {
    totals[question.section] = (totals[question.section] || 0) + 1;
    const rawAnswer = state.answers[question.id];
    const normalized = normalizeAnswer(rawAnswer);
    const pool = Array.isArray(question.answer) ? question.answer : [question.answer];
    const isCorrect = pool.map(normalizeAnswer).includes(normalized);

    if (isCorrect) {
      correct[question.section] = (correct[question.section] || 0) + 1;
    } else {
      missedQuestions.push({
        prompt: question.prompt,
        section: question.section,
        learnerAnswer: rawAnswer || "No answer",
        correctAnswer: Array.isArray(question.answer) ? question.answer.join(" / ") : question.answer,
      });
    }
  });

  const totalCorrect = Object.values(correct).reduce((sum, value) => sum + value, 0);
  const totalScore = Math.round((totalCorrect / questions.length) * 100);

  const categoryScores = Object.keys(totals).map((sectionKey) => {
    const sectionCorrect = correct[sectionKey] || 0;
    const percentage = Math.round((sectionCorrect / totals[sectionKey]) * 100);
    return {
      section: sectionKey,
      percentage,
      label: modules.find((module) => module.id === sectionKey)?.title || sectionKey,
      strength: focusLibrary[sectionKey]?.strength,
      priority: focusLibrary[sectionKey]?.priority,
    };
  });

  const strengths = categoryScores
    .filter((item) => item.percentage >= 75)
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);

  const priorities = categoryScores
    .filter((item) => item.percentage < 75)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 3);

  let band = "Developing";
  if (totalScore >= 85) {
    band = "Excellent Diagnostic Readiness";
  } else if (totalScore >= 70) {
    band = "Strong With Targeted Gaps";
  } else if (totalScore >= 55) {
    band = "Needs Focused Reinforcement";
  }

  return { totalCorrect, totalScore, band, categoryScores, strengths, priorities, missedQuestions };
}

function buildTeacherReport({ totalScore, totalCorrect, band, categoryScores, priorities, missedQuestions }) {
  const now = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date());

  const breakdown = categoryScores.map((item) => `- ${item.label}: ${item.percentage}%`).join("\n");
  const priorityText = (priorities.length
    ? priorities
    : categoryScores.slice().sort((a, b) => a.percentage - b.percentage).slice(0, 3)
  )
    .map((item, index) => `${index + 1}. ${item.label} -> ${item.priority}`)
    .join("\n");

  const missedText = missedQuestions.length
    ? missedQuestions
        .slice(0, 6)
        .map(
          (item, index) =>
            `${index + 1}. [${item.section}] ${item.prompt}\n   Student answer: ${item.learnerAnswer}\n   Correct answer: ${item.correctAnswer}`
        )
        .join("\n\n")
    : "No missed questions. The learner completed the assessment with full accuracy.";

  return [
    "ENGLISH ERROR ANALYSIS DIAGNOSTIC REPORT",
    "========================================",
    `Teacher email: ${teacherEmail}`,
    `Submitted: ${now}`,
    "",
    "STUDENT PROFILE",
    `Name: ${state.student.name}`,
    `Group: ${state.student.group}`,
    `Student Email: ${state.student.email}`,
    "",
    "OVERALL PERFORMANCE",
    `Score: ${totalCorrect} / ${questions.length} (${totalScore}%)`,
    `Band: ${band}`,
    "",
    "CATEGORY BREAKDOWN",
    breakdown,
    "",
    "IMMEDIATE PRIORITIES",
    priorityText,
    "",
    "MISSED QUESTION SNAPSHOT",
    missedText,
    "",
    "RECOMMENDED NEXT STEP",
    "Build a custom follow-up test focused on the lowest categories and recycle the exact error patterns the learner missed.",
  ].join("\n");
}

function renderResults() {
  const { totalCorrect, totalScore, band, categoryScores, strengths, priorities, missedQuestions } =
    state.results;

  elements.scorePercent.textContent = `${totalScore}%`;
  elements.scoreLabel.textContent = band;
  elements.studentSummary.innerHTML = `
    <strong>${state.student.name}</strong>
    <div>Group: ${state.student.group}</div>
    <div>Email: ${state.student.email}</div>
    <div>Score: ${totalCorrect} / ${questions.length}</div>
  `;

  const circleLength = 301.59;
  elements.scoreArc.style.strokeDashoffset = circleLength - (circleLength * totalScore) / 100;

  elements.breakdownList.innerHTML = categoryScores
    .map(
      (item) => `
        <div class="breakdown-item">
          <header>
            <strong>${item.label}</strong>
            <span>${item.percentage}%</span>
          </header>
          <div class="breakdown-meter"><b style="width: ${item.percentage}%"></b></div>
        </div>
      `
    )
    .join("");

  const strengthSource = strengths.length
    ? strengths
    : categoryScores.slice().sort((a, b) => b.percentage - a.percentage).slice(0, 2);
  const prioritySource = priorities.length
    ? priorities
    : categoryScores.slice().sort((a, b) => a.percentage - b.percentage).slice(0, 2);

  elements.strengthList.innerHTML = strengthSource
    .map(
      (item) => `
        <div class="insight-item">
          <strong>${item.label}</strong>
          <div>${item.strength}</div>
        </div>
      `
    )
    .join("");

  elements.priorityList.innerHTML = prioritySource
    .map(
      (item) => `
        <div class="insight-item">
          <strong>${item.label}</strong>
          <div>${item.priority}</div>
        </div>
      `
    )
    .join("");

  elements.teacherReport.textContent = buildTeacherReport({
    totalScore,
    totalCorrect,
    band,
    categoryScores,
    priorities,
    missedQuestions,
  });
}

function finishQuiz() {
  state.results = calculateResults();
  renderResults();
  elements.resultsSection.classList.remove("hidden");
  elements.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openTeacherDraft() {
  if (!state.results) return;

  const subject = encodeURIComponent(
    `Diagnostic Report | ${state.student.name} | ${state.results.totalScore}%`
  );
  const body = encodeURIComponent(elements.teacherReport.textContent);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    teacherEmail
  )}&su=${subject}&body=${body}`;

  const popup = window.open(gmailUrl, "_blank", "noopener,noreferrer");
  if (!popup) {
    window.location.href = `mailto:${teacherEmail}?subject=${subject}&body=${body}`;
  }
}

async function copyTeacherReport() {
  if (!state.results) return;

  try {
    await navigator.clipboard.writeText(elements.teacherReport.textContent);
    window.alert("The report has been copied to the clipboard.");
  } catch (error) {
    window.alert("Copy failed on this browser. Please copy the report manually.");
  }
}

function resetQuiz() {
  state.started = false;
  state.currentIndex = 0;
  state.answers = {};
  state.results = null;

  elements.quizShell.classList.add("hidden");
  elements.quizPlaceholder.classList.remove("hidden");
  elements.resultsSection.classList.add("hidden");
  elements.studentName.value = "";
  elements.studentGroup.value = "";
  elements.studentEmail.value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

function setupCounters() {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.counter);
        let current = 0;
        const step = Math.max(1, Math.round(target / 22));

        const timer = window.setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          element.textContent = current;
        }, 45);

        counterObserver.unobserve(element);
      });
    },
    { threshold: 0.7 }
  );

  document.querySelectorAll("[data-counter]").forEach((node) => counterObserver.observe(node));
}

function bindEvents() {
  elements.startQuizBtn.addEventListener("click", startQuiz);
  elements.prevBtn.addEventListener("click", () => moveQuestion(-1));
  elements.nextBtn.addEventListener("click", () => moveQuestion(1));
  elements.sendReportBtn.addEventListener("click", openTeacherDraft);
  elements.copyReportBtn.addEventListener("click", copyTeacherReport);
  elements.resetQuizBtn.addEventListener("click", resetQuiz);
  elements.teacherEmailLabel.textContent = teacherEmail;
}

function init() {
  renderModules();
  renderFormats();
  renderGallery();
  setupRevealAnimation();
  setupCounters();
  bindEvents();
}

init();
