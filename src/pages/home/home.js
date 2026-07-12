import homeTemplate from './home.html?raw';
import { RenderSongCard } from '../../components/song-card/song-card.js';
import { loadSong } from '../../components/reproductor/reproductor.js';
import './home.css';

let template = null;

function buildTemplate() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = homeTemplate;

  return wrapper.querySelector('#home-template');
}

export async function HomePage() {
  if (!template) template = buildTemplate();

  const fragment = template.content.cloneNode(true);
  const page = fragment.querySelector('.home-page');  

  const cardContainer = page.querySelector('#card-container');
  const cardElement = await RenderSongCard(loadSong);
  cardContainer.appendChild(cardElement);

  return page;
}