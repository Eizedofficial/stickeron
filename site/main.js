'use strict';
var currentLogo = 1;
var color = 'white';
function changeLogo(){
  var logo = document.getElementById('logo').style;
  if (currentLogo == 3) {
    logo.backgroundImage = "url('Sources/logo-1_" + color + ".svg')";
    currentLogo = 1;
  }else{
    currentLogo++;
    logo.backgroundImage = "url('Sources/logo-"+ currentLogo +"_" + color + ".svg')";
  }
}
var timer = setInterval(changeLogo, 1000);
