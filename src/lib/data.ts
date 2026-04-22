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
        name: "Go",
        level: "learning" as const,
        tags: ["microservices", "net/http"],
      },
    ],
  },
  {
    category: { ja: "データベース", en: "Database", uz: "Ma'lumotlar bazasi" },
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
    category: { ja: "インフラ・DevOps", en: "Infra & DevOps", uz: "Infra & DevOps" },
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
        tags: ["k8s", "Helm", "30% progress"],
      },
      {
        name: "GitHub Actions",
        level: "production" as const,
        tags: ["CI/CD", "auto-deploy", "Lighthouse"],
      },
    ],
  },
  {
    category: { ja: "AI / その他", en: "AI & Tools", uz: "AI va Toollar" },
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
      ja: "2026年01月 〜 2026年02月",
      en: "Jan 2026 – Feb 2026",
      uz: "2026-yil Yanvar – Fevral",
    },
    company: {
      ja: "株式会社 renue",
      en: "renue Inc.",
      uz: "renue kompaniyasi",
    },
    companyInfo: {
      ja: "生成AI活用支援・ITコンサルティング・DX推進支援（従業員数：40名）",
      en: "Generative AI consulting, IT consulting, DX support (40 employees)",
      uz: "Generativ AI maslahat, IT konsalting, DX qo'llab-quvvatlash (40 xodim)",
    },
    role: {
      ja: "フルスタックエンジニア（メンバー）",
      en: "Full Stack Engineer (Member)",
      uz: "Full Stack Dasturchi (Jamoa a'zosi)",
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
        "Bir nechta mijozlar uchun tizim ishlanma loyihalarida ishladim",
        "AI yordamida talablarni tekshirish va texnik hujjatlar tayyorladim",
        "Generativ AI yordamida hujjat yaratish jarayonlarini optimallashtirdim",
      ],
    },
    stack: ["OpenAI API", "Claude", "TypeScript", "Next.js", "Documentation"],
  },
  {
    period: {
      ja: "2024年04月 〜 2025年10月",
      en: "Apr 2024 – Oct 2025",
      uz: "2024-yil Aprel – 2025-yil Oktyabr",
    },
    company: {
      ja: "リス株式会社",
      en: "Risu Co., Ltd.",
      uz: "Risu kompaniyasi",
    },
    companyInfo: {
      ja: "人材派遣・職業紹介・再就職支援（従業員数：54名）",
      en: "Staffing, job placement & outplacement (54 employees)",
      uz: "Kadrlar xizmati, ish joylashtirish (54 xodim)",
    },
    role: {
      ja: "フルスタックエンジニア（主担当）",
      en: "Full Stack Engineer (Lead Developer)",
      uz: "Full Stack Dasturchi (Asosiy mas'ul)",
    },
    achievements: {
      ja: [
        "コーポレートサイト刷新：チームが3名→1名に縮小する中、主担当として引き継ぎ。お問い合わせページ新設・派遣法対応コンテンツ追加・UI/UX改善を一人で推進 → サイトアクセス数 月間25%増加",
        "新しごとナビ・マッチングシステムのリニューアル：会員登録フロー簡素化・エージェント管理画面新規開発・AWS EC2サーバー刷新・セキュリティ強化 → 応募数 0〜5件/日 → 最大8件/日（+300%）、ページ滞在時間25%向上、バグ発生率30%削減、稼働率99.9%達成",
        "旧しごとナビ・基幹システム大規模修正：約20年前のASPシステム（SHIFT JIS環境）をUI/UX段階的刷新。SHIFT JIS→UTF-8移行後もデータ整合性100%維持 → 社内ユーザー操作時間30%短縮、継続利用率1.2倍に向上",
      ],
      en: [
        "Corporate site renewal: Took over as sole developer after team shrank from 3 to 1. Created contact page, added labor law content, improved UI/UX → Monthly site traffic +25%",
        "Shigoto Navi matching system overhaul: Simplified registration flow, built agent dashboard, upgraded AWS EC2, strengthened security → Applications 0–5/day → max 8/day (+300%), dwell time +25%, bug rate -30%, 99.9% uptime",
        "Legacy system large-scale refactor: Gradually modernized 20-year-old ASP system (SHIFT JIS). Migrated to UTF-8 with 100% data integrity → Internal user operation time -30%, long-term user retention rate ×1.2",
      ],
      uz: [
        "Korporativ sayt yangilanishi: Jamoa 3 kishidan 1 kishiga qisqarishi bilan yagona mas'ul sifatida qabul qildim. Aloqa sahifasi yaratdim, mehnat qonunchiligiga mos kontent qo'shdim → Oylik tashrif +25%",
        "Shigoto Navi tizimini qayta ishladim: Ro'yxatdan o'tish jarayonini soddalashtirdim, agent boshqaruv paneli yaratdim, AWS EC2 yangiladim → Kunlik arizalar 0-5 dan maksimal 8 taga (+300%), 99.9% barqarorlik",
        "Eski tizim katta refaktoring: 20 yillik ASP tizimini (SHIFT JIS) bosqichma-bosqich modernizatsiya. UTF-8 ga o'tish — ma'lumot yaxlitligi 100% → Ichki foydalanuvchilar operatsion vaqti -30%",
      ],
    },
    stack: ["Laravel", "PHP", "JavaScript", "AWS EC2", "MySQL", "SQL Server", "Bootstrap5", "ASP", "Docker"],
  },
  {
    period: {
      ja: "2021年06月 〜 2022年12月",
      en: "Jun 2021 – Dec 2022",
      uz: "2021-yil Iyun – 2022-yil Dekabr",
    },
    company: {
      ja: "MONOCENTER IN SAMARKAND CITY（ウズベキスタン）",
      en: "MONOCENTER IN SAMARKAND CITY (Uzbekistan)",
      uz: "MONOCENTER IN SAMARKAND CITY (O'zbekiston)",
    },
    companyInfo: {
      ja: "政府支援のIT教育・雇用促進センター（従業員数：約100名）",
      en: "Government-supported IT education & employment center (approx. 100 employees)",
      uz: "Hukumat qo'llab-quvvatlagan IT ta'lim va bandlikni rag'batlantirish markazi (taxminan 100 xodim)",
    },
    role: {
      ja: "バックエンド・インフラ担当リーダー / フルスタックエンジニア",
      en: "Backend & Infrastructure Lead / Full Stack Engineer",
      uz: "Backend va Infra rahbari / Full Stack Dasturchi",
    },
    achievements: {
      ja: [
        "公式Webサイト新規構築（WordPress/PHP/Linux）：要件定義〜運用まで一貫担当。Linuxサーバー環境整備・アクセス解析導入 → 公開3ヶ月で月間アクセス5,000件、問い合わせ件数2倍、検索流入30%増",
        "オンライン教育プラットフォーム構築：PHP + MySQL + WordPressで学習ページ・ダッシュボードを新規実装。教師・生徒の学習進捗可視化、AWSで負荷テスト・セキュリティ強化（認証・アクセス制御）",
        "求職者×企業マッチングプラットフォーム構築：求人検索・応募・面接予約・チャット機能を統合。管理者用ダッシュボード設計・高齢者にも使いやすいアクセシブルUIを実装",
      ],
      en: [
        "Built official website from scratch (WordPress/PHP/Linux): End-to-end from requirements to operations. Set up Linux server, added analytics → 5,000 monthly visits in 3 months, inquiries ×2, search traffic +30%",
        "Online education platform: Built learning pages & dashboards with PHP + MySQL + WordPress. Visualized teacher-student progress, ran AWS load tests, strengthened security (auth & access control)",
        "Job matching platform: Integrated job search, applications, interview booking & chat. Designed admin dashboard with accessible UI for elderly users",
      ],
      uz: [
        "Rasmiy veb-sayt yaratish (WordPress/PHP/Linux): Talablardan operatsiyagacha to'liq javobgar. Linux server va analitika sozladim → 3 oyda oylik 5,000 tashrif, so'rovlar 2 baravar, qidiruv trafigi +30%",
        "Onlayn ta'lim platformasi: PHP + MySQL + WordPress bilan o'quv sahifalar va boshqaruv paneli yaratdim. O'qituvchi-talaba progressni vizualizatsiya, AWS yuk testi va xavfsizlik mustahkamladim",
        "Ish qidirish platformasi: Ish qidirish, ariza, suhbat bron qilish va chat funksiyalarini birlashtirdim. Admin boshqaruv paneli va qulaylikka yo'naltirilgan UI joriy etdim",
      ],
    },
    stack: ["WordPress", "PHP", "MySQL", "Linux", "AWS", "Python", "JavaScript"],
  },
];

