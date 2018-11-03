$('.carousel').slick({
  dots: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  prevArrow: '<button class="carousel__prev"></button>',
  nextArrow: '<button class="carousel__next"></button>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }
  ]
});
