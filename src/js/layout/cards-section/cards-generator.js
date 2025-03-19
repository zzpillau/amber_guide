import createCardElement from './card-1.js';

const cardsGenerator = (cardsData) => {
  const cardElements = cardsData
    .map((data) => createCardElement(data));

  return cardElements;
};

export default cardsGenerator;
