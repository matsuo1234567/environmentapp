const selectedItem = localStorage.getItem('selectedItem');
document.getElementById('selectedItem').textContent = selectedItem;

const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('click', function() {
    window.location.href = 'pointget.html';
});
