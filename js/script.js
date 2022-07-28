const pokemonNumber = document.querySelector(".pokemon-number");
const pokemonName = document.querySelector(".pokemon-name");
const pokemonImage = document.querySelector(".pokemon-image");
const form = document.querySelector(".form");
const input = document.querySelector(".input-search");
const prevButton = document.querySelector(".btn-previ");
const nextButton = document.querySelector(".btn-next");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);
  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.style.display = "block";
    pokemonImage.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    input.value = "";
    searchPokemon = data.id;
  } else {
    pokemonNumber.innerHTML = "";
    pokemonName.innerHTML = "Not Found..";
    pokemonImage.style.display = "none";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

prevButton.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

nextButton.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
