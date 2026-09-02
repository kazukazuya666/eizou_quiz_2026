// =========================================================
// 📝 問題データ（○×・4択・並べ替え の3種類対応）
// =========================================================
const allQuizData = [
  // -------------------------------------------------------
  // 1. ○×問題 (type: "ox")
  // correct は true（○） または false（×）
  // -------------------------------------------------------
  {
    type: "ox",
    question: "太陽は東から昇って西に沈む。",
    correct: true,
    explanation: "地球が西から東へ自転しているため、太陽は東から昇って見えます。"
  },
  {
    type: "ox",
    question: "ペンギンは空を飛ぶことができる鳥類である。",
    correct: false,
    explanation: "ペンギンは鳥類ですが、空を飛ぶことはできません。海を泳ぐことに特化しています。"
  },
  {
    type: "ox",
    question: "富士山は日本で一番高い山である。",
    correct: true,
    explanation: "富士山は標高3,776mで日本一高い山です。"
  },
  {
    type: "ox",
    question: "1年は常に365日である。",
    correct: false,
    explanation: "4年に一度（一部例外あり）うるう年があり、その年は366日になります。"
  },
  {
    type: "ox",
    question: "コアラは水をほとんど飲まなくても生きていける。",
    correct: true,
    explanation: "主食であるユーカリの葉から水分を摂取するため、直接水を飲むことはめったにありません。"
  },

  // -------------------------------------------------------
  // 2. 4択問題 (type: "choice")
  // choices に4つの選択肢配列、correctIndex に正解の番頭（0, 1, 2, 3）
  // -------------------------------------------------------
  {
    type: "choice",
    question: "世界で一番広い面積を持つ国はどこでしょう？",
    choices: ["アメリカ", "中国", "ロシア", "カナダ"],
    correctIndex: 2, // 0:アメリカ, 1:中国, 2:ロシア, 3:カナダ
    explanation: "ロシアは世界最大の面積（約1,710万平方km）を持っています。"
  },
  {
    type: "choice",
    question: "信号機の「進んでもよい」の色は一般的に何色と呼ばれている？",
    choices: ["青", "緑", "水色", "エメラルド"],
    correctIndex: 0,
    explanation: "実際の色は緑に近いですが、日本では昔から「青信号」と呼ばれます。"
  },
  {
    type: "choice",
    question: "元素記号「O」が表す元素は何でしょう？",
    choices: ["金", "水素", "酸素", "炭素"],
    correctIndex: 2,
    explanation: "「O」は酸素（Oxygen）の元素記号です。ちなみに水素は「H」、炭素は「C」です。"
  },
  {
    type: "choice",
    question: "次のうち、実在する都道府県はどれでしょう？",
    choices: ["西京府", "北海県", "香川県", "大坂県"],
    correctIndex: 2,
    explanation: "香川県が実在します。なお「京都府」「北海道」「大阪府」が正しい表記です。"
  },
  {
    type: "choice",
    question: "人間の体の中で一番大きい臓器は何でしょう？",
    choices: ["心臓", "胃", "肺", "肝臓"],
    correctIndex: 3,
    explanation: "肝臓は成人で約1.0〜1.5kgあり、人体で最も重く大きい臓器です。"
  },

  // -------------------------------------------------------
  // 3. 並べ替え問題 (type: "sort")
  // correctOrder に「正しい順番通り」の文字列配列を入れる
  // （画面表示時に自動でシャッフルされます）
  // -------------------------------------------------------
  {
    type: "sort",
    question: "次の言葉を「五十音順（あいうえお順）」に並べ替えてください。",
    correctOrder: ["いぬ", "きじ", "さる", "ねこ"],
    explanation: "「いぬ → きじ → さる → ねこ」の順番が正解です。"
  },
  {
    type: "sort",
    question: "日本の時代を「古い順」に並べ替えてください。",
    correctOrder: ["縄文時代", "平安時代", "江戸時代", "令和"],
    explanation: "縄文時代 → 平安時代 → 江戸時代 → 令和 の順番が正解です。"
  },
  {
    type: "sort",
    question: "太陽系の惑星を「太陽に近い順」に並べ替えてください。",
    correctOrder: ["水星", "金星", "地球", "火星"],
    explanation: "太陽に近い順から「水星 → 金星 → 地球 → 火星」となります。"
  },
  {
    type: "sort",
    question: "単位を「小さい順」に並べ替えてください。",
    correctOrder: ["ミリメートル(mm)", "センチメートル(cm)", "メートル(m)", "キロメートル(km)"],
    explanation: "mm → cm → m → km の順で大きくなります。"
  },
  {
    type: "sort",
    question: "1年の季節を「春から始まる順」に並べ替えてください。",
    correctOrder: ["春", "夏", "秋", "冬"],
    explanation: "春 → 夏 → 秋 → 冬 の順です。"
  }
];

// =========================================================
// ⚙️ プログラム本体
// =========================================================

const QUESTION_LIMIT = 10; // ランダムで出題する問題数
const SCORE_PER_QUESTION = 10;

let currentQuizList = [];
let currentIndex = 0;
let userAnswers = [];

