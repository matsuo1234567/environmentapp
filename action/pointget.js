const points = localStorage.getItem('selectedPoints');
document.getElementById('pointDisplay').textContent += selectedPoints;

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function () {
    window.location.href = '../index.html';
});
