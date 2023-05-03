
const numbers = [1, 2, 3, 4, 5];

const multiplyBy2 = (number, index) => {
    // console.log(index);
    console.log(`${index} : ${number}*2 =  ${number*2}`);
}

// general way to run a loop
for(let i=0; i< numbers.length; i++){
    multiplyBy2(numbers[i], i);
}


// using forEach loop
numbers.forEach(multiplyBy2); 

// remember foreacah first pass value then it will pass index always
// remember foreacah first pass value then it will pass index always
// foreach takes callback function as an input


// we can also implement all of this in shortcut

numbers.forEach((number, index) => {
    console.log(`${index} : ${number}*2 =  ${number*2}`);
});




const ages = [12, 34, 23, 56];

ages.forEach((age, index) => {
    console.log(`${index+1} indexed is incremented 2, From ${age} to ${age+2}`);
}); 

ages.forEach((age)=>{
    console.log(age*2);
})

const users = [
    {nam: "fahim", age: 22},
    {nam: "rajib", age: 34},
    {nam: "naeem", age: 25}
]

users.forEach((value)=>{
    console.log(value.nam);
})