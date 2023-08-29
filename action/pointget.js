/*const points = localStorage.getItem('selectedPoints');
document.getElementById('pointDisplay').textContent += selectedPoints;

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function () {
    window.location.href = '../index.html';
});*/

const selectedPoints = localStorage.getItem('selectedPoints');
const text = document.getElementById('pointDisplay').textContent
document.getElementById('pointDisplay').textContent = text + selectedPoints

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
