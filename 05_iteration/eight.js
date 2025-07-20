const myNums = [1,2,3]
//reduce
// const myTotal = myNums.reduce(function(acc , currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc +  currval
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc+curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
    {
        itemName: "python course",
        price: 1999
    },
]

const totalCost = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(totalCost);
