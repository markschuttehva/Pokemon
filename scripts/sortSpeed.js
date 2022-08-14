import {promises as pokemonStats} from './allPokemon.js';
import {numberPokemons} from './allPokemon.js';
import {pokedex} from './allPokemon.js';
const speedArray = [];

//console.log(pokemonStats[1]);
//console.log(/*pokemonStats,*/ pokemonStats[1].value.speed);
//get speed of a pokemon (as number)
pokemonStats[0].then(speed => { console.log (speed.stats[5].base_stat)});

//loop through pokemons and look at their speed and sort it based on highest speed
function getSpeed() {
    for (let i = 0; i <= numberPokemons; i++) {
        pokemonStats[i].then(speed => { 
            //console.log (speed.stats[5].base_stat);
            speedArray.push(speed.stats[5].base_stat);
            //sorts the array from highest speed to lowest
            speedArray.sort(function(a, b){return b-a});
            
        })
        soortSpeed(speedArray)
    } 
}
//speedArray is a list of speed from the pokemons
console.log(speedArray);
const soortSpeed = (speedArray) => {
    //console.log(speedArray);
    for (let i = 0; i <= speedArray.length; i++) {
    const pokemonHTMLString = speedArray.map(pokeman => `
    <section class="Pokemonstats col">
    <img src="${pokeman.image}" alt="${pokeman.name}">
    <h1>${pokeman.id}. ${pokeman.name}</h1>
    <h2>${pokeman.type}</h2>
    </section>
    `);
    pokedex.innerHTML = pokemonHTMLString;
}
}

// const displayPokemon = (pokemon) => {   
//     const pokemonHTMLString = pokemon.map(pokeman => `
//     <section class="Pokemonstats col">
//     <img src="${pokeman.image}" alt="${pokeman.name}">
//     <h1>${pokeman.id}. ${pokeman.name}</h1>
//     <h2>${pokeman.type}</h2>
//     </section>
//     `);
//     pokedex.innerHTML = pokemonHTMLString;
// }



getSpeed();