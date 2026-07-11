import homeTemplate from './home.html?raw';
import './home.css';
import { fileScanner } from '../../utils/fileScanner.js';

let template = null;
let songs;

function buildTemplate() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = homeTemplate;

  return wrapper.querySelector('#home-template');
}

export async function HomePage() {
  if (!template) template = buildTemplate();

  const fragment = template.content.cloneNode(true);
  const page = fragment.querySelector('.home-page');

  songs = fileScanner();
  
  const songsListContainer = fragment.querySelector('#songs-list');
  songsListContainer.innerHTML = '';
  const ul = document.createElement('ul');

  songs.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song;
    ul.appendChild(li);
  });

  songsListContainer.appendChild(ul);
  

  return page;
}