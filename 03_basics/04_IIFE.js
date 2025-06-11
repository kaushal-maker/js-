// imediately invoked function expression (IIFE)
//>global scope ke pollution ke problem ko htane ke liye use krte hai iife
//ye start to ho jat hai lekin isse pta nhi hota kha rokna hai iske liye hum use krte hai semicolon jo ki lagega last paranthesis ke badd (); <-- eseline no. 6 ke jese


(function chai(){
    //named iife with chai
    console.log(`db connected`);
})(); // semicolon to end the function


//() ye wala function ki defination ke liye 
//() execution ke liye

(() => {
    //simple iife
    console.log(`Db Connected too`); 
})();

//ye variable bhi expect krta hai jese ki name jo hai kaushal

((name) => {
    //simple iife with parameter name
    console.log(`Db Connected too ${name}`); 
})('kaushal')