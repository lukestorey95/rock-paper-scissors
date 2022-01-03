// Generate computer's selection

function computerPlay() {

    function getRandom() {
        const random = Math.floor(Math.random() * 3);
        return random.toString();
    }
    const options = {
        0: "rock",
        1: "paper",
        2: "scissors"
    }
    return options[getRandom()];
}

// Collect selection from player

function userPlay() {
    return window.prompt("Rock, paper or scissors?").toLowerCase();
}

// Play round to determine winner

let userScore = 0;
let compScore = 0;

function playRound(player, comp) {
    player = userPlay();
    comp = computerPlay();;
    if (comp == player) {
        return `It's a draw, you both picked ${player}`;
    } else if (player == "rock" && comp == "scissors") {
        userScore += 1;
        return `You won! Rock beats Scissors`;
    } else if (player == "rock" && comp == "paper") {
        compScore += 1;
        return `You loose! Rock is beaten by Paper`;
    } else if (player == "paper" && comp == "rock") {
        userScore += 1;
        return `You won! Paper beats Rock`;
    } else if (player == "paper" && comp == "scissors") {
        compScore += 1;
        return `You loose! Paper is beaten by Scissors`;
    } else if (player == "scissors" && comp == "paper") {
        userScore += 1;
        return `You won! Scissors beat Paper`;
    } else if (player == "scissors" && comp == "rock") {
        compScore += 1;
        return `You loose! Scissors are beaten by Rock`;
    } else {
        return "ERROR";
    }
}
  
// play best of 5 game

function game() {
    for (let gameRound = 1; gameRound <= 5; gameRound++) {
        console.log(playRound());
        console.log(`Your score is ${userScore}`);
        console.log(`The computer's score is ${compScore}`);
    }
    if (userScore > compScore) {
        console.log(`You won with ${userScore} wins out of 5`);
    } else if (userScore < compScore) {
        console.log(`You lost with ${userScore} wins out of 5!`)
    } else {
        console.log('It was a tie, refresh to play again')
    }
}

game();