
// arrow function 
// arrow function 
// arrow function 



const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++){
    if(array[i] == target){
        return i;
    }
}
return -1;
}
const myArray = ["1", "2", "3"];

console.log(findTarget(myArray, 3));


// const isEven = function(number){
//     console.log(number%2 === 0);
// }
// isEven(5);

const isEven = number =>{
    console.log(number%2 === 0);
}
isEven(4);

// we can also write it like this way

const evenChecker = number => number%2 === 0;
console.log(evenChecker(6));


const greetings = ()=>{
    console.log("Happy Birthday");
}
greetings();




