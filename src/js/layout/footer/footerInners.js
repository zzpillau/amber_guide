import createElement from '../../helpers/createElement.js';
import renderLogo from '../header/logo.js';

const renderFooterInners = () => {
  const container = createElement('div', ['footer-content', 'layout-column']);

  const logo = renderLogo();

  const socials = [
    {name: 'telegram', call: 'https://t.me/username', text: 'Написать в Telegram'},
    {name: 'viber', call: 'viber://chat?number=%2B1234567890', text: 'Написать в Viber'},
    {name: 'whatsapp', call: 'https://wa.me/1234567890?text=Привет!', text: 'Написать в WhatsApp'},
    {name: 'phone', call: 'tel:+1234567890', text: 'Позвонить'},
  ];


  const socialElements = socials.map((social) => {
    console.log(social)
    const {name, call, text} = social;
    return createElement('div', ['contact-links', 'action-medium'], {}, '', [
      createElement('a', ['social-link', `${name}-link`], {href: call, target: '_blank'}, text, [
        createElement('img', ['social-icon', `${name}-icon`], {src: `../src/assets/img/${name}.png`})
      ])
  ])
})

  const innerContainer = createElement('div', ['grid'], {}, '', socialElements);
  
  container.append(logo);
  container.append(innerContainer);

  return container;


}

export default renderFooterInners;
