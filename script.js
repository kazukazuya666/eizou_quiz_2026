// =========================================================
// 📝 映像問題データ（○×・4択・並べ替え 各種）
// =========================================================
const allQuizData = [
  // --- 1. ○×問題 ---
  {
    type: "ox",
    question: "スチールを映像卓に入れるとき名前に『サマラ2026_スチール』とした。",
    correct: false,
    explanation: "スチールのファイル名は「数字」「アルファベット」「記号（半角）」しか使うことができない。",
    lament: "これ結構重要だから覚えてね！"
  },
  {
    type: "ox",
    question: "電源を入れる順番は入力機器(カメラ等)、中継機器（映像卓やATEMなど）、出力機器（モニターや録画PC）の順である",
    correct: true,
    explanation: "映像が流れる順番で電源を入れる。カメラが最初でモニターが最後。",
    lament: "最初と最後がわかればあとは勘でも何とかなるかもしれん 同時進行でやってったらもう訳わかんない！"
  },
  {
    type: "ox",
    question: "SDカードのデータは毎回必ず消去（初期化・フォーマット）する",
    correct: true,
    explanation: "カメラごとフォーマットだとか形式を変わるので、毎回初期化設定を行なってください。データの破損や録画されないなどの可能性がある。",
    lament:"カメラやる人はやり方絶対覚えといてね!"
  },
  {
    type: "ox",
    question: "HDMIケーブルはどれだけ長くてもノイズは入らない。",
    correct: false,
    explanation: "長ければ長いほどノイズが入りやすく信号が届かなくなる。SDIは100mのものも存在する。",
    lament:"全部SDIでいいと思うのに何でだろうね？\nSDI太いくて扱いにくいからかな"
  },
  {
    type: "ox",
    question: "スチールを分かりやすいようにフォルダに保存して、映像卓に入れる。",
    correct: false,
    explanation: "スチールはフォルダに入れてしまうと認識されないので、フォルダ外に出して保存する。",
    lament:"これは1年に2回くらいしか使わんからわすれても仕方がない"
  },
  
  // --- 2. 4択問題 ---
  {
    type: "choice",
    question: "映像卓の設定にある『AUX』とは何か",
    correctChoice: "特定の映像を出力できる",
    incorrectChoices: [ "出力映像にエフェクトがつけられる", "音がない映像が送れる", "すべての映像を録画できる", "入力された映像をクリアにする", "映像卓にデータが保存できる"],
    explanation: "通常、出力されるのはマルチビュー（PVW）と選択した映像（PGM）のどちらかが出力されるが、AUXを使うことによって指定した特定の映像だけを固定で出力できる機能。",
    lament:"次のゼミコンでは使うけどやったことないからできるかはわからん!できんかったらごめん..."
  },
  {
    type: "choice",
    question: "QLabを使う時必ずやることはどれか",
    correctChoice: "一番上に黒背景を入れる",
    incorrectChoices: ["映像と音は分けて入れる", "映像の拡張子は.movにする", "映像を500MBまで圧縮する", "フレームレートを統一する", "日本語設定にする"],
    explanation: "黒背景を入れないとPC画面がそのまま出力される可能性がある。拡張子の指定はなく、どんな映像でも扱うことができる。日本語にする設定はないので注意。",
    lament:"何となくで使えるけどやっぱ日本語対応してほしい（ｴｲｺﾞﾑｽﾞｲﾖ）"
  },
  {
    type: "choice",
    question: "暗い場所や照明がある場所だと、光の色が変わって見えるので、光の色味（色温度）を補正して、白いものを正しく白く見せるための設定はどれか",
    correctChoice: "ホワイトバランス",
    incorrectChoices: ["カラーグレーディング", "ISO感度", "F値", "ゼブラパターン", "フォーカスアシスト"],
    explanation: "照明がついている状態で白い部分(ホワイトボードや白い紙)を映しホワイトバランス（WB）を設定すること。周りが明るくなると黄色っぽく見えるようになる。",
    lament:"これやんないと全然見えんくなるからやってね！明かりがあると体調悪いんかってくらい黄色に見える"
  },
  {
    type: "choice",
    question: "HDMIケーブルのHDCPという機能で映像出力に制限がかかった場合に映像卓の機能としてHDCPのON / OFFを切り替えることで治ることがあるがデメリットがあるそれは何か？",
    correctChoice: "SDIでは出力できなくなる",
    incorrectChoices: ["映像がフルHDしか対応できなくなる", "音声が出力できなくなる", "クロマキー（DSK）ができなくなる", "映像にノイズが入るようになる", "AUXで固定映像が出力できなくなる"],
    explanation: "SDIでの出力が止まってしまうので、サマラでは大丈夫だがゼミコンで客席卓を使う場合は使えない。",
    lament:"そんなん言われても一生使うことないかもだからわんなくてもOK!もしかしたらほんとに使う時ないかもなあ"
  },
  {
    type: "choice",
    question: "OBSの注意点はどれか？",
    correctChoice: "フルスクリーンにしない",
    incorrectChoices: ["映像と音声の保存先を分ける", "録画する保存先はデスクトップにする", "映像が入力される前に録画を開始する", "キャンバス解像度は必ずフルHD（1920×1080）にする"],
    explanation: "特にATEM変換で使う場合フルスクリーンにするとタブが変わるため出力する画面が変わってしまいうまく映像が送れなくなる。また、カメラや卓などからの入力映像が来てからOBSを起動しないとソースとして認識されないこともある。",
    lament:"OBS画面が出力されなかったらこれ原因かも多分だけど"
  },
  {
    type: "choice",
    question: "映像班では使用しないケーブルは？",
    correctChoice: "XLRコネクター（キャノン）",
    incorrectChoices: ["HDMIケーブル", "SDIケーブル", "USB C to C", "mini HDMI"],
    explanation: "XLRコネクター、通称キャノンはマイクやスピーカーなど音響機器に使う。",
    lament:"これはさすがに間違えてないよね？わかんなくても、多分消去法で多分できる！"
  },
  {
    type: "choice",
    question: "HDMIケーブルにはHDCPという著作権保護のための機能があるがそれはどんなものか？一番合うもの選んで",
    correctChoice: "著作権保護のため映像と音が出力されなくなる",
    incorrectChoices: ["著作権保護のため映像のみ出力されなくなる", "著作権保護のため音のみ出力されなくなる", "著作権保護のため映像にノイズが入る"],
    explanation: "HDCPは映像や音声のデータがコピーされるのを防ぐための機能。映像と音声が出力されず画面が真っ黒になる。映像も音声も出力されなければHDCPが非対応または映像卓の設定でOFFになっている可能性がある。",
    lament:"こんなん覚えてなくたって何とかなる!はず..."
  },
  {
    type: "choice",
    question: "映像作品の場合必ずある作業をする必要があります、それは何ですか？",
    correctChoice: "マスタリング音源との同期",
    incorrectChoices: ["色味補正", "データ量の圧縮", "アスペクト比を16:9にする", "映像と音声の分離"],
    explanation: "全部やれることではあるけど基本やってあるはず！明らかに比率とかなんかおかしかったら制作者に聞いたほうがいいかも。",
    lament:"マスタリング音源は事前にレコーディングの人に頼んでおこう！"
  },
  // --- 3. 並べ替え問題 ---
  {
    type: "sort",
    question: "動画の画素数（解像度）を「低い順（粗い順）」に並べ替えてください。",
    correctOrder: ["SD", "HD", "フルHD", "4K"],
    explanation: "SD → HD → フルHD → 4K の順で画素数が多くなり、解像度が高くなります。",
    lament:"これは覚えといて損はない！多分どっかで役に立つから"
  },
  {
    type: "sort",
    question: "電源を入れる順番に並べ替えてください。",
    correctOrder: ["カメラ、QLabで使うPC", "コンバーター、TPminiなどの中継機器", "VR-120HDなどの映像卓（必要に応じて変換PC）", "モニター、録画PC、プロジェクター"],
    explanation: "イメージとして川のように上から下に映像が流れていく感じ。最初のカメラと最後のプロジェクターがわかればイメージだけでわかるようになる。",
    lament:"全員覚えてね！やればいつかできるようになる！"
  },
  {
    type: "sort",
    question: "パワポで緑を抜く（クロマキー）をするときにDSKというものを使うが、DSKの設定順に並び替えてください。",
    correctPatterns: [
      ["DSKのsetupを押す", "DSK TypeをChroma Keyにする", "DSK Sourceを変更", "DSKのPGMを押す"],
      ["DSKのsetupを押す", "DSK Sourceを変更", "DSK TypeをChroma Keyにする", "DSKのPGMを押す"]
    ],
    explanation: "２と３は順番はどちらが先でも大丈夫です！",
    lament:"最初は分かりにくいけど、何回かやればすぐ覚えれる！きっと！多分！"
  },
  
];

