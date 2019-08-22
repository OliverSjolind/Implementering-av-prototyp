let form = document.getElementById('form')
let age = document.getElementById('ageInput')
let name = document.getElementById('nameInput')
let resultText = document.getElementById('result')

form.addEventListener('submit', ageCheck)

function ageCheck(event) {
    event.preventDefault();
    if (age.value >= 18) {
        resultText.innerHTML = 'Hello ' + name.value + ' you are an adult'
    } else if (age.value < 18) {
        resultText.innerHTML = 'Hello ' + name.value + ' you are not an adult'
    }
}