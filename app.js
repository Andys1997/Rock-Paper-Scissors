
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "Rock") || (playerSelection === "paper" && computerSelection === "Paper") || (playerSelection === "scissors" && computerSelection === "Scissors")) {
        return "It's a Tie! Try again";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You Loose! Scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beat Paper";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));