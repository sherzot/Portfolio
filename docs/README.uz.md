# Sherzod Musurmonov — Portfolio

> [日本語](../README.md) | [English](README.en.md) | **O'zbek**

Next.js 15 + TypeScript + Tailwind CSS bilan qurilgan shaxsiy portfolio sayti, Netlify da joylashtirilgan.

🌐 **Jonli sayt:** [sherdev.netlify.app](https://sherdev.netlify.app)

---

## 👤 Profil

| | |
|---|---|
| Ism | Sherzod Musurmonov |
| Lavozim | Full Stack Dasturchi |
| Joylashuv | Tokio, Yaponiya |
| Tillar | Yaponcha (Biznes) / Inglizcha (Yuqori) / O'zbek (Ona tili) |
| GitHub | [@sherzot](https://github.com/sherzot) |
| Email | sherzodmusurmonov81@gmail.com |

3+ yil davomida o'z mahsulotlarini End-to-End qurdim — talablar, tizim dizayni, ishlanma, test va ishlab chiqarishgacha. O'zbekistonda 1.5 yil (IT markazi) va Yaponiyada 1.5 yil tajriba.

---

## 🛠 Texnik Ko'nikmalar

| Kategoriya | Texnologiyalar |
|------------|---------------|
| Frontend | React / Next.js 15, TypeScript, Tailwind CSS |
| Backend | Laravel (PHP), Node.js, Supabase |
| Ma'lumotlar bazasi | PostgreSQL, MySQL, SQL Server |
| Infra | AWS (EC2/RDS/S3), Docker, GitHub Actions |
| AI / Toollar | OpenAI API, Claude Code, Cursor |

---

## 📁 Loyiha Tuzilmasi

```
portfolio-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Metadata, JSON-LD, provayderlar
│   │   ├── page.tsx          # Sahifa ildizi
│   │   └── globals.css       # Global stillar (dark/light mode)
│   ├── components/
│   │   ├── Navigation.tsx    # Navigatsiya (til, tema, rezyume)
│   │   ├── Hero.tsx          # Bosh qism
│   │   ├── About.tsx         # Men haqimda va karyera maqsadi
│   │   ├── Skills.tsx        # Texnik ko'nikmalar
│   │   ├── Experience.tsx    # Ish tajribasi
│   │   ├── Projects.tsx      # Loyihalar (STAR format)
│   │   ├── Contact.tsx       # Aloqa formasi
│   │   └── Footer.tsx        # Pastki qism
│   ├── context/
│   │   ├── LanguageContext.tsx  # Ko'p tillilik (JP/EN/UZ)
│   │   └── ThemeContext.tsx     # Dark/light mode
│   ├── lib/
│   │   ├── data.ts           # Tajriba va loyiha ma'lumotlari
│   │   ├── i18n.ts           # Tarjima matnlari
│   │   └── resume.ts         # Rezyume havolasi (Google Drive)
│   └── types/
│       └── global.d.ts       # lucide-react tip e'lonlari
├── public/
├── netlify.toml
└── next.config.ts            # Statik eksport konfiguratsiyasi
```

---

## ✨ Xususiyatlar

- **3 til qo'llab-quvvatlash** — Yaponcha / Inglizcha / O'zbek (brauzer sozlamasiga ko'ra, localStorage da saqlanadi)
- **Dark / Light mode** — Tizim sozlamasini boshlang'ich qiymat sifatida ishlatadi, qo'lda almashtiriladi
- **Rezyume havolasi** — Google Drive faqat ko'rish uchun (yuklab olish yo'q)
- **STAR format loyihalar** — Vaziyat / Rol / Bajarilgan ishlar / Natijalar akkordeon ko'rinishida
- **Netlify Forms** — Backend siz aloqa formasi
- **OGP + JSON-LD** — Ijtimoiy tarmoqlar va SEO uchun tayyor

---

## 🚀 Lokal Ishlab Chiqish

```bash
# Repozitoriyni klonlash
git clone https://github.com/sherzot/Portfolio.git
cd Portfolio

# Bog'liqliklarni o'rnatish
npm install

# Ishlab chiqish serverini ishga tushirish
npm run dev
# → http://localhost:3000

# Ishlab chiqarish uchun qurish (statik eksport)
npm run build
# → /out papkasiga chiqariladi
```

---

## 🌐 Joylashtirish

Netlify ga ulangan. `main` branchga push qilganda avtomatik joylashtiriladi.

```bash
git add .
git commit -m "feat: tavsif"
git push origin main
```

**Netlify konfiguratsiyasi (`netlify.toml`):**

```toml
[build]
  command   = "npm run build"
  publish   = "out"

[build.environment]
  NODE_VERSION = "20"
```

---

## 🌿 Branch Tuzilmasi

| Branch | Maqsad | Netlify |
|--------|--------|---------|
| `main` | Ishlab chiqarish — jonli sayt | ✅ Avtomatik deploy |
| `feature/*` | Yangi funksiya ishlanmasi | — |
| `fix/*` | Xato tuzatishlari | — |
| `content/*` | Matn va ma'lumot yangilanishlari | — |

**Tavsiya etilgan ish jarayoni:**

```bash
# Yangi branch yarating
git checkout -b feature/your-feature-name

# O'zgarishlarni commit qiling
git add .
git commit -m "feat: tavsif"

# Main ga birlashtiring va deploy qiling
git checkout main
git merge feature/your-feature-name
git push origin main
```

**Repozitoriy:** [github.com/sherzot/Portfolio](https://github.com/sherzot/Portfolio)

---

## 📄 Litsenziya

© 2024 Sherzod Musurmonov. Barcha huquqlar himoyalangan.
