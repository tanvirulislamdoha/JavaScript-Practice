//filter
//filter
//filter

// filter er callback function always return value if it is true. 

// jemon even number chaile aita shudu even number gulake filter kore niye ashbe

const numbers = [1,2,3,4,5,6];

// const isEven = (number) =>{
//     return number%2===0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
// ans = [2, 4, 6] //even numbergula filter hoise

const printer = numbers.filter(number => {
    return number%2===0;
});
console.log(printer);