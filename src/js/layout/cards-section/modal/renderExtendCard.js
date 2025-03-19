import createElement from "../../../helpers/createElement.js";

function addCloseButton(card) {
  const closeButtonTemplate = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

  const button = document.createElement('button');
  button.innerHTML = closeButtonTemplate;
  button.classList.add('close-modal');
  button.setAttribute('aria-label', 'Закрыть модальное окно');

  card.append(button);
}

const renderNewCard = (cardData) => {
  const { id, title, description } = cardData;

  console.log(cardData);

  

  const card = createElement('div', ['extend-card'], {'data-id': id}, '', [
    createElement('h3', ['ext-card-title'], {}, title),
    createElement('p', ['ext-card-desc'], {}, description),
  ]);

  addCloseButton(card);


  console.log('extend-card', card)

  return card;

}

export default renderNewCard;