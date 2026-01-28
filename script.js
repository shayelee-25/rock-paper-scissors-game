console.log("Hello, World!")

// Used the Math.random method and if/else if conditional to get return value in the form of a string; rock, paper, scissors
let computerChoice = Math.floor(Math.random() * 100) + 1;
function getComputerChoice (computerChoice) {
    if (computerChoice <= 33) {
        return "Rock";
    } else if (computerChoice > 33 && computerChoice <= 66) {           
        return "Paper"
    } else {
        return "Scissors";
    } }

 // "message" variable and prompt must be inside getHumanChoice function in order to trigger the input request everytime function is used
function getHumanChoice() {
    let answer = prompt("Please type your choice: Rock, Paper, Scissors");
}

function playRound(humanChoice, computerChoice) {
    let result;
    if ( 
        (humanChoice === "Rock" && computerChoice === "Rock") || (humanChoice === "Paper" && computerChoice === "Paper") || (humanChoice === "Scissors" && computerChoice === "Scissors")) {
        result = "Oops! You tied, try again!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        result = "Oh no, you lost this round!";
    } else {
        result = "Yay, you win this round!";} 
        return result; }

let humanScore = 0;
let computerScore = 0;

humanScore += 1;
computerScore += 1;



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