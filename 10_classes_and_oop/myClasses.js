// ES6

// class User {
//     constructor(username, email, passsword, ){
//         this.username = username;
//         this.email = email;
//         this.passsword = passsword
//     }

//     encryptPAssword(){
//         return `${this.passsword} abc`
//     }
//     changeUsername(){
//         return ` ${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPAssword());
// console.log(chai.changeUsername());

//bheind the scene 

function User(username, email, passsword,){
this.username = username;
this.email = email;
this.passsword = passsword
}

User.prototype.encryptPAssword =  function(){
    return ` ${this.passsword} abc`
}
    User.prototype.changeUsername= function(){
        return ` ${this.username.toUpperCase()}`
    }

const tea = new User("tea","tea@gmail.com","123")

console.log(tea.encryptPAssword());
console.log(tea.changeUsername());



