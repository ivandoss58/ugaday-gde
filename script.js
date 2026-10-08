/*
  ВОПРОСЫ - ОТВЕТЫ
  Данные игры находятся здесь.

  Формат пары:
  [ID, "Название", "путь-к-изображению"]

  Например:
  ["paris", "Париж", "images/cities/paris.jpg"]

  Чтобы заменить картинку, просто измени последний элемент.
*/

const sections = {
  mashrooms: {
    title: "Карта № 1. ГРИБЫ",
    subtitle: "Соедини название с изображением",
    description: "16 грибов • 4 страницы",
    pairs: [
      ["podberiozovik", "Подберёзовик", "images/mashrooms/podberiozovik.jpeg"],
      ["belygrib", "Белый гриб, или боровик", "images/mashrooms/belygrib.jpg"],
      ["podosinovik", "Подосиновик", "images/mashrooms/podosinovik.jpg"],
      ["opionok", "Опёнок", "images/mashrooms/opionok.jpg"],
  
      ["muhomor", "Мухомор (ядовит)", "images/mashrooms/muhomor.jpg"],
      ["smorchok", "Сморчок", "images/mashrooms/smorchok.jpg"],
      ["shampinion", "Шампиньон", "images/mashrooms/shampinion.jpeg"],
      ["lisichka", "Лисичка", "images/mashrooms/lisichka.jpg"],
  
      ["volnushka", "Волнушка", "images/mashrooms/volnushka.jpg"],
      ["rygik", "Рыжик", "images/mashrooms/rygik.jpg"],
      ["maslionok", "Маслёнок", "images/mashrooms/maslionok.jpg"],
      ["strochok", "Строчок", "images/mashrooms/strochok.jpg"]
      
      ["syroezhka", "Сыроежка", "images/mashrooms/syroezhka.jpeg"],
      ["lozhnyopionok", "Ложный опёнок (ядовит)", "images/mashrooms/lozhnyopionok.jpeg"],
      ["poddubovik", "Поддубовик", "images/mashrooms/poddubovik.jpeg"],
      ["poganka", "Бледная поганка (ядовита)", "images/mashrooms/poganka.jpeg"]
    ]
  },
  
  trees: {
    title: "Карта № 2. ДЕРЕВЬЯ",
    subtitle: "Соедини название с изображением",
    description: "16 деревьев • 4 страницы",
    pairs: [
      ["paris", "Париж", "🇫🇷", "images/cities/paris.jpg"],
      ["tokyo", "Токио", "🇯🇵", "images/cities/tokyo.jpg"],
      ["cairo", "Каир", "🇪🇬", "images/cities/cairo.jpg"],
      ["rio", "Рио-де-Жанейро", "🇧🇷", "images/cities/rio.jpg"],

      ["newyork", "Нью-Йорк", "🇺🇸", "images/cities/newyork.jpg"],
      ["london", "Лондон", "🇬🇧", "images/cities/london.jpg"],
      ["sydney", "Сидней", "🇦🇺", "images/cities/sydney.jpg"],
      ["dubai", "Дубай", "🇦🇪", "images/cities/dubai.jpg"],

      ["rome", "Рим", "🇮🇹", "images/cities/rome.jpg"],
      ["istanbul", "Стамбул", "🇹🇷", "images/cities/istanbul.jpg"],
      ["berlin", "Берлин", "🇩🇪", "images/cities/berlin.jpg"],
      ["singapore", "Сингапур", "🇸🇬", "images/cities/singapore.jpg"]
    ]
  },

  medicinal_plants: {
    title: "Карта № 3. ЛЕКАРСТВЕННЫЕ РАСТЕНИЯ",
    subtitle: "Соедини название с изображением",
    description: "16 растений • 4 страницы",
    pairs: [
      ["stop", "Стоп", "images/signs/stop.jpg"],
      ["yield", "Уступи дорогу", "images/signs/yield.jpg"],
      ["noentry", "Въезд запрещён", "images/signs/noentry.jpg"],
      ["crosswalk", "Пешеходный переход", "images/signs/crosswalk.jpg"],

      ["speed50", "Ограничение 50", "images/signs/speed50.jpg"],
      ["noparking", "Стоянка запрещена", "images/signs/noparking.jpg"],
      ["roundabout", "Круговое движение", "images/signs/roundabout.jpg"],
      ["oneway", "Одностороннее движение", "images/signs/oneway.jpg"],

      ["mainroad", "Главная дорога", "images/signs/mainroad.jpg"],
      ["deadend", "Тупик", "images/signs/deadend.jpg"],
      ["bike", "Велосипедная дорожка", "images/signs/bike.jpg"],
      ["school", "Дети", "images/signs/school.jpg"]
    ]
  },

  insects: {
    title: "Карта № 4. НАСЕКОМЫЕ",
    subtitle: "Соедини название с изображением",
    description: "16 насекомых • 4 страницы",
    pairs: [
      ["rose", "Роза", "🌹", "images/flowers/rose.jpg"],
      ["tulip", "Тюльпан", "🌷", "images/flowers/tulip.jpg"],
      ["sunflower", "Подсолнух", "🌻", "images/flowers/sunflower.jpg"],
      ["daisy", "Ромашка", "🌼", "images/flowers/daisy.jpg"],
  
      ["lavender", "Лаванда", "💜", "images/flowers/lavender.jpg"],
      ["orchid", "Орхидея", "🪻", "images/flowers/orchid.jpg"],
      ["poppy", "Мак", "🌺", "images/flowers/poppy.jpg"],
      ["lily", "Лилия", "🌸", "images/flowers/lily.jpg"],
  
      ["iris", "Ирис", "💠", "images/flowers/iris.jpg"],
      ["peony", "Пион", "🌸", "images/flowers/peony.jpg"],
      ["carnation", "Гвоздика", "🌺", "images/flowers/carnation.jpg"],
      ["chamomile", "Ромашка полевая", "🌼", "images/flowers/chamomile.jpg"]
    ]
  },

  feathered_friends: {
    title: "Карта № 5. ПЕРНАТЫЕ ДРУЗЬЯ",
    subtitle: "Соедини название с изображением",
    description: "16 птиц • 4 страницы",
    pairs: [
      ["rose", "Роза", "🌹", "images/flowers/rose.jpg"],
      ["tulip", "Тюльпан", "🌷", "images/flowers/tulip.jpg"],
      ["sunflower", "Подсолнух", "🌻", "images/flowers/sunflower.jpg"],
      ["daisy", "Ромашка", "🌼", "images/flowers/daisy.jpg"],
  
      ["lavender", "Лаванда", "💜", "images/flowers/lavender.jpg"],
      ["orchid", "Орхидея", "🪻", "images/flowers/orchid.jpg"],
      ["poppy", "Мак", "🌺", "images/flowers/poppy.jpg"],
      ["lily", "Лилия", "🌸", "images/flowers/lily.jpg"],
  
      ["iris", "Ирис", "💠", "images/flowers/iris.jpg"],
      ["peony", "Пион", "🌸", "images/flowers/peony.jpg"],
      ["carnation", "Гвоздика", "🌺", "images/flowers/carnation.jpg"],
      ["chamomile", "Ромашка полевая", "🌼", "images/flowers/chamomile.jpg"]
    ]
  },
  
  aquarium_fish: {
    title: "Карта № 6. АКВАРИУМНЫЕ РЫБЫ",
    subtitle: "Соедини название с изображением",
    description: "16 рыб • 4 страницы",
    pairs: [
      ["rose", "Роза", "🌹", "images/flowers/rose.jpg"],
      ["tulip", "Тюльпан", "🌷", "images/flowers/tulip.jpg"],
      ["sunflower", "Подсолнух", "🌻", "images/flowers/sunflower.jpg"],
      ["daisy", "Ромашка", "🌼", "images/flowers/daisy.jpg"],
  
      ["lavender", "Лаванда", "💜", "images/flowers/lavender.jpg"],
      ["orchid", "Орхидея", "🪻", "images/flowers/orchid.jpg"],
      ["poppy", "Мак", "🌺", "images/flowers/poppy.jpg"],
      ["lily", "Лилия", "🌸", "images/flowers/lily.jpg"],
  
      ["iris", "Ирис", "💠", "images/flowers/iris.jpg"],
      ["peony", "Пион", "🌸", "images/flowers/peony.jpg"],
      ["carnation", "Гвоздика", "🌺", "images/flowers/carnation.jpg"],
      ["chamomile", "Ромашка полевая", "🌼", "images/flowers/chamomile.jpg"]
    ]
  },
  
  fauna_of_the_seas_and_oceans: {
    title: "Карта № 7. ЖИВОТНЫЙ МИР МОРЕЙ И ОКЕАНОВ",
    subtitle: "Соедини название с изображением",
    description: "16 животных • 4 страницы",
    pairs: [
      ["rose", "Роза", "🌹", "images/flowers/rose.jpg"],
      ["tulip", "Тюльпан", "🌷", "images/flowers/tulip.jpg"],
      ["sunflower", "Подсолнух", "🌻", "images/flowers/sunflower.jpg"],
      ["daisy", "Ромашка", "🌼", "images/flowers/daisy.jpg"],
  
      ["lavender", "Лаванда", "💜", "images/flowers/lavender.jpg"],
      ["orchid", "Орхидея", "🪻", "images/flowers/orchid.jpg"],
      ["poppy", "Мак", "🌺", "images/flowers/poppy.jpg"],
      ["lily", "Лилия", "🌸", "images/flowers/lily.jpg"],
  
      ["iris", "Ирис", "💠", "images/flowers/iris.jpg"],
      ["peony", "Пион", "🌸", "images/flowers/peony.jpg"],
      ["carnation", "Гвоздика", "🌺", "images/flowers/carnation.jpg"],
      ["chamomile", "Ромашка полевая", "🌼", "images/flowers/chamomile.jpg"]
    ]
  },
  
  minerals: {
    title: "Карта № 8, МИНЕРАЛЫ",
    subtitle: "Соедини название с изображением",
    description: "16 минералов • 4 страницы",
    pairs: [
      ["rose", "Роза", "🌹", "images/flowers/rose.jpg"],
      ["tulip", "Тюльпан", "🌷", "images/flowers/tulip.jpg"],
      ["sunflower", "Подсолнух", "🌻", "images/flowers/sunflower.jpg"],
      ["daisy", "Ромашка", "🌼", "images/flowers/daisy.jpg"],
  
      ["lavender", "Лаванда", "💜", "images/flowers/lavender.jpg"],
      ["orchid", "Орхидея", "🪻", "images/flowers/orchid.jpg"],
      ["poppy", "Мак", "🌺", "images/flowers/poppy.jpg"],
      ["lily", "Лилия", "🌸", "images/flowers/lily.jpg"],
  
      ["iris", "Ирис", "💠", "images/flowers/iris.jpg"],
      ["peony", "Пион", "🌸", "images/flowers/peony.jpg"],
      ["carnation", "Гвоздика", "🌺", "images/flowers/carnation.jpg"],
      ["chamomile", "Ромашка полевая", "🌼", "images/flowers/chamomile.jpg"]
    ]
  }
  
};

