const numbers = [1,2,3,4,5,6];

const adder = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
});
console.log(adder);

// accumulator,currentValue,return
// 1            2           3
// 3            3           6
// 6            4           10
// 10           5           15
// 15           6           21

// we can also initialized first value like set 100
// const adder = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue;
// }, 100)


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 10000},
    {productId: 3, productName: "television", price: 13000}
]

const total = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0);
console.log(total);

// totalPrice currentValue return
// 0            12000       12000
// 12000        10000       22000
// 22000        13000       35000