
// ===== helper function =====
function smoothToggle(card, contentSelector)
{
    const content = card.querySelector(contentSelector);

    if(card.classList.contains("active"))
    {
        const height = content.scrollHeight;

        content.style.height = height + "px";

        requestAnimationFrame(()=>{
            content.style.height = "0px";
        });

        card.classList.remove("active");
    }
    else
    {
        card.classList.add("active");

        const height = content.scrollHeight;

        content.style.height = height + "px";

        content.addEventListener("transitionend", function handler()
        {
            content.style.height = "auto";
            content.removeEventListener("transitionend", handler);
        });
    }
}


// ===== THEMES =====
document.querySelectorAll(".theme-header").forEach(header=>{

    header.addEventListener("click",()=>{

        const card = header.parentElement;

        document.querySelectorAll(".theme-card").forEach(other=>{

            if(other !== card && other.classList.contains("active"))
            {
                smoothToggle(other, ".theme-content");
            }

        });

        smoothToggle(card, ".theme-content");

    });

});


// ===== PROBLEMS =====
document.querySelectorAll(".problem-header").forEach(header=>{

    header.addEventListener("click",()=>{

        const card = header.parentElement;
        smoothToggle(card, ".problem-content");

    });

});


// 🔥 Преобразуем "a:b" в красивые дроби
function formatFractions(text){
    // подставляем span.fraction вместо "a:b"
    return text.replace(/([a-zA-Z0-9]+)\s*:\s*([a-zA-Z0-9]+)/g, (_, a, b) =>
        `<span class="fraction"><span class="top">${a}</span><span class="bottom">${b}</span></span>`
    );
}








function setTheme(diff){
    document.body.classList.remove(
        "theme-easy",
        "theme-medium",
        "theme-hard",
        "theme-mixed"
    );

    if(diff === "easy") document.body.classList.add("theme-easy");
    if(diff === "medium") document.body.classList.add("theme-medium");
    if(diff === "hard") document.body.classList.add("theme-hard");
    if(diff === "mixed") document.body.classList.add("theme-mixed");
}

/* ===================== ВОПРОСЫ ===================== */

