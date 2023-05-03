// normal function also called function declartion

function sumThreeNumber(num1, num2, num3){
    console.log(num1+num2+num3);
}
sumThreeNumber(2,3,5);


// function expression

const isEven = function(number){
    console.log(number%2 === 0);
}
isEven(5);

const greetings = function(){
    console.log("Happy Birthday");
}
greetings();

const findTarget = function(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
const myArray = ["1", "2", "3"];

console.log(findTarget(myArray, 3));