const marvel_heros = [ "thor" , "ironman" ,"spiderman"]
const dc_heros = [ "superman" , "flash" , "batman" ]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);



// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_New_Heros = [...marvel_heros, ...dc_heros]/* ... three dots seprate every value in array */
// console.log(all_New_Heros);

const another_array = [1 ,2 ,3,[4,5,6],7,[6,7,[4,5]]]
let usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/

console.log(Array .isArray("kaushal"))
//false
console.log(Array .from("kaushal"))
/* [
  'k', 'a', 'u',
  's', 'h', 'a',
  'l'
]*/
console.log(Array .isArray("kaushal"))
//true

console.log(Array.from({name:"kaushal"}))
//no array for key i.e. name:
//only for value i.e. "kaushal"
//we have to define 

let score1 = 100
let score2 = 200
let score3 = 890

console.log(Array.of(score1 ,score2, score3));
//[ 100, 200, 890 ]
