// store method in different object
// store method in different object
// store method in different object

// const createUser = function(firstName, lastName, age, email, address){
//     const user = {};

//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     };

//     return user;

// }

// const user1 = createUser('tanvir', 'islam', '24', 'tanvirislam@gmail.com', 'sylhet');
// console.log(user1);

// const is18 = user1.is18();
// const about = user1.about();
// console.log(is18);
// console.log(about);

// uporer aitai problem hocche jotobar user create hobe totobar about and is18 method create hobe. fole memory nosto hbe. aitake aro efficient way te korte hobe

// soluntion

const memberMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}


const createMember = function(firstName, lastName, age, email, address){
    const member = {};

    member.firstName = firstName;
    member.lastName = lastName;
    member.age = age;
    member.email = email;
    member.address = address;
    member.about = memberMethods.about;
    member.is18 = memberMethods.is18;
    return member;

}

const member1 = createMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');
const member2 = createMember('raiyan', 'ahmed', '2', 'rai@gmail.com', 'dhaka');

console.log(member1);
console.log(member1.about());
console.log(member1.is18());
console.log(member2);
console.log(member2.about());
console.log(member2.is18());


//