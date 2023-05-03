// static list vs live list


// querySelectorAll amader ke static list dey
// getElementBySomething amader ke live list dey

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");


// const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);