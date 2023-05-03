// arrow function and this
// arrow function and this


// arrow funtion e this direct kaj kore na. ek level upore theke this value ney arrow funtion

const user1 = {
    firstName: "rajib",
    age: 34,
    about: function(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }
}

user1.about();


// shortcut to write any function on a object 

const user2 = {
    firstName: "kamal",
    age: 30,
    about(){
        console.log(this.firstName, this.age);
    }
}

user2.about();