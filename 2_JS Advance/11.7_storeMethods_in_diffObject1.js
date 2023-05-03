// store method in different object


// const memberMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }


// const createMember = function(firstName, lastName, age, email, address){
//     const member = {};

//     member.firstName = firstName;
//     member.lastName = lastName;
//     member.age = age;
//     member.email = email;
//     member.address = address;
//     member.about = memberMethods.about;
//     member.is18 = memberMethods.is18;
//     return member;

// }

// const member1 = createMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');

// console.log(member1);
// console.log(member1.about());
// console.log(member1.is18());

// uporer code or perfect na.. aitakeu aro perfect kora jay

const memberMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}


const createMember = function(firstName, lastName, age, email, address){
    const member = Object.create(memberMethods); 
    // memberMethods proto boshanu hoise
    // proto mane refference, memberMethods er refference. 


    member.firstName = firstName;
    member.lastName = lastName;
    member.age = age;
    member.email = email;
    member.address = address;
   
    return member;

}

const member1 = createMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');

console.log(member1);
console.log(member1.about());
console.log(member1.is18());