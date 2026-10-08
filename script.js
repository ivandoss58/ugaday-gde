/*
 * ИГРА «ВОПРОСЫ — ОТВЕТЫ»
 * 4 страницы по 4 пары.
 */

const sections = {
  mushrooms: {
    title: "ГРИБЫ",
    subtitle: "Соедини название с изображением",
    description: "16 грибов • 4 страницы",
    pairs: [
      ["podberiozovik","Подберёзовик","images/mashrooms/podberiozovik.jpeg"],
      ["belygrib","Белый гриб, или боровик","images/mashrooms/belygrib.jpg"],
      ["podosinovik","Подосиновик","images/mashrooms/podosinovik.jpg"],
      ["opionok","Опёнок","images/mashrooms/opionok.jpg"],
      ["muhomor","Мухомор (ядовит)","images/mashrooms/muhomor.jpg"],
      ["smorchok","Сморчок","images/mashrooms/smorchok.jpg"],
      ["shampinion","Шампиньон","images/mashrooms/shampinion.jpeg"],
      ["lisichka","Лисичка","images/mashrooms/lisichka.jpg"],
      ["volnushka","Волнушка","images/mashrooms/volnushka.jpg"],
      ["rygik","Рыжик","images/mashrooms/rygik.jpg"],
      ["maslionok","Маслёнок","images/mashrooms/maslionok.jpg"],
      ["strochok","Строчок","images/mashrooms/strochok.jpg"],
      ["syroezhka","Сыроежка","images/mashrooms/syroezhka.jpeg"],
      ["lozhnyopionok","Ложный опёнок (ядовит)","images/mashrooms/lozhnyopionok.jpeg"],
      ["poddubovik","Поддубовик","images/mashrooms/poddubovik.jpeg"],
      ["poganka","Бледная поганка (ядовита)","images/mashrooms/poganka.jpeg"]
    ]
  },

  sea_animals: {
    title: "ЖИВОТНЫЙ МИР МОРЕЙ И ОКЕАНОВ",
    subtitle: "Соедини название с изображением",
    description: "20 животных • 4 страницы",
    pairs: [
      ["antur","Антур","images/sea_animales/Антур.jpeg"],
      ["belokrylaya","Белокрылая морская свинья","images/sea_animales/Белокрылая моская свинья.jpeg"],
      ["belukha","Белуха","images/sea_animales/Белуха.jpeg"],
      ["gorbatyi_kit","Горбатый кит","images/sea_animales/Горбатый кит.jpeg"],
      ["dugon","Дюгонь — морская корова","images/sea_animales/Дюгонь - морская корова.jpeg"],
      ["kalan","Калан","images/sea_animales/Калан.webp"],
      ["kashalot","Кашалот","images/sea_animales/Кашалот.jpeg"],
      ["nerpa","Кольчатая нерпа","images/sea_animales/Кольчатая нерпа.webp"],
      ["kosatka","Косатка","images/sea_animales/Косатка.jpeg"],
      ["krylatka","Крылатка","images/sea_animales/Крылатка.jpeg"],
      ["larga","Ларга","images/sea_animales/Ларга.jpeg"],
      ["lahtak","Лахтак","images/sea_animales/Лахтак.jpeg"],
      ["morzh","Морж","images/sea_animales/Морж.jpeg"],
      ["morskoi_kotik","Морской котик","images/sea_animales/Морской котик.jpeg"],
      ["morskoi_lev","Морской лев","images/sea_animales/Морской лев.jpeg"],
      ["delfin","Обыкновенный дельфин","images/sea_animales/Обыкновенный дельфин.jpeg"],
      ["severnyi_kotik","Северный морской котик","images/sea_animales/Северный морской котик.jpeg"],
      ["finval","Северный финвал","images/sea_animales/Северный финвал.jpeg"],
      ["seryi_kit","Серый кит","images/sea_animales/Серый кит.jpeg"],
      ["sinii_kit","Синий кит","images/sea_animales/Синий кит.jpeg"]
    ]
  }
};

const startScreen=document.getElementById("startScreen");
const playBtn=document.getElementById("playBtn");
const menuScreen=document.getElementById("menuScreen");
const gameScreen=document.getElementById("gameScreen");
const sectionsEl=document.getElementById("sections");
const namesColumn=document.getElementById("namesColumn");
const picturesColumn=document.getElementById("picturesColumn");
const nextBtn=document.getElementById("nextBtn");
const livesEl=document.getElementById("lives");
const progressFill=document.getElementById("progressFill");
const statusEl=document.getElementById("status");
const gameTitle=document.getElementById("gameTitle");
const gameSubtitle=document.getElementById("gameSubtitle");
const pageLabel=document.getElementById("pageLabel");
const backBtn=document.getElementById("backBtn");

let currentSection=null;
let selectedPairs=[];
let pageIndex=0;
let selectedName=null;
let selectedPicture=null;
let matched=new Set();
let lives=3;

