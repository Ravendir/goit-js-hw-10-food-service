import makeMenuMarkup from '../template/menu.hbs';
import menuJson from '../menu.json';
const insertRef = document.querySelector('.js-menu');

const markup = makeMenuMarkup(menuJson);

insertRef.innerHTML = markup;
