const balance = 400;
console.log(balance);

const score = new Number(500);
// console.log(score);

// console.log(score.toString().length);
// console.log(score.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //upar
// console.log(Math.floor(4.2)); //neeche
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log(Math.random() * 10 + 1); // 0-1 Math.floor make 0 when rando no come 0.1 to avoid this add 1
console.log(Math.floor(Math.random() * 10) + 1); //

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
