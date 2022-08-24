AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _anchorBar = () => {
    $('.anchor-slide-bar-list li a').click(function () {
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - 150,
        },
        500
      );
      return false;
    });

    $('#select-anchor').change(function () {
      var targetPosition = $($(this).val()).offset().top - 150;
      $('html,body').animate({scrollTop: targetPosition}, 'slow');
    });
  };

  var _footerMobileMenu = () => {
    $('.menu-main > .menu-item > .menu-parent > .m-dropdown').each(function () {
      $(this).click(function () {
        $('.menu-main > .menu-item').removeClass('active');
        $(this).parent().parent().addClass('active');
      });
    });
    $('.menu-sub-menu > .menu-item > .menu-parent > .m-dropdown').each(function () {
      $(this).click(function () {
        $('.menu-sub-menu > .menu-item').removeClass('active');
        $(this).parent().parent().addClass('active');
      });
    });
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
        '<img src="./assets/images/prev-slider-icon.png" class="img-fluid slick-prev">',
      nextArrow:
        '<img src="./assets/images/next-slider-icon.png" class="img-fluid slick-next">',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    $('.resources-post-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      dots: false,
      // touchMove: true,
      // swipe: true,
      prevArrow:
        '<img src="./assets/images/prev-slider-icon.png" class="img-fluid slick-prev">',
      nextArrow:
        '<img src="./assets/images/next-slider-icon.png" class="img-fluid slick-next">',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
    $('.testimonial-post-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('.customer-testimonials-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('.service-provider-post-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $('.solution-company-post-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  var _blogpostElements = () => {
    function setmaxHeight() {
      $(
        '.blog-post-slider, .resources-post-slider, .service-provider-post-slider, .solution-company-post-slider'
      ).each(function () {
        var blogTitle = 0;
        var blogExcerpt = 0;

        $('article .post-title', this).css({
          'min-height': '0',
        });

        $('article .post-excerpt', this).css({
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

        $('article .post-title', this).css({
          'min-height': blogTitle,
        });

        $('article .post-excerpt', this).css({
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
    var firstTabText = $('.section-tabs-resources .nav-pills a:first').text();
	$('.nav-pills>a:first-child').addClass('active');
	$('.tabs-mobile>li>a:first-child').addClass('active');
	$('.tab-content>.tab-pane:first-child').addClass('active show');
	$('.content-wrapper>div>div .accordion-item:first-child .collapse').addClass('show');
    $('.section-tabs-resources .tabs-mobile li').html(firstTab);
    $('.section-tabs-resources .tabs-mobile li a').text(firstTabText);

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
      if (solutionsSliderCount > 1) {
        $(this).slick({
          dots: true,
          infinite: true,
          speed: 300,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 1,
          adaptiveHeight: true,
        });
      }
    });
  };

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

    $('.interactive-section .btn-mobile .floating-btn').click(function () {
      $('html, body').animate({
        scrollTop: $(".interactive-section .interactive-row .row-list").offset().top-70
      }, 1000);
    });
  };

  var _dropdownSelect = () => {
    $('.component-dropdown').each(function () {
      $('.dropdown-toggle', this).text(
        $('.dropdown-item:first-child', this).text()
      );
    });

    $('.component-dropdown .dropdown-menu .dropdown-item').on(
      'click',
      function () {
        var getValue = $(this).text();
        $('.dropdown-toggle', $(this).parent().parent()).text(getValue);
      }
    );
  };

  var _typeJS = () => {
    if ($('.typed-animate')[0]) {
      new Typed('.typed-animate', {
        stringsElement: '.typed-text',
        typeSpeed: 40,
        delaySpeed: 90,
        loop: true,
      });
    }
  };

  var _tabboxes = () => {
    function kkk() {
	  $('.box-btn>a:first-child').addClass('active');
	  $('.box-tabs>.box-tabs-item:first-child').addClass('active');
      $('.box-btn a').each(function () {
        $(this).click(function (e) {
            var dataID = $(this).data('id');
            var linkID = $(this).attr('id');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $('.' + linkID)
              .children()
              .removeClass('active');
			      $(this)
              .parent()
              .siblings('.box-tabs')
			        .find('.box-tabs-item')
              .removeClass('active');
            $(this)
              .parent()
              .siblings('.box-tabs')
              .find('#' + dataID)
              .addClass('active');
            e.preventDefault();
        });
      });

      /* $('.boxes').each(function () {
        $(this).click(function () {
          if ($(window).width() < 991) {
            var headerID = $(this).data('header');
            $('.boxes').removeClass('active');
            $(this).addClass('active');
            $('.slider-box').hide();
            $(".slider-box[data-parent='" + headerID + "']").show();
            $(".slider-box[data-parent='" + headerID + "']")
              .get(0)
              .slick.setPosition();
          }
        });
      }); */
    }

    kkk();

    /* $(window).on('resize', function () {
      kkk();
      $('.boxes').removeClass('active');
      $('.slider-box').hide();
    });

    $('.slider-box').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    }); */
  };

  var _faqMixedContent = () => {
    $('.icon.bi-minus').hide();
    $('.mix-content .accordion-item:nth-child(2)').addClass('showcontent');
    $('.mix-content .accordion-item:nth-child(2)').find('.icon.bi-plus').hide();
    $('.mix-content .accordion-item:nth-child(2)').find('.icon.bi-minus').show();
	  $('.mix-content .accordion-item:nth-child(2)>.collapse').addClass('show');
    $('.mix-content .accordion-item').each(function () {
      $(this).find('.accordion-heading a').click(function (e) {
        console.log('clicked');
        if($(this).parent().closest('.accordion-item').hasClass('showcontent')){
          $(this).parent().closest('.accordion-item').removeClass('showcontent');
          console.log('hide');
          $(this).parent().closest('.accordion-item').find('.icon.bi-plus').show();
          $(this).parent().closest('.accordion-item').find('.icon.bi-minus').hide();
        }
        else{
          $('.mix-content .accordion-item').removeClass('showcontent');
          $('.mix-content .accordion-item .icon.bi-plus').show();
          $('.mix-content .accordion-item .icon.bi-minus').hide();
          $(this).parent().closest('.accordion-item').addClass('showcontent');
          $(this).parent().closest('.accordion-item').find('.icon.bi-plus').hide();
          $(this).parent().closest('.accordion-item').find('.icon.bi-minus').show();
        }
      });
    });
  };
  

  var _showReadMore = () => {
    var maxLength = 100;
    $(".show-read-more").each(function(){
      var myStr = $(this).text();
      if($.trim(myStr).length > maxLength){
        var newStr = myStr.substring(0, maxLength);
        var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
        console.log($.trim(myStr).length);
        console.log(removedStr);
        $(this).empty().html(newStr);
        $(this).append('<span class="read-more">...<a href="javascript:void(0);" class="d-block">Read more</a></span>');
        $(this).append('<span class="more-text d-none">' + removedStr + '</span>');
        $(this).append('<span class="show-less d-none"><a href="javascript:void(0);" class="d-block">Show less</a></span>');
      }
    });
    $(".read-more").click(function(){
      $(this).siblings(".more-text").removeClass('d-none');
      $(this).siblings(".show-less").removeClass('d-none');
      $(this).addClass('d-none');
    });
    $(".show-less").click(function(){
      $(this).siblings(".more-text").addClass('d-none');
      $(this).siblings(".read-more").removeClass('d-none');
      $(this).addClass('d-none');
    });
  };

  var _featureTabs = () => {
    $(".row-tabs a:first-child").addClass('active');
    $(".row-boxes .tab-pane:first-child").addClass('active');
    $(".row-tabs a").each(function(e){
      $(this).click(function (e) {
        $(".row-tabs a").removeClass('active');
        console.log('clicked');
      });
    });
  };

  var _anchorLink = () => {
    $('.a').click(function () {
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - 150,
        },
        500
      );
      return false;
    });

  };

  var _accordionSetupGuide = () => {
    $( "#setupGuide .accordion-body" ).hide();
      $("#setupGuide .accordion-heading").click(function(){
        if ($('#setupGuide .accordion-body').is(':visible')) {
          $("#setupGuide .accordion-body").slideUp(300);
          $("#setupGuide .icon").text('+');
        }
            if( $(this).next("#setupGuide .accordion-body").is(':visible')){
                $(this).next("#setupGuide .accordion-body").slideUp(300);
                $(this).children("#setupGuide .icon").text('+');
            }else {
                $(this).next("#setupGuide .accordion-body").slideDown(300); 
                $(this).children("#setupGuide .icon").text('-');
            }
      });
  };

  var _supportPageBGTransition = () => {
    $('.section-icon-text-listing .row a').on( "click", function() {
      $('.section-resources-post-slider').css('background-color',$(this).data('bg-color'));
    });
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _megaMenu();
    _tabsResources();
    _modalVideo();
    _slickSliders();
    _relatedpostElements();
    _blogpostElements();
    _solutionsSlider();
    _interactiveSection();
    _dropdownSelect();
    _typeJS();
    // _footerMenu();
    _tabboxes();
    _anchorBar();
    _footerMobileMenu();
    _faqMixedContent();
    _showReadMore();
    _featureTabs();
    _anchorLink();
    _accordionSetupGuide();
    _supportPageBGTransition();
  };

  return {
    init: init,
  };
})();
