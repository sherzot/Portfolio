/**
 * Google Drive Resume Links
 *
 * Ko'rsatma:
 * 1. Google Drive → Resume papkasiga kiring
 * 2. Faylni o'ng tugma bilan bosing → "Share" → "Copy link"
 * 3. Link formatini tekshiring:
 *    https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *    ↑ Bu "view" URL — brauzerda ochiladi, download trigger qilmaydi.
 *
 * MUHIM: Drive'da sharing sozlamasida:
 *   "Viewers and commenters can see the option to download, print, and copy"
 *   bu katagni olib tashlang → faqat ko'rish mumkin bo'ladi.
 *
 * Hozircha folder linki ishlatilmoqda (view mode, download yo'q).
 */

// Agar individual fayl linki bo'lsa, shu yerga qo'ying:
// export const RIREKISHO_URL = "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";
// export const SHOKUMU_URL  = "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing";

// Hozirda: folder view link (ko'rish uchun, download emas)
export const RESUME_FOLDER_URL =
  "https://drive.google.com/drive/folders/1TT-Z3IGEShzxXWiNsZ0daweyk3sAVTHo?usp=sharing";
