# シェルゾド・ムスルモノフ — ポートフォリオ

> **日本語** | [English](docs/README.en.md) | [O'zbek](docs/README.uz.md)

フルスタックエンジニアのポートフォリオサイトです。Next.js 15 + TypeScript + Tailwind CSS で構築し、Netlify にホスティングしています。

🌐 **ライブサイト:** [sherdev.netlify.app](https://sherdev.netlify.app)

---

## 👤 プロフィール

| 項目 | 内容 |
|------|------|
| 名前 | シェルゾド・ムスルモノフ |
| 職種 | フルスタックエンジニア |
| 在住 | 東京都 |
| 言語 | 日本語（ビジネス）/ 英語（上級）/ ウズベク語（母国語） |
| GitHub | [@sherzot](https://github.com/sherzot) |
| メール | sherzodmusurmonov81@gmail.com |

ウズベキスタンのIT教育センター（1年6ヶ月）と日本（1年6ヶ月）で、合計3年以上にわたって自社サービス・プロダクト開発に従事。要件定義・システム設計・開発・テスト・本番運用まで一貫して担当。

---

## 🛠 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フロントエンド | React / Next.js 15, TypeScript, Tailwind CSS |
| バックエンド | Laravel (PHP), Node.js, Supabase |
| データベース | PostgreSQL, MySQL, SQL Server |
| インフラ | AWS (EC2/RDS/S3), Docker, GitHub Actions |
| AI / ツール | OpenAI API, Claude Code, Cursor |

---

## 📁 プロジェクト構成

```
portfolio-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # メタデータ・JSON-LD・プロバイダー
│   │   ├── page.tsx          # ページルート
│   │   └── globals.css       # グローバルスタイル（ダーク/ライトモード）
│   ├── components/
│   │   ├── Navigation.tsx    # ナビゲーション（言語切替・テーマ切替・履歴書リンク）
│   │   ├── Hero.tsx          # ヒーローセクション
│   │   ├── About.tsx         # 自己紹介・キャリアビジョン
│   │   ├── Skills.tsx        # 技術スタック
│   │   ├── Experience.tsx    # 職務経歴
│   │   ├── Projects.tsx      # プロジェクト（STAR形式）
│   │   ├── Contact.tsx       # お問い合わせフォーム
│   │   └── Footer.tsx        # フッター
│   ├── context/
│   │   ├── LanguageContext.tsx  # 多言語（JP/EN/UZ）
│   │   └── ThemeContext.tsx     # ダーク/ライトモード
│   ├── lib/
│   │   ├── data.ts           # 職務経歴・プロジェクトデータ
│   │   ├── i18n.ts           # 翻訳テキスト
│   │   └── resume.ts         # 履歴書リンク（Google Drive）
│   └── types/
│       └── global.d.ts       # lucide-react 型定義
├── public/                   # 静的ファイル
├── netlify.toml              # Netlify デプロイ設定
└── next.config.ts            # Next.js 設定（静的エクスポート）
```

---

## ✨ 機能

- **3言語対応** — 日本語 / English / O'zbek（ブラウザ設定を考慮、localStorage 永続化）
- **ダーク / ライトモード** — システム設定を初期値として使用、手動切替可能
- **履歴書リンク** — Google Drive ビューのみ（ダウンロード不可）
- **STAR形式プロジェクト** — 課題 / 役割 / 実施 / 成果をアコーディオン表示
- **Netlify Forms** — バックエンドなしのお問い合わせフォーム
- **OGP + JSON-LD** — SNS シェア・SEO 対応済み

---

## 🚀 ローカル開発

```bash
# リポジトリをクローン
git clone https://github.com/sherzot/Portfolio.git
cd Portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
# → http://localhost:3000

# 本番ビルド（静的エクスポート）
npm run build
# → /out ディレクトリに出力
```

---

## 🌐 デプロイ

Netlify に接続済み。`main` ブランチへのプッシュで自動デプロイします。

```bash
git add .
git commit -m "feat: 変更内容"
git push origin main
```

**Netlify 設定 (`netlify.toml`):**

```toml
[build]
  command   = "npm run build"
  publish   = "out"

[build.environment]
  NODE_VERSION = "20"
```

---

## 🌿 ブランチ構成

| ブランチ | 用途 | Netlify |
|---------|------|---------|
| `main` | 本番環境・公開中 | ✅ 自動デプロイ |
| `feature/*` | 新機能開発 | — |
| `fix/*` | バグ修正 | — |
| `content/*` | テキスト・データ更新 | — |

**推奨ワークフロー:**

```bash
# 新しい機能ブランチを作成
git checkout -b feature/your-feature-name

# 変更をコミット
git add .
git commit -m "feat: 機能の説明"

# main にマージして本番デプロイ
git checkout main
git merge feature/your-feature-name
git push origin main
```

**リポジトリ:** [github.com/sherzot/Portfolio](https://github.com/sherzot/Portfolio)

---

## 📄 ライセンス

© 2024 Sherzod Musurmonov. All rights reserved.
