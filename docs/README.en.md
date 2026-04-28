# Sherzod Musurmonov — Portfolio

> [日本語](../README.md) | **English** | [O'zbek](README.uz.md)

A personal portfolio site built with Next.js 15 + TypeScript + Tailwind CSS, hosted on Netlify.

🌐 **Live site:** [sherdev.netlify.app](https://sherdev.netlify.app)

---

## 👤 Profile

| | |
|---|---|
| Name | Sherzod Musurmonov |
| Role | Full Stack Engineer |
| Location | Tokyo, Japan |
| Languages | Japanese (Business) / English (Advanced) / Uzbek (Native) |
| GitHub | [@sherzot](https://github.com/sherzot) |
| Email | sherzodmusurmonov81@gmail.com |

3+ years building in-house products end-to-end — from requirements & system design through development, testing, and production. Experience spans an IT education center in Uzbekistan (1.5 yrs) and Japanese companies (1.5 yrs).

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React / Next.js 15, TypeScript, Tailwind CSS |
| Backend | Laravel (PHP), Node.js, Supabase |
| Database | PostgreSQL, MySQL, SQL Server |
| Infra | AWS (EC2/RDS/S3), Docker, GitHub Actions |
| AI / Tools | OpenAI API, Claude Code, Cursor |

---

## 📁 Project Structure

```
portfolio-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Metadata, JSON-LD, providers
│   │   ├── page.tsx          # Page root
│   │   └── globals.css       # Global styles (dark/light mode)
│   ├── components/
│   │   ├── Navigation.tsx    # Nav (language switcher, theme toggle, resume link)
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About & career vision
│   │   ├── Skills.tsx        # Tech stack
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Projects.tsx      # Projects (STAR format)
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer
│   ├── context/
│   │   ├── LanguageContext.tsx  # i18n (JP/EN/UZ)
│   │   └── ThemeContext.tsx     # Dark/light mode
│   ├── lib/
│   │   ├── data.ts           # Experience & project data
│   │   ├── i18n.ts           # Translation strings
│   │   └── resume.ts         # Resume link (Google Drive)
│   └── types/
│       └── global.d.ts       # lucide-react type declarations
├── public/
├── netlify.toml
└── next.config.ts            # Static export config
```

---

## ✨ Features

- **3-language support** — Japanese / English / Uzbek (respects browser preference, localStorage persistence)
- **Dark / Light mode** — System preference as default, manual toggle
- **Resume link** — Google Drive view-only (no download)
- **STAR-format projects** — Situation / Role / Action / Result in accordion layout
- **Netlify Forms** — Contact form with no backend required
- **OGP + JSON-LD** — Social sharing & SEO ready

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/sherzot/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Production build (static export)
npm run build
# → outputs to /out
```

---

## 🌐 Deployment

Connected to Netlify. Auto-deploys on push to `main`.

```bash
git add .
git commit -m "feat: description"
git push origin main
```

**Netlify config (`netlify.toml`):**

```toml
[build]
  command   = "npm run build"
  publish   = "out"

[build.environment]
  NODE_VERSION = "20"
```

---

## 🌿 Branch Structure

| Branch | Purpose | Netlify |
|--------|---------|---------|
| `main` | Production — live site | ✅ Auto-deploy |
| `feature/*` | New feature development | — |
| `fix/*` | Bug fixes | — |
| `content/*` | Text & data updates | — |

**Recommended workflow:**

```bash
# Create a new feature branch
git checkout -b feature/your-feature-name

# Commit changes
git add .
git commit -m "feat: describe the change"

# Merge to main and deploy
git checkout main
git merge feature/your-feature-name
git push origin main
```

**Repository:** [github.com/sherzot/Portfolio](https://github.com/sherzot/Portfolio)

---

## 📄 License

© 2024 Sherzod Musurmonov. All rights reserved.
