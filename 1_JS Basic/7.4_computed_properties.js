let k1 = "key1";
let k2 = "key2";

let v1 = "value1";
let v2 = "value2";

// you can't put key and value like that
const obj = {
    k1 : v1,
    k2 : v2
}
console.log(obj);
// ans = {k1: 'value1', k2: 'value2'}

// instead you should add this

const obj1 = {
    [k1] : v1,
    [k2] : v2
}
// now you will get perfect answer
console.log(obj1);
// ans = {key1: 'value1', key2: 'value2'}