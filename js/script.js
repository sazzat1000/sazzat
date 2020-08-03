$(document).ready(function () {
  // Smooth Scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  // Counter JS
  $(".counter").counterUp({
    time: 1000,
  });
  var testimonial_prev = $(".testimonial-prev");
  var testimonial_next = $(".testimonial-next");
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: testimonial_prev,
    nextArrow: testimonial_next,
  });
  new WOW().init();
});
