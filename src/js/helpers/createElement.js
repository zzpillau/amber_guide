const createElement = (tagName, classes = [], attrs = {}, text = '', children = []) => {
  const element = document.createElement(tagName);

  classes.forEach((className) => element.classList.add(className));

  Object.entries(attrs).forEach(([attr, value]) => element.setAttribute(attr, value));

  element.textContent = text;

  children.forEach((child) => element.append(child))
  
  return element;
};

export default createElement;
