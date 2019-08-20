let myButton = document.getElementById('button')
let myText = 'Hello World!'

myButton.addEventListener('click', onButtonClicked)

function onButtonClicked() {
    alert(myText)
}