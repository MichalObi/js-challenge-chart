let ctx = document.getElementById('challenge-chart'),

 test_data = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            pointStyle: 'circle',
            fill: false,
            showLine: false,
            backgroundColor: "rgba(220,220,220,0.2)",
            borderColor: "#eee",
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
},

test_options = {
    scale: {
        display: false
    },
    responsive: true,
    maintainAspectRatio: false
},

 myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: test_data,
    options: test_options
});
