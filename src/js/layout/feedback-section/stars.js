import createElement from '../../helpers/createElement.js'

// <span class="fa fa-star checked"></span>

const generateFiveStars = (count) => {
  const span = {
    tag: 'span',
    classes: ['fa', 'fa-star', 'checked'],
    render() {
      return createElement(this.tag, this.classes);
    }
  }

  const renderMultipleTimes = () => {
    return Array.from({ length: count }, () => span.render());
  };

  const div = {
    tag: 'div',
    classes: ['stars-container'],
    render() {
      return createElement(this.tag, this.classes, {}, '', renderMultipleTimes());
    }
  }


  return div.render()
}


export default generateFiveStars;