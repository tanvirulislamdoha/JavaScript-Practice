// maps
// map is iterable
// store data in ordered fashion
// store key value pair like object

// difference between maps and object

// object can only have string or symbol as key . on the other hand in maps you can use anything as key like array, number, string

const person = new Map();
person.set('firstName', 'tanim');
person.set('age',10);
person.set('gender', 'male');

console.log(person.get('firstName'));
console.log(person.keys());

for(let key of person.keys()){
    console.log(key);
}

for(let [key, value] of person){
    console.log(key, value);
}

const details = new Map([['firstName', 'jamil'], ['age', 12]]);
console.log(details);


const person1 = {
    id:1,
    firstName:"jamil"
}
const extraInfo = new Map();
extraInfo.set(person1, {age:8, gender:'male'});
console.log(extraInfo);
console.log(extraInfo.get(person1).age);