// function inside function

const app = () =>{
    const add = (num1, num2) =>{
        console.log(num1+num2);
    }
    const mul = (num1, num2) => num1*num2;

    console.log("In the App");
    add(2, 3);
    console.log(mul(2, 3));
}

app();