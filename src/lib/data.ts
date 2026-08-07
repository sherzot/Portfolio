export const skillsData = [
  {
    category: { ja: "フロントエンド", en: "Frontend", uz: "Frontend" },
    items: [
      {
        name: "React / Next.js",
        level: "daily" as const,
        tags: ["React 19", "Next.js 15", "App Router", "RSC"],
      },
      {
        name: "TypeScript",
        level: "daily" as const,
        tags: ["strict mode", "Zod", "type-safe API"],
      },
      {
        name: "Tailwind CSS",
        level: "daily" as const,
        tags: ["responsive", "dark mode", "animations"],
      },
    ],
  },
  {
    category: { ja: "バックエンド", en: "Backend", uz: "Backend" },
    items: [
      {
        name: "Laravel (PHP)",
        level: "years3" as const,
        tags: ["10.x", "Filament", "Sanctum", "Queue"],
      },
      {
        name: "Node.js",
        level: "production" as const,
        tags: ["Express", "REST API", "WebSocket"],
      },
      {
        name: "Supabase",
        level: "production" as const,
        tags: ["PostgreSQL", "Auth", "Realtime", "Edge Functions"],
      },
      {
        name: "Kotlin",
        level: "production" as const,
        tags: ["JVM", "null safety", "service development"],
      },
      {
        name: "Spring Boot",
        level: "production" as const,
        tags: ["REST API", "service design", "JVM"],
      },
    ],
  },
  {
    category: { ja: "データベース", en: "Database", uz: "Ma’lumotlar bazasi" },
    items: [
      {
        name: "PostgreSQL / MySQL",
        level: "years3" as const,
        tags: ["query optimization", "migration", "indexing"],
      },
      {
        name: "SQL Server",
        level: "production" as const,
        tags: ["SSMS", "migration", "stored procedures"],
      },
    ],
  },
  {
    category: { ja: "インフラ・DevOps", en: "Infra & DevOps", uz: "Infratuzilma va DevOps" },
    items: [
      {
        name: "Docker",
        level: "production" as const,
        tags: ["Compose", "multi-stage build", "ECR"],
      },
      {
        name: "AWS",
        level: "production" as const,
        tags: ["EC2", "RDS", "S3", "multi-AZ"],
      },
      {
        name: "Kubernetes",
        level: "learning" as const,
        tags: ["k8s", "Helm"],
      },
      {
        name: "GitHub Actions",
        level: "production" as const,
        tags: ["CI/CD", "auto-deploy", "Lighthouse"],
      },
    ],
  },
  {
    category: { ja: "アーキテクチャ・設計", en: "Architecture & Design", uz: "Arxitektura va dizayn" },
    items: [
      {
        name: "Clean Architecture / DDD",
        level: "production" as const,
        tags: ["REST API", "domain modeling", "secure system design"],
      },
      {
        name: "SaaS system design",
        level: "years3" as const,
        tags: ["multi-tenant", "async processing", "auditability"],
      },
    ],
  },
  {
    category: { ja: "AI / その他", en: "AI & Tools", uz: "AI va vositalar" },
    items: [
      {
        name: "OpenAI API",
        level: "production" as const,
        tags: ["GPT-4", "function calling", "RAG"],
      },
      {
        name: "Claude Code",
        level: "daily" as const,
        tags: ["agentic coding", "MCP", "automation"],
      },
      {
        name: "Cursor / Codex",
        level: "daily" as const,
        tags: ["AI-assisted dev", "refactoring", "code review"],
      },
      {
        name: "Figma",
        level: "production" as const,
        tags: ["UI/UX", "prototyping", "handoff"],
      },
    ],
  },
];

