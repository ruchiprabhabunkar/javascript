const accountId=14453
let accountEmail="ruchi@google.com"
var accountPassword="12345"
accountCity="Jabalpur"
let accountState;

// accountId=2 //not allowed

accountEmail="rupali@google.com"
accountPassword="98765"
accountCity="Indore"


console.log(accountId);

/*
prefer not to use var 
bcz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


