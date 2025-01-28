// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const val of arr) {
//    let ans= val*2
//     console.log(ans);
    
// }

const greeting = "Hello World!"
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")

console.log(map);

for(const [key,value] of map){
    console.log(key , ":" , value);  
}

const myObj = {
    'Game1' : "NFS",
    "Game2" : "Spiderman"
}

// for (const [key,val] of myObj){
//     console.log(key, ":", val);
    
// }