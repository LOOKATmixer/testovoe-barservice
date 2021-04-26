$(document).ready(function () {
  $(window).resize(function(){
      $('.slider').slick('refresh');
  })
  
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
  });
  
  $('.desktop-slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    //autoplay: false,
    //autoplaySpeed: 1500,
    draggable: false,
    centerMode: true,
    variableWidth: true,
    rows: 1,
  });
  
  $('.mobile-slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    //autoplay: false,
    //autoplaySpeed: 1500,
    draggable: false,
    autoplay: false,
    centerMode: false,
    variableWidth: false,
    rows: 2,
  });
});
