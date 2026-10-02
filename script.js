const sections = {
  cities: {
    title: "Города",
    subtitle: "Узнай город по фотографии",
    icon: "🏙️",
    description: "12 городов • 3 страницы",
    pairs: [
      ["paris","Париж","🇫🇷", citySvg("Paris","🗼","#eaf0ff")],
      ["tokyo","Токио","🇯🇵", citySvg("Tokyo","🗼","#fff1f1")],
      ["cairo","Каир","🇪🇬", citySvg("Cairo","🏜️","#fff4df")],
      ["rio","Рио-де-Жанейро","🇧🇷", citySvg("Rio","🌴","#e5f8ef")],
      ["newyork","Нью-Йорк","🇺🇸", citySvg("New York","🗽","#edf1ff")],
      ["london","Лондон","🇬🇧", citySvg("London","🎡","#ffeef0")],
      ["sydney","Сидней","🇦🇺", citySvg("Sydney","🌊","#e8f7ff")],
      ["dubai","Дубай","🇦🇪", citySvg("Dubai","🏙️","#fff2dc")],
      ["rome","Рим","🇮🇹", citySvg("Rome","🏛️","#fff0e6")],
      ["istanbul","Стамбул","🇹🇷", citySvg("Istanbul","🕌","#f0ebff")],
      ["berlin","Берлин","🇩🇪", citySvg("Berlin","🏛️","#eef4e9")],
      ["singapore","Сингапур","🇸🇬", citySvg("Singapore","🌴","#e8f7f3")]
    ]
  },
  signs: {
    title: "Дорожные знаки",
    subtitle: "Узнай значение знака",
    icon: "🚦",
    description: "12 знаков • 3 страницы",
    pairs: [
      ["stop","Стоп","🛑", signSvg("stop")],
      ["yield","Уступи дорогу","⚠️", signSvg("yield")],
      ["noentry","Въезд запрещён","⛔", signSvg("noentry")],
      ["crosswalk","Пешеходный переход","🚸", signSvg("crosswalk")],
      ["speed50","Ограничение 50","🔴", signSvg("speed50")],
      ["noparking","Стоянка запрещена","🚫", signSvg("noparking")],
      ["roundabout","Круговое движение","🔄", signSvg("roundabout")],
      ["oneway","Одностороннее движение","➡️", signSvg("oneway")],
      ["mainroad","Главная дорога","🔶", signSvg("mainroad")],
      ["deadend","Тупик","🚧", signSvg("deadend")],
      ["bike","Велосипедная дорожка","🚲", signSvg("bike")],
      ["school","Дети","⚠️", signSvg("school")]
    ]
  },
  flowers: {
    title: "Цветы",
    subtitle: "Соедини название с цветком",
    icon: "🌸",
    description: "12 цветов • 3 страницы",
    pairs: [
      ["rose","Роза","🌹", flowerSvg("rose")],
      ["tulip","Тюльпан","🌷", flowerSvg("tulip")],
      ["sunflower","Подсолнух","🌻", flowerSvg("sunflower")],
      ["daisy","Ромашка","🌼", flowerSvg("daisy")],
      ["lavender","Лаванда","💜", flowerSvg("lavender")],
      ["orchid","Орхидея","🪻", flowerSvg("orchid")],
      ["poppy","Мак","🌺", flowerSvg("poppy")],
      ["lily","Лилия","🌸", flowerSvg("lily")],
      ["iris","Ирис","💠", flowerSvg("iris")],
      ["peony","Пион","🌸", flowerSvg("peony")],
      ["carnation","Гвоздика","🌺", flowerSvg("carnation")],
      ["chamomile","Ромашка полевая","🌼", flowerSvg("chamomile2")]
    ]
  }
};

const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const sectionsEl = document.getElementById("sections");
const namesColumn = document.getElementById("namesColumn");
const picturesColumn = document.getElementById("picturesColumn");
const nextBtn = document.getElementById("nextBtn");
const livesEl = document.getElementById("lives");
const progressFill = document.getElementById("progressFill");
const statusEl = document.getElementById("status");
const gameTitle = document.getElementById("gameTitle");
const gameSubtitle = document.getElementById("gameSubtitle");
const pageLabel = document.getElementById("pageLabel");
const backBtn = document.getElementById("backBtn");

let currentSection = null;
let pageIndex = 0;
let selectedName = null;
let selectedPicture = null;
let matched = new Set();
let lives = 3;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function showMenu() {
  currentSection = null;
  menuScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  progressFill.style.width = "0%";
  backBtn.setAttribute("aria-label", "Назад");
}

