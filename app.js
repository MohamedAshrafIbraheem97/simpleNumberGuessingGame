// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
  UIminNum = document.querySelector('.min-num'),
  UImaxNum = document.querySelector('.max-num'),
  UIguessBtn = document.querySelector('#guess-btn'),
  UIguessInput = document.querySelector('#guess-input'),
  UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// List for play again
UIguessBtn.addEventListener('click', function (e) {
  if (UIguessBtn.classList.contains('play-again')) {
    window.location.reload();
  }
});

// listen for guess
UIguessBtn.addEventListener('click', function () {
  let guess = parseInt(UIguessInput.value);

  // validate input
  if (isNaN(guess) || guess > max || guess < min) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    // Check if user won
    if (guess === winningNum) {
      // Game over - won
      gameOver(true, `${winningNum} Correct! answer is ${guess}`);
    } // User entered wrong number
    else {
      guessesLeft -= 1;

      if (guessesLeft <= 0) {
        // Game over - lose

        gameOver(
          false,
          `Game over, you lost. The correct answer was ${winningNum}`
        );
      } else {
        // Game continues - asnwer wrong
        setMessage(
          `${guess} is not correct, ${guessesLeft} guesses left`,
          'red'
        );
      }
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  // disable input
  UIguessInput.disabled = true;
  // change border color
  UIguessInput.style.borderColor = color;
  //set message
  setMessage(msg, color);

  // Play again?
  UIguessBtn.value = 'Play Again!';
  UIguessBtn.className += 'play-again ';
}
// message which the user will see
function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}

// get random number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
