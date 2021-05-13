import './styles.css';
import './js/menu.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('theme') === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  switchTheme.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
}

function updateTheme(oldTheme, newTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}

switchTheme.addEventListener('change', changeTheme);
function changeTheme(e) {
  if (e.target.checked) {
    updateTheme(Theme.LIGHT, Theme.DARK);
  } else {
    updateTheme(Theme.DARK, Theme.LIGHT);
  }
}

// const firstTheme = () => {
//   let currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
//   switchTheme.chaked = Theme.DARK === currentTheme;
//   return currentTheme;
// };

// bodyRef.classList.add(firstTheme());

// function localStorageSave(currentTheme) {
//   localStorage.setItem('theme', currentTheme);
// }

// function updateLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// const theme = localStorage.getItem('theme');
// if (theme === Theme.Dark) {
//   document.body.classList.add(Theme.DARK);
//   switchTheme.checked = true;
// } else {
//   document.body.classList.add(Theme.LIGHT);
// }
