// sets
// sets
// sets

//it is iterable and data store kora jay array er mto
// DUPLICATE value rakha jay na set e
//index base access kora jay na



// JOKON AMADER KACHE UNIQUE VALUE THAKE TOKON SET USE KORA BETTER



const numbers = new Set([1,2,3,4]);
console.log(numbers); 
// console.log(numbers[3]) //not allowed 

const cars = new Set();
cars.add("volvo");
cars.add("toyota");
//but array same add kora jay cause aitar address alada
cars.add(['item1', 'item2']);
cars.add(['item1', 'item2']);
// duitai add hobe cause duitar address alada

// kunu element check kora jay set e
if(cars.has('volvo')){
    console.log("volvo is in set")
}

for(let car of cars){
    console.log(car); 
}


const arr = [1,2,2,3,4,5,5,6];
const uniqueElements = new Set(arr);
console.log(uniqueElements);
console.log(arr);