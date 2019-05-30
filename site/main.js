$(window).on('load', function(){
  control('#h1', '#collections', 0)();
  control('#h2', '#stickers-amount', 0)();
  control('#h3', '#delivery', 0)();
  control('#h4', '#individuality', -45)();
  control('#h5', '#individuality', 113)();
  control('#h6', '#share-views', -45)();
  (function(){ $('#vertical').css('height', $('#footer').offset().top+$('#footer').height()+'px')})();
  (function(){ $('.hr-lines').css('height', $('#footer').offset().top+$('#footer').height()+'px')})();
  var currentcolor = 1;
  var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++currentcolor)%3)+1)+"_white.svg')"},1000);

  function stickToElem(id, correction){
    return ($(id).offset().top+$(id).height()+correction + 'px');
  }
  function control(id, stickTo, correction){
    return function(){$(id).css('margin-top', stickToElem(stickTo, correction))};
  }

  $(window).resize(control('#h1', '#collections', 0));
  $(window).resize(control('#h2', '#stickers-amount', 0));
  $(window).resize(control('#h3', '#delivery', 0));
  $(window).resize(control('#h4', '#individuality', -45));
  $(window).resize(control('#h5', '#individuality', 113));
  $(window).resize(control('#h6', '#share-views', -45));
  $(window).resize(function(){ $('#vertical').css('height', $('#footer').offset().top+$('#footer').height()+'px')});
  $(window).resize(function(){ $('.hr-lines').css('height', $('#footer').offset().top+$('#footer').height()+'px')});
});
