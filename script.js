const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinp = document.querySelector('#guessField');

const gueslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userinp.value) 
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert('Pls enter a valid num')
  }
  else if (guess > 100){
    alert('Pls enter a valid num')
  }
  else if(guess < 1){
    alert('Pls enter a valid num')
  }
  else{
    prevGuess.push(guess)
    if (numguess === 10){
      displayguess(guess)
      displayMSG(`game over, Random num was ${randomNumber}`)
      endgame()
    } else{
      displayguess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMSG(`correct guess the random num was ${randomNumber}`)
    endgame();
  } else if (guess < randomNumber){
    displayMSG(`num too low`);
  } else if(guess > randomNumber){
    displayMSG(`num too high`)
  }

}

function displayguess(guess){
  userinp.value = ""
  gueslot.innerHTML += `${guess} `
  numguess++
  remaining.innerHTML = `${11-numguess}`
}

function displayMSG(message){
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
  playGame = false
  userinp.value = ''
  userinp.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h1 id= newgame>Start new game</h1>`
  startover.appendChild('p')
  // gueslot = []
  newgame()

}

function newgame(){
  const newGameButton = document.querySelector('#newGame')


  playGame = true
}
