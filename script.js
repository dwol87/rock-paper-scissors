const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

