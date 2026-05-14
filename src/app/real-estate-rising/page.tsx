import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import SpeakerBioTapHandler from "./SpeakerBioTapHandler";

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
  title:
    "Real Estate Forward: Guyana 2026 & Beyond — May 22, 2026",
  description:
    "A professional real estate industry forum hosted by Sherriann Elcock. Georgetown, Guyana — Friday May 22nd, 2026. Free to attend. Register now.",
  openGraph: {
    title: "Real Estate Forward: Guyana 2026 & Beyond",
    description:
      "Get your questions answered. Grow your business. May 22nd, 2026 — Georgetown, Guyana. Free to attend.",
    type: "website",
    images: [
      {
        url: "https://sherriannelcock.com/images/sherriann%20flyer%20real%20estate%20rising.png",
        width: 1024,
        height: 1536,
        alt: "Real Estate Forward: Guyana 2026 & Beyond — Presented by Sherriann Elcock",
      },
    ],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Real Estate Forward: Guyana 2026 & Beyond",
  description:
    "A professional real estate industry forum bringing together agents, attorneys, regulators, banking institutions, and financial professionals. Keynote address by Nicola Duggan, CEO of Paradigm Property Logistics & Management and Director of the Guyana Association of Real Estate Professionals (GAREP).",
  image: "https://sherriannelcock.com/images/sherriann%20flyer%20real%20estate%20rising.png",
  startDate: "2026-05-22T09:00:00-04:00",
  endDate: "2026-05-22T13:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  location: {
    "@type": "Place",
    name: "Centre for Local Business Development",
    address: {
      "@type": "PostalAddress",
      streetAddress: "253-254 South Road, Bourda",
      addressLocality: "Georgetown",
      addressCountry: "GY",
    },
  },
  organizer: {
    "@type": "Person",
    name: "Sherriann Elcock",
    url: "https://sherriannelcock.com",
  },
  performer: [
    { "@type": "Person", name: "Nicola Duggan" },
    { "@type": "Person", name: "Tiffany Jeffrey-Durant" },
    { "@type": "Person", name: "Darren Buckner" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Sherriann Elcock",
  url: "https://sherriannelcock.com",
  image: "https://sherriannelcock.com/images/sherriann-elcock.jpg",
  jobTitle: "Real Estate Professional & Founder",
  description:
    "Sherriann Elcock is a Guyana-based real estate professional with over 50 completed transactions across Georgetown, Region 3, East Bank Demerara, and Linden. Founder of Prestigious Services and Realty. Founding Advisor at Guyana HomeHub. Specializes in land, residential sales, apartment buildings, rentals, and corporate relocation.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Prestigious Services and Realty",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Georgetown",
        addressCountry: "GY",
      },
    },
    {
      "@type": "Organization",
      name: "Guyana HomeHub",
      url: "https://guyanahomehub.com",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Georgetown, Guyana" },
    { "@type": "Place", name: "Region 3, Guyana" },
    { "@type": "Place", name: "East Bank Demerara, Guyana" },
    { "@type": "Place", name: "Linden, Guyana" },
  ],
  sameAs: [
    "https://linkedin.com/in/sherriann-elcock",
    "https://youtube.com/@SherriannElcock",
  ],
};

