console.log("Hello World");

const enterNumText = `Please enter a number greater than zero`;
let restartGame = true; 
let rangeNum; 
let randomNum;
let attempts;
let guess; 
let playAgain; 

alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

while(restartGame){
    rangeNum = prompt(`Please enter a maximum number for the range:`);
    rangeNum = parseInt(rangeNum);

    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    randomNum = Math.floor(Math.random()*rangeNum) + 1; 

    // Changed below
    attempt_ceiling = parseInt(prompt(`Please enter a number of attempts allowed:`));
    let attempts = 0;
    // Changed above

    // After the above you just gotta change the 

    while (!attempt_ceiling || attempt_ceiling < 1){
        attempt_ceiling = parseInt(prompt(enterNumText));
    }
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have used ${attempts} attempt(s) of ${attempt_ceiling}:`)

  while (true){
    if (guess === `Valley Forge`){
        alert(`The number is ${randomNum}`);
        guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have used ${attempts} attempt(s) of ${attempt_ceiling}:`);
      }
    guess = parseInt(guess);

    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Changed this from decrement to increment
    attempts++;

    if (guess === randomNum){
        alert(`Congrats! You guessed the correct number: ${randomNum}`);
        break;
    } else if (attempts === attempt_ceiling){
        alert(`Sorry, but you have run out of attempts :( The number was ${randomNum}`);
        break;
    } else if (guess < randomNum){
        guess = prompt(`To low. You have used ${attempts} attempt(s) of ${attempt_ceiling}:`);
    } else {
        guess = prompt(`Too high. You have used ${attempts} attempt(s) of ${attempt_ceiling}:`);
    }
  }

    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

    while (true){
      if (playAgain.toUpperCase() === "N") {
        alert("Thanks for playing!");
        restartGame = false;
        break;
      } else if (playAgain.toUpperCase()==="Y"){
          break;
      } else {
          playAgain = prompt(`Please enter a Y or N`)
      }
}
}
