import renderInitLayout from './layout/layout.js';
import renderHeader from './layout/header/header.js';
import renderHeroSection from './layout/hero-section/hero-section.js';
import renderAboutSection from './layout/about-section/about-section.js';
import renderCardsSection from './layout/cards-section/cards-section.js';
import onScrollHeader from './layout/header/scroll-header.js';
import renderTransportSection from './layout/transport-section/transport-section.js';
import renderFeedbackSection from './layout/feedback-section/feedback-section.js';
import initSlider from './layout/feedback-section/slider.js';
import renderFooter from './layout/footer/footer.js';
import modal from './layout/cards-section/modal/modal.js';

const runApp = () => {
  renderInitLayout();
  renderHeader();
  renderHeroSection();
  renderAboutSection();
  renderCardsSection();
  onScrollHeader();
  renderTransportSection();
  renderFeedbackSection();
  initSlider();
  renderFooter();

  setTimeout(() => {
    requestAnimationFrame(() => {
      modal();
    });
  }, 1000);

};

export default runApp;
