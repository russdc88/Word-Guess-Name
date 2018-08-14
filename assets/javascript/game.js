//Adding my global variables

var alphabet ="qwertyuiopasdfghjklzxcvbnm"

var lordOfTheRings = ["aragorn", "mithril", "smeagal", "elrond","isildur", "shelob","sauron"]

var wordBank = lordOfTheRings[Math.floor(Math.random() * lordOfTheRings.length)];

answerArray = [];

var numberOfGuess = 6;

var targetGuess = document.getElementById("guess");

var unknownWord = document.getElementById("theWord");
//-------------------------------//
targetGuess.textContent = numberOfGuess;


//creating my blank letters
	for (var i =0; i < wordBank.length; i++){
		answerArray[i] = "_";
	}
	
	answer = answerArray.join(" ");


	document.getElementById("theWord").innerHTML = answer;

//creating the event when typing the letter in 

document.onkeyup = function (event) {
	
	var userGuess = event.key; 


	if (userGuess.length > 0){
		for (var i = 0; i < wordBank.length; i++){
			if (wordBank[i] === userGuess){
				answerArray[i] = userGuess;
			}
		}
		document.getElementById("theWord").innerHTML =answerArray.join(" ");
	}




	if (wordBank.includes(event.key) === false &&
	
		alphabet.includes(event.key)) {
	
		numberOfGuess -= 1;
	
		targetGuess.textContent = numberOfGuess;
	
		var garbageLetter = document.createElement("span");
		
		garbageLetter.classList.add("garbageLetter");
		
		garbageLetter.textContent = userGuess;
		
		document.getElementById("garbage").appendChild(garbageLetter);
		
		if (numberOfGuess == "0"){
			
			var gameOver = document.createElement("p");

			gameOver.textContent = "Game Over! Gollum had you for breakfast! Yum yum!";

			document.getElementById("gameOver").appendChild(gameOver);

			document.getElementById("hideAll").style.display = 'none';
			
		}
		console.log(answerArray.join(""));
		console.log(wordBank);

		
	}
		
	if(answerArray.join("") == wordBank){
		var youWin= document.createElement("p");

		document.getElementById("hideAll").style.display = 'none'

		youWin.textContent = "You won! Gollum will show you the way!";

		document.getElementById("gameOver").appendChild(youWin);

		var reboot = document.createElement("button");
		
		reboot.classList.add("coolButton");
		
		reboot.textContent("Play again");
		
		document.getElementById("gameOver").appendChild(reboot);
		
	}

		
	};

	