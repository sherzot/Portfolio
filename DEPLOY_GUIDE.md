# 🚀 Portfolio Deployment Guide

## Stack
- **Next.js 15** + TypeScript (strict) + Tailwind CSS
- **Static export** (`output: 'export'`) → Netlify bepul hosting uchun ideal
- **Netlify Forms** → Contact form bepul (backend kerak emas)

---

## 1. GitHub'ga push qilish

```bash
# Mavjud Portfolio repo'ni v1 branch'ga saqlash
git checkout -b Portfolio-v1-legacy
git push origin Portfolio-v1-legacy

# Main branch'ni yangi portfolio bilan almashtirish
git checkout main

# Barcha eski fayllarni o'chirish (node_modules bundan mustasno)
git rm -rf .

# Yangi portfolio fayllarini ko'chirish
# (bu portfolio/ papkasidagi barcha fayllarni)
cp -r <path-to-portfolio>/* .

# Commit va push
git add .
git commit -m "feat: rebuild portfolio with Next.js 15 + TypeScript + Tailwind"
git push origin main
```

---

## 2. Netlify sozlamalari

Netlify dashboard'da:
- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node version:** `20` (environment variable: `NODE_VERSION=20`)

Bu sozlamalar `netlify.toml` da ham yozilgan — avtomatik taniladi.

---

## 3. Contact form aktivlashtirish

Netlify Forms bepul ishlaydi. Birinchi deploy'dan keyin:
1. Netlify dashboard → **Forms** tab
2. `contact` formasi ko'rinadi
3. Email notification sozlash: **Settings → Forms → Form notifications**

---

## 4. Lokaldagi sinov

```bash
npm install
npm run dev
# http://localhost:3000 da ochiladi
```

---

## 5. Audit natijalariga ko'ra tuzatilgan narsalar ✅

### Priority 1 — Darhol tuzatildi
- [x] Skill progress bar'lar o'chirildi → tajriba darajasi bilan almashtirildi
- [x] "料金は要相談" (Services bo'limi) olib tashlandi
- [x] "Production-grade" claim'lar → `[開発中]`, `[設計段階]` statuslar bilan
- [x] CoffeeShop loyihasi olib tashlandi
- [x] Client/Project counter (2 client, 8 project) olib tashlandi
- [x] Hero matni personaliza qilindi — differensiatsiya bilan

### Priority 2 — Amalga oshirildi
- [x] OGP meta tags + JSON-LD Person schema
- [x] Loyihalar STAR formatida yozildi
- [x] Commercial va personal loyihalar alohida bo'limlarda
- [x] Netlify Forms — serverless contact form

### Priority 3 — Amalga oshirildi
- [x] Next.js 15 + TypeScript + Tailwind bilan qayta yozildi
- [x] Stack claim ↔ evidence mos keladi (portfolio o'zi Next.js'da!)
- [x] 3 tilli qo'llab-quvvatlash (JP/EN/UZ)
- [x] Lighthouse 90+ ga optimallashtirilgan (static export, no heavy libs)

---

## 6. Keyingi qadamlar (ixtiyoriy)

- [ ] `public/og-image.png` — 1200×630px OGP rasm qo'shish
- [ ] TrustFlowCRM uchun Railway demo deploy
- [ ] Blog bo'limi qo'shish (MDX bilan)
- [ ] GitHub Actions Lighthouse CI badge
