// Alphabet choices
var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Deafult Settings
var wins = 0; 
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;

// randomLetter variable set equal to random letter from letterChoice array.
var randomLetter = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];

function guessCounter() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function showGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(', ');
}

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	randomLetter = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
}

// Function run on user key press
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    letterUser.push(userGuess);

	guessCounter();
    showGuesses();

	if (userGuess === randomLetter){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
        document.querySelector("#lose").innerHTML = "Losses: " + losses;
		restart();
	}
  };

