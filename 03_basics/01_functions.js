function sayMyName (){
    console.log("R");
    console.log("U");
    console.log("C");
    console.log("H");
    console.log("I");
    
}
// sayMyName()


function addToNumber(num1,num2){  //arguments
// let result = num1+ num2
// console.log("ruchi");
return num1+ num2
}
const result = addToNumber(4,3)  //arguments


// console.log("Result :" ,result);

function loginUserMessage(username  = "sam"){
    if(!username){
console.log("Please enter user name");
return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage ("Ruchi"));
// console.log(loginUserMessage());


function calculateCartPrice (val1,val2,...num1){
  return num1
}

// console.log(calculateCartPrice(200,400,500,700,900));


const user = {
    username:"ruchi",
    price:199

}
 
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} 
        and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 700]
function returnSecondValue( getArrya){
    return getArrya[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,300,500,1000]));
 
