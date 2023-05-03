// for in loop


const games = ["footbal", "basketball", "cricket", "baseball", "hockey"];
const games2 = [];

for(let index in games){
    console.log(games[index]);
    // for in returns index not the value
}

for(let index in games){
    games2.push(games[index].toUpperCase());
}

console.log(games2);