const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('click', function() {
    axios.post('http://kyuuri.daa.jp/waitingList/insertUser.php', {
        name: document.getElementById('name').value,
    })
    .then(function (response) {
        console.log(response.data);
        localStorage.setItem('user_id', response.data.user_id);
        localStorage.setItem('name', document.getElementById('name').value);
        window.location.href = 'home.html';
    })
    .catch(function (error) {
        console.log(error);
    }); 
    
});

const name = localStorage.getItem('name');

