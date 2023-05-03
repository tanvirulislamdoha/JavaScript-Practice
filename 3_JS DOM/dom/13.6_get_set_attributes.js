// get and set attributes
// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));

const inputElement = document.querySelector(".form-todo input");

console.log(inputElement.getAttribute("type"));
inputElement.setAttribute("type", "email");
console.log(inputElement.getAttribute("type"));