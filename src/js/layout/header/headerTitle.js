import createElement from "../../helpers/createElement.js";

const renderHeaderTitle = () => {
  const text = 'Экскурсии по Калининграду';
  const extra = 'и области';
  const title = createElement('h1', ['header-title'], {}, text)
  const extraText = createElement('h2', ['extra-text'], {}, extra)

  const titleContainer = createElement('div', ['title-hero-container', 'layout-column'], {}, '', [title, extraText]);

  return titleContainer;
}

export default renderHeaderTitle;