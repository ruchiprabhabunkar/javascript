class User {
    constructor(username){
        this.userName = username
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.passsword = password
    }

    addCourse(){
        console.log(`A new corse added by ${this.username}`);
        
    }
}

const chai =new Teacher("chai", "chi@teacher.com","123")

chai.addCourse()
const masalaChai = new User ("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);
