window.onload = function() {
axios.post('http://kyuuri.daa.jp/waitingList/selectUser.php', {
        user_id: localStorage.getItem('user_id'),
    })
    .then(function (response) {
        console.log(response.data.name);
    })
    .catch(function (error) {
        console.log(error);
    }); 
}
