const choices = ["rock", "papers", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if(playerChoice === computerChoice){
        resultDisplay.textContent = "Draw";
    }else if(playerChoice === "rock" && computerChoice === "scissors"){
        resultDisplay.textContent = "You Win";
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        resultDisplay.textContent = "You Win";
    }else if(playerChoice === "paper" && computerChoice === "rock"){
        resultDisplay.textContent = "You Win";
    }else{
        resultDisplay.textContent = "You Lose";
    }
}