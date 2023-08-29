const quizs = {
        q:"もんだいもんだいもんだい",
        c:"1.正解のこたえ",
        i1:"2.不正解のこたえ１",
        i2:"3.不正解のこたえ２",
    }


document.getElementById("question")
const questionElement=document.getElementById("question")
questionElement.textContent=quizs.q

document.getElementById("choice1")
const choice1Element=document.getElementById("choice1")
choice1Element.textContent=quizs.c

document.getElementById("choice2")
const choice2Element=document.getElementById("choice2")
choice2Element.textContent=quizs.i1

document.getElementById("choice3")
const choice3Element=document.getElementById("choice3")
choice3Element.textContent=quizs.i2

function seikai(){
    location.href="/quiz/answer/true.html"
}
choice1Element.addEventListener("click",seikai)

window.onload = function() {
    console.log(localStorage.getItem('user_id'))
    axios.post('http://kyuuri.daa.jp/waitingList/insertRanking.php', {
        user_id: localStorage.getItem('user_id'),
        point: 3,
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    }); 
}
     
