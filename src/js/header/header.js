import createElement from '../helpers/createElement.js';
import renderLogo from './logo.js';
import renderNavigation from './nav.js';
import renderNavPhone from './phone.js';

const renderHeader = () => {
  const header = document.querySelector('.header');

  // header.classList.add('gradient')

  const wrapper = createElement('div', ['wrapper', 'header__wrapper']);

  const logo = renderLogo();

  const nav = renderNavigation();

  const phone = renderNavPhone();

  wrapper.append(logo);
  wrapper.append(nav);
  wrapper.append(phone);

  header.append(wrapper);
};

export default renderHeader;
