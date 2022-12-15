import refs from './refs';

// function changeTheme() {
//     refs.switcher.addEventListener('change', (event) => {
//         refs.body.classList.toggle("dark-theme");

//             // if (document.body.classList.toggle("dark-theme")) {
//             //     return;
//             // } else {
//             //     localStorage.setItem("theme", "dark-theme");
//             // }
//         })
//     }

// changeTheme();

function changeTheme() {
  refs.switcher[0].addEventListener('change', event => {
    toggle(event);
  });

  refs.switcher[1].addEventListener('change', event => {
    toggle(event);
  });
}

function toggle(e) {
  refs.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', e.target.checked ? 'dark' : 'ligth');
}

changeTheme();

if (localStorage.getItem('theme') === 'dark') {
  refs.body.classList.add('dark-theme');
  refs.switcher[0].checked = true;
  refs.switcher[1].checked = true;
}
