const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
let pScore = localStorage.getItem('playerScore');
document.querySelector('.playerScore').innerHTML = pScore;
let cScore = localStorage.getItem('computerScore');
document.querySelector('.computerScore').innerHTML = cScore;
let ties = localStorage.getItem('ties');
document.querySelector('.ties').innerHTML = ties;

function game() {
    playerChoice();
};

function playerChoice() {
    buttons.forEach((button) =>{
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });
}

function playRound(playerSelection) {
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner); 
}

const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        document.querySelector('.gameResult').innerHTML = "Tie";
        ties++;
    } else if ((choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")) {
        document.querySelector('.gameResult').innerHTML = "Player Wins";
        pScore++;
    } else {
        document.querySelector('.gameResult').innerHTML = "Computer Wins";
        cScore++;
    }

    document.querySelector('.playerScore').innerHTML = pScore;
    localStorage.setItem('.playerScore', pScore);
    document.querySelector('.computerScore').innerHTML = cScore;
    localStorage.setItem('.computerScore', cScore);
    document.querySelector('.ties').innerHTML = ties;
    localStorage.setItem('.ties', ties);
}


// function points (playerPoints) {
//     if (winner === 'Player'){
//         console.log(pointAlloc);
//         return (playerPoints + 1);
//     }    
// }

// const pointReturn = points(0);

// document.querySelector('.playerScore').innerHTML = (`player score: ${pointReturn}`);
// function scoreBoard(score) {
//     if checkWinner = 'player'{
//         pScore.innerHTML
//     }
// }
game();
