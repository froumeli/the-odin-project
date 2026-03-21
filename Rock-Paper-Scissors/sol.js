let humanScore = 0;
let computerScore = 0;

// Selectors for the score and result display
let humanScoreDisplay = document.querySelector("div.human");
let computerScoreDisplay = document.querySelector("div.computer");
let resultDisplay = document.querySelector("div.result");
let compChoiceDisplay = document.querySelector("div.compChoice div:last-child");

// Selectors for the buttons
let rockBtn = document.querySelector(".rock button");
let paperBtn = document.querySelector(".paper button");
let scissorsBtn = document.querySelector(".scissors button");



function getComputerChoice() {
    // Since Math.random imitates a uniform distribution 
    // we split the space [0,1] in three distinct spaces
    // and we choose based in which space the random number falls 

    let num = Math.random();
    if(num <= 0.3333) return "rock";
    else if(num <= 0.6666) return "paper";
    else return "scissors";
}

function playRound(humanChoice) {
    // If either the human or the computer has already won 5 rounds, we stop the game
    if(humanScore >= 5 || computerScore >= 5) return ;

    // We get the computer's choice
    const computerChoice = getComputerChoice();

    // Display the computer's choice with the first letter capitalized
    compChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    // Compare the human's choice and the computer's choice to determine the winner of the round
    if(humanChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        resultDisplay.textContent = `Result: You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        resultDisplay.textContent = `Result: You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Display the current scores
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Announce winner if either the human or the computer reaches 5 points
    if(humanScore === 5) {
        resultDisplay.textContent = "Congratulations! You Won the Game!";
    }
    else if(computerScore === 5) {
        resultDisplay.textContent = "Oh no! You Lost the Game!";
    }
}

// Add event listeners to the buttons to play a round when clicked
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));