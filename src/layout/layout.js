import layoutTemplate from './layout.html?raw';
import { Navbar } from '../components/navbar/navbar.js';
import { Footer } from '../components/footer/footer.js';
import { Reproductor } from '../components/reproductor/reproductor.js'
import './layout.css';


export function MainLayout() {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = layoutTemplate
  const layout = wrapper.firstElementChild

  layout.querySelector('#navbar-slot').appendChild(Navbar())

  const playerContainer = layout.querySelector('.reproductor-player');
    if (playerContainer) {
      playerContainer.appendChild(Reproductor());
    }

  layout.querySelector('#footer-slot').appendChild(Footer())

  return layout
}