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
        "hero-name": "ムスルモノフ　シェルゾト",
        "hero-location": "日本＆ウズベキスタン",
        "hero-title": "フルスタックエンジニア",
        "hero-description":
          "フロントエンドからバックエンドまで、Webアプリケーションの開発全工程を担当できるフルスタックエンジニアです。",
        "hero-hire-btn": "お問い合わせ",
        "hero-download-btn": "履歴書ダウンロード",

        // Technology Categories
        "tech-frontend": "フロントエンド技術",
        "tech-backend": "バックエンド技術",
        "tech-database": "データベース技術",
        "tech-cloud": "クラウド・DevOps",
        "tech-ai": "AI・ツール",
        "tech-design": "デザイン・OS",

        // About Section
        "about-title": "フルスタックエンジニアとしての実務経験",
        "about-year": "年",
        "about-description":
          "フロントエンドからバックエンドまで、Webアプリケーションの開発全工程を担当できるフルスタックエンジニアです。ユーザーエクスペリエンスを重視した設計と、スケーラブルなシステム構築を得意としています。",
        "about-services-title": "提供サービス",
        "about-service-1":
          "フロントエンド開発（React, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS）",
        "about-service-2": "バックエンド開発（PHP, Laravel, Node.js, Golang）",
        "about-service-3": "データベース設計・最適化（MySQL, SQL Server）",
        "about-service-4":
          "インフラ設計・運用（AWS, GitHub Actions, Docker, Kubernetes）",
        "about-service-5": "AI・ツール（Vs Code, Cursor, Codex, ChatGPT）",
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
        "skills-experience-1-title": "情報技術部門主任専門家",
        "skills-experience-1-period": "2021年6月1日 - 2022年4月13日",
        "skills-experience-1-company":
          "サマルカンド市「イシュガ・マルハマット」モノセンター",
        "skills-experience-1-achievements": "主な成果とプロジェクト:",
        "skills-experience-1-achievement-1":
          "3名のチームを管理し、会社のITインフラをゼロから構築",
        "skills-experience-1-achievement-2":
          "公式ウェブサイト開発（2021.07-2021.09）- WordPress、モバイル対応、3ヶ月で訪問者5,000+人達成",
        "skills-experience-1-achievement-3":
          "オンライン教育プラットフォーム（2021.10-2022.01）- 100名同時利用、コース管理システム開発",
        "skills-experience-1-achievement-4":
          "「Job Matching」システム（2022.02-2022.03）- 求職者と求人企業のマッチング、200+応募処理、90%満足度",
        "skills-experience-1-tech": "使用技術:",
        "skills-experience-1-tech-list":
          "WordPress, PHP, MySQL, Linux, Windows, HTML, CSS, JavaScript",
        "skills-experience-2-title": "フルスタックエンジニア",
        "skills-experience-2-period": "2024年4月1日 - 2025年10月16日",
        "skills-experience-2-company": "株式会社リス（Ris Co., Ltd）",
        "skills-experience-2-achievements": "主なプロジェクトと成果:",
        "skills-experience-2-achievement-1":
          "企業ウェブサイト更新・技術サポート - サイトトラフィック25%増加、データベース自動化",
        "skills-experience-2-achievement-2":
          "「Shigoto Navi」求人マッチングシステム刷新 - 日次応募数8件達成、99.9%システム安定性",
        "skills-experience-2-achievement-3":
          "レガシーシステム近代化 - SHIFT JISからUTF-8変換、内部業務30%効率化",
        "skills-experience-2-tech": "使用技術:",
        "skills-experience-2-tech-list":
          "HTML5, CSS3, Bootstrap, JavaScript, ASP, PHP (Laravel), Node.js, MySQL, SQL Server, AWS (EC2, RDS), Docker, Kubernetes, Linux, Windows Server",
        "skills-education-1-title": "レスリング・柔道",
        "skills-education-1-period": "2012 - 2018",
        "skills-education-1-institution":
          "サマルカンド・オリンピック予備スポーツ専門学校",
        "skills-education-2-title": "コンピュータ工学・技術",
        "skills-education-2-period": "2020 - 2021",
        "skills-education-2-institution":
          "サマルカンド市職業訓練センター（KOICA）",
        "skills-education-3-title": "日本語",
        "skills-education-3-period": "2022 - 2023",
        "skills-education-3-institution":
          "春日日本語学院（Kasuga Nihongo Gakuin）",
        "skills-education-4-title": "システム工学・ビジネス",
        "skills-education-4-period": "2023 - 2025",
        "skills-education-4-institution":
          "中野スクールオブビジネス（Nakano School of Business）",

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
        "projects-filter-web": "ウェブサイト",
        "projects-filter-platform": "プラットフォーム",
        "projects-filter-system": "システム",

        // Project Details
        "project-1-title": "公式ウェブサイト",
        "project-1-desc": "WordPress、モバイル対応、3ヶ月で訪問者5,000+人達成",
        "project-2-title": "オンライン教育プラットフォーム",
        "project-2-desc": "100名同時利用、コース管理システム開発",
        "project-3-title": "求職者・求人企業マッチングシステム",
        "project-3-desc": "200+応募処理、90%満足度達成",
        "project-4-title": "「Shigoto Navi」求人マッチングシステム刷新",
        "project-4-desc": "日次応募数8件達成、99.9%システム安定性",
        "project-5-title": "企業ウェブサイト更新・技術サポート",
        "project-5-desc": "サイトトラフィック25%増加、データベース自動化",
        "project-6-title": "「Shigoto Navi」ランディングページ",
        "project-6-desc":
          "新しく構築された求人マッチングシステム用ランディングページ",
        "project-7-title": "レガシーシステム近代化",
        "project-7-desc": "SHIFT JISからUTF-8変換、内部業務30%効率化",
        "project-8-title": "政府機関向け求職者・求人企業マッチングシステム",
        "project-8-desc": "政府機関向けの求職者と求人企業を結ぶシステム",
        "project-9-title": "JobMatcher Platform",
        "project-9-desc":
          "雇用主と求職者をつなぐプラットフォーム | Go microservices architecture",
        "project-10-title": "TrustFlow CRM v3.0",
        "project-10-desc":
          "AI-powered, multi-tenant CRM system | Laravel Filament PHP Docker",

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
        "contact-form-submitting": "送信中...",
        "contact-form-success-message":
          "メッセージが正常に送信されました！24時間以内にご返信いたします。",
        "contact-form-error-message":
          "エラーが発生しました。もう一度お試しください。",
        "contact-form-validation-all-fields":
          "すべての項目を入力してください。",
        "contact-form-validation-email":
          "有効なメールアドレスを入力してください。",
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
        "hero-name": "MUSURMONOV SHERZOT",
        "hero-location": "Japan & Uzbekistan",
        "hero-title": "Full Stack Engineer",
        "hero-description":
          "I am a Full Stack Engineer who can handle all aspects of web application development from frontend to backend. I specialize in user experience-focused design and scalable system construction.",
        "hero-hire-btn": "Contact Me",
        "hero-download-btn": "Download CV",

        // Technology Categories
        "tech-frontend": "Frontend Technologies",
        "tech-backend": "Backend Technologies",
        "tech-database": "Database Technologies",
        "tech-cloud": "Cloud & DevOps",
        "tech-ai": "AI & Tools",
        "tech-design": "Design & OS",

        // About Section
        "about-title": "Professional Experience as a Full Stack Engineer",
        "about-year": "Year",
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
        "about-service-5": "AI・Tools（Vs Code, Cursor, Codex, ChatGPT）",
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
        "skills-experience-1-title": "Senior IT Specialist",
        "skills-experience-1-period": "June 1, 2021 - April 13, 2022",
        "skills-experience-1-company":
          'Samarkand City "Ishga Marhamat" Monocenter',
        "skills-experience-1-achievements": "Key Achievements and Projects:",
        "skills-experience-1-achievement-1":
          "Managed a 3-person team and built company IT infrastructure from scratch",
        "skills-experience-1-achievement-2":
          "Official Website Development (2021.07-2021.09) - WordPress, mobile responsive, achieved 5,000+ visitors in 3 months",
        "skills-experience-1-achievement-3":
          "Online Education Platform (2021.10-2022.01) - 100 concurrent users, course management system development",
        "skills-experience-1-achievement-4":
          '"Job Matching" System (2022.02-2022.03) - Job seeker and employer matching, processed 200+ applications, 90% satisfaction rate',
        "skills-experience-1-tech": "Technologies Used:",
        "skills-experience-1-tech-list":
          "WordPress, PHP, MySQL, Linux, Windows, HTML, CSS, JavaScript",
        "skills-experience-2-title": "Full Stack Engineer",
        "skills-experience-2-period": "April 1, 2024 - October 16, 2025",
        "skills-experience-2-company": "Ris Co., Ltd",
        "skills-experience-2-achievements": "Key Projects and Results:",
        "skills-experience-2-achievement-1":
          "Corporate Website Update & Technical Support - 25% increase in site traffic, database automation",
        "skills-experience-2-achievement-2":
          '"Shigoto Navi" Job Matching System Renewal - Achieved 8 daily applications, 99.9% system stability',
        "skills-experience-2-achievement-3":
          "Legacy System Modernization - SHIFT JIS to UTF-8 conversion, 30% internal process efficiency improvement",
        "skills-experience-2-tech": "Technologies Used:",
        "skills-experience-2-tech-list":
          "HTML5, CSS3, Bootstrap, JavaScript, ASP, PHP (Laravel), Node.js, MySQL, SQL Server, AWS (EC2, RDS), Docker, Kubernetes, Linux, Windows Server",
        "skills-education-1-title": "Wrestling & Judo",
        "skills-education-1-period": "2012 - 2018",
        "skills-education-1-institution":
          "Samarkand Olympic Reserve Sports College",
        "skills-education-2-title": "Computer Engineering & Technology",
        "skills-education-2-period": "2020 - 2021",
        "skills-education-2-institution":
          "Samarkand City Vocational Training Center (KOICA)",
        "skills-education-3-title": "Japanese Language",
        "skills-education-3-period": "2022 - 2023",
        "skills-education-3-institution": "Kasuga Nihongo Gakuin",
        "skills-education-4-title": "Systems Engineering & Business",
        "skills-education-4-period": "2023 - 2025",
        "skills-education-4-institution": "Nakano School of Business",

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
        "projects-filter-web": "Websites",
        "projects-filter-platform": "Platforms",
        "projects-filter-system": "Systems",

        // Project Details
        "project-1-title": "Official Website",
        "project-1-desc":
          "WordPress, mobile responsive, achieved 5,000+ visitors in 3 months",
        "project-2-title": "Online Education Platform",
        "project-2-desc":
          "100 concurrent users, course management system development",
        "project-3-title": "Job Seeker-Employer Matching System",
        "project-3-desc":
          "Processed 200+ applications, achieved 90% satisfaction rate",
        "project-4-title": '"Shigoto Navi" Job Matching System Renewal',
        "project-4-desc":
          "Achieved 8 daily applications, 99.9% system stability",
        "project-5-title": "Corporate Website Update & Technical Support",
        "project-5-desc": "25% increase in site traffic, database automation",
        "project-6-title": '"Shigoto Navi" Landing Page',
        "project-6-desc": "Landing page for newly built job matching system",
        "project-7-title": "Legacy System Modernization",
        "project-7-desc":
          "SHIFT JIS to UTF-8 conversion, 30% internal process efficiency improvement",
        "project-8-title": "Government Job Seeker-Employer Matching System",
        "project-8-desc":
          "System connecting job seekers and employers for government institutions",
        "project-9-title": "JobMatcher Platform",
        "project-9-desc":
          "A platform connecting employers and job seekers | Go microservices architecture",
        "project-10-title": "TrustFlow CRM v3.0",
        "project-10-desc":
          "AI-powered, multi-tenant CRM system | Laravel Filament PHP Docker",

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
        "contact-form-submitting": "Sending...",
        "contact-form-success-message":
          "Message sent successfully! We will reply within 24 hours.",
        "contact-form-error-message": "An error occurred. Please try again.",
        "contact-form-validation-all-fields": "Please fill in all fields.",
        "contact-form-validation-email": "Please enter a valid email address.",
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
        "hero-name": "MUSURMONOV SHERZOT",
        "hero-location": "Yaponiya & O'zbekiston",
        "hero-title": "Full Stack Muhandis",
        "hero-description":
          "Men frontend dan backend gacha, web ilovalarini ishlab chiqishning barcha bosqichlarini boshqarishga qodir Full Stack Muhandisiman. Foydalanuvchi tajribasiga e'tibor qaratgan dizayn va kengaytiriladigan tizimlar qurishda ixtisoslashganman.",
        "hero-hire-btn": "Men bilan bog'lanish",
        "hero-download-btn": "Rezyume yuklab olish",

        // Technology Categories
        "tech-frontend": "Frontend texnologiyalari",
        "tech-backend": "Backend texnologiyalari",
        "tech-database": "Ma'lumotlar bazasi texnologiyalari",
        "tech-cloud": "Bulut va DevOps",
        "tech-ai": "AI va vositalar",
        "tech-design": "Dizayn va OS",

        // About Section
        "about-title": "Full Stack Muhandis sifatida professional tajriba",
        "about-year": "Yil",
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
        "about-service-5": "AI・Asboblar（Vs Code, Cursor, Codex, ChatGPT）",
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
        "skills-experience-1-title":
          "Axborot texnologiyalari bo'limi bosh mutaxassisi",
        "skills-experience-1-period": "2021-yil 1-iyun - 2022-yil 13-aprel",
        "skills-experience-1-company":
          'Samarqand shahridagi "Ishga Marhamat" Monomarkaz',
        "skills-experience-1-achievements": "Asosiy yutuqlar va loyihalar:",
        "skills-experience-1-achievement-1":
          "3 kishilik jamoani boshqarib, kompaniyaning IT infratuzilmasini 0 dan shakllantirgan",
        "skills-experience-1-achievement-2":
          "Rasmiy veb-sayt ishlab chiqish (2021.07-2021.09) - WordPress, mobil moslashuv, 3 oyda 5,000+ tashrif buyuruvchi",
        "skills-experience-1-achievement-3":
          "Onlayn ta'lim platformasi (2021.10-2022.01) - 100 nafar o'quvchi bir vaqtda, kurs boshqarish tizimi",
        "skills-experience-1-achievement-4":
          '"Job Matching" tizimi (2022.02-2022.03) - ish beruvchilar va talabalar moslashtirish, 200+ ariza, 90% qoniqish',
        "skills-experience-1-tech": "Ishlatilgan texnologiyalar:",
        "skills-experience-1-tech-list":
          "WordPress, PHP, MySQL, Linux, Windows, HTML, CSS, JavaScript",
        "skills-experience-2-title": "Full Stack muhandis",
        "skills-experience-2-period": "2024-yil 1-aprel - 2025-yil 16-oktabr",
        "skills-experience-2-company": "Ris Co., Ltd kompaniyasi",
        "skills-experience-2-achievements": "Asosiy loyihalar va natijalar:",
        "skills-experience-2-achievement-1":
          "Korporativ veb-saytni yangilash va texnik xizmat - sayt trafigi 25% oshdi, ma'lumotlar bazasi avtomatlashtirildi",
        "skills-experience-2-achievement-2":
          '"Shigoto Navi" ish o\'rinlari moslashtirish tizimi yangilanishi - kunlik 8 ta ariza, 99.9% tizim barqarorligi',
        "skills-experience-2-achievement-3":
          "Eski tizimni modernizatsiya qilish - SHIFT JIS dan UTF-8 ga o'tkazish, ichki ish jarayoni 30% tezlashdi",
        "skills-experience-2-tech": "Ishlatilgan texnologiyalar:",
        "skills-experience-2-tech-list":
          "HTML5, CSS3, Bootstrap, JavaScript, ASP, PHP (Laravel), Node.js, MySQL, SQL Server, AWS (EC2, RDS), Docker, Kubernetes, Linux, Windows Server",
        "skills-education-1-title": "Kurash va Dzyudo",
        "skills-education-1-period": "2012 - 2018",
        "skills-education-1-institution":
          "Samarqand Olimpiya zaxiralari sport kolleji",
        "skills-education-2-title": "Kompyuter muhandisligi va texnologiyasi",
        "skills-education-2-period": "2020 - 2021",
        "skills-education-2-institution":
          "Samarqand shahridagi kasb-hunarga o'gitish markazi (KOICA)",
        "skills-education-3-title": "Yapon tili",
        "skills-education-3-period": "2022 - 2023",
        "skills-education-3-institution":
          "春日日本語学院（Kasuga Nihongo Gakuin）",
        "skills-education-4-title": "Tizim muhandisligi va biznes",
        "skills-education-4-period": "2023 - 2025",
        "skills-education-4-institution":
          "中野スクールオブビジネス（Nakano School of Business）",

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
        "projects-filter-web": "Veb-saytlar",
        "projects-filter-platform": "Platformalar",
        "projects-filter-system": "Tizimlar",

        // Project Details
        "project-1-title": "Rasmiy veb-sayt",
        "project-1-desc":
          "WordPress, mobil moslashuv, 3 oyda 5,000+ tashrif buyuruvchi",
        "project-2-title": "Onlayn ta'lim platformasi",
        "project-2-desc":
          "100 nafar o'quvchi bir vaqtda, kurs boshqarish tizimi",
        "project-3-title":
          "Ish izlovchilar va ish beruvchilar moslashtirish tizimi",
        "project-3-desc": "200+ ariza qayta ishlash, 90% qoniqish darajasi",
        "project-4-title":
          '"Shigoto Navi" ish o\'rinlari moslashtirish tizimi yangilanishi',
        "project-4-desc": "Kunlik 8 ta ariza, 99.9% tizim barqarorligi",
        "project-5-title": "Korporativ veb-sayt yangilanishi va texnik xizmat",
        "project-5-desc":
          "Sayt trafigi 25% oshdi, ma'lumotlar bazasi avtomatlashtirildi",
        "project-6-title": '"Shigoto Navi" landing page',
        "project-6-desc":
          "Yangi qurilgan ish o'rinlari moslashtirish tizimi uchun landing page",
        "project-7-title": "Eski tizimni modernizatsiya qilish",
        "project-7-desc":
          "SHIFT JIS dan UTF-8 ga o'tkazish, ichki ish jarayoni 30% tezlashdi",
        "project-8-title":
          "Hokimlik uchun ish izlovchilar va ish beruvchilarni bog'laydigan tizim",
        "project-8-desc":
          "Hokimlik uchun ish izlovchilar va ish beruvchilarni bog'laydigan tizim",
        "project-9-title": "JobMatcher Platform",
        "project-9-desc":
          "Ish beruvchilar va ish izlovchilarni bog'laydigan platforma | Go microservices arxitektura",
        "project-10-title": "TrustFlow CRM v3.0",
        "project-10-desc":
          "AI bilan ishlaydigan, multi-tenant CRM tizimi | Laravel Filament PHP Docker",

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
        "contact-form-submitting": "Yuborilmoqda...",
        "contact-form-success-message":
          "Xabar muvaffaqiyatli yuborildi! 24 soat ichida javob beramiz.",
        "contact-form-error-message":
          "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
        "contact-form-validation-all-fields": "Barcha maydonlarni to'ldiring.",
        "contact-form-validation-email": "To'g'ri email manzil kiriting.",
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
        // Clear existing text first
        typedOutputElement.textContent = "";
        
        // Small delay to ensure element is cleared
        setTimeout(function() {
          window.typedInstance = new Typed(".typed-text-output", {
            strings: [translations["hero-title"]],
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
        }, 100);
      }
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LanguageSwitcher();
});
