// intro to events
// event add korar tin way

const btn = document.querySelector(".btn-headline");
// this is not good practice
// btn.onclick = () => console.log("You clicked me");

// add event listner
// add event listner

// const clicker = () => console.log("You clicked listener");
// btn.addEventListener("click", clicker);

btn.addEventListener("click", () => console.log("You clicked a event listner.!!!"));