import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Press & Media — Sherriann Elcock | Real Estate Forward Coverage",
  description:
    "Press kit, event photos, fact sheet, and media coverage for Real Estate Forward: Guyana 2026 & Beyond — the landmark industry forum convened by Sherriann Elcock on May 22, 2026 in Georgetown, Guyana. Media inquiries: sherriann@sherriannelcock.com",
  openGraph: {
    title: "Press & Media — Sherriann Elcock",
    description:
      "Press kit and media coverage for Real Estate Forward: Guyana 2026 & Beyond. Convened by Sherriann Elcock. May 22, 2026, Georgetown.",
    type: "website",
    images: [
      {
        url: "https://sherriannelcock.com/images/event-crowd-shot.jpeg",
        width: 1280,
        height: 960,
        alt: "Press kit for Real Estate Forward: Guyana 2026 & Beyond — convened by Sherriann Elcock",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Press & Media — Sherriann Elcock",
  description:
    "Press kit, event coverage and media inquiries for Sherriann Elcock, convener of Real Estate Forward: Guyana 2026 & Beyond.",
  url: "https://sherriannelcock.com/press",
  about: {
    "@type": "Event",
    name: "Real Estate Forward: Guyana 2026 & Beyond",
    organizer: {
      "@type": "Person",
      name: "Sherriann Elcock",
      url: "https://sherriannelcock.com",
    },
  },
  publisher: {
    "@type": "Person",
    name: "Sherriann Elcock",
    url: "https://sherriannelcock.com",
  },
};

const factSheet: { label: string; value: React.ReactNode }[] = [
  { label: "Event Name", value: "Real Estate Forward: Guyana 2026 & Beyond" },
  { label: "Date Held", value: "Friday, May 22, 2026" },
  { label: "Time", value: "9:00 AM – 1:00 PM" },
  {
    label: "Location",
    value:
      "Centre for Local Business Development, 253-254 South Road, Bourda, Georgetown, Guyana",
  },
  { label: "Convener", value: "Sherriann Elcock" },
  { label: "Attendance", value: "42 industry professionals" },
  {
    label: "Format",
    value: "Open industry forum with keynote, panels, and audience Q&A",
  },
  { label: "Cost to Attend", value: "Free" },
  {
    label: "Speakers",
    value:
      "Nicola Duggan (GAREP), Tiffany Jeffrey-Durant (Attorney), Guyana Revenue Authority, Saeed Jameil (GBTI), Republic Bank, Darren L. Buckner (Guyana HomeHub)",
  },
  {
    label: "Organizations Represented",
    value: "GAREP, GRA, Republic Bank, GBTI, legal community, Guyana HomeHub",
  },
  { label: "Next Forum", value: "Being planned for later in 2026" },
  {
    label: "Full Recap",
    value: (
      <a href="/real-estate-rising" className="fact-link">
        sherriannelcock.com/real-estate-rising
      </a>
    ),
  },
];

const quotes: { text: string; author: string }[] = [
  {
    text:
      "This forum was about bringing the right people into one room at the right time. Guyana's real estate market is moving fast, and the only way the industry keeps pace responsibly is for regulators, financiers, legal professionals, technology platforms and working agents to talk directly to one another.",
    author: "Sherriann Elcock, Convener of Real Estate Forward",
  },
  {
    text:
      "The world is watching Guyana to see whether its rapid growth is managed with integrity.",
    author:
      "Nicola Duggan, BSc., Director of the Guyana Association of Real Estate Professionals (GAREP)",
  },
  {
    text:
      "What I learned on May 22 is that this conversation cannot be a one-time event. The industry needs to keep meeting, keep asking hard questions, and keep raising the standard. That's why we're already planning the next one.",
    author: "Sherriann Elcock, Convener of Real Estate Forward",
  },
];

const gallery: { src: string; caption: string }[] = [
  {
    src: "/images/event-crowd-shot.jpeg",
    caption:
      "The room — 42 industry professionals at Real Estate Forward, May 22, 2026",
  },
  {
    src: "/images/event-room-wide.jpeg",
    caption: "Wide view of the forum during a session",
  },
  {
    src: "/images/nicola-duggan-event.jpeg",
    caption: "Nicola Duggan, Director of GAREP, delivering the keynote",
  },
  {
    src: "/images/tiffany-durant-event.jpeg",
    caption: "Attorney Tiffany Jeffrey-Durant addressing legal risks",
  },
  {
    src: "/images/gra-representative-event.jpeg",
    caption: "Guyana Revenue Authority representative on compliance",
  },
  {
    src: "/images/saeed-jameil-gbti-event.jpeg",
    caption: "Saeed Jameil, Branch Manager at GBTI, on mortgage access",
  },
  {
    src: "/images/darren-buckner-event.jpeg",
    caption:
      "Darren L. Buckner, Founder of Guyana HomeHub, on technology and modernization",
  },
  {
    src: "/images/event-qa-moment-alfred.jpeg",
    caption: "Audience engagement during the open floor segment",
  },
  {
    src: "/images/event-audience-engagement.jpeg",
    caption: "An attendee makes a point during Q&A",
  },
  {
    src: "/images/event-session-side-angle.jpeg",
    caption: "The room during a panel session",
  },
  {
    src: "/images/sherriann-elcock.jpg",
    caption:
      "Sherriann Elcock — brand headshot (high resolution available on request)",
  },
];

const pageStyles = `
  .press-page {
    --forest: #071a0e;
    --emerald: #1a6b3c;
    --emerald-light: #2a8a52;
    --gold: #f0c040;
    --gold-dim: #c9a030;
    --cream: #f7f3ec;
    --soft-green: #a8dbbe;
    --text-dark: #1a1a1a;
    --text-mid: #444;
    --text-light: #777;

    font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--text-dark);
    overflow-x: hidden;
  }

  .press-page * { margin: 0; padding: 0; box-sizing: border-box; }

  .press-page section { padding: 72px 24px; }

  .press-page .container { max-width: 900px; margin: 0 auto; }

  .press-page .section-eyebrow {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--emerald);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .press-page .section-title {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(30px, 5vw, 46px);
    font-weight: 700;
    color: var(--forest);
    line-height: 1.1;
    margin-bottom: 8px;
  }

  .press-page .section-title em { color: var(--emerald); font-style: italic; }

  .press-page .section-sub {
    font-size: 15px;
    color: var(--text-mid);
    line-height: 1.6;
    margin-bottom: 32px;
  }

  /* ── HERO ── */
  .press-page .press-hero {
    background: var(--forest);
    padding: 96px 24px 72px;
    position: relative;
    overflow: hidden;
  }

  .press-page .press-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 25% 20%, rgba(26,107,60,0.35) 0%, transparent 60%),
      radial-gradient(ellipse 60% 70% at 85% 80%, rgba(240,192,64,0.08) 0%, transparent 60%);
  }

  .press-page .press-hero-inner {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: 0 auto;
  }

  .press-page .hero-eyebrow {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--soft-green);
    font-weight: 500;
    margin-bottom: 20px;
    padding: 6px 16px;
    border: 1px solid rgba(168,219,190,0.3);
    border-radius: 2px;
  }

  .press-page .hero-title {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(44px, 8vw, 78px);
    font-weight: 700;
    color: #fff;
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }

  .press-page .hero-title .gold { color: var(--gold); }

  .press-page .hero-accent {
    width: 72px;
    height: 4px;
    background: var(--gold);
    border-radius: 2px;
    margin: 0 0 22px;
  }

  .press-page .hero-subtitle {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(20px, 4vw, 30px);
    font-weight: 400;
    font-style: italic;
    color: var(--soft-green);
    margin-bottom: 20px;
  }

  .press-page .hero-lead {
    font-size: 16px;
    line-height: 1.8;
    color: rgba(255,255,255,0.78);
    max-width: 680px;
  }

  /* ── MEDIA CONTACT ── */
  .press-page .contact-section { background: var(--cream); padding-top: 56px; }

  .press-page .contact-card {
    background: #fff;
    border: 1px solid #e6ded0;
    border-left: 6px solid var(--gold);
    border-radius: 8px;
    padding: 32px 36px;
    box-shadow: 0 6px 28px rgba(0,0,0,0.07);
    max-width: 720px;
    margin: 0 auto;
  }

  .press-page .contact-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--emerald);
    font-weight: 700;
    margin-bottom: 12px;
  }

  .press-page .contact-name {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--forest);
    line-height: 1.1;
  }

  .press-page .contact-role {
    font-size: 14px;
    color: var(--text-mid);
    font-style: italic;
    margin-bottom: 18px;
  }

  .press-page .contact-row {
    font-size: 15px;
    color: var(--text-dark);
    line-height: 1.7;
  }

  .press-page .contact-row strong { color: var(--forest); }

  .press-page .contact-row a {
    color: var(--emerald);
    font-weight: 600;
    text-decoration: none;
  }

  .press-page .contact-row a:hover { text-decoration: underline; }

  .press-page .contact-note {
    margin-top: 18px;
    font-size: 14px;
    color: var(--text-mid);
    line-height: 1.6;
  }

  /* ── BUTTONS ── */
  .press-page .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--emerald);
    color: #fff;
    padding: 14px 32px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-decoration: none;
    border-radius: 4px;
    border: 2px solid var(--emerald);
    transition: all 0.2s ease;
  }

  .press-page .btn:hover {
    background: var(--emerald-light);
    border-color: var(--emerald-light);
    transform: translateY(-2px);
  }

  .press-page .btn-gold {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--forest);
    font-weight: 700;
  }

  .press-page .btn-gold:hover {
    background: var(--gold-dim);
    border-color: var(--gold-dim);
  }

  /* ── PRESS RELEASE ── */
  .press-page .release { background: #fff; }

  .press-page .release-card {
    background: var(--cream);
    border: 1px solid #e6ded0;
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .press-page .release-card h3 {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--forest);
    line-height: 1.25;
    margin-bottom: 6px;
  }

  .press-page .release-meta {
    font-size: 13px;
    color: var(--text-light);
    letter-spacing: 0.04em;
  }

  /* ── FACT SHEET ── */
  .press-page .factsheet { background: var(--cream); }

  .press-page .fact-list {
    border-top: 1px solid #e0d8c8;
  }

  .press-page .fact-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 24px;
    padding: 16px 0;
    border-bottom: 1px solid #e0d8c8;
  }

  .press-page .fact-key {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--emerald);
    padding-top: 2px;
  }

  .press-page .fact-val {
    font-size: 15px;
    color: var(--text-dark);
    line-height: 1.6;
  }

  .press-page .fact-link {
    color: var(--emerald);
    font-weight: 600;
    text-decoration: none;
  }

  .press-page .fact-link:hover { text-decoration: underline; }

  @media (max-width: 600px) {
    .press-page .fact-row { grid-template-columns: 1fr; gap: 4px; }
  }

  /* ── QUOTE BANK ── */
  .press-page .quotes { background: #fff; }

  .press-page .quote-card {
    background: var(--forest);
    border-radius: 8px;
    padding: 36px 36px 32px;
    margin-bottom: 20px;
    position: relative;
  }

  .press-page .quote-card::before {
    content: '\\201C';
    position: absolute;
    top: 4px;
    left: 20px;
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 72px;
    color: var(--gold);
    opacity: 0.5;
    line-height: 1;
  }

  .press-page .quote-text {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(19px, 2.6vw, 24px);
    font-style: italic;
    color: #fff;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    margin-bottom: 18px;
  }

  .press-page .quote-author {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--soft-green);
    border-top: 1px solid rgba(168,219,190,0.2);
    padding-top: 14px;
  }

  /* ── PHOTO GALLERY ── */
  .press-page .gallery-section { background: var(--cream); }

  .press-page .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 760px) {
    .press-page .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 460px) {
    .press-page .gallery-grid { grid-template-columns: 1fr; }
  }

  .press-page .gallery-item {
    display: block;
    background: #fff;
    border: 1px solid #e6ded0;
    border-radius: 6px;
    overflow: hidden;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .press-page .gallery-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.12);
  }

  .press-page .gallery-item img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
  }

  .press-page .gallery-cap {
    font-size: 12px;
    color: var(--text-mid);
    line-height: 1.5;
    padding: 12px 14px;
  }

  .press-page .photo-credit {
    margin-top: 28px;
    font-size: 13px;
    color: var(--text-light);
    text-align: center;
  }

  .press-page .photo-credit strong { color: var(--text-mid); }

  /* ── ABOUT / BIO ── */
  .press-page .bio-section { background: var(--forest); }

  .press-page .bio-inner {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 48px;
    align-items: start;
  }

  @media (max-width: 640px) {
    .press-page .bio-inner { grid-template-columns: 1fr; text-align: center; }
    .press-page .bio-photo { margin: 0 auto; }
  }

  .press-page .bio-photo {
    width: 220px;
    height: 220px;
    border-radius: 8px;
    overflow: hidden;
    border: 3px solid var(--gold);
    flex-shrink: 0;
  }

  .press-page .bio-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .press-page .bio-eyebrow {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
  }

  .press-page .bio-body p {
    font-size: 15px;
    color: rgba(255,255,255,0.8);
    line-height: 1.8;
    margin-bottom: 14px;
  }

  .press-page .bio-body p strong { color: #fff; }
  .press-page .bio-body p em { color: var(--gold); font-style: italic; }

  .press-page .bio-body a {
    color: var(--soft-green);
    font-weight: 600;
    text-decoration: none;
  }

  .press-page .bio-body a:hover { color: var(--gold); }

  /* ── EVENT COVERAGE ── */
  .press-page .coverage { background: #fff; }

  .press-page .coverage-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 640px) {
    .press-page .coverage-grid { grid-template-columns: 1fr; }
  }

  .press-page .coverage-card {
    background: var(--cream);
    border: 1px solid #e6ded0;
    border-top: 3px solid var(--gold);
    border-radius: 8px;
    padding: 28px;
  }

  .press-page .coverage-card h3 {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--forest);
    margin-bottom: 10px;
  }

  .press-page .coverage-card p {
    font-size: 14px;
    color: var(--text-mid);
    line-height: 1.65;
    margin-bottom: 8px;
  }

  .press-page .coverage-source {
    font-size: 12px;
    color: var(--text-light);
    letter-spacing: 0.03em;
    margin-bottom: 18px;
  }

  .press-page .coverage-note {
    margin-top: 24px;
    font-size: 13px;
    font-style: italic;
    color: var(--text-light);
    line-height: 1.6;
  }

  .press-page .coverage-note a { color: var(--emerald); text-decoration: none; }
  .press-page .coverage-note a:hover { text-decoration: underline; }

  /* ── PARTNER STRIP ── */
  .press-page .partner-strip {
    background: #040f07;
    padding: 28px 24px;
    text-align: center;
    border-top: 2px solid var(--gold);
  }

  .press-page .partner-strip p {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .press-page .partner-strip a {
    font-size: 14px;
    font-weight: 700;
    color: var(--soft-green);
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: color 0.2s;
  }

  .press-page .partner-strip a:hover { color: var(--gold); }
`;

export default function PressPage() {
  return (
    <div className={`press-page ${cormorant.variable} ${dmSans.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 1 — HERO */}
      <section className="press-hero">
        <div className="press-hero-inner">
          <div className="hero-eyebrow">Press &amp; Media</div>
          <h1 className="hero-title">
            Press <span className="gold">Kit</span> &amp; Coverage
          </h1>
          <div className="hero-accent" />
          <p className="hero-subtitle">
            For journalists, editors and industry observers
          </p>
          <p className="hero-lead">
            Everything you need to cover Real Estate Forward: Guyana 2026 &amp;
            Beyond — the landmark industry forum convened by Sherriann Elcock on
            May 22, 2026 at the Centre for Local Business Development in
            Georgetown, Guyana.
          </p>
        </div>
      </section>

      {/* 2 — MEDIA CONTACT */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <p className="contact-label">Media Inquiries</p>
            <p className="contact-name">Sherriann Elcock</p>
            <p className="contact-role">
              Convener, Real Estate Forward: Guyana 2026 &amp; Beyond
            </p>
            <p className="contact-row">
              <strong>Email:</strong>{" "}
              <a href="mailto:sherriann@sherriannelcock.com?subject=Press%20inquiry%20%E2%80%94%20Real%20Estate%20Forward">
                sherriann@sherriannelcock.com
              </a>
            </p>
            <p className="contact-row">
              <strong>Response time:</strong> Within 24 hours for press
              inquiries
            </p>
            <p className="contact-note">
              For interview requests, additional photos, or to speak with any of
              the forum&apos;s speakers, please email directly.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — PRESS RELEASE */}
      <section className="release">
        <div className="container">
          <p className="section-eyebrow">For the Record</p>
          <h2 className="section-title">Press Release</h2>
          <p className="section-sub">Download the full press release as PDF.</p>
          <div className="release-card">
            <div>
              <h3>
                Real Estate Forward: Guyana 2026 &amp; Beyond — Industry Forum
                Press Release
              </h3>
              <p className="release-meta">Issued May 25, 2026 · 2 pages · PDF</p>
            </div>
            <a
              href="/press/Real_Estate_Forward_Press_Release.pdf"
              download
              className="btn btn-gold"
            >
              Download Press Release (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* 4 — FACT SHEET */}
      <section className="factsheet">
        <div className="container">
          <p className="section-eyebrow">At a Glance</p>
          <h2 className="section-title">Fact Sheet</h2>
          <p className="section-sub">The May 22, 2026 forum at a glance.</p>
          <div className="fact-list">
            {factSheet.map((row) => (
              <div className="fact-row" key={row.label}>
                <div className="fact-key">{row.label}</div>
                <div className="fact-val">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — QUOTE BANK */}
      <section className="quotes">
        <div className="container">
          <p className="section-eyebrow">For Attribution</p>
          <h2 className="section-title">Quote Bank</h2>
          <p className="section-sub">
            Pre-approved quotes for journalists, ready to use verbatim.
          </p>
          {quotes.map((q, i) => (
            <div className="quote-card" key={i}>
              <p className="quote-text">{q.text}</p>
              <p className="quote-author">{q.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 — PHOTO GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <p className="section-eyebrow">Editorial Use</p>
          <h2 className="section-title">Event Photos</h2>
          <p className="section-sub">
            High-resolution event photos available for editorial use. Credit:
            Pascal John / Pascal Media GY.
          </p>
          <div className="gallery-grid">
            {gallery.map((photo) => (
              <a
                className="gallery-item"
                key={photo.src}
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.caption} />
                <span className="gallery-cap">{photo.caption}</span>
              </a>
            ))}
          </div>
          <p className="photo-credit">
            Photo credit: <strong>Pascal John / Pascal Media GY</strong> ·
            pascalmediagy.com
          </p>
        </div>
      </section>

      {/* 7 — ABOUT THE CONVENER */}
      <section className="bio-section">
        <div className="bio-inner">
          <div className="bio-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sherriann-elcock.jpg"
              alt="Sherriann Elcock, convener of Real Estate Forward: Guyana 2026 & Beyond"
            />
          </div>
          <div className="bio-body">
            <p className="bio-eyebrow">About the Convener</p>
            <p>
              <strong>Sherriann Elcock</strong> is a Guyana-based real estate
              professional and the founder of Prestigious Services and Realty.
              With over 50 completed transactions across Georgetown, Region 3,
              East Bank Demerara and Linden, she specializes in land,
              residential sales, apartment buildings, rentals and corporate
              relocation.
            </p>
            <p>
              A Founding Advisor at Guyana HomeHub, she convened{" "}
              <em>Real Estate Forward: Guyana 2026 &amp; Beyond</em> in May 2026
              to bring regulators, financial institutions, legal professionals,
              technology platforms and working agents into a single room. She
              intends to host the forum twice a year as the industry continues
              to evolve.
            </p>
            <p>
              Sherriann&apos;s professional principles —{" "}
              <em>Positivity. Pureness. Professionalism.</em> — guide her work
              across both real estate and industry convening.
            </p>
            <p>
              <strong>More information:</strong>{" "}
              <a href="/about">sherriannelcock.com/about</a>
            </p>
          </div>
        </div>
      </section>

      {/* 8 — EVENT COVERAGE */}
      <section className="coverage">
        <div className="container">
          <p className="section-eyebrow">In the Media</p>
          <h2 className="section-title">Event Coverage</h2>
          <p className="section-sub">
            Where Real Estate Forward has been covered, recorded and discussed.
          </p>
          <div className="coverage-grid">
            <div className="coverage-card">
              <h3>Watch the Full Forum</h3>
              <p>
                The complete four-hour industry forum is available on Sherriann
                Elcock&apos;s YouTube channel.
              </p>
              <p className="coverage-source">
                Sherriann Elcock | Guyana Real Estate (YouTube) · May 22, 2026
              </p>
              <a
                href="https://www.youtube.com/live/TUFW14XUnFw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
          <p className="coverage-note">
            Additional coverage will be added here as it is published. For media
            inquiries or to share coverage, please email{" "}
            <a href="mailto:sherriann@sherriannelcock.com">
              sherriann@sherriannelcock.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* 9 — PLATFORM PARTNER */}
      <div className="partner-strip">
        <p>Platform Partner</p>
        <a href="https://guyanahomehub.com" target="_blank" rel="noopener noreferrer">
          Guyana HomeHub — guyanahomehub.com
        </a>
      </div>
    </div>
  );
}
