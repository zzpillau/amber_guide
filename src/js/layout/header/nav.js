import createElement from '../../helpers/createElement.js';

// { /* <nav class="header__navigation">
//   <ul class="navigation layout-row action-small">
//       <li><a href="./pages/gifts.html" class="navigation-tab">Gifts</a></li>
//       <li><a href="#about-section" class="navigation-tab">About</a></li>
//       <li><a href="#best-gifts-section" class="navigation-tab">Best</a></li>
//       <li><a href="#footer" class="navigation-tab">Contacts</a></li>
//   </ul>
// </nav> */ }

const renderNavigation = () => {
  const navTag = {
    tagName: 'nav',
    classes: ['header__navigation'],
  };

  const nav = createElement(navTag.tagName, navTag.classes);

  const ulTag = {
    tagName: 'ul',
    classes: ['navigation', 'layout-row', 'action-small'],
  };

  const ul = createElement(ulTag.tagName, ulTag.classes);

  const aTag = {
    tagName: 'a',
    classes: ['nav-link', 'underline-hover'],
  };

  const navTabs = [
    { tabName: 'О гиде', href: '#' },
    { tabName: 'Экскурсии', href: '#' },
    { tabName: 'Транспорт', href: '#' },
    { tabName: 'Отзывы', href: '#' },
  ];

  const aItems = navTabs.map(({ tabName, href }) => createElement(aTag.tagName, aTag.classes, { href }, tabName));

  const liTag = {
    tagName: 'li',
    classes: ['navigation-tab'],
  };

  const liItems = aItems.map((a) => createElement(liTag.tagName, liTag.classes, {}, '', [a]));

  liItems.forEach((li) => ul.append(li));

  nav.append(ul);

  return nav;
};

export default renderNavigation;
