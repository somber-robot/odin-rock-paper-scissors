function getCpuChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 2.9)];
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?", "");
    return choice;
}