export const commercialProjectsData = [
  {
    id: "shigoto-navi",
    title: "「新しごとナビ」求人マッチングシステム刷新",
    titleEn: "Shigoto Navi — Job Matching System Rebuild",
    titleUz: "Shigoto Navi — Ish Qidirish Tizimini Modernizatsiya",
    github: null,
    demo: null,
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "AWS EC2", "Bootstrap5", "Docker"],
    star: {
      ja: {
        situation:
          "既存サイトで応募数が1日最大5件・時には0件。会員登録フローが複雑で離脱率が高く、利用者満足度が低下。50代以上ユーザーが多く急な仕様変更も困難な状況。",
        task: "フルスタックエンジニアとして、要件定義〜本番移行まで3名体制で主担当。応募数増加・UX改善・安定稼働の3軸を同時に推進。",
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
          "Existing site had max 5 applications/day, sometimes zero. Complex registration flow caused high drop-off. Majority of users were 50+, making sudden changes risky.",
        task: "Lead developer in a team of 3, responsible from requirements through production migration. Three simultaneous goals: increase applications, improve UX, ensure stability.",
        action: [
          "Simplified registration flow and redesigned job search navigation",
          "Built new agent management dashboard to streamline job posting updates",
          "Introduced resume creation support to boost application motivation",
          "Overhauled AWS EC2 server environment and strengthened security",
          "Standardized test design to reduce bug occurrence rate",
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
          "Mavjud saytda kuniga maksimal 5 ta ariza, ba'zida nol. Murakkab ro'yxatdan o'tish ko'p foydalanuvchi tark etishiga sabab bo'ldi. Foydalanuvchilarning ko'pchiligi 50+ yosh, keskin o'zgarishlar xavfli edi.",
        task: "3 kishilik jamoada asosiy dasturchi, talablardan ishga tushirishgacha mas'ul. Uch maqsad: arizalarni oshirish, UX yaxshilash, barqarorlikni ta'minlash.",
        action: [
          "Ro'yxatdan o'tish jarayonini soddalashtirib, ish qidirish yo'nalishini qayta loyihalash",
          "Agent boshqaruv paneli va dashboard yaratib, ish e'lonlarini yangilash jarayonini optimallashtirish",
          "Resume yaratish yordami joriy etib, ariza berishga motivatsiyani oshirish",
          "AWS EC2 muhitini yangilash va xavfsizlikni mustahkamlash",
          "Test dizaynini standartlashtirish orqali xato darajasini kamaytirish",
        ],
        result: [
          "Arizalar: 0-5/kun → maksimal 8/kun (+300%), 6-7/kun barqaror",
          "Sahifada turish vaqti: +25%",
          "Chiqarilgandan keyin xato darajasi: -30%",
          "Tizim barqarorligi: 99.9% erishildi",
        ],
      },
    },
  },
  {
    id: "legacy-modernization",
    title: "旧システム大規模修正・SHIFT JIS→UTF-8移行",
    titleEn: "Legacy System Refactor & SHIFT JIS→UTF-8 Migration",
    titleUz: "Eski Tizim Refaktoring va SHIFT JIS→UTF-8 Migratsiya",
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
          "20-year-old ASP-based system running on SHIFT JIS. Aged security and usability. Most users were middle-aged or older, making sudden UI changes very risky.",
        task: "Led gradual UI/UX modernization while maintaining stability and ensuring backward data compatibility.",
        action: [
          "Gradually modernized frontend & backend UI/UX while maintaining legacy ASP code",
          "Redesigned job company and employee information management screens",
          "Optimized form inputs and search to shorten work flows",
          "Migrated SHIFT JIS environment to UTF-8, ensuring data compatibility",
          "Implemented security updates compatible with the legacy environment",
        ],
        result: [
          "Internal user operation time: -30%",
          "System satisfaction: internal survey +25%",
          "Old data integrity: 100% maintained post-migration",
          "Long-term users (10+ years registered): retention ×1.2",
        ],
      },
      uz: {
        situation:
          "20 yillik ASP tizimi (SHIFT JIS muhiti). Eskirgan xavfsizlik va foydalanish qulayligi. Foydalanuvchilarning aksariyati o'rta yoshli, keskin UI o'zgarishlar xavfli.",
        task: "Barqarorlikni saqlab, bosqichma-bosqich UI/UX modernizatsiyasini boshqardim va eski ma'lumotlar muvofiqligini ta'minladim.",
        action: [
          "Eski ASP kodni saqlab, frontend va backend UI/UX ni bosqichma-bosqich yangiladim",
          "Ish beruvchi va xodim ma'lumotlari boshqaruv sahifalarini qayta loyihaladim",
          "Forma kiritish va qidiruvni optimallashtirdim",
          "SHIFT JIS muhitini UTF-8 ga o'tkazdim, ma'lumotlar muvofiqligini ta'minladim",
          "Xavfsizlikni yangiladim",
        ],
        result: [
          "Ichki foydalanuvchilar operatsion vaqti: -30%",
          "Tizim qoniqarlilik darajasi: ichki so'rovnoma +25%",
          "Eski ma'lumotlar yaxlitligi: migratsiyadan keyin 100%",
          "Uzoq muddatli foydalanuvchilar (10+ yil): davomiylik ×1.2",
        ],
      },
    },
  },
];

