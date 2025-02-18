const user = {
    userName: "Ruchi",
    loginCount : 8,
    signedIn: true,
    getUserDetail: function(){
      //  console.log("Got user detail from database");
    //  console.log(`username : ${this.userName}`);
    console.log(this);
    
      
        
    }
}


//console.log(user.userName);
//console.log(user.getUserDetail());
//console.log(this);


function User(userName,loginCount,isLogin){
this.username = userName;
this.logincount = loginCount;
this.isLogin=isLogin
this.greeting = function (){
    console.log(`Welcome ${this.username}`);
    
}
return this
}


const userOne =new User("ruchi",10,true)
const userTwo =new User("rupali",11,false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.contructor);


// console.log(userTwo);





