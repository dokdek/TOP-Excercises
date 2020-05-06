const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    game(button.id);
  });
});

const resultDiv = document.querySelector("#result-div");
const scoreNum = document.querySelector("#score-num");
const finalResult = document.querySelector("#final-result");

let playerWin = 0;
let compWin = 0;
let tieAmount = 0;
let score = 0;

function computerPlay() {
  let selectionChoices = [`rock`, `paper`, `scissors`];
  return selectionChoices[~~(Math.random() * selectionChoices.length)];
}
//Implies valid input and correct spelling. Case insensitive
function playRound(playerSelection, computerSelection) {
  let cleanPSelection = playerSelection.toLowerCase();
  if (cleanPSelection == computerSelection) {
    tieAmount++;
    return `You tied, you both selected ${cleanPSelection}`;
  } else if (
    (cleanPSelection == `rock` && computerSelection == `paper`) ||
    (cleanPSelection == `paper` && computerSelection == `scissors`) ||
    (cleanPSelection == `scissors` && computerSelection == `rock`)
  ) {
    compWin++;
    return `You lose, ${computerSelection} beats ${cleanPSelection}`;
  } else {
    playerWin++;
    return `You won~ ${cleanPSelection} beats ${computerSelection}`;
  }
}

function game(playerSelection) {
  resultDiv.textContent = playRound(playerSelection, computerPlay());
  if (score > 3) {
    score++;
    scoreNum.textContent = `Rounds played: ${score}`;
    buttons.forEach((button) => {
      button.disabled = true;
    });
    finalResult.textContent = `You won ${playerWin} times, the computer won ${compWin} times, you tied ${tieAmount} times.`;
  } else {
    score++;
    scoreNum.textContent = `Rounds played: ${score}`;
  }
}
