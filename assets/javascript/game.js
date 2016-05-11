var computerGuess = "";
var concealedWord = "";
var guessesRemaining = 15;
var guess;
var wins = 0;
var victory = 0;
var lettersGuessed = "";
var correctLetters = "";

var hangman = {

	words: ["nissan", "toyota", "ford", "chevrolet", "mazda", "hyundai", "infiniti", "acura", "jeep", "lexus", "mclaren"],

	initialHTML: function() {
		var html = "<p>Wins: </p>" + wins + "<p>Guesses Remaining: </p>" + guessesRemaining + "<p>Letters Guessed: </p>" + lettersGuessed;
		document.querySelector("#stats").innerHTML = html;
	},

	wordSelect: function() {
		var randomNumber = [Math.floor(Math.random() * 11)];
		computerGuess = this.words[randomNumber];
		console.log(computerGuess);
	},

	clueWord: function() {
		for (i = 0; i < computerGuess.length; i++) {
			concealedWord += "<p class='underScore'>_ </p>";
			document.querySelector("#currentWord").innerHTML = concealedWord;
			//console.log(concealedWord);
		}
	},

	wordGuessing: function() {
		if (computerGuess.indexOf(guess) !== -1) {
			//console.log(computerGuess + guess);
			//console.log("Contains This Letter");
		} else {
			guessesRemaining -= 1;
			lettersGuessed += guess;
			//console.log("Does Not Contain This Letter " + guessesRemaining);
		}
	},

	updateWord: function() {
		for (var i = 0; i < computerGuess.length; i++) {
			if (guess === computerGuess[i]) {
				//console.log(computerGuess[i] + i + "okay");
				var par = document.getElementsByClassName('underScore');
				par[i].innerHTML = guess;
				victory ++;
				//console.log(computerGuess.length);
				//console.log(wins);
				//console.log(concealedWord);
			}
		}
	},

	updateHTML: function() {
		guessesRemaining: 15;
		var html = "<p>Wins: </p>" + wins + "<p>Guesses Remaining: </p>" + guessesRemaining + "<p>Letters Guessed: </p>" + lettersGuessed;
		document.querySelector("#stats").innerHTML = html;
	},

	resetHTML: function() {
		lettersGuessed = " ";
		guessesRemaining = 15;
		computerGuess = [];
		concealedWord = [];
		victory = 0;
		this.wordSelect();
		this.clueWord();
	},

	bigLose: function() {
		if (guessesRemaining === 0) {
			alert("you lose, airbags deployed :(");
			this.resetHTML();	
		}
	},

	bigWin: function() {
		if (victory === computerGuess.length) {
			alert("you win! good job! you get a new car");
			wins += 1;
			this.resetHTML();
		}
	}
}

hangman.initialHTML();
hangman.wordSelect();
hangman.clueWord();

document.onkeyup = function(event) {
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log(guess);
	hangman.wordGuessing();
	hangman.updateWord();
	hangman.bigLose();
	hangman.bigWin();
	hangman.updateHTML();
}
	// var par = document.getElementsByClassName('underScore');
	// console.log(par[i]);
