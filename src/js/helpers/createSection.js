import createElement from './createElement.js';

const createSection = () => {
  const main = document.querySelector('main');
  const section = createElement('section', ['section']);
  main.append(section);

  return section;
};

export default createSection;