export const personalProjectsData = [
  {
    id: "trustflow-crm",
    title: "TrustFlow CRM",
    subtitle: {
      ja: "マルチテナントSaaS CRM（開発中）",
      en: "Multi-tenant SaaS CRM (In Development)",
      uz: "Ko'p ijarachilik SaaS CRM (Ishlanmoqda)",
    },
    status: "wip" as const,
    github: "https://github.com/sherzot/TrustFlowCRM",
    demo: null,
    stack: ["Laravel 11", "Filament", "React", "TypeScript", "PostgreSQL", "Supabase", "Docker", "OpenAI API"],
    description: {
      ja: "Laravel + FilamentによるマルチテナントCRM。AI機能（リード優先順位付け・自動メール生成）を統合中。目的：マルチテナントアーキテクチャとAI統合の技術検証。\n\n現在の進捗：認証・マルチテナント基盤完成、AI機能実装中。",
      en: "Multi-tenant CRM built with Laravel + Filament. Integrating AI features (lead prioritization, automated email generation). Goal: validating multi-tenant architecture and AI integration patterns.\n\nCurrent: Auth & multi-tenant foundation complete, AI features in progress.",
      uz: "Laravel + Filament bilan qurilgan ko'p ijarachilik CRM. AI xususiyatlari integratsiya qilinmoqda.\n\nHozirgi holat: Autentifikatsiya va ko'p ijarachilik asosi tayyor, AI funksiyalar ishlanmoqda.",
    },
  },
  {
    id: "jobmatcher",
    title: "JobMatcher Platform",
    subtitle: {
      ja: "AIマッチング求人プラットフォーム（開発中）",
      en: "AI-powered Job Matching Platform (In Development)",
      uz: "AI yordamida Ish Qidirish Platformasi (Ishlanmoqda)",
    },
    status: "wip" as const,
    github: "https://github.com/sherzot/JobMatcher",
    demo: null,
    stack: ["Next.js 15", "TypeScript", "Laravel", "Supabase", "PostgreSQL", "OpenAI API", "Docker"],
    description: {
      ja: "Career OS + ATSワークフロー + AIマッチングを統合したプラットフォーム。求職者と企業のミスマッチを最小化することを目的とした技術検証プロジェクト。",
      en: "Platform integrating Career OS + ATS workflow + AI matching. A technical validation project aimed at minimizing candidate-company mismatch.",
      uz: "Career OS + ATS ish jarayoni + AI moslashuvini birlashtirgan platforma. Nomzod va kompaniya o'rtasidagi nomuvofiqlikni minimallashtirish loyihasi.",
    },
  },
  {
    id: "ai-concierge",
    title: "AI Business Concierge",
    subtitle: {
      ja: "AIビジネスアシスタント（設計段階）",
      en: "AI Business Assistant (Design Stage)",
      uz: "AI Biznes Yordamchisi (Loyihalash bosqichida)",
    },
    status: "design" as const,
    github: "https://github.com/sherzot",
    demo: null,
    stack: ["Next.js 15", "TypeScript", "Go", "Supabase", "OpenAI API", "Claude API", "RAG", "MCP"],
    description: {
      ja: "RAG + MCPアーキテクチャを活用した業務特化型AIアシスタント。Claude Code + Go言語学習の実践プロジェクトとして設計中。",
      en: "Business-specialized AI assistant leveraging RAG + MCP architecture. Designed as a hands-on Claude Code + Go learning project.",
      uz: "RAG + MCP arxitekturasidan foydalanadigan biznesga ixtisoslashgan AI yordamchisi. Claude Code + Go tili o'rganish loyihasi.",
    },
  },
];
