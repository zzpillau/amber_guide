import createElement from '../../helpers/createElement.js';
import renderLogo from './logo.js';
import renderNavigation from './nav.js';
import renderNavPhone from './phone.js';
import renderHeaderTitle from './headerTitle.js'

const renderHeader = () => {
  const header = document.querySelector('.header');


  const wrapper = createElement('div', ['wrapper', 'header__wrapper']);

  const headerElements = [renderLogo(), renderNavigation(), renderNavPhone()];

  headerElements.forEach((el) => wrapper.append(el));

  header.append(wrapper);
};

export default renderHeader;
