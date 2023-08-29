const quizs = localStorage.getItem("quizss")
const hai = JSON.parse(quizs)

const indexStr = localStorage.getItem("index")
const indexNum=  Number(indexStr)


for (let qIndex = 0; qIndex < hai[indexNum].answers.length; qIndex++) {
    console.log("いふぶん",hai[indexNum].answers[qIndex].bool)
    if(hai[indexNum].answers[qIndex].bool=="true"){
        const kotaeElement=document.getElementById("kotae")
        kotaeElement.textContent=hai[indexNum].answers[qIndex].text
    }  
 }

document.getElementById("ie")
const ieElement=document.getElementById("ie")
ieElement.textContent="ホームへ戻る"

function home(){
    location.href="/index.html"
}

ieElement.addEventListener("click",home)

if(indexNum==4){
    //document.getElementById("tugii")
    const tugiiElement=document.getElementById("tugii")
    tugiiElement.textContent="終了！"

    function tugi(){
        location.href="/index.html"
    }
    tugiiElement.addEventListener("click",tugi)
    localStorage.setItem("index",0)
} else{

    document.getElementById("tugii")
    const tugiiElement=document.getElementById("tugii")
    tugiiElement.textContent="次の問題"


    function tugi(){
        const indexStr = localStorage.getItem("index")
        const indexNum=  Number(indexStr)
        localStorage.setItem("index",indexNum+1)
        location.href="/quiz/quiz.html"
    }

    tugiiElement.addEventListener("click",tugi)
}