// function to collect a randomized choice from the computer
const input = ["rock", "paper", "scissors"];
let computerInput = input[Math.floor(Math.random() * input.length)];function getComputerChoice() {
    if (computerInput === "rock") {
        return "Computer chose: rock";
    } else if (computerInput === "paper") {           
       return "Computer chose: paper"; 
    } 
       return "Computer chose: scissors";
} 
console.log(getComputerChoice())

// scoring variables
let humanScore = 0; 
let computerScore = 0;

// single round of the game
function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    //console.log(humanInput);
    //console.log(getComputerChoice());
    if ( 
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return "Yay, you won this round!";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        return "Oh no, you lost this round!";
    }
        return "Oops! You tied, try again!";
} 
//console.log(playRound())
// display results at the end of the game
function displayResults() {
    if (humanScore === 5) {
        return `You won the game, ${humanScore} - ${computerScore}!`;
    } else if (computerScore === 5) {
        return `You lost ${humanScore} - ${computerScore}, better luck next time!`;
    } else {
        return "No winner this game, refresh page to play again!";
    }
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";
rockBtn.style.fontSize = "12px";
rockBtn.style.margin = "6px";
const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";
paperBtn.style.fontSize = "12px";
paperBtn.style.margin = "6px";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors";
scissorsBtn.style.fontSize = "12px";
scissorsBtn.style.margin = "6px";
const buttonContainer = document.querySelector("#buttonContainer");
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);

buttonContainer.addEventListener("click", (event) => {
    let selection = event.target

    if (selection === rockBtn) {
        selection = "rock";
    } else if (selection === paperBtn) {
        selection = "paper";
    } selection = "scissors";

    const humanSelection = document.createElement("div");
    humanSelection.textContent = "You chose:" + `${selection}`;
    humanSelection.style.fontSize = "18px";
    const computerSelection = document.createElement("div");
    computerSelection.textContent = `${getComputerChoice()}`;
    computerSelection.style.fontSize = "18px";
    const selectionContainer = document.querySelector("#selectionContainer");

    selectionContainer.appendChild(humanSelection);
    selectionContainer.appendChild(computerSelection);
});

const scoreContainer = document.querySelector("#scoreContainer");
scoreContainer.textContent = "Score: ";
scoreContainer.style.fontSize = "18px";
/*

const showHumanScore = `${humanScore}`;
showHumanScore.textContent = "You: " + `${humanScore}`;
//showHumanScore.style.fontSize = "18px";
const showComputerScore = `${computerScore}`;
showComputerScore.textContent = "Computer: " + `${computerScore}`;
//showComputerScore.style.fontSize = "18px";
scoreContainer.appendChild(showHumanScore);
scoreContainer.appendChild(showComputerScore);








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
playGame(); */
