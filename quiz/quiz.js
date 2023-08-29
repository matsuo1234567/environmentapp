const quizs =  [
    {
        q:"もんだいもんだいもんだい",
        pt:"3",
        answers: [
            {
                text:"まちがえの答え5",
                bool: "false"
            },
            {
                text:"正解の答え5",
                bool: "true"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
        ]
    },
    {
        q:"もんだいもんだいもんだい2",
        pt:"3",
        answers: [
            {
                text:"正解の答え5",
                bool: "true"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
        ]
    },
    {
        q:"もんだいもんだいもんだい3",
        pt:"3",
        answers: [
            {
                text:"正解の答え5",
                bool: "true"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
        ]
    },
    {
        q:"もんだいもんだいもんだい4",
        pt:"3",
        answers: [
            {
                text:"正解の答え5",
                bool: "true"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
        ]
    },
    {
        q:"もんだいもんだいもんだい5",
        pt:"3",
        answers: [
            {
                text:"正解の答え5",
                bool: "true"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
            {
                text:"まちがえの答え5",
                bool: "false"
            },
        ]
    },

]

const str = JSON.stringify(quizs)
localStorage.setItem("quizss",str)


if(localStorage.getItem("index")==null){

    localStorage.setItem("index",0)
    
} 
    const index =localStorage.getItem("index")



const questionElement=document.getElementById("question")
questionElement.textContent=quizs[index].q

/*
const choice1Element=document.getElementById("choice1")
choice1Element.textContent=quizs[index].c

const choice2Element=document.getElementById("choice2")
choice2Element.textContent=quizs[index].i1

const choice3Element=document.getElementById("choice3")
choice3Element.textContent=quizs[index].i2
*/
function seigo(choice,text,bool){
    const choiceElement=document.getElementById(choice)
    choiceElement.textContent=text

    function handle(){
        location.href="/quiz/answer/" + bool + ".html"
    }
    choiceElement.addEventListener("click",handle)   
}

/*const answers = [
    {
        text:"まちがえの答え5",
        bool: "false"
    },
    {
        text:"正解の答え5",
        bool: "true"
    },
    {
        text:"まちがえの答え5",
        bool: "false"
    },
]*/

for (let qIndex = 0; qIndex < quizs[index].answers.length; qIndex++) {
   
   
    seigo("choice"+(qIndex+1),quizs[index].answers[qIndex].text,quizs[index].answers[qIndex].bool)
    
}

//seigo("choice1",quizs[index].i2 , "false")
//seigo("choice2", quizs[index].c, "true")
//seigo("choice3", quizs[index].i1, "false")

/*function seikai(){
    location.href="/quiz/answer/true.html"
}

function huseikai(){
    location.href="/quiz/answer/false.html"
}


choice1Element.addEventListener("click",seikai)
choice2Element.addEventListener("click",huseikai)
choice3Element.addEventListener("click",huseikai)

*/

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
     

