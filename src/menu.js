const renderMenu = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  main.appendChild(hero);
}

export default (renderMenu);