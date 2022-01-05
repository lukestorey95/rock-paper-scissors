// Play match

// Generate computer selection of rock paper or scissors
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

// Allow user to input selection of rock paper or scissors
let userSelection = ""

function userPlay(selection) {
    userSelection = selection;
    console.log(userSelection);
    playMatch();
}

// Update round number
let roundNumber = 0;

let computerScore = 0;
let playerScore = 0;
let winner = "";

// Check winner and change colour
let winnerColor = ""

function setWinnerColor() {
    if (winner === 'tie') {
        winnerColor = "orange";
    } else if (winner === 'player') {
        winnerColor = "green";
    } else if (winner === 'computer') {
        winnerColor = "red";
    }
    
}

// Compare selections and determine winner
function playMatch() {
    const player = userSelection;
    const computer = computerPlay();
    if(player === computer){
        console.log('Tie');
        winner = 'tie';
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            console.log('Computer Won');
            computerScore++;
            winner = 'computer';
        }else{
            console.log('Player Won');
            playerScore++;
            winner = 'player';
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            console.log('Computer Won');
            computerScore++;
            winner = 'computer';
        }else{
            console.log('Player Won');
            playerScore++;
            winner = 'player';
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            console.log('Computer Won');
            computerScore++;
            winner = 'computer';
        }else{
            console.log('Player Won');
            playerScore++;
            winner = 'player';
        }
    }
    roundNumber++;
    console.log(roundNumber);
    setWinnerColor();
    displayWinner();
    updateRound();
}   

// Display match winner
function displayWinner() {
    switch (roundNumber) {
        case 0:
            document.getElementById("round-one").style.backgroundColor = winnerColor;
            document.getElementById("round-two").style.backgroundColor = winnerColor;
            document.getElementById("round-three").style.backgroundColor = winnerColor;
            document.getElementById("round-four").style.backgroundColor = winnerColor;
            document.getElementById("round-five").style.backgroundColor = winnerColor;
            break;
        case 1:
            document.getElementById("round-one").style.backgroundColor = winnerColor;
            break;
        case 2:
            document.getElementById("round-two").style.backgroundColor = winnerColor;
            break;
        case 3:
            document.getElementById("round-three").style.backgroundColor = winnerColor;
            break;
        case 4:
            document.getElementById("round-four").style.backgroundColor = winnerColor;
            break;
        case 5:
            document.getElementById("round-five").style.backgroundColor = winnerColor;
            break;
        default:
            console.log("colour update error");
    }
}

// Play round

let playerGameScore = 0;
let computerGameScore = 0;

// If round number is 5 update Game score, reset round number
function updateGameScore() {
    if (playerScore > computerScore) {
        playerGameScore++;
        document.getElementById("user-score").textContent = playerGameScore;
        console.log(`player got ${playerScore} and computer got ${computerScore} so player +1`)
    } else if (playerScore < computerScore) {
        computerGameScore++;
        document.getElementById("comp-score").textContent = computerGameScore;
        console.log(`player got ${playerScore} and computer got ${computerScore} so computer +1`)
    }
}

function resetRoundScore() {
    computerScore = 0;
    playerScore = 0;
}

let gameNumber = 1
let roundText = ""

function updateGameText() {
    switch (gameNumber) {
        case 2:
            roundText = "Second Round";
            break;
        case 3:
            roundText = "Third Round";
            break;
        case 4:
            roundText = "Fourth Round";
            break;
        case 5:
            roundText = "Fifth Round";
            break;
        default:
            roundText = "Round " + gameNumber;
            break;
    }
    
}

// If round number is less than 5 start match
function updateRound() {
    if (roundNumber === 5) {
        updateGameScore();
        whoseWinning();
        gameNumber++;
        updateGameText();
    } else if (roundNumber === 6) {
        roundNumber = 0;
        winnerColor = "white";
        displayWinner();
        resetRoundScore();
        document.getElementById("game-number").textContent = roundText;
    }
}

let whoseAhead = "Let's  Duel"

function whoseWinning() {
    if (playerGameScore === 1 && computerGameScore === 0) {
        whoseAhead = "First point to you"
    } else if (playerGameScore === 0 && computerGameScore === 1) {
        whoseAhead = "First point to me!"
    } else if (playerGameScore === 2 && computerGameScore < 2) {
        whoseAhead = "You've pulled ahead"
    } else if (playerGameScore < 2 && computerGameScore === 2) {
        whoseAhead = "I'm in the lead"
    } else if (playerGameScore > computerGameScore) {
        whoseAhead = "You're winning"
    } else if (playerGameScore < computerGameScore) {
        whoseAhead = "I'm winning"
    } else {
        whoseAhead = "It's a tie"
    }

    document.getElementById("whose-ahead").textContent = whoseAhead;
}


// Play game

// Start round
// Reset