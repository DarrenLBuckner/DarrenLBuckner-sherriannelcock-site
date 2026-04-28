const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const credentials = [
  {
    icon: "🏢",
    label: "Company",
    value: "Prestigious Services & Realty",
  },
  {
    icon: "📍",
    label: "Primary Markets",
    value: "Georgetown, East Bank Demerara, Linden, Region 3",
  },
  {
    icon: "🤝",
    label: "Transactions",
    value: "50+ across career",
  },
  {
    icon: "🏠",
    label: "Specialties",
    value: "Land, Apartment Buildings, Rentals, Corporate Relocation, Project Manager",
  },
  {
    icon: "🎙️",
    label: "Content",
    value: "YouTube — @SherriannElcock | Guyana Real Estate",
  },
  {
    icon: "🌟",
    label: "Platform Role",
    value: "Founding Advisor — Guyana HomeHub",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-body-text">
      {/* NAV */}
      <nav className="border-b border-rule bg-page">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-2xl font-bold tracking-tight text-emerald-primary">
            SE
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href="/about"
              className="text-soft-text transition hover:text-emerald-primary"
            >
              About
            </a>
            <a
              href="/events"
              className="text-soft-text transition hover:text-emerald-primary"
            >
              Events
            </a>
            <a
              href="https://www.youtube.com/@SherriannElcock"
              {...externalProps}
              className="text-soft-text transition hover:text-emerald-primary"
            >
              YouTube
            </a>
            <a
              href="https://guyanahomehub.com"
              {...externalProps}
              className="text-soft-text transition hover:text-emerald-primary"
            >
              View Listings
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
                Guyana Real Estate Professional · Georgetown, Guyana
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-near-black md:text-5xl lg:text-6xl">
                Sherriann Elcock
              </h1>
              <p className="mt-4 text-lg text-soft-text md:text-xl">
                Founder, Prestigious Services &amp; Realty. 50+ transactions.
                Positivity. Pureness. Professionalism.
              </p>
              <p className="mt-6 text-base leading-relaxed text-body-text">
                Sherriann Elcock is a Guyanese real estate professional
                operating across Georgetown, East Bank Demerara, Linden, and
                surrounding regions. With over 50 completed transactions
                spanning land sales, residential properties, apartment
                buildings, and corporate relocation, she has built her
                reputation on one principle: every client deserves transparent,
                professional service — not just the affluent buyer.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body-text">
                She serves as a Founding Advisor to Guyana HomeHub — the first
                verified, structured property marketplace in Guyana, built by
                US entrepreneur Darren L. Buckner to connect diaspora buyers
                in New York, Toronto, and London with real listings and
                trusted agents on the ground.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="https://www.youtube.com/@SherriannElcock"
                  {...externalProps}
                  className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
                >
                  Watch on YouTube
                </a>
                <a
                  href="https://guyanahomehub.com"
                  {...externalProps}
                  className="text-base font-semibold text-emerald-primary transition hover:text-emerald-dark"
                >
                  View Listings →
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-rule bg-emerald-light">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sherriann-elcock.jpg"
                  alt="Sherriann Elcock"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            Experience &amp; Background
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {credentials.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 rounded-lg border border-rule bg-white p-6"
              >
                <span className="text-2xl" aria-hidden="true">
                  {card.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
                    {card.label}
                  </p>
                  <p className="mt-1 text-base font-medium text-near-black">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="bg-near-black text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Guyana Real Estate — On YouTube
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
            Follow along for real talk about buying, renting, and investing in
            Guyana. No fluff. Just honest insights from someone who has been in
            this market for years.
          </p>
          <div className="mt-8">
            <a
              href="https://www.youtube.com/@SherriannElcock"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md bg-emerald-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-dark"
            >
              Subscribe on YouTube
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            @SherriannElcock | Guyana Real Estate
          </p>
        </div>
      </section>

      {/* PLATFORM LINK */}
      <section className="border-b border-rule bg-emerald-light">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            Find Properties on Guyana HomeHub
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
            Every listing I carry is live on Guyana HomeHub — the only
            structured, verified real estate platform in Guyana. Browse
            residential properties, land, and rentals across Georgetown and
            beyond. Built for buyers at home and across the diaspora.
          </p>
          <div className="mt-8">
            <a
              href="https://www.guyanahomehub.com/agents/sherriann-elcock"
              {...externalProps}
              className="inline-flex items-center justify-center rounded-md bg-gold-accent px-6 py-3 text-base font-bold text-white transition hover:opacity-90"
            >
              Browse Listings
            </a>
          </div>
          <p className="mt-4 text-sm text-soft-text">
            Guyana HomeHub — built and operated by Caribbean HomeHub LLC,
            founded by Darren L. Buckner. portalhomehub.com
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-near-black md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body-text md:text-lg">
            Looking to buy, rent, or invest in Guyana? Connect with Sherriann
            directly through any of the channels below.
          </p>
          <ul className="mt-8 space-y-3 text-base text-body-text">
            <li className="flex items-center gap-3">
              <span aria-hidden="true">📍</span>
              <span>Georgetown, Guyana</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true">🎥</span>
              <a
                href="https://www.youtube.com/@SherriannElcock"
                {...externalProps}
                className="text-emerald-primary transition hover:text-emerald-dark"
              >
                youtube.com/@SherriannElcock
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true">🌐</span>
              <a
                href="https://guyanahomehub.com"
                {...externalProps}
                className="text-emerald-primary transition hover:text-emerald-dark"
              >
                guyanahomehub.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true">💼</span>
              <a
                href="https://linkedin.com/in/sherriann-elcock"
                {...externalProps}
                className="text-emerald-primary transition hover:text-emerald-dark"
              >
                linkedin.com/in/sherriannelcock
              </a>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
