const userEmail = []

if (userEmail) {
    console.log("got mail");
}else{
    console.log("nhi hai");
    
}

/* falsey value
flase , 0 , -0 , BigInt 0n, "", null, undefined, NaN

----> truthy 
"0" , "false", " ",[] ,{}, function(){}
*/


//> for checking empty array
// if(userEmail.length === 0)  {
//     console.log("array is empty");
    
// }

// const emptyobj = {}


//> for checking empty object
// if (Object.keys(emptyobj).length === 0){
//     console.log("empty object");
    
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 15 // 15
//val1 = null ?? 10 ?? 20 // 10


// Terniary Operator

//condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 10 ? console.log("less than 10"): console.log("more");

