import refs from './refs';
refs.pageSelectFavCocktails.forEach(el =>
  el.addEventListener('click', setCocktailsPage)
);
refs.pageSelectFavIngredients.forEach(el =>
  el.addEventListener('click', setIngredientsPage)
);
function setCocktailsPage() {
  localStorage.setItem('page', 'cocktails');
}
function setIngredientsPage() {
  localStorage.setItem('page', 'ingredients');
}
