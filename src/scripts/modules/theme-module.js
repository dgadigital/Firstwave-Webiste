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


    $('.next-stage').each(function(){
      $(this).click(function() {
        $('.drop-menu').removeClass('show');
        $(this).siblings('.drop-menu').addClass('show');      
      });
    });

    $('.next-stage-inner').each(function(){

      $(this).click(function() {

        var label = $(this).siblings('.with-inner-list').attr("data-label");

        $('.drop-menu-list-inner').find('#' + label).addClass('show');

      });

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
