humanScore = 0
computerScore = 0

const intro = document.getElementById("intro")
intro.textContent = "Rafid and Nushy play rock paper scissor! <33"
const btnRock = document.getElementById("rock")
const btnPaper = document.getElementById("paper")
const btnScissor = document.getElementById("scissor")
const computerAnswer = document.getElementById("computeranswer")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")
const choices = document.querySelectorAll(".choice")

intro.style.fontFamily = 'Courier New';
intro.style.fontSize = "50px"
result1.style.color = "purple";                          
result1.style.fontFamily = 'Courier New';
result1.style.fontSize = "30px"
result2.style.color = "purple";                          
result2.style.fontFamily = 'Courier New';
result2.style.fontSize = "30px"
result3.style.color = "purple";                          
result3.style.fontFamily = 'Courier New';
result3.style.fontSize = "30px"     
computerAnswer.style.color = "purple";                          
computerAnswer.style.fontFamily = 'Courier New';
computerAnswer.style.fontSize = "30px"  


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const humanSelection = choice.getAttribute("id")
      playRound(humanSelection)

    })
})



function getComputerChoice() {
  result = Math.floor(Math.random() * 3)

  switch (result) {
      case (0):
          computerAnswer.textContent = "Rafid chose rock";
          return "rock";
      case (1):
          computerAnswer.textContent = "Rafid chose paper";
          return "paper";
      case (2):
          computerAnswer.textContent = "Rafid chose scissor";
          return "scissor";
  }
}


function playRound(humanSelection) {


const computerSelection = getComputerChoice()

function displayResult() {
    if (humanSelection === computerSelection) {
      result1.textContent ="It's a draw baby. we really do share the same braincell!";
      result2.textContent = `You: ` + humanScore;
      result3.textContent = `Rafid: ` + computerScore;
    } else if (
      (humanSelection === "rock" && computerSelection === "scissor") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissor" && computerSelection === "paper")
    ) {
      result1.textContent = "youuuu winnn yayyayaya let's go babyy";  
      result2.textContent = `You: ` + ++humanScore;
      result3.textContent = `Rafid: ` + computerScore;
    } else {
      result1.textContent = "awww you didnt winn its okiee ii still love youu jaan";
      result2.textContent =`You: ` + humanScore;
      result3.textContent =`Rafid: ` + ++computerScore;



    }
  }
displayResult()
}  







