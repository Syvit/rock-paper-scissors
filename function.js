const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button')

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
    // const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

const computerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
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
