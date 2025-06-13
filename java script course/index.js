let currentIndex = 0;
  function moveSlide(step) {
    const images = document.getElementById('carouselImages');
    const total = images.children.length;
    currentIndex = (currentIndex + step + total) % total;
    images.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  function showPopup(event) {
    event.preventDefault();
    document.getElementById('popup').classList.add('show');
    return false;
  }

  function closePopup() {
    document.getElementById('popup').classList.remove('show');
  }