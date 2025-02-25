let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

document.getElementById('attemptsLeft').textContent = `Attempts Left: ${attempts}`;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);
    
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('result').textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts--;

    document.getElementById('attemptsLeft').textContent = `Attempts Left: ${attempts}`;

    if (userGuess == secretNumber) {
        document.getElementById('result').textContent = "Congratulations! You guessed the correct number! You win a cookie!";
        document.getElementById('attemptsLeft').textContent = '';
    } else if (userGuess < secretNumber) {
        document.getElementById('result').textContent = "Too low! Try again!";
    } else {
        document.getElementById('result').textContent = "Too high! Try again!";
    }

    if (attempts <= 0) {
        document.getElementById('result').textContent = `Game Over! The correct number was ${secretNumber}. The cookie monster stole your cookie!`;
        document.getElementById('attemptsLeft').textContent = '';
        document.getElementById('cookie').src = "cookiemonster.gif";
    }
}