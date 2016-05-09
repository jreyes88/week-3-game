var computerGuess = "";
var concealedWord = "";
var guessesRemaining = 15;
var guess;
var wins = 0;
var victory = 0;

var hangman = {

	words: ["all american slam", "the grand slamwich", "belgian waffle slam", "lumberjack slam", "french toast slam", "fit slam", "grand slam slugger", "red white and blue slam", "four dollar everyday value slam", "honey jalapeno bacon slam"],
	
	wordSelect: function() {
		var randomNumber = [Math.floor(Math.random() * 10)];
		computerGuess = this.words[randomNumber];
		console.log(computerGuess);
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
			document.querySelector("#guessStats").innerHTML = "<p>Guesses Remaining: </p>" + guessesRemaining;
			//console.log("Does Not Contain This Letter " + guessesRemaining);
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
				if (victory === computerGuess.length) {
					wins++;
					document.querySelector("#winStats").innerHTML = "<p>Wins: </p>" + wins;
				}
				console.log(victory);
				console.log(wins);
			}
		}
	}

}

hangman.wordSelect();
hangman.clueWord();

document.onkeyup = function(event) {
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(guess);
	hangman.wordGuessing();
	hangman.updateWord();
}




	// var par = document.getElementsByClassName('underScore');
	// console.log(par[i]);
