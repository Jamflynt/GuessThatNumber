console.log("Hello World");

// Guess That Number
// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game
let restartGame = true; 

// For storing the range of the number to be guessed
let rangeNum; 

// For storing the number to be guessed 
let randomNum;

// For storing the number of attempts that the user has left 
let attempt;

// For storing the users guess
let guess; 

// For storing user's response to play again or not play again
let playAgain; 

// Starting alert message 
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has value of true
while(restartGame){
    // Asks user to enter a number to set the upper bound for the random number that will be created (aka Number to be guessed)
    rangeNum = prompt(`Please enter a maximum number for the range:`);

    // Using parseInt to attempt to convert the user's response into a number value (note: the value returned from a prompt is a string value. Also, if the value cannot be converted then the value returned will be NaN (not a number))
    rangeNum = parseInt(rangeNum);

    break;
}

