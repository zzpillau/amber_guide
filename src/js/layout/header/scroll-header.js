const onScrollHeader = () => {
  const header = document.querySelector('.header');
  const headerText = document.querySelectorAll('.header *');
  const bars = document.querySelectorAll('.bar');
  const popup = document.querySelector('.popup');

  const whiteColor = 'rgba(255, 255, 255, 1)';
  const targetColor = 'rgba(24, 28, 41, 1)';
  const textOffset = 0.3;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight / 2;

    // Управление классом для фона
    header.classList.toggle('scrolled', scrollY > vh);

    // Прогресс для фона (0-1)
    const bgProgress = Math.min(scrollY / vh, 1);

    // расчёт для текста
    const textStartPoint = vh * textOffset;
    const textProgress = Math.min(Math.max((scrollY - textStartPoint) / (vh - textStartPoint), 0), 1);

    // Применение стилей
    header.style.backgroundColor = `rgba(255, 255, 255, ${bgProgress})`;

    const textColor = scrollY <= textStartPoint
      ? whiteColor
      : interpolateColor(whiteColor, targetColor, textProgress);

    // Логика цвета текста
    header.style.color = textColor;
    headerText.forEach((element) => element.style.color = textColor);

    // Логика цвета баров
    if (popup.classList.contains('open')) {
      bars.forEach((bar) => {
        bar.style.backgroundColor = whiteColor; // Белый цвет при открытом попапе
      });
    } else {
      bars.forEach((bar) => bar.style.backgroundColor = textColor); // Цвет зависит от прокрутки
    }
  });

  // Событие для попапа
  popup.addEventListener('transitionend', () => {
    if (popup.classList.contains('open')) {
      bars.forEach((bar) => {
        bar.style.backgroundColor = whiteColor; // Всегда белый при открытом попапе
      });
    }
  });
};

// Функция для интерполяции цвета
const interpolateColor = (color1, color2, factor) => {
  const c1 = color1.match(/\d+/g).map(Number); // Разбираем цвет 1
  const c2 = color2.match(/\d+/g).map(Number); // Разбираем цвет 2
  const result = c1.map((channel, index) => Math.round(channel + factor * (c2[index] - channel))); // Интерполяция
  return `rgba(${result.join(', ')})`; // Возвращаем цвет в формате "rgba(R, G, B, A)"
};


export default onScrollHeader;
