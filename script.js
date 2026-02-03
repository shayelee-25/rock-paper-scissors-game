// function to collect a randomized choice from the computer
const input = ["rock", "paper", "scissors"];
let computerInput = input[Math.floor(Math.random() * input.length)];function getComputerChoice () {
    if (computerInput === "rock") {
        return "rock";
    } else if (computerInput === "paper") {           
       return "paper"; 
    } 
       return "scissors";
} 

// scoring variables
let humanScore = 0; 
let computerScore = 0;

// single round of the game
function playRound(humanChoice, computerChoice) {
    let humanInput = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
    humanChoice = humanInput;
    computerChoice = getComputerChoice();
    console.log(humanInput)
    console.log(getComputerChoice())
    if ( 
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        return "Yay, you won this round!";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1;
        return "Oh no, you lost this round!";
    }
        return "Oops! You tied, try again!";
} 

// display results at the end of the game
function displayResults() {
    if (humanScore > computerScore) {
        return `You won the game, ${humanScore} - ${computerScore}!`;
    } else if (humanScore < computerScore) {
        return `You lost ${humanScore} - ${computerScore}, better luck next time!`;
    } else {
        return "No winner this game, refresh page to play again!";
    }
}

// sets game to be a total of 5 rounds
function playGame() {
    const totalRounds = 5;
    for (let round = 1; round <= totalRounds; round++) {
        console.log(`-----Round ${round}-----`)
        console.log(playRound())
        console.log(`User: ${humanScore}`, `Computer: ${computerScore}`)
    }
    console.log(displayResults())
}

// starts game
playGame();
