let firstName = "Tanvir Islam";

console.log(firstName.length);

//trim()
//left and right side er sob space kete fele

let fName = "  Islam   ";

let newString = fName.trim();
console.log(newString);
console.log(newString.length)


// toUpperCase()
// toLowerCase()


let name_1 = "Mahmud Rehman";

name_1  = name_1.toUpperCase();
console.log(name_1);

name_1  = name_1.toLowerCase();
console.log(name_1);


// slice()

let lastName = "University";
let anotherString = lastName.slice(0, 5);
console.log(anotherString);