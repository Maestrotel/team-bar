import Storage from './storage';
const storage = new Storage();
export default function cocktailMarkup(drink) {
  let btnText = 'Add to';
  let iconClass = 'icon-heart-not-active';
  if (storage.isInStorage(drink.idDrink)) {
    btnText = 'Remove';
    iconClass = '';
  }
  const markup = `<li class="cocktails-cards__item">
        <img
          class="cocktails__photo"
          src="${drink.strDrinkThumb}"
          alt="Коктейль"
          width="280px"
        />

        <div class="cocktails-description">
          <h3 class="cocktails-head">${drink.strDrink}</h3>
          <div class="cocktails-buttons">
            <button class="button learn-more-btn" type="button" id="${drink.strDrink}">
              Learn more
            </button>
            <button
              class="button add-remove-btn active"
              type="button"
              data-favorite-cocktail 
              id="${drink.idDrink}"
            >
              <span>${btnText}</span>

              <svg class="${iconClass}" width="20" height="20">
                  
              </svg>

            </button>
          </div>
        </div>
        </li>`;

  return markup;
}
