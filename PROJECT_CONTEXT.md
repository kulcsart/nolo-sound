# Nolo Sound — Project Context

> Tartós memória fájl a fejlesztési session-ök közötti kontextus megőrzésre.
> Utolsó frissítés: 2026-03-04

---

## 1. Projekt áttekintés

- **Mi ez:** Egy boutique zenei kiadó (Nolo Sound) single-page marketing weboldala
- **Ügyfél:** Seeman / Norbert Cs. (Founder/Producer) + Lan V. (Partner)
- **Cél:** Prémium, sötét-arany vizuális identitás, artists showcase, Spotify/Instagram integráció később
- **Státusz:** Fázis 1 (Sitebuild) ✅ + Fázis 4 (Animációk) ✅ KÉSZ

## 2. Tech Stack

| Réteg | Technológia | Verzió |
|-------|------------|--------|
| Framework | Next.js (App Router) | 16.1.6 |
| Nyelv | TypeScript | 5.9.3 |
| Styling | Tailwind CSS v4 | 4.2.1 |
| Fontok | Roboto Serif + Roboto Flex | next/font/google |
| Ikonok | Lucide React | 0.577.0 |
| Runtime | React | 19.2.4 |
| Deploy | Vercel (Hobby tier) | — |
| Repo | github.com/kulcsart/nolo-sound | main branch |

**Animáció stack (Fázis 4-ben telepítve):**
- Framer Motion (entrance/fade animációk)
- GSAP + @gsap/react + ScrollTrigger (parallax effektek)

**Még NINCS telepítve:**
- Spotify Web API
- Instagram Graph API / Facebook API

## 3. Fejlesztési terv és státusz

```
Fázis 1 — Sitebuild                    ✅ KÉSZ
Fázis 2 — Social integráció (IG/FB)    ⏳ Várjuk az ügyfél API adatait
Fázis 3 — Spotify integráció           ⏳ Várjuk az ügyfél API adatait
Fázis 4 — Animációk                    ✅ KÉSZ
Fázis 5 — Polish & optimalizálás       🔜 KÖVETKEZŐ
```

### Fázis 4 — Animációk (implementálva ✅)
- **Hibrid megközelítés:** Framer Motion (entrance) + GSAP ScrollTrigger (parallax)
- **Utility komponensek:** `src/components/animations/` — AnimatedSection, StaggerChildren, ParallaxHero, TextReveal, DividerReveal
- **Hero:** Parallax háttér (GSAP), logo scale-in, TextReveal headline, DividerReveal, fade-up tagline, CSS bounce scroll indicator
- **News Feed:** Fade-up header, stagger news cards
- **About:** Slide-right szöveg oszlop (stagger belső elemek), slide-left kép oszlop, scale-in quote overlay
- **Artists:** Alternating slide-in (kép/bio váltakozó irány)
- **Contact:** Slide-right info (stagger details), slide-left form
- **Footer:** Fade-in
- **Micro-interakciók:** Nav link underline, news card hover lift, button gold glow, social icon scale, arrow hover, input focus glow
- **Accessibility:** `prefers-reduced-motion` media query kikapcsolja az animációkat

## 4. Fájlstruktúra

```
nolo-sound-web/
├── .claude/launch.json          # Dev szerver konfig (port 3200)
├── .vercel/                     # Vercel deploy konfig
├── public/images/
│   ├── nolo-sound-logo.png      # Nav logo
│   ├── nolo-sound-logo-disc.png # Hero disc logo
│   ├── nolo-sound-footer-logo.png
│   ├── norbi-avatar.png         # Owner: Norbert Cs.
│   ├── lan-avatar.jpg           # Owner: Lan V.
│   ├── news-1..4.jpg            # News feed képek (fallback)
│   ├── studio.jpg               # About szekció studio fotó
│   ├── artist-viki.png          # Artist képek
│   ├── artist-mona.png
│   ├── artist-alexa.png
│   └── artist-renato.png
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind v4 + design tokenek (színek, font méretek)
│   │   ├── layout.tsx           # Root layout, fontok, SEO meta
│   │   └── page.tsx             # Fő oldal — szekciók összeállítása
│   ├── components/
│   │   ├── animations/          # ⭐ Fázis 4 — Animációs utility komponensek
│   │   │   ├── AnimatedSection.tsx  # "use client" — FM fade-up/in/slide wrapper
│   │   │   ├── StaggerChildren.tsx  # "use client" — FM stagger container + item
│   │   │   ├── ParallaxHero.tsx     # "use client" — GSAP ScrollTrigger parallax
│   │   │   ├── TextReveal.tsx       # "use client" — FM soronkénti text reveal
│   │   │   └── DividerReveal.tsx    # "use client" — FM divider width animáció
│   │   ├── OwnerCard.tsx        # Avatar + név + szerepkör
│   │   ├── OwnersRow.tsx        # 2 owner card dividerrel
│   │   ├── NewsCard.tsx         # Hír kártya (kép + dátum + cím + leírás)
│   │   ├── ArtistPlayer.tsx     # Play gomb + progress bar + track info
│   │   ├── ArtistBio.tsx        # Genre tag + név + leírás + player + social
│   │   ├── ContactForm.tsx      # "use client" — form mezők + küldés gomb
│   │   └── sections/
│   │       ├── Nav.tsx          # "use client" — logo + linkek + hamburger menu
│   │       ├── HeroSection.tsx  # Radial gradient + headline + tagline
│   │       ├── NewsFeedSection.tsx  # 4 news card + social ikonok
│   │       ├── AboutSection.tsx # The Vision + studio kép + quote overlay
│   │       ├── ArtistsSection.tsx   # 4 artist (váltakozó image/bio layout)
│   │       ├── ContactSection.tsx   # Elérhetőségek + form
│   │       └── Footer.tsx       # Logo + link oszlopok + copyright
│   └── lib/
│       └── content.ts           # ⭐ KÖZPONTI TARTALOMKEZELŐ — minden statikus szöveg
└── next.config.ts / tsconfig.json / postcss.config.mjs
```