// =========================================================
// ⚙️ プログラム本体
// =========================================================

const QUESTION_LIMIT = 10;
const SCORE_PER_QUESTION = 10;

let currentQuizList = [];
let currentIndex = 0;
let userAnswers = [];

// タッチ操作用グローバル変数
let touchItem = null;

// 配列をシャッフル（新しい配列を返す）
function shuffleArray(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function startQuiz() {
  const shuffledAll = shuffleArray(allQuizData);
  const selected = shuffledAll.slice(0, Math.min(QUESTION_LIMIT, shuffledAll.length));
  
  currentQuizList = JSON.parse(JSON.stringify(selected));
  
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

// 4択問題の選択肢生成
function renderChoices(q) {
  const listEl = document.getElementById("choice-list");
  listEl.innerHTML = "";

  const shuffledIncorrect = shuffleArray(q.incorrectChoices).slice(0, 3);
  const finalChoices = shuffleArray([q.correctChoice, ...shuffledIncorrect]);

  q.currentChoices = finalChoices;

  finalChoices.forEach((choiceText, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-choice";
    btn.innerText = `${idx + 1}. ${choiceText}`;
    btn.onclick = () => answerChoice(choiceText);
    listEl.appendChild(btn);
  });
}

// 並べ替え問題の選択肢生成
function renderSortList(q) {
  const listEl = document.getElementById("sort-list");
  listEl.innerHTML = "";

  const baseOrder = q.correctPatterns ? q.correctPatterns[0] : q.correctOrder;
  let items = shuffleArray(baseOrder);

  // 初期配置が偶然正解と同じになった場合は再シャッフル
  if (items.length > 1) {
    let loopCount = 0;
    while (isCorrectOrder(q, items) && loopCount < 10) {
      items = shuffleArray(baseOrder);
      loopCount++;
    }
  }

  items.forEach((text) => {
    const item = document.createElement("div");
    item.className = "sort-item";
    item.innerText = text;
    item.draggable = true;

    // マウスドラッグ用イベント
    item.addEventListener("dragstart", () => item.classList.add("dragging"));
    item.addEventListener("dragend", () => item.classList.remove("dragging"));

    // タッチ操作用イベント
    item.addEventListener("touchstart", handleTouchStart, { passive: false });
    item.addEventListener("touchmove", handleTouchMove, { passive: false });
    item.addEventListener("touchend", handleTouchEnd);

    listEl.appendChild(item);
  });

  // マウスドラッグオーバー処理
  listEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    if (!draggingItem) return;
    const siblings = [...listEl.querySelectorAll(".sort-item:not(.dragging)")];
    const nextSibling = siblings.find(sibling => e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2);
    listEl.insertBefore(draggingItem, nextSibling);
  });
}

