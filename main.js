let swiperSlide = new Swiper('.swiper-container',{
    speed: 10000,
    loop: true,
    slidesPerView: 1,
    loopAditionalSlides: 4,
    spaceBetween: 32,
    centeredSlides: true,
    allowTouchMove: true,
    pagination:{
        el:'.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay:{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false,
    }
});
