const renderMenu = () => {
  const main = document.querySelector("#main");

  const hero = document.createElement("div");
  hero.classList.add("hero-menu");
  main.appendChild(hero);

  const heroitems = document.createElement("div");
  heroitems.classList.add("hero-menu-items");
  hero.appendChild(heroitems);

  const content = document.createElement("div");
  content.classList = "content";
  heroitems.appendChild(content);

  const sectionTitle = document.createElement("h1");
  sectionTitle.textContent = "Browse Our Menu";
  sectionTitle.classList = "section-title";
  content.appendChild(sectionTitle);

  const menuContainer = document.createElement("div");
  menuContainer.classList = "menu-container";
  content.appendChild(menuContainer);

  const bigBox1 = document.createElement("div");
  bigBox1.classList.add("bigbox");
  menuContainer.appendChild(bigBox1);

  const box1 = document.createElement("div");
  box1.classList.add("box");
  bigBox1.appendChild(box1);

  const boxTitle1 = document.createElement("h2");
  boxTitle1.textContent = "STARTERS";
  box1.appendChild(boxTitle1);

  const list = document.createElement("ul");
  list.classList.add("list");
  box1.appendChild(list);

  const li1 = document.createElement("li");
  li1.classList.add("list-item");
  list.appendChild(li1);

  const li2 = document.createElement("li");
  li2.classList.add("list-item");
  list.appendChild(li2);

  const li3 = document.createElement("li");
  li3.classList.add("list-item");
  list.appendChild(li3);

  const li4 = document.createElement("li");
  li4.classList.add("list-item");
  list.appendChild(li4);

  const listItem1 = document.createElement("h3");
  listItem1.textContent = "Bowl of Local Pickles";
  li1.appendChild(listItem1);

  const listItem2 = document.createElement("h3");
  listItem2.textContent = "Fried Pickles";
  li2.appendChild(listItem2);

  const listItem3 = document.createElement("h3");
  listItem3.textContent = "Shishito Peppers";
  li3.appendChild(listItem3);

  const listItem4 = document.createElement("h3");
  listItem4.textContent = "Local Beer Sausage";
  li4.appendChild(listItem4);

  //SALADS

  const box2 = document.createElement("div");
  box2.classList.add("box");
  bigBox1.appendChild(box2);

  const boxTitle2 = document.createElement("h2");
  boxTitle2.textContent = "SALADS";
  box2.appendChild(boxTitle2);

  //SALAD 1

  const littlebox1 = document.createElement("div");
  littlebox1.classList.add("box");
  box2.appendChild(littlebox1);

  const list2Title1 = document.createElement("h3");
  list2Title1.textContent = "HOUSE SALAD";
  littlebox1.appendChild(list2Title1);

  const list2Text1 = document.createElement("p");
  list2Text1.textContent =
    "iceberg lettuce, house-made blue cheese dressing, applewood smoked bacon, croutons";
  littlebox1.appendChild(list2Text1);

  //SALAD 2

  const littlebox2 = document.createElement("div");
  littlebox2.classList.add("box");
  box2.appendChild(littlebox2);

  const list2Title2 = document.createElement("h3");
  list2Title2.textContent = "COBB SALAD";
  littlebox2.appendChild(list2Title2);

  const list2Text2 = document.createElement("p");
  list2Text2.textContent =
    "iceberg lettuce, blue cheese, avocado, tomato, crispy applewood smoked bacon, hard-boiled egg wedges, house-made balsamic vinaigrette";
  littlebox2.appendChild(list2Text2);

  //SALAD 3

  const littlebox3 = document.createElement("div");
  littlebox3.classList.add("box");
  box2.appendChild(littlebox3);

  const list2Title3 = document.createElement("h3");
  list2Title3.textContent = "KALE SALAD";
  littlebox3.appendChild(list2Title3);

  const list2Text3 = document.createElement("p");
  list2Text3.textContent =
    "kale, golded raisins, shallots, parmesan cheese, lemon dressing, croutons";
  littlebox3.appendChild(list2Text3);

  //STEAKS

  const bigBoxRight1 = document.createElement("div");
  bigBoxRight1.classList.add("bigbox");
  menuContainer.appendChild(bigBoxRight1);

  const boxRight1 = document.createElement("div");
  boxRight1.classList.add("box");
  bigBoxRight1.appendChild(boxRight1);

  const boxRTitle1 = document.createElement("h2");
  boxRTitle1.textContent = "STEAKS";
  boxRight1.appendChild(boxRTitle1);

  //STEAK 1

  const littleBoxRight1 = document.createElement("div");
  littleBoxRight1.classList.add("box");
  boxRight1.appendChild(littleBoxRight1);

  const listRTitle1 = document.createElement("h3");
  listRTitle1.textContent = "Caribbean Ribeye";
  littleBoxRight1.appendChild(listRTitle1);

  const listRText1 = document.createElement("p");
  listRText1.textContent =
    "12-ounce Certified Angus Beef® ribeye marinated in soy, pineapple, garlic & ginger";
  littleBoxRight1.appendChild(listRText1);

  //STEAK 2

  const littleBoxRight2 = document.createElement("div");
  littleBoxRight2.classList.add("box");
  boxRight1.appendChild(littleBoxRight2);

  const listRTitle2 = document.createElement("h3");
  listRTitle2.textContent = "New York Strip";
  littleBoxRight2.appendChild(listRTitle2);

  const listRText2 = document.createElement("p");
  listRText2.textContent =
    "12-ounce Certified Angus Beef®, grilled served with Worcestershire butter";
  littleBoxRight2.appendChild(listRText2);

  //STEAK 3

  const littleBoxRight3 = document.createElement("div");
  littleBoxRight3.classList.add("box");
  boxRight1.appendChild(littleBoxRight3);

  const listRTitle3 = document.createElement("h3");
  listRTitle3.textContent = "Tenderloin Steak Skewers";
  littleBoxRight3.appendChild(listRTitle3);

  const listRText3 = document.createElement("p");
  listRText3.textContent =
    "Four skewers of beef tenderloin marinated in soy, ginger, garlic &amp; pineapple. Served with BBQ sauce";
  littleBoxRight3.appendChild(listRText3);

  //STEAK 4

  const littleBoxRight4 = document.createElement("div");
  littleBoxRight4.classList.add("box");
  boxRight1.appendChild(littleBoxRight4);

  const listRTitle4 = document.createElement("h3");
  listRTitle4.textContent = "Tenderloin Steak Skewers";
  littleBoxRight4.appendChild(listRTitle4);

  const listRText4 = document.createElement("p");
  listRText4.textContent =
    "Four skewers of beef tenderloin marinated in soy, ginger, garlic &amp; pineapple. Served with BBQ sauce";
  littleBoxRight4.appendChild(listRText4);


};

export default renderMenu;
