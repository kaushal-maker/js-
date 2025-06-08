/*singleton object*/const tinderUser = new Object()
//or
//const tinderUser1 = {}

 tinderUser.Id = '1234asd'
 tinderUser.name = 'kaushal'
 tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinderUser1);


const regUser = {
    email : "bfhbrf@MediaList.com",
    fullname :{
        userfullname: {
            firstName: "Kaushal",
            lastName: "kishore pathak"
        }
    }
}

//console.log(regUser.fullname.userfullname.lastName);

const obj1 = {1: "a" , 2: "b" , 3:"c"}
const obj2 = {3: "1a" , 4: "2b" , 5:"3c"}

//const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}

//console.log(obj3);
 
const users = [
    {
        id: 1,
        email:  "jhdufcgw@mail.com"
    },
    {
        id: 2,
        email: "jdhbwidbi@.com"
    }
]

console.log(tinderUser);


console.log((Object.keys(tinderUser)));//o/p key
console.log((Object.values(tinderUser)))//o/p values
