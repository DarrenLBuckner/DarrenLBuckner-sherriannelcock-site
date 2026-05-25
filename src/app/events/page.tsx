import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Sherriann Elcock — Guyana Real Estate",
  description:
    "Real Estate Forward: Guyana 2026 & Beyond — a landmark industry forum convened by Sherriann Elcock on May 22, 2026 in Georgetown. 42 agents and industry leaders, with GAREP, the GRA, Republic Bank, GBTI, the legal community and Guyana HomeHub represented. Read the recap.",
  alternates: { canonical: "https://sherriannelcock.com/events" },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Real Estate Forward: Guyana 2026 & Beyond",
  description:
    "A landmark professional real estate industry forum that brought together 42 agents and industry leaders, with GAREP, the Guyana Revenue Authority, Republic Bank, GBTI, the legal community, and Guyana HomeHub all represented. Convened by Sherriann Elcock and held on May 22, 2026 at the Centre for Local Business Development in Georgetown, Guyana.",
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
            Convened and moderated by Sherriann Elcock
          </p>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="bg-page">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <article className="rounded-lg border border-rule border-l-8 border-l-gold-accent bg-white p-8 shadow-sm md:p-12">
            <span className="inline-block rounded-full bg-near-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Past Event — Recap Available
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-near-black md:text-4xl">
              Real Estate Forward: Guyana 2026 &amp; Beyond
            </h2>
            <p className="mt-3 text-base font-semibold text-emerald-primary">
              Held Friday, May 22, 2026 — 9:00 AM to 1:00 PM
            </p>
            <p className="mt-2 text-sm text-soft-text">
              Centre for Local Business Development, 253-254 South Road,
              Bourda, Georgetown, Guyana
            </p>
            <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
              A landmark industry forum for real estate agents, aspiring agents,
              and entrepreneurs navigating Guyana&apos;s new real estate era.
              Over four hours, 42 agents and industry leaders heard from the
              GRA, banking institutions, the legal community and Guyana HomeHub
              on professionalism, compliance, financing and the modernization of
              the market — and took the open floor with their own questions.
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-primary">
              Speakers
            </h3>
            <ul className="mt-3 space-y-2 text-base text-body-text">
              <li>
                Nicola Duggan, BSc. — Director, Guyana Association of Real
                Estate Professionals (GAREP)
              </li>
              <li>
                Tiffany Jeffrey-Durant — Attorney-at-Law, Durant Property
                Management
              </li>
              <li>
                Guyana Revenue Authority — Licensing, Tax &amp; Compliance
              </li>
              <li>
                Saeed Jameil — Branch Manager, Guyana Bank for Trade and
                Industry (GBTI)
              </li>
              <li>
                Republic Bank — Mortgages, Financing &amp; Banking Services
              </li>
              <li>
                Darren L. Buckner — Founder &amp; CEO, Guyana HomeHub (PropTech
                &amp; Innovation)
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/real-estate-rising"
                className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
              >
                Read the Recap
              </a>
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-gray-200 px-6 py-3 text-base font-semibold text-gray-400"
              >
                Registration Closed — Event Concluded
              </span>
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
            Real Estate Forward was just the beginning. Sherriann convenes
            industry conversations twice a year — bringing together the
            professionals, regulators, and voices that Guyana&apos;s real estate
            market needs to hear from. The next forum is being planned for later
            in 2026.
          </p>
          <p className="mt-4 text-sm text-soft-text">
            Follow @SherriannElcock on YouTube to stay updated.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:events@sherriannelcock.com?subject=Real%20Estate%20Forward%20%E2%80%94%20Notify%20me%20about%20the%20next%20event&body=Please%20add%20me%20to%20the%20invitation%20list%20for%20the%20next%20Real%20Estate%20Forward%20forum.%0A%0AName%3A%0ARole%20%2F%20Company%3A%0A"
              className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
            >
              Notify Me About the Next Event
            </a>
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
