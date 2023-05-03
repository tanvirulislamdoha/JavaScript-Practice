// Object.create()
// Object.create()

const obj = {
    k1 : "value1",
    k2 : "value2",
}

const obj2 = {};
obj2.k3 = "value3";
console.log(obj2.k3);
// value3
console.log(obj2.k2);
// undefined


const obj3 = Object.create(obj);
obj3.k4 = "value4";
console.log(obj3.k4);
// value4
console.log(obj3.k2);
// value2
// because we set obj in Object.create(obj) as __proto__