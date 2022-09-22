const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');



function game() {
    for (let i=0; i<5; i++){
         playerChoice();
    };
}

function playRound() {
    const playerSelection = playerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    const computerSelection = computerChoice();
    console.log(winner);
}

function playerChoice() {
    buttons.forEach((button) =>{
        button.addEventListener('click', () => {
            if (button.id == 'rock'){
                return 'rock';
            }  
            else if (button.id == 'paper'){
                return 'paper';
            } 
            else if (button.id == 'scissors'){
                return 'scissors';
            }
        });
    });
}


function computerChoice() {
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

// function validateInput(choice) {
//     if (choices.includes(choice)) {
//         return true;
//     } {
//         return false;
//     }
// }

