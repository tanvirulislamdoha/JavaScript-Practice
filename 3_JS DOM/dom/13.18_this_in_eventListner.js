// this in event listner

const btn = document.querySelector(".btn-headline");

// aikhane value hobe button ei cause aita function
// btn.addEventListener("click", function(){
//     console.log("You clicked a event listner.!!!");
//     console.log("value of this");
//     console.log(this);
// });



// aikhane value hobe window cause aita arrow function
btn.addEventListener("click", () => {
    console.log("You clicked a event listner.!!!");
    console.log("value of this");
    console.log(this);
});
