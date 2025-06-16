function getCpuChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 2.9)];
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?", "");
    return choice;
}

let humanScore = 0, cpuScore = 0;

function playRound(humanChoice, cpuChoice){
    humanChoice = humanChoice.toLowerCase();

    console.log(`Cpu: ${cpuChoice}`);
    console.log(`You: ${humanChoice}`);

    if (humanChoice === "rock"){
        if (cpuChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            cpuScore++;
        }else if (cpuChoice === "rock"){
            console.log("You draw!");
        }else{
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    }else if (humanChoice === "paper"){
        if (cpuChoice === "paper"){
            console.log("You draw!");
        }else if (cpuChoice === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        }else{
            console.log("You lose! Scissors beats Paper");
            cpuScore++;
        }
    }else{
        if (cpuChoice === "paper"){
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }else if (cpuChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            cpuScore++;
        }else{
            console.log("You draw!");
        }
    }
}

function playGame(){
    for (i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let cpuSelection = getCpuChoice();

        playRound(humanSelection, cpuSelection);
    }

    console.log(`Final score:\n\tYou - ${humanScore}\n\tCpu - ${cpuScore}`);

    if (humanScore > cpuScore) console.log("YOU WIN THE GAME!");
    else if (cpuScore > humanScore)  console.log("YOU LOSE THE GAME!");
    else console.log("IT'S A DRAW!");
}

playGame()