const pageStyles = `
  .rer-page {
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

  .rer-page * { margin: 0; padding: 0; box-sizing: border-box; }

  /* ── HERO ── */
  .rer-page .hero {
    min-height: 100vh;
    background: var(--forest);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 60px 24px;
  }

  .rer-page .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 20% 30%, rgba(26,107,60,0.35) 0%, transparent 60%),
      radial-gradient(ellipse 60% 80% at 80% 70%, rgba(240,192,64,0.08) 0%, transparent 60%);
    animation: rerPulseGlow 8s ease-in-out infinite alternate;
  }

  @keyframes rerPulseGlow {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  .rer-page .hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 40px,
      rgba(255,255,255,0.015) 40px,
      rgba(255,255,255,0.015) 41px
    );
    pointer-events: none;
  }

  .rer-page .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 780px;
    animation: rerFadeUp 1s ease both;
  }

  @keyframes rerFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .rer-page .hero-tag {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--soft-green);
    font-weight: 500;
    margin-bottom: 24px;
    padding: 6px 16px;
    border: 1px solid rgba(168,219,190,0.3);
    border-radius: 2px;
  }

  .rer-page .hero-title {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(48px, 8vw, 88px);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.0;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .rer-page .hero-title .gold { color: var(--gold); }

  .rer-page .hero-subtitle {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(22px, 4vw, 36px);
    font-weight: 400;
    font-style: italic;
    color: var(--soft-green);
    margin-bottom: 32px;
    line-height: 1.3;
  }

  .rer-page .hero-tagline {
    font-size: 14px;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 48px;
    font-weight: 300;
  }

  .rer-page .date-badge {
    display: inline-flex;
    align-items: center;
    gap: 0;
    background: var(--gold);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 40px;
    box-shadow: 0 8px 32px rgba(240,192,64,0.25);
  }

  .rer-page .date-badge .date-part {
    padding: 14px 24px;
    font-size: 13px;
    font-weight: 700;
    color: var(--forest);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .rer-page .date-badge .divider {
    width: 1px;
    height: 44px;
    background: rgba(7,26,14,0.2);
  }

  .rer-page .hero-cta {
    display: inline-block;
    background: var(--emerald);
    color: #fff;
    padding: 16px 40px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 3px;
    transition: all 0.25s ease;
    border: 2px solid var(--emerald);
    box-shadow: 0 4px 20px rgba(26,107,60,0.4);
  }

  .rer-page .hero-cta:hover {
    background: transparent;
    color: var(--emerald-light);
    border-color: var(--emerald-light);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(26,107,60,0.3);
  }

  .rer-page .free-note {
    margin-top: 16px;
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rer-page .scroll-hint {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.3);
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    animation: rerBounce 2s ease-in-out infinite;
  }

  .rer-page .scroll-hint::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
  }

  @keyframes rerBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }

  /* ── VENUE STRIP ── */
  .rer-page .venue-strip {
    background: var(--gold);
    padding: 20px 24px;
    text-align: center;
  }

  .rer-page .venue-strip p {
    font-size: 13px;
    font-weight: 700;
    color: var(--forest);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .rer-page .venue-strip span {
    color: var(--emerald);
  }

  /* ── SECTIONS ── */
  .rer-page section {
    padding: 80px 24px;
  }

  .rer-page .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .rer-page .section-eyebrow {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--emerald);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .rer-page .section-title {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 700;
    color: var(--forest);
    line-height: 1.1;
    margin-bottom: 24px;
  }

  .rer-page .section-title em {
    color: var(--emerald);
    font-style: italic;
  }

  /* ── ABOUT ── */
  .rer-page .about { background: var(--cream); }

  .rer-page .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
    margin-top: 48px;
  }

  @media (max-width: 640px) {
    .rer-page .about-grid { grid-template-columns: 1fr; gap: 32px; }
  }

  .rer-page .about-text p {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 16px;
  }

  .rer-page .about-text p strong {
    color: var(--forest);
  }

  .rer-page .topics-list {
    background: var(--forest);
    border-radius: 6px;
    padding: 32px;
  }

  .rer-page .topics-list h3 {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 22px;
    color: var(--gold);
    margin-bottom: 20px;
    font-weight: 600;
  }

  .rer-page .topic-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(168,219,190,0.1);
    font-size: 14px;
    color: rgba(255,255,255,0.85);
    line-height: 1.5;
  }

  .rer-page .topic-item:last-child { border-bottom: none; }

  .rer-page .topic-icon {
    font-size: 16px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* ── AGENDA ── */
  .rer-page .agenda { background: #f0ece3; }

  .rer-page .agenda-list {
    margin-top: 40px;
    position: relative;
  }

  .rer-page .agenda-list::before {
    content: '';
    position: absolute;
    left: 70px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--emerald), transparent);
  }

  @media (max-width: 480px) {
    .rer-page .agenda-list::before { left: 50px; }
  }

  .rer-page .agenda-item {
    display: flex;
    gap: 28px;
    align-items: flex-start;
    padding: 20px 0;
    animation: rerFadeUp 0.6s ease both;
  }

  .rer-page .agenda-time {
    min-width: 70px;
    font-size: 12px;
    font-weight: 700;
    color: var(--emerald);
    letter-spacing: 0.05em;
    text-align: right;
    padding-top: 3px;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    .rer-page .agenda-time { min-width: 50px; font-size: 11px; }
  }

  .rer-page .agenda-dot {
    width: 12px;
    height: 12px;
    background: var(--gold);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 5px;
    position: relative;
    z-index: 1;
  }

  .rer-page .agenda-body h4 {
    font-size: 15px;
    font-weight: 600;
    color: var(--forest);
    margin-bottom: 2px;
  }

  .rer-page .agenda-body p {
    font-size: 13px;
    color: var(--text-light);
  }

  /* ── KEYNOTE AGENDA ITEM ── */
  .rer-page .agenda-item.keynote {
    background: rgba(240, 192, 64, 0.06);
    border-left: 3px solid var(--gold);
    padding-left: 12px;
    margin-left: -12px;
  }

  .rer-page .agenda-item.keynote .agenda-dot {
    background: var(--gold);
    width: 14px;
    height: 14px;
    margin-top: 4px;
  }

  .rer-page .agenda-item.keynote .agenda-body h4 {
    color: var(--gold);
    font-size: 16px;
  }

  .rer-page .keynote-badge {
    display: inline-block;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--forest);
    background: var(--gold);
    padding: 2px 8px;
    border-radius: 2px;
    margin-bottom: 4px;
  }

  /* ── SPEAKERS ── */
  .rer-page .speakers { background: var(--cream); }

  .rer-page .speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 48px;
  }

  .rer-page .speaker-card {
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .rer-page .speaker-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }

  .rer-page .speaker-photo {
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, #0d3520, #1a6b3c);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .rer-page .speaker-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .rer-page .speaker-photo .placeholder-icon {
    font-size: 56px;
    opacity: 0.25;
  }

  .rer-page .speaker-photo .photo-hint {
    position: absolute;
    bottom: 8px;
    left: 0; right: 0;
    text-align: center;
    font-size: 9px;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rer-page .speaker-info {
    padding: 16px;
    border-top: 3px solid var(--gold);
  }

  .rer-page .speaker-name {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 19px;
    font-weight: 700;
    color: var(--forest);
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .rer-page .speaker-role {
    font-size: 11px;
    color: var(--text-light);
    line-height: 1.5;
    font-weight: 400;
  }

  .rer-page .speaker-badge {
    display: inline-block;
    margin-top: 8px;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--emerald);
    background: rgba(26,107,60,0.08);
    padding: 3px 8px;
    border-radius: 2px;
  }

  /* ── SPEAKER CARD HOVER BIO OVERLAY ── */
  .rer-page .speaker-card {
    position: relative;
    overflow: hidden;
  }

  .rer-page .speaker-bio-overlay {
    position: absolute;
    inset: 0;
    background: rgba(7, 26, 14, 0.96);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 16px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    z-index: 10;
  }

  .rer-page .speaker-card:hover .speaker-bio-overlay,
  .rer-page .speaker-card.bio-active .speaker-bio-overlay {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .rer-page .speaker-bio-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 8px;
  }

  .rer-page .speaker-bio-text {
    font-size: 12.5px;
    color: rgba(255, 255, 255, 0.88);
    line-height: 1.65;
    margin-bottom: 10px;
  }

  .rer-page .speaker-bio-topic {
    font-size: 11px;
    font-style: italic;
    color: var(--soft-green);
    line-height: 1.5;
    border-top: 1px solid rgba(168, 219, 190, 0.2);
    padding-top: 8px;
    margin-top: 4px;
  }

  /* Mobile tap support */
  @media (hover: none) {
    .rer-page .speaker-card .speaker-bio-overlay {
      opacity: 0;
      transform: translateY(8px);
    }
    .rer-page .speaker-card.bio-active .speaker-bio-overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .rer-page .pending-card {
    background: rgba(26,107,60,0.05);
    border: 2px dashed rgba(26,107,60,0.2);
    border-radius: 6px;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 280px;
  }

  .rer-page .pending-card .pending-icon {
    font-size: 32px;
    margin-bottom: 12px;
    opacity: 0.4;
  }

  .rer-page .pending-card p {
    font-size: 13px;
    color: var(--text-light);
    line-height: 1.5;
  }

  /* ── HOST ── */
  .rer-page .host-section {
    background: var(--forest);
    padding: 80px 24px;
  }

  .rer-page .host-inner {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: center;
  }

  @media (max-width: 640px) {
    .rer-page .host-inner { grid-template-columns: 1fr; text-align: center; }
    .rer-page .host-photo { margin: 0 auto; }
  }

  .rer-page .host-photo {
    width: 220px;
    height: 220px;
    border-radius: 6px;
    background: linear-gradient(135deg, #0d3520, #2a8a52);
    overflow: hidden;
    position: relative;
    border: 3px solid var(--gold);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rer-page .host-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .rer-page .host-photo .placeholder-icon {
    font-size: 72px;
    opacity: 0.2;
  }

  .rer-page .host-photo .photo-hint {
    position: absolute;
    bottom: 8px;
    left: 0; right: 0;
    text-align: center;
    font-size: 9px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rer-page .host-eyebrow {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 10px;
  }

  .rer-page .host-name {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    line-height: 1.0;
    margin-bottom: 6px;
  }

  .rer-page .host-title {
    font-size: 13px;
    color: var(--soft-green);
    margin-bottom: 20px;
    font-style: italic;
  }

  .rer-page .host-bio {
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.8;
    margin-bottom: 20px;
  }

  .rer-page .host-tagline {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--gold);
  }

  /* ── REGISTER ── */
  .rer-page .register-section {
    background: var(--emerald);
    padding: 80px 24px;
    text-align: center;
  }

  .rer-page .register-section .section-eyebrow {
    color: var(--soft-green);
  }

  .rer-page .register-section .section-title {
    color: #fff;
  }

  .rer-page .register-section .section-title em {
    color: var(--gold);
  }

  .rer-page .register-box {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 40px;
    max-width: 520px;
    margin: 40px auto 0;
    backdrop-filter: blur(10px);
  }

  .rer-page .register-link-display {
    background: var(--gold);
    border-radius: 4px;
    padding: 18px 28px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .rer-page .register-link-display:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(240,192,64,0.4);
  }

  .rer-page .register-link-display .link-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(7,26,14,0.6);
    margin-bottom: 4px;
  }

  .rer-page .register-link-display .link-url {
    font-size: 16px;
    font-weight: 900;
    color: var(--forest);
    text-decoration: none;
  }

  .rer-page .register-cta {
    display: inline-block;
    background: var(--forest);
    color: #fff;
    padding: 16px 44px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 3px;
    transition: all 0.25s;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }

  .rer-page .register-cta:hover {
    background: #0a2a14;
    transform: translateY(-2px);
  }

  .rer-page .register-notes {
    margin-top: 16px;
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
  }

  /* ── PARTNER ── */
  .rer-page .partner-strip {
    background: #040f07;
    padding: 28px 24px;
    text-align: center;
    border-top: 2px solid var(--gold);
  }

  .rer-page .partner-strip p {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .rer-page .partner-strip a {
    font-size: 14px;
    font-weight: 700;
    color: var(--soft-green);
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: color 0.2s;
  }

  .rer-page .partner-strip a:hover { color: var(--gold); }

  /* ── FOOTER ── */
  .rer-page .rer-footer {
    background: var(--forest);
    padding: 32px 24px;
    text-align: center;
    border-top: 1px solid rgba(168,219,190,0.1);
  }

  .rer-page .rer-footer p {
    font-size: 12px;
    color: rgba(255,255,255,0.3);
    line-height: 1.8;
  }

  .rer-page .rer-footer a {
    color: var(--soft-green);
    text-decoration: none;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .rer-page section { padding: 56px 20px; }
    .rer-page .speakers-grid { grid-template-columns: 1fr 1fr; }
    .rer-page .register-box { padding: 28px 20px; }
    .rer-page .agenda-item { gap: 16px; }
  }

  @media (max-width: 400px) {
    .rer-page .speakers-grid { grid-template-columns: 1fr; }
    .rer-page .date-badge { flex-direction: column; }
    .rer-page .date-badge .divider { width: 80px; height: 1px; }
  }
`;

