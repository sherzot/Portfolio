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
    category: { ja: "AI / その他", en: "AI & Others", uz: "AI va Boshqalar" },
    items: [
      {
        name: "OpenAI API",
        level: "production" as const,
        tags: ["GPT-4", "function calling", "RAG"],
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
    period: { ja: "2022年4月 〜 現在", en: "April 2022 – Present", uz: "2022-yil Aprel – Hozir" },
    company: {
      ja: "日本企業（詳細は面接時にお伝えします）",
      en: "Japanese IT Company (details upon request)",
      uz: "Yapon IT kompaniyasi (tafsilotlar so'rov bo'yicha)",
    },
    role: {
      ja: "フルスタックエンジニア",
      en: "Full Stack Engineer",
      uz: "Full Stack Dasturchi",
    },
    achievements: {
      ja: [
        "レガシーASPシステムからLaravel 10への段階的移行（Strangler Figパターン）",
        "SHIFT_JIS→UTF-8変換スクリプト作成、データ損失ゼロで移行完了",
        "AWS EC2 + RDSでマルチAZ構成、99.9% SLAを実現",
        "サイトトラフィック25%増加、内部業務30%効率化を達成",
        "ChatGPT API統合による自動メール生成・求人マッチング機能を開発",
      ],
      en: [
        "Gradual migration from legacy ASP to Laravel 10 (Strangler Fig pattern)",
        "Built SHIFT_JIS→UTF-8 conversion script — zero data loss migration",
        "AWS EC2 + RDS multi-AZ setup achieving 99.9% SLA",
        "25% site traffic increase, 30% internal efficiency improvement",
        "Integrated ChatGPT API for automated email generation and job matching",
      ],
      uz: [
        "Eski ASP tizimidan Laravel 10 ga bosqichma-bosqich migratsiya (Strangler Fig naqsh)",
        "SHIFT_JIS→UTF-8 konvertatsiya skripti — ma'lumot yo'qotilmasdan migratsiya",
        "AWS EC2 + RDS Multi-AZ konfiguratsiya, 99.9% SLA",
        "Sayt trafigi 25% oshdi, ichki jarayonlar samaradorligi 30% yaxshilandi",
        "ChatGPT API integratsiyasi — avtomatik email va ish o'rinlari moslashuvi",
      ],
    },
    stack: ["Laravel", "PHP", "React", "TypeScript", "AWS", "Docker", "MySQL", "SQL Server", "OpenAI API"],
  },
];

