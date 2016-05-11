var computerGuess = "";
var concealedWord = "";
var guessesRemaining = 15;
var guess;
var wins = 0;
var victory = 0;
var lettersGuessed = "";
var correctLetters = "";

var hangman = {

	words: ["whatever", "nothing", "bleak", "pointless", "death", "ehhhhh", "again", "trying", "failing", "wasteful", "nobody"],

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
			//console.log(correctLetters);
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
				correctLetters = guess + correctLetters;
				// console.log(correctLetters); I HATE THIS
				// if (correctLetters.indexOf(guess) !== -1) {
				// return;
				// }
				// var pos = correctLetters.indexOf(guess);
				// console.log(pos);
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
			alert("it shouldn't come as any surprise that you did not succeed at something this simple");
			this.resetHTML();	
		}
	},

	bigWin: function() {
		if (victory === computerGuess.length) {
			alert("you win. no one ever wins");
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
	//hangman.scoring();
	hangman.bigLose();
	hangman.bigWin();
	hangman.updateHTML();
}
	// var par = document.getElementsByClassName('underScore');
	// console.log(par[i]);
