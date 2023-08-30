const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('click', function() {
    localStorage.setItem('name', document.getElementById('name').value);
    window.location.href = 'home/home.html';
    axios.post('http://kyuuri.daa.jp/waitingList/insertUser.php', {
        name: document.getElementById('name').value,
    })
    .then(function (response) {
        console.log(response.data);
        localStorage.setItem('user_id', response.data.user_id);
      
    })
    .catch(function (error) {
        console.log(error);
    }); 
    
});

const name = localStorage.getItem('name');

