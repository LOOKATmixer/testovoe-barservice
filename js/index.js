$(window).on('resize', function () {
  if ($(window).width() > 767) $('.slider').remove('.slider__item-mobile');
});

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.header__phone,.header__info').removeClass('active-phone');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.header__phone').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.header__phone,.header__info').toggleClass('active-phone');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    centerMode: true,
    variableWidth: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: false,
          centerMode: false,
          variableWidth: false,
          rows: 2,
        },
      },
    ],
  });
});
