//methods
//methods

//methods holo function inside object

const person = {
    firstName: "Taher",
    age: 8,
    about: () =>{ 
        console.log("He is from sylhet")
    }
}

// console.log(person.about);  //answer will be function

person.about();


const person1 = {
    nam: "Taher",
    boyosh: 8,
    anything: function(){ 
        // can't write this way
        // console.log(`He is ${firstName} and age is ${age}`);
        console.log(`He is ${this.nam} and age is ${this.boyosh}`);


    }
}
// console.log(person1.anything);
person1.anything();