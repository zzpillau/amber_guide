
import createElement from '../../helpers/createElement.js';
import generateFiveStars from './stars.js';

const generateSlideInners = (slideData) => {
  const { name, review } = slideData;

  const starsElement = generateFiveStars(5);

  const titleElement = {
    tag: 'h3',
    classes: ['slide-title'],
    text: name,
    render() {
      return createElement(this.tag, this.classes, {}, this.text)
    }
  };

  const titleContainer = {
    tag: 'div',
    classes: ['title-container', 'layout-row'],
    children: [starsElement, titleElement.render()],
    render() {
      return createElement(this.tag, this.classes, {}, '', this.children)
    }
  }

  const textElement = {
    tag: 'p',
    classes: ['slide-text'],   
    text: review,
    render() {
      return createElement(this.tag, this.classes, {}, this.text)
    }
  }

  const div = {
    tag: 'div',
    classes: ['layout-column', 'min-container', 'review-block'],
    render() {
      return createElement(this.tag, this.classes, {}, '', [titleContainer.render(), textElement.render()])
    }
  };

  return div.render()
}

export default generateSlideInners;