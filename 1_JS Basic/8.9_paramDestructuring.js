// param destructuring
// param destructuring
// param destructuring

const person ={
    fName : "taher",
    lName : "mohammad",
    age : 22
}

const printDetails = (object) => {
    console.log(object.fName);
    console.log(object.lName);
    console.log(object.age);
    // console.log(object.pName); //undefined
}

printDetails(person);

// now how to destructuring

const displayAll = ({fName, lName, age}) => {
    console.log(fName, lName, age);
}
displayAll(person);