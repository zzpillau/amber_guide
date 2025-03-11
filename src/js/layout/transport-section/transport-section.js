import createElement from '../../helpers/createElement.js';
import createSection from '../../helpers/createSection.js';
import renderTransportInners from './transportInners.js';

const renderTransportSection = () => {
  const transportSection = createSection('transport-section');
  transportSection.classList.add('transport');

  const inners = renderTransportInners();

  const wrapper = createElement('div', ['wrapper', 'transport__wrapper'], {}, '', [inners]);

  transportSection.append(wrapper);
};

export default renderTransportSection;
