// Lösning 1
// function nameAlert() {
//     alert('Hello ' + document.getElementById("name").value + '!');
// }

let input = document.getElementById('name');
let button = document.getElementById('button');

button.addEventListener("click", onButtonClick);

function onButtonClick() {
    if (input.value == '') {
        alert('Please enter your name!')
    } else {
        alert('Hello ' + input.value + '!');
    }
}