$(window).on('load', function(){
  function fixHeader(onlyButton){
    if(!onlyButton){
      $('header').css('top', $(window).scrollTop()+'px');
    }
      var buttonOffset = $(window).scrollTop()+$(window).height()-$('#buyButton').height();
      if(buttonOffset<$('footer').offset().top-$('#buyButton').height()){
        $('#buyButton').css('top', buttonOffset+'px');
      }else{
        $('#buyButton').css('top', $('footer').offset().top-$('#buyButton').height()+'px');
      }
  };
  fixHeader();
  var currentcolor = 1;
  var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++currentcolor)%3)+1)+"_white.svg')"},1000);
  $('#toOrder').on('click', function(){
    $('#order').css({
      'opacity' : '1',
      'position' : 'relative',
      'margin-top' : '0'
    });
    $('#grid').hide();
    $('.s_item').show();
    (function(){
      for (var i = 1; i < itemsNum+1; i++) {
        var item = $('.item_order:nth-child('+i+')');
        $('#s_item'+i).css({'top' : item.offset().top+'px'});
      }
    })();

    $('#toOrder').removeClass('unactive');
    $('#toGrid').addClass('unactive');

  });
  $('#toGrid').on('click', function(){
    $('#order').css({
      'position' : 'absolute',
      'opacity' : '0',
      'margin-top' : '-10000px'
    });
    $('#grid').css('display', 'block');

    $('#toOrder').addClass('unactive');
    $('#toGrid').removeClass('unactive');
    $('.s_item').hide();
  });
var isMenuOpened = false;
$(window).resize(function(){if($(window).width()+16>1024){
    if(isMenuOpened){
      $('aside').hide();
      $('body').css({'transform': 'translateX(0)', 'overflow' : cartStatus(isCartOpened), 'overflow-x' : 'hidden'});
      $('header').css({'transform': 'translateX(0)', 'transition-duration' : '0'});
      isMenuOpened = false;
    }
  }else if(isMenuOpened==true){$('aside').show()};fixHeader()})

  $('header button').on('click', function(){
    isMenuOpened = true;
    $('body').css({
      "transform" : "translateX(-25%)",
      "overflow": "hidden"
    });
    $('aside').css({
      "display" : "block",
      "transform" : "translateX(25%)",
      "transition" : "transform 0.4s ease-out",
      "height" : $(window).height()+'px',
      "top" : $(window).scrollTop()+'px'
    });
    $('#backToTheFuture').on('click', function(){
      $('body').css({'transform': 'translateX(0)', 'overflow' : 'unset', 'overflow-x' : 'hidden'});
      $('header').css({'transform': 'translateX(0)', 'transition': 'transform 0s'});
      $('aside').css('transform' , 'translateX(125%)');
      fixHeader();
    });

  });
  var itemsNum = $('#order').children().length;
  for (var i = 1; i < itemsNum+1; i++) {
    $('#stripes').append("<div class='s_item' id='s_item"+i+"'></div>");
    var item = $('.item_order:nth-child('+i+')');
    $('#s_item'+i).css({'top' : item.offset().top+'px'});
  }
  $(window).resize(function(){
    for (var i = 1; i < itemsNum+1; i++) {
      var item = $('.item_order:nth-child('+i+')');
      $('#s_item'+i).css({'top' : item.offset().top+'px'});
    }
  })
  $(window).scroll(function(){
    if ($(window).width()+16<1024) {
      fixHeader(false);
    }else{
      fixHeader(true);
    }
  });
  $('#buyButton').on('click', function(){
    $('iframe').show();
    $('#newOrder').css('top','0');
    $('body').css({
      'overflow' : 'hidden',
      'margin-top' : '-50%',
      'transition' : 'margin-top 0.2s ease-in'
    });
    setTimeout(function(){$('#iExit').css('display', 'flex')},200);
    setTimeout(function(){$(window).scrollTop(0)},200);
    isCartOpened=true;
  });
  $('#iExit').on('click', function(){
    $('#iExit').css('display','none');
    setTimeout(function(){$('iframe').hide()},200);
    $('#newOrder').css('top', '100%');
    $('body').css({
      'overflow-y' : 'scroll',
      'margin-top' : '0'
    });
    isCartOpened=false;
  });
var isCartOpened=false;
function cartStatus(isCartOpened){
  if(isCartOpened){
    return 'hidden';
  }else{
    return 'unset';
  }
}
});
