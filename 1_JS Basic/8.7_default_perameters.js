// default perameters
// default perameters
// default perameters

// one way
const sumTwo = (a, b) => {
    if(typeof b === "undefined"){
        b = 0;
    }
    return a+b;
}

console.log(sumTwo(2));

// another way

const addTwo = (a, b=0) => {  
    return a+b;
}
console.log(addTwo(5)); //ans = 5
console.log(addTwo(5, 7)); //ans = 12