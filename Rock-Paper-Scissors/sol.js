function getComputerChoice() {
    // Since Math.random imitates a uniform distribution 
    // we split the space [0,1] in three distinct spaces
    // and we choose based in which space the random number falls 

    let num = Math.random();
    if(num <= 0.3333) return "rock";
    else if(num <= 0.6666) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let input = prompt("What do you choose?");
    return input;
}

function playRound(humanScore, computerScore) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().toLowerCase();

    // Human chooses rock
    if(humanChoice == "rock") {
        if(computerChoice == "rock") console.log("That's a tie!");
        else if(computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } 
    }

    // Human chooses paper
    if(humanChoice == "paper") {
        if(computerChoice == "paper") console.log("That's a tie!");
        else if(computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
        else {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } 
    }

    // Human chooses scissors
    if(humanChoice == "scissors") {
        if(computerChoice == "scissors") console.log("That's a tie!");
        else if(computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        } 
    }

    return {humanScore, computerScore}
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++){
        let result = playRound(humanScore, computerScore);
        humanScore = result.humanScore;
        computerScore = result.computerScore;
    }

    if(humanScore > computerScore) console.log("Congratulations! You Won!");
    else if(computerScore > humanScore) console.log("Oh no! You Lost!");
    else console.log("That's a tie!");
}

playGame();