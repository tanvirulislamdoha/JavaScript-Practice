// super keyword
// super keyword

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating.`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

// const animal1 = new Animal("Tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    eat(){
        return `Modified Eat: ${this.name} is eating.`;
    }
    run(){
        return `${this.name} is running at ${this.speed}`;
    }
}

const fighter = new Dog("fighter", 1,45);
console.log(fighter.eat());
console.log(fighter.isSuperCute());
console.log(fighter.run());