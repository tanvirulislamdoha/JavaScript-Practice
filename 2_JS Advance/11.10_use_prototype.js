// use prototype
// use prototype
// use prototype

// prototype holo ekata built in faka object. onnodike proto hocche refference. je chain apni create korben setar refference.

// aikhane new methods create na kore amra prototype object use korte pari . ja javscript e built in function er shate thake


// const memberMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }


const createMember = function(firstName, lastName, age, email, address){
    const member = Object.create(createMember.prototype); 


    member.firstName = firstName;
    member.lastName = lastName;
    member.age = age;
    member.email = email;
    member.address = address;
   
    return member;

}
createMember.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
createMember.prototype.is18 = function(){
   return this.age >= 18;
};


const member1 = createMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');

console.log(member1);
// console.log("member1");
console.log(member1.about());
console.log(member1.is18());