
window.onload = function() {
    axios.post('http://kyuuri.daa.jp/waitingList/selectUser.php', {
            user_id: localStorage.getItem('user_id'),
            point:  localStorage.getItem('selectedPoints'),
        })
        .then(function (response) {

            const ranking = response.data.ranking;
            const totalRanking = response.data.totalRanking;
            const points = response.data.points;

            const rankingDiv = document.querySelector('.juni');
            rankingDiv.innerHTML = `<p style="display: inline">${ranking}位</p><p style="display: inline">/</p><p style="display: inline">${totalRanking}位</p>`;


            const pointsDiv = document.querySelector('.radius3 .point');
            pointsDiv.innerText = points;
        })
        .catch(function (error) {
            console.log(error);
        }); 
}
