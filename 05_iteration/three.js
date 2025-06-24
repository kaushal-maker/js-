//for of
//""
//["","",""]

const arr = [1 , 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings){
    console.log(`ye tumhara world ${greetings}`)
}

//maps


const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

console.log(map);               
//[code , country ]  destructuring of map
// o/p IN :- India
//     FR :- France
for (const [code , country ] of map) {
    console.log(code , ":-" , country);
    
}


const myObject = {
    'game1' : 'GTA',
    'game2' :  'SAN'
}

for(const [counting , name] of myObject){
    console.log(counting , ' :- ' ,name)
} 