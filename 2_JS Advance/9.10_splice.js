// splice method
// splice method
// splice method

// if we want to delet or insert anything to an array then we use splice() method

const arr = ["item1", "item2", "item3"];

//delete
const dlt = arr.splice(1, 1); // splice(star, ktogula dlt hbe, insert)
console.log(arr);
console.log("deleted item : ", dlt);
// splice() always deleted items return kore

//insert
arr.splice(1,0,'inserted item');
console.log(arr);

//delete+insert

arr.splice(1,2,"insered1", "inserted2", "inserted3");
console.log(arr);


