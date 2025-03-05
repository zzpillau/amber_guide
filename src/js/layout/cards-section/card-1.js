import createElement from '../../helpers/createElement.js';

const createCardElement = (cardData) => {
  const {
    id, title, decription, time, imgPath, alt,
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

  const titleP = createElement('p', ['card-title'], {}, title);
  const descP = createElement('p', ['card-desc'], {}, decription);

  const contentDiv = createElement('div', ['text-content'], {}, '', [titleP, descP]);
  const timeP = createElement('p', ['card-time'], {}, time);
  const textDiv = createElement('div', ['text-container'], {}, '', [contentDiv, timeP]);

  const root = createElement('div', ['card', 'layout-column'], { id }, '', [imgDiv, textDiv]);

  console.log('root', root)

  return root;
};

export default createCardElement;
