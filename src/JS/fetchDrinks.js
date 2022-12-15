export default class FetchDrinks {
  random() {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(p => p.json())
      .then(p => p.drinks[0]);
  }
  byLetter(letter) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    )
      .then(p => p.json())
      .then(p => p.drinks);
  }
  byName(keyWord) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyWord}`
    )
      .then(p => p.json())
      .then(p => p.drinks);
  }
  byID(id) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then(p => p.json())
      .then(p => p.drinks[0]);
  }
  ingredient(keyWord) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${keyWord}`
    )
      .then(p => p.json())
      .then(p => p.ingredients[0]);
  }
  favorites() {}
}