// スマホタッチ操作イベント処理関数群
function handleTouchStart(e) {
  touchItem = e.currentTarget;
  touchItem.classList.add("dragging");
}

function handleTouchMove(e) {
  if (!touchItem) return;
  e.preventDefault(); // 画面スクロールを防止
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

// 正解チェック補助関数
function isCorrectOrder(q, items) {
  if (q.correctPatterns && Array.isArray(q.correctPatterns)) {
    return q.correctPatterns.some(pattern =>
      pattern.every((val, idx) => val === items[idx])
    );
  } else if (q.correctOrder) {
    return q.correctOrder.every((val, idx) => val === items[idx]);
  }
  return false;
}

// --- 回答処理 ---

function answerOX(userChoice) {
  const q = currentQuizList[currentIndex];
  const isCorrect = (userChoice === q.correct);
  saveResult(q, isCorrect, userChoice ? "○" : "×", q.correct ? "○" : "×");
}

function answerChoice(selectedText) {
  const q = currentQuizList[currentIndex];
  const isCorrect = (selectedText === q.correctChoice);
  saveResult(q, isCorrect, selectedText, q.correctChoice);
}

function answerSort() {
  const q = currentQuizList[currentIndex];
  const currentItems = [...document.querySelectorAll("#sort-list .sort-item")].map(el => el.innerText);

  const isCorrect = isCorrectOrder(q, currentItems);
  const displayCorrectAns = q.correctPatterns ? q.correctPatterns[0].join(" → ") : q.correctOrder.join(" → ");

  saveResult(q, isCorrect, currentItems.join(" → "), displayCorrectAns);
}

function saveResult(q, isCorrect, userAnsText, correctAnsText) {
  userAnswers.push({
    question: q.question,
    userAnsText: userAnsText,
    correctAnsText: correctAnsText,
    isCorrect: isCorrect,
    score: isCorrect ? SCORE_PER_QUESTION : 0,
    maxScore: SCORE_PER_QUESTION,
    explanation: q.explanation,
    lament: q.lament // 嘆き文言も記録
  });

  document.getElementById("ox-container").classList.add("hidden");
  document.getElementById("choice-container").classList.add("hidden");
  document.getElementById("sort-container").classList.add("hidden");

  const judgeEl = document.getElementById("judge-result");
  judgeEl.innerText = isCorrect ? "🎉 正解！" : "❌ 不正解…";
  judgeEl.style.color = isCorrect ? "#ff6b6b" : "#4a90e2";

  document.getElementById("explanation-text").innerText = q.explanation;

  // --- 💡 嘆きの表示処理を追加 ---
  const lamentEl = document.getElementById("lament-text");
  if (q.lament) {
    lamentEl.innerText = q.lament;
    lamentEl.classList.remove("hidden");
  } else {
    lamentEl.classList.add("hidden");
  }

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

// 結果画面を表示する処理
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

    // 嘆きコメントがある場合のみ生成
    const lamentHtml = ans.lament 
      ? `<div style="color: #d93838; font-size: 0.85rem; margin-top: 5px; font-weight: bold;">一言: ${ans.lament}</div>` 
      : "";

    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div style="font-weight:bold; margin-bottom:5px;">問${idx + 1}: ${ans.question}</div>
      <div>あなたの回答: <strong>${ans.userAnsText}</strong> (${ans.isCorrect ? "正解 ⭕" : "不正解 ❌"})</div>
      ${!ans.isCorrect ? `<div style="color: #ff6b6b; font-size: 0.9rem;">正解: ${ans.correctAnsText}</div>` : ''}
      <div style="color: #666; font-size: 0.9rem; margin-top: 3px;">💡 解説: ${ans.explanation}</div>
      ${lamentHtml}
    `;
    reviewList.appendChild(item);
  });

  // 正答率の計算（0除算防止）
  const percentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
  
  // HTMLの id="score-text" の要素に結果を代入
  const scoreEl = document.getElementById("score-text");
  if (scoreEl) {
    scoreEl.innerText = `スコア: ${totalScore} / ${maxPossibleScore} 点 (${percentage}%)`;
  }
}

function restartQuiz() {
  startQuiz();
}

// ページ読み込み時にクイズスタート
window.onload = () => {
  startQuiz();
};