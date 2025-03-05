import createElement from '../helpers/createElement.js';
import createSection from '../helpers/createSection.js';
import renderAboutInners from './about-inners.js';

// <section class="hero">
//   <div class="wrapper hero__wrapper">

const renderAboutSection = () => {
  const aboutSection = createSection();
  aboutSection.classList.add('about');

  const inners = renderAboutInners()

  const wrapper = createElement('div', ['wrapper', 'about__wrapper'], {}, '', [inners]);

  aboutSection.append(wrapper);
};

export default renderAboutSection;
