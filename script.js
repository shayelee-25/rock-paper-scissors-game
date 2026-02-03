// logic to collect a randomized choice from the computer
let computerInput = Math.floor(Math.random() * 100) + 1;
function getComputerChoice () {
    if (computerInput <= 33) {
       return "rock";
    } else if (computerInput > 33 && computerInput <= 66) {           
       return "paper"; 
    } 
      return "scissors";
} 
//console.log(getComputerChoice())

// prompt to collect user's choice
const userInput = prompt("Please type your choice: rock, paper, scissors").toLowerCase();
function getHumanChoice() {
    return userInput;
} 
//console.log(getHumanChoice())


// variables to correlate collected input and parameters for playRound
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// logic for a single round of the game
function playRound(humanChoice, computerChoice) {
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
//console.log(playRound(humanChoice, computerChoice))

// scoring variables
let humanScore = 0; 
let computerScore = 0;


function playGame() {
    for (i = 0; i < 5; i++ ) { 
       console.log(getHumanChoice())
       console.log(getComputerChoice())
       console.log(playRound());
       console.log(`User: ${humanScore}`, `Computer: ${computerScore}`)
    }
    displayResults();
} 
//console.log(playGame())

// logic to display results at the end of the game
function displayResults() {
    if (humanScore > computerScore) {
        console.log(`You won the game, ${humanScore} - ${computerScore}!`);
    } else (humanScore < computerScore) 
        console.log(`You lost ${humanScore} - ${computerScore}, better luck next time!`);
    } 
playGame();

/* Create function getComputerChoice
    function returns string values: "rock", "paper", or "scissors"
Test function with console.log

Use prompt to get user's input
Create function getHumanChoice
Test function with console.log

Create variable humanScore
Create variable computerScore
Initialize variables with the value of 0

Create function playRound
Define two parameters for playRound: humanChoice and computerChoice
    These parameters will take the human and computer choices as arguments
Make function humanChoice case-insensitive
console.log should return a string value, such as "You lose! Paper beats Rock."
Increment the humanScore or computerScore variables based on the round winner

Create function playGame
Move the playRound function and score variables so that they're declared inside of the playGame function
Play 5 rounds by calling playRound 5 times
Score variables track with each round
Winner is declared at the end of the game*/