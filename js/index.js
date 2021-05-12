$(function () {
  //плавная прокрутка якоря
  $('body').on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body')
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $(window).resize(function () {
    if ($(window).width() <= 1023) {
      $('.vision__classic').hide();
      $('.vision__gallery').show();
    }
    if ($(window).width() <= 767) {
      $('.vision__classic').hide();
      $('.vision__gallery').hide();
    }
    $('.slider').slick('refresh');
  });

  $(document).on('click', '.header__burger', function () {
    $('.header__burger,.header__menu').toggleClass('active');
  });

  $(document).on('click', '.filter2__icon', function () {
    $('.content__menu_checkboxes' + '.burger').css({ display: 'block' });
    $('.content__menu_checkboxes' + '.burger').addClass(
      'content__menu_checkboxes-mobile'
    );
    $('body').addClass('lock');
  });

  $(document).on('click', '.link-burger-mobile-j', function () {
    $('.content__menu_checkboxes' + '.burger').css({ display: 'none' });
    $('.content__menu_checkboxes' + '.burger').removeClass(
      'content__menu_checkboxes-mobile'
    );
    $('body').removeClass('lock');
  });

  //слайдеры
  if ($('.main__desktop-slider').length) {
    $('.main__desktop-slider').slick({
      adaptiveHeight: true,
      slidesToShow: 3,
      //autoplay: false,
      //autoplaySpeed: 1500,
      draggable: false,
      centerMode: true,
      variableWidth: true,
      rows: 1,
    });
  }

  if ($('.main__mobile-slider').length) {
    $('.main__mobile-slider').slick({
      adaptiveHeight: true,
      slidesToShow: 3,
      //autoplay: false,
      //autoplaySpeed: 1500,
      draggable: true,
      autoplay: false,
      centerMode: false,
      variableWidth: false,
      infinite: true,
      rows: 1,
    });
  }

  if ($('.service__slider').length) {
    $('.service__slider').slick({
      arrows: true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            infinite: true,
            centerMode: true,
            variableWidth: true,
          },
        },
      ],
    });
  }

  if ($('.about__mobile-slider').length) {
    $('.about__mobile-slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      infinite: false,
      //autoplay: false,
      //autoplaySpeed: 1500,
      draggable: false,
      centerMode: true,
      variableWidth: false,
      fade: true,
    });
  }

  //слайдеры аренды

  if ($('.desktop-slider-rent').length) {
    $('.desktop-slider-rent').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: false,
      rows: 2,
    });
  }

  if ($('.mobile__filter-slider-rent').length) {
    $('.mobile__filter-slider-rent').slick({
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      initialSlide: 1,
      centerMode: true,
      variableWidth: true,
    });
  }

  if ($('.mobile-slider-rent').length) {
    $('.mobile-slider-rent').slick({
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      centerMode: true,
      variableWidth: true,
    });
  }

  // слайдеры карточки товара

  if ($('.card__slider_big').length) {
    $('.card__slider_big').slick({
      arrows: false,
      fade: true,
      infinite: true,
      asNavFor: '.card__slider',
    });
  }

  if ($('.card__slider').length) {
    $('.card__slider').slick({
      arrows: true,
      slidesToShow: 4,
      asNavFor: '.card__slider_big',
    });
  }

  if ($('.card__slider_mobile').length) {
    $('.card__slider_mobile').slick({
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      centerMode: true,
      variableWidth: true,
    });
  }

  //------------------------

  // ползунок карточки

  $('.polzunok-5').slider({
    min: 0,
    max: 569000,
    values: [8990, 139900],
    range: true,
    animate: 'fast',
    slide: function (event, ui) {
      $('.polzunok-input-5-left').val(ui.values[0]);
      $('.polzunok-input-5-right').val(ui.values[1]);
    },
  });
  $('.polzunok-input-5-left').val($('.polzunok-5').slider('values', 0));
  $('.polzunok-input-5-right').val($('.polzunok-5').slider('values', 1));
  $('.polzunok-container-5 input').change(function () {
    var input_left = $('.polzunok-input-5-left')
        .val()
        .replace(/[^0-9]/g, ''),
      opt_left = $('.polzunok-5').slider('option', 'min'),
      where_right = $('.polzunok-5').slider('values', 1),
      input_right = $('.polzunok-input-5-right')
        .val()
        .replace(/[^0-9]/g, ''),
      opt_right = $('.polzunok-5').slider('option', 'max'),
      where_left = $('.polzunok-5').slider('values', 0);
    if (input_left > where_right) {
      input_left = where_right;
    }
    if (input_left < opt_left) {
      input_left = opt_left;
    }
    if (input_left == '') {
      input_left = 0;
    }
    if (input_right < where_left) {
      input_right = where_left;
    }
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == '') {
      input_right = 0;
    }
    $('.polzunok-input-5-left').val(input_left);
    $('.polzunok-input-5-right').val(input_right);
    if (input_left != where_left) {
      $('.polzunok-5').slider('values', 0, input_left);
    }
    if (input_right != where_right) {
      $('.polzunok-5').slider('values', 1, input_right);
    }
  });

  $('.polzunok-6').slider({
    min: 0,
    max: 6,
    values: [0, 2],
    range: true,
    animate: 'fast',
    slide: function (event, ui) {
      $('.polzunok-input-6-left').val(ui.values[0]);
      $('.polzunok-input-6-right').val(ui.values[1]);
    },
  });
  $('.polzunok-input-6-left').val($('.polzunok-6').slider('values', 0));
  $('.polzunok-input-6-right').val($('.polzunok-6').slider('values', 1));
  $('.polzunok-container-6 input').change(function () {
    var input_left = $('.polzunok-input-6-left')
        .val()
        .replace(/[^0-9]/g, ''),
      opt_left = $('.polzunok-6').slider('option', 'min'),
      where_right = $('.polzunok-6').slider('values', 1),
      input_right = $('.polzunok-input-6-right')
        .val()
        .replace(/[^0-9]/g, ''),
      opt_right = $('.polzunok-6').slider('option', 'max'),
      where_left = $('.polzunok-6').slider('values', 0);
    if (input_left > where_right) {
      input_left = where_right;
    }
    if (input_left < opt_left) {
      input_left = opt_left;
    }
    if (input_left == '') {
      input_left = 0;
    }
    if (input_right < where_left) {
      input_right = where_left;
    }
    if (input_right > opt_right) {
      input_right = opt_right;
    }
    if (input_right == '') {
      input_right = 0;
    }
    $('.polzunok-input-6-left').val(input_left);
    $('.polzunok-input-6-right').val(input_right);
    if (input_left != where_left) {
      $('.polzunok-6').slider('values', 0, input_left);
    }
    if (input_right != where_right) {
      $('.polzunok-6').slider('values', 1, input_right);
    }
  });

  //переключение каталога на список или плитку
  $('.vision__gallery').hide();
  $(document).on('click', '.gallery__position', function () {
    $('.vision__gallery').show();
    $('.vision__classic').hide();
  });
  $(document).on('click', '.horizontal__position', function () {
    $('.vision__gallery').hide();
    $('.vision__classic').show();
  });

  $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
    e.preventDefault();
    var t = 1000;
    var d = $(this).attr('data-href')
      ? $(this).attr('data-href')
      : $(this).attr('href');
    $('html,body')
      .stop()
      .animate({ scrollTop: $(d).offset().top }, t);
  });
});

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  div = document.getElementById('myDropdown');
  a = div.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
}
