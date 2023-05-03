// callback function
// callback function
// callback function



const callBackFunc = (info) => {
    console.log("i am inside callBackFunc");
    console.log(`i get infomation about ${info}`);
}

const mainFunc = (callback) => {
    console.log("i am mainFunc"); 
    callback("Money");
}


mainFunc(callBackFunc);



// if any function return function or take a function as a parameter then its called higher order function.