// call apply bind
// call apply bind
// call apply bind

// function hello(){
//     console.log("Hello world");
// }
// // hello();
// hello.call();


// call
// call


const user1 = {
    firstName: "rajib",
    age: 34,
    about: function(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }
}
const user2 = {
    firstName: "fahim",
    age: 14,
    
}
// user1.about();

// how to use abut function in user2
// user1.about.call(user2);
user1.about.call(user2, "guitar", "muza");

// aro easily kivabe likha jay

function about(result, awards){
    console.log(this.firstName, this.batch, result, awards);
}

const alumni1 = {
    firstName: "Farhan Ahmed",
    batch: "47th",
    // about: personalInfo
}
const alumni2 = {
    firstName: "Abu Taher",
    batch: "50th",
    
}

// alumni1.about.call(alumni1, "First Class", "No awards");
// alumni1.about.call(alumni2, "Second Class", "Proctorial awards");

about.call(alumni1, "First Class", "No awards");
about.call(alumni2, "Second Class", "Proctorial awards");

//apply
//apply

//apply ar call er modde main difference hocche  

about.apply(alumni2, ["First Class", "No Awards"]);

// bind
// bind

//bind muloto function return kore.

const myFunc = about.bind(alumni2, "Third Class", "No Awards");
myFunc();


