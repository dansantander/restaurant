import logo2 from './assets/logo2.png';
import bg from './assets/bg.png';

const renderHome = (homelink, menulink, contactlink) => {
  const main = document.querySelector('#main');

  const content = document.createElement('div');
  content.classList.add('content');
  main.appendChild(content);

  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  content.appendChild(nav);
  
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

  //*************** POSSIBLE SEPARETED FILE FOR HOME RENDER ***************/

  const hero = document.createElement('div');
  hero.classList.add('hero');
  content.appendChild(hero);

  const heroItems = document.createElement('div');
  heroItems.classList.add('heroitems');
  hero.appendChild(heroItems);

  const bigText1 = document.createElement('h1');
  bigText1.classList.add('herotext','red');
  bigText1.innerHTML = `May you always <br> be surrounded`;
  heroItems.appendChild(bigText1);

  
  const bigText2 = document.createElement('h1');
  bigText2.classList.add('herotext','white');
  bigText2.innerHTML = `by good friends<br>and great bbq`;
  heroItems.appendChild(bigText2);

  const blackbox = document.createElement('div');
  blackbox.classList.add('blackbox');
  heroItems.appendChild(blackbox);
  
  const boxTitle1 = document.createElement('h1');
  boxTitle1.textContent = 'Bon Apetit';
  blackbox.appendChild(boxTitle1);

  const boxText1 = document.createElement('p');
  boxText1.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae rerum nostrum quas ipsam corrupti nemo perferendis nam nesciunt eius doloribus?';
  blackbox.appendChild(boxText1);

  const boxButton1 = document.createElement('button');
  boxButton1.textContent = 'Browse Recipes';
  boxButton1.classList.add('btn', 'light');
  blackbox.appendChild(boxButton1);

  const beigebox = document.createElement('div');
  beigebox.classList.add('beigebox');
  heroItems.appendChild(beigebox);

  const boxTitle2 = document.createElement('h1');
  boxTitle2.textContent = 'Experiences';
  beigebox.appendChild(boxTitle2);

  const boxText2 = document.createElement('p');
  boxText2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae rerum nostrum quas ipsam corrupti nemo perferendis nam nesciunt eius doloribus?';
  beigebox.appendChild(boxText2);

  const boxButton2 = document.createElement('button');
  boxButton2.textContent = 'Make A Reservation';
  boxButton2.classList.add('btn', 'dark');
  beigebox.appendChild(boxButton2);
}

export default (renderHome);