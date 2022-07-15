AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
  };

  var _megaMenu = () => {
    function checkWidth() {
      $vWidth = $(window).width();

      if ($vWidth > 991) {
        $('.with-inner-list').each(function () {
          $(this).hover(function () {
            var label = $(this).attr('data-label');

            $('.with-inner-list').removeClass('active');
            $(this).addClass('active');

            $('.drop-menu-list-inner')
              .find('#' + label)
              .siblings()
              .hide();
            $('.drop-menu-list-inner')
              .find('#' + label)
              .show();
          });
        });
      } else {
        $('.next-stage').each(function () {
          $(this).click(function () {
            $('.drop-menu').removeClass('show');
            $(this).siblings('.drop-menu').addClass('show');
          });
        });

        $('.next-stage-inner').each(function () {
          $(this).click(function () {
            var label = $(this).siblings('.with-inner-list').attr('data-label');

            $('.drop-menu-list-inner').addClass('show');

            $('.drop-menu-list-inner')
              .find('#' + label)
              .siblings()
              .removeClass('show');
            $('.drop-menu-list-inner')
              .find('#' + label)
              .addClass('show');
          });
        });

        $('.navbar-toggler').click(function () {
          $('.drop-menu').removeClass('show');
          $('.drop-menu-list-inner').removeClass('show');
          $('.inner-list').removeClass('show');
        });

        $('.drop-menu-list .back').click(function () {
          $('.drop-menu').removeClass('show');
        });

        $('.drop-menu-list-inner .back').click(function () {
          $('.drop-menu-list-inner').removeClass('show');
          // $('.inner-list').removeClass('show');
        });
      }
    }

    checkWidth();

    function stickyNav() {
      var scroll = $(window).scrollTop();
      var $vWidth = $(window).width();

      if ($vWidth > 991) {
        if (scroll >= 25) {
          $('.navbar').addClass('sticky');
        } else {
          $('.navbar').removeClass('sticky');
        }
      } else {
        if (scroll >= 1) {
          $('.navbar').addClass('sticky');
        } else {
          $('.navbar').removeClass('sticky');
        }
      }
    }
    stickyNav();

    $(window).scroll(function () {
      stickyNav();
    });

    $(window).on('resize', function () {
      stickyNav();
      checkWidth();
    });
  };

  var _slickSliders = () => {
    $('.blog-post-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true,
      // touchMove: true,
      // swipe: true,
      prevArrow:
        '<img src="../assets/images/prev-slider-icon.png" class="img-fluid slick-prev">',
      nextArrow:
        '<img src="../assets/images/next-slider-icon.png" class="img-fluid slick-next">',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  };

  var _blogpostElements = () => {
    function setmaxHeight() {
      $('.blog-post-slider').each(function () {
        var blogTitle = 0;
        var blogExcerpt = 0;

        $('.blog-post-slider article .post-title').css({
          'min-height': '0',
        });

        $('.blog-post-slider article .post-excerpt').css({
          'min-height': '0',
        });

        $('article .post-title', this).each(function () {
          if ($(this).height() > blogTitle) {
            blogTitle = $(this).height();
          }
        });

        $('article .post-excerpt', this).each(function () {
          if ($(this).height() > blogExcerpt) {
            blogExcerpt = $(this).height();
          }
        });

        $('.blog-post-slider article .post-title').css({
          'min-height': blogTitle,
        });

        $('.blog-post-slider article .post-excerpt').css({
          'min-height': blogExcerpt,
        });
      });
    }

    setmaxHeight();

    window.onresize = function (event) {
      setmaxHeight();
    };
  };

  var _relatedpostElements = () => {
    function setmaxHeight() {
      $('.related-posts').each(function () {
        var blogTitle = 0;
        var blogExcerpt = 0;

        $('.related-posts article .post-title').css({
          'min-height': '0',
        });

        $('.related-posts article .post-excerpt').css({
          'min-height': '0',
        });

        $('article .post-title', this).each(function () {
          if ($(this).height() > blogTitle) {
            blogTitle = $(this).height();
          }
        });

        $('article .post-excerpt', this).each(function () {
          if ($(this).height() > blogExcerpt) {
            blogExcerpt = $(this).height();
          }
        });

        $('.related-posts article .post-title').css({
          'min-height': blogTitle,
        });

        $('.related-posts article .post-excerpt').css({
          'min-height': blogExcerpt,
        });
      });
    }

    setmaxHeight();

    window.onresize = function (event) {
      setmaxHeight();
    };
  };

  var _tabsResources = () => {
    var firstTab = $('.section-tabs-resources .nav-pills li:first').html();
    $('.section-tabs-resources .tabs-mobile li').html(firstTab);

    $('.section-tabs-resources .tabs-mobile').click(function () {
      $(this).parent().toggleClass('active');
    });

    $('.section-tabs-resources .nav-pills a').click(function () {
      var currentele = $(this).html();
      $('.section-tabs-resources .tabs-mobile a').html(currentele);
      $(this)
        .parents('.section-tabs-resources .tabs-holder')
        .removeClass('active');
    });
  };

  var _modalVideo = () => {
    var $videoSrc;
    $('.video-btn').click(function () {
      $videoSrc = $(this).data('src');
    });

    $('#videoModal').on('shown.bs.modal', function (e) {
      $('#video').attr('src', $videoSrc + '?autoplay=1');
    });

    $('#videoModal').on('hide.bs.modal', function (e) {
      $('#video').attr('src', $videoSrc);
    });
  };

  var _solutionsSlider = () => {

    $('.testimonials-box-item-slider').each(function () {
        var solutionsSliderCount = $(this).children().length;
        if(solutionsSliderCount > 1) {
          $(this).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
          });
        }
    });
  }

  var _interactiveSection = () => {

    $('.btn-1').click(function () {
        
      $('.option-1').show();
      $('.bg-1').fadeIn();
      $('.icons-1').fadeIn();


      $('.option-2').hide();
      $('.bg-2').fadeOut();
      $('.icons-2').fadeOut();

      $('.option-3').hide();
      $('.bg-3').fadeOut();
      $('.icons-3').fadeOut();

    });


    $('.btn-2').click(function () {
        
      $('.option-1').hide();
      $('.bg-1').fadeOut();
      $('.icons-1').fadeOut();


      $('.option-2').show();
      $('.bg-2').fadeIn();
      $('.icons-2').fadeIn();

      $('.option-3').hide();
      $('.bg-3').fadeOut();
      $('.icons-3').fadeOut();

    });


    $('.btn-3').click(function () {
        
      $('.option-1').hide();
      $('.bg-1').fadeOut();
      $('.icons-1').fadeOut();


      $('.option-2').hide();
      $('.bg-2').fadeOut();
      $('.icons-2').fadeOut();

      $('.option-3').show();
      $('.bg-3').fadeIn();
      $('.icons-3').fadeIn();

    });


  }

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _megaMenu();
    _tabsResources();
    _modalVideo();
    _slickSliders();
    _relatedpostElements();
    _blogpostElements();
    _solutionsSlider();
    _interactiveSection();
    // _footerMenu();
  };

  return {
    init: init,
  };
})();
