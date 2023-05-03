let fruits = ["apple", "banana", "mango"];
console.log(fruits);


// for adding or removing last of an array

// push (adding)
fruits.push("grapes");
console.log(fruits);
// pop (removing)
fruits.pop()
console.log(fruits);
//pop also returns what its removed
console.log(fruits.pop());


// for adding or removing first element of an array

// unshift (adding)
let games = ["cricket", "football", "basketball"];
console.log(games);

games.unshift("hockey");
console.log(games)

// shift (removing)
let updatedGames = games.shift();
console.log(updatedGames);
console.log(games)