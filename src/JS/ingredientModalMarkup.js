export default function ingredientModalMarkup(drink, ingredientDetails) {
  let type = drink.strType;
  let description = drink.strDescription;
  if (drink.strType == null) {
    type = 'unknown';
  }
  if (drink.strDescription == null) {
    description = 'Sorry, description was not found.';
  }
  return `
    <h1 class="modal-hero">${drink.strIngredient}</h1>

    <h2 class="modal-description">${type}</h2>

    <p class="modal-description__text">
      ${description}
    </p>

    <ul class="modal-cocktail list">
      ${ingredientDetails}
    </ul>
     
    `;
}
