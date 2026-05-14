import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Sherriann Elcock — Guyana Real Estate",
  description:
    "Real Estate Forward: Guyana 2026 & Beyond — May 22, 2026, Georgetown. A live open industry forum hosted by Sherriann Elcock. Free to attend. Limited seats. Register now.",
  alternates: { canonical: "https://sherriannelcock.com/events" },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Real Estate Forward: Guyana 2026 & Beyond",
  startDate: "2026-05-22T09:00:00-04:00",
  endDate: "2026-05-22T13:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
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
};

const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-page text-body-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* HERO */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
            Industry Events
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Bringing Guyana&apos;s Real Estate Professionals Together
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Hosted and moderated by Sherriann Elcock
          </p>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="bg-page">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <article className="rounded-lg border border-rule border-l-8 border-l-gold-accent bg-white p-8 shadow-sm md:p-12">
            <span className="inline-block rounded-full bg-emerald-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Upcoming — Register Now
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-near-black md:text-4xl">
              Real Estate Forward: Guyana 2026 &amp; Beyond
            </h2>
            <p className="mt-3 text-base font-semibold text-emerald-primary">
              Friday, May 22nd 2026 — 9:00 AM to 1:00 PM
            </p>
            <p className="mt-2 text-sm text-soft-text">
              Centre for Local Business Development, 253-254 South Road,
              Bourda, Georgetown, Guyana
            </p>
            <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
              For real estate agents, aspiring agents, and entrepreneurs ready
              for Guyana&apos;s new real estate era. Banking, mortgages, GRA
              compliance, legal guidance — and an open floor for your
              questions. An open industry forum where agents get real answers
              from GRA, NIS, banking institutions, and legal professionals.
              Ask questions. Voice concerns. Walk away better equipped. Free
              to attend.
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-primary">
              Confirmed Speakers
            </h3>
            <ul className="mt-3 space-y-2 text-base text-body-text">
              <li>
                Nicola Duggan — CEO, Paradigm Logistics &amp; Management
                Services (Industry Advocate)
              </li>
              <li>
                Tiffany Jeffrey-Durant — Attorney-at-Law, Durant Property
                Management
              </li>
              <li>
                Robert Pearson — Real Estate Professional, 10+ Years |
                Training Future Real Estate Agents
              </li>
              <li>GRA Representative — Licensing &amp; Tax Compliance</li>
              <li>
                NIS Representative — Self-Employed Benefits &amp; Obligations
              </li>
              <li>
                GBTI &amp; Republic Bank — Mortgages, Financing &amp; Banking
                Services
              </li>
              <li>
                Darren Buckner — Founder &amp; CEO, Guyana HomeHub (PropTech
                &amp; Innovation)
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://forms.gle/xB3pxP6nm1231o8y6"
                {...externalProps}
                className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
              >
                Reserve Your Free Seat
              </a>
              <a
                href="/real-estate-rising"
                className="inline-flex items-center justify-center rounded-md border-2 border-emerald-primary px-6 py-3 text-base font-semibold text-emerald-primary transition hover:bg-emerald-primary hover:text-white"
              >
                View Full Event Page
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* FUTURE */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            More Events Coming
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
            Real Estate Forward is the beginning. Sherriann hosts industry
            conversations twice a year — bringing together the professionals,
            regulators, and voices that Guyana&apos;s real estate market needs
            to hear from. Stay tuned.
          </p>
          <p className="mt-4 text-sm text-soft-text">
            Follow @SherriannElcock on YouTube to stay updated.
          </p>
          <div className="mt-8">
            <a
              href="https://www.youtube.com/@SherriannElcock"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md border-2 border-emerald-primary px-6 py-3 text-base font-semibold text-emerald-primary transition hover:bg-emerald-primary hover:text-white"
            >
              Follow on YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
