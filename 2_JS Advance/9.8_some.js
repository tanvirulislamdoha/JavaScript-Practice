// some method
// some method
// some method

// is there any or only one number even?

const numbers =[3,5,8,9];

const ans = numbers.some(check => check%2===0);
console.log(ans);
// true


const products = [
    {productId: 1, productName: "phn1", price: 2300},
    {productId: 2, productName: "phn2", price: 1400},
    {productId: 3, productName: "phn3", price: 700},
    {productId: 3, productName: "phn4", price: 3000},
    {productId: 3, productName: "phn5", price: 2700}
];

// is there any product price more than 2500

const answer = products.some(checker => {
    return checker.price > 2500;
});
console.log("answer", answer);