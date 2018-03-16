
var wins = 0
var losses = 0
var guessesLeft = 10
var guessesSoFar = ""
var userLetters = []
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var randomIndex = Math.floor(Math.random() * choices.length)
var computerChoice = choices[randomIndex]

var userChoiceElement = document.getElementById('userChoice')
var computerChoiceElement = document.getElementById('computerChoice')
var winsElement = document.getElementById('wins')
var lossesElement = document.getElementById('losses')
var guessesLeftElement = document.getElementById('guessesLeft')
var guessesSoFarElement = document.getElementById('guessesSoFar')

function start(){
  guessesLeft = 10
  randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
  guessesSoFar = "";
  guessesSoFarElement.textContent = "";
  userLetters = [];
}

document.onkeyup = function(event) {
  console.log(computerChoice)
  var userChoice = event.key.toLowerCase()
  if(choices.includes(userChoice)){
    console.log("ran")
    if (userChoice === computerChoice) {
      wins ++;
      start();
    }
    else if (userChoice !== computerChoice && !userLetters.includes(userChoice)) {
      userLetters.push(userChoice)
      guessesLeft --;
      guessesSoFarElement.textContent = guessesSoFar += userChoice +", ";
      if (guessesLeft === 0) {
        losses ++;
        start();
      }
    }
  }
  userChoiceElement.textContent = userChoice
  computerChoiceElement.textContent = computerChoice
  winsElement.textContent = wins
  lossesElement.textContent = losses
  guessesLeftElement.textContent = guessesLeft
  guessesSoFarElement.textContent = guessesSoFar
}
