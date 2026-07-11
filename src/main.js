import { registerRoute, navigateTo } from './router.js';
import { HomePage } from './pages/home/home.js';
import { FavoritesPage } from './pages/favorites/favorites.js';
import { MainLayout } from './layout/layout.js';
import './style.css';
import './tokens.css';

let layoutMonted = false;

async function render(pageFactory) {
  const app = document.getElementById('app');

  if(!layoutMonted) {
    app.innerHTML = '';
    app.appendChild(MainLayout());
    layoutMonted = true;
  }

  const content = app.querySelector('#content-slot');
  content.innerHTML = '';
  const pageContent = await pageFactory();
  content.appendChild(pageContent);

  window.scrollTo(0, 0);
}

registerRoute('/', () => render(HomePage));
registerRoute('/home', () => render(HomePage));
registerRoute('/favorites', () => render(FavoritesPage));
registerRoute('*', () => render(HomePage));

document.addEventListener('DOMContentLoaded', () => navigateTo(location.pathname));


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW error:', err));
  });
}