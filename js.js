const buttons = document.querySelectorAll('button');

function playerChoice() {
    buttons.forEach((button) =>{
        button.addEventListener('click', () => {
            if (button.id == 'rock'){
                console.log( 'rock');
            }  
            else if (button.id == 'paper'){
                console.log( 'paper');
            } 
            else if (button.id == 'scissors'){
                console.log( 'scissors');
            };
        });
    });
}

console.log(playerChoice());