const app = document.querySelector(".app");
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
let currentSectionKey = null;
let selectedPairs = [];
let pageIndex = 0;
let selectedName = null;
let selectedPicture = null;
let matched = new Set();
let lives = 3;

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function fitText(elements, minSize = 11) {
  elements.forEach(el => {
    el.style.fontSize = "";
    let size = parseFloat(getComputedStyle(el).fontSize);
    while ((el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) && size > minSize) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  });
}

function renderMenu() {
  sectionsEl.innerHTML = "";

  Object.entries(sections).forEach(([key, section]) => {
    const button = document.createElement("button");
    button.className = "section-btn";

    button.innerHTML = `
      <span>
        <span class="section-title">${section.title}</span>
        <span class="section-subtitle">${section.description}</span>
      </span>
    `;

    button.addEventListener("click", () => startSection(key));
    sectionsEl.appendChild(button);
  });

  requestAnimationFrame(() => fitText([...sectionsEl.querySelectorAll(".section-title")], 13));
}

function showMenu() {
  currentSection = null;
  currentSectionKey = null;

  menuScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  app.classList.add("menu-active");

  progressFill.style.width = "0%";
  backBtn.setAttribute("aria-label", "Выйти из игры");
}

function startSection(key) {
  currentSectionKey = key;
  currentSection = sections[key];

  // При каждом новом запуске раздела случайно выбираем 16 пар
  // из всего списка. Эти 16 пар сохраняются до конца текущей игры.
  selectedPairs = shuffle(currentSection.pairs).slice(0, 16);

  pageIndex = 0;

  menuScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  app.classList.remove("menu-active");

  resetPage();
}