export default function RealEstateRisingPage() {
  return (
    <div className={`rer-page ${cormorant.variable} ${dmSans.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      <SpeakerBioTapHandler />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">
            A Real Estate &amp; Entrepreneurship Industry Seminar
          </div>
          <h1 className="hero-title">
            Real Estate
            <br />
            <span className="gold">Forward</span>
          </h1>
          <p className="hero-subtitle">Guyana 2026 &amp; Beyond</p>
          <p className="hero-tagline">
            Get your questions answered. Grow your business. Don&apos;t miss this.
          </p>

          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", marginBottom: "24px", lineHeight: "1.6" }}>
            For <strong style={{ color: "#fff" }}>real estate agents</strong> &nbsp;·&nbsp;
            <strong style={{ color: "#fff" }}>aspiring agents</strong> &nbsp;·&nbsp;
            <strong style={{ color: "#fff" }}>entrepreneurs</strong> ready for Guyana&apos;s new real estate era
          </p>

          <div className="date-badge">
            <div className="date-part">Friday, May 22nd 2026</div>
            <div className="divider"></div>
            <div className="date-part">9:00 AM — 1:00 PM</div>
          </div>

          <br />
          <a
            href="https://forms.gle/xB3pxP6nm1231o8y6"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            Reserve Your Free Seat
          </a>
          <p className="free-note">
            Free to attend &nbsp;·&nbsp; Seats are limited
          </p>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      {/* VENUE STRIP */}
      <div className="venue-strip">
        <p>
          Centre for <span>Local Business Development</span> &nbsp;·&nbsp;
          253-254 South Road, Bourda, Georgetown, Guyana
        </p>
      </div>

      {/* ABOUT */}
      <section className="about">
        <div className="container">
          <p className="section-eyebrow">About the Event</p>
          <h2 className="section-title">
            Guyana&apos;s real estate industry
            <br />
            is <em>at a turning point.</em>
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Oil money is reshaping property values. Diaspora buyers are
                returning with capital. A new generation of agents is trying
                to build real careers — not side hustles.
              </p>
              <p>
                But the infrastructure hasn&apos;t caught up.{" "}
                <strong>
                  No MLS. No standardized licensing. No trusted framework.
                </strong>{" "}
                Just Facebook Marketplace and a lot of uncertainty.
              </p>
              <p>
                Real Estate Forward is the conversation that changes that.
                Brought together by Sherriann Elcock, this half-day seminar
                gathers agents, attorneys, regulators, and financial
                professionals to set a new standard for what real estate
                professionalism looks like in Guyana.
              </p>
              <p>
                Whether you&apos;re an active agent, an aspiring one, or a
                buyer trying to navigate this market — this is the room to be
                in.
              </p>
            </div>
            <div className="topics-list">
              <h3>What We&apos;ll Cover</h3>
              <div className="topic-item">
                <span className="topic-icon">📈</span>
                <span>Market Direction — Where Guyana real estate is heading right now</span>
              </div>
              <div className="topic-item">
                <span className="topic-icon">🏦</span>
                <span>Banking, Mortgages &amp; How to Get Your Clients Financed</span>
              </div>
              <div className="topic-item">
                <span className="topic-icon">📱</span>
                <span>Technology &amp; Tools Changing How Property is Listed and Sold</span>
              </div>
              <div className="topic-item">
                <span className="topic-icon">❓</span>
                <span>Open Floor — Your Questions Answered by the People Who Can Help</span>
              </div>
              <div className="topic-item">
                <span className="topic-icon">🏛️</span>
                <span>Licensing, Tax Compliance &amp; Agent Obligations (GRA)</span>
              </div>
              <div className="topic-item">
                <span className="topic-icon">⚖️</span>
                <span>Legal Protection for Buyers &amp; Agents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="agenda">
        <div className="container">
          <p className="section-eyebrow">Program</p>
          <h2 className="section-title">
            The <em>agenda</em>
          </h2>
          <div className="agenda-list">

            {/* DOORS OPEN */}
            <div className="agenda-item">
              <div className="agenda-time">9:00 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Doors Open</h4>
                <p>Registration, networking &amp; complimentary refreshments</p>
              </div>
            </div>

            {/* WELCOME */}
            <div className="agenda-item">
              <div className="agenda-time">9:30 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Welcome &amp; Opening</h4>
                <p>Hosted by Sherriann Elcock</p>
              </div>
            </div>

            {/* KEYNOTE — NICOLA DUGGAN */}
            <div className="agenda-item keynote">
              <div className="agenda-time">9:45 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <div className="keynote-badge">Keynote Address</div>
                <h4>
                  Real Estate as Services and Not Simply Business or Supplemental Income<br/>
                  Ethical Practices, Compliance &amp; Industry Trends
                </h4>
                <p>
                  Nicola Duggan &mdash; CEO, Paradigm Property Logistics &amp; Management
                  &nbsp;|&nbsp; Director, Guyana Association of Real Estate Professionals (GAREP)
                </p>
              </div>
            </div>

            {/* GRA */}
            <div className="agenda-item">
              <div className="agenda-time">10:15 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Licensing, Tax &amp; Agent Obligations</h4>
                <p>Guyana Revenue Authority (GRA) &mdash; Open Q&amp;A</p>
              </div>
            </div>

            {/* NIS */}
            <div className="agenda-item">
              <div className="agenda-time">10:45 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Self-Employed Benefits &amp; NIS Obligations</h4>
                <p>National Insurance Scheme (NIS) &mdash; Open Q&amp;A</p>
              </div>
            </div>

            {/* TIFFANY */}
            <div className="agenda-item">
              <div className="agenda-time">11:10 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Legal Protection for Buyers &amp; Agents</h4>
                <p>Tiffany Jeffrey-Durant &mdash; Attorney-at-Law, Durant Property Management</p>
              </div>
            </div>

            {/* BANKING */}
            <div className="agenda-item">
              <div className="agenda-time">11:30 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Banking, Mortgages &amp; Financing</h4>
                <p>GBTI &amp; Republic Bank &mdash; Mortgages &amp; Client Financing</p>
              </div>
            </div>

            {/* DARREN BUCKNER */}
            <div className="agenda-item">
              <div className="agenda-time">11:50 AM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Technology &amp; The Future of Real Estate in Guyana</h4>
                <p>Darren Buckner &mdash; Founder &amp; CEO, Guyana HomeHub</p>
              </div>
            </div>

            {/* OPEN FLOOR */}
            <div className="agenda-item">
              <div className="agenda-time">12:10 PM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Open Floor &mdash; Agents Speak</h4>
                <p>Questions, concerns, open discussion &mdash; the floor belongs to you</p>
              </div>
            </div>

            {/* CLOSING */}
            <div className="agenda-item">
              <div className="agenda-time">12:45 PM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Closing Remarks</h4>
                <p>Sherriann Elcock</p>
              </div>
            </div>

            {/* CLOSE */}
            <div className="agenda-item">
              <div className="agenda-time">1:00 PM</div>
              <div className="agenda-dot"></div>
              <div className="agenda-body">
                <h4>Close &amp; Networking</h4>
                <p>Event ends &mdash; light refreshments continue</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="speakers">
        <div className="container">
          <p className="section-eyebrow">Confirmed Speakers</p>
          <h2 className="section-title">
            Who you&apos;ll
            <br />
            <em>hear from</em>
          </h2>

          <div className="speakers-grid">
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Keynote Speaker</div>
                <div className="speaker-bio-text">
                  CEO of Paradigm Property Logistics &amp; Management and Director of the
                  Guyana Association of Real Estate Professionals (GAREP). A respected
                  voice in the industry, Ms. Duggan helped shape and was instrumental in
                  crafting and reviewing the Real Estate Agents and Brokers Bill &mdash;
                  the regulatory framework that defines professional standards in Guyana today.
                  14 years of real estate experience spanning commercial land acquisition,
                  office space, retail, and industrial facilities.
                </div>
                <div className="speaker-bio-topic">
                  &ldquo;Real Estate as Services and Not Simply Business or Supplemental Income &middot; Ethical Practices, Compliance and Industry Trends&rdquo;
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Nicola%20Duggan%20Headshot.jpeg"
                  alt="Nicola Duggan"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Nicola Duggan</div>
                <div className="speaker-role">
                  CEO, Paradigm Property Logistics &amp; Management<br/>
                  Director, Guyana Association of Real Estate Professionals (GAREP)
                </div>
                <span className="speaker-badge">Keynote Speaker</span>
              </div>
            </div>

            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Legal Panel</div>
                <div className="speaker-bio-text">
                  Attorney-at-Law and Co-founder of Durant Property Management. Specialist
                  in real estate law, buyer and agent protections, and property transactions
                  in Guyana.
                </div>
                <div className="speaker-bio-topic">
                  Bio update coming shortly.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Tiffany%20Durant%20Headshot.jpeg"
                  alt="Tiffany Jeffrey-Durant"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Tiffany Jeffrey-Durant</div>
                <div className="speaker-role">
                  Attorney-at-Law &amp; Co-founder, Durant Property Management
                </div>
                <span className="speaker-badge">Legal Panel</span>
              </div>
            </div>

            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Regulatory Session</div>
                <div className="speaker-bio-text">
                  Representative from the Guyana Revenue Authority covering licensing
                  requirements, tax compliance, and agent obligations under current law.
                </div>
                <div className="speaker-bio-topic">
                  Open floor &mdash; bring your compliance questions.
                </div>
              </div>
              <div className="speaker-photo" style={{ background: "#fff" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gra%20logo.jpg"
                  alt="Guyana Revenue Authority logo"
                  style={{ objectFit: "contain", padding: "16px" }}
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">GRA Representative</div>
                <div className="speaker-role">
                  Guyana Revenue Authority — Licensing &amp; Tax Compliance
                </div>
                <span className="speaker-badge">Regulatory Session</span>
              </div>
            </div>

            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Agent Panel</div>
                <div className="speaker-bio-text">
                  Real estate professional with over 10 years of experience in the Guyanese
                  market. Founder of the Training Future Real Estate Agents WhatsApp group.
                </div>
                <div className="speaker-bio-topic">
                  The agent&apos;s perspective &mdash; what the market looks like on the ground.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Robert%20pearson%20headshot.png"
                  alt="Robert Pearson"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Robert Pearson</div>
                <div className="speaker-role">
                  Real Estate Professional, 10+ Years &mdash; Founder, Training Future Real Estate Agents
                </div>
                <span className="speaker-badge">Agent Panel</span>
              </div>
            </div>

            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">PropTech &amp; Innovation</div>
                <div className="speaker-bio-text">
                  Founder &amp; CEO of Guyana HomeHub &mdash; Guyana&apos;s first verified
                  real estate search platform, live on iPhone &amp; Android. Born in the
                  United States, Darren has deep personal ties to Guyana through his
                  Guyanese wife and family. He built Guyana HomeHub to eliminate the
                  WhatsApp and Facebook chaos that has defined property search in Guyana
                  and replace it with verified listings, verified agents, and a platform
                  built specifically for this market and the diaspora abroad.
                </div>
                <div className="speaker-bio-topic">
                  Technology, digital listings, and where the rest of the world already is &mdash;
                  and how Guyana gets there.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/darren%20buckner%20headshot.png"
                  alt="Darren Buckner"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Darren Buckner</div>
                <div className="speaker-role">
                  Founder &amp; CEO, Guyana HomeHub<br/>
                  guyanahomehub.com &mdash; iPhone &amp; Android
                </div>
                <span className="speaker-badge">PropTech</span>
              </div>
            </div>

            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Benefits Session</div>
                <div className="speaker-bio-text">
                  Representative from the National Insurance Scheme covering self-employed
                  benefits, contribution obligations, and what agents are entitled to.
                </div>
                <div className="speaker-bio-topic">
                  Know your benefits. Know your obligations.
                </div>
              </div>
              <div className="speaker-photo">
                <span className="placeholder-icon">🏛️</span>
              </div>
              <div className="speaker-info">
                <div className="speaker-name">NIS Representative</div>
                <div className="speaker-role">
                  National Insurance Scheme &mdash; Self-Employed Benefits
                  &amp; Obligations
                </div>
                <span className="speaker-badge">Benefits Session</span>
              </div>
            </div>

            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Banking &amp; Financing</div>
                <div className="speaker-bio-text">
                  Representatives from GBTI and Republic Bank covering mortgage
                  products, client financing options, requirements for local and
                  overseas buyers, and investment property financing.
                </div>
                <div className="speaker-bio-topic">
                  How to get your clients financed and close more deals.
                </div>
              </div>
              <div className="speaker-photo">
                <span className="placeholder-icon">🏦</span>
              </div>
              <div className="speaker-info">
                <div className="speaker-name">GBTI &amp; Republic Bank</div>
                <div className="speaker-role">
                  Mortgages, Financing &amp; Banking Services
                </div>
                <span className="speaker-badge">Banking &amp; Financing</span>
              </div>
            </div>

            <div className="pending-card">
              <div className="pending-icon">⏳</div>
              <p>
                <strong style={{ color: "#444" }}>Additional Speakers</strong>
                <br />
                Being Confirmed
                <br />
                <span style={{ fontSize: "12px" }}>Stay Tuned</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOST */}
      <section className="host-section">
        <div className="host-inner">
          <div className="host-photo" style={{ height: "330px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sherriann%20flyer%20real%20estate%20rising.png"
              alt="Real Estate Forward: Guyana 2026 & Beyond — Presented by Sherriann Elcock"
            />
          </div>
          <div>
            <p className="host-eyebrow">Your Host &amp; Moderator</p>
            <h2 className="host-name">Sherriann Elcock</h2>
            <p className="host-title">
              Real Estate Professional &amp; Founder, Prestigious Services and
              Realty
            </p>
            <p className="host-bio">
              Sherriann Elcock is a Guyana-based real estate professional,
              entrepreneur, and the founder of Prestigious Services and
              Realty. Born in Linden and raised in Region 3, she has built her
              career entirely on the ground in Guyana — across Georgetown,
              East Bank Demerara, West Bank, and beyond. With over 50
              completed transactions spanning land sales, residential
              properties, apartment buildings, rentals, and corporate
              relocation, she has become one of the most trusted names in the
              industry.
            </p>
            <p className="host-bio" style={{ marginTop: "12px" }}>
              Sherriann began her real estate career in 2019 and went on to
              work with SMS Realty and Britton&apos;s Realty before founding
              Prestigious Services and Realty in January 2025 — a one-stop
              real estate firm built on the belief that every client, not just
              the affluent buyer, deserves professional, transparent, and
              stress-free service. Her business model integrates legal,
              banking, architectural, and property management services so
              that clients never have to start over with a new provider
              mid-transaction.
            </p>
            <p className="host-bio" style={{ marginTop: "12px" }}>
              In February 2026, she became a Founding Advisor to Guyana
              HomeHub — the first verified real estate search platform built
              specifically for Guyana and the diaspora. She hosts the YouTube
              channel <em>Sherriann Elcock | Guyana Real Estate</em>{" "}
              (@SherriannElcock), where she delivers straight-talk advice for
              buyers, sellers, and diaspora investors navigating the Guyana
              market.
            </p>
            <p className="host-bio" style={{ marginTop: "12px" }}>
              She is the organizer and moderator of{" "}
              <em>Real Estate Forward: Guyana 2026 &amp; Beyond</em> —
              and the reason this conversation is happening at all.
            </p>
            <p className="host-tagline">
              &ldquo;Positivity. Pureness. Professionalism.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section className="register-section">
        <div className="container">
          <p className="section-eyebrow">Reserve Your Seat</p>
          <h2 className="section-title">
            Free to attend.
            <br />
            <em>Limited seats.</em>
          </h2>
          <div className="register-box">
            <div className="register-link-display">
              <div className="link-label">Registration Link</div>
              <a
                className="link-url"
                href="https://forms.gle/xB3pxP6nm1231o8y6"
                target="_blank"
                rel="noopener noreferrer"
              >
                forms.gle/xB3pxP6nm1231o8y6
              </a>
            </div>
            <a
              href="https://forms.gle/xB3pxP6nm1231o8y6"
              target="_blank"
              rel="noopener noreferrer"
              className="register-cta"
            >
              Register Now — Takes 60 Seconds
            </a>
            <p className="register-notes">
              Free to attend. Registration guarantees your seat.
              <br />
              Paper sign-in also available at the door.
              <br />
              Complimentary light refreshments, snacks &amp; coffee included.
              <br />
              Live stream available on Facebook for those who cannot attend in person.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <div className="partner-strip">
        <p>Platform Partner</p>
        <a
          href="https://guyanahomehub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guyana HomeHub — guyanahomehub.com
        </a>
      </div>

      {/* FOOTER */}
      <footer className="rer-footer">
        <p>
          Real Estate Forward: Guyana 2026 &amp; Beyond &nbsp;·&nbsp;
          Friday May 22nd, 2026
          <br />
          Centre for Local Business Development, Georgetown, Guyana
          <br />
          Hosted by{" "}
          <a href="https://sherriannelcock.com">Sherriann Elcock</a> &nbsp;·&nbsp;{" "}
          <a href="https://sherriannelcock.com">sherriannelcock.com</a>
        </p>
      </footer>
    </div>
  );
}
