function getComputerChoice(){
const randomNumber = Math.floor(Math.random() * 3);
if (randomNumber === 0){
    return "piedra";
    }
else if (randomNumber === 1){
    return "papel";
    }
else{
    return "tijeras";
    }
}

function getHumanChoice(){
    const choice = prompt("Elige piedra, papel o tijeras")
    return choice
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
 function playRound(humanChoice, computerChoice){
humanChoice = humanChoice.toLowerCase();
if (humanChoice === computerChoice){
console.log("¡Empate!")
}

if (humanChoice === "papel" && computerChoice === "piedra") {
    console.log("¡Gana el humano!")
humanScore++;
}
if (humanChoice === "tijeras" && computerChoice === "papel") {
    console.log("¡Gana el humano!")
humanScore++;
} 
if (humanChoice === "piedra" && computerChoice === "tijeras"){console.log("Gana el humano")
humanScore++;}
if (humanChoice === "piedra" && computerChoice === "papel") {
    console.log("¡Gana la compu!")
computerScore++;
}
if (humanChoice === "papel" && computerChoice === "tijeras") {
    console.log("¡Gana la compu!")
computerScore++;
} 
if (humanChoice === "tijeras" && computerChoice === "piedra"){
    console.log("¡Gana la compu!")
computerScore++;
}
}
let humanSelection;
let computerSelection;
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
//una vez arriba
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
//segunda partida
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
//tercera partida
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
//cuarta partida
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
//quinta partida
//aqui asignamos  quien le gana a quien que recibe osea un premio
//pero noo, en este caso es un mensaje jeje namas
if (humanScore > computerScore){
    console.log("Win the Human!!")
    }
if (humanScore < computerScore) {
    console.log("Win the computer")
}
if (humanScore === computerScore) {
    console.log("Draw!! ")
}
}
playGame()