const compChoice = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return compChoice[~~(Math.random() * compChoice.length)];
};

let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
let computerSelection = computerPlay().toLowerCase();


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
    }   return `Computers Wins!` 
};

let roundResults = playRound(playerSelection, computerSelection);
let computerScore = 0;
let playerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(playerSelection)
        console.log(computerSelection)
        return roundResults;
    }
};


console.log(game());




