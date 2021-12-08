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
const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

function createButton() {
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
  selectList.addEventListener('change', (e) => {
    if (e.target.value) {
      const pokemonUrl = e.target.value;
      fetchImage(pokemonUrl);
    } else {
      const pokemonImage = document.querySelector('img');
      pokemonImage.src = '';
      pokemonImage.alt = '';
    }
  });
  return selectList;
}

function createUserInterface() {
  const container = document.createElement('div');
  container.id = 'user-interface';
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  const button = createButton();
  const selectList = createSelectElement();
  const firstSelectOption = document.createElement('option');
  firstSelectOption.id = 'first-option';
  firstSelectOption.value = '';
  firstSelectOption.textContent = '-- no pokemons yet';
  selectList.appendChild(firstSelectOption);
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  imgContainer.className = 'image-container';
  const errorElement = document.createElement('h1');
  errorElement.style.display = 'none';
  imgContainer.appendChild(img);
  imgContainer.appendChild(errorElement);
  sidebar.appendChild(button);
  sidebar.appendChild(selectList);
  container.appendChild(sidebar);
  container.appendChild(imgContainer);
  document.body.appendChild(container);
}

function errorHandler(error) {
  console.log('error: ', error.message);
  const errorElement = document.querySelector('h1');
  //NOTE: This will change the display value for line 57
  errorElement.style.display = 'block';
  errorElement.textContent = `Something went wrong try again!`;
}

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Request failed!', response.status, response.statusText);
  }
  return response.json();
}

async function fetchImage(url) {
  const pokemonImage = document.querySelector('img');
  try {
    const pokemonProfile = await fetchData(url);
    pokemonImage.src = pokemonProfile.sprites.other.dream_world.front_default;
    pokemonImage.alt = pokemonProfile.name;
  } catch (error) {
    errorHandler(error);
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const selectList = document.querySelector('#select');
    const firstOption = document.querySelector('#first-option');
    const button = document.querySelector('button');
    const pokemonsObject = await fetchData(URL);
    const pokemons = pokemonsObject.results;
    pokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectList.appendChild(option);
    });
    firstOption.textContent = '-- select a pokemon';
    button.setAttribute('disabled', 'disabled');
  } catch (error) {
    errorHandler(error);
  }
}

function main() {
  createUserInterface();
  const button = document.querySelector('button');
  button.addEventListener('click', fetchAndPopulatePokemons);
}

window.addEventListener('load', main);
