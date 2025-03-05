import createElement from '../helpers/createElement.js';
import createSection from '../helpers/createSection.js';

// {/* <section class="hero">
// <div class="wrapper hero__wrapper"> */}

const renderHeroSection = () => {
  const heroSection = createSection();
  heroSection.classList.add('hero');

  const wrapper = createElement('div', ['wrapper', 'hero__wrapper']);

  heroSection.append(wrapper);
};

export default renderHeroSection;
