// const compChoice = ["Rock", "Paper", "Scissors"]

// function computerPlay() {
//     return compChoice[~~(Math.random() * compChoice.length)];
// };

// let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
// let computerSelection = computerPlay().toLowerCase();


// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         return `It's a Tie!`
//     } else if 
//      (playerSelection == "rock" && computerSelection == "scissors" ||
//       playerSelection == "paper" && computerSelection == "rock" ||
//       playerSelection == "scissors" && computerSelection == "paper") { 
//         return `Player Wins!`
//     } else if 
//      (playerSelection == "rock" && computerSelection == "paper" ||
//       playerSelection == "paper" && computerSelection == "scissors" || 
//       playerSelection == "scissors" && computerSelection == "rock") {  
//     }   return `Computers Wins!` 
// };

// let result = playRound(playerSelection, computerSelection)

// let computerScore = 0;
// let playerScore = 0;

// function game() {
//     for (let i = 0; i < 5; i++) {

//     }
// };

// console.log(game());

function game(){
    const games = 5; // total games 
    let playerPoints = 0; // player points to start
    let computerPoints = 0; // computer points to start
  
    for(let i = 0; i < games; i++) {
      // get player answer and store in a variable
      let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
      // generate computer answer
      function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
      let computerSelection = computerPlay();
  
      let round = playRound(playerSelection, computerSelection);
      if(round === "wins"){
        playerPoints++;
        console.log("You Win");
      } else if(round === "loses"){
        computerPoints++;
        console.log("You Lose");
      } else if(round === "ties") {
        console.log("tied");
      } 
    }
  
    if(playerPoints > computerPoints){
      console.log('');
      console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
    } else if (computerPoints > playerPoints) {
      console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
    } else {
        console.log("You tied")
    }
  } // end game();
  
  // play a round and get winner/loser and result and increment winner's points
  function playRound(playerSelection, computerSelection) {  
    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        return 'wins';
      } else if (computerSelection == 'paper') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        return 'wins';
      } else if (computerSelection == 'scissors') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        return 'loses';
      } else if (computerSelection == 'paper') {
        return 'wins';
      } else {
        return 'ties';
      } 
    }
  }

  game();