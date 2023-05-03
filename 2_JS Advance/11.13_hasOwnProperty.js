
// aitake constructor function bole
const CreateMember = function(firstName, lastName, age, email, address){
    // const member = Object.create(createMember.prototype); 


    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
   
    // return member;  //lekhar dorkar nai..new keywork nije thekei return kore, koranu lage na

}
CreateMember.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
CreateMember.prototype.is18 = function(){
   return this.age >= 18;
};


const member1 = new CreateMember('tanvir', 'islam', '29', 'tanvirislam@gmail.com', 'sylhet');

console.log(member1);
// console.log("member1");
console.log(member1.about());
console.log(member1.is18());


for(let key in member1){
    if(member1.hasOwnProperty(key)){
        console.log(key);
    }
}