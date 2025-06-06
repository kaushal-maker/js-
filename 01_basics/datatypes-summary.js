// // primitive(call by value)

// // 7 categories : String, Number , Boolean , null , undefined , symbol(for makeing any value unique) , BigInt

// // Js is 


// const score = 100
// const scoreValue = 100.9
// const isLoggedIn = false
// const ousideTemp = null
// let userEmail = undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId)



// const bigNumber = 23456789876543098765434567n
// // Reference (Non- primitive) 

// // Array , Objects, Functions

// const heros = ['shaktiman' , 'naagraj' , 'doga']
// let myObj = {
//     name:'kaushal',
//     age:22,

// }





// // function


// const myFunction = function()
// {
//     console.log('hello word')
// }

// console.log(typeof bigNumber);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive:gives a copy work on copied value), Heap(non-primitive:refrence of original value worn on og value)

let myName = "chuchundar"

let anotherName = myName
anotherName = 'HuiHui'


console.log(myName);
console.log(anotherName);

let userOne = {
    email : 'kaushal@mail.com',
    upi : 'user@1'
}

let userTwo = userOne

userTwo.email = 'gogo@maol.com'

console.log(userOne.email);
console.log(userTwo.email);

