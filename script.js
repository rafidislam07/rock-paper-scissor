console.log("rock paper xxx")
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
    
}
rock = "The computer chose rock"
paper = "The computer chose paper"
scissor = "The computer chose scissor"

result = getComputerChoice()
console.log(result)

result === 0 ? console.log(rock):
result === 1? console.log(paper):
console.log(scissor);

