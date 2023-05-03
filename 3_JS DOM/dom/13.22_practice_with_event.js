const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        e.currentTarget.style.color = "white";
        e.currentTarget.style.backgroundColor = "red";

    })
})