const questionBank = [

/* Skaitļu attiecība */
{type:"input",difficulty:"easy",question:"Uzraksti skaitļu 4 un 8 attiecību vienkāršotā veidā",answer:"1:2"},
{type:"input",difficulty:"easy",question:"Uzraksti skaitļu 6 un 9 attiecību vienkāršotā veidā",answer:"2:3"},
{type:"input",difficulty:"easy",question:"Uzraksti skaitļu 10 un 5 attiecību",answer:"2:1"},
{type:"input",difficulty:"easy",question:"Uzraksti skaitļu 12 un 3 attiecību vienkāršotā veidā",answer:"4:1"},

/* Proporcijas (definīcija) */
{type:"choice",difficulty:"easy",
question:"Kura no attiecībām veido proporciju?",
options:["2:3 = 4:5","2:4 = 3:6","3:5 = 6:11","4:7 = 5:9"],
answer:"2:4 = 3:6"},

{type:"choice",difficulty:"easy",
question:"Kura ir pareiza proporcija?",
options:["1:2 = 3:5","2:6 = 3:9","4:5 = 8:11","3:4 = 6:7"],
answer:"2:6 = 3:9"},

/* Nezināmais loceklis (vienkārši) */
{type:"input",difficulty:"easy",question:"2 : 4 = x : 8. Aprēķini x",answer:"4"},
{type:"input",difficulty:"easy",question:"3 : 6 = x : 12. Aprēķini x",answer:"6"},
{type:"input",difficulty:"easy",question:"5 : 10 = x : 20. Aprēķini x",answer:"10"},
{type:"input",difficulty:"easy",question:"1 : 2 = x : 6. Aprēķini x",answer:"3"},

/* Procenti ar proporciju */
{type:"input",difficulty:"easy",question:"10% = 10 : 100 = x : 50. Aprēķini x",answer:"5"},
{type:"input",difficulty:"easy",question:"20% = 20 : 100 = x : 40. Aprēķini x",answer:"8"},
{type:"input",difficulty:"easy",question:"50% = 50 : 100 = x : 30. Aprēķini x",answer:"15"},
{type:"input",difficulty:"easy",question:"25% = 25 : 100 = x : 20. Aprēķini x",answer:"5"},

/* Tiešā proporcionalitāte */
{type:"input",difficulty:"easy",question:"Ja 1 pildspalva maksā 20 centus, cik maksā 4 pildspalvas?",answer:"80"},
{type:"input",difficulty:"easy",question:"Ja 2 burtnīcas maksā 2 €, cik maksā 6 burtnīcas?",answer:"6"},
{type:"input",difficulty:"easy",question:"Ja 1 kg ābolu maksā 1 €, cik maksā 5 kg?",answer:"5"},
{type:"input",difficulty:"easy",question:"Ja 3 sulas maksā 3 €, cik maksā 1 sula?",answer:"1"},

/* Sakarības starp lielumiem */
{type:"choice",difficulty:"easy",
question:"Kāda sakarība ir starp daudzumu un cenu (ja cena par 1 gabalu nemainās)?",
options:["nav sakarības","tiešā proporcionalitāte","apgrieztā proporcionalitāte","nejauša sakarība"],
answer:"tiešā proporcionalitāte"},

{type:"choice",difficulty:"easy",
question:"Ja palielinās ātrums, bet attālums ir tas pats, kā mainās laiks?",
options:["palielinās","nemainās","samazinās","nav sakarības"],
answer:"samazinās"},


/* Apgrieztā proporcionalitāte (vienkārši) */
{type:"input",difficulty:"easy",
question:"Ja 2 strādnieki darbu paveic 4 stundās, cik stundās darbu paveiks 1 strādnieks?",answer:"8"},

{type:"input",difficulty:"easy",
question:"Ja 1 cilvēks darbu izdara 6 stundās, cik stundās to izdarīs 2 cilvēki?",answer:"3"},

/* Proporcijas praktiskā forma */
{type:"input",difficulty:"easy",
question:"3 : 5 = 6 : x. Aprēķini x",answer:"10"},

{type:"input",difficulty:"easy",
question:"4 : 8 = x : 16. Aprēķini x",answer:"8"},

/* ===================== MEDIUM LEVEL ===================== */

{type:"input",difficulty:"medium",
question:"Uzraksti skaitļu 18 un 24 attiecību vienkāršotā veidā",
answer:"3:4"},

{type:"input",difficulty:"medium",
question:"Uzraksti skaitļu 15 un 35 attiecību vienkāršotā veidā",
answer:"3:7"},

{type:"input",difficulty:"medium",
question:"Uzraksti skaitļu 42 un 28 attiecību vienkāršotā veidā",
answer:"3:2"},

{type:"input",difficulty:"medium",
question:"Uzraksti skaitļu 16 un 40 attiecību vienkāršotā veidā",
answer:"2:5"},


/* Proporcijas — nezināmais loceklis */

{type:"input",difficulty:"medium",
question:"3 : 5 = x : 25. Aprēķini x",
answer:"15"},

{type:"input",difficulty:"medium",
question:"4 : 7 = x : 21. Aprēķini x",
answer:"12"},

{type:"input",difficulty:"medium",
question:"6 : 8 = x : 32. Aprēķini x",
answer:"24"},

{type:"input",difficulty:"medium",
question:"x : 9 = 12 : 27. Aprēķini x",
answer:"4"},

{type:"input",difficulty:"medium",
question:"5 : x = 15 : 45. Aprēķini x",
answer:"15"},

{type:"input",difficulty:"medium",
question:"7 : 4 = 21 : x. Aprēķini x",
answer:"12"},

{type:"input",difficulty:"medium",
question:"2 : 9 = x : 36. Aprēķini x",
answer:"8"},


/* Proporcijas definīcija */

{type:"choice",difficulty:"medium",
question:"Kura no attiecībām veido proporciju?",
options:["3:4 = 6:10","2:5 = 6:15","4:7 = 8:15","5:6 = 15:20"],
answer:"2:5 = 6:15"},

{type:"choice",difficulty:"medium",
question:"Kura ir pareiza proporcija?",
options:["7:9 = 14:20","3:8 = 6:16","5:12 = 10:22","4:9 = 12:25"],
answer:"3:8 = 6:16"},


/* Procenti ar proporciju */

{type:"input",difficulty:"medium",
question:"15% = 15 : 100 = x : 80. Aprēķini x",
answer:"12"},

{type:"input",difficulty:"medium",
question:"40% = 40 : 100 = x : 60. Aprēķini x",
answer:"24"},

{type:"input",difficulty:"medium",
question:"12% = 12 : 100 = x : 50. Aprēķini x",
answer:"6"},

{type:"input",difficulty:"medium",
question:"35% = 35 : 100 = x : 200. Aprēķini x",
answer:"70"},


/* Tiešā proporcionalitāte */

{type:"input",difficulty:"medium",
question:"Ja 3 kg konfekšu maksā 6 €, cik maksā 8 kg konfekšu?",
answer:"16"},

{type:"input",difficulty:"medium",
question:"Ja 5 burtnīcas maksā 7,50 €, cik maksā 12 burtnīcas?",
answer:"18"},

{type:"input",difficulty:"medium",
question:"Ja 4 pildspalvas maksā 3,20 €, cik maksā 10 pildspalvas?",
answer:"8"},


/* Apgrieztā proporcionalitāte */

{type:"input",difficulty:"medium",
question:"Ja 3 strādnieki darbu paveic 12 stundās, cik stundās darbu paveiks 6 strādnieki?",
answer:"6"},

{type:"input",difficulty:"medium",
question:"Ja 2 cilvēki darbu izdara 6 stundās, cik stundās to izdarīs 3 cilvēki?",
answer:"4"},

{type:"input",difficulty:"medium",
question:"Ja 4 cilvēki darbu izdara 10 stundās, cik stundās to izdarīs 5 cilvēki?",
answer:"8"},


/* Sakarības starp lielumiem */

{type:"choice",difficulty:"medium",
question:"Ja palielinās cilvēku skaits un darbs ir tas pats, kā mainās darba izpildes laiks?",
options:["palielinās","nemainās","samazinās","nav sakarības"],
answer:"samazinās"},

{type:"choice",difficulty:"medium",
question:"Ja palielinās preču daudzums, bet cena par vienību nemainās, kā mainās kopējā cena?",
options:["samazinās","nemainās","palielinās","nav sakarības"],
answer:"palielinās"},

{type:"choice",difficulty:"medium",
question:"Ja palielinās ātrums, bet attālums ir nemainīgs, kā mainās laiks?",
options:["palielinās","nemainās","samazinās","nav sakarības"],
answer:"samazinās"},

/* ===================== HARD LEVEL ===================== */

{type:"input",difficulty:"hard",
question:"Uzraksti skaitļu 36 un 54 attiecību vienkāršotā veidā",
answer:"2:3"},

{type:"input",difficulty:"hard",
question:"Uzraksti skaitļu 45 un 60 attiecību vienkāršotā veidā",
answer:"3:4"},

{type:"input",difficulty:"hard",
question:"Uzraksti skaitļu 28 un 42 attiecību vienkāršotā veidā",
answer:"2:3"},

{type:"input",difficulty:"hard",
question:"Uzraksti skaitļu 50 un 80 attiecību vienkāršotā veidā",
answer:"5:8"},


/* Proporcijas — nezināmais loceklis */

{type:"input",difficulty:"hard",
question:"4 : 9 = x : 36. Aprēķini x",
answer:"16"},

{type:"input",difficulty:"hard",
question:"5 : 6 = x : 30. Aprēķini x",
answer:"25"},

{type:"input",difficulty:"hard",
question:"7 : 10 = x : 50. Aprēķini x",
answer:"35"},

{type:"input",difficulty:"hard",
question:"3 : x = 12 : 32. Aprēķini x",
answer:"8"},

{type:"input",difficulty:"hard",
question:"x : 14 = 6 : 21. Aprēķini x",
answer:"4"},

{type:"input",difficulty:"hard",
question:"8 : 12 = 20 : x. Aprēķini x",
answer:"30"},


/* Procenti */

{type:"input",difficulty:"hard",
question:"18% = 18 : 100 = x : 200. Aprēķini x",
answer:"36"},

{type:"input",difficulty:"hard",
question:"45% = 45 : 100 = x : 80. Aprēķini x",
answer:"36"},

{type:"input",difficulty:"hard",
question:"12% = 12 : 100 = x : 75. Aprēķini x",
answer:"9"},

{type:"input",difficulty:"hard",
question:"32% = 32 : 100 = x : 50. Aprēķini x",
answer:"16"},


/* Tiešā proporcionalitāte */

{type:"input",difficulty:"hard",
question:"Ja 6 burtnīcas maksā 9 €, cik maksā 14 burtnīcas?",
answer:"21"},

{type:"input",difficulty:"hard",
question:"Ja 8 pildspalvas maksā 6,40 €, cik maksā 15 pildspalvas?",
answer:"12"},

{type:"input",difficulty:"hard",
question:"Ja 5 kg kartupeļu maksā 2,50 €, cik maksā 18 kg?",
answer:"9"},


/* Apgrieztā proporcionalitāte */

{type:"input",difficulty:"hard",
question:"Ja 4 strādnieki darbu paveic 12 stundās, cik stundās darbu paveiks 6 strādnieki?",
answer:"8"},

{type:"input",difficulty:"hard",
question:"Ja 5 cilvēki darbu izdara 10 stundās, cik stundās to izdarīs 2 cilvēki?",
answer:"25"},

{type:"input",difficulty:"hard",
question:"Ja 3 strādnieki darbu izdara 15 stundās, cik stundās to izdarīs 5 strādnieki?",
answer:"9"},


/* Sakarības starp lielumiem */

{type:"choice",difficulty:"hard",
question:"Kāda sakarība pastāv starp cilvēku skaitu un darba izpildes laiku?",
options:["tiešā proporcionalitāte","apgrieztā proporcionalitāte","nav sakarības","nejauša sakarība"],
answer:"apgrieztā proporcionalitāte"},

{type:"choice",difficulty:"hard",
question:"Kāda sakarība pastāv starp preču daudzumu un kopējo cenu, ja cena par vienību nemainās?",
options:["tiešā proporcionalitāte","apgrieztā proporcionalitāte","nav sakarības","nejauša sakarība"],
answer:"tiešā proporcionalitāte"},


/* Kombinētie uzdevumi */

{type:"input",difficulty:"hard",
question:"3 kg ābolu maksā 4,50 €. Cik maksā 10 kg ābolu?",
answer:"15"},

{type:"input",difficulty:"hard",
question:"Ja 2 pildspalvas maksā 0,80 €, cik maksā 15 pildspalvas?",
answer:"6"},

{type:"input",difficulty:"hard",
question:"Ja 4 burtnīcas maksā 3 €, cik maksā 18 burtnīcas?",
answer:"13.5"},

{type:"input",difficulty:"hard",
question:"Ja 6 kg konfekšu maksā 9 €, cik maksā 2 kg konfekšu?",
answer:"3"},


/* Loģiskā domāšana */

{type:"choice",difficulty:"hard",
question:"Ja 1 kg maksā 2 €, bet 5 kg maksā 10 €, kāda ir sakarība?",
options:["nav sakarības","tiešā proporcionalitāte","apgrieztā proporcionalitāte","nejauša sakarība"],
answer:"tiešā proporcionalitāte"},

{type:"choice",difficulty:"hard",
question:"Ja palielinās strādnieku skaits un darbs ir nemainīgs, kas notiek ar darba laiku?",
options:["palielinās","nemainās","samazinās","nav sakarības"],
answer:"samazinās"}

];

