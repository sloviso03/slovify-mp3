import songcardTemplate from './song-card.html?raw';
import { fileScanner } from '../../utils/fileScanner.js';
import './song-card.css';

let template = null;
let songs;

function buildTemplate() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = songcardTemplate;
  return wrapper.querySelector('#songcard-template');
}

export async function RenderSongCard(songName) {
  if (!template) template = buildTemplate();

  const fragment = template.content.cloneNode(true);
  const page = fragment.querySelector('.songs-container');

  songs = fileScanner();
  
  const songsListContainer = fragment.querySelector('#songs-wrapper');
  songsListContainer.innerHTML = '';
  
  const ul = document.createElement('ul');
  ul.id = 'songs-list';

  songs.forEach(song => {
    const li = document.createElement('li');
    li.classList.add('song-item');
    
    const img = document.createElement('img');
    img.src = '/icons/music.png';
    img.alt = 'Music Icon';
    img.classList.add('song-icon');
    
    const span = document.createElement('span');
    span.textContent = song.split('.').slice(0, -1).join('.');
    span.classList.add('song-title');
    
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);
    
    li.addEventListener("click", () => {
        if (typeof songName === 'function') {
          songName(song);
        }
    });
  });

  songsListContainer.appendChild(ul);
  return page;
}