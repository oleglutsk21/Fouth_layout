$(function () {
  $(".header__btn").on("click", function () {
    $(".header__nav-menu").toggleClass("active");
  });

  $(".header__menu-item").on("click", function () {
    $(".header__nav-menu").removeClass("active");
  });

  $(".students-feedback__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: "linear",
    zIndex: 1,
  });

  $(".our-mentors__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    zIndex: 1,
  });

  let numberOfSlides = document.querySelectorAll(".site-development__item");

  if (numberOfSlides.length > 3) {
    $(".site-development__items").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      zIndex: 1,
      responsive: [{
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
  } else {
    $(".site-development__items").slick({
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0px',
      zIndex: 1,
      responsive: [{
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            centerPadding: '0px',
            centerMode: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            dots: true,
          },
        },
      ],
    });
  }
});