/* ===================== ПЕРЕМЕННЫЕ ===================== */

let questions=[];
let current=0;
let score=0;
let selected=null;
let answered=false;
let singleMode=false;   // 🔥 режим одного вопроса

/* ===================== УТИЛИТЫ ===================== */

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}

/* ===================== ВЫБОР СЛОЖНОСТИ ===================== */

document.querySelectorAll(".difficulty-btn").forEach(btn=>{
    btn.onclick=()=> startQuiz(btn.dataset.diff,false);
});

/* 🔥 РЕЖИМ: СЛУЧАЙНЫЙ 1 ВОПРОС */
document.querySelector(".random-btn").onclick = () => {
    startQuiz("mixed", true);   // true = singleMode
};

document.getElementById("input-answer")
.addEventListener("keypress", e=>{
    if(e.key==="Enter") document.getElementById("check-btn").click();
});

/* ===================== СТАРТ ===================== */

function startQuiz(diff, isSingle=false){

    singleMode = isSingle;

    setTheme(diff);

    let pool = [];

    if(singleMode){
        // 🔥 один случайный вопрос из всего банка
        pool = [...questionBank];
        shuffle(pool);
        questions = [ pool[0] ];   // только 1 вопрос
    } else {
        pool = diff==="mixed"
            ? [...questionBank]
            : questionBank.filter(q=>q.difficulty===diff);

        if(pool.length<10) pool=[...questionBank];

        shuffle(pool);
        questions = pool.slice(0,10);
    }

    current=0;
    score=0;

    document.getElementById("difficulty-screen").style.display="none";
    document.getElementById("task-frame").style.display="block";
    document.getElementById("quiz-screen").style.display="block";
    document.getElementById("final-screen").style.display="none";

    showQuestion();
}

