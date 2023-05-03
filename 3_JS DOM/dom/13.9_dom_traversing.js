const rootNode = document.getRootNode();

// console.log(rootNode);
// console.log(rootNode.childNodes);

const htmlElemetNodes = rootNode.childNodes[0];
console.log(htmlElemetNodes);

console.log(htmlElemetNodes.childNodes);
// ans = NodeList(3) [head, text, body]

// console.dir(htmlElemetNodes);

const headElementNode = htmlElemetNodes.childNodes[0];
const textElement1 = htmlElemetNodes.childNodes[1]; 
const bodyElementNode = htmlElemetNodes.childNodes[2];

console.log(headElementNode);
console.log(textElement1);
console.log(bodyElementNode);

//who is the paret of head
console.log(headElementNode.parentNode);

//sibling relationship
//sibling relationship

console.log(headElementNode.nextSibling);
// ans = text
console.log(headElementNode.nextElementSibling);
// ans = body

const h1 = document.querySelector("h1");
const h1Parent = h1.parentNode;
h1Parent.style.color = "red";
h1Parent.style.backgroundColor = "blue";

const mainParent = h1.parentNode.parentNode;
mainParent.style.backgroundColor = "#000";


const head = document.querySelector("head");
const title = head.querySelector("title");

console.log(title);
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.children);