export const experienceData = [
  {
    period: {
      ja: "2026年6月 〜 現在",
      en: "Jun 2026 – Present",
      uz: "2026-yil iyun – hozir",
    },
    company: {
      ja: "株式会社Trabox（Visional Group）",
      en: "Trabox Co., Ltd. — Visional Group",
      uz: "Trabox Co., Ltd. — Visional Group",
    },
    companyInfo: {
      ja: "Finto金融サービス事業",
      en: "Finto financial services business",
      uz: "Finto moliyaviy xizmatlar biznesi",
    },
    role: {
      ja: "フルスタックエンジニア",
      en: "Full-Stack Engineer",
      uz: "Full-Stack Engineer",
    },
    achievements: {
      ja: [
        "金融サービス関連プロダクトのフロントエンド・バックエンド開発に従事",
        "システム設計、クラウドインフラ、本番運用、セキュリティ、信頼性、保守性を重視した設計・実装",
        "CSVアップロード履歴やファイルライフサイクルなど、公開可能な範囲でデータ管理と安全なアクセス制御に関する課題を検討",
      ],
      en: [
        "Working on frontend and backend development for financial services products",
        "Contributing to system design, cloud infrastructure, production operations, security, reliability, and maintainability",
        "Exploring engineering concerns suitable for public discussion, such as CSV upload history, file lifecycle, and authorization-controlled access",
      ],
      uz: [
        "Moliyaviy xizmatlarga oid mahsulotlarning frontend va backend qismlarini ishlab chiqyapman",
        "Tizim dizayni, bulut infratuzilmasi, production jarayonlari, xavfsizlik, ishonchlilik va qo‘llab-quvvatlashga hissa qo‘shyapman",
        "Ommaga ulashish mumkin bo‘lgan doirada CSV yuklash tarixi, fayl hayotiy sikli va ruxsat asosidagi kirish kabi masalalarni o‘rganyapman",
      ],
    },
    stack: ["Frontend", "Backend", "Cloud", "Security", "Production Engineering"],
  },
  {
    period: {
      ja: "2026年1月 〜 2026年2月",
      en: "Jan 2026 – Feb 2026",
      uz: "2026-yil yanvar – fevral",
    },
    company: {
      ja: "株式会社 renue",
      en: "renue Inc.",
      uz: "renue kompaniyasi",
    },
    companyInfo: {
      ja: "生成AI活用支援・ITコンサルティング・DX推進支援（従業員数：40名）",
      en: "Generative AI consulting, IT consulting, DX support (40 employees)",
      uz: "Generativ AI, IT konsalting va DX bo‘yicha yordam (40 xodim)",
    },
    role: {
      ja: "フルスタックエンジニア（メンバー）",
      en: "Full-Stack Engineer (Member)",
      uz: "Full-stack dasturchi (jamoa a’zosi)",
    },
    achievements: {
      ja: [
        "複数企業向けのシステム開発案件に従事",
        "AIを用いた要件検証・仕様資料作成を担当",
        "生成AI活用によるドキュメント作成プロセスの効率化を推進",
      ],
      en: [
        "Worked on system development projects for multiple clients",
        "Handled AI-assisted requirements validation and spec documentation",
        "Streamlined document creation processes using generative AI",
      ],
      uz: [
        "Bir nechta mijoz uchun tizim ishlab chiqish loyihalarida ishladim",
        "AI yordamida talablarni tekshirish va texnik hujjatlar tayyorladim",
        "Generativ AI yordamida hujjat yaratish jarayonlarini optimallashtirdim",
      ],
    },
    stack: ["OpenAI API", "Claude", "TypeScript", "Next.js", "Documentation"],
  },
  {
    period: {
      ja: "2024年4月 〜 2025年10月",
      en: "Apr 2024 – Oct 2025",
      uz: "2024-yil aprel – 2025-yil oktyabr",
    },
    company: {
      ja: "リス株式会社",
      en: "Risu Co., Ltd.",
      uz: "Risu kompaniyasi",
    },
    companyInfo: {
      ja: "人材派遣・職業紹介・再就職支援（従業員数：54名）",
      en: "Staffing, job placement & outplacement (54 employees)",
      uz: "Kadrlar, ishga joylashtirish va qayta bandlik xizmatlari (54 xodim)",
    },
    role: {
      ja: "フルスタックエンジニア（主担当）",
      en: "Full-Stack Engineer (Lead Developer)",
      uz: "Full-stack dasturchi (asosiy mas’ul)",
    },
    achievements: {
      ja: [
        "コーポレートサイト刷新：チームが3名→1名に縮小する中、主担当として引き継ぎ。お問い合わせページ新設・派遣法対応コンテンツ追加・UI/UX改善を一人で推進 → サイトアクセス数 月間25%増加",
        "新しごとナビ・マッチングシステムのEnd-to-End開発：要件定義・設計・開発・テスト・本番運用まで一貫して担当。会員登録フロー簡素化・エージェント管理画面新規開発・AWS EC2刷新・セキュリティ強化 → 応募数 0〜5件/日 → 最大8件/日（+300%）、稼働率99.9%達成",
        "旧しごとナビ・基幹システム大規模修正：約20年前のASPシステム（SHIFT JIS環境）をUI/UX段階的刷新。SHIFT JIS→UTF-8移行後もデータ整合性100%維持 → 社内ユーザー操作時間30%短縮、継続利用率1.2倍向上",
      ],
      en: [
        "Corporate site renewal: Took over as the sole developer after the team shrank from three people to one. Created a contact page, added labor-law content, and improved UI/UX → Monthly site traffic +25%",
        "Shigoto Navi end-to-end rebuild: Led requirements, design, development, testing, and production operations. Simplified registration, built agent dashboard, upgraded AWS EC2 → Applications 0–5/day → max 8/day (+300%), 99.9% uptime",
        "Large-scale legacy refactor: Modernized a 20-year-old ASP system running on SHIFT JIS. Migrated to UTF-8 while maintaining 100% data integrity → Internal task time -30%, retention increased 1.2×",
      ],
      uz: [
        "Korporativ saytni yangilash: jamoa uch kishidan bir kishiga qisqargach, yagona mas’ul sifatida ishni qabul qildim. Aloqa sahifasini yaratib, qonunchilikka oid kontent va UI/UX’ni yaxshiladim → Oylik tashrif 25% oshdi",
        "Shigoto Navi’ni end-to-end ishlab chiqish: talablarni aniqlash, loyihalash, dasturlash, test va production jarayonlarini boshqardim. Agent panelini yaratib, AWS EC2 muhitini yangiladim → Arizalar 300% oshdi, tizim barqarorligi 99,9% ga yetdi",
        "Eski tizimni modernizatsiya qilish: SHIFT JIS’dagi 20 yillik ASP tizimini yangilab, UTF-8 ga o‘tkazdim va ma’lumotlar yaxlitligini 100% saqladim → Ichki vazifalarni bajarish vaqti 30% qisqardi, davomiy foydalanish 1,2 baravar oshdi",
      ],
    },
    stack: ["Laravel", "PHP", "JavaScript", "AWS EC2", "MySQL", "SQL Server", "Bootstrap5", "ASP", "Docker"],
  },
  {
    period: {
      ja: "2021年6月 〜 2022年12月",
      en: "Jun 2021 – Dec 2022",
      uz: "2021-yil iyun – 2022-yil dekabr",
    },
    company: {
      ja: "MONOCENTER IN SAMARKAND CITY（ウズベキスタン）",
      en: "MONOCENTER IN SAMARKAND CITY (Uzbekistan)",
      uz: "MONOCENTER IN SAMARKAND CITY (O‘zbekiston)",
    },
    companyInfo: {
      ja: "政府支援のIT教育・雇用促進センター（従業員数：約100名）",
      en: "Government-supported IT education & employment center (approx. 100 employees)",
      uz: "Hukumat qo‘llab-quvvatlagan IT ta’lim va bandlik markazi (taxminan 100 xodim)",
    },
    role: {
      ja: "バックエンド・インフラ担当リーダー / フルスタックエンジニア",
      en: "Backend & Infrastructure Lead / Full-Stack Engineer",
      uz: "Backend va infratuzilma rahbari / Full-stack dasturchi",
    },
    achievements: {
      ja: [
        "公式Webサイト新規構築（WordPress/PHP/Linux）：要件定義〜運用まで一貫担当。Linuxサーバー環境整備・アクセス解析導入 → 公開3ヶ月で月間アクセス5,000件、問い合わせ件数2倍、検索流入30%増",
        "オンライン教育プラットフォーム構築：PHP + MySQL + WordPressで学習ページ・ダッシュボードを新規実装。教師・生徒の学習進捗可視化、AWSで負荷テスト・セキュリティ強化",
        "求職者×企業マッチングプラットフォーム構築：求人検索・応募・面接予約・チャット機能を統合。管理者用ダッシュボード設計・高齢者にも使いやすいアクセシブルUIを実装",
      ],
      en: [
        "Built official website from scratch (WordPress/PHP/Linux): End-to-end from requirements to operations → 5,000 monthly visits in 3 months, inquiries ×2, search traffic +30%",
        "Online education platform: Built learning pages and dashboards with PHP + MySQL + WordPress. Added visibility into teacher and student progress, ran AWS load tests, and strengthened security",
        "Job matching platform: Integrated job search, applications, interview booking & chat. Designed admin dashboard with accessible UI for all age groups",
      ],
      uz: [
        "Rasmiy veb-sayt yaratish (WordPress/PHP/Linux): talablardan ekspluatatsiyagacha bo‘lgan jarayonni boshqardim → Uch oyda 5 000 ta tashrif, so‘rovlar ikki baravar va qidiruv trafigi 30% oshdi",
        "Onlayn ta’lim platformasi: PHP + MySQL + WordPress yordamida o‘quv sahifalari va boshqaruv panelini yaratdim. O‘qituvchi va talabalar rivojini ko‘rsatib, AWS’da yuklama testlari va xavfsizlikni mustahkamlash ishlarini bajardim",
        "Ish qidirish platformasi: qidiruv, ariza topshirish, suhbatni band qilish va chatni birlashtirdim. Administrator paneli hamda turli yoshdagi foydalanuvchilar uchun qulay interfeys yaratdim",
      ],
    },
    stack: ["WordPress", "PHP", "MySQL", "Linux", "AWS", "Python", "JavaScript"],
  },
];

