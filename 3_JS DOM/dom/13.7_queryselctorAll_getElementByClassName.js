//  get multiple elements using getElement by class name
//  get multiple elements using query selector all


// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems[2])
 
// const navItems = document.querySelectorAll(".nav-item"); 
// console.log(navItems);

// const navItems = document.getElementsByTagName("a");


// for loop

// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.color = "black";
// }



//for of loop

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "yellow";
//     navItem.style.color = "black";
// }

const navItems = document.querySelectorAll("a");

navItems.forEach(navItem => {
    navItem.style.backgroundColor = "yellow";
    navItem.style.color = "black";
} )