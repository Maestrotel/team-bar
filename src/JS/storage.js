import FetchDrinks from './fetchDrinks';
const fetchDrinks = new FetchDrinks();
export default class Storage {
  constructor() {
    if (localStorage.getItem('cocktails') === null) {
      localStorage.setItem('cocktails', JSON.stringify([]));
    }
    if (localStorage.getItem('ingredients') === null) {
      localStorage.setItem('ingredients', JSON.stringify([]));
    }
  }
  async toggleDrink(id) {
    const cocktailsStorege = localStorage.getItem('cocktails');
    const arr = JSON.parse(cocktailsStorege);
    const drinkObj = await fetchDrinks.byID(id);

    const isInStorage = arr.find(el => el.idDrink === id);
    if (isInStorage) {
      const reducedArr = arr.filter(el => el.idDrink != id);
      localStorage.setItem('cocktails', JSON.stringify(reducedArr));
    } else {
      arr.push(drinkObj);
      localStorage.setItem('cocktails', JSON.stringify(arr));
    }
  }
  async toggleIngredient(name) {
    const ingredientsStorage = localStorage.getItem('ingredients');
    const arr = JSON.parse(ingredientsStorage);
    const ingredientObj = await fetchDrinks.ingredient(name);

    const isInStorage = arr.find(el => el.strIngredient === name);
    if (isInStorage) {
      const reducedArr = arr.filter(el => el.strIngredient != name);
      localStorage.setItem('ingredients', JSON.stringify(reducedArr));
    } else {
      arr.push(ingredientObj);
      localStorage.setItem('ingredients', JSON.stringify(arr));
    }
  }
  isInStorage(id) {
    const cocktailsStorege = localStorage.getItem('cocktails');
    const arr = JSON.parse(cocktailsStorege);
    // if (arr == null) {
    //   return false;
    // }
    const isInStorage = arr.find(el => el.idDrink === id);
    if (isInStorage === undefined) {
      return false;
    } else {
      return true;
    }
  }
  isIngredientInStorage(name) {
    const ingredientStorege = localStorage.getItem('ingredients');
    const arr = JSON.parse(ingredientStorege);
    const isInStorage = arr.find(el => el.strIngredient === name);
    if (isInStorage === undefined) {
      return false;
    } else {
      return true;
    }
  }
  hasDrinks() {
    const cocktailsStorege = localStorage.getItem('cocktails');
    const arr = JSON.parse(cocktailsStorege);
    if (arr.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  hasIngredients() {
    const cocktailsStorege = localStorage.getItem('ingredients');
    const arr = JSON.parse(cocktailsStorege);
    if (arr.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
