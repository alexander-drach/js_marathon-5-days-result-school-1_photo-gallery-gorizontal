function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  function clearActive() {
    for (const slide of slides) {
      slide.classList.remove('active');
    }
  }

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActive();
      slide.classList.add('active');
    })
  }
}

slidesPlugin(0);