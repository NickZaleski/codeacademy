// Rock, Paper, or Scissors

/* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw. */


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput ===  'scisssors' || userInput === 'bomb') {
    return userInput;
    } else {
      console.log('Error');
    }
  }
  
  // console.log(getUserChoice('paper'));
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    
    switch (randomNumber) {
      case 0: 
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2: 
      return 'scissors';
      break;
    }
  };
  
  
  // console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie'
    } 
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Sorry, computer won'
      }
      else{ 
        return 'Congrats, you won!'
      }
    }
  
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Sorry, computer won'
      }
      else{ 
        return 'Congrats, you won!'
      }
    }
    if (userChoice === 'scissors'){
      if(computerChoice === 'paper' || computerChoice === 'rock' ){
        return 'Sorry, computer won'
      }
      else{ 
        return 'Congrats, you won!'
      }
    }
    if (userChoice === 'bomb'){
      if(computerChoice !== 'bomb'){
      return 'You are cheater, but you won!'
      }
      
    }
  }
  
  // console.log(determineWinner('paper', 'paper'))
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()

  
  