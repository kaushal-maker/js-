//singleton(constructor object) ^^interview^^ literal > no , constructor> yes



//object literal

const mySym =  Symbol("key1")


const Jsuser = {
    name : "Kaushal",
    "full_name" : "Kauhsal Kishore Pathak",
    [mySym] : "myKey1",
    age: 100,
    mobile : 987654321,
    email :  "djhgg@mail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Sunday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser['email']);
// console.log(Jsuser.full_name);//❌ because if full name written without _ then ther will be an error
// console.log(Jsuser["full_name"]);//✅ this is right approach because we have to write inside " " forget about _ it will work kyoki ab wo use string maannega aur upar key hai usko wese hee jese pehle sea string manke betha hai
// console.log(Jsuser[mySym]);
// Jsuser.email = "dfhuigfiel@maiil.com"//for overwriting key's value
// Object.freeze(Jsuser)//to freeze the obj
// console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("GDay Bro");
};

Jsuser.greetingOne = function () {
    console.log(`GDay Bro, ${this.name}`);
};

console.log(Jsuser.greeting());
           // Output: GDay Bro
console.log(Jsuser.greetingOne());
      // Output: GDay Bro, Kaushal

