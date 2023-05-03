const person = {name: "Naeem", age:24};
// console.log(person.name);
console.log(typeof person);

// how to access data from object

console.log(person.name);
console.log(person.age);

const car = {
    name : "volov",
    year: 1990,
    owners: ["naeem", "raiyan", "shuvo"]
}
// dot notation
console.log(car.name);
console.log(car.owners);

// how to add new key pairs in object

car.color = "red";
console.log(car);

// bracket notation

console.log(car["name"]);
// in javascript by default keys are string

car["type"] = "manual";
console.log(car);


// differences between dot and bracket notation

const fruits = {
    taste: "good",
    "fruit color": ["red", "green", "yellow"]
}

// console.log(fruits."fruit color");

// you can not access this property using dot notation

// rather than use this

console.log(fruits["fruit color"]);