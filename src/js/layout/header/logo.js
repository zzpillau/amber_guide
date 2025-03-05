import createElement from '../../helpers/createElement.js';

const renderLogo = () => {
  const a = createElement('a', ['logo'], { href: './index.html' });
  const img = createElement('img', ['logo-image'], { src: '../src/assets/img/logo.png', alt: 'Logo-image' });
  const span = createElement('span', ['action-small'], {}, 'DIMA ZHURILIN');

  const children = [img, span];

  children.forEach((child) => a.append(child));

  return a;
};

export default renderLogo;
