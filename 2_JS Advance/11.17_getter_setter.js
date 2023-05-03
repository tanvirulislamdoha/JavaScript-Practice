// getter and setter
// getter and setter

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("raiyan", "islam", 23);
console.log(person1);
console.log(person1.fullName());

//get

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const user1 = new User("tanvir", "islam", 23);
console.log(user1);
console.log(user1.fullName);

// user1.setName("rajib", "ahmed");
// console.log(user1.fullName);

user1.fullName = "mahmud anam";
console.log(user1);
console.log(user1.fullName);


// console.log(user1.fullName);