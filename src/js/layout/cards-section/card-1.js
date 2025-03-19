import createElement from '../../helpers/createElement.js';
import buttonPrime from './button-prime.js';

const createCardElement = (cardData) => {
  const {
    id, title, description, time, imgPath, alt,
  } = cardData;

  const imgItem = {
    tag: 'img',
    classes: [],
    attrs: {
      src: imgPath,
      alt,
    },
    render() { return createElement(this.tag, this.classes, this.attrs); },
  };

  const img = imgItem.render();
  const imgDiv = createElement('div', ['img-container'], {}, '', [img]);

  const titleP = createElement('h3', ['card-title'], {}, title);
  const descP = createElement('p', ['card-desc'], {}, description);

  const contentDiv = createElement('div', ['card-text-content'], {}, '', [titleP, descP]);

  const timeP = createElement('p', ['card-time'], {}, time);

  const cardFooter = createElement('div', ['card-footer', 'layout-row'], {}, '', [timeP, buttonPrime()]);

  const textDiv = createElement('div', ['text-container'], {}, '', [contentDiv, cardFooter]);

  const root = createElement('div', ['card', 'layout-column'], { 'data-id': id }, '', [imgDiv, textDiv]);

  return root;
};

export default createCardElement;
