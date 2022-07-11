// create function for include js files
function include(file) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}
// include all js files
include("./assets/js/jquery.min.js");
include("./assets/js/modernizr.custom.js");
include("./assets/js/animating.js");
include("./assets/js/imagesloaded.pkgd.min.js");
include("https://www.google.com/recaptcha/api.js");
include("./assets/js/perfect-scrollbar.min.js");
include("./assets/js/jquery.shuffle.min.js");
include("./assets/js/masonry.pkgd.min.js");
include("./assets/js/owl.carousel.min.js");
include("./assets/js/jquery.magnific-popup.min.js");
include("./assets/js/jquery.googlemap.js");
include("./assets/js/validator.js");
include("./assets/js/main.js");
