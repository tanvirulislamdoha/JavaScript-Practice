// keypress event
// mouseover event

const body = document.body;
body.addEventListener("keypress", (e)=>{
    // console.log(e);
    console.log(e.key);
})

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseovere event occured");
})
mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occured");
})