const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerSelection = "Rock";
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return `You Lose! Paper beats Rock`
    }
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return `You Win! Rock beats Paper`
    } else {
        return `You Tied`
    }
}

/* Needs Work Below*/

function game() {
    return playRound(playerSelection, computerSelection);
}

console.log(game())