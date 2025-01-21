//singleton

// const tinderUser = new Object() //singletonObjects
const tinderUser ={} // non-singletonObjects


tinderUser.id = "123abc"
tinderUser.name = "Sammy",
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname :{
        userFullName:{
           firstName:"Ruchi",
           lastName:"Prabha"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = { 1: "a" , 2: "b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)
// console.log(obj1);


const obj3 = {...obj1,...obj2}
// 

const users =[
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:2,
        email:"u@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"h@gmail.com"
    },
    {
        id:5,
        email:"i@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