export const commercialProjectsData = [
  {
    id: "shigoto-navi",
    title: "「Shigoto Navi」求人マッチングシステム刷新",
    titleEn: "Shigoto Navi — Job Matching System Rebuild",
    titleUz: "Shigoto Navi — Ish Qidirish Tizimini Modernizatsiya",
    github: null,
    demo: null,
    stack: ["Laravel 10", "React", "TypeScript", "MySQL", "AWS EC2", "RDS", "Docker"],
    star: {
      ja: {
        situation:
          "レガシーASPシステムで日次応募数が2件以下。SHIFT_JIS文字化けとSQLインジェクション脆弱性が頻発。ページ読み込み時間4.2秒。",
        task: "フルスタック開発者として、要件定義から本番移行まで単独で担当。",
        action: [
          "ASP→Laravel 10へ段階的移行（Strangler Figパターン）",
          "SHIFT_JIS→UTF-8変換スクリプト作成、データ損失ゼロで移行完了",
          "MySQL→SQL Server間のデータ同期をDocker + Cronで自動化",
          "AWS EC2 + RDSでマルチAZ構成を実現",
        ],
        result: [
          "日次応募数: 2件 → 8件（+300%）",
          "ページ読み込み時間: 4.2秒 → 1.1秒",
          "運用工数: 月40時間 → 月8時間（-80%）",
          "99.9% SLA達成",
        ],
      },
      en: {
        situation:
          "Legacy ASP system with under 2 daily applications. Frequent SHIFT_JIS encoding errors and SQL injection vulnerabilities. 4.2s page load time.",
        task: "Sole developer responsible for requirements to production migration.",
        action: [
          "Gradual ASP→Laravel 10 migration (Strangler Fig pattern)",
          "Built SHIFT_JIS→UTF-8 script — zero data loss",
          "Automated MySQL↔SQL Server sync via Docker + Cron",
          "AWS EC2 + RDS multi-AZ configuration",
        ],
        result: [
          "Daily applications: 2 → 8 (+300%)",
          "Page load time: 4.2s → 1.1s",
          "Operation hours: 40h/mo → 8h/mo (-80%)",
          "99.9% SLA achieved",
        ],
      },
      uz: {
        situation:
          "Eski ASP tizimida kunlik 2 dan kam ariza. SHIFT_JIS kodlash xatolari va SQL injection zaifliklar. Sahifa yuklanish vaqti 4.2 soniya.",
        task: "Yagona dasturchi sifatida talablardan boshlab ishga tushirishgacha javobgar.",
        action: [
          "ASP→Laravel 10 bosqichma-bosqich migratsiya (Strangler Fig naqsh)",
          "SHIFT_JIS→UTF-8 skripti — ma'lumot yo'qotilmadi",
          "MySQL↔SQL Server sinxronizatsiyasi Docker + Cron bilan",
          "AWS EC2 + RDS Multi-AZ konfiguratsiya",
        ],
        result: [
          "Kunlik arizalar: 2 → 8 ta (+300%)",
          "Sahifa yuklanish: 4.2s → 1.1s",
          "Operatsion soatlar: oyiga 40s → 8s (-80%)",
          "99.9% SLA erishildi",
        ],
      },
    },
  },
  {
    id: "legacy-modernization",
    title: "企業サイト・基幹システム近代化",
    titleEn: "Corporate Site & Core System Modernization",
    titleUz: "Korporativ Sayt va Asosiy Tizim Modernizatsiyasi",
    github: null,
    demo: null,
    stack: ["Laravel", "WordPress", "React", "PHP", "MySQL", "Docker", "AWS"],
    star: {
      ja: {
        situation:
          "複数クライアントの古いWordPressとカスタムPHPシステムがセキュリティリスクを抱えた状態で運用中。",
        task: "各システムの技術的負債を解消し、保守性・セキュリティを改善。",
        action: [
          "WordPressテーマのカスタマイズ・プラグイン最適化",
          "古いPHPシステムのLaravel化・モジュール分割",
          "Docker化によるローカル開発環境の統一",
          "GitHub Actions CI/CDパイプライン構築",
        ],
        result: [
          "サイトトラフィック25%増加",
          "デプロイ時間: 手動30分 → CI/CD 3分",
          "セキュリティ脆弱性ゼロ（監査後）",
        ],
      },
      en: {
        situation:
          "Multiple clients running outdated WordPress and custom PHP systems with security risks.",
        task: "Resolve technical debt across systems, improve maintainability and security.",
        action: [
          "WordPress theme customization & plugin optimization",
          "Legacy PHP → Laravel refactoring with module separation",
          "Dockerization for unified local development",
          "GitHub Actions CI/CD pipeline setup",
        ],
        result: [
          "Site traffic +25%",
          "Deploy time: manual 30min → CI/CD 3min",
          "Zero security vulnerabilities post-audit",
        ],
      },
      uz: {
        situation:
          "Bir nechta mijozlar eskirgan WordPress va PHP tizimlarini xavfsizlik xatarlari bilan ishlatmoqda.",
        task: "Tizimlar bo'ylab texnik qarzni bartaraf etish, qo'llab-quvvatlash va xavfsizlikni yaxshilash.",
        action: [
          "WordPress tema moslashuvi va plagini optimizatsiyasi",
          "Eski PHP → Laravel refaktoring",
          "Docker bilan yagona lokal muhit",
          "GitHub Actions CI/CD quvuri",
        ],
        result: [
          "Sayt trafigi +25%",
          "Deploy vaqti: qo'lda 30 daq → CI/CD 3 daq",
          "Audit'dan keyin nol xavfsizlik zaifligi",
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
    stack: ["Laravel 11", "Filament", "React", "TypeScript", "PostgreSQL", "Docker", "OpenAI API"],
    description: {
      ja: "Laravel + FilamentによるマルチテナントCRM。AI機能（リード優先順位付け・自動メール生成）を統合中。目的：マルチテナントアーキテクチャとAI統合の技術検証。\n\n現在の進捗：認証・マルチテナント基盤完成、AI機能実装中。",
      en: "Multi-tenant CRM built with Laravel + Filament. Integrating AI features (lead prioritization, automated email generation). Goal: validating multi-tenant architecture and AI integration patterns.\n\nCurrent progress: Auth & multi-tenant foundation complete, AI features in progress.",
      uz: "Laravel + Filament bilan qurilgan ko'p ijarachilik CRM. AI xususiyatlari (yetakchilarni ustuvorlashtirish, avtomatik email) integratsiya qilinmoqda.\n\nHozirgi holat: Autentifikatsiya va ko'p ijarachilik asosi tayyor, AI funksiyalar ishlanmoqda.",
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
    stack: ["Next.js 15", "TypeScript", "Laravel", "PostgreSQL", "OpenAI API", "Docker"],
    description: {
      ja: "Career OS + ATSワークフロー + AIマッチングを統合したプラットフォーム。求職者と企業のミスマッチを最小化することを目的とした技術検証プロジェクト。",
      en: "Platform integrating Career OS + ATS workflow + AI matching. A technical validation project aimed at minimizing candidate-company mismatch.",
      uz: "Career OS + ATS ish jarayoni + AI moslashuvini birlashtirgan platforma. Nomzod va kompaniya o'rtasidagi nomuvofiqlikni minimallashtirish maqsadidagi texnik validatsiya loyihasi.",
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
    stack: ["Next.js 15", "TypeScript", "Go", "PostgreSQL", "OpenAI API", "RAG", "MCP"],
    description: {
      ja: "RAG + MCPアーキテクチャを活用した業務特化型AIアシスタント。Go言語学習の実践プロジェクトとして設計中。",
      en: "Business-specialized AI assistant leveraging RAG + MCP architecture. Designed as a hands-on Go learning project.",
      uz: "RAG + MCP arxitekturasidan foydalanadigan biznesga ixtisoslashgan AI yordamchisi. Go tilini o'rganish loyihasi sifatida loyihalashtirilmoqda.",
    },
  },
];
