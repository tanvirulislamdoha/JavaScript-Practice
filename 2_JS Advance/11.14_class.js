// class keyword
// class keyword
// class keyword    //in es6

//in javascript classes are fake



// const CreateMember = function(firstName, lastName, age, email, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.address = address;
   

// }
// CreateMember.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// };
// CreateMember.prototype.is18 = function(){
//    return this.age >= 18;
// };


// const member1 = new CreateMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');

// console.log(member1);
// console.log(member1.about());
// console.log(member1.is18());


// fake class bola hy cause uporer motoi niche kaj hobe. but in an organized way te 

class CreateMember{
    constructor(firstName, lastName, age, email, address){
        // console.log("Class constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
   
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
           return this.age >= 18;
        };

}


const member1 = new CreateMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');

console.log(member1);
console.log(member1.about());
console.log(member1.is18());

