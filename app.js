// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
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

// listen for guess
UIguessBtn.addEventListener('click', function () {
  let guess = parseInt(UIguessInput.value);
  console.log(guess);

  // validate input
  if (isNaN(guess) || guess > max || guess < min) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // Check if user won
  if (guess === winningNum) {
    // disable input
    UIguessInput.disabled = true;
    setMessage(`Correct! answer is ${guess}`, 'green');
  } else {
  }
});

function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
  UIguessInput.style.borderColor = color;
}
