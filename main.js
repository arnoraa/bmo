const ost = document.querySelector('#osteTyper').getContext('2d');
const osteTyper = new Chart(ost, {
    type: 'bar',
    data: {
        labels: ['Comté', 'Vesterhavsost', 'Gammel knas (Arla Unika)', 'Danbo'],
        datasets: [{
            label: "BMO-score",
            data: [4.47, 4.78, 4.61, 3.18],
            backgroundColor: ['#FFE77D', '#FFE77D', '#FFE77D', '#FFE77D'],
            borderColor: '#333',
            borderWidth: 0.5,
        }]
    }
})

const pris = document.querySelector('#prisGrupper').getContext('2d');

const prisGrupper = new Chart(pris, {
    type: 'bar',
    data: {
        labels: ['Under 30 kr.', '30-34 kr.', '35-39 kr.', '40-49 kr.', '50 kr. og op'],
        datasets: [{
            label: "BMO-score",
            data: [3.34, 4.65, 4.57, 4.78, 4.20],
            backgroundColor: ['#CC8B41', '#CC8B41', '#CC8B41', '#CC8B41'],
            borderColor: '#333',
            borderWidth: 0.5,
        }]
    }
})