## 5. Design Tokenek (globals.css-ben definiálva)

### Színek
| Token | Hex | Használat |
|-------|-----|-----------|
| `nearblack` | #130F0C | Fő háttér (about, contact, footer) |
| `espresso` | #2E1F14 | Artists szekció bg, form bg, input border |
| `coffeebean` | #231812 | ArtistBio bg |
| `darkbrown` | #4A3526 | Player gomb bg, progress bar bg |
| `copper` | #7A5C38 | News Feed szekció bg |
| `bronze` | #9A7B4F | Másodlagos szöveg (role, label, social ikon) |
| `gold` | #B8935A | Akcentus szín (gombok, player, ikonok) |
| `goldshimmer` | #D4A856 | "Sound" szó a hero-ban |
| `warmtan` | #C4A87C | Dátumok, section label, footer szöveg |
| `rosegold` | #C49E7A | Genre tag szöveg |
| `sand` | #D4C4AE | Heading szöveg (about), track név |
| `cream` | #EDE3D5 | Body szöveg |
| `ivory` | #FAF3EB | Elsődleges szöveg, nav linkek, heading |
| `muddywaters-*` | #B4935A + opacity | Dekorációs border-ek (6/10/12/15/20%) |

### Reszponzív font méretek (CSS custom properties)
| Token | Desktop | Tablet (≤1024px) | Mobile (≤640px) |
|-------|---------|-----------------|-----------------|
| `--text-hero` | 64px | 52px | 36px |
| `--text-h2` | 48px | 38px | 28px |
| `--text-h3` | 20px | 18px | 17px |
| `--text-quote` | 21px | 19px | 18px |
| `--text-body` | 16px | 15px | 14px |
| `--text-subtitle` | 15px | 14px | 13px |
| `--text-label` | 14px | 13px | 12px |
| `--text-date` | 12px | 12px | 11px |
| `--text-tag` | 11px | 11px | 10px |
| `--text-small` | 10px | 10px | 9px |

### Fontok
- **Roboto Serif** — headings, hero, artist nevek, quote
- **Roboto Flex** — body, labels, nav, gombok, form
- CSS variable-ként: `font-[family-name:var(--font-heading)]` / `font-[family-name:var(--font-body)]`

## 6. Szekciók és layoutjuk

### Hero (HeroSection.tsx)
- Radial gradient háttér: `#7a5c38 → #2e1f14 → #0c0804`
- Nav + disc logo + headline (3 részes: cream / gold italic / goldshimmer)
- Gradient divider + tagline (2 sor) + scroll indicator
- **Teljes viewport magasság** (`min-height: 100dvh`)

