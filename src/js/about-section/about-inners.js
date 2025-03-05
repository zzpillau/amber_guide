import createElement from '../helpers/createElement.js';

// <div class="layout-row">
//   <div class="text-content">
//     <div class="inner min-container">
//         <p class="caption">About</p>
//         <h2>Unleash your inner superhero!</h2>
//         <p>This New Year marks the beginning of your journey to inner harmony and new strengths. We offer unique gifts that will help you improve your life.</p>
//     </div>
//  </div>
//  <div class="about-background"></div>
// </div>

const renderAboutInners = () => {

  const pCaption = {
    tag: 'p',
    classes: ['caption'],
    text: 'Лучший гид'.toLocaleUpperCase(),
    render() {return createElement(this.tag, this.classes, {}, this.text)}
  }

  const pMedium = {
    tag: 'p',
    classes: ['action-large'],
    text: 'по мнению моих клиентов',
    render() {return createElement(this.tag, this.classes, {}, this.text)}
  }

  const pText = {
    tag: 'p',
    classes: [],
    text: '🙋Здpaвcтвуйте, дорoгиe любители путешествий, мeня зовут Дмитpий и я коpeнной калининградeц и экcкуpcoвoд c дипломом, аттecтaцией и пpавoм работы🎓.\nЯ работаю для тех, кто ценит качеcтвeнные и по настоящему увлекательные экcкуpcии.\n\nВозможно составление ИНДИВИДУАЛЬНОГО ТУРА по Вашим пожеланиям 👍🏻',
    render() {return createElement(this.tag, this.classes, {}, this.text)}
  }

  const p1 = pCaption.render();
  const p2 = pMedium.render();
  const p3 = pText.render();


  // const blueBackgroundItem = {
  //   tag: 'img',
  //   classes: ['blue-back'],
  //   attrs: {
  //     src: '../../src/assets/img/ellipse-blue.png',
  //     // src: '../../src/assets/img/portrait-about.jpg',

  //     alt: '',
  //   },
  //   render() {return createElement(this.tag, this.classes, this.attrs)},
  // }

  // const blueBackground = blueBackgroundItem.render();

  const divContainer = createElement('div', ['layout-row'], {}, '', [
    createElement('div', ['about-background']),
    createElement('div', ['text-content'], {}, '', [
      createElement('div', ['inner', 'min-container'], {}, '', [
        createElement('div', ['about-header', 'layout-column'], {}, '', [p1, p2]),
        p3
      ]),
    ]),
    // blueBackground,
  ])

  return divContainer;
}

export default renderAboutInners;
