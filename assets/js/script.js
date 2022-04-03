//mport fetchApi from "./modules/fetch-api";

function fetchApi(url, target) {
fetch(url)
  .then((response) => response.json())
  .then((pokemon) => {
    const areaNomePokemon = document.querySelector(target);
    areaNomePokemon.innerText = pokemon.name;
  }).catch((erro) => {
    console.log(Error(erro, 'erro encontrado'));
  });
}

const numeroPokemon = Math.random()*898;
const arredondarNumero = Math.round(numeroPokemon);

console.log(arredondarNumero);

fetchApi(`https://pokeapi.co/api/v2/pokemon/${arredondarNumero}`, '.nome-pokemon');