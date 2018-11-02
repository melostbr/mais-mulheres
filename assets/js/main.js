$('.carousel').slick({
  dots: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  prevArrow: '<button>oi</button>',
  nextArrow: '<button>tchau</button>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }
  ]
});
