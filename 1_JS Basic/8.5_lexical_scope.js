// lexical scope
// lexical scope
// lexical scope

const myVar = "there";

function myApp(){
    // const myVar = "value";

    function myFunc(){
        // const myVar = "hello";
        console.log("inside myFunc", myVar);
    }

    console.log(myVar);
    myFunc();
}

myApp();