import Storage from './storage';
const storage = new Storage();
export default function favIngredMarkup(ingredient) {
  let btnText = 'Add to';
  let iconClass = 'icon-heart-not-active';
  if (storage.isIngredientInStorage(ingredient.strIngredient)) {
    btnText = 'Remove';
    iconClass = '';
  }
  let strType = ingredient.strType;
  if (strType == null) {
    strType = ingredient.strIngredient;
  }
  return `<li class="cocktails-cards__item">
        <div class="cocktails-description cocktails-cards__ingredients">
          <h3 class="cocktails-head cocktails-head__ingredients">${
            ingredient.strIngredient
          }</h3>
          <p class="cocktails-description__ingredients">${strType}</p>
          <div class="cocktails-buttons cocktails-buttons__ingredients">
            <button class="button learn-more-btn learn-more-ingred" type="button" id="${
              1 + ingredient.strIngredient
            }">
              Learn more
            </button>
            <button
              class="button add-remove-btn active"
              type="button"
              data-favorite-cocktail
              id="${ingredient.strIngredient}"
            >
              <span>${btnText}</span>
              <svg class="${iconClass}" width="20" height="20">
                  
              </svg>
            </button>
          </div>
        </div>
      </li>`;
}
