//hoisting


// it will execute only in function declaration
hello();

function hello(){
    console.log("Hello");
}

//but it can't possible in function expression

greetings();
//it will generate an error
let greetings = function(){
    console.log("Hi");
}