/* ===================== ПОКАЗ ВОПРОСА ===================== */

function showQuestion(){

    answered=false;
    selected=null;

    document.getElementById("result").innerHTML="";
    document.getElementById("next-btn").style.display="none";

    let q=questions[current];

    document.getElementById("question").innerHTML = formatFractions(q.question);

    document.getElementById("progress-text").innerText =
    (current+1)+" / "+questions.length;

    document.getElementById("progress-fill").style.width =
    ((current+1)/questions.length*100)+"%";

    let answersDiv=document.getElementById("answers");
    answersDiv.innerHTML="";

    document.getElementById("input-answer").style.display="none";

    if(q.type==="choice"){

        q.options.forEach(opt=>{
            let btn=document.createElement("div");
            btn.className="answer-btn";
            btn.innerHTML = formatFractions(opt);

            btn.onclick=()=>{
                if(answered)return;

                selected=opt;

                document.querySelectorAll(".answer-btn")
                .forEach(b=>b.classList.remove("selected"));

                btn.classList.add("selected");
            };

            answersDiv.appendChild(btn);
        });

    } else {

        let input=document.getElementById("input-answer");
        input.style.display="block";
        input.value="";
        input.focus();
    }
}

/* ===================== ПРОВЕРКА ===================== */

document.getElementById("check-btn").onclick=()=>{

    if(answered)return;

    let q=questions[current];
    let answer;

    if(q.type==="choice"){
        if(!selected){
            document.getElementById("result").innerHTML =
            "<span class='wrong'>Izvēlies atbildi!</span>";
            return;
        }
        answer=selected;
    } else {
        answer=document.getElementById("input-answer")
        .value.trim().replace(",", ".");

        if(!answer){
            document.getElementById("result").innerHTML =
            "<span class='wrong'>Ievadi atbildi!</span>";
            return;
        }
    }

    let correct=q.answer.replace(",", ".");

    if(answer===correct){
        score++;
        document.getElementById("result").innerHTML =
        "<span class='correct'>✔ Pareizi!</span>";
    } else {
        document.getElementById("result").innerHTML =
        "<span class='wrong'>✘ Nepareizi. Pareizā atbilde: "+formatFractions(q.answer)+"</span>";
    }

    answered=true;

    /* ===== РЕЖИМ SINGLE (Nejauša grūtība) ===== */
    if(singleMode){

        // скрываем кнопки
        document.getElementById("check-btn").style.display="none";
        document.getElementById("theory-btn").style.display="none";
        document.getElementById("next-btn").style.display="none";

        // показываем retry
        document.getElementById("retry-btn").style.display="inline-block";

    } else {
        document.getElementById("next-btn").style.display="inline-block";
    }
};

