// event bubbling / also event propagation
// capturing
// delegation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", ()=>{
    console.log("You clicked on child");
});
parent.addEventListener("click", ()=>{
    console.log("You clicked on parent");
});
grandparent.addEventListener("click", ()=>{
    console.log("You clicked on grandparent");
});