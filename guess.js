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
let attempts;

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

    // Verifies the user's entry for the range number is a number greater than zero (note: NaN has a default boolean value of false. Also, all numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false.)
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates the random number (aka Number to be guessed by the user) using the range number engeted by the user
    randomNum = Math.floor(Math.random()*rangeNum) + 1; 

    // Prompts user to enter a number of attempt allowed (aka Number of guesses). Also, attempting to convert their response into a number value.
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));
    const original_attempts = attempts;

    // Verifies the user's entry for a number of attempts allowed is a number greater than zero
    while (!attempts || attempts < 1){
        attempts = parseInt(prompt(enterNumText));
    }

    // Asks user to enter a guess in the range that they set. 
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left of ${original_attempts}:`)

      // Continues looping until the user guesses the correct number or runs out of attempts (NOTE: Loops until a BREAK keyword is run)
  while (true){
    // Cheat code
    if (guess === `Valley Forge`){
        alert(`The number is ${randomNum}`);
        guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
      }
    // Attempts to convert the user's guess into a number
    guess = parseInt(guess);

    // Verifies the user's guess is a number greater than zero as well as a number within the range set by the user
    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Removes an attempt
    attempts--;

    // Checks if the user guessed correctly. If so, the game ends (note: The break ends the loop)
    if (guess === randomNum){
        alert(`Congrats! You guessed the correct number: ${randomNum}`);
        break;

    // Checks if the user has any attempts left. If not, then the game ends and the number is displayed to the user.
    } else if (attempts === 0){
        alert(`Sorry, but you have run out of attempts :( The number was ${randomNum}`);
        break;
    // Checks if user's guess was too low and prompts user to guess again if that is the case
    } else if (guess < randomNum){
        guess = prompt(`To low. You have ${attempts} attempt(s) left of ${original_attempts}:`);
    } else {
        guess = prompt(`Too high. You have ${attempts} attempt(s) left of ${original_attempts}:`);
    }
  }

    // Prompts user with option to play again
    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

    // Loop continues until user submits a valid response
    while (true){
      // Checks if the user's response is No (AKA "N" or "n")
      if (playAgain.toUpperCase() === "N") {
        // Alerts the user that the game is over and the game/loop does NOT restart
        alert("Thanks for playing!");
        restartGame = false;
        break;
  
        // Checks if the user's response is YES (aka "Y" or "y")
      } else if (playAgain.toUpperCase()==="Y"){
        //   The game restarts
          break;
        //   Prompts the user to enter a valid response and start this loop again
      } else {
          playAgain = prompt(`Please enter a Y or N`)
      }
}
}
