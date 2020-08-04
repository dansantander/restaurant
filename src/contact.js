
const renderContact = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  main.appendChild(hero);

  const contact = document.createElement('div');
  const leftContact = document.createElement('div');
  const formContact = document.createElement('div');

  hero.appendChild(contact);
  contact.appendChild(leftContact);
  contact.appendChild(formContact);

  const imgForm = document.createElement('img');
  const h2Form = document.createElement('h2');
  const formName = document.createElement('div');
  const formEmail = document.createElement('div');
  const formText = document.createElement('div');
  const buttonForm = document.createElement('button');

  leftContact.appendChild(imgForm);
  formContact.appendChild(h2Form);
  formContact.appendChild(formName);
  formContact.appendChild(formEmail);
  formContact.appendChild(formText);
  formContact.appendChild(buttonForm);

  formName.classList = 'form-name';
  formEmail.classList = 'form-email';
  formText.classList = 'form-text';


}

export default (renderContact);