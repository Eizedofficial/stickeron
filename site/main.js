$(window).on('load', function(){
  control('#h1', '#collections', 0)();
  control('#h2', '#stickers-amount', 0)();
  control('#h3', '#delivery', 0)();
  control('#h4', '#individuality', -45)();
  control('#h5', '#individuality', 113)();
  control('#h6', '#share-views', -45)();
  (function(){ $('.hr-lines').css('height', $('#footer').offset().top+$('#footer').height()+'px')})();
  (function(){stickHeight("#collections div", 0.52, 615, 'attr', 1.5625)})();
  (function(){stickHeight("#individuality", 0.75, 615, 'height', 703)})();
  (function(){stickHeight("#share-views", 0.75, 615, 'height', 703)})();
  var isMenuOpened = false;
  var currentcolor = 1;
  var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++currentcolor)%3)+1)+"_white.svg')"},1000);

  function stickToElem(id, correction){
    return ($(id).offset().top+$(id).height()+correction + 'px');
  }
  function control(id, stickTo, correction){
    return function(){$(id).css('margin-top', stickToElem(stickTo, correction))};
  }
  function stickHeight(id, factor, windowWidth, attrOrHeight, value){
    if ($(window).width() + 16 < windowWidth) {
      return  $(id).css('height', $(id).width()*factor);
    } else {
      switch (attrOrHeight) {
        case 'attr': return  $(id).attr('data-proportion-h', value);
        break;
        case 'height': return  $(id).css('height', value);
        break;
      }
    }
  }

  $(window).resize(control('#h1', '#collections', 0));
  $(window).resize(control('#h2', '#stickers-amount', 0));
  $(window).resize(control('#h3', '#delivery', 0));
  $(window).resize(control('#h4', '#individuality', -45));
  $(window).resize(control('#h5', '#individuality', 113));
  $(window).resize(control('#h6', '#share-views', -45));
  $(window).resize(function(){stickHeight("#individuality", 0.75, 615, 'height', 703)});
  $(window).resize(function(){stickHeight("#share-views", 0.75, 615, 'height', 703)});
  $(window).resize(function(){ $('.hr-lines').css('height', $('#footer').offset().top+$('#footer').height()+'px')});
  $(window).resize(function(){stickHeight("#collections div", 0.52, 615, 'attr', 1.5625)});


  $(window).resize(function(){if($(window).width()+16>1024){
    $('aside').hide();
    $('body').css({'transform': 'translateX(0)', 'overflow' : 'unset', 'overflow-x' : 'hidden'});
    $('header').css({'transform': 'translateX(0)', 'transition-duration' : '0'});
  }})

  $('header button').on('click', function(){
    isMenuOpened = true;
    $('body').css({
      "transform" : "translateX(-25%)",
      "overflow": "hidden"
    });
    $('header').css({
      "transform" : "translateX(25%)",
      "transition-duration" : "0.3s"
    });
    $('aside').css({
      "display" : "block",
      "transform" : "translateX(25%)",
      "transition-duration" : "0.4s",
      "transition-timing-function" : "ease-out"
    });
    $('#backToTheFuture').on('click', function(){
      $('body').css({'transform': 'translateX(0)', 'overflow' : 'unset', 'overflow-x' : 'hidden'});
      $('header').css('transform', 'translateX(0)');
      $('aside').css('transform' , 'translateX(125%)');
      delay(function(){
        $('aside').hide();
      }, 1000);
      //$('header').css('transition-duration', '0').delay(300);
    });
  });
});
