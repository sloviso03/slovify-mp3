import favoritesTemplate from './favorites.html?raw';
import './favorites.css';

let template = null;

function buildTemplate() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = favoritesTemplate;
  
  return wrapper.querySelector('#favorites-template');
}


export async function FavoritesPage() {
  if (!template) template = buildTemplate();

  const fragment = template.content.cloneNode(true);
  const page = fragment.querySelector('.favorites-page');

  return page;
}

