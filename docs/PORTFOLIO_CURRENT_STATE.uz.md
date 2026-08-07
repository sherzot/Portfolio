# Portfolio — hozirgi holat va bajarilgan ishlar

> Yangilangan sana: 2026-08-07
>
> Mazmun uchun tayanch commit: `5009b4a`
>
> Jonli sayt: [sherdev.netlify.app](https://sherdev.netlify.app)
>
> Repository: [github.com/sherzot/Portfolio](https://github.com/sherzot/Portfolio)

## 1. Hujjatning maqsadi

Bu hujjat Sherzod Musurmonov portfoliosining hozirgi mazmuni, dizayn qarorlari, texnik tuzilishi, bajarilgan yaxshilanishlar va keyingi yangilash tartibi uchun yagona qisqa qo‘llanmadir.

Portfolio quyidagi auditoriyaga mo‘ljallangan:

- Yaponiyadagi HR va texnik rekruterlar;
- Engineering Manager, Project Leader va Product Managerlar;
- full-stack, product engineering, cloud va AI-enabled SaaS tajribasini baholovchi jamoalar;
- hamkorlik yoki texnik maslahat uchun mutaxassis izlayotganlar.

Asosiy pozitsiyalash: murakkab biznes talablarini talablarni aniqlashdan tortib tizim dizayni, full-stack ishlab chiqish, infratuzilma va ekspluatatsiyagacha olib boradigan product engineer.

## 2. Hozirgi portfolio tuzilishi

Sahifadagi bo‘limlar quyidagi tartibda joylashgan:

1. `Navigation` — bo‘limlar, til, tema va rezyume havolasi;
2. `Hero` — mutaxassislik, asosiy qiymat taklifi va vizual tizim;
3. `Projects` — production case studylar va ochiq kodli Labs loyihalari;
4. `Experience` — ish tajribasi va o‘lchanadigan natijalar;
5. `Skills` — frontend, backend, data, cloud, arxitektura va AI kompetensiyalari;
6. `About` — muhandislik yondashuvi va keyingi professional maqsad;
7. `Contact` — email va Netlify Forms orqali aloqa;
8. `Footer` — brend, GitHub va aloqa havolalari.

Sahifa bir sahifali, statik eksport qilinadigan Next.js ilovasi. Bo‘limlar `src/app/page.tsx` ichida yig‘iladi.

## 3. Portfolio nimani ko‘rsatadi

### 3.1 Production case studylar

Case studylar STAR formatiga yaqin tuzilgan:

- muammo yoki vaziyat;
- bajarilgan rol va javobgarlik;
- amalga oshirilgan texnik ishlar;
- kuzatilgan natijalar.

#### Shigoto Navi — ish qidirish tizimi

Ko‘rsatiladigan asosiy yo‘nalishlar:

- talablarni aniqlashdan production ekspluatatsiyasigacha end-to-end yetkazib berish;
- ro‘yxatdan o‘tish va ish qidirish jarayonlarini soddalashtirish;
- agent boshqaruv paneli va rezyume yaratish yordami;
- AWS EC2 muhitini yangilash;
- arizalar sonining `+300%` o‘sishi va `99.9%` ishlash ko‘rsatkichi.

#### Legacy modernization — SHIFT JIS’dan UTF-8’ga migratsiya

Ko‘rsatiladigan asosiy yo‘nalishlar:

- taxminan 20 yillik ASP tizimini bosqichma-bosqich yangilash;
- keskin UX o‘zgarishisiz ish jarayonlarini yaxshilash;
- SHIFT JIS’dan UTF-8’ga ma’lumotlarni ko‘chirish;
- migratsiyadan keyin `100%` ma’lumotlar yaxlitligini saqlash;
- ichki operatsion vaqtni `30%` qisqartirish.

#### Samarqand shahri Kasbiy ko‘nikmalar markazi

Tashkilotning portfolio ichidagi to‘g‘ri nomlanishi:

> Samarqand shahri Kasbiy ko‘nikmalar markazi — sobiq “Ishga marhamat” monomarkazi.

Case study endi bajarilgan ishlarning to‘liq ketma-ketligini ko‘rsatadi:

1. WordPress, PHP va Linux yordamida rasmiy veb-sayt yaratish;
2. PHP, MySQL va WordPress asosida onlayn ta’lim platformasi yaratish;
3. markaz talabalarini ish beruvchilar bilan bog‘laydigan `Jobsammono` matching platformasini yaratish;
4. markaz serverlari, xodimlar kompyuterlari va tarmog‘ini boshqarish;
5. kundalik texnik yordam va ichki IT operatsiyalariga javob berish.

Portfolio ushbu tajribani `Backend, infratuzilma va ichki IT tizimlari rahbari / Full-stack dasturchi` roli bilan ko‘rsatadi.

### 3.2 Open-source Labs

Labs bo‘limida uchta faol loyiha ko‘rsatiladi. Loyihalar hozirgi ustuvorlik bo‘yicha tartiblangan.

#### 1. AI Business Concierge — asosiy loyiha

Repository: [sherzot/ai-business-concierge](https://github.com/sherzot/ai-business-concierge)

Portfolio ichidagi holat: `Phase 2 faol ishlab chiqilmoqda`.

Ko‘rsatiladigan imkoniyatlar:

- O‘zbekistondagi kichik bizneslar uchun kundalik operatsion AI platforma;
- yagona xabarlar qutisi, vazifalar, HR, hujjatlar va hisobotlar;
- vositalarni ishga tushira oladigan AI chat;
- ko‘p tenantli Supabase/Hono poydevori;
- to‘rt tilli mahsulot interfeysi.

Ko‘rsatiladigan stack:

`React 18 / TypeScript / Vite / Supabase / Hono / PostgreSQL / pgvector / Claude API`

Muhim aniqliklar:

- loyiha endi `design stage` deb ko‘rsatilmaydi;
- Phase 0, Phase 1 va Phase 1.5 bajarilgan, Phase 2 faol;
- HR Candidate Analysis hozircha skeleton;
- real PDF/DOCX generator pipeline’ining tugallanmagan qismlari tayyor funksiya sifatida reklama qilinmaydi.

#### 2. JobMatcher Platform

Repository: [sherzot/jobmatcher-platform](https://github.com/sherzot/jobmatcher-platform)

Portfolio ichidagi holat: `MVP ishlab chiqilmoqda`.

Mahsulot Yaponiya–O‘zbekiston yollash bozori uchun Career OS va ATS sifatida taqdim etiladi. Tavsif quyidagilarni qamrab oladi:

- ochiq vakansiya qidiruvi;
- nomzod profili va rezyume boshqaruvi;
- arizalar pipeline’i;
- agent tasdig‘idan o‘tadigan kompaniya ro‘yxatdan o‘tishi;
- Candidate, Agent, Company va Admin ish maydonlari;
- NestJS modular backend va Prisma ma’lumotlar qatlami.

Repository manifestlari va mavjud kod asosida ko‘rsatiladigan stack:

`Next.js 16 / React 19 / TypeScript / NestJS / Prisma / MySQL / JWT-RBAC / Docker`

Muhim aniqliklar:

- frontend hozircha mock data bilan ishlaydi;
- real API integratsiyasi keyingi bosqichda;
- AI orqali rezyume tahlili va AI matching rejalashtirilgan, tayyor funksiya sifatida ko‘rsatilmaydi;
- eski Laravel, Supabase va PostgreSQL stack ma’lumotlari olib tashlangan.

#### 3. TrustFlow CRM

Repository: [sherzot/TrustFlowCRM](https://github.com/sherzot/TrustFlowCRM)

Portfolio ichidagi holat: ko‘p tenantli CRM faol ishlab chiqilmoqda. Auth va multi-tenant poydevori hamda ishlab chiqilayotgan AI funksiyalari alohida ko‘rsatiladi.

## 4. Bajarilgan dizayn va UX yaxshilanishlari

### 4.1 Vizual yo‘nalish

Portfolio minimal va professional tizimga o‘tkazildi:

- asosiy fon va matn uchun neytral ranglar;
- faqat bitta asosiy ko‘k accent;
- keraksiz card va dekorativ elementlarni kamaytirish;
- bo‘limlarni whitespace, tipografiya va dividerlar orqali ajratish;
- mazmunni HR tez skan qila oladigan tartibda berish;
- shaxsiy `SHER.` brend belgisi, favicon va ijtimoiy preview aktivlari.

### 4.2 Hero

Hero qismida quyidagi muammolar tuzatildi:

- katta sarlavha mobil va desktop uchun alohida o‘lchamlandi;
- ikki yoki uch qatorli matnlarda line-height oshirildi;
- yaponcha sarlavhaning qatorlari bir-biriga yopishib qolishi bartaraf etildi;
- aylana ichidagi `FULL-STACK ENGINEER` yozuvi sig‘adigan qilib joylashtirildi;
- foiz va metrikalar aylana chegarasidan chiqmaydigan qilindi;
- mobil qurilmada vizual va matn o‘rtasidagi bo‘shliq qayta muvozanatlandi.

### 4.3 Umumiy tipografiya

- section title o‘lchamlari ortiqcha kattalikdan tushirildi;
- mobil sarlavhalar uchun taxminan `1.75rem` bazaviy o‘lcham va aniq line-height ishlatiladi;
- case study title’lari mobil qurilmada `24px`, desktopda `30px` atrofida;
- Labs title’lari mobil qurilmada `20–22px`, flagship title katta ekranlarda `26px`;
- uzun stack satrlarida `break-words` ishlatiladi;
- yapon, ingliz va o‘zbek matnlari uchun haqiqiy target stringlar bilan wrapping tekshirildi.

### 4.4 Labs responsive layout

- AI Business Concierge birinchi va `Asosiy loyiha` sifatida ajratildi;
- GitHub tugmasi absolyut yuqori o‘ngga joylashtirildi;
- tugma uzun tavsiflarni tor ustunga siqmaydi;
- JobMatcher’ning ikki paragrafli to‘liq tavsifi kartaning butun kengligidan foydalanadi;
- mobil case bannerida uzun texnik identifikator o‘rniga `skills center` qisqa labeli ishlatiladi.

## 5. Ko‘p tillilik

Portfolio uch tilni qo‘llab-quvvatlaydi:

- `ja` — yapon tili, boshlang‘ich til;
- `en` — ingliz tili;
- `uz` — o‘zbek tili.

Til `LanguageContext` orqali boshqariladi va `portfolio-lang` nomi bilan `localStorage` ichida saqlanadi. Til o‘zgarganda `<html lang>` qiymati ham yangilanadi.

Quyidagi kontentlar uch tilda sinxronlashtirilgan:

- navigation va CTA;
- hero va vizual metrikalar;
- production case studylar;
- Labs loyihalari va statuslar;
- ish tajribasi;
- kompetensiyalar;
- About va Contact;
- forma label va statuslari.

Yangi matn qo‘shilganda faqat bitta tilni yangilash yetarli emas. `src/lib/i18n.ts` hamda `src/lib/data.ts` ichidagi `ja`, `en` va `uz` qiymatlari bir commitda yangilanishi kerak.

## 6. Texnik arxitektura

| Qatlam | Hozirgi yechim |
|---|---|
| Framework | Next.js 15.1, App Router |
| UI | React 19, TypeScript, Tailwind CSS 3 |
| Ikonlar | Lucide React |
| Render usuli | Statik eksport (`output: "export"`) |
| Rasmlar | Statik export uchun `unoptimized: true` |
| Tema | CSS custom properties + `ThemeContext` |
| Til | `LanguageContext` + typed translation object |
| Kontent | `src/lib/data.ts` va `src/lib/i18n.ts` |
| Hosting | Netlify |
| Build runtime | Node.js 20 |

### Muhim source fayllar

| Fayl | Mas’uliyat |
|---|---|
| `src/app/page.tsx` | Sahifa bo‘limlarining tartibi |
| `src/app/layout.tsx` | Metadata, Open Graph, JSON-LD va providerlar |
| `src/app/globals.css` | Rang tokenlari, umumiy tipografiya va motion |
| `src/components/Hero.tsx` | Hero matni va aylana vizuali |
| `src/components/Projects.tsx` | Case study va Labs rendering |
| `src/components/Experience.tsx` | Ish tajribasi timeline’i |
| `src/components/Navigation.tsx` | Desktop/mobile navigation, til va tema |
| `src/lib/data.ts` | Tajriba, case study, Labs va skill ma’lumotlari |
| `src/lib/i18n.ts` | Interfeys tarjimalari |
| `netlify.toml` | Netlify build va xavfsizlik headerlari |

## 7. Accessibility va motion

Hozirgi UI quyidagi mexanizmlarni o‘z ichiga oladi:

- semantik `nav`, `main`, `section`, `article`, heading va form elementlari;
- interaktiv elementlar uchun `aria-label` va `aria-pressed`;
- keyboard focus uchun ko‘rinadigan `:focus-visible` outline;
- mobil menu uchun `aria-expanded` va `aria-controls`;
- form holatlari uchun `aria-live`;
- `prefers-reduced-motion` tanloviga mos animatsiyani kamaytirish;
- tashqi havolalarda `noopener noreferrer`.

Motion tizimi qisqa hero reveal, SVG chizig‘i va sekin depth-float animatsiyasidan iborat. Motion mazmunni to‘smasligi va reduced-motion rejimida o‘chishi kerak.

## 8. SEO va delivery

Repository quyidagilarni o‘z ichiga oladi:

- canonical URL;
- Open Graph va Twitter metadata;
- `Person` JSON-LD;
- `robots.txt` route;
- `sitemap.xml` route;
- `og-image.png` va favicon;
- Netlify security headerlari.

`netlify.toml` bo‘yicha build jarayoni:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

`main` branch GitHub repository’siga push qilinganda Git bilan bog‘langan Netlify deployment ishga tushadi.

2026-08-07 kuni jonli sayt quyidagicha tekshirildi:

- `https://sherdev.netlify.app` — `HTTP/2 200`;
- server headeri — `Netlify`;
- `X-Frame-Options: DENY`;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- jonli HTML ichida `AI Business Concierge`, `JobMatcher Platform` va `サマルカンド市職業技能センター` matnlari mavjud.

Bu tekshiruv `5009b4a` dagi portfolio kontenti Netlify’da ko‘rinayotganini tasdiqlaydi.

## 9. Verifikatsiya yozuvi

2026-08-07 dagi kontent va responsive yangilanishlardan keyin quyidagi tekshiruvlar bajarildi:

| Tekshiruv | Scope | Natija |
|---|---|---|
| `npx tsc --noEmit` | TypeScript static analysis | O‘tdi, exit code `0` |
| `npm run lint` | Next.js ESLint | O‘tdi, warning va error yo‘q |
| `npm run build` | Next.js production static export | O‘tdi, 6 ta static page yaratildi |
| Playwright browser | `320px`, `768px`, `1440px` | Gorizontal overflow aniqlanmadi |
| Playwright locale | `ja`, `en`, `uz` | Yangilangan matnlar render bo‘ldi |
| Browser console | Home page | Console error va Next.js error overlay aniqlanmadi |
| `curl` live check | Netlify production URL | `HTTP/2 200`, yangi kontent topildi |

Repository’da alohida `test` npm scripti mavjud emas. Shuning uchun verifikatsiya lint, typecheck, production build va browser tekshiruvlariga tayangan.

## 10. Mazmun chegaralari

Portfolio ishonchli bo‘lishi uchun quyidagi chegaralar saqlanishi kerak:

- rejalashtirilgan funksiya tayyor deb yozilmaydi;
- repository stack’i manifest va source bilan tekshirilmasdan yangilanmaydi;
- production holati deployment yoki jonli runtime bilan tekshirilmasdan e’lon qilinmaydi;
- maxfiy repository, token, credential, ichki endpoint va mijoz ma’lumotlari kiritilmaydi;
- ommaga chiqarish mumkin bo‘lmagan ishlar umumiy engineering mavzulari bilan ifodalanadi;
- raqamli natijalar faqat tasdiqlangan portfolio ma’lumotlari asosida saqlanadi.

## 11. Keyingi yangilash tartibi

Portfolio mazmunini yangilashda quyidagi ketma-ketlik ishlatiladi:

1. tegishli loyiha repository’sidagi README, arxitektura, roadmap, manifest va source holatini tekshirish;
2. mavjud, rejalashtirilgan va tugallanmagan funksiyalarni ajratish;
3. `src/lib/data.ts` ichidagi uch tilli loyiha ma’lumotini yangilash;
4. kerak bo‘lsa `src/lib/i18n.ts` tarjima kalitlarini yangilash;
5. mobil va desktop layoutni haqiqiy uch tilli matnlar bilan tekshirish;
6. `npx tsc --noEmit`, `npm run lint` va `npm run build` bajarish;
7. browser console, overflow va asosiy havolalarni tekshirish;
8. faqat tegishli fayllarni commit qilish;
9. `main` branch’ga push qilish;
10. jonli Netlify HTML ichida yangi kontentni tekshirish;
11. ushbu hujjatdagi sana, loyiha holati va verifikatsiya yozuvini yangilash.

## 12. Tezkor maintenance checklist

- [ ] Hero sarlavhasi mobil qurilmada 2–3 qatordan oshib ketmayaptimi?
- [ ] Har bir ko‘p qatorli heading’da yetarli line-height bormi?
- [ ] Hero aylanasidagi matn va metrikalar chegaradan chiqmayaptimi?
- [ ] `ja`, `en`, `uz` matnlari ma’no va status bo‘yicha mosmi?
- [ ] Case study nomlari tashkilotlarning amaldagi nomiga mosmi?
- [ ] Labs stack’i repository manifestlariga mosmi?
- [ ] Rejalashtirilgan AI funksiyalari tayyor deb ko‘rsatilmaganmi?
- [ ] GitHub havolalari to‘g‘ri repository’ga olib boradimi?
- [ ] 320px viewport’da gorizontal overflow yo‘qmi?
- [ ] TypeScript, lint va production build o‘tganmi?
- [ ] Netlify production URL `200` qaytaryaptimi?
- [ ] Jonli HTML ichida yangi kontent mavjudmi?

---

Ushbu hujjat portfolio mazmuni yoki dizayn tizimi sezilarli o‘zgargan har bir commitda yangilanishi kerak.
