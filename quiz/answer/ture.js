const quizs = localStorage.getItem("quizss")
const hai = JSON.parse(quizs)

const indexStr = localStorage.getItem("index")
const indexNum=  Number(indexStr)

document.getElementById("point")
const pointElement=document.getElementById("point")
pointElement.textContent=hai[indexNum].pt


document.getElementById("ie")
const ieElement=document.getElementById("ie")
ieElement.textContent="ホームへ戻る"

document.getElementById("tugii")
const tugiiElement=document.getElementById("tugii")
tugiiElement.textContent="次の問題"

function home(){
    location.href=""
}
function tugi(){
    const indexStr = localStorage.getItem("index")
    const indexNum=  Number(indexStr)
    localStorage.setItem("index",indexNum+1)
    location.href="/quiz/quiz.html"
}

tugiiElement.addEventListener("click",tugi)