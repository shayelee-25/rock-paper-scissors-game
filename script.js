// function to collect a randomized choice from the computer
function getComputerChoice() {
    const input = ["rock", "paper", "scissors"];
    const computerInput = input[Math.floor(Math.random() * input.length)];
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

scoreContainer = document.querySelector("#scoreContainer");
const score = document.createElement("h3");
scoreContainer.appendChild(score);

// single round of the game
results = document.querySelector("#results");

function playRound() {
    getComputerChoice();
    const roundResults = document.createElement("p");
    let computerChoice = getComputerChoice();
    if ( 
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        roundResults.textContent = "Yay, you won this round!";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        roundResults.textContent =  "Oh no, you lost this round!";
    } else if (
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")) {
        roundResults.textContent =  "Oops! You tied, try again!"; 
    }
    results.appendChild(roundResults);
    score.textContent = ("You: " + humanScore + " Computer: " + computerScore);
} 

// set up for event listeners
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    playRound();
    displayResults();
});

paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    playRound();
    displayResults();
});

scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    playRound();
    displayResults();
});

// display results at the end of the game
function displayResults() {
    const gameResults = document.createElement("h3");
    if (humanScore === 5) {
        gameResults.textContent = `You won the game, ${humanScore} - ${computerScore}!`;
        results.appendChild(gameResults);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameResults.textContent = `You lost ${humanScore} - ${computerScore}, better luck next time!`;
        results.appendChild(gameResults);
        humanScore = 0;
        computerScore = 0;
    }
}

/*
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
*/
