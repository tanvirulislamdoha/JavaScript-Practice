// nested destructuring
// nested destructuring
// nested destructuring

const users = [
    {userId: 1,fistName: 'alif',gender:'male'},
    {userId: 2,fistName: 'zaman',gender:'male'},
    {userId: 3,fistName: 'kulsum',gender:'female'}
] 


const [usr1, usr2, usr3] = users;
console.log(usr1);

// if we want firstname of 1 and gender of 3

// const [{fistName}, , {gender}] = users;
// console.log(fistName, gender);
    // ans = alif female



// //if we want to change keyname then

// const [{fistName:user1firstName}, , {gender:user3gender}] = users;
// console.log(user1firstName, user3gender);
// // ans = alif female



// suppose u want two property then

const [{fistName, userId}, , {gender}] = users;

console.log(userId, fistName, gender);