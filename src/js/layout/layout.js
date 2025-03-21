const renderInitLayout = () => {
  const elements = ['header', 'main', 'footer'];

  const body = document.querySelector('body');

  elements.forEach((tagName) => {
    const element = document.createElement(tagName);
    element.classList.add(tagName);
    element.setAttribute('id', tagName)
    body.append(element);
  });
};

export default renderInitLayout;
