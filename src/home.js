
const renderHome = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  main.appendChild(hero);

  const heroItems = document.createElement('div');
  heroItems.classList.add('heroitems');
  hero.appendChild(heroItems);

  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('items-container');
  heroItems.appendChild(itemsContainer);


  const leftItems = document.createElement('div');
  leftItems.classList.add('left-items');
  itemsContainer.appendChild(leftItems);

  const bigText1 = document.createElement('h1');
  bigText1.classList.add('herotext','red');
  bigText1.innerHTML = `May you always <br> be surrounded`;
  leftItems.appendChild(bigText1);

  const bigText2 = document.createElement('h1');
  bigText2.classList.add('herotext','white');
  bigText2.innerHTML = `by good friends<br>and great bbq`;
  leftItems.appendChild(bigText2);

  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Order Online';
  leftItems.appendChild(button);

  const rightItems = document.createElement('div');
  rightItems.classList.add('right-items');
  itemsContainer.appendChild(rightItems);
  
}

export default (renderHome);