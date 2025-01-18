// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt,


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
 const outsideTemp = null
let userEmail;


const id = Symbol(123)
const anotherId = Symbol('123')
// console.log(id ===anotherId);

const bigNumber = 263774567589458974927578758795794375n
// console.log(bigNumber);



// Refrence Types Or (Non primitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman" , "naagraj" , "doga"]
let myObj={
    name : "ruchi",
    age : 24,

}
const myFunction = function (){
console.log("Hello World");
}

 console.log(typeof myObj);

 //ecmascript tc39 documentSummary

 // *****************************************************

 // stack (Primitive) , Heap (Non-Primitive)

 let myYoutubename = "hiteshchoudharydotcom"

 let anothername = myYoutubename
 anothername = "chaiorcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne ={
    email:"user@google.com",
    upi:"user@yvbl"
 }
 let userTwo = userOne
 userTwo.email = "ruchi@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 
 