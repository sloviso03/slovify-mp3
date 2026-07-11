import footerTemplate from './footer.html?raw';
import './footer.css';
import { navigateTo } from '../../router.js';
import { Reproductor } from '../../components/reproductor/reproductor.js';


export function Footer() {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = footerTemplate
  const element = wrapper.firstElementChild  

  const playerContainer = element.querySelector('.reproductor-player');
  if (playerContainer) {
    playerContainer.appendChild(Reproductor());
  }

  wrapper.querySelectorAll('.footer-a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigateTo(link.getAttribute('href'))
    })
  })

  return element
}

function setActiveLink(links, currentPath) {
  links.forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active')
    }
  })
}