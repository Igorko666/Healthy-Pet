var swiper = new Swiper(".block__services-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  });
  console.log(swiper);
  console.log(document.querySelector('.block__services-slider'));
  setTimeout(function(){
    swiper.init()
  },100)