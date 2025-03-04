const makeHeader = () => {
  const body = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.classList.add('red')
  
  h1.textContent = 'Hello, Kaliningrad!!!';
  
  return body.append(h1);
}

export default makeHeader;
