import renderInitLayout from './layout/layout.js';
import renderHeader from './layout/header/header.js';
import renderHeroSection from './layout/hero-section/hero-section.js';
import renderAboutSection from './layout/about-section/about-section.js';
import renderCardsSection from './layout/cards-section/cards-section.js';

const runApp = () => {
  renderInitLayout();
  renderHeader();
  renderHeroSection();
  renderAboutSection();
  renderCardsSection();
};

export default runApp;
