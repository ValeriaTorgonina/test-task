document.addEventListener("DOMContentLoaded", function() {
    const clientsSlider = new Swiper ('.clients__slider', {
        slidesPerView: 4,
        spaceBetween: 25,
        speed: 500,
        loop: true,
    
        navigation: {
          nextEl: '#clients-next',
          prevEl: '#clients-prev',
        },
    });  
})
