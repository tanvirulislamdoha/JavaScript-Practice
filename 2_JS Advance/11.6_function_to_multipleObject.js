// function to multiple object
// function to multiple object
// function to multiple object

// const user = {
//     firstName: "Saurav",
//     lastName: "Datta",
//     age: 23,
//     email: "sauravdatta@gamil.com",
//     address: "512/B, Fultoli, 3030, Sylhet",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser);

// function to multiple object
// this funtion create object and add key value pain and return the object

const createUser = function(firstName, lastName, age, email, address){
    const user = {};

    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };

    return user;

}

const user1 = createUser('tanvir', 'islam', '24', 'tanvirislam@gmail.com', 'sylhet');
console.log(user1);

const is18 = user1.is18();
const about = user1.about();
console.log(is18);
console.log(about);