export const pokedex = document.getElementById("pokedex");
export const numberPokemons = 151;
//console.log(pokedex);

export const promises = [];
// <= 151 = the last pokemon in the pokedex
for (let i = 1; i <= numberPokemons; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //gets the data and converts it to json
    promises.push(fetch(url).then((res) => res.json()));
}

//the results of the pokemons
Promise.all(promises).then( results => {
    const pokemon = results.map( data => ({
        //https://pokeapi.co/?ref=public-apis data from
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        //natural stats of he pokemon
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defence: data.stats[2].base_stat,
        spattack: data.stats[3].base_stat,
        spdefence: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        //adds multiple types to the type attribute
        type: data.types.map((type) => type.type.name).join(' / ')
    }))
    //console.log(pokemon[1].speed);
    displayPokemon(pokemon);
})

    //making html elements
const displayPokemon = (pokemon) => {   
    const pokemonHTMLString = pokemon.map(pokeman => `
    <section class="Pokemonstats col">
    <img src="${pokeman.image}" alt="${pokeman.name}">
    <h1>${pokeman.id}. ${pokeman.name}</h1>
    <h2>${pokeman.type}</h2>
    </section>
    `);
    pokedex.innerHTML = pokemonHTMLString;
}