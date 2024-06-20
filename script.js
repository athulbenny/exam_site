const startButton=document.getElementById("start-btn");
const nextButton=document.getElementById("next-btn");
const finishButton=document.getElementById("finish-btn");

const questionContainer= document.getElementById("question-container");
const questionElement =document.getElementById('question');
const answerElement =document.getElementById('answer');
let shuffledQ, currentQIndex,score;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
    currentQIndex++;
    setNextQuestion();
});




function startGame(){
    startButton.classList.add('hide');
    shuffledQ=questions.sort(()=> Math.random()-0.5);
    currentQIndex=0;score=0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}
function setNextQuestion(){
    resetState();
    showQuestions(shuffledQ[currentQIndex]);

}
function showQuestions(question){
    questionElement.innerHTML=question.question;
    question.answers.forEach(answer => {
    const button =document.createElement('button');
    button.innerText=answer.text;
    button.classList.add('btn');
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }        
    button.addEventListener('click', selectAnswer);
    answerElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct =selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQ.length>currentQIndex+1){
        nextButton.classList.remove('hide')
     }
    else{
        //finishButton.classList.remove('hide')
        finishButton.addEventListener('click',hello(score));
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
        score++;
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong')
}

const questions=[
    {
        question: "Q: what is 2+2?",
        answers: [
            {text:'4',correct:true},
            {text:'22',correct:false}
        ],
    },
    {
        question: "what is 3+3?",
        answers: [
            {text:'6',correct:true},
            {text:'33',correct:false},
            {text:'3',correct:false},
            {text:'9',correct:false}
        ],
    },
    {
        question: "what is 3*3?",
        answers: [
            {text:'6',correct:false},
            {text:'33',correct:false},
            {text:'9',correct:true},
            {text:'3',correct:false}
        ],
    },
    {
        question: "what is 4+4?",
        answers: [
            {text:'6',correct:false},
            {text:'44',correct:false},
            {text:'8',correct:true}
        ],
    },
    {
        question: "what is 5*5?",
        answers: [
            {text:'55',correct:false},
            {text:'5',correct:false},
            {text:'25',correct:true},

        ],
    },
    {
        question: "what is 6*3?",
        answers: [
            {text:'63',correct:false},
            {text:'18',correct:true},
         
        ],
    },
    {
        question: "what is 5+5?",
        answers: [
            {text:'25',correct:false},
            {text:'5',correct:false},
            {text:'10',correct:true},
            {text:'55',correct:false}
        ],
    }
]

function hello(score){
    yourname=prompt("enter your name");
    score=score-shuffledQ.length;
    //alert("hey "+yourname+", your score is "+score+" out of "+shuffledQ.length);
  if(score>3){
  window.location.replace("form.html")
  }else{
      window.location.replace("index.html")
  }
}



