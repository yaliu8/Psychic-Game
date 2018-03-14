
var wins = 0
var losses = 0
var guessesLeft = 10
var guessesSoFar = ""

var userChoiceElement = document.getElementById('userChoice')
var computerChoiceElement = document.getElementById('computerChoice')
var winsElement = document.getElementById('wins')
var lossesElement = document.getElementById('losses')
var guessesLeftElement = document.getElementById('guessesLeft')
var guessesSoFarElement = document.getElementById('guessesSoFar')

var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

document.onkeyup = function(event) {
  var userChoice = event.key.toLowerCase()
  var randomIndex = Math.floor(Math.random() * choices.length)
  var computerChoice = choices[randomIndex]

if (userChoice === computerChoice) {
    wins ++;
    guessesSoFarElement.textContent = guessesSoFar += userChoice+", ";
    guessesSoFar = "";
    }
else if (userChoice !== computerChoice) {
    guessesLeft --;
    guessesSoFarElement.textContent = guessesSoFar += userChoice +", ";
if (guessesLeft === 0) {
    losses ++;
    guessesLeft = 10;
    guessesSoFarElement.textContent = guessesSoFar += userChoice+", ";
    guessesSoFar = "";
}
}
    userChoiceElement.textContent = userChoice
    computerChoiceElement.textContent = computerChoice
    winsElement.textContent = wins
    lossesElement.textContent = losses
    guessesLeftElement.textContent = guessesLeft
    guessesSoFarElement.textContent = guessesSoFar
}
