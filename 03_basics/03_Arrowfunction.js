const user = {
    username : "kaushal",
    price : 898,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome`);
        //console.log(this);
        
    }

}

//user.welcomeMessage()
// user.username = "sam"// change in context (value)
// user.welcomeMessage()

//console.log(this);


// function chai() {
//     let username = "kusha"
//     console.log(this);
    
// }

// chai()//o.p kusha

// function chai() {
//     let username = "kusha"
//     console.log(this.username);
    
// }

// chai() // o.p undefined\



// const chai = function chai() {
//      let username = "kusha"
//      console.log(this.username);
    
// }
 
//_____________---Arrow Function---___________
 
 const chai = () => {
     let username = "kusha"
     console.log(this.username);
    
}

//chai()


//=======explicit
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//======implicit


// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

//************** for return a object we need to write ({ })

const addTwo = (num1,num2) => ({username: "kaushal"})

console.log(addTwo(90,8));
