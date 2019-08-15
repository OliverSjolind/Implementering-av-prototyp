let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let answer = document.getElementById('answer');

let addition = document.getElementById('addition');
let subtract = document.getElementById('subtract');
let multiplication = document.getElementById('multiplication');
let division = document.getElementById('division');

addition.addEventListener("click", additionCalc);

function additionCalc() {
    answer.value = parseFloat(input1.value) + parseFloat(input2.value)
}