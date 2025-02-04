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




