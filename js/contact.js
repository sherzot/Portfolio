(function ($) {
  "use strict";

  $(function () {
    const $contactSection = $("#contact");
    const $form = $contactSection.find("form");
    if (!$form.length) return;

    function showAlert(type, message) {
      $contactSection.find(".contact-alert").remove();
      const $alert = $("<div/>", {
        class: "contact-alert alert alert-" + type,
        role: "alert",
        text: message,
      });
      $form.before($alert);
    }

    function isValidEmail(email) {
      // Simple email regex for client-side validation
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    $form.on("submit", function (e) {
      e.preventDefault();

      const name = $.trim($("#name").val() || "");
      const email = $.trim($("#email").val() || "");
      const subject = $.trim($("#subject").val() || "");
      const message = $.trim($("#message").val() || "");

      // Basic validations - check if fields are actually filled
      if (name === "" || email === "" || subject === "" || message === "") {
        showAlert("warning", "Please fill in all fields.");
        return false;
      }
      if (!isValidEmail(email)) {
        showAlert("warning", "Please enter a valid email address.");
        return false;
      }

      // Demo success (no backend). Replace with AJAX as needed.
      showAlert("success", "Thanks! Your message has been prepared.");

      // Optional: prepare a mailto link to send via default client
      const mailto = [
        "mailto:sherzoddeveloper@gmail.com",
        "?subject=" + encodeURIComponent("[Portfolio] " + subject),
        "&body=" +
          encodeURIComponent(
            "From: " + name + " <" + email + ">\n\n" + message
          ),
      ].join("");

      // Open mail client in a new tab/window without navigating away
      window.open(mailto, "_blank");

      // Reset form after preparing the email
      this.reset();
    });
  });
})(jQuery);
