// variables


var wins = 0;
var guessesLeft = 10;
var guessedLetters = [];
var word = "";
var arr = [];

var words = ["spacejam", "findingnemo", "bolt", "thelionking", "moana", "toystory", "shrek", "zootopia", "osmosisjones", "frozen", "despicableme", "brave", "theirongiant"]


// picks a word at random 
function randomWord() {
    var random = Math.floor((Math.random() * words.length) + 1);
    word = words[random];
    console.log(word);
}

// show word on screen
function showWordOnScreen() {
    var joinerString = arr.join(" ");
    document.getElementById("wordNow").innerHTML = joinerString;
}

// show guesses remaining
function guessesRemaining() {
    document.getElementById("guesses").innerHTML = guessesLeft;
}

// show wins
function showWins() {
    document.getElementById("wins").innerHTML = wins;
}

//show letters guessed
function lettersGuessed() {
    var joinerString = guessedLetters.join(", ");
    document.getElementById("guess").innerHTML = joinerString;
}



// letters guessed
function guessedLetter(usersKeypress) {
    var repeated = guessedLetters.some(function (item) {
        return item === usersKeypress;
    })

    // repeated letters
    if (repeated) {
        alert(usersKeypress + " has already been guessed.");
    } else {
        guessedLetters.push(usersKeypress);
        lettersGuessed();
        correctLetter(usersKeypress);
    }
}


// check if letter is correct
function correctLetter(character) {
    var mark = false;
    var wordList = word.split("");

    for (i = 0; i < wordList.length; i++) {
        if (character.toLowerCase() === wordList[i]) {
            arr[i] = character.toLowerCase();
            showWordOnScreen();
            mark = true;

            if (arr.join("") === word) {
                alert("Winner, winner!");
                wins = wins + 1;
                showWins();
                toggleGame();
            }
        }
    }

    // remove guesses

    if (mark === false) {
        guessesLeft = guessesLeft - 1;
        guessesRemaining();

        if (guessesLeft === 0) {
            alert("Loser, loser!");
            toggleGame();
        }
    }
}

// set variables
function toggleGame() {
    document.getElementById("wordGuess").classList.toggle("hidden");
    document.getElementById("button").classList.toggle("hidden");
}

//show hyphens
function showHyphens() {
    console.log("word", word);
    arr.length = word.length;
    arr.fill("_");
}


// reset game
function reset() {
    guessedLetters = [];
    arr = [];
    guessesLeft = 10;
}

// begin game by toggling all functions
function
begin() {
    reset();
    randomWord();
    showHyphens();
    showWordOnScreen();
    guessesRemaining();
    lettersGuessed();
    showWins();
}

// keypress input
document.onkeydown = function (event) {
    var keyPress = String.fromCharCode(event.keyCode);
    guessedLetter(keyPress)
}

// start button

function buttonClicked() {
    console.log("button clicked");
    begin();
    toggleGame();
}