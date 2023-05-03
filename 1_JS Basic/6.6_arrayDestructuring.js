// array destructuring

const arr = ["x", "y"];

// normal way of array destructuring
let var1 = arr[0];
let var2 = arr[1];

console.log(var1, var2);
console.log(typeof arr);
console.log(typeof var1);

// shortcut of array destructuring
let [myvar1, myvar2] = arr;
console.log(myvar1, myvar2);

myvar1 = "value Changed";
console.log(myvar1, myvar2);


// how to skip second value and using third

let numbers = ["1", "2", "3"];

let [num1, , num2] = numbers;

console.log(num1, num2); //ans = 1, 3

//normal way to get rest element of array

let alphabets = ["a", "b", "c", "d", "e"];

let [v1, v2] = alphabets;
let newAlphabet = alphabets.slice(2);

console.log(v1, v2, newAlphabet); 
// ans= a b [c,d,e]

// shortcut way to store all array using array destructuring and spread operator

let [x1, x2, ...newArr] = alphabets;

console.log(x1, x2, newArr);
// ans= a b [c,d,e]
