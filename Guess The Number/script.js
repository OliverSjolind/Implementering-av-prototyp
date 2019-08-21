let answer = Math.round(Math.random() * 20)

let guessText = document.getElementById('guessText')
let userGuess = document.getElementById('userGuess')
let guessButton = document.getElementById('guessBtn')
let userTries = document.getElementById('tries'),
    count = 0;
let tryAgain = document.getElementById('try-again')
let userName = document.getElementById('name')
let startButton = document.getElementById('startButton')
let gameForm = document.getElementById('game-form')
let nameForm = document.getElementById('name-form')


guessButton.addEventListener('click', guessFunction)
tryAgain.addEventListener('click', playAgainFunction)
startButton.addEventListener('click', startFunction)

function guessFunction(event) {
    event.preventDefault();
    console.log(answer)
    if (userGuess.value == '') {
        guessText.innerHTML = 'Please enter a number!'
    } else if (userGuess.value == answer) {
        count += 1;
        userTries.innerHTML = '';
        userGuess.disabled = true;
        guessButton.disabled = true;
        tryAgain.style.display = 'block';
        guessText.innerHTML = 'Good ' + userName.value + '! It took you ' + count + ' tries to guess the correct number.'
    } else if (userGuess.value > 20 || userGuess.value < 0) {
        guessText.innerHTML = 'The number must be between 0-20'
    } else if (userGuess.value > answer) {
        guessText.innerHTML = 'The number is lower!'
        count += 1;
        userTries.innerHTML = 'tries: ' + count;
    } else if (userGuess.value < answer) {
        guessText.innerHTML = 'The number is higher!'
        count += 1;
        userTries.innerHTML = 'tries: ' + count;
    }
}

function playAgainFunction() {
    userGuess.value = '';
    userTries.innerHTML = '', count = 0;
    guessText.innerHTML = '';
    userGuess.disabled = false;
    guessButton.disabled = false;
    tryAgain.style.display = 'none';
    answer = Math.round(Math.random() * 20)
    gameForm.style.display = 'none';
    nameForm.style.display = 'block';
}

function startFunction(event) {
    if (userName.value == '') {} else {
        event.preventDefault();
        nameForm.style.display = 'none';
        gameForm.style.display = 'block';
    }
}