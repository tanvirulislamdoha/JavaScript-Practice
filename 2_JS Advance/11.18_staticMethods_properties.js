//static and propertise
//static and propertise


class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // static method
    static classInfo(){
        return 'this is user class';
    }
    //static propertise
    static description = "this is static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating.`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const user1 = new User("tanvir", "islam", 23);
console.log(user1);


// static object print korar jonno new kunu object create kora lage na. amra direct class diyei aita call korte pari

const info = User.classInfo();
console.log(info);

console.log(User.description);

