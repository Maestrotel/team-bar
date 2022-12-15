import FetchDrinks from './fetchDrinks';
import cocktailMarkup from './cocktailMarkup';
import Plagination from './plagination';
import { listenLearnMoreBtns, currentModalID } from './learnMoreBtns';
import refs from './refs';
import Storage from './storage';
// import { addDrink } from '..';

let x;
const plagination = new Plagination();
const fetchDrinks = new FetchDrinks();
const storage = new Storage();
// ---------------------------------
refs.searchByAbcBtnsMobile.addEventListener('click', searchByAbcMobile);
refs.searchByAbcBtns.addEventListener('click', searchByAbc);
function searchByAbc(e) {
  if (e.target != e.currentTarget) {
    handleSubmit(e);
  }
}
function searchByAbcMobile(e) {
  if (e.target != e.currentTarget && e.target.nodeName != 'BUTTON') {
    handleSubmit(e);
  }
}
refs.form.forEach(e => e.addEventListener('submit', handleSubmit));
async function handleSubmit(e) {
  e.preventDefault();
  refs.plagination.classList.add('visually-hidden');
  plagination.currentPage = 1;
  refs.burger.classList.add('visually-hidden');
  refs.mainCocktailsList.innerHTML = '';
  let searchKeyWord;
  let serchResult;
  if (e.currentTarget.nodeName == 'UL' || e.currentTarget.nodeName == 'DIV') {
    searchKeyWord = e.target.textContent;
    serchResult = await fetchDrinks.byLetter(searchKeyWord);
  } else {
    searchKeyWord = e.currentTarget.elements.searchInput.value;
    serchResult = await fetchDrinks.byName(searchKeyWord);
  }

  x = serchResult;
  if (serchResult != null && serchResult.length > 9) {
    createPlaginationList(serchResult.length);
    refs.plagination.classList.remove('visually-hidden');
  }
  if (serchResult == null) {
    refs.cocktailsSection.classList.add('visually-hidden');
    refs.error.classList.remove('visually-hidden');
    refs.plagination.classList.add('visually-hidden');
  } else {
    refs.error.classList.add('visually-hidden');
    refs.cocktailsSection.classList.remove('visually-hidden');
    showSearchResults(serchResult);
  }
}
function showSearchResults(serchResult) {
  const numberOfItems = plagination.itemsPerPage();
  serchResult.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * numberOfItems &&
      index < plagination.currentPage * numberOfItems
    ) {
      refs.mainCocktailsList.insertAdjacentHTML(
        'beforeend',
        cocktailMarkup(el)
      );
      // ------- adding icon----
      const useHtml = refs.iconHeart.innerHTML;
      const favDrink = document.querySelector(`[id="${el.idDrink}"]`);
      favDrink.addEventListener('click', addDrink);
      listenLearnMoreBtns(el);
      const svg = favDrink.children[1];
      svg.innerHTML = useHtml;

      // ----------------------
    }
  });
  function addDrink(e) {
    toggleActive(e);
    storage.toggleDrink(e.currentTarget.id);
  }
  function toggleActive(e) {
    if (e.currentTarget.children[0].textContent === 'Add to') {
      e.currentTarget.children[0].textContent = 'Remove';
    } else {
      e.currentTarget.children[0].textContent = 'Add to';
    }
    e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
  }
  // listenLearnMoreBtns();
}
function createPlaginationList(resultsNumber) {
  const plaginationMarkup = [];
  const numberOfItems = plagination.itemsPerPage();
  const numberOfPages = Math.ceil(resultsNumber / numberOfItems);
  for (let i = 1; i < numberOfPages + 1; i++) {
    let active;
    if (i == plagination.currentPage) {
      active = 'pagination__active';
    }
    plaginationMarkup.push(
      `<li><button type="button" class="pagination__numb pagination__item ${active}" id="${i}" data-page>${i}</button></li>`
    );
  }
  refs.pages.innerHTML = plaginationMarkup.join('');
  const plagBtns = document.querySelectorAll('[data-page]');
  plagBtns.forEach(btn => {
    btn.addEventListener('click', plaginationClick);
  });
}

async function plaginationClick(e) {
  const plagBtns1 = document.querySelectorAll('[data-page]');
  plagBtns1.forEach(btn => btn.classList.remove('pagination__active'));
  e.target.classList.add('pagination__active');
  plagination.currentPage = +e.currentTarget.id;
  refs.mainCocktailsList.innerHTML = '';
  const numOfPages = refs.pages.children.length;
  if (plagination.currentPage != 1) {
    refs.arrowPrev.children[0].classList.remove('arrow-no-active');
  }
  if (plagination.currentPage == 1) {
    refs.arrowPrev.children[0].classList.add('arrow-no-active');
  }
  if (plagination.currentPage == numOfPages) {
    refs.arrowNext.children[0].classList.add('arrow-no-active');
  }
  if (plagination.currentPage != numOfPages) {
    refs.arrowNext.children[0].classList.remove('arrow-no-active');
  }
  showSearchResults(x);
}
refs.arrowNext.addEventListener('click', showNextPage);
refs.arrowPrev.addEventListener('click', showPrevPage);
function showNextPage() {
  const numOfPages = refs.pages.children.length;
  if (plagination.currentPage < numOfPages) {
    plagination.nextPage();
    refs.mainCocktailsList.innerHTML = '';
    const plagBtns1 = document.querySelectorAll('[data-page]');
    plagBtns1.forEach(btn => {
      btn.classList.remove('pagination__active');
      if (btn.textContent == plagination.currentPage) {
        btn.classList.add('pagination__active');
      }
    });
    if (plagination.currentPage != 1) {
      refs.arrowPrev.children[0].classList.remove('arrow-no-active');
    }
    if (plagination.currentPage == 1) {
      refs.arrowPrev.children[0].classList.add('arrow-no-active');
    }
    if (plagination.currentPage == numOfPages) {
      refs.arrowNext.children[0].classList.add('arrow-no-active');
    }
    if (plagination.currentPage != numOfPages) {
      refs.arrowNext.children[0].classList.remove('arrow-no-active');
    }
    showSearchResults(x);
  }
}
function showPrevPage() {
  const numOfPages = refs.pages.children.length;
  if (plagination.currentPage > 1) {
    plagination.prevPage();
    refs.mainCocktailsList.innerHTML = '';
    const plagBtns1 = document.querySelectorAll('[data-page]');
    plagBtns1.forEach(btn => {
      btn.classList.remove('pagination__active');
      if (btn.textContent == plagination.currentPage) {
        btn.classList.add('pagination__active');
      }
    });
    if (plagination.currentPage != 1) {
      refs.arrowPrev.children[0].classList.remove('arrow-no-active');
    }
    if (plagination.currentPage == 1) {
      refs.arrowPrev.children[0].classList.add('arrow-no-active');
    }
    if (plagination.currentPage == numOfPages) {
      refs.arrowNext.children[0].classList.add('arrow-no-active');
    }
    if (plagination.currentPage != numOfPages) {
      refs.arrowNext.children[0].classList.remove('arrow-no-active');
    }
    showSearchResults(x);
  }
}

export { createPlaginationList, handleSubmit };
