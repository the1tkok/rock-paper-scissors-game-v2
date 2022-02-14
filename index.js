
// Global score keeper
let cScore = 0;
let pScore = 0;

// Global round tracker
let currentRound = 0;

// Let human player insert rock, paper, or scissors
let humanPlay = () => {

    let humanChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    return humanChoice;
}

// Computer randomly returns rock, paper, or scissors
let computerPlay = () => {

    let randomGen = ["rock", "paper", "scissors"];

    let rockPaperScissors = Math.floor(Math.random() * randomGen.length);

    return randomGen[rockPaperScissors];

}

// Compare human and computer inputs
// Declare winner and loser
let playRound = (playerSelection, computerSelection) => {

    currentRound++;

    if (playerSelection === computerSelection) {
        console.log("Draw!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock");
        cScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper");
        cScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors");
        cScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors");
        pScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock");
        pScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper");
        pScore++;
    }

        // Print game scores
        let gameScore = () => {
            console.log("Computer score: ", cScore)
            console.log("Your score: ", pScore)
            console.log("Round: ", currentRound)
        }

   gameScore();

}

let game = () => {
    for (i = 1; i <= 5; i++) {
        playRound(humanPlay(), computerPlay(), console.log());
        }
    }

game();