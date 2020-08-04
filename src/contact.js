
const renderContact = () => {
  const main = document.querySelector('#main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  main.appendChild(hero);

  const contact = document.createElement('div');
  hero.appendChild(contact);

  const leftContact = document.createElement('div');
  contact.appendChild(leftContact);


  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }


  const formContact = document.createElement('div');
  contact.appendChild(formContact);

  contact.classList = 'contact';
  leftContact.classList = 'left-contact';
  formContact.classList = 'form-contact';

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

  h2Form.textContent = 'Reach out here!';
  buttonForm.textContent = 'Send Now';

  formName.innerHTML = `<span>Name: </span>
          <input type="text">`;
  formEmail.innerHTML = ` <span>E-mail: </span>
          <input type="text">`;
  formText.innerHTML = `<span>Message: </span>
          <input type="text">`;

}

export default (renderContact);