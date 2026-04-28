import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sherriann Elcock | Guyana Real Estate Professional",
  description:
    "The story of Sherriann Elcock — Guyanese real estate professional, founder of Prestigious Services & Realty, Founding Advisor to Guyana HomeHub, and one of Georgetown's most trusted agents.",
  alternates: { canonical: "https://sherriannelcock.com/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Sherriann Elcock",
  url: "https://sherriannelcock.com/about",
  jobTitle: "Real Estate Professional & Founding Advisor, Guyana HomeHub",
  description:
    "Sherriann Elcock is a Guyanese real estate professional with 50+ transactions, founder of Prestigious Services & Realty, and Founding Advisor to Guyana HomeHub — built by US entrepreneur Darren L. Buckner.",
  worksFor: {
    "@type": "Organization",
    name: "Prestigious Services & Realty",
  },
  affiliation: {
    "@type": "Organization",
    name: "Guyana HomeHub",
    url: "https://guyanahomehub.com",
  },
  areaServed: [
    "Georgetown, Guyana",
    "East Bank Demerara",
    "Linden",
    "Region 3",
  ],
  sameAs: [
    "https://linkedin.com/in/sherriann-elcock",
    "https://youtube.com/@SherriannElcock",
  ],
};

const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const timeline = [
  {
    date: "Born — Linden, Guyana",
    title: "Origins",
    detail: "Moved to Region 3 at age 13",
  },
  {
    date: "Jan 2016 – Apr 2018",
    title: "Merchandiser",
    detail: "C&L Wholesalers and Retailers — Trinidad and Tobago",
  },
  {
    date: "Apr 2018",
    title: "Returned to Guyana",
    detail: "Married July 2018. Began building her life and career in Guyana.",
  },
  {
    date: "Mid 2019",
    title: "Began Real Estate Training",
    detail: "Mentored by a seasoned industry professional",
  },
  {
    date: "Apr 2020 – Jul 2022",
    title: "Real Estate Agent",
    detail: "SMS Realty",
  },
  {
    date: "Sep 2022 – Dec 2024",
    title: "Real Estate Agent",
    detail: "Britton's Realty",
  },
  {
    date: "May 2023 – Present",
    title: "Chief of Staff",
    detail: "EFG USA Inc.",
  },
  {
    date: "Jan 12, 2025",
    title: "Founded Prestigious Services & Realty",
    detail: "Georgetown, Guyana",
  },
  {
    date: "Feb 2026 – Present",
    title: "Founding Advisor",
    detail: "Guyana HomeHub — guyanahomehub.com",
  },
  {
    date: "March 2026",
    title: "Launched YouTube Channel",
    detail: "Sherriann Elcock | Guyana Real Estate — @SherriannElcock",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-page text-body-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
            Her Story
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            From Linden to Georgetown. Built on Three P&apos;s.
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Real estate professional. Entrepreneur. Founding Advisor.
            Community builder.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-page">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            The Story Behind the Work
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-body-text md:text-lg">
            <p>
              Before the transactions, before the listings, before the titles
              — Sherriann Elcock is God-fearing, and she tries her utmost best
              to be transparent. Three words have guided her entire career:
              Positivity. Pureness. Professionalism. She never wanted to be
              rich. Her definition of success is helping every client find
              what they are looking for — whether she has the property
              herself or she collaborates with another agent to make it
              happen.
            </p>
            <p>
              Sherriann was born in Linden, Guyana, and moved to Region 3 at
              the age of 13. She grew up with the work ethic of someone who
              understood early that nothing would be handed to her. In
              January 2016 she moved to Trinidad and Tobago, where she worked
              as a Merchandiser at C&amp;L Wholesalers and Retailers —
              learning the discipline of client-facing professional work in a
              competitive market. She returned to Guyana in April 2018,
              married that July, and began building the life she had always
              envisioned — rooted in Guyana, built on her own terms.
            </p>
            <p>
              In mid-2019, Sherriann began her real estate training. She was
              mentored by a seasoned professional and took the industry
              seriously from day one. She joined SMS Realty in April 2020,
              where she built her foundational knowledge of the Guyana
              property market. By September 2022 she had moved to
              Britton&apos;s Realty, where she continued to sharpen her
              expertise in residential sales, land transactions, and
              corporate client work. What she found in the industry was what
              many clients already knew — the process was too complex, too
              untrustworthy, and too inaccessible for the average buyer. She
              decided to fix that herself.
            </p>
            <p>
              On January 12, 2025, Sherriann opened the doors of Prestigious
              Services &amp; Realty — her own company, built entirely around
              the client experience she had always believed was possible.
              The concept was simple and radical at the same time: a one-stop
              real estate firm that doesn&apos;t just show a property, but
              handles everything — architectural planning, legal
              documentation, banking consultations, property preparation,
              and construction coordination if needed. She partnered with
              local cleaning services, legal professionals, and financial
              institutions so that no client ever had to start over with a
              new provider in the middle of a transaction. Over 50 completed
              transactions later, she is operating across Georgetown, East
              Bank Demerara, Linden, and Region 3 — specializing in land,
              residential sales, apartment buildings, rentals, and corporate
              relocation.
            </p>
            <p>
              Alongside her real estate work, Sherriann has served as Chief
              of Staff for EFG USA Inc. since May 2023 — supporting the
              development of a major agricultural operation in Guyana. The
              role reflects a consistent pattern in how she operates: she
              moves toward complexity, takes on responsibility others avoid,
              and delivers. She does not do easy work. She does important
              work.
            </p>
            <p>
              In February 2026, Sherriann became a Founding Advisor to Guyana
              HomeHub — the first verified, structured real estate
              marketplace in Guyana, built by US entrepreneur Darren L.
              Buckner and operated by Caribbean HomeHub LLC. The platform
              was built to solve the trust problem that has defined Guyanese
              real estate for too long: no MLS, no verification, no
              accountability — just Facebook Marketplace listings and the
              hope that the person on the other end is legitimate. Sherriann
              believed in what the platform was building before it launched,
              and she has been part of it from the beginning. Her listings
              are live on guyanahomehub.com. Her voice is part of how the
              platform speaks to the market.
            </p>
            <p>
              In March 2026, Sherriann launched her YouTube channel —
              Sherriann Elcock | Guyana Real Estate (@SherriannElcock) — to
              bring her straight-talk approach to a wider audience. The
              channel is built for buyers, sellers, and diaspora investors
              who are serious about the Guyana market and need someone on
              the ground who will tell them the truth. No fluff. No
              runaround. Just real information from someone who has been in
              this market for years.
            </p>
            <p>
              Real estate in Guyana is at a turning point. Oil money is
              reshaping property values. Diaspora buyers are returning with
              capital and questions. A new generation of agents is trying to
              build real careers. Sherriann Elcock intends to be part of how
              that transition goes well — not just for her clients, but for
              the entire industry. Positivity. Pureness. Professionalism.
              That is not a tagline. That is how she runs her business,
              every day.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            Career Timeline
          </h2>
          <ol className="relative mt-10 border-l-2 border-emerald-primary pl-8">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative mb-8 last:mb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[35px] top-2 h-3 w-3 rounded-full bg-gold-accent ring-4 ring-white"
                />
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
                  {item.date}
                </p>
                <h3 className="mt-1 text-lg font-bold text-near-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-base text-body-text">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* THREE P's */}
      <section className="bg-emerald-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Positivity. Pureness. Professionalism.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-emerald-light md:text-lg">
            These are not marketing words. They are the standard Sherriann
            holds herself to on every transaction, with every client, in every
            market condition. They are why clients come back. They are why
            other agents refer to her. They are why she built her own company
            when the industry could not meet the standard she set.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-page">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            Work With Sherriann
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
            Whether you are buying, selling, renting, or investing in Guyana —
            reach out. Every client gets Sherriann personally.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://guyanahomehub.com"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
            >
              View Listings
            </a>
            <a
              href="https://www.youtube.com/@SherriannElcock"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md bg-gold-accent px-6 py-3 text-base font-bold text-white transition hover:opacity-90"
            >
              Watch on YouTube
            </a>
            <a
              href="https://linkedin.com/in/sherriann-elcock"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md border-2 border-emerald-primary px-6 py-3 text-base font-semibold text-emerald-primary transition hover:bg-emerald-primary hover:text-white"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
