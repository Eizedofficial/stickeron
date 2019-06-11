var currentcolor = 1;
var timer = setInterval(function(){document.getElementById('logo').style.backgroundImage="url('Sources/logo-"+(((++currentcolor)%3)+1)+"_white.svg')"},1000);
var buyButton = document.getElementById('buy-button');
var offset = $('iframe').offset().top;
buyButton.scrollTo(0,300);
