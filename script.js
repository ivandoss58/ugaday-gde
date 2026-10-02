const pairs = [
  {
    id: "paris",
    name: "Париж",
    flag: "🇫🇷",
    image: "images/paris.svg"
  },
  {
    id: "tokyo",
    name: "Токио",
    flag: "🇯🇵",
    image: "images/tokyo.svg"
  },
  {
    id: "cairo",
    name: "Каир",
    flag: "🇪🇬",
    image: "images/cairo.svg"
  },
  {
    id: "rio",
    name: "Рио-де-Жанейро",
    flag: "🇧🇷",
    image: "images/rio.svg"
  }
];

const namesColumn = document.getElementById("namesColumn");
const picturesColumn = document.getElementById("picturesColumn");
const nextBtn = document.getElementById("nextBtn");
const livesEl = document.getElementById("lives");
const progressFill = document.getElementById("progressFill");
const statusEl = document.getElementById("status");

let selectedName = null;
let selectedPicture = null;
let matched = new Set();
let lives = 3;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function render() {
  namesColumn.innerHTML = "";
  picturesColumn.innerHTML = "";

  shuffle(pairs).forEach(pair => {
    const card = document.createElement("button");
    card.className = "card name-card";
    card.dataset.id = pair.id;
    card.innerHTML = `<span class="flag">${pair.flag}</span><span class="name">${pair.name}</span>`;
    card.addEventListener("click", () => selectCard("name", card));
    namesColumn.appendChild(card);
  });

  shuffle(pairs).forEach(pair => {
    const card = document.createElement("button");
    card.className = "card image-card";
    card.dataset.id = pair.id;
    card.innerHTML = `<img src="${pair.image}" alt="Изображение: ${pair.name}">`;
    card.addEventListener("click", () => selectCard("picture", card));
    picturesColumn.appendChild(card);
  });

  updateProgress();
}

function selectCard(type, card) {
  if (matched.has(card.dataset.id)) return;

  if (type === "name") {
    if (selectedName) selectedName.classList.remove("selected");
    selectedName = card;
    card.classList.add("selected");
  } else {
    if (selectedPicture) selectedPicture.classList.remove("selected");
    selectedPicture = card;
    card.classList.add("selected");
  }

  if (selectedName && selectedPicture) {
    checkPair();
  }
}

function checkPair() {
  const nameCard = selectedName;
  const pictureCard = selectedPicture;
  const isCorrect = nameCard.dataset.id === pictureCard.dataset.id;

  nameCard.classList.remove("selected");
  pictureCard.classList.remove("selected");

  if (isCorrect) {
    matched.add(nameCard.dataset.id);
    nameCard.classList.add("correct", "locked");
    pictureCard.classList.add("correct", "locked");

    const check = document.createElement("span");
    check.className = "check";
    check.textContent = "✓";
    pictureCard.appendChild(check);

    nameCard.disabled = true;
    pictureCard.disabled = true;

    statusEl.textContent = "Пара найдена";
    updateProgress();

    if (matched.size === pairs.length) {
      nextBtn.disabled = false;
      statusEl.textContent = "Все пары найдены";
    }
  } else {
    nameCard.classList.add("wrong");
    pictureCard.classList.add("wrong");
    lives--;
    livesEl.textContent = lives;
    statusEl.textContent = "Не совпадает";

    setTimeout(() => {
      nameCard.classList.remove("wrong");
      pictureCard.classList.remove("wrong");
      statusEl.textContent = "";
    }, 550);

    if (lives <= 0) {
      statusEl.textContent = "Жизни закончились — попробуй ещё раз";
      setTimeout(resetGame, 900);
    }
  }

  selectedName = null;
  selectedPicture = null;
}

function updateProgress() {
  const percent = Math.max(0, Math.min(100, (matched.size / pairs.length) * 100));
  progressFill.style.width = `${Math.max(8, percent)}%`;
}

function resetGame() {
  lives = 3;
  livesEl.textContent = lives;
  matched.clear();
  selectedName = null;
  selectedPicture = null;
  nextBtn.disabled = true;
  statusEl.textContent = "";
  render();
}

nextBtn.addEventListener("click", resetGame);
document.querySelector(".close-btn").addEventListener("click", () => {
  statusEl.textContent = "Демо-режим: игру можно продолжить.";
});

render();
