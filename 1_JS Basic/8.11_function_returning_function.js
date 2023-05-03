// funciton returning function
// funciton returning function
// funciton returning function


const myFunc = () =>{
    const insideFunc = () =>{
        return "Heellow..!!";

    }
    return insideFunc;
}

const result = myFunc();

console.log(result());

// if any function return function or take a function as a parameter then its called higher order function.