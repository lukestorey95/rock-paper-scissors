function getRandom() {
    const random = Math.floor(Math.random() * 3);
    return random.toString();
}

const options = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

function computerPlay() {
    return options[getRandom()];
}

const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const comp = computerSelection;
    if (comp == player) {
        return `It's a draw, you both picked ${player}`;
    } else if (player == "rock" && comp == "scissors") {
        return `You won! Rock beats Scissors`;
    } else if (player == "rock" && comp == "paper") {
        return `You loose! Rock is beaten by Paper`;
    } else if (player == "paper" && comp == "rock") {
        return `You won! Paper beats Rock`;
    } else if (player == "paper" && comp == "scissors") {
        return `You loose! Paper is beaten by Scissors`;
    } else if (player == "scissors" && comp == "paper") {
        return `You won! Scissors beat Rock`;
    } else if (player == "scissors" && comp == "rock") {
        return `You loose! Scissors are beaten by Rock`;
    } else {
        return "ERROR";
    }
}
  
console.log(playRound(playerSelection, computerSelection));