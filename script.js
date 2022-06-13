const compChoice = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return compChoice[~~(Math.random() * compChoice.length)];
};

let playerSelection = prompt('Rock, Paper, or Scissors?');
let computerSelection = computerPlay().toLowerCase();
console.log(playerSelection)
console.log(computerSelection)

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a Tie!`
    } else if 
     (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "paper" && computerSelection == "rock" ||
      playerSelection == "scissors" && computerSelection == "paper") {   
        return `Player Wins!`
    } else if 
     (playerSelection == "rock" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "scissors" || 
      playerSelection == "scissors" && computerSelection == "rock") {  
    }   return `You Lose!` 
};
console.log(playRound(playerSelection, computerSelection));


