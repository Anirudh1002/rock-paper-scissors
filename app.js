const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

let computerScore = 0
let userScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  if(userChoice === 'reset'){
    resetScore()
  }
  else{
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
    userScore++
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
    computerScore++
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
    userScore++
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
    computerScore++
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    userScore++
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
    computerScore++
  }
  
  resultDisplay.innerHTML = result
  computerScoreDisplay.innerHTML = computerScore
  userScoreDisplay.innerHTML = userScore

}

function resetScore(){
  computerScore = 0
  userScore = 0
  computerScoreDisplay.innerHTML = computerScore
  userScoreDisplay.innerHTML = userScore
}