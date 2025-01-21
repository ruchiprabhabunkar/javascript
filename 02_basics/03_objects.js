// singleton

//objet literals


// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name:"Ruchi",
"full name": "Ruchi Prabha",
[mySym]:"mykey1",
age:24,
location : "Jabalpur",
email:"ruchi@google.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rupali@google.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser)
JsUser.email = "ruchi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User ");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this["full name"] } ${this.email}`);
    
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());






