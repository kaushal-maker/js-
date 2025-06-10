// // scope is {}
// //node and console in browser global scopre is different
// let a = 300 //global scope


// if(true){

//     //block scope
//     let a = 90
//     const b = 70
//     var c = 99
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



// console.log(a);
// //console.log(b);
// //console.log(c);



// nested scope 
// agar function k andar function hai toh jo 2nd function hai wo 1st wale mea sea values le skta hai lekin jo 1st wala hai wo second ale sea nhi le skta
//jitni bar bhi hum ese function call krenge uske liye ek alag scope bnega har bar aur wo stack memory mea rhega
function one(){
    const username = "kaushal"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()

}

//one()

if(true){
    const username = "kaushal"
    if (username === "kaushal") {
        const website = " youtube"
        //console.log(username + website);
        
    }
    // console.log(website);
    
}

//console.log(username);

// ++++++++++++++interesting+++++++++++++++++++

// cn not throw error addone(5)

function addone(num){
    return num + 1
}

addone(5)


// throw error addtwo(10)
const addtwo = function (num) {
    return num + 2
}

addtwo(10)

console.log(addtwo);
