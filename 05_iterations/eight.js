const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currVal)  {
//     console.log(`acc: ${acc} and currVal : ${currVal}`);
    
//     return acc +currVal  
// }, 0)


const myTotal =myNums.reduce((acc,currVal)=> acc+currVal, 0  )
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "mobile dev course",
        price : 3999
    },
    {
        itemName : "py Course",
        price : 4999
    },
    {
        itemName : "Data Science Course",
        price : 5999
    },
   
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0  )

console.log(priceToPay);








