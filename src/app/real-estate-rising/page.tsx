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
    "Real Estate Forward: Guyana 2026 & Beyond — Event Recap | May 22, 2026 Georgetown",
  description:
    "A landmark industry forum convened by Sherriann Elcock on May 22, 2026 in Georgetown, Guyana. 42 agents and industry leaders gathered, with GAREP, the GRA, Republic Bank, GBTI, the legal community and Guyana HomeHub represented, to address professionalism, compliance, financing and the modernization of Guyana's real estate market.",
  openGraph: {
    title: "Real Estate Forward: Guyana 2026 & Beyond — Event Recap",
    description:
      "42 agents and industry leaders. GAREP, GRA, Republic Bank, GBTI, the legal community and Guyana HomeHub represented. The May 22, 2026 industry forum that signaled Guyana's real estate market is professionalizing.",
    type: "article",
    images: [
      {
        url: "https://sherriannelcock.com/images/event-crowd-shot.jpeg",
        width: 1280,
        height: 960,
        alt: "Real Estate Forward: Guyana 2026 & Beyond — May 22, 2026 industry forum at the Centre for Local Business Development, Georgetown",
      },
    ],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Real Estate Forward: Guyana 2026 & Beyond",
  description:
    "A landmark professional real estate industry forum that brought together 42 agents and industry leaders, with the Guyana Association of Real Estate Professionals (GAREP), the Guyana Revenue Authority, Republic Bank, GBTI, the legal community, and Guyana HomeHub all represented. Convened by Sherriann Elcock and held on May 22, 2026 at the Centre for Local Business Development in Georgetown, Guyana. Keynote address by Nicola Duggan, Director of the Guyana Association of Real Estate Professionals (GAREP).",
  image: "https://sherriannelcock.com/images/event-crowd-shot.jpeg",
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
    {
      "@type": "Person",
      name: "Darren L. Buckner",
      url: "https://darrenlbuckner.com",
    },
    { "@type": "Person", name: "Saeed Jameil" },
    { "@type": "Organization", name: "Guyana Revenue Authority" },
    { "@type": "Organization", name: "Republic Bank" },
    {
      "@type": "Organization",
      name: "Guyana Bank for Trade and Industry (GBTI)",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real Estate Forward: Guyana 2026 & Beyond — Event Recap",
  description:
    "A landmark industry forum convened by Sherriann Elcock on May 22, 2026. 42 agents and industry leaders gathered, with GAREP, the GRA, Republic Bank, GBTI, the legal community and Guyana HomeHub represented, to address professionalism, compliance, financing and the modernization of Guyana's real estate market.",
  image: "https://sherriannelcock.com/images/event-crowd-shot.jpeg",
  datePublished: "2026-05-25T00:00:00-04:00",
  dateModified: "2026-05-25T00:00:00-04:00",
  author: {
    "@type": "Person",
    name: "Sherriann Elcock",
    url: "https://sherriannelcock.com",
  },
  publisher: {
    "@type": "Person",
    name: "Sherriann Elcock",
    url: "https://sherriannelcock.com",
  },
  about: {
    "@type": "Event",
    name: "Real Estate Forward: Guyana 2026 & Beyond",
  },
  mentions: [
    {
      "@type": "Organization",
      name: "Guyana HomeHub",
      url: "https://guyanahomehub.com",
      founder: {
        "@type": "Person",
        name: "Darren L. Buckner",
        url: "https://darrenlbuckner.com",
      },
    },
    {
      "@type": "Person",
      name: "Darren L. Buckner",
      url: "https://darrenlbuckner.com",
      jobTitle: "Founder, Guyana HomeHub",
    },
    {
      "@type": "Organization",
      name: "Guyana Association of Real Estate Professionals (GAREP)",
    },
  ],
  mainEntityOfPage: "https://sherriannelcock.com/real-estate-rising",
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

  /* ── WHAT WAS DISCUSSED ── */
  .rer-page .recap { background: #f0ece3; }

  .rer-page .recap-subhead {
    font-size: 16px;
    color: var(--text-mid);
    font-style: italic;
    margin-bottom: 8px;
  }

  .rer-page .recap-blocks { margin-top: 48px; }

  .rer-page .recap-block {
    padding: 28px 0;
    border-top: 1px solid rgba(7,26,14,0.1);
  }

  .rer-page .recap-block:first-child { border-top: none; padding-top: 0; }

  .rer-page .recap-num {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--emerald);
    margin-bottom: 8px;
  }

  .rer-page .recap-block h3 {
    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
    font-size: clamp(24px, 3.5vw, 32px);
    font-weight: 700;
    color: var(--forest);
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .rer-page .recap-block p {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 14px;
  }

  .rer-page .recap-block p:last-child { margin-bottom: 0; }

  .rer-page .recap-image {
    margin: 8px 0 24px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }

  .rer-page .recap-image img { width: 100%; height: auto; display: block; }

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">Industry Forum — May 22, 2026</div>
          <h1 className="hero-title">
            Real Estate
            <br />
            <span className="gold">Forward</span>
          </h1>
          <p className="hero-subtitle">Guyana 2026 &amp; Beyond</p>
          <p className="hero-tagline">
            42 agents and leaders. One room. Georgetown.
          </p>

          <div className="date-badge">
            <div className="date-part">
              Held Friday, May 22, 2026 &nbsp;·&nbsp; Centre for Local Business
              Development, Georgetown
            </div>
          </div>

          <br />
          <a href="#recap" className="hero-cta">
            Read the Recap
          </a>
          <p className="free-note">Convened by Sherriann Elcock</p>

          <div
            style={{
              marginTop: "44px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(168,219,190,0.25)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/event-crowd-shot.jpeg"
              alt="Sherriann Elcock and attendees at Real Estate Forward: Guyana 2026 & Beyond, May 22, 2026, Centre for Local Business Development, Georgetown"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <div className="scroll-hint">Read the recap</div>
      </section>

      {/* VENUE STRIP */}
      <div className="venue-strip">
        <p>
          Held May 22, 2026 &nbsp;·&nbsp; Centre for{" "}
          <span>Local Business Development</span> &nbsp;·&nbsp; 253-254 South
          Road, Bourda, Georgetown
        </p>
      </div>

      {/* ABOUT */}
      <section className="about">
        <div className="container">
          <p className="section-eyebrow">The Forum</p>
          <h2 className="section-title">
            A landmark moment for Guyana&apos;s
            <br />
            <em>real estate industry.</em>
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                On Friday, May 22, 2026, forty-two agents and industry leaders
                from across Guyana&apos;s real estate ecosystem gathered at the
                Centre for Local Business Development in Georgetown for{" "}
                <em>Real Estate Forward: Guyana 2026 &amp; Beyond</em> — a
                four-hour industry forum addressing professionalism, regulatory
                compliance, financing access and the future of property
                transactions in Guyana.
              </p>
              <p>
                The forum brought together the{" "}
                <strong>
                  Guyana Association of Real Estate Professionals (GAREP)
                </strong>
                , the <strong>Guyana Revenue Authority (GRA)</strong>,{" "}
                <strong>Republic Bank</strong>, the{" "}
                <strong>Guyana Bank for Trade and Industry (GBTI)</strong>, the
                legal community, and <strong>Guyana HomeHub</strong> — the
                country&apos;s digital real estate listing platform founded by
                Darren L. Buckner.
              </p>
              <p>
                This page documents what was discussed, who was in the room,
                and what the conversation signals for Guyana&apos;s property
                market in 2026 and beyond.
              </p>
            </div>
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/event-room-wide.jpeg"
                alt="Wide view of the Real Estate Forward: Guyana 2026 & Beyond forum room, Sherriann Elcock addressing attendees, May 22, 2026, Georgetown"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WAS DISCUSSED */}
      <section className="recap" id="recap">
        <div className="container">
          <p className="section-eyebrow">The Conversation</p>
          <h2 className="section-title">
            What Was <em>Discussed</em>
          </h2>
          <p className="recap-subhead">
            The five conversations that shaped the room.
          </p>

          <div className="recap-blocks">
            {/* 01 — INTEGRITY */}
            <div className="recap-block">
              <div className="recap-num">01 — Keynote</div>
              <h3>Industry Integrity Was at the Center of the Conversation</h3>
              <p>
                Delivering the keynote, Nicola Duggan, BSc., Director of the
                Guyana Association of Real Estate Professionals (GAREP), told
                attendees that the world is watching Guyana to see whether its
                rapid growth is managed with integrity. Duggan emphasized that
                licensing, due diligence and professional standards are not
                bureaucratic boxes to check — they are foundational to whether
                Guyana attracts long-term investor confidence or repels it.
              </p>
              <p>
                With oil and gas capital, diaspora investment from North America
                and Europe, and multinational executives entering the market,
                every buyer is now evaluating whether agents are licensed,
                registered and accountable. The cost of a market that fails to
                professionalize is not measured in lost deals — it is measured
                in lost capital that walks away from Guyana entirely.
              </p>
            </div>

            {/* 02 — GOVERNMENT */}
            <div className="recap-block">
              <div className="recap-num">02 — Regulatory</div>
              <h3>The Government Showed Up</h3>
              <p>
                Representatives from the Guyana Revenue Authority spent nearly
                an hour walking the forum through the legal and tax realities of
                practicing real estate in Guyana — mandatory licensing, income
                tax, withholding tax, VAT obligations, and the duty agents have
                to inform their clients of what they actually owe.
              </p>
              <p>
                The GRA&apos;s direct engagement with the working real estate
                community marked one of the most substantive
                regulator-to-industry conversations the sector has seen in
                recent memory. The message was clear: compliance enforcement is
                becoming a priority as the market expands.
              </p>
            </div>

            {/* 03 — LEGAL */}
            <div className="recap-block">
              <div className="recap-num">03 — Legal</div>
              <h3>
                The Lawyers Told Some Scary Stories — And They Were Right To
              </h3>
              <p>
                Attorney Tiffany Jeffrey-Durant addressed the forum on the legal
                risks facing both agents and buyers in Guyana&apos;s property
                market. Drawing on real cases, she outlined transactions
                involving disputed titles, sellers who did not legally own the
                properties they were marketing, and buyers who lost significant
                funds due to inadequate due diligence.
              </p>
              <p>
                Her point was not to scare people away from the market. It was
                to make sure agents understood that title verification,
                ownership confirmation and proper documentation are the
                agent&apos;s professional responsibility — not optional
                services. Protecting buyers protects the reputation of the
                entire industry.
              </p>
            </div>

            {/* IMAGE BREAK */}
            <div className="recap-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/event-qa-moment-alfred.jpeg"
                alt="An attendee asks a question during the Q&A at Real Estate Forward: Guyana 2026 & Beyond, May 22, 2026, Georgetown"
              />
            </div>

            {/* 04 — BANKS */}
            <div className="recap-block">
              <div className="recap-num">04 — Financing</div>
              <h3>The Banks Said Mortgages Are Not As Hard As You Think</h3>
              <p>
                Saeed Jameil, Branch Manager at the Guyana Bank for Trade and
                Industry (GBTI), and a representative from Republic Bank
                addressed widely-held misconceptions about the difficulty of
                obtaining mortgages in Guyana. Republic Bank presented its
                Mortgage Move product, designed to facilitate property
                acquisition and refinancing, while GBTI walked attendees through
                the actual mortgage application process and current financing
                options.
              </p>
              <p>
                Both banks took extensive questions from the audience. The
                central takeaway was that financing in Guyana is more accessible
                than commonly assumed — and that the primary barrier is
                information, not availability. Closing that information gap is
                one of the highest-leverage things the industry can do this
                year.
              </p>
            </div>

            {/* 05 — TECHNOLOGY */}
            <div className="recap-block">
              <div className="recap-num">05 — Technology</div>
              <h3>Technology Is Closing the Chaos Gap</h3>
              <p>
                Darren L. Buckner, Founder of Guyana HomeHub, presented at the
                forum on how technology is addressing long-standing
                inefficiencies in the Guyanese property market — duplicated
                listings, unverified inventory, stolen photos, and the
                fragmentation of property information across WhatsApp groups and
                informal social media channels.
              </p>
              <p>
                The Guyana HomeHub platform currently hosts over 144 verified
                properties and more than 30 approved agents and is available on
                iOS, Android and web. The technology is not the story — the
                story is that the industry is finally professionalizing fast
                enough to need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="speakers">
        <div className="container">
          <p className="section-eyebrow">The Speakers</p>
          <h2 className="section-title">
            Who Was in
            <br />
            <em>the Room</em>
          </h2>

          <div className="speakers-grid">
            {/* NICOLA DUGGAN */}
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Keynote Speaker</div>
                <div className="speaker-bio-text">
                  Delivered the keynote address on industry integrity, licensing
                  and the standards Guyana&apos;s real estate sector must meet as
                  international capital enters the market.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/nicola-duggan-event.jpeg"
                  alt="Nicola Duggan, Director of GAREP, delivering the keynote at Real Estate Forward 2026"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Nicola Duggan, BSc.</div>
                <div className="speaker-role">
                  Director, Guyana Association of Real Estate Professionals
                  (GAREP)
                </div>
                <span className="speaker-badge">Keynote Speaker</span>
              </div>
            </div>

            {/* TIFFANY JEFFREY-DURANT */}
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Legal Panel</div>
                <div className="speaker-bio-text">
                  Addressed legal risks for agents and buyers, citing real cases
                  of disputed titles and fraudulent transactions. Emphasized that
                  title verification and proper documentation are the agent&apos;s
                  professional responsibility.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tiffany-durant-event.jpeg"
                  alt="Attorney Tiffany Jeffrey-Durant speaking at Real Estate Forward 2026"
                  style={{ objectPosition: "top" }}
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

            {/* GRA REPRESENTATIVE */}
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Regulatory Session</div>
                <div className="speaker-bio-text">
                  Walked attendees through licensing requirements, income tax,
                  withholding tax and VAT obligations for practicing real estate
                  professionals in Guyana.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gra-representative-event.jpeg"
                  alt="Representative from the Guyana Revenue Authority addressing real estate professionals at Real Estate Forward 2026"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Guyana Revenue Authority</div>
                <div className="speaker-role">
                  Regulatory &amp; Compliance Briefing
                </div>
                <span className="speaker-badge">Regulatory Session</span>
              </div>
            </div>

            {/* SAEED JAMEIL — GBTI */}
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Banking &amp; Financing</div>
                <div className="speaker-bio-text">
                  Presented on the mortgage application process and current
                  financing options available to Guyanese buyers, debunking
                  common misconceptions about access to home financing.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/saeed-jameil-gbti-event.jpeg"
                  alt="Saeed Jameil, Branch Manager at GBTI, presenting at Real Estate Forward 2026"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Saeed Jameil</div>
                <div className="speaker-role">
                  Branch Manager, Guyana Bank for Trade and Industry (GBTI)
                </div>
                <span className="speaker-badge">Banking &amp; Financing</span>
              </div>
            </div>

            {/* REPUBLIC BANK */}
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">Banking &amp; Financing</div>
                <div className="speaker-bio-text">
                  Presented the Mortgage Move product, designed to facilitate
                  property acquisition and refinancing for buyers in
                  Guyana&apos;s expanding real estate market.
                </div>
              </div>
              <div className="speaker-photo">
                <span className="placeholder-icon">🏦</span>
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Republic Bank</div>
                <div className="speaker-role">
                  Mortgages, Financing &amp; Banking Services
                </div>
                <span className="speaker-badge">Banking &amp; Financing</span>
              </div>
            </div>

            {/* DARREN L. BUCKNER */}
            <div className="speaker-card">
              <div className="speaker-bio-overlay">
                <div className="speaker-bio-title">PropTech</div>
                <div className="speaker-bio-text">
                  Presented on how technology is closing the information gap in
                  Guyana&apos;s property market — addressing duplicated listings,
                  unverified inventory and the fragmentation of property data
                  across informal channels.
                </div>
              </div>
              <div className="speaker-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/darren-buckner-event.jpeg"
                  alt="Darren L. Buckner, Founder of Guyana HomeHub, presenting on technology and real estate modernization at Real Estate Forward 2026"
                />
              </div>
              <div className="speaker-info">
                <div className="speaker-name">Darren L. Buckner</div>
                <div className="speaker-role">
                  Founder &amp; CEO, Guyana HomeHub
                </div>
                <span className="speaker-badge">PropTech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOST */}
      <section className="host-section">
        <div className="host-inner">
          <div className="host-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sherriann-elcock.jpg"
              alt="Sherriann Elcock, real estate professional and convener of Real Estate Forward: Guyana 2026 & Beyond"
            />
          </div>
          <div>
            <p className="host-eyebrow">About the Convener</p>
            <h2 className="host-name">Sherriann Elcock</h2>
            <p className="host-title">
              Real Estate Professional &amp; Founder, Prestigious Services and
              Realty
            </p>
            <p className="host-bio">
              Sherriann Elcock is a Guyana-based real estate professional and
              the founder of Prestigious Services and Realty. She convened{" "}
              <em>Real Estate Forward: Guyana 2026 &amp; Beyond</em> to bring
              regulators, financial institutions, legal professionals,
              technology platforms and working agents into a single room — a
              conversation she intends to host twice a year as the industry
              continues to evolve.
            </p>
            <p className="host-bio" style={{ marginTop: "12px" }}>
              A Founding Advisor at Guyana HomeHub, Sherriann has built her
              career on a simple principle: positivity, pureness,
              professionalism. The May 22 forum was the first installment of an
              ongoing series.
            </p>
            <p className="host-tagline">
              &ldquo;Positivity. Pureness. Professionalism.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* NEXT EVENT — INTEREST CAPTURE */}
      <section className="register-section">
        <div className="container">
          <p className="section-eyebrow">The Next Forum</p>
          <h2 className="section-title">
            Be the First to Know
            <br />
            <em>About the Next One.</em>
          </h2>
          <div className="register-box">
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "24px",
              }}
            >
              The next <em>Real Estate Forward</em> is being planned for later
              in 2026. If you would like to receive an invitation when
              registration opens, send us a quick note and we&apos;ll add you to
              the list.
            </p>
            <a
              href="mailto:events@sherriannelcock.com?subject=Real%20Estate%20Forward%20%E2%80%94%20Notify%20me%20about%20the%20next%20event&body=Please%20add%20me%20to%20the%20invitation%20list%20for%20the%20next%20Real%20Estate%20Forward%20forum.%0A%0AName%3A%0ARole%20%2F%20Company%3A%0A"
              className="register-cta"
            >
              Notify Me About the Next Event
            </a>
            <p className="register-notes">
              Free to attend. Invitations sent when the next forum is scheduled.
              <br />
              First priority to attendees of the May 22 forum and members of the
              industry.
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
          Real Estate Forward: Guyana 2026 &amp; Beyond &nbsp;·&nbsp; Held
          Friday, May 22, 2026
          <br />
          Centre for Local Business Development, Georgetown, Guyana
          <br />
          Convened by{" "}
          <a href="https://sherriannelcock.com">Sherriann Elcock</a> &nbsp;·&nbsp;{" "}
          <a href="https://sherriannelcock.com">sherriannelcock.com</a>
        </p>
      </footer>
    </div>
  );
}
