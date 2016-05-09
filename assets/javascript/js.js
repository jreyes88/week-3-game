var computerGuess = "";
var concealedWord = "";
var guessesRemaining = 15;
var guess;
var wins = 0;
var victory = 0;
var lettersGuessed = "";

var hangman = {

	words: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],

	updateHTML: function() {
		var html = "<p>Wins: </p>" + wins + "<p>Guesses Remaining: </p>" + guessesRemaining + "<p>Letters Guessed: </p>" + lettersGuessed;
		document.querySelector("#stats").innerHTML = html;
	},

	wordSelect: function() {
		var randomNumber = [Math.floor(Math.random() * 10)];
		computerGuess = this.words[randomNumber];
		//console.log(computerGuess);
	},

	clueWord: function() {
		for (i = 0; i < computerGuess.length; i++) {
			concealedWord += "<p class='underScore'>_</p>";
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
			if (guessesRemaining === 0) {
				alert("You Lose!");
			}
		}
	},

	updateWord: function() {
		for (var i = 0; i < computerGuess.length; i++) {
			if (guess === computerGuess[i]) {
				//console.log(computerGuess[i] + i + "okay");
				var par = document.getElementsByClassName('underScore');
				par[i].innerHTML = guess;
				//console.log(par[i]);
				victory++;
				console.log(victory);
				console.log(computerGuess.length);
				//console.log(wins);
			}
		}
	},
	bigWin: function() {
		if (victory === computerGuess.length) {
			alert("You Win!");
			var randomNumber = [Math.floor(Math.random() * 10)];
			computerGuess = this.words[randomNumber];
			for (i = 0; i < computerGuess.length; i++) {
				concealedWord += "<p class='underScore'>_</p>";
				document.querySelector("#currentWord").innerHTML = concealedWord;
				//console.log(concealedWord);
			};
			guessesRemaining = 15;
		}
	}
}

hangman.wordSelect();
hangman.clueWord();
hangman.updateHTML();

document.onkeyup = function(event) {
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log(guess);
	hangman.wordGuessing();
	hangman.updateWord();
	hangman.updateHTML();
	hangman.bigWin();
}




	// var par = document.getElementsByClassName('underScore');
	// console.log(par[i]);
