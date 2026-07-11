import { navigateTo } from '../../router.js';
import navbarTemplate from './navbar.html?raw';
import './navbar.css';

export function Navbar() {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = navbarTemplate;    

  return wrapper.firstElementChild;
}
