import createElement from '../../helpers/createElement.js';
import fetchCardsData from '../../helpers/fetchCardsData.js';
import config from '../../../../config/config.js';
import cardsGenerator from './cards-generator.js';

const renderCardsInners = async () => {
  const cardsData = await fetchCardsData(config.pathToJson);

  const cards = cardsGenerator(cardsData);

  // const cards

  const h2 = {
    tag: 'h2',
    classes: ['cards-section-title'],
    text: 'Экскурсии круглый год',
    render() { return createElement(this.tag, this.classes, {}, this.text); },
  };

  const gridWrapper = {
    tag: 'div',
    classes: ['grid-wrapper', 'grid'],
    children: cards,
    render() { return createElement(this.tag, this.classes, {}, '', this.children); },
  };

  const children = [h2.render(), gridWrapper.render()];

  const root = createElement('div', ['cards-container', 'layout-column'], {}, '', children);

  return root;
};

export default renderCardsInners;
