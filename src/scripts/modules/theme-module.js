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
