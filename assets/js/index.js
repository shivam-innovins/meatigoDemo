$(document).ready(function () {



  $(window).on('load', function () {
    $('#loader-wrapper').fadeOut(1000);
    $('.wrapper').show();
  });




  $(window).scroll(function () {
    var sticky = $('.header');
    scroll = $(window).scrollTop();
    if (scroll >= $('.phead').height()) {
      sticky.addClass('header-fixed');
      $('body').addClass('header-is-fixed');
    } else {
      sticky.removeClass('header-fixed');
      $('body').removeClass('header-is-fixed');
    }



    if (document.querySelector(".product-nav-list")) {
      if (scroll > $(".prod-nav-ghost").offset().top - $('.phead').height()) {
        $(".product-nav-list").addClass("fixed");
        $(".product-nav-list").css("top", $('.phead').height() + "px");
        $(".prod-nav-ghost").css("height", $(".product-nav-list").height() + "px");
      } else {
        $(".product-nav-list").removeClass("fixed");
        $(".product-nav-list").css("top", 0);
        $(".prod-nav-ghost").css("height", 0);
      }
    }





  });



  // header margin for fixed Header
  var headerHeight = $(".header").height();
  $(".headerfixed .pagecontent").css("margin-top", headerHeight);
  // header margin for fixed Header

  new Swiper(".head__category__slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        $('.head__category__slide.active').removeClass('active');
        $('.cat-menu-fix').removeClass('show');
        slide__change(this.el);
      }
    },
    breakpoints: {
      860: {
        slidesPerGroup: 2,
      }
    }
  });


  let head__marquee__string = '';
  for (let i = 0; i < 50; i++) {
    head__marquee__string += $('.head__marquee marquee').html();
  }
  $('.head__marquee marquee').html(head__marquee__string);



  new Swiper(".banner-style-1 .slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  new Swiper(".product__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".prod-right",
      prevEl: ".prod-left"
    },
  });


  new Swiper(".item-slider-1 .slider", {
    slidesPerView: 'auto',
    slidesPerGroup: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      100: {
        slidesPerGroup: 2,
        spaceBetween: 12
      },
      860: {
        slidesPerGroup: 2,
        spaceBetween: 12
      },
      1024: {
        slidesPerGroup: 3,
      }
    },
    on: {
      slideChange: function () { slide__change(this.el) }
    }

  });

  new Swiper(".item-slider-2 .slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChange: function () { slide__change(this.el) }
    },
    breakpoints: {
      100: {
        slidesPerGroup: 2,
        spaceBetween: 12
      },
      860: {
        slidesPerGroup: 2,
        spaceBetween: 12
      },
      1024: {
        slidesPerGroup: 2,
      }
    }
  });


  new Swiper(".simple-var-slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 2,
  });



  $('.next').click(function () { $(this).parent().find('.swiper-button-next').trigger('click') })
  $('.previous').click(function () { $(this).parent().find('.swiper-button-prev').trigger('click') })


  function slide__change(self) {
    if ($(self).parent().find('.swiper-button-disabled').hasClass('swiper-button-next')) {
      $(self).parent().parent().find('.next').addClass('disable-nav');
    } else {
      $(self).parent().parent().find('.next').removeClass('disable-nav');
    }

    if ($(self).parent().find('.swiper-button-disabled').hasClass('swiper-button-prev')) {
      $(self).parent().parent().find('.previous').addClass('disable-nav');
    } else {
      $(self).parent().parent().find('.previous').removeClass('disable-nav');
    }
  }


  $('.head__category__slide').click(function (e) {
    $('.head__category__slide.active').not(this).removeClass('active');
    if (!$(this)[0].querySelector('.cat-sub-menu')) { return }
    e.stopPropagation();

    $('.cat-menu-fix').html($(this)[0].querySelector('.cat-sub-menu').innerHTML);

    $('.cat-menu-fix')[0].style.left = $(this)[0].getBoundingClientRect().left + 'px';
    $('.cat-menu-fix')[0].style.top = $(this)[0].getBoundingClientRect().top + $(this)[0].getBoundingClientRect().height + 'px';

    setTimeout(() => {

      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.cat-menu-fix').addClass('show');
      } else {

        $('.head__category__slide.active').removeClass('active');
        $('.cat-menu-fix').removeClass('show');
      }

    }, 0);

  });


  $(window).click(() => {
    $('.head__category__slide.active').removeClass('active');
    $('.cat-menu-fix').removeClass('show');
    $('.sort__by').removeClass('open');
    $('.filter-options').css('height', $('.filter-list').height() + 'px');
  });


  $(window).scroll(() => {
    $('.head__category__slide.active').removeClass('active');
    $('.cat-menu-fix').removeClass('show');
    $('.sort__by').removeClass('open');
    $('.filter-options').css('height', $('.filter-list').height() + 'px');
  });

  $(window).resize(() => {
    $('.head__category__slide.active').removeClass('active');
    $('.cat-menu-fix').removeClass('show');
    $('.sort__by').removeClass('open');
    $('.filter-options').css('height', $('.filter-list').height() + 'px');
  });

  $('.close__top__bar').click(() => {
    $('body').addClass('close__topbar')
  });


  $('.sort__by').click((e) => {
    e.stopPropagation();
    $('.sort__by').toggleClass('open');
    $('.head__category__slide.active').removeClass('active');
    $('.cat-menu-fix').removeClass('show');
  });



  $('.filter-list a').click(function () {
    $('.filter-list a').removeClass('active');
    $(this).addClass('active');
    $('.filter-options').find('.show').removeClass('show');
    $('.filter-options').find(`[data-id="${$(this).attr('data-for')}"]`).addClass('show');
  });


  $('.view-all-filter').click(() => {
    $('body').toggleClass('open-filter-box');
  });

  $('.filter-button').click(() => {
    $('body').toggleClass('open-filter-box');
  });

  $('.filter-box-close').click(() => {
    $('body').removeClass('open-filter-box');
  });


  $('.close-filter-box').click(() => {
    $('body').removeClass('open-filter-box');
  });


  $('.select select').customSelect();

  if (document.getElementsByClassName("accordion")) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    // $('.panel').click(function(){$(this).parent().find('.accordion').click();});

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        $('.accordion.active').not(this).trigger('click');
        this.classList.toggle("active");
        this.parentNode.parentNode.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }



  var sectionIds = $(".product-nav-list a");

  $(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();
    sectionIds.each(function () {

      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;

      if (
        // scrollPosition < containerBottom - 240 &&
        scrollPosition >= containerOffset - 400
      ) {
        $(this).addClass("active");
        $('.product-nav-list a').not(this).removeClass('active');
        if(container == '#faqs' || container == '#how-to-use') {
          $('.product-nav-list .max-box').scrollLeft(1000);
        } else {
          $('.product-nav-list .max-box').scrollLeft(0)
        }
      } else {
        $(this).removeClass("active");
      }

    });

  if(document.querySelector('.product-nav-list a')) {
    if(scrollPosition < $($('.product-nav-list a:first-child').attr("href")).offset().top) {
      $('.product-nav-list a:first-child').addClass("active");
    }
  }


  });

  $(document).on('click', '.product-nav-list a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 200
    }, 500);
});


  $('.read-btn').click(function () {
    $(this).parent().toggleClass('read__all');
  });


  $('.avail-box .select > .mobile').click(function () {
    $(this).parent().find('.custom-select__option--value').trigger('click');
  });


  let accx = document.getElementsByClassName("cart__accor");

  for (let i = 0; i < accx.length; i++) {
    accx[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let cart__panel = this.parentNode.nextElementSibling;
      if (cart__panel.style.maxHeight) {
        cart__panel.style.maxHeight = null;
      } else {
        cart__panel.style.maxHeight = cart__panel.scrollHeight + "px";
      }
    });
  }


  $('.head__cart__icon').click(()=>{
    $('body').toggleClass('open-side-cart');
  });


  $('.cart__box__cover').click(()=>{
    $('body').removeClass('open-side-cart');
  });


  $('.cart__box__cover__under').click(()=>{
    $('body').removeClass('open-side-cart');
  });

  $('.close__cart__box').click(()=>{
    $('body').removeClass('open-side-cart');
  });




});