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
        $(".with-inner-list").each(function(){

          $(this).hover(function() {
  
            var label = $(this).attr("data-label");
  
            $('.with-inner-list').removeClass('active');
            $(this).addClass('active');
  
  
            $('.drop-menu-list-inner').find('#' + label).siblings().hide();
            $('.drop-menu-list-inner').find('#' + label).show();
  
          });
  
        });
      } else {
        $('.next-stage').each(function(){
          $(this).click(function() {
            $('.drop-menu').removeClass('show');
            $(this).siblings('.drop-menu').addClass('show');      
          });
        });
  
        $('.next-stage-inner').each(function(){
  
          $(this).click(function() {
  
            var label = $(this).siblings('.with-inner-list').attr("data-label");
  
            $('.drop-menu-list-inner').addClass('show');
  
            $('.drop-menu-list-inner').find('#' + label).siblings().removeClass('show');
            $('.drop-menu-list-inner').find('#' + label).addClass('show');
  
          });
  
        });
  
        $('.navbar-toggler').click(function(){
  
          $('.drop-menu').removeClass('show');
          $('.drop-menu-list-inner').removeClass('show');
          $('.inner-list').removeClass('show');
        });
  
        $('.drop-menu-list .back').click(function(){
          $('.drop-menu').removeClass('show');
        });
  
        $('.drop-menu-list-inner .back').click(function(){
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
          $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

      } else {

        if (scroll >= 1) {
          $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

      }

    }
    stickyNav();


    $(window).scroll(function() {    
      stickyNav();
    });

    $(window).on("resize", function(){
      stickyNav();
      checkWidth();
    });

  }


  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _megaMenu();
  };

  return {
    init: init,
  };
})();
