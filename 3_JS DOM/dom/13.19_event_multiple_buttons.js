// events in multiple buttons 

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click", ()=>{
//     console.log("you clicked me");
// })

const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
    
//     button.addEventListener("click", function(){
//         //aikhane arrow function use korle error ashbe cause this window object return korbe
//         // console.log("You clicked me");
//         console.log(this.textContent);
//     })
// }


// for(let i=0; i<allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
         console.log(this.textContent);
    })
})