function shuffleArray(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function startQuiz() {
  const shuffled = shuffleArray(allQuizData);
  // 全問題の中から QUESTION_LIMIT 個をランダムで抽出
  currentQuizList = shuffled.slice(0, Math.min(QUESTION_LIMIT, shuffled.length));
  currentIndex = 0;
  userAnswers = [];
  
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuizList[currentIndex];
  
  document.getElementById("question-number").innerText = `第 ${currentIndex + 1} 問 / 全 ${currentQuizList.length} 問 (${SCORE_PER_QUESTION}点)`;
  document.getElementById("question-text").innerText = q.question;
  document.getElementById("feedback").classList.add("hidden");

  const oxContainer = document.getElementById("ox-container");
  const choiceContainer = document.getElementById("choice-container");
  const sortContainer = document.getElementById("sort-container");

  oxContainer.classList.add("hidden");
  choiceContainer.classList.add("hidden");
  sortContainer.classList.add("hidden");

  if (q.type === "ox") {
    oxContainer.classList.remove("hidden");
  } else if (q.type === "choice") {
    choiceContainer.classList.remove("hidden");
    renderChoices(q);
  } else if (q.type === "sort") {
    sortContainer.classList.remove("hidden");
    renderSortList(q);
  }
}

function renderChoices(q) {
  const listEl = document.getElementById("choice-list");
  listEl.innerHTML = "";

  q.choices.forEach((choiceText, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-choice";
    btn.innerText = `${idx + 1}. ${choiceText}`;
    btn.onclick = () => answerChoice(idx);
    listEl.appendChild(btn);
  });
}

function renderSortList(q) {
  const listEl = document.getElementById("sort-list");
  listEl.innerHTML = "";

  const items = shuffleArray(q.correctOrder);
  
  items.forEach((text) => {
    const item = document.createElement("div");
    item.className = "sort-item";
    item.innerText = text;
    item.draggable = true;

    item.addEventListener("dragstart", () => item.classList.add("dragging"));
    item.addEventListener("dragend", () => item.classList.remove("dragging"));

    item.addEventListener("touchstart", handleTouchStart, { passive: false });
    item.addEventListener("touchmove", handleTouchMove, { passive: false });
    item.addEventListener("touchend", handleTouchEnd);

    listEl.appendChild(item);
  });

  listEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    if (!draggingItem) return;
    const siblings = [...listEl.querySelectorAll(".sort-item:not(.dragging)")];
    const nextSibling = siblings.find(sibling => e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2);
    listEl.insertBefore(draggingItem, nextSibling);
  });
}

let touchItem = null;

function handleTouchStart(e) {
  touchItem = e.target.closest(".sort-item");
  if (touchItem) touchItem.classList.add("dragging");
}

function handleTouchMove(e) {
  if (!touchItem) return;
  e.preventDefault();
  const touch = e.touches[0];
  const listEl = document.getElementById("sort-list");
  const siblings = [...listEl.querySelectorAll(".sort-item:not(.dragging)")];
  const nextSibling = siblings.find(sibling => {
    const box = sibling.getBoundingClientRect();
    return touch.clientY <= box.top + box.height / 2;
  });
  listEl.insertBefore(touchItem, nextSibling);
}

function handleTouchEnd() {
  if (touchItem) {
    touchItem.classList.remove("dragging");
    touchItem = null;
  }
}

function answerOX(userChoice) {
  const q = currentQuizList[currentIndex];
  const isCorrect = (userChoice === q.correct);
  saveResult(q, isCorrect, userChoice ? "○" : "×", q.correct ? "○" : "×");
}

function answerChoice(selectedIndex) {
  const q = currentQuizList[currentIndex];
  const isCorrect = (selectedIndex === q.correctIndex);
  saveResult(
    q,
    isCorrect,
    q.choices[selectedIndex],
    q.choices[q.correctIndex]
  );
}

function answerSort() {
  const q = currentQuizList[currentIndex];
  const currentItems = [...document.querySelectorAll("#sort-list .sort-item")].map(el => el.innerText);
  const isCorrect = q.correctOrder.every((val, idx) => val === currentItems[idx]);

  saveResult(
    q,
    isCorrect,
    currentItems.join(" → "),
    q.correctOrder.join(" → ")
  );
}

function saveResult(q, isCorrect, userAnsText, correctAnsText) {
  userAnswers.push({
    question: q.question,
    userAnsText: userAnsText,
    correctAnsText: correctAnsText,
    isCorrect: isCorrect,
    score: isCorrect ? SCORE_PER_QUESTION : 0,
    maxScore: SCORE_PER_QUESTION,
    explanation: q.explanation
  });

  document.getElementById("ox-container").classList.add("hidden");
  document.getElementById("choice-container").classList.add("hidden");
  document.getElementById("sort-container").classList.add("hidden");

  const judgeEl = document.getElementById("judge-result");
  judgeEl.innerText = isCorrect ? "🎉 正解！" : "❌ 不正解…";
  judgeEl.style.color = isCorrect ? "#ff6b6b" : "#4a90e2";

  document.getElementById("explanation-text").innerText = q.explanation;
  document.getElementById("feedback").classList.remove("hidden");
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuizList.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let totalScore = 0;
  let maxPossibleScore = 0;

  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";

  userAnswers.forEach((ans, idx) => {
    totalScore += ans.score;
    maxPossibleScore += ans.maxScore;

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div style="font-weight:bold; margin-bottom:5px;">問${idx + 1}: ${ans.question}</div>
      <div>あなたの回答: <strong>${ans.userAnsText}</strong> (${ans.isCorrect ? "正解" : "不正解"})</div>
      ${!ans.isCorrect ? `<div style="color: #ff6b6b; font-size: 0.9rem;">正解: ${ans.correctAnsText}</div>` : ''}
      <div style="color: #666; font-size: 0.9rem; margin-top: 3px;">💡 解説: ${ans.explanation}</div>
    `;
    reviewList.appendChild(item);
  });

  const percentage = Math.round((totalScore / maxPossibleScore) * 100);
  document.getElementById("score-text").innerText = `${totalScore} / ${maxPossibleScore} 点 (${percentage}%)`;
}

function restartQuiz() {
  startQuiz();
}

startQuiz();