import layoutTemplate from './layout.html?raw';
import './layout.css';
import { Navbar } from '../components/navbar/navbar.js';
import { Footer } from '../components/footer/footer.js';


export function MainLayout() {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = layoutTemplate
  const layout = wrapper.firstElementChild

  layout.querySelector('#navbar-slot').appendChild(Navbar())
  layout.querySelector('#footer-slot').appendChild(Footer())

  return layout
}