/* ===================== СЛЕДУЮЩИЙ ===================== */

document.getElementById("next-btn").onclick=()=>{
    current++;
    if(current>=questions.length) finish();
    else showQuestion();
};

/* ===================== ФИНИШ ===================== */

function finish(){
    document.getElementById("quiz-screen").style.display="none";
    document.getElementById("final-screen").style.display="block";

    if(singleMode){
        document.getElementById("final-score").innerText =
        "Rezultāts: "+score+" / 1";
    } else {
        document.getElementById("final-score").innerText =
        "Tavs rezultāts: "+score+" / "+questions.length;
    }
}

/* ===================== ОТМЕНА ===================== */

document.getElementById("cancel-btn").onclick=()=>{
    document.getElementById("quiz-screen").style.display="none";
    document.getElementById("final-screen").style.display="none";
    document.getElementById("task-frame").style.display="none";
    document.getElementById("difficulty-screen").style.display="block";
};

document.getElementById("retry-btn").onclick = () => {

    // новый случайный вопрос
    let pool = [...questionBank];
    shuffle(pool);
    questions = [ pool[0] ];

    current = 0;
    score = 0;

    // вернуть кнопки
    document.getElementById("check-btn").style.display="inline-block";
    document.getElementById("theory-btn").style.display="inline-block";
    document.getElementById("retry-btn").style.display="none";

    document.getElementById("result").innerHTML = "";

    showQuestion();
};