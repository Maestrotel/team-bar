const refs = {
  keysetEl: document.querySelector('.js-hero-desktop'),
  heroFormEl: document.querySelector('.js-hero-form'),
  heroSelectEl: document.querySelector('.js-hero-select'),
};
const keysetArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

let markup = [];
renderKeyset(keysetArr);
refs.keysetEl.insertAdjacentHTML('beforeend', markup);

export function renderKeyset(keysetArr) {
  return (markup = keysetArr
    .map(
      key =>
        `<li class="hero__keyset-item list"><button class="hero__key-btn" type="submit">${key}</button></li>`
    )
    .join(''));
}

// let markupSelect = [];

// export function renderSelectOptions(keysetArr){
//   return markupSelect = keysetArr.map(key=>`<option value="${key}">${key}</option>`).join('');
// }
// renderSelectOptions(keysetArr);
// refs.heroSelectEl.insertAdjacentHTML('beforeend', markupSelect);
