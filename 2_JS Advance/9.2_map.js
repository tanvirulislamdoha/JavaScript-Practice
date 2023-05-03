// map
// map
// map


// remember map first pass value then it will pass index always
// map takes callback function as an input
//it always return an array, that is the main difference between foreach and map

const ages = [12, 34, 23, 56];

// normal way to use map
const double = (age)=>{
    return age*2;
}

const result = ages.map(double);
console.log(result);
//its almost same as forEach takes callback function but it returns a new array

// shortcut

const answer = ages.map((age, index) => {
    return `${index+1} no age is: ${age}`
});
console.log(answer);


const users = [
    {nam: "fahim", age: 22},
    {nam: "rajib", age: 34},
    {nam: "naeem", age: 25}
]

users.map(user => {
    console.log(user.nam, user.age);
})