export const commercialProjectsData = [
  {
    id: "shigoto-navi",
    title: "「新しごとナビ」求人マッチングシステム End-to-End開発",
    titleEn: "Shigoto Navi — Job Matching System (End-to-End)",
    titleUz: "Shigoto Navi — Ish qidirish tizimi (end-to-end ishlanma)",
    github: null,
    demo: null,
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "AWS EC2", "Bootstrap5", "Docker"],
    star: {
      ja: {
        situation:
          "既存サイトで応募数が1日最大5件・時には0件。会員登録フローが複雑で離脱率が高く、利用者満足度が低下。50代以上ユーザーが多く急な仕様変更も困難な状況。",
        task: "フルスタックエンジニアとして、要件定義〜本番移行まで主担当。応募数増加・UX改善・安定稼働の3軸を同時に推進。",
        action: [
          "会員登録フローを簡素化し、求人検索導線を再設計",
          "エージェント向け管理画面とダッシュボードを新規開発し、求人票更新業務を効率化",
          "履歴書作成支援機能を導入し、応募モチベーション向上",
          "AWS EC2サーバー環境を刷新・セキュリティ強化を実施",
          "テスト設計の標準化によりバグ発生率を低減",
        ],
        result: [
          "応募数：0〜5件/日 → 最大8件/日（+300%）、6〜7件/日を安定維持",
          "ページ滞在時間：約25%向上",
          "バグ発生率：リリース後30%削減",
          "システム安定稼働率：99.9%達成",
        ],
      },
      en: {
        situation:
          "The existing site received at most five applications per day and sometimes none. A complex registration flow caused high drop-off. Most users were over 50, making abrupt changes risky.",
        task: "As lead developer, I was responsible from requirements through production migration, with three goals: increase applications, improve UX, and maintain stability.",
        action: [
          "Simplified registration flow and redesigned job search navigation",
          "Built new agent management dashboard to streamline job posting updates",
          "Introduced resume-creation support to encourage applications",
          "Overhauled AWS EC2 server environment and strengthened security",
          "Standardized test design to reduce the defect rate",
        ],
        result: [
          "Applications: 0–5/day → max 8/day (+300%), stable 6–7/day",
          "Page dwell time: +25%",
          "Post-release bug rate: -30%",
          "System uptime: 99.9% achieved",
        ],
      },
      uz: {
        situation:
          "Mavjud sayt kuniga ko‘pi bilan beshta ariza olar, ayrim kunlari esa ariza bo‘lmasdi. Murakkab ro‘yxatdan o‘tish jarayoni foydalanuvchilarning chiqib ketishiga sabab bo‘lardi. Foydalanuvchilarning aksariyati 50 yoshdan katta bo‘lgani uchun keskin o‘zgarishlar xavfli edi.",
        task: "Asosiy dasturchi sifatida talablarni aniqlashdan production’ga chiqarishgacha javobgar bo‘ldim. Uch maqsadni bir vaqtda olib bordim: arizalarni ko‘paytirish, UX’ni yaxshilash va barqarorlikni saqlash.",
        action: [
          "Ro‘yxatdan o‘tish jarayonini soddalashtirib, ish qidirish yo‘nalishini qayta loyihaladim",
          "Agentlar uchun boshqaruv panelini yaratib, ish e’lonlarini yangilash jarayonini tezlashtirdim",
          "Rezyume yaratishga yordam beruvchi funksiyani joriy etib, ariza topshirishni osonlashtirdim",
          "AWS EC2 muhitini yangilab, xavfsizlikni mustahkamladim",
          "Test dizaynini standartlashtirib, xatolar ulushini kamaytirdim",
        ],
        result: [
          "Arizalar: 0–5/kun → ko‘pi bilan 8/kun (+300%), barqaror 6–7/kun",
          "Sahifada turish vaqti: +25%",
          "Release’dan keyingi xatolar ulushi: -30%",
          "Tizim barqarorligi: 99,9% ga yetdi",
        ],
      },
    },
  },
  {
    id: "legacy-modernization",
    title: "旧システム大規模修正・SHIFT JIS→UTF-8移行",
    titleEn: "Legacy System Refactor & SHIFT JIS→UTF-8 Migration",
    titleUz: "Eski tizim refaktoringi va SHIFT JIS→UTF-8 migratsiyasi",
    github: null,
    demo: null,
    stack: ["ASP", "JavaScript", "SQL Server", "Bootstrap5", "Windows Server", "CSS3"],
    star: {
      ja: {
        situation:
          "約20年前に構築されたASPベース（SHIFT JIS環境）の旧システム。セキュリティ面・操作性の老朽化が進み、利用者の多くが中高年層のため急な仕様変更が困難な状況。",
        task: "フルスタックエンジニアとして、段階的なUI/UX刷新と安定稼働の両立、および旧データの互換性確保を主導。",
        action: [
          "旧ASPコードを保守しながら、フロントエンド・バックエンド双方のUI/UXを段階的に刷新",
          "内部システムの求人企業と社員の情報管理画面を再設計",
          "フォーム入力補助・検索機能の最適化により業務フローを短縮",
          "SHIFT JIS環境をUTF-8へ移行し、データ互換性と拡張性を確保",
          "レガシー環境に対応したセキュリティ更新を実施",
        ],
        result: [
          "社内ユーザーの操作時間：約30%短縮",
          "システム利用満足度：社内調査で+25%向上",
          "SHIFT JIS→UTF-8移行後も旧データの整合性100%維持",
          "長期利用者（登録10年以上）の継続利用率：改善前の1.2倍に上昇",
        ],
      },
      en: {
        situation:
          "A 20-year-old ASP system running on SHIFT JIS had deteriorating security and usability. Most users were middle-aged or older, making abrupt UI changes risky.",
        task: "Led a gradual UI/UX modernization while maintaining stability and preserving compatibility with legacy data.",
        action: [
          "Gradually modernized the user interface and workflows while maintaining the legacy ASP code",
          "Redesigned employer and employee information-management screens",
          "Optimized form inputs and search to shorten workflows",
          "Migrated SHIFT JIS environment to UTF-8, ensuring data compatibility",
          "Implemented security updates compatible with the legacy environment",
        ],
        result: [
          "Internal task completion time: -30%",
          "System satisfaction: internal survey +25%",
          "Legacy data integrity: 100% maintained post-migration",
          "Long-term users (registered for 10+ years): retention increased 1.2×",
        ],
      },
      uz: {
        situation:
          "SHIFT JIS muhitida ishlaydigan 20 yillik ASP tizimining xavfsizligi va foydalanish qulayligi eskirgan edi. Foydalanuvchilarning aksariyati o‘rta va katta yoshda bo‘lgani uchun interfeysni keskin o‘zgartirish xavfli edi.",
        task: "Tizim barqarorligini saqlagan holda UI/UX’ni bosqichma-bosqich yangilash va eski ma’lumotlar bilan moslikni ta’minlashni boshqardim.",
        action: [
          "Eski ASP kodini saqlagan holda interfeys va ish jarayonlarini bosqichma-bosqich yangiladim",
          "Ish beruvchi va xodim ma’lumotlarini boshqarish sahifalarini qayta loyihaladim",
          "Forma to‘ldirish va qidiruv jarayonlarini optimallashtirdim",
          "SHIFT JIS muhitini UTF-8 ga o‘tkazib, ma’lumotlar mosligini saqladim",
          "Eski muhitga mos xavfsizlik yangilanishlarini joriy etdim",
        ],
        result: [
          "Ichki foydalanuvchilarning vazifa bajarish vaqti: -30%",
          "Tizimdan qoniqish darajasi: ichki so‘rovda +25%",
          "Eski ma’lumotlar yaxlitligi: migratsiyadan keyin 100%",
          "Uzoq muddatli foydalanuvchilar (10+ yil): davomiy foydalanish 1,2 baravar oshdi",
        ],
      },
    },
  },
  {
    id: "monocenter-platform",
    title: "ITセンター公式サイト・求人マッチングプラットフォーム構築",
    titleEn: "IT Center Website & Job Matching Platform (End-to-End)",
    titleUz: "IT markazi sayti va ish qidirish platformasi (end-to-end)",
    github: null,
    demo: null,
    stack: ["WordPress", "PHP", "MySQL", "Linux", "AWS", "Python", "JavaScript"],
    star: {
      ja: {
        situation:
          "政府支援のIT教育センター（サマルカンド）が公式Webサイトを持たず、オンライン認知度がほぼゼロ。求職者と企業をつなぐ仕組みも存在しなかった。",
        task: "バックエンド・インフラリーダーとして、公式サイト・オンライン教育プラットフォーム・求人マッチングシステムの3つを要件定義〜本番運用まで一貫して担当。",
        action: [
          "WordPress/PHP/Linuxで公式サイトを新規構築。Linuxサーバー環境整備・アクセス解析導入",
          "PHP + MySQL + WordPressでオンライン教育プラットフォームを開発。教師・生徒の学習進捗を可視化",
          "AWSで負荷テスト・認証・アクセス制御を含むセキュリティ強化を実施",
          "求人検索・応募・面接予約・チャット機能を統合した求人マッチングプラットフォームを構築",
          "高齢者にも使いやすいアクセシブルUI・管理者向けダッシュボードを設計・実装",
        ],
        result: [
          "公式サイト：公開3ヶ月で月間アクセス5,000件、問い合わせ件数2倍、検索流入30%増",
          "オンライン教育プラットフォーム：全教師・生徒の学習進捗をリアルタイム可視化",
          "求人マッチング：求職者の応募プロセスを完全デジタル化",
          "AWS負荷テスト・セキュリティ強化：安定稼働・不正アクセスゼロを実現",
        ],
      },
      en: {
        situation:
          "Government-supported IT center in Samarkand had no official website and near-zero online presence. No system existed to connect job seekers with companies.",
        task: "As Backend & Infrastructure Lead, I led the end-to-end delivery of three systems: an official website, an online education platform, and a job-matching platform.",
        action: [
          "Built official website from scratch with WordPress/PHP/Linux; set up Linux server and analytics",
          "Developed online education platform with PHP + MySQL; visualized teacher-student learning progress",
          "Ran AWS load tests and strengthened authentication and access controls",
          "Built job matching platform integrating job search, applications, interview booking, and chat",
          "Designed accessible UI for all ages and admin dashboard for operations staff",
        ],
        result: [
          "Official site: 5,000 monthly visits within 3 months, inquiries ×2, search traffic +30%",
          "Education platform: real-time learning progress visibility for all teachers and students",
          "Job matching: fully digitized application process for job seekers",
          "AWS security: stable operation with zero unauthorized access incidents",
        ],
      },
      uz: {
        situation:
          "Samarqanddagi hukumat qo‘llab-quvvatlagan IT markazining rasmiy veb-sayti yo‘q, internetdagi ko‘rinishi esa deyarli nol edi. Ish izlovchilarni kompaniyalar bilan bog‘laydigan tizim ham mavjud emasdi.",
        task: "Backend va infratuzilma rahbari sifatida uchta tizimni end-to-end yetkazib berishni boshqardim: rasmiy sayt, onlayn ta’lim platformasi va ish qidirish platformasi.",
        action: [
          "WordPress/PHP/Linux yordamida rasmiy sayt yaratib, Linux serveri va analitikani sozladim",
          "PHP + MySQL yordamida onlayn ta’lim platformasini yaratib, o‘qituvchi va talabalar rivojini ko‘rinadigan qildim",
          "AWS’da yuklama testlarini o‘tkazib, autentifikatsiya va kirish nazoratini mustahkamladim",
          "Ish qidirish, ariza topshirish, suhbatni band qilish va chatni birlashtirgan platforma yaratdim",
          "Turli yoshdagi foydalanuvchilar uchun qulay interfeys va administrator panelini loyihaladim",
        ],
        result: [
          "Rasmiy sayt: uch oyda oyiga 5 000 ta tashrif, so‘rovlar ikki baravar va qidiruv trafigi 30% oshdi",
          "Ta’lim platformasi: barcha o‘qituvchi va talabalar rivojini real vaqtda ko‘rsatish yo‘lga qo‘yildi",
          "Ish qidirish: ariza topshirish jarayoni to‘liq raqamlashtirildi",
          "AWS xavfsizligi: barqaror ishlash va ruxsatsiz kirish holatlarining nolga tushishi ta’minlandi",
        ],
      },
    },
  },
];

