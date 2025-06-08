const myArr = [0, 1, 10, 3, 4, 5]

const myArr2 = new Array(1,2,3)

// console.log(myArr[2]);

// ARRAY METHOD

// myArr.push(6)
// myArr.push(20)

// myArr.unshift(90)//add value in front of array
// myArr.shift()

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(200));
// console.log(myArr.indexOf(10));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//SLICE , SPLICE

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("c",myArr);
console.log(myn2);
