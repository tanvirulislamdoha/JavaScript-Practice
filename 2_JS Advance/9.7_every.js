// every method
// every method
// every method

const numbers = [2,4,6,8,10];

const ans = numbers.every(number => {
    return number%2===0;
});
// here callback returns true/false
// and every method also returns true/false
console.log(ans);


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 10000},
    {productId: 3, productName: "television", price: 13000}
];

// check every product < 15000

const finder = userCart.every(lessThan => {
    return lessThan.price < 15000;
});
console.log(finder);
