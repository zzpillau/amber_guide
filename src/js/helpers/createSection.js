import createElement from './createElement.js';

const createSection = (id) => {
  const main = document.querySelector('main');
  const section = createElement('section', ['section']);
  section.setAttribute('id', id);
  main.append(section);

  return section;
};

export default createSection;
