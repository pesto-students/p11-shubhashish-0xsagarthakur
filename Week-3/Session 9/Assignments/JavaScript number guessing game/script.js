// Your solution goes here 
const playGuessingGame = (numToGuess, totalGuesses=10) =>{
    let guess = 0;
    let guessedNumber = 0;

    while(totalGuesses > 0){
        if(guess == 0){
            guessedNumber = prompt('Enter a number between 1 and 100.');
        } else if( guessedNumber < numToGuess){
            guessedNumber = prompt(`${guessedNumber} is too small. Guess a larger number`);
        } else if( guessedNumber > numToGuess){
            guessedNumber = prompt(`${guessedNumber} is too large. Guess a smaller number`);
        } 
        
        if(guessedNumber === null){
            return 0;
        } else if(guessedNumber === "" || isNaN(guessedNumber)){
            guessedNumber = prompt('Please enter a number.');
            continue;
        } else if(guessedNumber == numToGuess){
            return (guess >= 3) ? 3 : (guess < 3) ? guessedNumber: 0;
        } 

        guess++;
        totalGuesses--;
    }
    return 0;
}

//To test code in your web browser, call playGuessingGame() from the JavaScript 
//playGuessingGame(5)
//playGuessingGame(7, 3)