(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Typed Initiate
  if ($(".typed-text-output").length == 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Video Modal
  var videoSrc = "";
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
    const $carousel = $(".portfolio-carousel");
    
    // Destroy existing carousel if it exists
    if (portfolioCarousel && $carousel.hasClass('owl-loaded')) {
      try {
        portfolioCarousel.trigger("destroy.owl.carousel");
      } catch(e) {
        console.log("Carousel destroy error:", e);
      }
      portfolioCarousel = null;
    }
    
    // Clean up carousel container - remove owl classes
    $carousel.removeClass('owl-carousel owl-loaded owl-drag owl-grab');
    
    // Remove owl wrapper elements but preserve original items
    $carousel.find('.owl-stage-outer').each(function() {
      const $outer = $(this);
      $outer.find('.owl-stage').each(function() {
        const $stage = $(this);
        $stage.find('.owl-item').each(function() {
          const $item = $(this);
          $item.replaceWith($item.contents());
        });
        $stage.replaceWith($stage.contents());
      });
      $outer.replaceWith($outer.contents());
    });
    
    // Filter items - show/hide
    const filterClass = filter.replace(".", "");
    $(".portfolio-item").each(function() {
      const $item = $(this);
      if (filter === "*" || $item.hasClass(filterClass)) {
        $item.show();
      } else {
        $item.hide();
      }
    });
    
    // Wait a bit to ensure DOM is ready
    setTimeout(function() {
      // Initialize carousel
      portfolioCarousel = $carousel.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        fluidSpeed: true,
        dragEndSpeed: 500,
        margin: 20,
        nav: true,
        dots: true,
        loop: true,
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
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
      
      // Force go to first slide
      setTimeout(function() {
        if (portfolioCarousel) {
          portfolioCarousel.trigger('to.owl.carousel', 0);
        }
      }, 100);
    }, 100);
  }
  
  // Initialize carousel on page load
  initPortfolioCarousel();
  
  // Portfolio filter
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    
    const filter = $(this).data("filter");
    
    // Destroy carousel first to reset position
    if (portfolioCarousel) {
      try {
        portfolioCarousel.trigger("destroy.owl.carousel");
      } catch(e) {
        console.log("Filter destroy error:", e);
      }
      portfolioCarousel = null;
    }
    
    // Small delay to ensure destroy is complete, then reinitialize from start
    setTimeout(function() {
      initPortfolioCarousel(filter);
    }, 300);
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
