const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('click', function() {
    axios.post('http://kyuuri.daa.jp/waitingList/insertUser.php', {
        name: document.getElementById('name').value,
    })
    .then(function (response) {
        console.log(response.data.user_id);
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('name', document.getElementById('name').value);
    })
    .catch(function (error) {
        console.log(error);
    }); 
     window.location.href = 'index.html';
});

const name = localStorage.getItem('name');

