// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best no.");
        
    }
    //console.log(element);
}


for (let i = 0; i <= 10; i++) {
   // console.log(`oueter loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`outer loop ${i} and inner loop: ${j}`);
        //gtable from 0 to 10//console.log(i + "*" + j + "=" + i * j);
        
    }
    
}

let myArr = [ 'batman', 'flash', 'kaushal', 'gwar']
//console.log(myArr.length);


for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
  //  console.log(element);
       
}


//running limited loop

//break and continue

//for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log('detected 5');
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('detected 5');
        continue
        
    }
    console.log(`value of i is ${index}`);
    
    
}