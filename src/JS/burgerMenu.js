const burgerBtn = document.querySelector('.burger-menu__open-btn');
const burgerOpenBtn = document.querySelector('.burger-menu__close-btn');
const burger = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', showBureger);
function showBureger() {
  burger.classList.remove('visually-hidden');
}
burgerOpenBtn.addEventListener('click', hideBurger);
function hideBurger() {
  burger.classList.add('visually-hidden');
}
