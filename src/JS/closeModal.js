import refs from './refs';
refs.cocktailCloseBtn.addEventListener('click', closeCocktailModal);
refs.ingredientCloseBtn.addEventListener('click', closeIngredientModal);
refs.cocktailModal.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeCocktailModal();
  }
});
refs.ingredientMOdal.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeIngredientModal();
  }
});
function closeCocktailModal() {
  refs.cocktailModal.classList.add('visually-hidden');
}
function closeIngredientModal() {
  refs.ingredientMOdal.classList.add('visually-hidden');
}