export const personalProjectsData = [
  {
    id: "enterprise-engineering-framework",
    title: "Enterprise Engineering Framework",
    subtitle: {
      ja: "AI支援開発のためのEngineering Framework（開発中）",
      en: "Engineering framework for structured AI-assisted development (Active Development)",
      uz: "AI yordamidagi tartibli dasturlash uchun muhandislik freymvorki (faol ishlab chiqilmoqda)",
    },
    status: "wip" as const,
    github: null,
    demo: null,
    stack: ["Claude Code", "Codex", "MCP", "Architecture", "Quality Gates"],
    description: {
      ja: "Claude CodeをStaff / Principal Engineer相当の規律で活用するための、アーキテクチャファーストなワークフロー。要件、設計、品質基準、コードレビュー、セキュリティ、コンテキスト管理を公開可能な範囲で整理しています。",
      en: "An architecture-first workflow for using Claude Code with Staff / Principal Engineer discipline. It organizes requirements, design, quality gates, review, security, and context management within a scope suitable for public release.",
      uz: "Claude Code’dan Staff / Principal Engineer darajasidagi intizom bilan foydalanish uchun arxitekturaga ustuvorlik berilgan ish jarayoni. Talablar, dizayn, sifat mezonlari, kod ko‘rigi, xavfsizlik va kontekst boshqaruvini ommaga ulashish mumkin bo‘lgan doirada tartiblaydi.",
    },
  },
  {
    id: "trustflow-crm",
    title: "TrustFlow CRM",
    subtitle: {
      ja: "マルチテナントSaaS CRM（開発中）",
      en: "Multi-tenant SaaS CRM (In Development)",
      uz: "Ko‘p tenantli SaaS CRM (ishlab chiqilmoqda)",
    },
    status: "wip" as const,
    github: "https://github.com/sherzot/TrustFlowCRM",
    demo: null,
    stack: ["Laravel 11", "Filament", "React", "TypeScript", "PostgreSQL", "Supabase", "Docker", "OpenAI API"],
    description: {
      ja: "Laravel + FilamentによるマルチテナントCRM。AI機能（リード優先順位付け・自動メール生成）を統合中。\n\n現在の進捗：認証・マルチテナント基盤完成、AI機能実装中。",
      en: "Multi-tenant CRM built with Laravel + Filament. Integrating AI features (lead prioritization, automated email generation).\n\nCurrent: Auth & multi-tenant foundation complete, AI features in progress.",
      uz: "Laravel + Filament asosidagi ko‘p tenantli CRM. Lidlarni ustuvorlashtirish va avtomatik xat yaratish kabi AI funksiyalari integratsiya qilinmoqda.\n\nHozirgi holat: autentifikatsiya va ko‘p tenantli poydevor tayyor, AI funksiyalari ishlab chiqilmoqda.",
    },
  },
  {
    id: "jobmatcher",
    title: "JobMatcher Platform",
    subtitle: {
      ja: "AIマッチング求人プラットフォーム（開発中）",
      en: "AI-powered Job Matching Platform (In Development)",
      uz: "AI asosidagi ish qidirish platformasi (ishlab chiqilmoqda)",
    },
    status: "wip" as const,
    github: "https://github.com/sherzot/jobmatcher-platform",
    demo: null,
    stack: ["Next.js 15", "TypeScript", "Laravel", "Supabase", "PostgreSQL", "OpenAI API", "Docker"],
    description: {
      ja: "Career OS + ATSワークフロー + AIマッチングを統合したプラットフォーム。求職者と企業のミスマッチを最小化することを目的とした技術検証プロジェクト。",
      en: "Platform integrating Career OS + ATS workflow + AI matching. A technical validation project aimed at minimizing candidate-company mismatch.",
      uz: "Career OS, ATS ish jarayoni va AI asosidagi moslashtirishni birlashtirgan platforma. Nomzod bilan kompaniya o‘rtasidagi nomuvofiqlikni kamaytirishga qaratilgan texnik sinov loyihasi.",
    },
  },
  {
    id: "ai-concierge",
    title: "AI Business Concierge",
    subtitle: {
      ja: "AIビジネスアシスタント（設計段階）",
      en: "AI Business Assistant (Design Stage)",
      uz: "AI biznes yordamchisi (loyihalash bosqichida)",
    },
    status: "design" as const,
    github: "https://github.com/sherzot/ai-business-concierge",
    demo: null,
    stack: ["Next.js 15", "TypeScript", "Go", "Supabase", "OpenAI API", "Claude API", "RAG", "MCP"],
    description: {
      ja: "RAG + MCPアーキテクチャを活用した業務特化型AIアシスタント。Claude Code + Go言語学習の実践プロジェクトとして設計中。",
      en: "Business-specialized AI assistant leveraging RAG + MCP architecture. Designed as a hands-on Claude Code + Go learning project.",
      uz: "RAG + MCP arxitekturasidan foydalanadigan, biznes jarayonlariga ixtisoslashgan AI yordamchisi. Claude Code va Go tilini amalda o‘rganish loyihasi sifatida ishlab chiqilgan.",
    },
  },
  {
    id: "notion-clone",
    title: "Notion Clone",
    subtitle: {
      ja: "Notionクローン・ドキュメント管理ツール（開発中）",
      en: "Notion-style Document Management Tool (In Development)",
      uz: "Notion uslubidagi hujjat boshqaruv vositasi (ishlab chiqilmoqda)",
    },
    status: "wip" as const,
    github: "https://github.com/sherzot/Notion",
    demo: null,
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Tiptap", "PostgreSQL"],
    description: {
      ja: "NotionライクなブロックエディタとドキュメントDB機能を持つツールを自作。リアルタイムコラボ・ネスト構造・Supabase連携を技術検証中。",
      en: "Building a Notion-style block editor with document-database features. Validating real-time collaboration, nested structures, and Supabase integration.",
      uz: "Notion uslubidagi blok muharriri va hujjatlar bazasi funksiyalariga ega vosita. Real vaqtdagi hamkorlik, ichma-ich tuzilmalar va Supabase integratsiyasini sinovdan o‘tkazyapman.",
    },
  },
];
