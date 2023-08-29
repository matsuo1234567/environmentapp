const quizs =  [
    {
        q:"北九州市で行われている北九州市環境首都検定の受験料は？",
        pt:"3",
        answers: [
            {
                text:"無料",
                bool: "true"
            },
            {
                text:"1000円",
                bool: "false"
            },
            {
                text:"3500円",
                bool: "false"
            },
        ]
    },
    {
        q:"2019年における北九州市のco2排出量は？",
        pt:"3",
        answers: [
            {
                text:"5000千トン",
                bool: "false"
            },
            {
                text:"14,784千トン",
                bool: "true"
            },
            {
                text:"550千トン",
                bool: "false"
            },
        ]
    },
    {
        q:"北九州市の資源とゴミの分け方は、市が回収しないものを除いていくつありますか？",
        pt:"3",
        answers: [
            {
                text:"25種類",
                bool: "false"
            },
            {
                text:"5種類",
                bool: "false"
            },
            {
                text:"13種類",
                bool: "true"
            },
        ]
    },
    {
        q:"北九州市の環境活動などの総合拠点のタカミヤ環境ミュージアムは北九州市のどこにありますか？",
        pt:"3",
        answers: [
            {
                text:"八幡西区",
                bool: "false"
            },
            {
                text:"八幡東区",
                bool: "true"
            },
            {
                text:"小倉北区",
                bool: "false"
            },
        ]
    },
    {
        q:"2019年における北九州市の家庭から出た食品ロスの量は？",
        pt:"3",
        answers: [
            {
                text:"2.6万t",
                bool: "true"
            },
            {
                text:"1.2t",
                bool: "false"
            },
            {
                text:"40.5t",
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
     

