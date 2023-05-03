let number = prompt("Enter Your Number : ");

if(number > 19){
    if(number >= 20){
        console.log("Your guess is too High");
    }
    else{
        console.log("Your are almost close");
    }
}
else if(number < 19){
    if(number <= 17){
        console.log("Your Guess is too Low.");
    }
    else{
        console.log("Your are almost close");
    }
}
else{
    console.log("You are Winner..!!");
}