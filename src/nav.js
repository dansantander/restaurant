import logo2 from './assets/logo2.png';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

const renderNav = () => {
  const nav = document.querySelector('#navbar');
  const main = document.querySelector('#main');

  const navContainer = document.createElement('div');
  navContainer.classList.add('navcontainer');
  nav.appendChild(navContainer);
  
  const socials = document.createElement('div');
  socials.classList.add('socials');
  navContainer.appendChild(socials);
  
  const a1 = document.createElement('a');
  socials.appendChild(a1);
  
  const a2 = document.createElement('a');
  socials.appendChild(a2);

  const a3 = document.createElement('a');
  socials.appendChild(a3);

  a1.innerHTML = `<i class="fab fa-instagram"></i>`;
  a2.innerHTML = `<i class="fab fa-facebook-f"></i>`;
  a3.innerHTML = `<i class="fab fa-twitter"></i>`;

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  navContainer.appendChild(logoContainer);
  
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logoContainer.appendChild(logo);
  
  const imgLogo = document.createElement('img');
  imgLogo.src = logo2;
  logo.appendChild(imgLogo);
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  navContainer.appendChild(menuContainer);

  const menu = document.createElement('ul');
  menu.classList.add('menu');
  menuContainer.appendChild(menu);
  
  const li1 = document.createElement('li');
  li1.classList.add('menu-item');
  menu.appendChild(li1);

  const li2 = document.createElement('li');
  li2.classList.add('menu-item');
  menu.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList.add('menu-item');
  menu.appendChild(li3);

  const a4 = document.createElement('a');
  a4.textContent = 'HOME';
  li1.appendChild(a4);

  const a5 = document.createElement('a');
  a5.textContent = 'MENU';
  li2.appendChild(a5);

  const a6 = document.createElement('a');
  a6.textContent = 'CONTACT';
  li3.appendChild(a6);

  const clean = () => {
    main.innerHTML = ''
  };

  a4.addEventListener('click', () => {
    clean();
    renderHome();
  });

  a5.addEventListener('click', () => {
    clean();
    renderMenu();
  });

  a6.addEventListener('click', () => {
    clean();
    renderContact();
  });
}

export default (renderNav);