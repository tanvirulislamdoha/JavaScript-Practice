// new keyword
// new keyword
// new keyword

// it creates an emply object
// return this
// and amke a link to prototype 

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
// Object.create(createUser.prototype) ai line er kaj new keyword kore dey. auto chain kore dey 

const user1 = new createUser("tanvir", 45);
console.log(user1);