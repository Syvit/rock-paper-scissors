const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button')

function game() {
    // for (let i=0; i<5; i++){
    //      playerChoice();
    playerChoice();
};


function playRound(playerSelection) {
    // const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function playerChoice() {
    buttons.forEach((button) =>{
        button.addEventListener('click', e => {
            playRound(button.id);
        });
    });
}


const computerChoice = () => {
    choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if ((choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")) {
        return 'Player';
    } else {
        return 'Computer';
    }
}
game();
