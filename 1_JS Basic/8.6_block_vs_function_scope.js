// block scope vs function scope


// let and const are block scope
//var is function scope

if(true){
    let firstName = "naeem";
}
// console.log(firstName); 
// it will generate an error 

// if we declare let and const in a block scope, then we can only access it inside this scope not elsewhere
{
    let firstName = "munna";
    console.log(firstName);
}