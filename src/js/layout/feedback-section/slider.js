const slides = [
  {
    content: '<div class="slide-content"><h3>Отзыв 1</h3><p>Текст отзыва...</p></div>',
  },
  {
    content: '<div class="slide-content"><h3>Отзыв 2</h3><p>Текст отзыва...</p></div>',
  },
  {
    content: '<div class="slide-content"><h3>Отзыв 3</h3><p>Текст отзыва...</p></div>',
  }
];

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
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
    slideElement.innerHTML = slide.content;
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
