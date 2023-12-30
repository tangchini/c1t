// Generating a random number between 1 and 100
const winningNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  const guess = parseInt(document.getElementById("guessField").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    if (guess === winningNumber) {
      message.textContent = `Congratulations! You guessed the correct number (${winningNumber})!`;
      message.style.color = "green";
      disableInputAndButton();
    } else {
      let hint = guess < winningNumber ? "higher" : "lower";
      message.textContent = `Try again! Guess a ${hint} number.`;
      message.style.color = "red";
    }
  }
}

// Function to disable input field and button after winning
function disableInputAndButton() {
  document.getElementById("guessField").disabled = true;
  document.querySelector("button").disabled = true;
}
