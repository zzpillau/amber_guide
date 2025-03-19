import createElement from '../../helpers/createElement.js';
import createSection from '../../helpers/createSection.js';

import renderHeaderTitle from '../header/headerTitle.js';

// {/* <section class="hero">
// <div class="wrapper hero__wrapper"> */}

const renderHeroSection = () => {
  const heroSection = createSection('hero-section');
  heroSection.classList.add('hero');

  const title = renderHeaderTitle()


  const wrapper = createElement('div', ['wrapper', 'hero__wrapper'], {}, '', [title]);

  heroSection.append(wrapper);
};

export default renderHeroSection;
