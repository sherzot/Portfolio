(function ($) {
  "use strict";

  // Spinner
  const spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Back-to-top on scroll (navbar doim ko'rinadi)
  $(window).on("scroll.ui", function () {
    const st = $(this).scrollTop();
    if (st > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }

      // Collapse mobile menu after click
      const $navCollapse = $(".navbar-collapse");
      if ($navCollapse.hasClass("show")) {
        $navCollapse.collapse("hide");
      }
    }
  });

  // Back to top button click
  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Typed Initiate
  if ($(".typed-text-output").length === 1 && $(".typed-text").length === 1) {
    const typedStrings = $(".typed-text")
      .text()
      .split(",")
      .map(function (s) {
        return $.trim(s);
      })
      .filter(Boolean);
    window.typedInstance = new Typed(".typed-text-output", {
      strings: typedStrings,
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Modal Video
  let videoSrc;
  $(".btn-play").on("click", function () {
    videoSrc = $(this).data("src");
  });
  $("#videoModal").on("shown.bs.modal", function () {
    if (videoSrc) {
      $("#video").attr(
        "src",
        videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"
      );
    }
  });
  $("#videoModal").on("hide.bs.modal", function () {
    if (videoSrc) {
      $("#video").attr("src", videoSrc);
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Skills
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Portfolio carousel initialization
  let portfolioCarousel = null;
  
  function initPortfolioCarousel(filter = "*") {
    // Destroy existing carousel if it exists
    if (portfolioCarousel) {
      portfolioCarousel.trigger("destroy.owl.carousel");
      portfolioCarousel = null;
    }
    
    // Filter items
    $(".portfolio-item").each(function() {
      if (filter === "*" || $(this).hasClass(filter.replace(".", ""))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    
    // Initialize carousel
    portfolioCarousel = $(".portfolio-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 600,
      margin: 20,
      nav: true,
      dots: true,
      loop: false,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 }
      },
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ]
    });
  }
  
  // Initialize carousel on page load
  initPortfolioCarousel();
  
  // Portfolio filter
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    
    const filter = $(this).data("filter");
    initPortfolioCarousel(filter);
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
})(jQuery);
