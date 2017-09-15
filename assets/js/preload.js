document.addEventListener("DOMContentLoaded", function() {
  var images = new Array();

  function preload(images) {
    if (images) {
      for (var i = 0; i < images.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
      }
    } else {
      for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
      }
    }
  }

  function notify() {
          setTimeout(function(){ 

  document.getElementById("play").style.display = "none";
clearTimeout; 
 
        }, 3000);
  }

  images.onload = notify();

  var responsiveImages = document.querySelectorAll(".js-background-image img");
  var sources = [];
  for (var i = 0; i < responsiveImages.length; i++) {
    var srcset = responsiveImages[i].getAttribute("srcset");
    sources.push(srcset);
  }

  preload(sources);

  preload(
  //   "assets/images/bkg/1.jpg",
  //   "assets/images/bkg/2.jpg",
  //   "assets/images/bkg/3.jpg",
  //   "assets/images/bkg/4.jpg",
  //   "assets/images/bkg/5.jpg",
  //   "assets/images/icon_big_boot.png",
  //   "assets/images/menu.png"
   );
});
