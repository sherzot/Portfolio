// Contact Form JavaScript
// コンタクトフォームの処理

document.addEventListener("DOMContentLoaded", function () {
  // フォームの送信イベントリスナー
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // バリデーション
      if (!name || !email || !subject || !message) {
        showMessage("error");
        return;
      }

      // メールアドレスの形式チェック
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage("error");
        return;
      }

      // メール本文を作成
      const emailBody = `
お名前: ${name}
メールアドレス: ${email}
件名: ${subject}

メッセージ:
${message}

---
このメッセージはポートフォリオサイトのコンタクトフォームから送信されました。
`;

      // mailtoリンクを作成
      const mailtoLink = `mailto:sherzoddeveloper@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`;

      // メールクライアントを開く
      window.location.href = mailtoLink;

      // 成功メッセージを表示
      showMessage("success");

      // フォームをリセット
      this.reset();
    });

  // フォームバリデーション
  document
    .getElementById("contactForm")
    .addEventListener("input", function (e) {
      const input = e.target;
      const value = input.value.trim();

      // カスタムバリデーションメッセージをクリア
      input.setCustomValidity("");

      // 基本的なバリデーション
      if (input.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          input.setCustomValidity("有効なメールアドレスを入力してください");
        }
      }

      if (input.required && !value) {
        input.setCustomValidity("この項目は必須です");
      }
    });
});

// メッセージ表示関数
function showMessage(type) {
  const formMessage = document.getElementById("formMessage");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  // 全てのメッセージを隠す
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  // 指定されたメッセージを表示
  if (type === "success") {
    successMessage.style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }

  // メッセージを表示
  formMessage.style.display = "block";

  // 5秒後にメッセージを隠す
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
}
