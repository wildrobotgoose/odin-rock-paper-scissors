function getComputerChoice() {
    const r = 3 * Math.random();
    if (r < 1) {
        return "rock";
    }
    else if (r < 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
