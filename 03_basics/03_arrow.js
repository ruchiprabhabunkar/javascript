const user = {
    username : "ruchi",
    price : 999,

    welcomeMessage: function(){
      console.log(`${this.username} Welcome to website`); // this is refer to current context
    //   console.log(this);
      
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rucho"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "ruchi"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "ruchi"
    console.log(this);
    
}
// chai()


// const addTwo = (num1,num2)=>{
//  return num1+ num2
// }

// const addTwo = (num1,num2) => num1+ num2

// const addTwo = (num1,num2) =>( num1+ num2)

const addTwo = (num1,num2) => ({username : "ruchi"})

console.log(addTwo(2,3));

const myArray = [2,5,3,7,8]
 
// myArray.forEach()




