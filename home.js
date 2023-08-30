window.onload = function() {
    axios.post('http://kyuuri.daa.jp/waitingList/selectUser.php', {
      user_id: localStorage.getItem('user_id'),
    })
    .then(function (response) {
        console.log(response.data);
       
      const rank = response.data.rank;
      const point = response.data.point;
      console.log(rank);
      console.log(point);
  
      // ランキングを表示
      const rankDiv = document.getElementById('rank');
      rankDiv.innerHTML = `${rank}位`;
  
      // ポイントを表示
      const pointDiv = document.getElementById('point');
      pointDiv.textContent = `${point} pt`;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  