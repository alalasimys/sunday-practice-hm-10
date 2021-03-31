import data from '../data/menu.json';
import template from '../templates/template.hbs';

const refs = {
  body: document.body,
  list: document.querySelector('.js-menu'),
  input: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);

refs.input.checked = localStorage.getItem('theme') === Theme.DARK;

const markup = template(data);

refs.list.insertAdjacentHTML('beforeend', markup);

function changeTheme(add, rem) {
  // refs.body.classList.remove(rem);
  // refs.body.classList.add(add);
  // localStorage.setItem('theme', add);
  //----second variant
  refs.body.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}

refs.input.addEventListener('change', onThemeChange);

function onThemeChange({ target }) {
  // if (target.checked) {
  //   changeTheme(Theme.DARK, Theme.LIGHT);
  // } else {
  //   changeTheme(Theme.LIGHT, Theme.DARK);
  // }
  //-----second variant
  target.checked
    ? changeTheme(Theme.DARK, Theme.LIGHT)
    : changeTheme(Theme.LIGHT, Theme.DARK);
}
