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

let humanScore = 0;
let computerScore = 0;
