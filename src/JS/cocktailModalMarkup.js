export default function cocktailModalMarkup(drink, ingredientList) {
  return `
    
<h1 class="modal-hero__drink">${drink.strDrink}</h1>

    <h2 class="modal-description__drink">Instructions:</h2>

    <p class="modal-description__text-drink">
      ${drink.strInstructions}
    </p>

    <img
      class="modal-images"
      src="${drink.strDrinkThumb}"
      alt="${drink.strDrink}"
      width="280"
      height="280"
    />

    <h2 class="modal-ingredients">INGREDIENTS</h2>

    <h3 class="modal-ingredients__cocktail">Per cocktail</h3>

    <ul class="modal-cocktail__drink list">
      ${ingredientList}
    </ul>`;
}
