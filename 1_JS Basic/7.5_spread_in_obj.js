//spread operator

// in array 

const arr1 = ["1", "2", "3"];
const arr2 = ["4", "5", "6"];

const newArray = [...arr1, ...arr2];
console.log(newArray);
// ans = (6) ['1', '2', '3', '4', '5', '6']

const a = [..."1234"];
console.log(a);
// ans = (4) ['1', '2', '3', '4']

// in object

const obj1 = {
    k1 : "value1",
    k2 : "value2"
}
const obj2 = {
    k3 : "value3",
    k4 : "value4"
}
const newObj = {...obj1, ...obj2};
console.log(newObj);
// ans = {k1: 'value1', k2: 'value2', k3: 'value3', k4: 'value4'}
const newObj1 = {...obj1, ...obj2, key5 : "value5"};
console.log(newObj1);

// here it will get new index or key based on spreading
const obj = {...["item1", "item2"]};
console.log(obj);
// ans = {0: 'item1', 1: 'item2'}