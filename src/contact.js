
const renderContact = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero', 'reservations');
  main.appendChild(hero);

  const heroContactItems = document.createElement('div');
  heroContactItems.classList.add('hero-contact-items');
  hero.appendChild(heroContactItems);

  const contact = document.createElement('div');
  contact.classList = 'contact';
  heroContactItems.appendChild(contact);

  const leftContact = document.createElement('div');
  leftContact.classList = 'left-contact';
  contact.appendChild(leftContact);

  const h1Contact = document.createElement('h1');
  h1Contact.textContent = 'Locations';
  h1Contact.classList = 'left-title';
  leftContact.appendChild(h1Contact);

  const loContainer1 = document.createElement('div');
  loContainer1.classList = 'lo-container';
  leftContact.appendChild(loContainer1);

  const locTitle1 = document.createElement('h2');
  locTitle1.textContent = 'GRILLER EAST VILLAGE';
  loContainer1.appendChild(locTitle1);

  const locUpperText1 = document.createElement('p');
  locUpperText1.innerHTML = '406 E 9th Street @ 1st Ave<br>New York, NY 10009</a><br>EST. 2010<br>(917) 261 - 2858';
  loContainer1.appendChild(locUpperText1);

  const loContainer2 = document.createElement('div');
  loContainer2.classList = 'lo-container';
  leftContact.appendChild(loContainer2);

  const locTitle2 = document.createElement('h2');
  locTitle2.textContent = 'GRILLER HUDSON YARDS';
  loContainer2.appendChild(locTitle2);

  const locUpperText2 = document.createElement('p');
  locUpperText2.innerHTML = '331 10th Avenue<br>New York, NY 10001</a><br>EST. 2017<br>(212) 837 - 1416';
  loContainer2.appendChild(locUpperText2);

  const loContainer3 = document.createElement('div');
  loContainer3.classList = 'lo-container';
  leftContact.appendChild(loContainer3);

  const locTitle3 = document.createElement('h2');
  locTitle3.textContent = 'GRILLER SOHO';
  loContainer3.appendChild(locTitle3);

  const locUpperText3 = document.createElement('p');
  locUpperText3.innerHTML = '261 Hudson St<br>New York, NY 10013</a><br>EST. 2018<br>(646) 669 - 9339';
  loContainer3.appendChild(locUpperText3);

  // lEFT SIDE

  const formContact = document.createElement('div');
  contact.appendChild(formContact);
  formContact.classList = 'form-contact';

  const h2Form = document.createElement('h2');
  h2Form.textContent = 'Make a Reservation';
  formContact.appendChild(h2Form);

  const formName = document.createElement('div');
  formName.innerHTML = '<span>Name: </span><input type="text">';
  formContact.appendChild(formName);
  formName.classList = 'form-name';

  const formEmail = document.createElement('div');
  formEmail.innerHTML = '<span>E-mail: </span><input type="text">';
  formContact.appendChild(formEmail);
  formEmail.classList = 'form-email';

  const formPhone = document.createElement('div');
  formPhone.innerHTML = '<span>Phone: </span><input type="text">';
  formContact.appendChild(formPhone);
  formEmail.classList = 'form-phone';

  const formDate = document.createElement('div');
  formDate.innerHTML = '<span>Date: </span><input type="text">';
  formContact.appendChild(formDate);
  formDate.classList = 'form-date';

  const formParty = document.createElement('div');
  formParty.innerHTML = '<span>Members: </span><input type="text">';
  formContact.appendChild(formParty);
  formDate.classList = 'form-party';

  const formText = document.createElement('div');
  formText.innerHTML = '<span>Message: </span><input type="text">';
  formContact.appendChild(formText);
  formText.classList = 'form-text';

  const buttonForm = document.createElement('button');
  formContact.appendChild(buttonForm);
  buttonForm.textContent = 'Make Reservation';
};

export default (renderContact);