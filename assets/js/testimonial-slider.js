// assets/js/testimonial-slider.js
import Swiper from 'swiper/bundle';

export function initializeTestimonialSlider() {
  const testimonialSwiperEl = document.querySelector('.testimonial-swiper');
  if (testimonialSwiperEl) {
    new Swiper(testimonialSwiperEl, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }
}