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

      // Prepare mailto link with form data
      const emailBody = `お名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}\n\nメッセージ:\n${message}\n\n---\nこのメッセージはポートフォリオサイトのコンタクトフォームから送信されました。`;

      const mailto = [
        "mailto:sherzoddeveloper@gmail.com",
        "?subject=" + encodeURIComponent("[Portfolio] " + subject),
        "&body=" + encodeURIComponent(emailBody),
      ].join("");

      // Show success message
      showAlert(
        "success",
        "メッセージの準備が完了しました！メールクライアントが開きます。"
      );

      // Open mail client (opens default email client with pre-filled data)
      setTimeout(function () {
        window.location.href = mailto;
      }, 1000);

      // Reset form after a delay
      setTimeout(function () {
        $form[0].reset();
      }, 2000);
    });
  });
})(jQuery);
