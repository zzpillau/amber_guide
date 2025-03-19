const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
   
  return overlay;
}

export default createOverlay;