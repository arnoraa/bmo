import {Chart} from "chart.js";

const gennemsnit = document.querySelector('#chart').getContext('2d');
const osteTyper = new Chart(gennemsnit, {
    type: 'line',
    data: {
        labels: ['Comté', 'Vesterhavost', 'Gammel knas (Arla Unika)', 'Danbo'],
        datasets: [{
            data: [7, 24, 16, 11]
        }]
    }
})

const prisGrupper = new Chart(gennemsnit, {
    type: 'line',
    data: {
        labels: ['Under 30 kr.', '30-34 kr.', '35-39 kr.', '40-49 kr.', '50 kr. og op'],
        datasets: [{
            data: [3.34, 4.65, 4.57, 4.78, 4.20]
        }]
    }
})