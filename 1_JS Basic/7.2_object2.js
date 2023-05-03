// how to add key from variable

let key = "color";

const car = {
    name : "volov",
    year: 1990,
    owners: ["naeem", "raiyan", "shuvo"]
}

car.key = "red";
console.log(car);

car["key"] = "white";
console.log(car);
// here key became a new key. we can't do that this way.

// for that avoid using inverted coma then it will work perfectly

car[key] = "green";
console.log(car);