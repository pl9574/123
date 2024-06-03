const swiperTop = new Swiper('.top__swiper', {

    effect: 'fade',
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiperAbout = new Swiper(".about__slider", {
slidersPreView: 4,
spaceBetween: 20,
freeMode: true,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}
  });