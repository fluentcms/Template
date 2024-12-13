(function($) {
  
  "use strict";

  // Background Image Js
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function (index, elem) {
      let element = $(elem),
        bgSource = element.data('bg-img');
      element.css('background-image', 'url(' + bgSource + ')');
    });

  // Margin Top Js
    $('[data-text-color]').each(function() {
      $(this).css('color', $(this).data("text-color"));
    });

  // Offcanvas Nav Js
    var $offCanvasNav = $('.mobile-menu-items'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if($this.parent().attr('class')){
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active-expand');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active-expand');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.closest('li').siblings('li').removeClass('active-expand');
                    $this.siblings('ul').slideDown();
                }
            }
        }
    });

    $( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );

  // Menu Activeion Js
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage === "" || curpage === "/" || curpage === "admin") && hash === "")
      {
      } else {
        $(".header-navigation-area li").each(function()
      {
        $(this).removeClass("active");
      });
      if(hash != "")
        $(".header-navigation-area li a[href='"+hash+"']").parents("li").addClass("active");
      else
      $(".header-navigation-area li a[href='"+curpage+"']").parents("li").addClass("active");
    }

  // Post Slider Js
    var swiper = new Swiper('.related-post-slider-container', {
      slidesPerGroup: 1,
      slidesPerView : 3,
      speed: 500,
      spaceBetween: 60,
      navigation: {
        nextEl: '.related-post-swiper-btn-next',
        prevEl: '.related-post-swiper-btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 3,
        },
        992: {
          slidesPerView : 3,
          spaceBetween: 30,
        },
        576: {
          slidesPerView : 2,
          spaceBetween: 30,
        },
        480: {
          slidesPerView : 1,
          spaceBetween: 30,
        },
        0: {
          slidesPerView : 1,
          spaceBetween: 30,
        },
      }
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.brand-logo-slider-container', {
      autoplay: {
        delay: 4000,
      },
      slidesPerGroup: 1,
      speed: 500,
      spaceBetween: 114,
      navigation: {
        nextEl: '.brand-swiper-btn-next',
        prevEl: '.brand-swiper-btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 6,
          spaceBetween: 114,
        },
        992: {
          slidesPerView : 4,
          spaceBetween: 185,
        },
        768: {
          slidesPerView : 4,
          spaceBetween: 150,
        },
        576: {
          slidesPerView : 3,
          spaceBetween: 150,
        },
        480: {
          slidesPerView : 2,
          spaceBetween: 30,
        },
        0: {
          slidesPerView : 1,
          spaceBetween: 30,
        },
      }
    });

  // t Slider Js
    var swiper = new Swiper('.testi-slider-container', {
      slidesPerGroup: 1,
      slidesPerView : 3,
      spaceBetween: 30,
      speed: 600,
      pagination: {
        el: '.testi-slider-container .swiper-pagination',
        clickable: 'true',
      },
      breakpoints: {
        1200: {
          slidesPerView : 3,
        },
        992: {
          slidesPerView : 2,
        },
        768: {
          slidesPerView : 2,
        },
        0: {
          slidesPerView : 1,
        },
      }
    });

  // Aos Js
    AOS.init({
      once: true,
      duration: 1200,
    });

  // Counter Up Js
    var counterId = $('.counter');
    if (counterId.length) {
      counterId.counterUp({
        delay: 10,
        time: 3000
      });
    }

  // Fancybox Js
    $('.video-popup').fancybox();

  // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function(e) {
      e.preventDefault();
      var formData = form.serialize();
      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
      }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert alert-danger');
        $(formMessages).addClass('alert alert-success fade show');

        // Set the message text.
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'><span>&times;</span></button>");
        formMessages.append(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
      }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert alert-success');
        $(formMessages).addClass('alert alert-danger fade show');

        // Set the message text.
        if (data.responseText === '') {
          formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'><span>&times;</span></button>");
          formMessages.append(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        }
      });
    });

  // scrollToTop Js
    function scrollToTop() {
      var $scrollUp = $('#scroll-to-top'),
        $lastScrollTop = 0,
        $window = $(window);
        $window.on('scroll', function () {
        var st = $(this).scrollTop();
          if (st > $lastScrollTop) {
              $scrollUp.removeClass('show');
          } else {
            if ($window.scrollTop() > 120) {
              $scrollUp.addClass('show');
            } else {
              $scrollUp.removeClass('show');
            }
          }
          $lastScrollTop = st;
      });
      $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 50);
        evt.preventDefault();
      });
    }
    scrollToTop();
})(window.jQuery);