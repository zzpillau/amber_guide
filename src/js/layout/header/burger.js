import createElement from "../../helpers/createElement.js";

const addBurgerHTML = () => {
  const burgerTemplate = (
    `<div class="burger-menu">
          <div class="bars layout-column">
              <span class="bar top-line"></span>
              <span class="bar bottom-line"></span>
          </div>
      </div>`);

  const popupTemplate = `<div class="popup" id="popup"></div>`;

    const burgerContainer = createElement('div', ['burger-container']);
    burgerContainer.innerHTML = burgerTemplate;

    const popupContainer = createElement('div', ['popup'], {id: 'popup'})

  const header = document.querySelector('.header');
  header.append(burgerContainer, popupContainer);

  return header;
}

const buildBurgerMenu = () => {


  addBurgerHTML();


  const burger = document.querySelector('.burger-menu');
  const popup = document.querySelector('.popup');
  const body = document.body;
  const menu = document.querySelector('.navigation').cloneNode(1);
  const activeNavTab = menu.querySelector('.nav-active');

  const renderPopup = () => {
    popup.append(menu);
  }
  
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('noscroll');
    menu.classList.add('action-large');
    menu.classList.remove('action-small');
    if (activeNavTab) {
      activeNavTab.classList.remove('nav-active');
    }
    renderPopup();
  });
    
  const links = Array.from(menu.children);

  links.forEach((link) => {
    link.addEventListener('click', () => {
      popup.classList.remove('open');
      burger.classList.remove('active');
      body.classList.remove('noscroll');
      if (activeNavTab) {
        activeNavTab.classList.add('nav-active');
      }
    });
  });
};


export default buildBurgerMenu;