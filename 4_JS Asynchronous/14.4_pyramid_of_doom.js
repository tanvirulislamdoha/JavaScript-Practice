// pyramid of doom
// pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color = color;
        if(onSuccessCallback){
            onSuccessCallback();
        }
        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            } 
        }
    }, time)

}

changeText(heading1, "one", "red", 2000, ()=>{
    // changeText(heading2, "two", "blue", 1000);
    console.log("its working");
},()=>{
    console.log("Heading doesn.t exixts"); 
});

changeText(heading1, "one", "red", 2000, ()=>{
    changeText(heading2, "two", "orange", 1000, ()=>{
        changeText(heading3, "three", "pink", 3000, ()=>{
            changeText(heading4, "four", "violet", 2000, ()=>{
                changeText(heading5, "five", "green", 3000, ()=>{  
                    changeText(heading6, "six", "brown", 2000, ()=>{  
                        changeText(heading7, "seven", "black", 2000, ()=>{  
                            changeText(heading8, "eight", "grey", 1000, ()=>{  
                                changeText(heading9, "nine", "red", 4000, ()=>{  
                                    changeText(heading10, "ten", "brown", 1000, ()=>{  
                                        console.log("It's working..")
                                    },()=>{console.log("Heading10 doesn.t exixts");});
                                },()=>{console.log("Heading9 doesn.t exixts");  });
                            },()=>{ console.log("Heading8 doesn.t exixts");  });
                        },()=>{console.log("Heading7 doesn.t exixts");  });
                    },()=>{console.log("Heading6 doesn.t exixts"); });
                },()=>{console.log("Heading5 doesn.t exixts");});
            },()=>{ console.log("Heading4 doesn.t exixts");  });
        },()=>{console.log("Heading3 doesn.t exixts"); });
    },()=>{console.log("Heading2 doesn.t exixts"); });
},()=>{console.log("Heading1 doesn.t exixts"); });  
