$(document).ready(function() {

  // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
  $(document).foundation();
  
  var headerNav = (function(){
    // Функция описывает поведение меню хедера и его бургера
    var burger = $('.js-header-nav-burger'),
        nav    = $('.js-header-nav');
        
    function checkMenu(){
      var w = $(window).width();
      
      if(burger.hasClass('burger--active') || w > 1024){
        nav.slideDown(300);
      }else{
        nav.slideUp(300);
      }
    }
    checkMenu();
    
    burger.on('click', function(){
      burger.toggleClass('burger--active');
      checkMenu();
      
    });
    $(window).on('resize', checkMenu);
    
    
  }());


});
