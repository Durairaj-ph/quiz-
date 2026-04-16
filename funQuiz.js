const quiz=[{question:"Is Peacock considered as the national bird of india?",
             answer:"yes",
             good:"good correct answer",
             bad:"படிக்காத தற்குறி பயலே"
},{question:"thirukural is written by kambar",
             answer:"no",
             good:"arumai tamizh pulavarey",
             bad:"valluvar pondati vasugi nu matum dha unaku theriyum😄"
},{question:"God is real?",
             answer:"no",
             good:"Welcome to the Athiest club",
             bad:"which god😅?"
},
{question:"Is the Sun a star?",
 answer:"yes",
 good:"Correct, it is a star!",
 bad:"Bruh, basic science miss pannita 😄"},

{question:"Is water's chemical formula H2O?",
 answer:"yes",
 good:"Right answer!",
 bad:"Chemistry konjam revise pannunga 😅"},

{question:"Is India the largest country in the world?",
 answer:"no",
 good:"Correct, it's not the largest",
 bad:"China and Russia iruku bro 😄"},

{question:"Does Earth have two moons?",
 answer:"no",
 good:"Correct, only one moon",
 bad:"Sci-fi la iruka madhiri yosikadha 😄"},

{question:"Is Mount Everest the tallest mountain?",
 answer:"yes",
 good:"Correct!",
 bad:"Google pannitu vaanga 😄"},

{question:"Is the capital of India Mumbai?",
 answer:"no",
 good:"Correct, it's New Delhi",
 bad:"Konjam GK improve pannunga 😅"},

{question:"Is Python a programming language?",
 answer:"yes",
 good:"Correct!",
 bad:"Snake ah dhaan theriyuma 😄"},

{question:"Is the human body having 5 senses?",
 answer:"yes",
 good:"Right!",
 bad:"6th sense venuma 😄"},

{question:"Is gold cheaper than silver?",
 answer:"no",
 good:"Correct!",
 bad:"Gold rate paatha puriyum 😄"},

{question:"Is the Pacific Ocean the largest ocean?",
 answer:"yes",
 good:"Correct!",
 bad:"Map la paathu vaanga 😄"},

{question:"Is Sachin Tendulkar a football player?",
 answer:"no",
 good:"Correct!",
 bad:"Cricket legend bro 😄"},

{question:"Is Chennai in Kerala?",
 answer:"no",
 good:"Correct!",
 bad:"Geography weak ah iruku 😄"},

{question:"Is 2 + 2 equal to 4?",
 answer:"yes",
 good:"Correct!",
 bad:"Maths la fail aagatheenga 😄"},

{question:"Is the Taj Mahal in Delhi?",
 answer:"no",
 good:"Correct, it's in Agra",
 bad:"Tour plan panna theriyala 😄"},

{question:"Is Jupiter the largest planet?",
 answer:"yes",
 good:"Correct!",
 bad:"Space konjam explore pannunga 😄"},

{question:"Is a square having 5 sides?",
 answer:"no",
 good:"Correct!",
 bad:"Shapes la confuse aagatheenga 😄"},

{question:"Is milk white in color?",
 answer:"yes",
 good:"Correct!",
 bad:"Idhuvum theriyala na 😄"},

{question:"Is Facebook a mobile app?",
 answer:"yes",
 good:"Correct!",
 bad:"Daily use panna app dhaan 😄"},

{question:"Is the speed of light slower than sound?",
 answer:"no",
 good:"Correct!",
 bad:"Physics konjam strong pannunga 😄"},

{question:"Is Tamil one of the oldest languages?",
 answer:"yes",
 good:"Correct!",
 bad:"Tamil pathi konjam respect venum 😄"}
]

let questions=document.querySelector(".questions")
let qIndex=0;
function showQuestion(){
    questions.textContent= quiz[qIndex].question;}
showQuestion()

function sortOut(){yesButton.textContent="Yes"
    noButton.textContent="No"
    yesButton.disabled=false
    noButton.disabled=false}
function nextQuestion(){
    if(qIndex<quiz.length-1){qIndex++;questions.textContent=quiz[qIndex].question;
        prevButton.disabled=false;
    }
        else{questions.textContent="QUIZ mudinchu bha"
            yesButton.hidden=true;
            noButton.hidden=true;
            nextButton.textContent="இதுக்கு மேல முட்டுசந்து லே"
            nextButton.style.fontSize="9.5px";
            nextButton.disabled=true;
        }
     sortOut()
}
function previousQuestion(){
    if(qIndex>0){qIndex--;questions.textContent=quiz[qIndex].question
        yesButton.hidden=false;
            noButton.hidden=false;
            nextButton.disabled=false;
            nextButton.textContent="Next ❯❯❯❯"
            nextButton.style.fontSize="13px";
    }if(qIndex===0){prevButton.disabled=true;}
  sortOut()
}
const yesButton=document.getElementById("yes-btn")
const noButton=document.getElementById("no-btn")
const nextButton=document.getElementById("next-btn")
const prevButton=document.getElementById("prev-btn")
function isYes(){
  let disable=()=>{noButton.disabled=true}
  disable()
    if(quiz[qIndex].answer==="yes"){
        yesButton.textContent=quiz[qIndex].good;
    }else if(quiz[qIndex].answer==="no"){
        yesButton.textContent=quiz[qIndex].bad;
    }
}
function isNo(){
    let disable=()=>{yesButton.disabled=true}
  disable()
    if(quiz[qIndex].answer!=="yes"){
        noButton.textContent=quiz[qIndex].good;
    }else if(quiz[qIndex].answer!=="no"){
        noButton.textContent=quiz[qIndex].bad;
    }
}
yesButton.addEventListener("click",isYes)
noButton.addEventListener("click",isNo)
nextButton.addEventListener("click",nextQuestion)
prevButton.addEventListener("click",previousQuestion)
const toggleBtn=document.querySelector(".theme")
let isOn=false;
const body=document.body
function toggleTheme(){
    isOn=!isOn;
    if(isOn){toggleBtn.textContent="Normal Mode";
        body.style.background="linear-gradient(180deg,rgb(255, 223, 255),rgb(255, 102, 242))";
        toggleBtn.style.color="black"
    }
    else{toggleBtn.textContent="Rose mode";
        body.style.background="linear-gradient(215deg,rgb(154, 210, 243),rgb(206, 185, 255))"
    }
}
toggleBtn.addEventListener("click",toggleTheme)
