const quizs =  [
    {
        q:"もんだいもんだいもんだい",
        c:"1.正解のこたえ",
        i1:"2.不正解のこたえ１",
        i2:"3.不正解のこたえ２",
        pt:"3"
    },
    {
        q:"もんだいもんだいもんだい2",
        c:"1.正解のこたえ2",
        i1:"2.不正解のこたえ2",
        i2:"3.不正解のこたえ3",
        pt:"3"
    }

]

const str = JSON.stringify(quizs)
localStorage.setItem("quizss",str)


if(localStorage.getItem("index")==null){

    localStorage.setItem("index",0)
    
} 
    const index =localStorage.getItem("index")


document.getElementById("question")
const questionElement=document.getElementById("question")
questionElement.textContent=quizs[index].q

document.getElementById("choice1")
const choice1Element=document.getElementById("choice1")
choice1Element.textContent=quizs[index].c

document.getElementById("choice2")
const choice2Element=document.getElementById("choice2")
choice2Element.textContent=quizs[index].i1

document.getElementById("choice3")
const choice3Element=document.getElementById("choice3")
choice3Element.textContent=quizs[index].i2


function seikai(){
    location.href="/quiz/answer/true.html"
}

function huseikai(){
    location.href="/quiz/answer/false.html"
}


choice1Element.addEventListener("click",seikai)
choice2Element.addEventListener("click",huseikai)
choice3Element.addEventListener("click",huseikai)



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
     
