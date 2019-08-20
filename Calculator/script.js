// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let answer = document.getElementById('answer')

// let addition = document.getElementById('addition')
// let subtract = document.getElementById('subtract')
// let multiplication = document.getElementById('multiplication')
// let division = document.getElementById('division')

// let arithmeticDisplay = document.getElementById('arithmetic-display')

// addition.addEventListener('click', additionCalc)

// function additionCalc() {
//     answer.value = parseFloat(input1.value) + parseFloat(input2.value)
//     arithmeticDisplay.value = '+'
// }

// subtract.addEventListener('click', subtractCalc)

// function subtractCalc() {
//     answer.value = parseFloat(input1.value) - parseFloat(input2.value)
//     arithmeticDisplay.value = '-'
// }

// multiplication.addEventListener('click', multiplicationCalc)

// function multiplicationCalc() {
//     answer.value = parseFloat(input1.value) * parseFloat(input2.value)
//     arithmeticDisplay.value = '*'
// }

// division.addEventListener('click', divisionCalc)

// function divisionCalc() {
//     answer.value = parseFloat(input1.value) / parseFloat(input2.value)
//     arithmeticDisplay.value = '/'
// }

let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let answer = document.getElementById('answer')

let addition = document.getElementById('addition')
let subtract = document.getElementById('subtract')
let multiplication = document.getElementById('multiplication')
let division = document.getElementById('division')

let select = document.getElementById('arithmetics')

let calculate = document.getElementById('calculate')

calculate.addEventListener('click', calcFunction)

function calcFunction() {
    if (select.value == 'addition') {
        answer.value = parseFloat(input1.value) + parseFloat(input2.value)
        arithmeticDisplay.value = '+'
    } else if 7

}