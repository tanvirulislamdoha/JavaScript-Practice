// object in array
// object in array
// object in array

const users = [
    {userId: 1,fistName: 'alif',gender:'male'},
    {userId: 2,fistName: 'zaman',gender:'male'},
    {userId: 3,fistName: 'kulsum',gender:'female'}
] 
console.log(users);

for(let user of users){
    // console.log(user);
    console.log(user.fistName);
}