const renderInitLayout = () => {
  const elements = ['header', 'main', 'footer'];

  const body = document.querySelector('body');

  elements.forEach((tagName) => {
    const element = document.createElement(tagName);
    element.classList.add(tagName);
    body.append(element);
  });
};

export default renderInitLayout;

// const renderLayout = () => {
//   const body = document.querySelector('body');

//   const container = document.createElement('div');
//   container.classList.add('container')

//   const h1 = document.createElement('h1');
//   h1.classList.add('red')
//   h1.textContent = 'Hello, Kaliningrad!!!';

//   const pRegular = document.createElement('p');
//   pRegular.classList.add('regular')
//   pRegular.textContent = 'Sand, wind & see';

//   const pBold = document.createElement('p');
//   pBold.classList.add('bold')
//   const text = 'open your heart'.toLocaleUpperCase()
//   pBold.textContent = text;

//   container.append(h1)
//   container.append(pRegular);
//   container.append(pBold);

//   return body.append(container);
// }
