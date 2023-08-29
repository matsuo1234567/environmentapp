window.addEventListener('DOMContentLoaded', (event) => {
    const data = [
        { points: 1, task: "ごはんをかんしょく" },
        { points: 2, task: "エコバッグをもっていく" },
        { points: 3, task: "ごみをもっていく" },
        { points: 4, task: "でんしゃをつかう" },
        { points: 5, task: "バスをつかう" },
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
