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
    pScore = 0;
    cScore = 0;
    ties = 0;
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
}

const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

function resetGame () {

    if (pScore == 5){
        document.querySelector('.winnerText').innerHTML = 'Player Wins the game'
        buttons.forEach((button) =>{
            button.remove();
        });
        const restartGame = document.createElement('button');
        restartGame.textContent = 'Restart Game';
        document.querySelector('#buttons').append(restartGame);
        
        restartGame.addEventListener('click', () => {
            location.reload();
        })

        pScore = 0;
        cScore = 0;
        ties = 0;
    }
    else if (cScore == 5){
        document.querySelector('.winnerText').innerHTML = 'Computer wins the game!'
        buttons.forEach((button) =>{
            button.remove();
        });
        const restartGame = document.createElement('button');
        restartGame.textContent = 'Restart Game';
        document.querySelector('#buttons').append(restartGame);
        
        restartGame.addEventListener('click', () => {
            location.reload();
        })
        pScore = 0;
        cScore = 0;
        ties = 0;
    }
    else if (ties == 5){
        document.querySelector('.winnerText').innerHTML = 'Tie Game!'
        buttons.forEach((button) =>{
            button.remove();
        });
        const restartGame = document.createElement('button');
        restartGame.textContent = 'Restart Game';
        document.querySelector('#buttons').append(restartGame);
        
        restartGame.addEventListener('click', () => {
            location.reload();
        })
        pScore = 0;
        cScore = 0;
        ties = 0;
    }
}

function checkWinner(choiceP, choiceC) {
    const computerSelection = computerChoice();
    if (choiceP === choiceC) {
        document.querySelector('.roundResult').innerHTML = "Tie";
        document.querySelector('.compSelection').style.color = '#DDDDDD';
        document.querySelector('.compSelection').innerHTML = (`Computer chose ${computerSelection}`);
        document.querySelector('.roundResult').style.color = '#DDDDDD';
        ties++;
    } else if ((choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")) {
        document.querySelector('.roundResult').innerHTML = "Player";
        document.querySelector('.compSelection').style.color = '#60f360';
        document.querySelector('.compSelection').innerHTML = (`Computer chose ${computerSelection}`);
        document.querySelector('.roundResult').style.color = '#60f360';
        pScore++;
    } else {
        document.querySelector('.compSelection').innerHTML = (`Computer chose ${computerSelection}`);
        document.querySelector('.compSelection').style.color = '#F05454';
        document.querySelector('.roundResult').innerHTML = "Computer";
        document.querySelector('.roundResult').style.color = '#F05454';
        cScore++;
    }

    document.querySelector('.playerScore').innerHTML = pScore;
    localStorage.setItem('.playerScore', pScore);
    document.querySelector('.computerScore').innerHTML = cScore;
    localStorage.setItem('.computerScore', cScore);
    document.querySelector('.ties').innerHTML = ties;
    localStorage.setItem('.ties', ties);

    resetGame();
}
game();
