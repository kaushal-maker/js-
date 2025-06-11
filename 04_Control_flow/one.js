// control flow


// < less than
// > greater than
// <= less than equalto
// >= greater than equalto
// = assignment
// == is equalor not
// != not equal
// === also check datatype
// !== 
// logical operator && checks and compare two condition are two
//  for more than two const we have to wite more &&
// logical operator || for or condition

//++if++\\//true then executed , false not execute

// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 4) {
//     console.log("less than 50");
// } else{
//     console.log("greater than 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`);

//++shorthand notation++\\

//const balance = 200
// if (balance > 500) console.log('test'),console.log('test 2');❌
//if (balance > 500) console.log('test');✅

//++Nested++\\

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 999){
//     console.log("less than  999");
// }else{
//     console.log(balance);
    
// }



//+++++++++++++++++++++++++++++++++++++++++++++++

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(isUserloggedIn && debitCard && 2==2){
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log(("Use logged in"));
}