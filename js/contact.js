(function ($) {
  "use strict";

  $(function () {
    const $contactSection = $("#contact");
    const $form = $contactSection.find("form");
    if (!$form.length) return;

    function showAlert(type, message) {
      const $formMessage = $("#formMessage");
      const $successMessage = $("#successMessage");
      const $errorMessage = $("#errorMessage");

      // Hide both messages first
      $successMessage.hide();
      $errorMessage.hide();

      // Show the appropriate message
      if (type === "success") {
        // Update message text (keep the icon, replace text after it)
        const iconHtml = '<i class="fas fa-check-circle me-2"></i>';
        $successMessage.html(
          iconHtml + (message || "メッセージが正常に送信されました！")
        );
        $successMessage.show();
      } else {
        // For error or warning types, show error message
        // Update message text (keep the icon, replace text after it)
        const iconHtml = '<i class="fas fa-exclamation-triangle me-2"></i>';
        $errorMessage.html(
          iconHtml +
            (message || "エラーが発生しました。もう一度お試しください。")
        );
        $errorMessage.show();
      }

      // Show the message container
      $formMessage.show();

      // Scroll to message smoothly (only if element exists and is visible)
      if ($formMessage.length && $formMessage.offset()) {
        $("html, body").animate(
          {
            scrollTop: $formMessage.offset().top - 100,
          },
          500
        );
      }

      // Hide message after 5 seconds
      setTimeout(function () {
        $formMessage.fadeOut();
      }, 5000);
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
        showAlert("error", "すべての項目を入力してください。");
        return false;
      }
      if (!isValidEmail(email)) {
        showAlert("error", "有効なメールアドレスを入力してください。");
        return false;
      }

      // Disable submit button to prevent double submission
      const $submitBtn = $("#submitBtn");
      // Save original text if not already saved
      if (!$submitBtn.data("original-text")) {
        $submitBtn.data("original-text", $submitBtn.text());
      }
      $submitBtn.prop("disabled", true).text("送信中...");

      // Prepare FormData for Netlify Forms
      const formData = new FormData(this);
      formData.append("form-name", "contact");

      // Submit to Netlify Forms
      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Success - show success message
            showAlert(
              "success",
              "メッセージが正常に送信されました！24時間以内にご返信いたします。"
            );
            // Reset form
            $form[0].reset();
          } else {
            // Error - show error message
            showAlert(
              "error",
              "エラーが発生しました。もう一度お試しください。"
            );
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Error - show error message
          showAlert("error", "エラーが発生しました。もう一度お試しください。");
        })
        .finally(() => {
          // Re-enable submit button
          $submitBtn.prop("disabled", false);
          const submitText = $submitBtn.data("original-text") || "送信する";
          $submitBtn.text(submitText);
        });
    });
  });
})(jQuery);
