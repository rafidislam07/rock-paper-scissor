humanScore = 0
computerScore = 0
console.log("Welcome to the ultimate game of rock paper scissor!")

function getHumanChoice() {
    userInput0 = prompt("Choose your weapon");
    userInput = userInput0.toLowerCase();

    switch (userInput) {
        case ("rock"):
            console.log("You chose rock");
            return "rock";
            break;
        case ("paper"):
            console.log("You chose paper");
            return "paper";
            break;
        case ("scissor"):
            console.log("You chose scissor");
            return "scissor";
            break;
        default:
            console.log("You are forbidden from choosing that weapon")
            return null
    }
}
const humanSelection = getHumanChoice();

function getComputerChoice() {
    result = Math.floor(Math.random() * 3)

    switch (result) {
        case (0):
            console.log("The Computer chose rock");
            return "rock";
            break;
        case (1):
            console.log("The Computer chose paper");
            return "paper";
            break;
        case (2):
            console.log("The Computer chose scissor");
            return "scissor";
    }
}
const computerSelection = getComputerChoice()

function displayResult(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      console.log("It's a draw!");
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }
displayResult(humanSelection, computerSelection)  




