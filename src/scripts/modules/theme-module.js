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


    $(".with-inner-list").each(function(){

        $(this).hover(function() {

          var label = $(this).attr("data-label");

          $('.with-inner-list').removeClass('active');
          $(this).addClass('active');


          $('.drop-menu-list-inner').find('#' + label).siblings().hide();
          $('.drop-menu-list-inner').find('#' + label).show();

        });

    });

  }

  var _footerMenu = () => {


    $(".footer-menu-item.with-inner").each(function(){

        $(this).hover(function() {

          $('.footer-menu-inner').hide();
          $(this).children('.footer-menu-inner').show();
          

          // var label = $(this).attr("data-label");

          // $('.with-inner-list').removeClass('active');
          // $(this).addClass('active');


          // $('.drop-menu-list-inner').find('#' + label).siblings().hide();
          // $('.drop-menu-list-inner').find('#' + label).show();

        }, function() {
          $(this).children('.footer-menu-inner').hide();
        });

    });

  }

  


  var _slickSliders = () => {

    $('.blog-post-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  }
  var _blogpostElements = () => {

    function setmaxHeight(){
      $('.blog-post-slider').each(function(){    
        var blogTitle = 0;  
        var blogExcerpt = 0;

        $('.blog-post-slider article .post-title').css( {
          'min-height': '0'
        });

        $('.blog-post-slider article .post-excerpt').css( {
            'min-height': '0'
        });  
  
        $('article .post-title', this).each(function(){
          if($(this).height() > blogTitle) {
            blogTitle = $(this).height(); 
          }
        
        });  
  
        $('article .post-excerpt', this).each(function(){
          if($(this).height() > blogExcerpt) {
            blogExcerpt = $(this).height(); 
          }
        
        });  

        
        $('.blog-post-slider article .post-title').css( {
            'min-height': blogTitle
        });

        $('.blog-post-slider article .post-excerpt').css( {
            'min-height': blogExcerpt
        });     

      });   
    }
      
    setmaxHeight();

    window.onresize = function(event) {
      setmaxHeight();
  };

  }

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _megaMenu();
    _slickSliders();
    _blogpostElements();
    // _footerMenu();
  };

  return {
    init: init,
  };
})();
