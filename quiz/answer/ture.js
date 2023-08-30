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

function home(){
    location.href="home/home.html"
}

ieElement.addEventListener("click",home)

if(indexNum==4){
    console.log("実行されてる？")
    //document.getElementById("tugii")
    const tugiiElement=document.getElementById("tugii")
    tugiiElement.textContent="終了！"

    function tugi(){
        location.href="home/home.html"
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
