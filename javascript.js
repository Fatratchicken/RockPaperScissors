let PLAYER_POINTS = 0;
let COMPUTER_POINTS = 0;

function getInput(){
    let input = prompt("Enter Rock, Paper or Scissors");
    input = input.charAt(0).toLocaleUpperCase() + input.slice(1).toLocaleLowerCase();

    return input;
}

function getComputerInput(){
    const choiceArr = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choiceArr.length);

    return choiceArr[randomIndex];
}

function getRoundWinner(player, computer){
    const beats = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper",
    };

    if (player == computer){
        return "Tie";
    }

    else if (beats[player] == computer){
        PLAYER_POINTS ++;
        return `You win! You: ${player}, computer: ${computer}`
    }

    else{
        COMPUTER_POINTS++;
        return `You lose! You: ${player}, computer: ${computer}`
    }

}

function gameRound(){
    const playerInput = getInput();
    const computerInput = getComputerInput();

    const winner = getRoundWinner(playerInput, computerInput);

    alert(winner);
}

function gamePlay(rounds){
    for (let i = 0; i<rounds; i++){
        gameRound();
    }

    if (PLAYER_POINTS > COMPUTER_POINTS){
        alert("Player wins!");
    }

    else if (PLAYER_POINTS < COMPUTER_POINTS){
        alert("Computer wins!");
    }

    else{
        alert("TIE");
    }
}

gamePlay(5);