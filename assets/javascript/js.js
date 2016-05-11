var computerGuess = "";
var concealedWord = "";
var guessesRemaining = 15;
var guess;
var wins = 0;
var victory = "";
var lettersGuessed = "";

var hangman = {

	words: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],

	initialHTML: function() {
		var html = "<p>Wins: </p>" + wins + "<p>Guesses Remaining: </p>" + guessesRemaining + "<p>Letters Guessed: </p>" + lettersGuessed;
		document.querySelector("#stats").innerHTML = html;
	},

	wordSelect: function() {
		var randomNumber = [Math.floor(Math.random() * 10)];
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
				//console.log(computerGuess.length);
				//console.log(wins);
				//console.log(concealedWord);
            	victory = victory + guess;
        		console.log(victory);
        		for (var j = 0; j < victory.length; j++) {
        			if (victory[i] === guess) {
        				victory !== victory + guess};
        		};
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
		this.wordSelect();
		this.clueWord();
		victory = [];
	},

	bigLose: function() {
		if (guessesRemaining === 0) {
			alert("You Lose!");
			this.resetHTML();	
		}
	},

	bigWin: function() {
		if (victory.length === computerGuess.length) {
			alert("You Win!");
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
