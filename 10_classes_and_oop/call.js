function SetUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(userName, email,password){
   
   SetUsername.call(this, userName)

    this.email = email;
this.password = password
}

const chai = new createUser("chai","chai@gmail.com","123")
console.log(chai);

