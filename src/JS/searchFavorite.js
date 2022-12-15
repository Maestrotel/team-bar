import refs from './refs';
import cocktailMarkup from './cocktailMarkup';
import Plagination from './plagination';
import { listenLearnMoreBtns } from './learnMoreBtns';
import favIngredMarkup from './favIngredientsMarkup';
import Storage from './storage';
import { createIngredientDetails } from './learnMoreBtns';
import ingredientModalMarkup from './ingredientModalMarkup';
import FetchDrinks from './fetchDrinks';

const plagination = new Plagination();
const fetchDrinks = new FetchDrinks();
const storage = new Storage();
refs.form.forEach(e => e.addEventListener('submit', handleSubmit));
// refs.modalAddIngredient.addEventListener('click', addIngredientModal);
let page = localStorage.getItem('page');
let res;
// let ingredientModalName;
function handleSubmit(e) {
  e.preventDefault();
  refs.burger.classList.add('visually-hidden');
  refs.favCocktailsList.innerHTML = '';
  refs.favIngredientsList.innerHTML = '';
  let serchResult;
  if (page == 'cocktails') {
    const cocktailsStorege = localStorage.getItem('cocktails');
    arr = JSON.parse(cocktailsStorege);
    serchResult = arr.filter(el =>
      el.strDrink.includes(e.currentTarget.elements.searchInput.value)
    );
    res = serchResult;
  } else if (page == 'ingredients') {
    const cocktailsStorege = localStorage.getItem('ingredients');
    arr = JSON.parse(cocktailsStorege);
    serchResult = arr.filter(el =>
      el.strIngredient.includes(e.currentTarget.elements.searchInput.value)
    );
    res = serchResult;
  }
  // ===============err/res============

  if (serchResult.length == 0) {
    if (page == 'cocktails') {
      refs.favCocktailsErr.classList.remove('visually-hidden');
    } else {
      refs.favIngredientsErr.classList.remove('visually-hidden');
    }
  } else {
    if (page == 'cocktails') {
      refs.favCocktailsErr.classList.add('visually-hidden');
    } else {
      refs.favIngredientsErr.classList.add('visually-hidden');
    }
    if (page == 'cocktails') {
      showSearchResults(serchResult);
    } else {
      showsearchedIngredients(serchResult);
    }
  }
}
function showSearchResults(serchResult) {
  serchResult.map((el, index) => {
    refs.favCocktailsList.insertAdjacentHTML('beforeend', cocktailMarkup(el));
    // ------- adding icon----
    const useHtml = refs.iconHeart.innerHTML;
    const favDrink = document.querySelector(`[id="${el.idDrink}"]`);
    favDrink.addEventListener('click', addDrink);
    listenLearnMoreBtns(el);
    const svg = favDrink.children[1];
    svg.innerHTML = useHtml;

    // ----------------------
  });
}
function addDrink(e) {
  toggleActive(e);
  storage.toggleDrink(e.currentTarget.id);
}
function toggleActive(e) {
  if (e.currentTarget.children[0].textContent === 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
}
function showsearchedIngredients(serchResult) {
  refs.favIngredientsList.innerHTML = '';
  const numberOfItems = plagination.itemsPerPage();

  if (serchResult.length > 9) {
    createPlaginationList(serchResult.length);
    refs.plagination.classList.remove('visually-hidden');
  }
  serchResult.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * numberOfItems &&
      index < plagination.currentPage * numberOfItems
    ) {
      refs.favIngredientsList.insertAdjacentHTML(
        'beforeend',
        favIngredMarkup(el)
      );

      const favIngred = document.querySelector(`[id="${el.strIngredient}"]`);
      favIngred.addEventListener('click', addIngredient);
      const useHtml = refs.iconHeart.innerHTML;

      const svg = favIngred.children[1];
      svg.innerHTML = useHtml;
      // ingredientDetailsBtn(el);
      const ingredientDetailsBtns = document.querySelector(
        `[id="${1 + el.strIngredient}"]`
      );

      ingredientDetailsBtns.addEventListener('click', showModalIngregients);
    }
  });
}
function addIngredient(e) {
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
  storage.toggleIngredient(e.currentTarget.id);
}

async function showModalIngregients(e) {
  modalId = e.currentTarget.id.slice(1);
  localStorage.setItem('favIngredientmodalId', modalId);
  refs.ingredientMOdal.classList.remove('visually-hidden');
  if (storage.isIngredientInStorage(modalId)) {
    refs.modalAddIngredient.children[0].textContent = 'Remove from favorite';
  } else {
    refs.modalAddIngredient.children[0].textContent = 'Add to favorite';
  }
  const ingred = await fetchDrinks.ingredient(modalId);
  const ingredientDetails = createIngredientDetails(ingred);
  refs.ingredientMOdalContent.innerHTML = ingredientModalMarkup(
    ingred,
    ingredientDetails
  );
}
function addIngredientModal1(e) {
  if (e.target.textContent === 'Add to favorite') {
    e.target.textContent = 'Remove from favorite';
  } else {
    e.target.textContent = 'Add to favorite';
  }
  storage.toggleIngredient(modalId);
}
