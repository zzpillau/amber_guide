import createElement from '../../helpers/createElement.js';
import createSection from '../../helpers/createSection.js';
import fetchCardsData from '../../helpers/fetchCardsData.js';
import config from '../../../../config/config.js';
import cardsGenerator from './cards-generator.js';

const renderCardsSection = async() => {
  const cardsSection = createSection();
  cardsSection.classList.add('cards');
  

  const cardsData = await fetchCardsData(config.pathToJson);

  console.log(cardsData)
  console.log(config.pathToJson)

  const cards = cardsGenerator(cardsData);

  const wrapper = createElement('div', ['wrapper', 'cards__wrapper'], {}, '', cards);

  cardsSection.append(wrapper);
};

export default renderCardsSection;
