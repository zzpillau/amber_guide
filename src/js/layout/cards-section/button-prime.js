import createElement from '../../helpers/createElement.js';

const buttonPrime = () => createElement(
  'button',
  ['button'],
  { type: 'button', role: 'button', 'aria-label': 'Заказать' },
  'Заказать',
);

export default buttonPrime;
