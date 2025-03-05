import renderInitLayout from './layout.js';
import renderHeader from './header/header.js';
import renderHeroSection from './hero-section/hero-section.js';
import renderAboutSection from './about-section/about-section.js';

const runApp = () => {
  renderInitLayout();
  renderHeader();
  renderHeroSection();
  renderAboutSection()
};

export default runApp;
