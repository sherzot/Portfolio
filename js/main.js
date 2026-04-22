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
    window.typedInstance = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 60,
      smartBackspace: false,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      startDelay: 1000,
      backDelay: 1500,
      fadeOut: false,
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

  // Portfolio isotope and filter
  const portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Projects show more / show less (compact by default)
  const $toggleProjectsBtn = $("#toggleProjectsBtn");
  if ($toggleProjectsBtn.length) {
    $("body").removeClass("projects-expanded");
    $toggleProjectsBtn.on("click", function () {
      const expanded = $(this).attr("data-expanded") === "true";
      const nextExpanded = !expanded;
      $(this).attr("data-expanded", String(nextExpanded));
      $("body").toggleClass("projects-expanded", nextExpanded);

      // Update button text with translations if available
      const currentLang = localStorage.getItem("selectedLanguage") || "ja";
      const labelKey = nextExpanded ? "projects-show-less" : "projects-show-more";
      const fallback = nextExpanded ? "Show less" : "Show more";
      const translations = window.__portfolioTranslations?.[currentLang] || {};
      $(this).text(translations[labelKey] || fallback);

      // Re-layout isotope after DOM visibility changes
      setTimeout(function () {
        portfolioIsotope.isotope("layout");
      }, 50);
    });
  }

  // Projects tech tags: show key tech chips + "+N more"
  function formatMoreLabel(lang, count) {
    const translations = window.__portfolioTranslations?.[lang] || {};
    const template =
      translations["projects-more-template"] ||
      (lang === "ja"
        ? "+{n}件"
        : lang === "uz"
        ? "+{n} ta"
        : "+{n} more");
    return template.replace("{n}", String(count));
  }

  function compactProjectTechTags() {
    const lang = localStorage.getItem("selectedLanguage") || "ja";
    const keyTechCount = 4;

    $(".project-card .tech-tags").each(function () {
      const $container = $(this);

      // Reset any previous run
      $container.find(".badge-more").remove();
      const $badges = $container.find(".badge").not(".badge-more");
      $badges.show();

      // Store full list for modal/popover use
      const allTech = $badges
        .map(function () {
          return $(this).text().trim();
        })
        .get()
        .filter(Boolean);
      $container.attr("data-all-tech", JSON.stringify(allTech));

      if ($badges.length <= keyTechCount) return;

      const hiddenCount = $badges.length - keyTechCount;
      $badges.slice(keyTechCount).hide();

      const $more = $("<span/>", {
        class: "badge badge-more",
        "data-more-count": String(hiddenCount),
        text: formatMoreLabel(lang, hiddenCount),
      });
      $container.append($more);
    });
  }

  // Expose updater for language switcher
  window.updateProjectMoreBadges = function (lang) {
    $(".project-card .tech-tags .badge-more").each(function () {
      const count = Number($(this).attr("data-more-count") || "0");
      $(this).text(formatMoreLabel(lang || "ja", count));
    });
  };

  // Run once on load
  compactProjectTechTags();

  // Click "+N more" to open modal with full tech stack
  $(document).on("click", ".project-card .tech-tags .badge-more", function () {
    const $more = $(this);
    const $container = $more.closest(".tech-tags");
    const raw = $container.attr("data-all-tech") || "[]";
    let allTech = [];
    try {
      allTech = JSON.parse(raw);
    } catch (e) {
      allTech = [];
    }

    const projectTitle =
      $more.closest(".project-card").find(".project-info h5").first().text() || "";

    const modalEl = document.getElementById("techMoreModal");
    const bodyEl = document.getElementById("techMoreModalBody");
    const projectEl = document.getElementById("techMoreModalProject");

    if (!modalEl || !bodyEl) return;

    // Populate project name
    if (projectEl) {
      projectEl.textContent = projectTitle.trim();
    }

    // Populate chips
    bodyEl.innerHTML = "";
    allTech.forEach((t) => {
      const span = document.createElement("span");
      span.className = "badge bg-light text-dark";
      span.textContent = t;
      bodyEl.appendChild(span);
    });

    if (typeof bootstrap !== "undefined" && bootstrap.Modal) {
      const instance = bootstrap.Modal.getOrCreateInstance(modalEl);
      instance.show();
    }
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
