// Language Switcher JavaScript
// 多言語対応システム

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = localStorage.getItem("selectedLanguage") || "ja";
    this.translations = {
      ja: {
        // Navigation
        "nav-home": "ホーム",
        "nav-about": "私について",
        "nav-skills": "スキル",
        "nav-services": "サービス",
        "nav-projects": "プロジェクト",
        "nav-testimonials": "お客様の声",
        "nav-contact": "お問い合わせ",

        // Hero Section
        "hero-greeting": "こんにちは、私は",
        "hero-name": "シェルゾド",
        "hero-title": "フルスタックエンジニア",
        "hero-description":
          "フロントエンドからバックエンドまで、Webアプリケーションの開発全工程を担当できるフルスタックエンジニアです。",
        "hero-hire-btn": "お問い合わせ",
        "hero-download-btn": "履歴書ダウンロード",

        // About Section
        "about-title": "フルスタックエンジニアとしての実務経験",
        "about-year": "年"
        "about-description":
          "フロントエンドからバックエンドまで、Webアプリケーションの開発全工程を担当できるフルスタックエンジニアです。ユーザーエクスペリエンスを重視した設計と、スケーラブルなシステム構築を得意としています。",
        "about-services-title": "提供サービス",
        "about-service-1":
          "フロントエンド開発（React, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS）",
        "about-service-2": "バックエンド開発（PHP, Laravel, Node.js, Golang）",
        "about-service-3": "データベース設計・最適化（MySQL, SQL Server）",
        "about-service-4":
          "インフラ設計・運用（AWS, GitHub Actions, Docker, Kubernetes）",
        "about-stats-1": "満足いただいたクライアント",
        "about-stats-2": "完了したプロジェクト",
        "about-stats-1-desc":
          "お客様のニーズに応じた高品質なWebアプリケーションを提供し、多くの方からご満足いただいております。",
        "about-stats-2-desc":
          "フロントエンドからバックエンドまで、多様なプロジェクトを成功に導いてきました。",
        "about-read-more": "詳しく見る",

        // Skills Section
        "skills-title": "スキル & 経験",
        "skills-description":
          "フロントエンドからバックエンド、インフラまで幅広い技術領域での開発経験があります。最新技術の習得と実践的なアプリケーション開発を継続的に行っています。",
        "skills-tab-1": "技術スキル",
        "skills-tab-2": "職歴",
        "skills-tab-3": "学歴",
        "skills-experience-1-title": "フルスタックエンジニア",
        "skills-experience-1-period": "2021 - 現在",
        "skills-experience-1-company": "フリーランス",
        "skills-experience-2-title": "Web開発者",
        "skills-experience-2-period": "2020 - 2021",
        "skills-experience-2-company": "テクノロジー会社",
        "skills-experience-3-title": "フロントエンド開発者",
        "skills-experience-3-period": "2019 - 2020",
        "skills-experience-3-company": "デジタルエージェンシー",
        "skills-experience-4-title": "システム開発者",
        "skills-experience-4-period": "2018 - 2019",
        "skills-experience-4-company": "IT企業",
        "skills-education-1-title": "コンピュータサイエンス",
        "skills-education-1-period": "2016 - 2020",
        "skills-education-1-institution": "工科大学",
        "skills-education-2-title": "Web開発コース",
        "skills-education-2-period": "2019 - 2020",
        "skills-education-2-institution": "オンライン教育機関",
        "skills-education-3-title": "データベース設計",
        "skills-education-3-period": "2018 - 2019",
        "skills-education-3-institution": "技術研修センター",
        "skills-education-4-title": "クラウド技術認定",
        "skills-education-4-period": "2020 - 2021",
        "skills-education-4-institution": "AWS認定プログラム",

        // Services Section
        "services-title": "提供サービス",
        "services-hire-btn": "お問い合わせ",
        "services-service-1-title": "フロントエンド開発",
        "services-service-1-desc":
          "React、TypeScript、JavaScriptを使用してモダンでレスポンシブなWebアプリケーションを開発します。ユーザーエクスペリエンスを重視したUI/UXデザインを提供いたします。",
        "services-service-2-title": "バックエンド開発",
        "services-service-2-desc":
          "PHP、Laravel、Node.js、Golangを使用してスケーラブルで安全なサーバーサイドアプリケーションを開発します。API設計からデータベース設計まで対応いたします。",
        "services-service-3-title": "データベース設計",
        "services-service-3-desc":
          "MySQL、SQL Serverを使用して効率的でスケーラブルなデータベース設計を行います。データの整合性とパフォーマンスを重視した最適化を提供いたします。",
        "services-service-4-title": "インフラ・運用",
        "services-service-4-desc":
          "AWS、Docker、Kubernetes、GitHub Actionsを使用してクラウドインフラの設計・構築・運用を行います。CI/CDパイプラインの構築からスケーラブルなシステム運用まで対応いたします。",
        "services-price": "料金は 要相談",

        // Projects Section
        "projects-title": "プロジェクト",
        "projects-filter-all": "全てのプロジェクト",
        "projects-filter-frontend": "フロントエンド",
        "projects-filter-backend": "バックエンド",
        "projects-filter-fullstack": "フルスタック",

        // Testimonials Section
        "testimonials-title": "お客様の声",
        "testimonial-1":
          "ReactとLaravelを使用したフルスタック開発で、私たちのビジネス要件を完璧に満たすWebアプリケーションを作成していただきました。技術力とコミュニケーション能力の高さに大変満足しています。",
        "testimonial-1-name": "田中 太郎",
        "testimonial-1-position": "IT企業 CEO",
        "testimonial-2":
          "AWSとDockerを使用したクラウドインフラの構築から、TypeScriptでのフロントエンド開発まで、幅広い技術領域で高品質なサービスを提供していただきました。プロジェクト管理も非常に優秀です。",
        "testimonial-2-name": "佐藤 花子",
        "testimonial-2-position": "スタートアップ CTO",
        "testimonial-3":
          "Node.jsとMySQLを使用したAPI開発から、Kubernetesでのデプロイメントまで、エンドツーエンドの開発を担当していただきました。パフォーマンスとセキュリティの両面で期待を上回る結果でした。",
        "testimonial-3-name": "山田 次郎",
        "testimonial-3-position": "エンタープライズ 開発責任者",

        // Contact Section
        "contact-title": "お問い合わせ",
        "contact-email-btn": "メール送信",
        "contact-location": "所在地:",
        "contact-phone": "電話番号:",
        "contact-email": "メールアドレス:",
        "contact-sns": "SNS:",
        "contact-form-desc":
          "フルスタック開発に関するご相談やお見積もりをご希望の方は、以下のフォームよりお気軽にお問い合わせください。24時間以内にご返信いたします。",
        "contact-form-name": "お名前",
        "contact-form-email": "メールアドレス",
        "contact-form-subject": "件名",
        "contact-form-message": "プロジェクトの詳細をお聞かせください",
        "contact-form-submit": "送信する",
        "contact-success": "メッセージが正常に送信されました！",
        "contact-error": "エラーが発生しました。もう一度お試しください。",
        "contact-location-value": "東京都板橋区",
        "contact-phone-value": "+81 70-9099-9894",
        "contact-email-value": "sherzoddeveloper@gmail.com",

        // Footer
        "footer-copyright": "All Right Reserved.",
      },

      en: {
        // Navigations
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-testimonials": "Testimonials",
        "nav-contact": "Contact",

        // Hero Section
        "hero-greeting": "Hello, I am",
        "hero-name": "Sherzot",
        "hero-title": "Full Stack Engineer",
        "hero-description":
          "I am a Full Stack Engineer who can handle all aspects of web application development from frontend to backend. I specialize in user experience-focused design and scalable system construction.",
        "hero-hire-btn": "Contact Me",
        "hero-download-btn": "Download CV",

        // About Section
        "about-title": "Professional Experience as a Full Stack Engineer",
        "about-year": "Year"
        "about-description":
          "I am a Full Stack Engineer who can handle all aspects of web application development from frontend to backend. I specialize in user experience-focused design and scalable system construction.",
        "about-services-title": "Services Offered",
        "about-service-1":
          "Frontend Development (React, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS)",
        "about-service-2":
          "Backend Development (PHP, Laravel, Node.js, Golang)",
        "about-service-3": "Database Design & Optimization (MySQL, SQL Server)",
        "about-service-4":
          "Infrastructure Design & Operations (AWS, GitHub Actions, Docker, Kubernetes)",
        "about-stats-1": "Satisfied Clients",
        "about-stats-2": "Completed Projects",
        "about-stats-1-desc":
          "We provide high-quality web applications that meet our clients' needs and have received great satisfaction from many people.",
        "about-stats-2-desc":
          "We have successfully led diverse projects from frontend to backend.",
        "about-read-more": "Read More",

        // Skills Section
        "skills-title": "Skills & Experience",
        "skills-description":
          "I have development experience in a wide range of technical areas from frontend to backend and infrastructure. I continuously learn new technologies and develop practical applications.",
        "skills-tab-1": "Technical Skills",
        "skills-tab-2": "Experience",
        "skills-tab-3": "Education",
        "skills-experience-1-title": "Full Stack Engineer",
        "skills-experience-1-period": "2021 - Present",
        "skills-experience-1-company": "Freelance",
        "skills-experience-2-title": "Web Developer",
        "skills-experience-2-period": "2020 - 2021",
        "skills-experience-2-company": "Technology Company",
        "skills-experience-3-title": "Frontend Developer",
        "skills-experience-3-period": "2019 - 2020",
        "skills-experience-3-company": "Digital Agency",
        "skills-experience-4-title": "System Developer",
        "skills-experience-4-period": "2018 - 2019",
        "skills-experience-4-company": "IT Company",
        "skills-education-1-title": "Computer Science",
        "skills-education-1-period": "2016 - 2020",
        "skills-education-1-institution": "Technical University",
        "skills-education-2-title": "Web Development Course",
        "skills-education-2-period": "2019 - 2020",
        "skills-education-2-institution": "Online Education",
        "skills-education-3-title": "Database Design",
        "skills-education-3-period": "2018 - 2019",
        "skills-education-3-institution": "Technical Training Center",
        "skills-education-4-title": "Cloud Technology Certification",
        "skills-education-4-period": "2020 - 2021",
        "skills-education-4-institution": "AWS Certification Program",

        // Services Section
        "services-title": "Services Offered",
        "services-hire-btn": "Contact Me",
        "services-service-1-title": "Frontend Development",
        "services-service-1-desc":
          "I develop modern and responsive web applications using React, TypeScript, and JavaScript. I provide UI/UX design that prioritizes user experience.",
        "services-service-2-title": "Backend Development",
        "services-service-2-desc":
          "I develop scalable and secure server-side applications using PHP, Laravel, Node.js, and Golang. I handle everything from API design to database design.",
        "services-service-3-title": "Database Design",
        "services-service-3-desc":
          "I design efficient and scalable databases using MySQL and SQL Server. I provide optimization that prioritizes data integrity and performance.",
        "services-service-4-title": "Infrastructure & Operations",
        "services-service-4-desc":
          "I design, build, and operate cloud infrastructure using AWS, Docker, Kubernetes, and GitHub Actions. I handle everything from CI/CD pipeline construction to scalable system operations.",
        "services-price": "Price on Request",

        // Projects Section
        "projects-title": "Projects",
        "projects-filter-all": "All Projects",
        "projects-filter-frontend": "Frontend",
        "projects-filter-backend": "Backend",
        "projects-filter-fullstack": "Full Stack",

        // Testimonials Section
        "testimonials-title": "Client Testimonials",
        "testimonial-1":
          "Using React and Laravel for full-stack development, you created a web application that perfectly met our business requirements. We are very satisfied with your technical skills and communication abilities.",
        "testimonial-1-name": "Tanaka Taro",
        "testimonial-1-position": "IT Company CEO",
        "testimonial-2":
          "From cloud infrastructure construction using AWS and Docker to frontend development with TypeScript, you provided high-quality services across a wide range of technical areas. Your project management is also excellent.",
        "testimonial-2-name": "Sato Hanako",
        "testimonial-2-position": "Startup CTO",
        "testimonial-3":
          "From API development using Node.js and MySQL to deployment with Kubernetes, you handled end-to-end development. The results exceeded expectations in both performance and security.",
        "testimonial-3-name": "Yamada Jiro",
        "testimonial-3-position": "Enterprise Development Manager",

        // Contact Section
        "contact-title": "Contact",
        "contact-email-btn": "Send Email",
        "contact-location": "Location:",
        "contact-phone": "Phone:",
        "contact-email": "Email:",
        "contact-sns": "SNS:",
        "contact-form-desc":
          "If you would like to consult or get a quote regarding full-stack development, please feel free to contact us using the form below. We will reply within 24 hours.",
        "contact-form-name": "Your Name",
        "contact-form-email": "Email Address",
        "contact-form-subject": "Subject",
        "contact-form-message": "Please tell us about your project details",
        "contact-form-submit": "Send Message",
        "contact-success": "Message sent successfully!",
        "contact-error": "An error occurred. Please try again.",
        "contact-location-value": "Itabashi City, Tokyo",
        "contact-phone-value": "+81 70-9099-9894",
        "contact-email-value": "sherzoddeveloper@gmail.com",

        // Footer
        "footer-copyright": "All Right Reserved.",
      },

      uz: {
        // Navigation
        "nav-home": "Bosh sahifa",
        "nav-about": "Men haqimda",
        "nav-skills": "Ko'nikmalar",
        "nav-services": "Xizmatlar",
        "nav-projects": "Loyihalar",
        "nav-testimonials": "Mijozlar fikri",
        "nav-contact": "Aloqa",

        // Hero Section
        "hero-greeting": "Salom, men",
        "hero-name": "Sherzot",
        "hero-title": "Full Stack Muhandis",
        "hero-description":
          "Men frontend dan backend gacha, web ilovalarini ishlab chiqishning barcha bosqichlarini boshqarishga qodir Full Stack Muhandisiman. Foydalanuvchi tajribasiga e'tibor qaratgan dizayn va kengaytiriladigan tizimlar qurishda ixtisoslashganman.",
        "hero-hire-btn": "Men bilan bog'lanish",
        "hero-download-btn": "Rezyume yuklab olish",

        // About Section
        "about-title": "Full Stack Muhandis sifatida professional tajriba",
        "about-year": "Yil"
        "about-description":
          "Men frontend dan backend gacha, web ilovalarini ishlab chiqishning barcha bosqichlarini boshqarishga qodir Full Stack Muhandisiman. Foydalanuvchi tajribasiga e'tibor qaratgan dizayn va kengaytiriladigan tizimlar qurishda ixtisoslashganman.",
        "about-services-title": "Taqdim etiladigan xizmatlar",
        "about-service-1":
          "Frontend ishlab chiqish (React, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS)",
        "about-service-2":
          "Backend ishlab chiqish (PHP, Laravel, Node.js, Golang)",
        "about-service-3":
          "Ma'lumotlar bazasi dizayni va optimallashtirish (MySQL, SQL Server)",
        "about-service-4":
          "Infratuzilma dizayni va boshqaruvi (AWS, GitHub Actions, Docker, Kubernetes)",
        "about-stats-1": "Mamnun mijozlar",
        "about-stats-2": "Yakunlangan loyihalar",
        "about-stats-1-desc":
          "Mijozlarimizning ehtiyojlariga javob beradigan yuqori sifatli web ilovalar taqdim etamiz va ko'plab odamlardan mamnuniyat olganmiz.",
        "about-stats-2-desc":
          "Frontend dan backend gacha turli loyihalarni muvaffaqiyatli boshqarganmiz.",
        "about-read-more": "Batafsil",

        // Skills Section
        "skills-title": "Ko'nikmalar va tajriba",
        "skills-description":
          "Frontend dan backend va infratuzilma gacha keng texnologik sohalarda ishlab chiqish tajribasiga egaman. Yangi texnologiyalarni o'rganish va amaliy ilovalar yaratishda davom etaman.",
        "skills-tab-1": "Texnik ko'nikmalar",
        "skills-tab-2": "Tajriba",
        "skills-tab-3": "Ta'lim",
        "skills-experience-1-title": "Full Stack Muhandis",
        "skills-experience-1-period": "2021 - Hozirgi",
        "skills-experience-1-company": "Freelance",
        "skills-experience-2-title": "Web dasturchi",
        "skills-experience-2-period": "2020 - 2021",
        "skills-experience-2-company": "Texnologiya kompaniyasi",
        "skills-experience-3-title": "Frontend dasturchi",
        "skills-experience-3-period": "2019 - 2020",
        "skills-experience-3-company": "Raqamli agentlik",
        "skills-experience-4-title": "Tizim dasturchi",
        "skills-experience-4-period": "2018 - 2019",
        "skills-experience-4-company": "IT kompaniya",
        "skills-education-1-title": "Kompyuter fanlari",
        "skills-education-1-period": "2016 - 2020",
        "skills-education-1-institution": "Texnika universiteti",
        "skills-education-2-title": "Web ishlab chiqish kursi",
        "skills-education-2-period": "2019 - 2020",
        "skills-education-2-institution": "Onlayn ta'lim",
        "skills-education-3-title": "Ma'lumotlar bazasi dizayni",
        "skills-education-3-period": "2018 - 2019",
        "skills-education-3-institution": "Texnik o'quv markazi",
        "skills-education-4-title": "Bulut texnologiyalari sertifikati",
        "skills-education-4-period": "2020 - 2021",
        "skills-education-4-institution": "AWS sertifikat dasturi",

        // Services Section
        "services-title": "Taqdim etiladigan xizmatlar",
        "services-hire-btn": "Men bilan bog'lanish",
        "services-service-1-title": "Frontend ishlab chiqish",
        "services-service-1-desc":
          "React, TypeScript, JavaScript ishlatib zamonaviy va responsive web ilovalar yarataman. Foydalanuvchi tajribasiga e'tibor qaratgan UI/UX dizayn taqdim etaman.",
        "services-service-2-title": "Backend ishlab chiqish",
        "services-service-2-desc":
          "PHP, Laravel, Node.js, Golang ishlatib kengaytiriladigan va xavfsiz server-side ilovalar yarataman. API dizaynidan ma'lumotlar bazasi dizaynigacha barchasini boshqaraman.",
        "services-service-3-title": "Ma'lumotlar bazasi dizayni",
        "services-service-3-desc":
          "MySQL, SQL Server ishlatib samarali va kengaytiriladigan ma'lumotlar bazalari yarataman. Ma'lumotlar yaxlitligi va ishlash tezligiga e'tibor qaratgan optimallashtirish taqdim etaman.",
        "services-service-4-title": "Infratuzilma va boshqaruv",
        "services-service-4-desc":
          "AWS, Docker, Kubernetes, GitHub Actions ishlatib bulut infratuzilmasini loyihalash, qurish va boshqarishni amalga oshiraman. CI/CD pipeline qurishdan kengaytiriladigan tizim boshqaruvigacha barchasini boshqaraman.",
        "services-price": "Narx kelishiladi",

        // Projects Section
        "projects-title": "Loyihalar",
        "projects-filter-all": "Barcha loyihalar",
        "projects-filter-frontend": "Frontend",
        "projects-filter-backend": "Backend",
        "projects-filter-fullstack": "Full Stack",

        // Testimonials Section
        "testimonials-title": "Mijozlar fikri",
        "testimonial-1":
          "React va Laravel ishlatib full-stack ishlab chiqishda bizning biznes talablarimizni mukammal qondiradigan web ilova yaratdingiz. Texnik qobiliyatingiz va muloqot qobiliyatingizning yuqoriligi bilan juda mamnunmiz.",
        "testimonial-1-name": "Tanaka Taro",
        "testimonial-1-position": "IT kompaniya CEO",
        "testimonial-2":
          "AWS va Docker ishlatib bulut infratuzilmasini qurishdan TypeScript da frontend ishlab chiqishgacha, keng texnologik sohalarda yuqori sifatli xizmat taqdim etdingiz. Loyiha boshqaruvi ham juda ajoyib.",
        "testimonial-2-name": "Sato Hanako",
        "testimonial-2-position": "Startup CTO",
        "testimonial-3":
          "Node.js va MySQL ishlatib API ishlab chiqishdan Kubernetes da deploy qilishgacha, end-to-end ishlab chiqishni boshqardingiz. Ishlash tezligi va xavfsizlik jihatidan kutilgan natijalardan ham yaxshiroq natija oldik.",
        "testimonial-3-name": "Yamada Jiro",
        "testimonial-3-position": "Enterprise ishlab chiqish menejeri",

        // Contact Section
        "contact-title": "Aloqa",
        "contact-email-btn": "Email yuborish",
        "contact-location": "Manzil:",
        "contact-phone": "Telefon:",
        "contact-email": "Email:",
        "contact-sns": "Ijtimoiy tarmoqlar:",
        "contact-form-desc":
          "Full-stack ishlab chiqish bo'yicha maslahat yoki narx olishni xohlasangiz, quyidagi form orqali bemalol murojaat qiling. 24 soat ichida javob beramiz.",
        "contact-form-name": "Ismingiz",
        "contact-form-email": "Email manzili",
        "contact-form-subject": "Mavzu",
        "contact-form-message": "Loyiha tafsilotlari haqida batafsil yozing",
        "contact-form-submit": "Yuborish",
        "contact-success": "Xabar muvaffaqiyatli yuborildi!",
        "contact-error": "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
        "contact-location-value": "Itabashi shahri, Tokyo",
        "contact-phone-value": "+81 70-9099-9894",
        "contact-email-value": "sherzoddeveloper@gmail.com",

        // Footer
        "footer-copyright": "Barcha huquqlar himoyalangan.",
      },
    };

    this.init();
  }

  init() {
    this.loadLanguage();
    this.bindEvents();
  }

  bindEvents() {
    // Language switcher events
    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-lang]")) {
        e.preventDefault();
        const lang = e.target.getAttribute("data-lang");
        this.switchLanguage(lang);
      }
    });
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem("selectedLanguage", lang);
    this.loadLanguage();
  }

  loadLanguage() {
    const translations = this.translations[this.currentLanguage];

    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-placeholder");
      if (translations[key]) {
        element.placeholder = translations[key];
      }
    });

    // Update typed text for hero title
    this.updateTypedText(translations);

    // Update current language display
    const currentLangElement = document.getElementById("currentLang");
    if (currentLangElement) {
      const langNames = {
        ja: "日本語",
        en: "English",
        uz: "O'zbek",
      };
      currentLangElement.textContent = langNames[this.currentLanguage];
    }

    // Update page direction for RTL languages if needed
    document.documentElement.setAttribute("lang", this.currentLanguage);
  }

  updateTypedText(translations) {
    const typedTextElement = document.querySelector(".typed-text");
    const typedOutputElement = document.querySelector(".typed-text-output");

    if (typedTextElement && typedOutputElement && translations["hero-title"]) {
      // Update the hidden typed-text element
      typedTextElement.textContent = translations["hero-title"];

      // Destroy existing typed instance if it exists
      if (window.typedInstance) {
        window.typedInstance.destroy();
      }

      // Reinitialize typed with new text
      if (typeof Typed !== "undefined") {
        window.typedInstance = new Typed(".typed-text-output", {
          strings: [translations["hero-title"]],
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true,
        });
      }
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LanguageSwitcher();
});
