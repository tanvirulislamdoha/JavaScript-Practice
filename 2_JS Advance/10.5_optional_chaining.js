//optinal chaining
//optinal chaining
//optinal chaining

const user ={
    nam : "abu taher",
    address: {district:'comilla'},
    phone: {first:1232434324}
}

console.log(user.address);
console.log(user.address.district);

console.log(user?.phone);
console.log(user?.phone?.second);