function shuffle(array){
  const result=[...array];
  for(let i=result.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}

function showStart(){
  startScreen.classList.remove("hidden");
  menuScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
}

function showMenu(){
  startScreen.classList.add("hidden");
  menuScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  currentSection=null;
  progressFill.style.width="0%";
}

function renderMenu(){
  sectionsEl.innerHTML="";
  Object.entries(sections).forEach(([key,section])=>{
    const button=document.createElement("button");
    button.type="button";
    button.className="section-btn";
    button.innerHTML=
      `<span class="section-title">${section.title}</span>
       <span class="section-subtitle">${section.description}</span>`;
    button.addEventListener("click",()=>startSection(key));
    sectionsEl.appendChild(button);
  });
}

function startSection(key){
  currentSection=sections[key];

  if(currentSection.pairs.length<16){
    console.error("В разделе недостаточно пар:",key);
    return;
  }

  selectedPairs=shuffle(currentSection.pairs).slice(0,16);
  pageIndex=0;

  startScreen.classList.add("hidden");
  menuScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  resetPage();
}

function currentPairs(){
  return selectedPairs.slice(pageIndex*4,pageIndex*4+4);
}

function resetPage(){
  lives=3;
  livesEl.textContent=lives;
  matched.clear();
  selectedName=null;
  selectedPicture=null;

  nextBtn.disabled=true;
  nextBtn.textContent=pageIndex===3?"Завершить":"Далее";
  statusEl.textContent="";

  gameTitle.textContent="Найди пару";
  gameSubtitle.textContent=currentSection.subtitle;
  pageLabel.textContent=`${currentSection.title} • ${pageIndex+1} / 4`;

  render();
}

function render(){
  namesColumn.innerHTML="";
  picturesColumn.innerHTML="";

  const pairs=currentPairs();

  shuffle(pairs).forEach(pair=>{
    const card=document.createElement("button");
    card.type="button";
    card.className="card name-card";
    card.dataset.id=pair[0];
    card.innerHTML=`<span class="name">${pair[1]}</span>`;
    card.addEventListener("click",()=>selectCard("name",card));
    namesColumn.appendChild(card);
  });

  shuffle(pairs).forEach(pair=>{
    const card=document.createElement("button");
    card.type="button";
    card.className="card image-card";
    card.dataset.id=pair[0];

    const image=document.createElement("img");
    image.src=pair[2];
    image.alt=pair[1];
    image.loading="eager";
    image.onerror=()=>console.warn("Не найдено изображение:",pair[2]);

    card.appendChild(image);
    card.addEventListener("click",()=>selectCard("picture",card));
    picturesColumn.appendChild(card);
  });

  updateProgress();
}

function selectCard(type,card){
  if(matched.has(card.dataset.id)||card.disabled)return;

  if(type==="name"){
    if(selectedName)selectedName.classList.remove("selected");
    selectedName=card;
  }else{
    if(selectedPicture)selectedPicture.classList.remove("selected");
    selectedPicture=card;
  }

  card.classList.add("selected");

  if(selectedName&&selectedPicture)checkPair();
}

function checkPair(){
  const nameCard=selectedName;
  const pictureCard=selectedPicture;
  const correct=nameCard.dataset.id===pictureCard.dataset.id;

  nameCard.classList.remove("selected");
  pictureCard.classList.remove("selected");

  if(correct){
    matched.add(nameCard.dataset.id);
    nameCard.classList.add("correct","locked");
    pictureCard.classList.add("correct","locked");
    nameCard.disabled=true;
    pictureCard.disabled=true;

    const check=document.createElement("span");
    check.className="check";
    check.textContent="✓";
    pictureCard.appendChild(check);

    statusEl.textContent=matched.size===4
      ?(pageIndex===3?"Раздел пройден":"Все 4 пары найдены")
      :"Пара найдена";

    if(matched.size===4)nextBtn.disabled=false;
  }else{
    nameCard.classList.add("wrong");
    pictureCard.classList.add("wrong");
    lives--;
    livesEl.textContent=lives;
    statusEl.textContent="Не совпадает";

    setTimeout(()=>{
      nameCard.classList.remove("wrong");
      pictureCard.classList.remove("wrong");
      statusEl.textContent="";
    },550);

    if(lives<=0){
      statusEl.textContent="Жизни закончились — страница начнётся заново";
      setTimeout(resetPage,900);
    }
  }

  selectedName=null;
  selectedPicture=null;
  updateProgress();
}

function updateProgress(){
  const total=pageIndex*4+matched.size;
  progressFill.style.width=`${(total/16)*100}%`;
}

playBtn.addEventListener("click",showMenu);

nextBtn.addEventListener("click",()=>{
  if(matched.size!==4)return;
  if(pageIndex<3){
    pageIndex++;
    resetPage();
  }else{
    showMenu();
  }
});

backBtn.addEventListener("click",showMenu);

renderMenu();
showStart();
