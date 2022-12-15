import FetchDrinks from './fetchDrinks';
import cocktailModalMarkup from './cocktailModalMarkup';
import ingredientModalMarkup from './ingredientModalMarkup';
import refs from './refs';
import Storage from './storage';
const fetchDrinks = new FetchDrinks();
const storage = new Storage();
// -------------------------------------------------
let currentModalID = 0;
let currentIngredientModal = '';
function listenLearnMoreBtns() {
  const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
  learnMoreBtns.forEach(el => el.addEventListener('click', showModalDrink));
}
async function showModalDrink(e) {
  fetchDrinks
    .byName(e.currentTarget.id)
    .then(targetedDrink => {
      const ingredientList = createIngredientList(targetedDrink[0]);
      refs.cocktailModalContent.innerHTML = cocktailModalMarkup(
        targetedDrink[0],
        ingredientList
      );
      refs.cocktailModal.classList.remove('visually-hidden');
      currentModalID = targetedDrink[0].idDrink;
      if (storage.isInStorage(currentModalID)) {
        refs.modalAddDrink.children[0].textContent = 'Remove from favorite';
      } else {
        refs.modalAddDrink.children[0].textContent = 'Add to favorite';
      }
    })
    .then(() => {
      const ingredients = document.querySelectorAll(
        '.modal-cocktail__item-link'
      );
      ingredients.forEach(el =>
        el.addEventListener('click', showModalIngregients)
      );
    });
}
function createIngredientList(targetedDrink) {
  const markup = [];
  for (let key in targetedDrink) {
    if (key.includes('strIngredient') && targetedDrink[key] != null) {
      markup.push(`<li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link" id="${targetedDrink[key]}">✶ ${targetedDrink[key]}</a>
      </li>
      `);
    }
  }
  return markup.join('');
}
function showModalIngregients(e) {
  refs.ingredientMOdal.classList.remove('visually-hidden');
  localStorage.setItem('favIngredientmodalId', e.currentTarget.id);

  if (storage.isIngredientInStorage(e.currentTarget.id)) {
    refs.modalAddIngredient.children[0].textContent = 'Remove from favorite';
  } else {
    refs.modalAddIngredient.children[0].textContent = 'Add to favorite';
  }
  fetchDrinks.ingredient(e.currentTarget.id).then(p => {
    currentIngredientModal = p.strIngredient;
    const ingredientDetails = createIngredientDetails(p);
    refs.ingredientMOdalContent.innerHTML = ingredientModalMarkup(
      p,
      ingredientDetails
    );
  });
}
function createIngredientDetails(ingredient) {
  let abv = ingredient.strABV;
  if (ingredient.strABV == null) {
    abv = '0';
  }
  return `<li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link">✶ Type: ${ingredient.strType}</a>
      </li>
      
      <li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link"
          >✶ Alcohol by volume: ${abv}%</a
        >
      </li>`;
}
export {
  listenLearnMoreBtns,
  currentModalID,
  currentIngredientModal,
  createIngredientDetails,
};
