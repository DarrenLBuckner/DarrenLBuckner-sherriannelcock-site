import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { articles } from "./articles";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Articles | Sherriann Elcock — Guyana Real Estate",
  description:
    "Insights, commentary, and professional perspective on Guyana real estate from Sherriann Elcock — founder of Prestigious Services & Realty 1262.",
  alternates: {
    canonical: "https://sherriannelcock.com/articles",
  },
  openGraph: {
    title: "Articles | Sherriann Elcock — Guyana Real Estate",
    description:
      "Insights, commentary, and professional perspective on Guyana real estate from Sherriann Elcock — founder of Prestigious Services & Realty 1262.",
    url: "https://sherriannelcock.com/articles",
    siteName: "Sherriann Elcock",
    type: "website",
  },
};

export default function ArticlesPage() {
  return (
    <main className={`min-h-screen bg-page text-body-text ${cormorant.variable}`}>
      {/* HERO */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-primary">
            Thought Leadership
          </p>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Real Talk. Real Estate.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-300 md:text-xl">
            Straight talk on the Guyana market, professional standards, and what
            buyers and agents need to know.
          </p>
        </div>
      </section>

      {/* ARTICLE CARDS */}
      <section className="bg-page">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col rounded-lg border border-rule border-t-4 border-t-gold-accent bg-white p-8 transition hover:shadow-lg"
              >
                <h2
                  className="text-2xl font-bold leading-snug text-near-black"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-soft-text">{article.date}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-body-text">
                  {article.excerpt}
                </p>
                <a
                  href={`/articles/${article.slug}`}
                  className="mt-6 inline-flex items-center text-base font-semibold text-emerald-primary transition hover:text-emerald-dark"
                >
                  Read Article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
