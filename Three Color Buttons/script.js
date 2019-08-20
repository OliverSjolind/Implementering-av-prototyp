let redButton = document.getElementById('red')
let greenButton = document.getElementById('green')
let blueButton = document.getElementById('blue')

let redMessage = 'You clicked the red button'
let greenMessage = 'You clicked the green button'
let blueMessage = 'You clicked the blue button'

redButton.addEventListener('click', redFunction)
greenButton.addEventListener('click', greenFunction)
blueButton.addEventListener('click', blueFunction)

function redFunction() {
    alert(redMessage)
    document.body.style.backgroundColor = 'red'
}

function greenFunction() {
    alert(greenMessage)
    document.body.style.backgroundColor = 'green'
}

function blueFunction() {
    alert(blueMessage)
    document.body.style.backgroundColor = 'blue'
}