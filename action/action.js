window.addEventListener('DOMContentLoaded', (event) => {
    const data = [
        { points: 2, task: "ごはんをかんしょく" },
        { points: 2, task: "エコバッグをもっていく" },
        { points: 3, task: "ごみをもっていく" },
        { points: 4, task: "でんしゃをつかう" },
        { points: 3, task: "バスをつかう" },
        { points: 4, task: "ふくおかでつくられたたべものをえらぶ" },
        { points: 2, task: "LEDでんきゅうをえらぶ" },
    ];

    const table = document.getElementById('actionTable');
    for (const item of data) {
        const row = document.createElement('tr');

        const pointCell = document.createElement('td');
        pointCell.textContent = item.points;
        pointCell.classList.add('pointCell');
        row.appendChild(pointCell);

        const taskCell = document.createElement('td');
        taskCell.textContent = item.task;
        taskCell.classList.add('clickable', 'underline');
        taskCell.addEventListener('click', function () {
            localStorage.setItem('selectedItem', item.task);
            localStorage.setItem('selectedPoints', item.points);
            window.location.href = 'register.html';
        });
        row.appendChild(taskCell);

        table.appendChild(row);
    }
});
