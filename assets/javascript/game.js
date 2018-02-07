// global variables
var wordBank = ['fresh Prince', 'friends', 'seinfeld', 'full house', 'family matters', 'saved by the bell',
'home improvement', 'dinosaurs', 'martin', 'rockos modern life', 'boy meets world', 'doug', 'roseanne', 'in living color',
'animaniacs', ];
// win-counter
var wins = 0; 
// loss-counter
var loss = 0;
// wrong-guess
var wrongGuesses = [];
// guesses-left
var guessesLeft;
// Underscores in current word
var underScores = [];
// used to pull from this to the underscores
var userGuesses = [];
// from wordBank
var word = ''
var answerArray = [];
//
var rightGuess = 0


// startgame function
function startGame() {

var word = wordBank[Math.floor(Math.random() * wordBank.length)];
for ( var i = 0; i < word.length; i++) {
    console.log(word)
    if (word[i] === " ") {
        answerArray[i] = " "
    }
    else {
        answerArray[i] = "_"
    }
}
}

/* var underScores = document.getElementById("underScore");
// underScores.innerHTML = answerArray;
underScores.innerHTML = answerArray.join(" ");

    // reset
    wrongGuesses = [];
    guessesLeft = 10;

    // HTML
    document.getElementById('guesses-left').textContent = guessesLeft;
    document.getElementById('wrong-guess').textContent = wrongGuesses;
    document.getElementById('win-counter').textContent = wins;
    document.getElementById('loss-counter').textContent = loss;

}

    // User's guesses
document.onkeyup = function(event) {
    userGuesses = event.key;
    console.log(userGuesses)
    console.log(answerArray)
        if(word.indexOf(userGuesses) > -1) {
            for( var i = 0; i < word.length; i++) {
                if(word[i] === userGuesses) {
                    answerArray[i] = userGuesses;
                    document.getElementById("underScore").innerHTML = answerArray.join(' ')
                }

            }
        }
     
            
        
        else {
            wrongGuesses.push(userGuesses);
            guessesLeft--;
        }
    }
 */

    
    
    
    
    
 /*    startGame() */
//     if (word.indexOf(userGuesses) > -1) {
//         for ( var i = 0; i < word.length; i++) {
//             if ( randWord[i] === userGuesses) {
//                 underScores[i] == userGuesses;
//                 wins++;
//                 winLose();
//                 console.log(underScores)
//             }
//         }
//     }
//     else {
//         wrongLetter.push(userGuesses);
//         guessesLeft--;
//         console.log(wrongLetter)
//         // winLose();
//     }
// }


// Main


// onkey up = X 
// for (the length of the random word)
// if x = random word [i]  {
//     add it to the underscores Array.
// } 
// else {
//     add it to the wrong guesses Array. 
//     guessesleft-- (decrement)
// }

// Loop that until the word is complete 
// when underscore.length === random word.length {
//     player wins
//     wins++
//     change the seinfeld picute to the winning show's picture
// }

// if guesses-left === 0 {
//     game Over
//     losses ++


