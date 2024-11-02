(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // protfolio filters
  $(window).on("load", function () {
    var t = $(".portfolio-container");
    t.isotope({
      filter: ".new",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
      }
    }), $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return t.isotope({
        filter: i,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1
        }
      }), !1
    });
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
