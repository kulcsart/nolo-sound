/**
 * NOLO SOUND — Central Content Store
 *
 * All static text content lives here so it's easy to update
 * without touching component files.
 */

// ─── Navigation ───────────────────────────────────────────
export const nav = {
  links: [
    { label: "Artists", href: "#artists" },
    { label: "News", href: "#news" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  languages: ["EN", "HU"],
} as const;

// ─── Hero Section ─────────────────────────────────────────
export const hero = {
  headline: {
    line1: "Building icons",
    line2_italic: "from Silence",
    line2_normal: "to",
    line2_bold: "Sound",
  },
  tagline: [
    "A BOUTIQUE LABEL FOR THE EXCEPTIONAL",
    "WE DON'T JUST PRODUCE TRACKS, WE CRAFT LEGACIES",
  ],
  scrollLabel: "SCROLL TO EXPLORE",
} as const;

// ─── News / From The Feed ─────────────────────────────────
export const newsFeed = {
  sectionLabel: "FROM THE FEED",
  sectionTitle: "What's happening at Nolo Sound?",
  /** Fallback cards — replaced by Instagram API when available */
  fallbackItems: [
    {
      date: "OCT 14, 2025",
      title: 'Midnight Echoes - "Velvet"',
      description: "The highly anticipated debut single drops on all platforms.",
      image: "/images/news-1.jpg",
    },
    {
      date: "OCT 10, 2025",
      title: "Showcase at Akvárium",
      description: "Join us for an exclusive night of live performances.",
      image: "/images/news-2.jpg",
    },
    {
      date: "SEP 28, 2024",
      title: "Studio Sessions: Vol 4",
      description: "Behind the scenes with our production team.",
      image: "/images/news-3.jpg",
    },
    {
      date: "SEP 22, 2024",
      title: "Signing: Alex Varga",
      description: "Welcome the newest talent to the Nolo roster.",
      image: "/images/news-4.jpg",
    },
  ],
} as const;

// ─── About / The Vision ───────────────────────────────────
export const about = {
  sectionLabel: "THE VISION",
  heading: "Building stars from ground zero",
  paragraphs: [
    "Nolo Sound isn't just a label; it's a prestige showroom for exceptional talent. Founded by industry veterans with over 20 years of experience—ranging from X-Factor production to major film scores—we combine deep musical heritage with a modern, transparent approach.",
    "Backed by international investment and a world-class studio infrastructure, we focus on a select few. No mass production. Just pure, cultivated artistry.",
  ],
  quote: "Quality over\nquantity.\nAlways.",
  owners: [
    {
      name: "Norbert Cs.",
      role: "Founder / Producer",
      avatar: "/images/norbi-avatar.png",
    },
    {
      name: "Lan V.",
      role: "Partner",
      avatar: "/images/lan-avatar.jpg",
    },
  ],
} as const;

// ─── Artists ──────────────────────────────────────────────
export interface Artist {
  name: string;
  tag: string;
  description: string;
  image: string;
  track: {
    name: string;
    duration: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export const artists: Artist[] = [
  {
    name: "Viki",
    tag: "80S REVIVAL POP",
    description:
      "Bringing back the neon-soaked energy of the 80s with a modern production twist. Viki's sound is infectious, colorful, and unapologetically bold.",
    image: "/images/artist-viki.png",
    track: { name: "Country song", duration: "1:24 / 3:45" },
    social: { instagram: "#", facebook: "#" },
  },
  {
    name: "Mona",
    tag: "SOUL / R&B",
    description:
      "Timeless voice, classic vibes. Mona channels the golden age of R&B with a voice that cuts straight to the soul, stripped back and pure.",
    image: "/images/artist-mona.png",
    track: { name: "Shadow", duration: "1:24 / 3:45" },
    social: { instagram: "#", facebook: "#" },
  },
  {
    name: "Alexa",
    tag: "DARK ALTERNATIVE",
    description:
      "Haunting vocals meeting industrial beats. Alexa explores the shadows of modern pop, delivering an experience that is as visual as it is auditory.",
    image: "/images/artist-alexa.png",
    track: { name: "Midnight", duration: "1:24 / 3:45" },
    social: { instagram: "#", facebook: "#" },
  },
  {
    name: "Renato",
    tag: "POP / SINGER-SONGWRITER",
    description:
      "A modern showman with old-school charm. Renato combines virtuoso guitar skills with vocals that demand attention.",
    image: "/images/artist-renato.png",
    track: { name: "Sunrise", duration: "1:24 / 3:45" },
    social: { instagram: "#", facebook: "#" },
  },
];

// ─── Contact ─────────────────────────────────────────────
export const contact = {
  sectionLabel: "GET IN TOUCH",
  heading: "Contact Us",
  description:
    "Interested in collaboration or booking? Reach out to our management team. We are based in the heart of Budapest.",
  details: [
    { icon: "MapPin" as const, label: "STUDIO", value: "Budapest, Hungary" },
    { icon: "Mail" as const, label: "EMAIL", value: "hello@nolosound.com" },
    { icon: "Phone" as const, label: "PHONE", value: "+36 1 234 5678" },
  ],
  formLabels: {
    name: "NAME",
    email: "EMAIL",
    message: "MESSAGES",
    submit: "SEND MESSAGE",
  },
} as const;

// ─── Footer ──────────────────────────────────────────────
export const footer = {
  tagline: "Crafting legacies,\nnot just records.",
  description:
    "A boutique music label focused on developing exceptional artists with a premium, quality-first approach.",
  columns: [
    {
      title: "MENU",
      links: [
        { label: "Artists", href: "#artists" },
        { label: "News", href: "#news" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
    {
      title: "SOCIAL",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Spotify", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Nolo Sound Kft. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
