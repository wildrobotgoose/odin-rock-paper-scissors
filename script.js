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

const rock = document.querySelector("button#rock");
const paper = document.querySelector("button#paper");
const scissors = document.querySelector("button#scissors");

rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});

const humanScoreboard = document.querySelector("#human-score");
const computerScoreboard = document.querySelector("#computer-score");
const winnerAnnouncement = document.querySelector("#winner-announcement");

let humanScore = 0;
let computerScore = 0;
humanScoreboard.textContent = humanScore;
computerScoreboard.textContent = computerScore;

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

    humanScoreboard.textContent = humanScore;
    computerScoreboard.textContent = computerScore;

    if (computerScore == 5) {
        winnerAnnouncement.textContent = "Computer wins.";
    }
    else if (humanScore == 5) {
        winnerAnnouncement.textContent = "Human wins.";
    }
}
