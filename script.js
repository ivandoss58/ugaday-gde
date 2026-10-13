
/*
 * ИГРА «ВОПРОСЫ — ОТВЕТЫ»
 * 4 страницы по 4 пары.
 */
const sections = {
  mushrooms: {
    title: "Карточка № 1. ГРИБЫ", subtitle: "Соедини название с изображением",
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
  trees: {
    title: "Карточка № 2. ДЕРЕВЬЯ", subtitle: "Соедини название с изображением",
    description: "16 деревьев • 4 страницы",
    pairs: [
      ["berioza","Берёза","images/mashrooms/berioza.jpg"],
      ["dub","Дуб","images/mashrooms/dub.jpg"],
      ["sosna","Сосна","images/mashrooms/sosna.jpg"],
      ["osina","Осина","images/mashrooms/osina.jpg"],
      ["klion","Клён","images/mashrooms/klion.jpg"],
      ["riabina","Рябина","images/mashrooms/riabina.jpg"],
      ["olha","Ольха","images/mashrooms/olha.jpg"],
      ["iva","Ива","images/mashrooms/iva.jpg"],
      ["lipa","Липа","images/mashrooms/lipa.jpg"],
      ["iasen","Ясень","images/mashrooms/iasen.jpg"],
      ["oreshnik","Орешник","images/mashrooms/oreshnik.jpg"],
      ["boiaryshnik","Боярышник","images/mashrooms/boiaryshnik.jpg"],
      ["viaz","Вяз","images/mashrooms/viaz.jpg"],
      ["cheriomuha","Черёмуха","images/mashrooms/cheriomuha.jpg"],
      ["el","Ель","images/mashrooms/el.jpg"],
      ["kashtan","Каштан","images/mashrooms/kashtan.jpg"]
    ]
  },
  sea_animals: {
    title: "ЖИВОТНЫЙ МИР МОРЕЙ И ОКЕАНОВ", subtitle: "Соедини название с изображением",
    description: "20 животных • 4 страницы",
    pairs: [
      ["antur","Антур","images/sea_animales/Антур.jpeg"],
      ["belokrylaya","Белокрылая морская свинья","images/sea_animales/Белокрылая моская свинья.jpeg"],
      ["belukha","Белуха","images/sea_animales/Белуха.jpeg"],
      ["gorbatyi_kit","Горбатый кит","images/sea_animales/Горбатый кит.jpeg"],
      ["dugon","Дюгонь — морская корова","images/sea_animales/Дюгонь - морская корова.jpeg"],
      ["kalan","Калан","images/sea_animales/Калан.webp"],
      ["kashalot","Кашалот","images/sea_animales/Кашалот.jpeg"],
      ["nerpa","Кольчатая нерпа","images/sea_animales/Кольчатая нерпа.webp"],
      ["kosatka","Косатка","images/sea_animales/Косатка.jpeg"],
      ["krylatka","Крылатка","images/sea_animales/Крылатка.jpeg"],
      ["larga","Ларга","images/sea_animales/Ларга.jpeg"],
      ["lahtak","Лахтак","images/sea_animales/Лахтак.jpeg"],
      ["morzh","Морж","images/sea_animales/Морж.jpeg"],
      ["morskoi_kotik","Морской котик","images/sea_animales/Морской котик.jpeg"],
      ["morskoi_lev","Морской лев","images/sea_animales/Морской лев.jpeg"],
      ["delfin","Обыкновенный дельфин","images/sea_animales/Обыкновенный дельфин.jpeg"],
      ["severnyi_kotik","Северный морской котик","images/sea_animales/Северный морской котик.jpeg"],
      ["finval","Северный финвал","images/sea_animales/Северный финвал.jpeg"],
      ["seryi_kit","Серый кит","images/sea_animales/Серый кит.jpeg"],
      ["sinii_kit","Синий кит","images/sea_animales/Синий кит.jpeg"]
    ]
  }
};

const menuScreen=document.getElementById("menuScreen");
const gameScreen=document.getElementById("gameScreen");
const resultsScreen=document.getElementById("resultsScreen");
const startScreen=document.getElementById("startScreen");
const playBtn=document.getElementById("playBtn");
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
const resultsTitle=document.getElementById("resultsTitle");
const resultsMessage=document.getElementById("resultsMessage");
const resultsEyebrow=document.getElementById("resultsEyebrow");
const resultErrors=document.getElementById("resultErrors");
const resultsNextBtn=document.getElementById("resultsNextBtn");
const resultsMenuBtn=document.getElementById("resultsMenuBtn");

let currentSection=null, selectedPairs=[], pageIndex=0, selectedName=null, selectedPicture=null;
let matched=new Set(), lives=3;
let pageErrors = 0;
let sectionErrors = 0;
let pageLocked = false;

function shuffle(array){
  const result=[...array];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
function showStart(){startScreen.classList.remove("hidden");menuScreen.classList.add("hidden");gameScreen.classList.add("hidden");resultsScreen.classList.add("hidden");}
function showMenu(){startScreen.classList.add("hidden");menuScreen.classList.remove("hidden");gameScreen.classList.add("hidden");resultsScreen.classList.add("hidden");currentSection=null;progressFill.style.width="0%";}
function renderMenu(){
  sectionsEl.innerHTML="";
  Object.entries(sections).forEach(([key,section])=>{
    const button=document.createElement("button");button.type="button";button.className="section-btn";
    button.innerHTML=`<span class="section-title">${section.title}</span><span class="section-subtitle">${section.description}</span>`;
    button.addEventListener("click",()=>startSection(key));sectionsEl.appendChild(button);
  });
}
function startSection(key){
  currentSection=sections[key];
  sectionErrors = 0;
  if(currentSection.pairs.length<16){console.error("В разделе недостаточно пар:",key);return;}
  selectedPairs=shuffle(currentSection.pairs).slice(0,16);pageIndex=0;
  startScreen.classList.add("hidden");menuScreen.classList.add("hidden");resultsScreen.classList.add("hidden");gameScreen.classList.remove("hidden");
  resetPage();
}
function currentPairs(){return selectedPairs.slice(pageIndex*4,pageIndex*4+4);}
function resetPage(){
  lives=3;
  pageErrors=0;
  pageLocked=false;
  livesEl.textContent=lives;
  matched.clear();
  selectedName=null;
  selectedPicture=null;
  nextBtn.disabled=true;
  nextBtn.textContent = pageIndex === 3 ? "Результаты" : "Далее";
  statusEl.textContent="";
  gameTitle.textContent="Найди пару";
  gameSubtitle.textContent=currentSection.subtitle;pageLabel.textContent=`${currentSection.title} • ${pageIndex+1} / 4`;
  render();
}
function render(){
  namesColumn.innerHTML="";picturesColumn.innerHTML="";
  const pairs=currentPairs();
  shuffle(pairs).forEach(pair=>{
    const card=document.createElement("button");card.type="button";card.className="card name-card";card.dataset.id=pair[0];
    card.innerHTML=`<span class="name">${pair[1]}</span>`;card.addEventListener("click",()=>selectCard("name",card));namesColumn.appendChild(card);
  });
  shuffle(pairs).forEach(pair=>{
    const card=document.createElement("button");card.type="button";card.className="card image-card";card.dataset.id=pair[0];
    const image=document.createElement("img");image.src=pair[2];image.alt=pair[1];image.loading="eager";
    image.onerror=()=>console.warn("Не найдено изображение:",pair[2]);card.appendChild(image);
    card.addEventListener("click",()=>selectCard("picture",card));picturesColumn.appendChild(card);
  });
  updateProgress();
}
function selectCard(type,card){
  if(pageLocked||matched.has(card.dataset.id)||card.disabled)return;
  if(type==="name"){if(selectedName)selectedName.classList.remove("selected");selectedName=card;}
  else{if(selectedPicture)selectedPicture.classList.remove("selected");selectedPicture=card;}
  card.classList.add("selected");
  if(selectedName&&selectedPicture)checkPair();
}
function checkPair(){
  const nameCard=selectedName,pictureCard=selectedPicture;
  const correct=nameCard.dataset.id===pictureCard.dataset.id;
  nameCard.classList.remove("selected");pictureCard.classList.remove("selected");
  if(correct){
    matched.add(nameCard.dataset.id);nameCard.classList.add("correct","locked");pictureCard.classList.add("correct","locked");
    nameCard.disabled=true;pictureCard.disabled=true;
    statusEl.textContent=matched.size===4?(pageIndex===3?"Раздел пройден":"Все 4 пары найдены"):"Пара найдена";
    if (matched.size === 4) {
    nextBtn.disabled = false;
    pageLocked = true;
    nextBtn.textContent = pageIndex === 3 ? "Результаты" : "Далее";
 }
  }else{
    pageErrors++;
    sectionErrors++;
    nameCard.classList.add("wrong");
    pictureCard.classList.add("wrong");
    lives--;
    livesEl.textContent=lives;
    statusEl.textContent="Не совпадает";
    setTimeout(()=>{nameCard.classList.remove("wrong");
    pictureCard.classList.remove("wrong");
    statusEl.textContent="";},550);
    if(lives<=0){pageLocked=true;statusEl.textContent="Жизни закончились — страница начнётся заново";setTimeout(resetPage,900);}
  }
  selectedName=null;selectedPicture=null;updateProgress();
}
function showResults(){
  if(matched.size!==4)return;
  gameScreen.classList.add("hidden");resultsScreen.classList.remove("hidden");
  const lastPage=pageIndex===3;
if (sectionErrors === 0) {
  resultsEyebrow.textContent = "ОТЛИЧНАЯ РАБОТА!";
} else if (sectionErrors <= 3) {
  resultsEyebrow.textContent = "НЕПЛОХО!";
} else if (sectionErrors <= 6) {
  resultsEyebrow.textContent = "ТВОИ ЗНАНИЯ СЛАБЫЕ!";
} else {
  resultsEyebrow.textContent = "ОЧЕНЬ ПЛОХО, ТЕБЕ ЕЩЁ РАНО ИГРАТЬ В ЭТУ ИГРУ";
}
  resultsTitle.textContent = "Карточка пройдена!";
  resultsMessage.textContent = "Ты прошел всю карточку!";
  resultErrors.textContent = String(sectionErrors);
}
function updateProgress(){const total=pageIndex*4+matched.size;progressFill.style.width=`${(total/16)*100}%`;}

playBtn.addEventListener("click",showMenu);
nextBtn.addEventListener("click", () => {
  if (matched.size !== 4 || !pageLocked) return;
  if (pageIndex < 3) {
  pageIndex++;
  resetPage();
  } else {
        showResults();
  }
});
backBtn.addEventListener("click",showMenu);
resultsNextBtn.addEventListener("click", () => {
  startSection(
    Object.keys(sections).find(
      key => sections[key] === currentSection
    )
  );
});
resultsMenuBtn.addEventListener("click",showMenu);
renderMenu();showStart();
