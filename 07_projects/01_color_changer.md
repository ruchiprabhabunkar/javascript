# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6zbmgvzk?file=2-BMICalculator%2Findex.html,2-BMICalculator%2Fchaiaurcode.js%3AL26,1-colorChanger%2Fscript.js)

# Solution Code 
## project 1
```javascript code
console.log("ruchi")
console.log('hello');
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button) => {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


````

## project2 solution code
 
 ````javascript code
const form = document.querySelector('form');
//this usecase will give you empty value
//const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 20) {
      result.innerHTML = `<span>${bmi} your weight is under weight</span>`;
    } else if (bmi < 24.9) {
      result.innerHTML = `<span>${bmi} your weight is in Normal range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} your weight is Overweigt</span>`;
    }
    //show the result
    // result.innerHTML = `<span>${bmi}</span>`;
  }
});
````
## project 3 solution code
````javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector("#clock")

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

````

##  project 4 solution code

````javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHight = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a  Number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Nim is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Nim is Too highy`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHight.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    e.preventDefault();

    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


````
### project 5 soltion code

````javascript

console.log('Project 5');
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
<div class = "color">
<table>
  <tr>
    <th>key</th>
    <th>keyCOde</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td> ${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

  
</table>

</div>
`;
});

`````

### project 6 soltion code

````javascript
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startchangingcolor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgcolor, 1000);
  }

  function changeBgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

const start = document
  .querySelector('#start')
  .addEventListener('click', startchangingcolor);

const stop = document
  .querySelector('#stop')
  .addEventListener('click', stopchangingcolor);


`````






