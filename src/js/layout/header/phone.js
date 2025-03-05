import createElement from '../../helpers/createElement.js';

// { /* <div class="nav-pnone layout-row">
//   <img src="../src/assets/img/logo.png" alt="" />
//   <a
//   title="Позвонить по номеру +7 952 798-55-87"
//   aria-label="Позвонить по номеру +7 (952) 798-55-87"
//   href="tel:+79527985587"
//   >
//   +7 (952) 798-55-87
//   </a>
// </div> */ }

const renderNavPhone = () => {
  const divTag = {
    tagName: 'div',
    classes: ['nav-pnone', 'layout-row'],
  };

  const div = createElement(divTag.tagName, divTag.classes);

  const imgTag = {
    tagName: 'img',
    classes: ['nav-pnone', 'layout-row'],
    attrs: {
      src: '../src/assets/img/phone-icon.png',
      alt: '',
    },
  };

  const img = createElement(imgTag.tagName, imgTag.classes, imgTag.attrs);

  const aTag = {
    tagName: 'a',
    classes: ['phone-link', 'action-medium'],
    attrs: {
      title: 'Позвонить',
      'aria-label': 'Позвонить по номеру +7 (952) 798-55-87',
      href: 'tel:+70000000',
    },
    text: '+7 (952) 798-55-87',
  };

  const a = createElement(aTag.tagName, aTag.classes, aTag.attrs, aTag.text);

  const children = [img, a];

  children.forEach((child) => {
    div.append(child);
  });

  return div;
};

export default renderNavPhone;
