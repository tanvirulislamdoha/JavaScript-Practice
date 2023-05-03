// rest perameters
// rest perameters
// rest perameters

 const restFunction = (a, b, ...c) => {
    console.log(`a is ${a}`); //ans = 5
    console.log(`b is ${b}`); //ans = 8
    console.log(`c is ${c}`); //ans = 2,3,4
    console.log(`c is `, c); //ans = [2,3,4]
 }

 restFunction(5, 8, 2, 3, 4);

 const addAll = (...numbers) => {
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
 }

 console.log(addAll(1,2,3,4,5,6,7,8));