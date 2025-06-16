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

const humanSelection = getHumanChoice();
const cpuSelection = getCpuChoice();

playRound(humanSelection, cpuSelection);