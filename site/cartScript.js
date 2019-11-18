$(window).on('load', function(){
  function adaptive(windowSize, valueOver, valueLess){
    if ($('body').width()>windowSize){
      return valueOver;
    }else{
      return valueLess;
    }
  };
  var quanity = 1;
  var cart_currentcolor = 1;
  var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++cart_currentcolor)%3)+1)+"_white.svg')"},1000);

  // To control the quanity of items

  $('.one-more img').on('click', function(){
    $('#item').clone(true, true).attr('id', 'item'+quanity++).appendTo('.items');
    $('.price').text(189*quanity+" руб");
    if(quanity>3){packNum=3}else{packNum=quanity};
    $('#pack').attr("src","Sources/Collections/"+packNum+"pack.png");
  });
  $('.delete img').on('click', function(){
    if(quanity>1){
      $('#item'+--quanity).detach();
      $('.price').text(189*quanity+" руб");
      if(quanity>3){packNum=3}else{packNum=quanity};
      $('#pack').attr("src","Sources/Collections/"+packNum+"pack.png");
    };
  });

  // Next step

  $('#arrow').on('click', function(){
    $('.cart').css('overflow','hidden');
    if ($('#inp').val().length==0) {
      $('#username').css('color', '#EC3933');
      setTimeout(function(){$('#username').css('color', 'white')},150);
      $('#inp').css('border-bottom', '4px solid #EC3933');
      setTimeout(function(){$('#inp').css('border-bottom', '4px solid white')},150);
    }else{
      $('.total-price').text(189*quanity+" руб");
      $('#name').val($('#inp').val());
      $('.items').css('overflow-y','hidden');
      $('.hiding').css({'opacity':'0','transition':'opacity 0.2s ease-in'});
      $('#letter input').css({
        'border-bottom':'4px solid transparent',
        'color':'white',
        'top': adaptive(680,100,50)+'px',
        'transition':'0.2s ease-in'
      });
      $('#letter input').prop('disabled', true);
      $('#arrow').css({'top':adaptive(680,170,260)+'px','transition':'top 0.2s ease-in'});
      $('.item').css({'margin-top':'100%','transition':'margin-top 0.2s ease-in'});
      $('body').css('overflow-y','hidden');
      if($('body').width()<680){$('#pack').css({'top':'0','transition':'top 0.5s ease-in'})}else{
      $('#pack').css({'margin-top':'30px','transition':'margin-top 0.5s ease-in'});}
      setTimeout(function(){
        $('.item').css('display','none');
        $('window').css('overflow-y','scroll');
      },200);
      $('.item').css({'opacity':'0','transition':'0.2s ease-in'});
      $('#letter').css({'opacity':'1','transition':'opacity 0.2s ease-in'});
      $('.price').css({
        'opacity':'0',
        'transition':'opacity 0.2s ease-in'
      });
      setTimeout(function(){$('.price').css({
        'opacity':'1',
        'transition': 'opacity 0.2s ease-in',
        'top':'calc(50% - 35px)',
        'width':'100%',
        'position':'absolute',
        'font-size':'40px'
      })},100);
      setTimeout(function(){
        $('#userData').css('display','block');
        $('.cart').animate({scrollTop: $('#userData').offset().top}, 700);
        $('#letter').css({'bottom':'-456px','transition':'bottom 0.7s'})
      },600);
    }

    // Backwards

    $('.user_exit').on('click',function(){
      $('#inp').val($('#name').val());
      $('.price').css({
        'top':'unset',
        'width':'100%',
        'position':'relative',
        'font-size':'33px'
      });
      $('.item').css({
        'opacity' : 1,
        'display' : 'flex',
        'margin-top' : 0
      });
      $('#letter').css({
        'bottom': 0
      });
      $('#arrow').css({
        'top' : '234px'
      });
      $('.items').css('overflow-y','auto');
      $('#pack').css({
        'margin-top':'851px'
      });
      $('#letter input').prop('disabled',false);
      $('#letter input').css({
        'border-bottom':'4px solid white',
        'color':'#3441CC',
        'top': '118px'
      });
      $('.hiding').css('opacity',1);
      $('.cart').animate({scrollTop: 0}, 700);
    });

  });
});
