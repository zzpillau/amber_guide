import renderModalCard from './renderModalCard.js'

const modal = async () => {
  const cards = document.querySelectorAll('.card');

  console.log(cards);

  cards.forEach((card) => {
    card.addEventListener('click', async (e) => {
      console.log(e.currentTarget)
      
      const id = e.currentTarget.getAttribute('data-id');
      console.log(id)
      
      await renderModalCard(id)
    })
  })
}

export default modal;
