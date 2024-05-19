document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slideTrack = document.querySelector('.slider-container-vinay .slide-track');
    const slides = document.querySelectorAll('.slider-container-vinay .slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
  
    const updateSlidePosition = () => {
      const offset = -currentIndex * slideWidth;
      slideTrack.style.transform = `translateX(${offset}px)`;
    };
  
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    };
  
    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    };
  
    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 2000);
    };
  
    document.querySelector('.slider-container-vinay .next').addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  
    document.querySelector('.slider-container-vinay .prev').addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  
    // Auto slide every 2 seconds
    let autoSlideInterval = setInterval(nextSlide, 2000);
  
    // Initialize slide position
    updateSlidePosition();
  });
  