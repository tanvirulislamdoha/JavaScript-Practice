// javascript e function shudu funtion na...function object ou.


// proto ar prototype vinno jinish

function hello(){
    console.log("hello barather");
}

// function e own properties create kora jay

hello.myOwnProperty = "very unique value";

console.log(hello.myOwnProperty);
// very unique value

// so function function and object duiovabe javascript e kaj kore

// function amader ke dey free space mane empty object jetake bole prototype {}

// prototype holo ekta object

console.log(hello.prototype);

// only function provides prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalala";
}

console.log(hello.prototype);
console.log(hello.prototype.sing());