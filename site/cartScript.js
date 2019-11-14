$(window).on('load', function(){
  function adaptive(windowSize, valueOver, valueLess){
    if ($('body').width()>windowSize){
      return valueOver;
    }else{
      return valueLess;
    }
  };
  var quanity = 1;
  var currentcolor = 1;
  var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++currentcolor)%3)+1)+"_white.svg')"},1000);

  // To control the quanity of items

  $('.one-more img').on('click', function(){
    $('#item').clone(true, true).attr('id', 'item'+quanity++).appendTo('.cart');
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

    if ($('#inp').val().length==0) {
      $('#username').css('color', '#EC3933');
      setTimeout(function(){$('#username').css('color', 'white')},150);
      $('#inp').css('border-bottom', '4px solid #EC3933');
      setTimeout(function(){$('#inp').css('border-bottom', '4px solid white')},150);
    }else{
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
      })},200);
      setTimeout(function(){
        $('#userData').css('display','block');
        $('html').animate({scrollTop: $('#userData').offset().top}, 700);
        $('#letter').css({'bottom':'-456px','transition':'bottom 0.7s'})
      });
    }

  });
});
