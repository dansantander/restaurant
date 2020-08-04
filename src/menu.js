const renderMenu = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  main.appendChild(hero);

  const content = document.createElement('div');
  content.classList = 'content';
  hero.appendChild(content);

  const sectionTitle = document.createElement('h1');
  sectionTitle.textContent = 'Browse Our Menu';
  sectionTitle.classList = 'left-title';
  content.appendChild(sectionTitle);

  const menuContainer = document.createElement('div');
  menuContainer.classList = 'menu-container';
  content.appendChild(menuContainer);

  const box1 = document.createElement('div');
  box1.classList.add('box');
  menuContainer.appendChild(box1);

  const boxTitle1 = document.createElement('h2');
  boxTitle1.textContent = 'STARTERS';
  box1.appendChild(boxTitle1);

  const list = document.createElement('ul');
  list.classList.add('list');
  box1.appendChild(list);
  
  const li1 = document.createElement('li');
  li1.classList.add('list-item');
  list.appendChild(li1);

  const li2 = document.createElement('li');
  li2.classList.add('list-item');
  list.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList.add('list-item');
  list.appendChild(li3);

  const li4 = document.createElement('li');
  li4.classList.add('list-item');
  list.appendChild(li4);

  const listItem1 = document.createElement('a');
  listItem1.textContent = 'BOWL OF LOCAL PICKLES';
  li1.appendChild(listItem1);

  const listItem2 = document.createElement('a');
  listItem2.textContent = 'FRIED PICKLES';
  li2.appendChild(listItem2);

  const listItem3 = document.createElement('a');
  listItem3.textContent = 'SHISHITO PEPPERS';
  li3.appendChild(listItem3);

  const listItem4 = document.createElement('a');
  listItem4.textContent = 'LOCAL BEER SAUSAGE';
  li4.appendChild(listItem4);









}

export default (renderMenu);