const renderHome = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  main.appendChild(hero);

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