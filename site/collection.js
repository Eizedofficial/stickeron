$(window).on('load', function(){
  var currentcolor = 1;
  var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++currentcolor)%3)+1)+"_white.svg')"},1000);
  $('#toOrder').on('click', function(){
    $('#order').css({
      'opacity' : '1',
      'position' : 'relative'
    });
    $('#grid').hide();

    $('#toOrder').removeClass('unactive');
    $('#toGrid').addClass('unactive');

  });
  $('#toGrid').on('click', function(){
    $('#order').css({
      'position' : 'absolute',
      'opacity' : '0'
    });
    $('#grid').css('display', 'flex');

    $('#toOrder').addClass('unactive');
    $('#toGrid').removeClass('unactive');
  });

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
