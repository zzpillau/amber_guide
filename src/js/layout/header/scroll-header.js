const onScrollHeader = () => {
  const header = document.querySelector('.header');

  let isFiftyVhLogged = false;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const halfViewportHeight = viewportHeight / 2;


    if (!isFiftyVhLogged && Math.abs(scrolled - halfViewportHeight) < 5) {
      console.log('Scrolled 50vh');
      isFiftyVhLogged = true;
    }
  })
}



export default onScrollHeader;