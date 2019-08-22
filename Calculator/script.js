let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let answer = document.getElementById('answer')

let addition = document.getElementById('addition')
let subtract = document.getElementById('subtract')
let multiplication = document.getElementById('multiplication')
let division = document.getElementById('division')

let arithmeticDisplay = document.getElementById('arithmetic-display')

let select = document.getElementById('arithmetics')

let calculate = document.getElementById('calculate')

calculate.addEventListener('click', calcFunction)

function calcFunction() {
    if (select.value == 'addition') {
        answer.value = parseFloat(input1.value) + parseFloat(input2.value)
        arithmeticDisplay.value = '+'
    } else if (select.value == 'subtraction') {
        answer.value = parseFloat(input1.value) - parseFloat(input2.value)
        arithmeticDisplay.value = '-'
    } else if (select.value == 'multiplication') {
        answer.value = parseFloat(input1.value) * parseFloat(input2.value)
        arithmeticDisplay.value = '*'
    } else if (select.value == 'division') {
        answer.value = parseFloat(input1.value) / parseFloat(input2.value)
        arithmeticDisplay.value = '/'
    }
}