import createElement from '../../helpers/createElement.js';

// wrapper.innerHTML = `
// <h3 class="slider-section-header">Отзывы</h3>
// <div class="slider-container" id="sliderContainer">
//   <!-- Слайды через JS -->
// </div>
// <div class="block-imgs wrapper">
//   <button class="arrow arrow-left button" id="prevButton">PREV</button>
//   <button class="arrow arrow-right button" id="nextButton">NEXT</button>
// </div>`

const renderFeedbackInners = () => {
  const h3 = {
    tag: 'h2',
    classes: ['slider-section-header', 'pb20'],
    text: 'Отзывы',
    render() { return createElement(this.tag, this.classes, {}, this.text); },
  };

  const slidesContainer = {
    tag: 'div',
    classes: ['slides-container'],
    attrs: {
      id: 'slides-container',
    },
    render() { return createElement(this.tag, this.classes); },
  };

  const prevButton = {
    tag: 'button',
    classes: ['slide-button'],
    text: '←',
    attrs: {
      id: 'prev-button',
    },
    render() { return createElement(this.tag, this.classes, this.attrs, this.text); },
  };

  const nextButton = {
    tag: 'button',
    classes: ['slide-button'],
    text: '→',
    attrs: {
      id: 'next-button',
    },
    render() { return createElement(this.tag, this.classes, this.attrs, this.text); },
  };

  const sliderСontrols = {
    tag: 'div',
    classes: ['slider-controls'],
    render() { return createElement(this.tag, this.classes, {}, '', [prevButton.render(), nextButton.render()]); },
  };

  return [h3.render(), slidesContainer.render(), sliderСontrols.render()];
};

export default renderFeedbackInners;
