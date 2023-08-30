
const selectedPoints = localStorage.getItem('selectedPoints');
const text = document.getElementById('pointDisplay').textContent
document.getElementById('pointDisplay').textContent = text + selectedPoints

window.onload = function() {
    console.log(localStorage.getItem('user_id'))
    axios.post('http://kyuuri.daa.jp/waitingList/insertRanking.php', {
        user_id: localStorage.getItem('user_id'),
        point:  localStorage.getItem('selectedPoints'),
    })
    .then(function (response) {
        console.log(response.data);
    
const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function () {
    window.location.href = '../home/home.html';
    
    
});
    })
    .catch(function (error) {
        console.log(error);
    }); 
}
