import generateSlideInners from "./generate-slide.js";

const reviews = [
  {
    "reviewId": 1,
    "slideId": 1,
    "name": "Александра",
    "review": "Отлично, превосходный сервис и вежливый персонал! Уровень обслуживания на высоте, все было сделано быстро, четко и с большим вниманием к деталям. Осталась довольна!"
  },
  {
    "reviewId": 2,
    "slideId": 1,
    "name": "Игорь",
    "review": "Быстро, удобно, качественно. Буду рекомендовать друзьям! Я приятно удивлен тем, насколько профессионально всё организовано, и готов делиться только положительными эмоциями!"
  },
  {
    "reviewId": 3,
    "slideId": 1,
    "name": "Ольга",
    "review": "Удивительно приятный опыт, всё прошло гладко. Меня порадовал персонал, их заботливое отношение и умение находить индивидуальный подход к каждому клиенту."
  },
  {
    "reviewId": 4,
    "slideId": 2,
    "name": "Дмитрий",
    "review": "Очень доволен результатом, мои ожидания полностью оправдались. Даже больше — я остался поражен высоким уровнем профессионализма и оперативностью выполнения работы!"
  },
  {
    "reviewId": 5,
    "slideId": 2,
    "name": "Анна",
    "review": "Замечательное обслуживание! Всё было на высшем уровне. Я очень рада, что обратилась именно сюда, ведь всё было сделано с большим вниманием и безупречной точностью."
  },
  {
    "reviewId": 6,
    "slideId": 2,
    "name": "Никита",
    "review": "Приятная атмосфера, профессиональный подход. Каждый шаг процесса вызывал доверие, и я был полностью уверен, что нахожусь в руках настоящих мастеров своего дела."
  },
  {
    "reviewId": 7,
    "slideId": 3,
    "name": "Екатерина",
    "review": "Супер! Всё было организовано идеально. Даже самые высокие ожидания были превзойдены, и я непременно вернусь снова."
  },
  {
    "reviewId": 8,
    "slideId": 3,
    "name": "Владимир",
    "review": 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda delectus odio ea ratione necessitatibus. Quod, eveniet temporibus! Incidunt quos, aperiam facilis, veritatis aliquam illo error accusantium quae non eveniet ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi esse distinctio reiciendis veniam modi aperiam voluptatum hic facere suscipit, fugiat quisquam consequuntur voluptatibus velit facilis neque eius voluptates aut.'
  },
  {
    "reviewId": 9,
    "slideId": 3,
    "name": "Мария",
    "review": "Услуга была выполнена быстро и с душой. Благодарю! Это был поистине незабываемый опыт, который оставил только позитивные впечатления."
  }
]


const slides =  Array.from({ length: 3 }, (_, index) => index + 1);

// Инициализация слайдера
const initSlider = () => {
  const container = document.querySelector('.slides-container');
  const prevBtn = document.querySelector('#prev-button');
  const nextBtn = document.querySelector('#next-button');

  // Добавляем проверку элементов
  if (!container || !prevBtn || !nextBtn) {
    console.error('Не найдены необходимые элементы слайдера!');
    return;
  }

  let currentSlide = 0;
  let isAnimating = false; // Флаг для блокировки анимации

  // Создаем слайды

 
  slides.forEach((slideCount, index) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add(
      'slide',
      index === 0 ? 'active' : null,
      'layout-row'
  );
    const reviewsForSlide = reviews.filter(({slideId}) => slideId === slideCount);

    const slideInners = reviewsForSlide.map(generateSlideInners);

    slideInners.forEach((feedback) => slideElement.append(feedback))
    container.append(slideElement);
  });

  // Функция плавного перехода
  const animateSlide = (newIndex) => {
    if (isAnimating) return;
    isAnimating = true;

    const allSlides = document.querySelectorAll('.slide');
    const current = allSlides[currentSlide];
    const next = allSlides[newIndex];

    // Анимация исчезновения
    current.classList.remove('active');

    setTimeout(() => {
      // Анимация появления
      next.classList.add('active');
      currentSlide = newIndex;
      updateControls();
      isAnimating = false;
    }, 300); // Должно совпадать с временем CSS-перехода
  };

  // Обновление состояния кнопок
  const updateControls = () => {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
  };

  // Обработчики кнопок
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) animateSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) animateSlide(currentSlide + 1);
  });

  // Инициализация
  updateControls();
};

export default initSlider;

// Запуск слайдера
