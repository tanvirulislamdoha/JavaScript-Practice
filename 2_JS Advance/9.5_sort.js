// sort
// sort
// sort

const numbers = [45, 236, 52, 7, 19,143];

numbers.sort();
console.log(numbers);
// [143, 19, 236, 45, 52, 7]

// why this kind of result because javascript sort anything by assume it as string and its asqii value

numbers.sort((a,b)=>{
    return a-b; // small to large
})
console.log(numbers);

numbers.sort((a,b)=>{
    return b-a; // large to small
})
console.log(numbers);


const products = [
    {productId: 1, productName: "phn1", price: 2300},
    {productId: 2, productName: "phn2", price: 1400},
    {productId: 3, productName: "phn3", price: 700},
    {productId: 3, productName: "phn4", price: 3000},
    {productId: 3, productName: "phn5", price: 2700}
]
//high to low
products.sort((low,high)=>{
    return high.price - low.price;
})
console.log(products);

//low to high
products.sort((low,high)=>{
    return low.price - high.price;
})
console.log(products);