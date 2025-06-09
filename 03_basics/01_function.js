// function
function sayMyName(){
    console.log("K");
    console.log("K");
    console.log("P");
}
//sayMyName this is refrence of function
//sayMyName()//for run the function

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
    
// }

function addTwoNumbers(number1,number2){
    
    // let result = number1 + number2
    // return  result
    return number1 + number2
}


const result = addTwoNumbers(900,274)
//console.log("Result: ", result);


function loginUserMessage(username = "kausahal"){
    if(!username){
        console.log("please enter name");
        return  
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("kaushal"));
console.log(loginUserMessage())
 
/* ye methods hai alag alag function ko likhne ke
  ek upar bhi hai
function loginUserMessage(username){
    if(!username){
        console.log("please enter name");
        return  
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("kaushal"));
console.log(loginUserMessage())
 
*/ 