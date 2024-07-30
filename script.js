function getComputerChoice() {
    const r = 3 * Math.random();
    if (r < 1) {
        return "Rock";
    }
    else if (r < 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function capitalizeFirstLetter(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1);
}

function getHumanChoice() {
    const choice = prompt("Enter choice: ");
    return capitalizeFirstLetter(choice.toLowerCase());
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function computeRoundResult(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return "tie";
        }
        else if (humanChoice == "Rock" && computerChoice == "Paper") {
            return "lose";
        }
        else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            return "lose";
        }
        else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            return "lose";
        }
        else {
            return "win";
        }
    }

    function playRound(humanChoice, computerChoice) {
        const roundResult = computeRoundResult(humanChoice, computerChoice);

        if (roundResult == "tie") {
            console.log(`You tie!  ${humanChoice} ties ${computerChoice}.`);
        }
        else if (roundResult == "lose") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
    }

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
}
