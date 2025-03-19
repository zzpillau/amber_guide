import createElement from '../../helpers/createElement.js';
import renderFooterInners from './footerInners.js';

const renderFooter = () => {

  const footerElement = document.querySelector('.footer');


  const inners = renderFooterInners();


  footerElement.innerHTML = `
        <div class="footer-wave">
            <!-- Волна -->


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#39a0f5" fill-opacity="1" d="M0,160C480,0,960,320,1440,160L1440,320L0,320Z"></path>
</svg>

</div>`

  const wrapper = createElement('div', ['wrapper', 'footer__wrapper'], {}, '', [inners]);

  footerElement.append(wrapper);
};

export default renderFooter;
