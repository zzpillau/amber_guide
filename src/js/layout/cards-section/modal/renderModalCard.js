import createOverlay from './createOverlay.js';
import fetchCardsData from '../../../helpers/fetchCardsData.js';
import config from '../../../../../config/config.js';
import renderExtendCard from './renderExtendCard.js'

const getCardDataById = async(id, path) => {
  console.log
  try {
    const cardData = await fetchCardsData(path);
    console.log('cardData', cardData)
    
    const card = cardData.find((item) => {
      const numId = Number(id);
      console.log('item', item)
      console.log('item.id', item.id, typeof(item.id))
      console.log('id', id, typeof(id))
      console.log('item.id === id', item.id === numId)


      return item.id === numId;
    });

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', card)

    if (!card) {
      console.error(`Карта с id ${id} не найдена.`);
      return null;
    }
    return card;
  } catch (error) {
    console.error('Ошибка при получении данных карт:', error);
    throw error;
  } 
}


const renderModalCard = async (id = null) => {

  try {
    const cardData = await getCardDataById(id, config.pathToJson)
    const newCard = renderExtendCard(cardData);



    const overlay = createOverlay();
    document.body.append(overlay);
    document.body.classList.add('open-modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.append(newCard)
    document.body.append(modalContainer);

    const closeButton = newCard.querySelector('.close-modal')

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeModal(overlay, modalContainer);
      });
    }
    
    overlay.addEventListener('click', () => {
      closeModal(overlay, modalContainer);
    });

    
    function closeModal(overlayElement, modalElement) {
      if (overlayElement && modalElement) {
        document.body.removeChild(overlayElement);
        document.body.removeChild(modalElement);
        document.body.classList.remove('open-modal');
      }
    }
  } catch (error) {
    console.error('Ошибка при получении данных карточки:', error);
  }

}

export default renderModalCard;


