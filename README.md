# Keziah Lonoy — Portfolio

A minimal, interactive portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
Deploy in minutes to **Vercel**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
keziah-portfolio/
├── app/
│   ├── globals.css       # CSS variables, keyframes, custom cursor styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Page entry — assembles all sections
├── components/
│   ├── Cursor.tsx        # Custom animated cursor
│   ├── Nav.tsx           # Sticky nav with scroll detection
│   ├── Hero.tsx          # Full-screen hero
│   ├── About.tsx         # About + stats grid
│   ├── Projects.tsx      # Hover project list
│   ├── Contact.tsx       # Contact CTA
│   ├── Footer.tsx        # Footer
│   └── RevealInit.tsx    # Scroll-triggered reveal observer
├── public/               # Static assets (add your images here)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Personalise

| What | Where |
|---|---|
| Your name & role | `components/Hero.tsx` |
| About text | `components/About.tsx` |
| Stats (years, count, skills) | `components/About.tsx` → `stats` array |
| Projects | `components/Projects.tsx` → `projects` array |
| Email & social links | `components/Contact.tsx` → `links` array |
| Accent color | `app/globals.css` → `--purple` variable |
| Site metadata | `app/layout.tsx` → `metadata` |

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub Import
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo — Vercel auto-detects Next.js
4. Click **Deploy** ✅

No environment variables needed.

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Accent (purple) | `#7742b8` |
| Background | `#0a0a0a` |
| Surface | `#1a1a1a` |
| Border | `#2e2e2e` |
| Muted text | `#888888` |
| Display font | Bebas Neue |
| Body font | DM Sans |
