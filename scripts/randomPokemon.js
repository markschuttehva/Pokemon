
//let everyPokemon = document.querySelectorAll(":scope > parent");
let everyPokemon = document.querySelector(".parent").children;

function randomPokemon() {
    const rndNum = Math.floor(Math.random() * everyPokemon.length) +1;
    //rndNum = random number pokemon
    //console.log(rndNum);
    //console.log(everyPokemon);

    let pokemonInfo = document.querySelector(".parent :nth-child(" + rndNum + ")").innerHTML;
    console.log(pokemonInfo);
}