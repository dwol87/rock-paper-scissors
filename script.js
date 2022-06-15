const compChoice = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return compChoice[~~(Math.random() * compChoice.length)];
};

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a Tie!`
    } else if 
     (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "paper" && computerSelection == "rock" ||
      playerSelection == "scissors" && computerSelection == "paper") { 
        playerScore++;
        return `Player Wins!`
    } else if 
     (playerSelection == "rock" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "scissors" || 
      playerSelection == "scissors" && computerSelection == "rock") {  
        computerScore++;
    }   return `Computers Wins!` 
};

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        let computerSelection = computerPlay().toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        console.log('Player Wins!')
    } else if (computerScore > playerScore) {
        console.log('Computer Wins!')
    } else {
        console.log(`It's a tie!`)
    }
};

// game();