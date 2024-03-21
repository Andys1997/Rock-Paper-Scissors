let playerScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    }
}

let userPick = prompt("Rock, Paper or Scissors?");
let playerSelection = userPick.toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        draws++
        return "It's a Tie! Try again";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You Loose! Scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You Win! Scissors beat Paper";
    } else return "Not a valid choice";
}

function playGame() {
    console.log(playRound(playerSelection, computerSelection));
    console.log("Wins: " + playerScore);
    console.log("Draws: " + draws);
    console.log("Loses: " + computerScore);

}

console.log(playGame());