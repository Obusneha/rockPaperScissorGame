// rock, paper, scissors
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;

const displayPlayer = document.querySelector(".scoreNum");
const displayComp = document.querySelector(".scoreComp");
const displayResult = document.getElementById("displayResult");

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log("Computer chose: " + computerChoice);

  // Display player and computer choices
  displayResult.innerHTML = `<p style="font-size: 16px;">Player chose: ${playerChoice}</p><p style="font-size: 16px;">Computer chose: ${computerChoice}</p>`;


  // Determine the winner
  if (playerChoice === computerChoice) {
    displayResult.innerHTML += '<span style="color: orange;">It`s a tie!</span>';
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    displayResult.innerHTML += '<span style="color: rgb(38, 240, 12);">You win!</span>';
    playerScore++;
  } else {
    displayResult.innerHTML += '<span style="color: red;">Computer wins!</span>';
    compScore++;
  }

  // Update the scores on the display
  displayPlayer.textContent = "Player: " + playerScore;
  displayComp.textContent = "Comp: " + compScore;
}
