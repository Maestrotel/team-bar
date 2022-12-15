const refs = {
  addToFavoritesBtn: document.querySelectorAll('[data-favorite-cocktail]'),
  mainCocktailsList: document.querySelector('.cocktails-cards'),
  tempBlock: document.querySelector('.temp-block'),
  iconHeart: document.querySelector('.icon-heart-not-active'),
  cocktailModal: document.querySelector('[data-modal-cocktail]'),
  cocktailModalContent: document.querySelector('[data-modal-cocktail-content]'),
  ingredientMOdal: document.querySelector('[data-modal-ingredients]'),
  ingredientMOdalContent: document.querySelector(
    '[data-modal-ingredients-content]'
  ),
  cocktailCloseBtn: document.querySelector('[data-modal-cocktail-close]'),
  ingredientCloseBtn: document.querySelector('[data-modal-ingredients-close]'),
  modalAddDrink: document.querySelector('[data-add-drink]'),
  modalAddIngredient: document.querySelector('[data-add-ingredient]'),
  form: document.querySelectorAll('.js-form-search'),
  error: document.querySelector('.cocktails-err'),
  cocktailsSection: document.querySelector('.cocktails'),
  plagination: document.querySelector('.pagination'),
  plaginationList: document.querySelector('.pagination__list'),
  dots: document.querySelector('.dots'),
  pages: document.querySelector('.pages'),
  burger: document.querySelector('.burger-menu'),
  favCocktailsList: document.querySelector('[data-fav-cock-list]'),
  favCocktailsErr: document.querySelector('[data-fav-cock-err]'),
  favIngredientsErr: document.querySelector('[data-fav-ingred-err]'),
  favCocktailsTitle: document.querySelector('[data-cock-title]'),
  favIngredientsTitle: document.querySelector('[data-ingred-title]'),
  favIngredientsList: document.querySelector('[data-fav-ingred-list]'),

  switcher: document.querySelectorAll('[type="checkbox"]'),
  body: document.querySelector('body'),
  searchByAbcBtns: document.querySelector('.hero__keyset'),
  searchByAbcBtnsMobile: document.querySelector('.hero__form-select'),
  arrowPrev: document.querySelector('.pagination__prev'),
  arrowNext: document.querySelector('.pagination__next'),
  pageSelectFavCocktails: document.querySelectorAll('[data-page-cocktails]'),
  pageSelectFavIngredients: document.querySelectorAll(
    '[data-page-ingredients]'
  ),
};
export default refs;
