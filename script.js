humanScore = 0
computerScore = 0
console.log("Welcome to the ultimate game of rock paper scissor!")

function getHumanChoice() {
    userInput0 = prompt("Choose your weapon");
    userInput = userInput0.toLowerCase();

    switch (userInput) {
        case ("rock"):
            console.log("You chose rock");
            humanSelection = "rock";
            break;
        case ("paper"):
            console.log("You chose paper");
            humanSelection = "paper";
            break;
        case ("scissor"):
            console.log("You chose scissor");
            humanSelection = "scissor";
            break;
        default:
            console.log("You are forbidden from choosing that weapon")
            humanSelection = null
    }
}
getHumanChoice()


function getComputerChoice() {
    result = Math.floor(Math.random() * 3)

    switch (result) {
        case (0):
            console.log("The Computer chose rock");
            computerSelection = "rock";
            break;
        case (1):
            console.log("The Computer chose paper");
            computerSelection = "paper";
            break;
        case (2):
            console.log("The Computer chose scissor");
            computerSelection = "scissor";
            break;
    }
}
getComputerChoice()