### News Feed (NewsFeedSection.tsx)
- Copper (#7A5C38) háttér
- Header: label + heading + IG/FB social ikonok
- 4 db NewsCard horizontális sorban (mobile: snap scroll)
- ⚠️ Később: Instagram Graph API-ról dinamikus tartalom

### About (AboutSection.tsx)
- Nearblack háttér, kétoszlopos layout (LG+)
- Bal: "THE VISION" label → heading → gradient divider → 2 bekezdés → OwnersRow
- Jobb: Studio kép (90% opacity) + gradient quote overlay card

### Artists (ArtistsSection.tsx)
- Espresso háttér
- 4 artist, váltakozó irány (kép bal/jobb)
- Mindegyik: Image (50%) + ArtistBio (50%)
- ArtistBio: tag → név → leírás → ArtistPlayer → social linkek
- ⚠️ Később: Spotify API / saját MP3 a playerhez

### Contact (ContactSection.tsx)
- Nearblack háttér, kétoszlopos layout
- Bal: label, heading, leírás, 3 elérhetőség (MapPin, Mail, Phone ikon)
- Jobb: ContactForm (name, email, message, submit gomb)
- ⚠️ Később: form action (Resend / API route)

### Footer (Footer.tsx)
- Nearblack háttér, felső border
- Logo + tagline + leírás | 3 link oszlop (Menu, Legal, Social)
- Gradient divider + copyright + bottom linkek

## 7. Reszponzív breakpointok

| Nézet | Szélesség | Design forrás |
|-------|-----------|--------------|
| Desktop | 1440px | `irqxQ` (Nolosound-desktop) |
| Tablet | 1024px | `aEJUj` (Nolosound-tablet) |
| Mobile | 393px | `9gb5I` (Nolosound-mobile) |

Tailwind breakpointok: `sm:640px`, `md:768px`, `lg:1024px`

## 8. Design forrás

- **Fájl:** `/Users/kulcsartamas/Documents/--Obsidian Vault/Munka [OBSIDIAN]/Seeman/Nolo Sound/DESIGN/nolo.pen`
- **Képek forrás:** ugyanott `assets/` és `design files/` mappák
- **Reusable komponensek a .pen-ben:**
  - `A7lzX` — OwnerCard
  - `Kmz6u` — OwnersRow
  - `CQOj5` — NewsCard
  - `QwOeA` — ArtistPlayer
  - `QXCoK` — ArtistBio
  - `Yfhxk` — ContactForm
  - `2WaYC` — The Vision
- **Desktop frame:** `irqxQ`, **Tablet:** `aEJUj`, **Mobile:** `9gb5I`

## 9. Fejlesztői környezet

- **Projekt mappa:** `/Users/kulcsartamas/DEV/nolo-sound-web`
- **Claude Code indítás:** `cd /Users/kulcsartamas/DEV/nolo-sound-web && claude`
- **Dev szerver:** `npm run dev` → port 3200 (`.claude/launch.json`-ben konfigurálva, preview_start name: `nolo-dev`)
- ⚠️ Ez egy önálló projekt — NEM a papirmania-next.js része! Mindig ebből a mappából indítsd a Claude Code-ot.

## 10. Hosting és deploy

- **Platform:** Vercel (Hobby tier, non-commercial)
- **URL:** https://nolo-sound-web.vercel.app
- **GitHub:** https://github.com/kulcsart/nolo-sound (main branch)
- **Auto-deploy:** Minden `git push origin main` automatikusan deployol
- ⚠️ Ha commercial lesz → Vercel Pro ($20/hó) szükséges

## 10. Ügyfél API-k — még hiányzó adatok

### Spotify
- Nincs még Spotify for Developers account / API kulcs
- Custom player korlátozott: API max 30mp preview (hacsak nincs Premium + Web Playback SDK)
- **Alternatíva:** Spotify Embed iframe wrapper VAGY saját MP3 fájlok

### Instagram / Facebook
- Nincs még Meta Developer account
- Kell: Instagram Business/Creator account + Facebook Page + Facebook App
- Szükséges engedélyek: `instagram_basic`, `pages_show_list`, `pages_read_engagement`
- Long-lived access token (60 napos, refresh szükséges)

### Domain
- Még nincs saját domain — Vercel subdomain-en fut egyelőre
- Vercel Dashboard → Domains menüben köthető be később

## 11. Meghozott döntések

1. **Hibrid animáció stack:** Framer Motion (entrance/fade animációk) + GSAP ScrollTrigger (hero parallax). Döntés: 2026-03-04.
2. **Animáció architektúra:** Server componentek MARADTAK server componentek — animáció wrapper pattern (`AnimatedSection`, `StaggerChildren` stb.) client componentek, amik körbefogják a server-rendered tartalmat.
3. **`"use client"` komponensek:** Nav.tsx, ContactForm.tsx + 5 animációs wrapper (`src/components/animations/`)

## 12. Következő lépések

1. **Fázis 5 — Polish:** Image optimization (next/image blur placeholder), Lighthouse audit, SEO meta finomhangolás
2. **Fázis 2 — Social integráció:** Várjuk az ügyfél Instagram/Facebook API adatait
3. **Fázis 3 — Spotify integráció:** Várjuk az ügyfél Spotify API adatait
4. **Contact form backend:** API route (Resend vagy hasonló) a form küldéshez
5. **Custom domain:** Vercel Dashboard → Domains menüben köthető be
