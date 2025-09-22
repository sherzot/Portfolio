// Netlify Forms Contact JavaScript
// ネットリファイフォーム対応のコンタクトフォーム

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
      if (!validateForm(name, email, subject, message)) {
        return;
      }

      // Netlify Forms用のデータを準備
      const netlifyData = new FormData();
      netlifyData.append("form-name", "contact");
      netlifyData.append("name", name);
      netlifyData.append("email", email);
      netlifyData.append("subject", subject);
      netlifyData.append("message", message);

      // Netlify Formsに送信
      fetch("/", {
        method: "POST",
        body: netlifyData,
      })
        .then((response) => {
          if (response.ok) {
            showMessage("success");
            this.reset();
          } else {
            showMessage("error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          showMessage("error");
        });
    });

  // フォームバリデーション
  document
    .getElementById("contactForm")
    .addEventListener("input", function (e) {
      validateInput(e.target);
    });
});

// フォームバリデーション関数
function validateForm(name, email, subject, message) {
  if (!name || !email || !subject || !message) {
    showMessage("error");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("error");
    return false;
  }

  return true;
}

// 入力バリデーション関数
function validateInput(input) {
  const value = input.value.trim();

  if (input.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      input.setCustomValidity("有効なメールアドレスを入力してください");
    } else {
      input.setCustomValidity("");
    }
  }

  if (input.required && !value) {
    input.setCustomValidity("この項目は必須です");
  } else if (input.required) {
    input.setCustomValidity("");
  }
}

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
