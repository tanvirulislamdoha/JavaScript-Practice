// event Object

// const firstButton = document.querySelectorALl("#one");

// firstButton.addEventListener("click", ()=>{
//     console.log("you clicked me");
// })

const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        
        // console.log(e);
        console.log(e.target);
    })
}