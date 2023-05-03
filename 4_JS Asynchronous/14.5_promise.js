// promise emon ekta value jeta amader present e jana thake na but future e jana jay

// promise
// promise

const bucket = ['coffe','chips', 'vegetables', 'rice', 'salt'];


// produce
const friedRice = new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
        resolve("fried Rice");
    }
    else{
        reject("couldn't do it");
    }
})

// consume
// how to consume

friedRice.then(
    
    // when resolve works
    (myfriedRice)=>{
    console.log("lets eat", myfriedRice);
    }
    ,
    //when reject works 
    (error)=>{
    console.log(error);
    }
)



