//mport fetchApi from "./modules/fetch-api";

function fetchApi(url, target) {
fetch(url)
  .then((response) => response.json())
  .then((pokemon) => {
    //console.log(pokemon.sprites.other.official-artwork);
    getDescriptionById(pokemon.species.url);
    const areaNomePokemon = document.querySelector(target);
    const pokemonImg = Object.values(pokemon.sprites.other)[2].front_default;
    areaNomePokemon.querySelector('.pokemon-nome').innerText = `#${pokemon.id} ${pokemon.name}`;
    areaNomePokemon.querySelector('.pokemon-img').src = pokemonImg;
    if (pokemon.types[1]) {
      areaNomePokemon.querySelector('.pokemon-tipo').innerText = pokemon.types[0].type.name + '/' + pokemon.types[1].type.name;  
    } else {
      areaNomePokemon.querySelector('.pokemon-tipo').innerText = pokemon.types[0].type.name;
    }

    
  }).catch((erro) => {
    console.log(Error(erro, 'erro encontrado'));
  });
}
function getDescriptionById(url){
  //https://pokeapi.co/api/v2/pokemon-species/1/
  fetch(url)
    .then((response) => response.json())
    .then((descPokemon) => {
      console.log(descPokemon);
    });
}

//getDescriptionById('https://pokeapi.co/api/v2/pokemon-species', '5');
const numeroPokemon = Math.random()*898;
const arredondarNumero = Math.round(numeroPokemon);

fetchApi(`https://pokeapi.co/api/v2/pokemon/${arredondarNumero}`, '.pokemon-destaque');