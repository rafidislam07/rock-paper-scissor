humanScore = 0
computerScore = 0
console.log("Welcome to the ultimate game of rock paper scissor!")

function getHumanChoice() {
    userInput1 = prompt("Choose your weapon");
    userInput = userInput1.toLowerCase();
    userInput === "rock" ? console.log("You chose rock"):
    userInput === "paper"? console.log("You chose paper"):
    userInput === "scissor"? console.log("You chose scissor"):
    console.log("You cannot choose that weapon");
}
getHumanChoice()

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}
rock = "The computer chose rock"
paper = "The computer chose paper"
scissor = "The computer chose scissor"

result = getComputerChoice()

result === 0 ? console.log(rock):
result === 1? console.log(paper):
console.log(scissor);
