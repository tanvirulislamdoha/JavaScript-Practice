const games = ["footbal", "basketball", "cricket", "baseball", "hockey"];
const games2 = [];

for(let game of games){
    console.log(game);
    // for of returns value not the index
}

for(let game of games){
    games2.push(game.toUpperCase());
}

console.log(games2);