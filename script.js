function getCpuChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 2.9)];
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?", "");
    return choice;
}

const results = document.querySelector(".results");

let humanScore = 0, cpuScore = 0;
function playRound(humanChoice, cpuChoice){
    humanChoice = humanChoice.toLowerCase();

    results.innerText = `\nCpu: ${cpuChoice}\nYou: ${humanChoice}\n\n`;

    if (humanChoice === "rock"){
        if (cpuChoice === "paper"){
            results.innerText += "You lose! Paper beats Rock";
            cpuScore++;
        }else if (cpuChoice === "rock"){
            results.innerText += "You draw!";
        }else{
            results.innerText += "You win! Rock beats Scissors";
            humanScore++;
        }
    }else if (humanChoice === "paper"){
        if (cpuChoice === "paper"){
            results.innerText += "You draw!";
        }else if (cpuChoice === "rock"){
            results.innerText += "You win! Paper beats Rock";
            humanScore++;
        }else{
            results.innerText += "You lose! Scissors beats Paper";
            cpuScore++;
        }
    }else{
        if (cpuChoice === "paper"){
            results.innerText += "You win! Scissors beats Paper";
            humanScore++;
        }else if (cpuChoice === "rock"){
            results.innerText += "You lose! Rock beats Scissors";
            cpuScore++;
        }else{
            results.innerText += "You draw!";
        }
    }

    results.innerText += `\n\nYou: ${humanScore} | Cpu: ${cpuScore}\n`;
}


let container = document.querySelector(".buttons");

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

container.addEventListener('click', (event) => {
    let cpuSelection = getCpuChoice();
    let button = event.target;
    playRound(button.id, cpuSelection);

    if (humanScore === 5){
        results.innerText += "\n5 POINTS! YOU WIN THE GAME!";
        humanScore = cpuScore = 0;
    }else if (cpuScore === 5){
        results.innerText += "\nCPU GOT 5 POINTS! YOU LOSE THE GAME!";
        humanScore = cpuScore = 0;
    }
});