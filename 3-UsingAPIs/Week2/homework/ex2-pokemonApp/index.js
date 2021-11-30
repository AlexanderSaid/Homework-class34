'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const URL = 'https://pokeapi.co/api/v2/pokemon/';

function createGetButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'button';
  button.textContent = 'Get Pokemon!';

  return button;
}

function createSelectElement() {
  const selectList = document.createElement('select');
  selectList.name = 'Pokemons';
  selectList.id = 'select';

  return selectList;
}

function createUserInterface() {
  const container = document.createElement('div');
  container.id = 'user-interface';
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  const button = createGetButton();
  const selectList = createSelectElement();
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  imgContainer.className = 'image-container';
  imgContainer.appendChild(img);
  sidebar.appendChild(button);
  sidebar.appendChild(selectList);
  container.appendChild(sidebar);
  container.appendChild(imgContainer);
  document.body.appendChild(container);
}

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Request failed!', response.status, response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse;
}

async function fetchAndPopulatePokemons(pokemons) {
  const selectList = document.querySelector('#select');
  const getButton = document.querySelector('button');
  const renderSelectList = () => {
    pokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      selectList.appendChild(option);
    });
    getButton.setAttribute('disabled', 'disabled');
  };
  selectList.addEventListener('change', (e) => {
    const url = `${URL}${e.target.value}`;
    fetchImage(url);
  });
  getButton.addEventListener('click', renderSelectList);
}

async function fetchImage(url) {
  const pokemonImage = document.querySelector('img');
  try {
    const pokemonDetails = await fetchData(url);
    pokemonImage.src = pokemonDetails.sprites.other.dream_world.front_default;
    pokemonImage.alt = pokemonDetails.name;
  } catch (err) {
    console.log('Request failed!', err.message);
  }
}

async function main() {
  createUserInterface();
  const endpoint = `${URL}?limit=151`;
  try {
    const pokemonsObject = await fetchData(endpoint);
    const pokemons = pokemonsObject.results;
    await fetchAndPopulatePokemons(pokemons);
  } catch (error) {
    console.log('error: ', error.message);
    const errorElement = document.createElement('h1');
    const container = document.querySelector('.image-container');
    errorElement.textContent = `Something went wrong try again!`;
    container.appendChild(errorElement);
  }
}

window.addEventListener('load', main);
