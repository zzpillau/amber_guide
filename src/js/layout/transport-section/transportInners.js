import createElement from "../../helpers/createElement.js";

const renderTransportInners = () => {
  const pCaption = {
    tag: 'p',
    classes: ['caption'],
    text: 'Транспорт'.toUpperCase(),
    render() { return createElement(this.tag, this.classes, {}, this.text); },
  };

  const pMedium = {
    tag: 'p',
    classes: ['action-large'],
    text: 'для вашего комфорта',
    render() { return createElement(this.tag, this.classes, {}, this.text); },
  };

  const pText = {
    tag: 'p',
    classes: [],
    text: ' В нашем распоряжении комфортабельный, просторный минивэн с климат контролем, бутилированная вода для всех участников, пледы, дождевики, бинокль, все это поможет сделать ваш отдых комфортным.👨‍👩‍👧‍👦В машине только вы и ваши близкие.',
    render() { return createElement(this.tag, this.classes, {}, this.text); },
  };

  const p1 = pCaption.render();
  const p2 = pMedium.render();
  const p3 = pText.render();

  const divContainer = createElement('div', ['layout-row'], {}, '', [
    createElement('div', ['text-content'], {}, '', [
      createElement('div', ['inner', 'min-container'], {}, '', [
        createElement('div', ['about-header', 'layout-column'], {}, '', [p1, p2]),
        p3,
      ]),
    ]),
    createElement('div', ['transport-background']),
    // blueBackground,
  ]);

  return divContainer;

}

export default renderTransportInners;
