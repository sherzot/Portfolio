(function ($) {
  "use strict";

  $(function () {
    const $contactSection = $("#contact");
    const $form = $contactSection.find("form");
    if (!$form.length) return;

    // Get translation function
    function getTranslation(key, fallback) {
      const currentLang = localStorage.getItem("selectedLanguage") || "ja";
      const translations = {
        ja: {
          "contact-form-success-message":
            "メッセージが正常に送信されました！24時間以内にご返信いたします。",
          "contact-form-error-message":
            "エラーが発生しました。もう一度お試しください。",
          "contact-form-validation-all-fields":
            "すべての項目を入力してください。",
          "contact-form-validation-email":
            "有効なメールアドレスを入力してください。",
          "contact-form-submitting": "送信中...",
          "contact-form-submit": "送信する",
        },
        en: {
          "contact-form-success-message":
            "Message sent successfully! We will reply within 24 hours.",
          "contact-form-error-message": "An error occurred. Please try again.",
          "contact-form-validation-all-fields": "Please fill in all fields.",
          "contact-form-validation-email":
            "Please enter a valid email address.",
          "contact-form-submitting": "Sending...",
          "contact-form-submit": "Send Message",
        },
        uz: {
          "contact-form-success-message":
            "Xabar muvaffaqiyatli yuborildi! 24 soat ichida javob beramiz.",
          "contact-form-error-message":
            "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
          "contact-form-validation-all-fields":
            "Barcha maydonlarni to'ldiring.",
          "contact-form-validation-email": "To'g'ri email manzil kiriting.",
          "contact-form-submitting": "Yuborilmoqda...",
          "contact-form-submit": "Yuborish",
        },
      };
      return translations[currentLang]?.[key] || fallback || key;
    }

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
        const defaultMessage = getTranslation("contact-form-success-message");
        $successMessage.html(iconHtml + (message || defaultMessage));
        $successMessage.show();
      } else {
        // For error or warning types, show error message
        // Update message text (keep the icon, replace text after it)
        const iconHtml = '<i class="fas fa-exclamation-triangle me-2"></i>';
        const defaultMessage = getTranslation("contact-form-error-message");
        $errorMessage.html(iconHtml + (message || defaultMessage));
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
        showAlert(
          "error",
          getTranslation("contact-form-validation-all-fields")
        );
        return false;
      }
      if (!isValidEmail(email)) {
        showAlert("error", getTranslation("contact-form-validation-email"));
        return false;
      }

      // Disable submit button to prevent double submission
      const $submitBtn = $("#submitBtn");
      // Save original text if not already saved
      if (!$submitBtn.data("original-text")) {
        $submitBtn.data("original-text", $submitBtn.text());
      }
      $submitBtn
        .prop("disabled", true)
        .text(getTranslation("contact-form-submitting"));

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
              getTranslation("contact-form-success-message")
            );
            // Reset form
            $form[0].reset();
          } else {
            // Error - show error message
            showAlert("error", getTranslation("contact-form-error-message"));
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Error - show error message
          showAlert("error", getTranslation("contact-form-error-message"));
        })
        .finally(() => {
          // Re-enable submit button
          $submitBtn.prop("disabled", false);
          const submitText =
            $submitBtn.data("original-text") ||
            getTranslation("contact-form-submit");
          $submitBtn.text(submitText);
        });
    });
  });
})(jQuery);
