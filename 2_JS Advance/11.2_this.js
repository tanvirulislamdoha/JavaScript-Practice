// this keyword
// this keyword
// this keyword



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

//main concept
function personInfo(){
    console.log(`He is ${this.firstName} and age is ${this.year}`);
} 

const person2 = {
    firstName: "Munir",
    year: 15,
    about: personInfo
}
const person3 = {
    firstName: "javed",
    year: 19,
    about: personInfo
}
const person4 = {
    firstName: "rahim",
    year: 23,
    about: personInfo
}

person2.about();
person3.about();
person4.about();