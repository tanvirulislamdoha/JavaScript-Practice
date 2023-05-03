// object destructuring
// object destructuring
// object destructuring

const band = {
    bandName : "Shironamhin",
    famousSong: "Ei Obelay",
    year: 2001,
    anotherSong: "cafeteria"
}

// normal way for destructuring

let x = band.bandName;
let y = band.famousSong;

console.log(x, " : ", y);
// ans = Shironamhin  :  Ei Obelay
x = "artcell";
console.log(x, " : ", y);
// ans = artcell  :  Ei Obelay

// shortcut for destructuring

// //you must have to use same key as like in object

// let {bandName, famousSong} = band; 
// console.log(bandName, famousSong);

//if you want to change key name then use this way

// let {bandName:key1, famousSong:key2} = band;
// // console.log(bandName); //comes erro
// console.log(key1);


// how to store rest properties 

let {bandName, famousSong, ...restProperties} = band;
console.log(bandName, famousSong, restProperties);
// ans = Shironamhin Ei Obelay {year: 2001, anotherSong: 'cafeteria'}