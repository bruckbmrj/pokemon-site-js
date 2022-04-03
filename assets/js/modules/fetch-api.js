/*export default function fetchApi(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      const areaPokemon = document.querySelector(target);
      areaPokemon.innerText = pokemon.name;
    }).catch((erro) => {
      console.log(Error(erro, 'erro encontrado'));
    });
} */