import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { articles, getArticle } from "../articles";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const externalProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};

  const url = `https://sherriannelcock.com/articles/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.description,
      url,
      siteName: "Sherriann Elcock",
      type: "article",
      publishedTime: article.datePublished,
    },
  };
}

// Renders **bold** and [label](href) links inline; everything else is plain text.
function renderInline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-near-black">
            {part.slice(2, -2)}
          </strong>
        );
      }
      const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        const isExternal = /^https?:\/\//.test(href);
        return (
          <a
            key={i}
            href={href}
            {...(isExternal ? externalProps : {})}
            className="font-semibold text-emerald-primary underline underline-offset-2 transition hover:text-emerald-dark"
          >
            {label}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Person",
      name: "Sherriann Elcock",
      jobTitle: "Founder, Prestigious Services & Realty 1262",
      url: "https://sherriannelcock.com",
      sameAs: [
        "https://www.youtube.com/@SherriannElcock",
        "https://linkedin.com/in/sherriann-elcock",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Sherriann Elcock | Guyana Real Estate",
      url: "https://sherriannelcock.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sherriannelcock.com/articles/${article.slug}`,
    },
    description: article.excerpt,
  };

  return (
    <main className={`min-h-screen bg-page text-body-text ${cormorant.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      <section className="bg-near-black">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h1
            className="text-3xl font-bold leading-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {article.title}
          </h1>
          {article.deck && (
            <p
              className="mt-4 text-xl italic text-emerald-light md:text-2xl"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {article.deck}
            </p>
          )}
          <div className="mt-6 border-t border-white/15 pt-5 text-sm text-gray-300">
            <p className="font-semibold text-white">By Sherriann Elcock</p>
            <p className="mt-1">{article.bylineRole}</p>
            <p className="mt-1 text-gray-400">{article.date}</p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          {article.body.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="mt-12 text-2xl font-bold text-emerald-primary md:text-3xl"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "note") {
              return (
                <p
                  key={i}
                  className="mt-10 border-t border-rule pt-6 text-base italic leading-relaxed text-soft-text"
                >
                  {renderInline(block.text)}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="mt-5 text-lg leading-relaxed text-body-text"
              >
                {renderInline(block.text)}
              </p>
            );
          })}
        </div>
      </article>

      {/* THREE P's CLOSING BLOCK */}
      <section className="bg-emerald-primary">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
          <p
            className="text-3xl font-bold italic text-white md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Positivity. Pureness. Professionalism.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base italic leading-relaxed text-emerald-light">
            “These are not just words. They are the standard I hold myself to in
            every transaction, with every client, every single day.”
          </p>
        </div>
      </section>

      {/* AUTHOR BIO STRIP */}
      <section className="border-b border-rule bg-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:text-left">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border border-rule bg-emerald-light">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sherriann-elcock.jpg"
              alt="Sherriann Elcock"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-near-black">Sherriann Elcock</p>
            <p className="mt-1 text-sm text-soft-text">
              Guyanese real estate professional · Founder, Prestigious Services
              &amp; Realty 1262 · Founding Advisor, Guyana HomeHub
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-semibold sm:justify-start">
              <a
                href="https://www.youtube.com/@SherriannElcock"
                {...externalProps}
                className="text-emerald-primary transition hover:text-emerald-dark"
              >
                YouTube — @SherriannElcock
              </a>
              <a
                href="https://guyanahomehub.com"
                {...externalProps}
                className="text-emerald-primary transition hover:text-emerald-dark"
              >
                guyanahomehub.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO ARTICLES */}
      <section className="bg-page">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <a
            href="/articles"
            className="inline-flex items-center text-base font-semibold text-emerald-primary transition hover:text-emerald-dark"
          >
            ← Back to Articles
          </a>
        </div>
      </section>
    </main>
  );
}
