import createElement from '../../helpers/createElement.js';
import createSection from '../../helpers/createSection.js';
import renderCardsInners from './grid-inners.js';

const renderCardsSection = async () => {
  const cardsSection = createSection('cards-section');
  cardsSection.classList.add('cards');

  const inners = await renderCardsInners();

  const wrapper = createElement('div', ['wrapper', 'cards__wrapper'], {}, '', [inners]);

  cardsSection.append(wrapper);
};

export default renderCardsSection;