function currentPairs() {
  return selectedPairs.slice(pageIndex * 4, pageIndex * 4 + 4);
}

function resetPage() {
  lives = 3;
  livesEl.textContent = lives;

  matched.clear();
  selectedName = null;
  selectedPicture = null;

  nextBtn.disabled = true;
  nextBtn.textContent = pageIndex === 3 ? "Завершить" : "Далее";

  statusEl.textContent = "";

  gameTitle.textContent = "Найди пару";
  gameSubtitle.textContent = currentSection.subtitle;
  pageLabel.textContent = `${currentSection.title} • ${pageIndex + 1} / 4`;

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

    card.innerHTML = `
      <span class="name">${pair[1]}</span>
    `;

    card.addEventListener("click", () => selectCard("name", card));
    namesColumn.appendChild(card);
  });

  shuffle(pairs).forEach(pair => {
    const card = document.createElement("button");

    card.className = "card image-card";
    card.dataset.id = pair[0];

    const image = document.createElement("img");
    // Поддерживаем оба формата на время перехода:
    // [ID, Название, Путь] и старый [ID, Название, Иконка, Путь].
    const imagePath = pair.length === 3 ? pair[2] : pair[3];

    image.src = imagePath;
    image.alt = pair[1];
    image.loading = "eager";

    image.onerror = () => {
      image.alt = `Изображение не найдено: ${imagePath}`;
    };

    card.appendChild(image);

    card.addEventListener("click", () => selectCard("picture", card));
    picturesColumn.appendChild(card);
  });

  requestAnimationFrame(() => fitText([...namesColumn.querySelectorAll(".name")], 11));
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

    nameCard.disabled = true;
    pictureCard.disabled = true;

    const check = document.createElement("span");
    check.className = "check";
    check.textContent = "✓";
    pictureCard.appendChild(check);

    statusEl.textContent = "Пара найдена";

    updateProgress();

    if (matched.size === 4) {
      nextBtn.disabled = false;
      statusEl.textContent =
        pageIndex === 3
          ? "Раздел пройден"
          : "Все 4 пары найдены";
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

      setTimeout(() => {
        resetPage();
      }, 900);
    }
  }

  selectedName = null;
  selectedPicture = null;
}

function updateProgress() {
  const total = pageIndex * 4 + matched.size;
  const percent = (total / 16) * 100;

  progressFill.style.width = `${Math.max(8, percent)}%`;
}

nextBtn.addEventListener("click", () => {
  if (matched.size !== 4) return;

  if (pageIndex < 3) {
    pageIndex++;
    resetPage();
  } else {
    showMenu();
  }
});

/*
  Кнопка X:
  - внутри раздела — возврат к выбору разделов.
*/
backBtn.addEventListener("click", () => {
  if (currentSection) {
    showMenu();
  } else {
    /*
      Здесь можно указать адрес страницы,
      на которую должна вести кнопка выхода.
      Например:
      window.location.href = "index.html";
    */

    window.history.back();
  }
});

renderMenu();
showMenu();
