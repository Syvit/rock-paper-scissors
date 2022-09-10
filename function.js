const choices = ['rock', 'paper', 'scissors'];

function game() {
    // for (let i = 0; i <= 5; i++) {
    //     playRound();
    // }
    playRound;
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
}

function playerChoice() {
    let input = prompt('Pick your weapon');
    while (input == null) {
        input = prompt('Pick your weapon');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Pick your weapon. Type it correctly, capitalization does not matter');
        while (input == null) {
            input = prompt('Pick your weapon');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } {
        return false;
    }
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