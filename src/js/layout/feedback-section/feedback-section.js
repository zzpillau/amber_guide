import createElement from '../../helpers/createElement.js';
import createSection from '../../helpers/createSection.js';
import renderFeedbackInners from './feedback-html.js'

import initSlider from './slider.js';
// {/* <section class="hero">
// <div class="wrapper hero__wrapper"> */}

const renderFeedbackSection = () => {
  const feedbackSection = createSection('feedback-section');
  feedbackSection.classList.add('feedback');

  const wrapper = createElement('div', ['wrapper', 'feedback__wrapper', 'slider'], {}, '', renderFeedbackInners());

  // wrapper.innerHTML = `
  //   <h3 class="slider-section-header">Отзывы</h3>
  //     <div class="slider-container" id="sliderContainer">
  //     <!-- Слайды через JS -->
  //     </div>
  //    <div class="block-imgs wrapper">
  //      <button class="arrow arrow-left button" id="prevButton">PREV</button>
  //      <button class="arrow arrow-right button" id="nextButton">NEXT</button>
  //    </div>`


  feedbackSection.append(wrapper);

};

export default renderFeedbackSection;
