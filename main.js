const ost = document.querySelector('#osteTyper').getContext('2d');
const osteTyper = new Chart(ost, {
    type: 'bar',
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { ticks: { font: { size: 14 } } },
            y: { ticks: { font: { size: 14 } } }
        }
    },
    data: {
        labels: ['Comté', 'Vesterhavsost', 'Gammel knas ', 'Danbo'],
        datasets: [{
            label: "BMO-score",
            data: [4.47, 4.78, 4.61, 3.18],
            backgroundColor: ['#CC8B41', '#CC8B41', '#CC8B41', '#4D300F'],
            borderColor: '#4D300F',
            borderWidth: 1,
        }]
    }
})

const pris = document.querySelector('#prisGrupper').getContext('2d');

const prisGrupper = new Chart(pris, {
    type: 'bar',
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { ticks: { font: { size: 14 } } },
            y: { ticks: { font: { size: 14 } } }
        }
    },
    data: {
        labels: ['Under 30 kr.', '30-34 kr.', '35-39 kr.', '40-49 kr.', '50 kr. og op'],
        datasets: [{
            label: "BMO-score",
            data: [3.34, 4.65, 4.57, 4.78, 4.20],
            backgroundColor: ['#4D300F', '#CC8B41', '#CC8B41', '#CC8B41', '#CC8B41'],
            borderColor: '#4D300F',
            borderWidth: 1,
        }]
    }
})