function renderMenu() {
  sectionsEl.innerHTML = "";
  Object.entries(sections).forEach(([key, section]) => {
    const button = document.createElement("button");
    button.className = "section-btn";
    button.innerHTML = `
      <span class="section-icon">${section.icon}</span>
      <span>
        <span class="section-title">${section.title}</span>
        <span class="section-subtitle">${section.description}</span>
      </span>`;
    button.addEventListener("click", () => startSection(key));
    sectionsEl.appendChild(button);
  });
}

function startSection(key) {
  currentSection = sections[key];
  pageIndex = 0;
  menuScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetPage();
}

function currentPairs() {
  return currentSection.pairs.slice(pageIndex * 4, pageIndex * 4 + 4);
}

function resetPage() {
  lives = 3;
  livesEl.textContent = lives;
  matched.clear();
  selectedName = null;
  selectedPicture = null;
  nextBtn.disabled = true;
  nextBtn.textContent = pageIndex === 2 ? "Вернуться к разделам" : "Далее";
  statusEl.textContent = "";
  gameTitle.textContent = "Найди пару";
  gameSubtitle.textContent = currentSection.subtitle;
  pageLabel.textContent = `${currentSection.title} • ${pageIndex + 1} / 3`;
  render();
}

function render() {
  namesColumn.innerHTML = "";
  picturesColumn.innerHTML = "";

  const pairs = currentPairs();

  shuffle(pairs).forEach(pair => {
    const card = document.createElement("button");
    card.className = "card name-card";
    card.dataset.id = pair[0];
    card.innerHTML = `<span class="flag">${pair[2]}</span><span class="name">${pair[1]}</span>`;
    card.addEventListener("click", () => selectCard("name", card));
    namesColumn.appendChild(card);
  });

  shuffle(pairs).forEach(pair => {
    const card = document.createElement("button");
    card.className = "card image-card";
    card.dataset.id = pair[0];
    card.innerHTML = `<div class="picture">${pair[3]}</div>`;
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

  if (selectedName && selectedPicture) checkPair();
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

    if (matched.size === 4) {
      nextBtn.disabled = false;
      statusEl.textContent = pageIndex === 2 ? "Раздел пройден" : "Все 4 пары найдены";
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
      statusEl.textContent = "Жизни закончились — начинаем страницу заново";
      setTimeout(resetPage, 900);
    }
  }

  selectedName = null;
  selectedPicture = null;
}

function updateProgress() {
  const total = pageIndex * 4 + matched.size;
  const percent = (total / 12) * 100;
  progressFill.style.width = `${Math.max(8, percent)}%`;
}

nextBtn.addEventListener("click", () => {
  if (matched.size !== 4) return;

  if (pageIndex < 2) {
    pageIndex++;
    resetPage();
  } else {
    showMenu();
  }
});

backBtn.addEventListener("click", () => {
  if (currentSection) showMenu();
});

function svgBase(bg, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260">
    <rect width="400" height="260" rx="22" fill="${bg}"/>
    ${content}
  </svg>`;
}

function citySvg(label, emoji, bg) {
  return svgBase(bg, `
    <rect y="190" width="400" height="70" fill="#d8dee7"/>
    <rect x="28" y="112" width="62" height="78" rx="5" fill="#9aa7b8"/>
    <rect x="102" y="78" width="64" height="112" rx="5" fill="#7f8da0"/>
    <rect x="180" y="98" width="55" height="92" rx="5" fill="#a8b2bf"/>
    <rect x="249" y="55" width="72" height="135" rx="5" fill="#8996a8"/>
    <rect x="335" y="118" width="40" height="72" rx="5" fill="#a8b2bf"/>
    <text x="200" y="222" text-anchor="middle" font-size="28">${emoji}</text>
    <text x="200" y="38" text-anchor="middle" font-family="Arial" font-size="25" font-weight="700" fill="#202735">${label}</text>
  `);
}

function signSvg(type) {
  const shapes = {
    stop: `<polygon points="145,45 255,45 315,105 315,155 255,215 145,215 85,155 85,105" fill="#e53935" stroke="white" stroke-width="9"/><text x="200" y="143" text-anchor="middle" font-family="Arial" font-size="38" font-weight="900" fill="white">STOP</text>`,
    yield: `<polygon points="200,45 330,215 70,215" fill="white" stroke="#e53935" stroke-width="16"/><polygon points="200,78 287,196 113,196" fill="#f8f9fb"/>`,
    noentry: `<circle cx="200" cy="130" r="95" fill="#e53935"/><rect x="112" y="116" width="176" height="28" rx="8" fill="white"/>`,
    crosswalk: `<polygon points="200,45 325,105 200,215 75,105" fill="#2f80ed"/><circle cx="200" cy="102" r="13" fill="white"/><path d="M200 118v45m0-32l-28 18m28-18l28 18m-28 14l-22 25m22-25l22 25" stroke="white" stroke-width="10" fill="none" stroke-linecap="round"/>`,
    speed50: `<circle cx="200" cy="130" r="92" fill="white" stroke="#e53935" stroke-width="15"/><text x="200" y="148" text-anchor="middle" font-family="Arial" font-size="66" font-weight="900" fill="#202735">50</text>`,
    noparking: `<circle cx="200" cy="130" r="92" fill="#e53935"/><circle cx="200" cy="130" r="63" fill="#2f80ed"/><path d="M155 175L245 85" stroke="white" stroke-width="18"/>`,
    roundabout: `<circle cx="200" cy="130" r="92" fill="#2f80ed"/><path d="M200 75a55 55 0 0 1 47 82l-18-10m18 10l4-23M200 185a55 55 0 0 1-47-82l18 10m-18-10l-4 23" fill="none" stroke="white" stroke-width="13" stroke-linecap="round"/>`,
    oneway: `<rect x="72" y="72" width="256" height="116" rx="8" fill="#2f80ed"/><path d="M105 130h135l-35-30m35 30l-35 30" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    mainroad: `<polygon points="200,35 315,130 200,225 85,130" fill="#f7c948" stroke="#202735" stroke-width="8"/><polygon points="200,60 285,130 200,200 115,130" fill="#fff" />`,
    deadend: `<rect x="95" y="55" width="210" height="150" rx="12" fill="#fff" stroke="#202735" stroke-width="7"/><path d="M130 105h140M200 105v70" stroke="#202735" stroke-width="18"/><path d="M175 150h50" stroke="#202735" stroke-width="12"/>`,
    bike: `<circle cx="200" cy="130" r="92" fill="#2f80ed"/><circle cx="165" cy="155" r="28" fill="none" stroke="white" stroke-width="8"/><circle cx="235" cy="155" r="28" fill="none" stroke="white" stroke-width="8"/><path d="M165 155l30-55 20 55 20-55m-50 0h30m-10 55h30" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    school: `<polygon points="200,42 330,215 70,215" fill="#f7c948" stroke="#202735" stroke-width="8"/><circle cx="177" cy="125" r="12" fill="#202735"/><circle cx="223" cy="125" r="12" fill="#202735"/><path d="M175 145l25 35 25-35M200 150v-45" stroke="#202735" stroke-width="10" fill="none" stroke-linecap="round"/>`
  };
  return svgBase("#eef2f6", shapes[type]);
}

function flowerSvg(type) {
  const colors = {
    rose:"#e5484d", tulip:"#ff6b6b", sunflower:"#f6c945", daisy:"#ffffff",
    lavender:"#9b7ede", orchid:"#c45ac8", poppy:"#ef4444", lily:"#f4f0ff",
    iris:"#7067cf", peony:"#f58ab5", carnation:"#ff6f91", chamomile2:"#fff"
  };
  const c = colors[type] || "#e5484d";
  const center = type === "sunflower" ? "#6b4f2a" : "#f6c945";
  return svgBase("#edf8ee", `
    <path d="M200 245C195 190 200 145 200 110" stroke="#3d8b52" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M200 190C170 170 145 175 130 195C165 202 180 198 200 190" fill="#65b96d"/>
    <path d="M200 170C230 150 255 155 270 178C235 185 220 180 200 170" fill="#65b96d"/>
    ${petals(c, center, type)}
  `);
}

function petals(c, center, type) {
  const n = type === "sunflower" ? 12 : (type === "daisy" || type === "chamomile2" ? 10 : 8);
  let out = "";
  for (let i=0;i<n;i++) {
    const a = i * (360/n);
    out += `<ellipse cx="200" cy="88" rx="${type==="sunflower"?18:25}" ry="${type==="sunflower"?48:40}" fill="${c}" transform="rotate(${a} 200 130)"/>`;
  }
  out += `<circle cx="200" cy="130" r="${type==="sunflower"?30:22}" fill="${center}"/>`;
  if (type === "lily") {
    out += `<path d="M175 130Q200 105 225 130Q200 155 175 130" fill="#f8b4d9" opacity=".8"/>`;
  }
  return out;
}

renderMenu();
showMenu();
