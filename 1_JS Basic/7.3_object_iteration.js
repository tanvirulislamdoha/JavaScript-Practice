// how to iterate object

const cars = {
    name : "volov",
    year: 1990,
    owners: ["naeem", "raiyan", "shuvo"]
}

// for in loop
// for in loop
// for in loop

for(let key in cars){
    console.log(key); // printing key

    // console.log(cars.key);
    // can't access value using dot notation

    console.log(cars[key]); //printing value

}  
for(let key in cars){
    // printing key and values

    console.log(`${key} : ${cars[key]}`);
    // have to use back notation

}

// Object.keys
// Object.keys
// Object.keys

console.log(Object.keys(cars));
// ans = (3) ['name', 'year', 'owners']

for(let index of Object.keys(cars)){
    console.log(index); //key
    console.log(cars[index]); //value
}