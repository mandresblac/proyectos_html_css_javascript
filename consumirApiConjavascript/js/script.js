/* fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
  .then((response) => console.log(response)); */

const url = "https://rickandmortyapi.com/api/character";

function makeCard(character) {
  const { name, status, image } = character;
  const cardsContainer = document.querySelector(".cards-container");

  const subTitle = document.createElement("h5");
  subTitle.textContent = name;
  subTitle.classList.add("sub-title");

  const characterStatus = document.createElement("p");
  characterStatus.textContent = status;
  characterStatus.classList.add("character-status");

  if (status === "Alive") characterStatus.style.color = "green";
  else characterStatus.style.color = "gray";

  const characterImage = document.createElement("img");
  characterImage.setAttribute("src", image);
  characterImage.width = 200;

  const card = document.createElement("div");
  card.classList.add("card");

  card.appendChild(subTitle);
  card.appendChild(characterImage);
  card.appendChild(characterStatus);

  cardsContainer.appendChild(card);
}

async function getCharacters() {
  try {
    const response = await fetch(url);
    const { results } = await response.json();

    // Recorremos el array de personajes con un forEach
    results.forEach((element) => {
      makeCard(element);
    });

    // console.log(results);
  } catch (error) {
    console.error(error);
  }
}

getCharacters();
