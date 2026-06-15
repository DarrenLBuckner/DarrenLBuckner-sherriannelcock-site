// Article content for /articles — hardcoded, no CMS.
// Order in this array is the display order on the index page (newest first).

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "note"; text: string };

export interface Article {
  slug: string;
  title: string;
  deck?: string;
  bylineRole: string;
  date: string; // human-readable, e.g. "June 15, 2026"
  datePublished: string; // ISO, e.g. "2026-06-15"
  metaTitle: string;
  description: string;
  excerpt: string;
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "sex-offender-registry-guyana",
    title:
      "As a Mother and a Real Estate Professional, I Stand for Public Information",
    bylineRole:
      "Founder, Prestigious Services & Realty 1262 | Founding Advisor, Guyana HomeHub",
    date: "June 15, 2026",
    datePublished: "2026-06-15",
    metaTitle:
      "As a Mother and a Real Estate Professional, I Stand for Public Information | Sherriann Elcock",
    description:
      "Guyana just introduced its first-ever sex offenders registry. The original proposal was to keep it closed. Sherriann Elcock shares why public information is non-negotiable — as a mother and as a real estate professional.",
    excerpt:
      "Guyana just introduced its first-ever sex offenders registry. The original proposal was to keep it closed. I had to say something.",
    body: [
      {
        type: "paragraph",
        text: "I don’t usually step into political conversations. That’s not my lane and it’s not what I’m here for. But there are some things that go beyond politics — and this is one of them.",
      },
      {
        type: "paragraph",
        text: "Guyana just introduced its first-ever sex offenders registry through the Sexual Offences Amendment Bill 2026. That alone is a milestone that took too long to arrive. But then came the part that stopped me — the original proposal was for a **closed** registry. Meaning the public wouldn’t easily be able to access it.",
      },
      {
        type: "paragraph",
        text: "I’m a mother. I have children. And I’m a real estate professional who helps families find homes every single day. So when I heard that, I had one question: closed for whose benefit?",
      },
      {
        type: "paragraph",
        text: "The AFC said it best — a closed registry “sends a troubling message that the concerns of victims are secondary to the interests of offenders.” That’s not a political statement. That’s common sense.",
      },
      {
        type: "paragraph",
        text: "To his credit, President Ali and the Cabinet made their position clear — any register of sex offenders must be public. I don’t always agree with every political decision. But when something is right, it’s right. And this is right.",
      },
      {
        type: "heading",
        text: "What the United States Figured Out Thirty Years Ago",
      },
      {
        type: "paragraph",
        text: "In 1996, the United States passed what became known as Megan’s Law — named after a seven-year-old girl in New Jersey who was raped and murdered by a convicted sex offender who had moved in across the street. Her parents had no idea.",
      },
      {
        type: "paragraph",
        text: "The law requires states to maintain public registries of convicted sex offenders and make that information available to the community. And it went further than that — it connected directly to real estate.",
      },
      {
        type: "paragraph",
        text: "Sellers and landlords are required to provide notice to potential buyers or tenants about the presence of registered sex offenders in the area. In some states, that information must appear directly on the property listing. Think about that. If you are buying a home in the United States, the agent is required to make sure you have access to that information before you sign anything. Because the home you buy doesn’t just have a roof and four walls — it has a neighbourhood. And you have a right to know who is in it.",
      },
      { type: "heading", text: "Why This Matters in Real Estate" },
      {
        type: "paragraph",
        text: "Every day I work with families — local buyers, returning diaspora, young couples buying their first home, parents relocating their children closer to good schools. They are making the biggest financial decision of their lives. They are choosing a community.",
      },
      {
        type: "paragraph",
        text: "A closed registry tells those families: we’ll let you know if we feel like it. That is not good enough.",
      },
      {
        type: "paragraph",
        text: "When a mother buys a home in East Bank, she should be able to make an informed decision about where her children are growing up. When a diaspora family sends money from New York to purchase land back home, they deserve to know what they’re buying into — the full picture, not a filtered one.",
      },
      {
        type: "paragraph",
        text: "Professional real estate is built on one thing: trust. Transparency is not the enemy of that trust. It is the foundation of it.",
      },
      { type: "heading", text: "My Position Is Simple" },
      {
        type: "paragraph",
        text: "I’m not here to campaign for any party. But I am here to stand for the people I serve every day — families, mothers, buyers, investors — who deserve complete information when they are making decisions about where to live and raise their children.",
      },
      {
        type: "paragraph",
        text: "A public registry is not a punishment for communities. It is a protection for them. Guyana is finally building the infrastructure that mature real estate markets depend on. Let’s not build it halfway.",
      },
      { type: "paragraph", text: "**Get it right. Make it public.**" },
    ],
  },
  {
    slug: "real-estate-forward-guyana",
    title: "Real Estate Forward: Guyana 2026 & Beyond",
    deck: "The Conversation Guyana’s Real Estate Industry Has Been Missing",
    bylineRole:
      "Founder — Prestigious Services and Realty | Founding Advisor — Guyana HomeHub",
    date: "May 14, 2026",
    datePublished: "2026-05-14",
    metaTitle: "Real Estate Forward: Guyana 2026 & Beyond | Sherriann Elcock",
    description:
      "The conversation Guyana’s real estate industry has been missing. Sherriann Elcock on why she convened Real Estate Forward: Guyana 2026 & Beyond — putting GRA, NIS, banking, legal, and technology in one room with working agents.",
    excerpt:
      "The knowledge existed. The institutions existed. The professionals existed. What was missing was the room. On May 22nd, we build it.",
    body: [
      {
        type: "paragraph",
        text: "I have been a real estate professional in Guyana since 2019. I started at SMS Realty. I went on to Britton’s Realty. In January 2025 I founded Prestigious Services and Realty — a one-stop firm built on the belief that every client, not just the affluent buyer, deserves professional, transparent, and stress-free service.",
      },
      {
        type: "paragraph",
        text: "In that time I have completed over 50 transactions across Georgetown, East Bank Demerara, West Bank, and beyond. I have worked with first-time buyers who did not know where to begin. I have worked with diaspora buyers trying to purchase from New York and Toronto. I have worked with investors who came to Guyana because of the oil boom and needed someone they could trust on the ground.",
      },
      {
        type: "paragraph",
        text: "And in all of that time, I noticed something that nobody was talking about publicly.",
      },
      { type: "heading", text: "The Gap Nobody Was Filling" },
      {
        type: "paragraph",
        text: "Real estate agents in Guyana have been operating largely on their own. No centralized platform for listings. No consistent professional standard. No clear framework for what a real estate career in Guyana was supposed to look like. No room where agents could sit across from GRA, NIS, banking institutions, and legal professionals and ask the questions that actually affect their businesses.",
      },
      {
        type: "paragraph",
        text: "The knowledge existed. The institutions existed. The professionals existed. What was missing was the room.",
      },
      {
        type: "paragraph",
        text: "I have attended industry events where agents dressed well, took photographs, and went home knowing nothing more than they arrived with. I have seen buyers make costly mistakes because nobody told them what to expect. I have watched agents lose deals because they did not understand the compliance requirements or could not get their clients properly financed.",
      },
      {
        type: "paragraph",
        text: "That is not a training problem. That is a conversation problem. And the solution is simple: put the right people in the same room.",
      },
      { type: "heading", text: "What Real Estate Forward Is" },
      {
        type: "paragraph",
        text: "On Friday, May 22nd, I am hosting Real Estate Forward: Guyana 2026 & Beyond at the Centre for Local Business Development, 253-254 South Road, Bourda, Georgetown.",
      },
      {
        type: "paragraph",
        text: "This is not a seminar. There are no speakers presenting at an audience of passive listeners. The format is an open industry forum — every session ends with direct questions from the floor. The people in the room get to ask the hard questions to the people who have the actual answers.",
      },
      {
        type: "paragraph",
        text: "Our Keynote Speaker is Ms. Nicola Duggan — CEO of Paradigm Logistics and Director of the Guyana Association of Real Estate Professionals. Nicola was present when the Real Estate Agents and Brokers Bill was presented to the Attorney General. She helped shape the regulatory framework that every agent in Guyana is now operating under. Her keynote on Real Estate as a Service, Ethical Practices and Compliance sets the professional standard for everything that follows.",
      },
      {
        type: "paragraph",
        text: "The Guyana Revenue Authority will be in the room to answer licensing and compliance questions directly. The National Insurance Scheme will explain what self-employed professionals are entitled to. Banking institutions will speak to mortgage products and how to get clients financed. Attorney Tiffany Jeffrey-Durant of Durant Property Management will address legal protections for buyers and agents. And Darren Buckner, Founder of Guyana HomeHub, will speak to technology — what a verified real estate platform looks like and what it means for agents and buyers in this market.",
      },
      { type: "heading", text: "Why This Moment Matters" },
      {
        type: "paragraph",
        text: "Guyana’s real estate market is professionalizing. The licensing framework is in place. The technology infrastructure is being built. The economy is growing at a rate that is attracting buyers and investors from across the diaspora and beyond.",
      },
      {
        type: "paragraph",
        text: "The agents who take this moment seriously — who get compliant, who build professional practices, who understand how to serve the full range of buyers coming to this market — will be the agents who define what Guyanese real estate looks like for the next generation.",
      },
      {
        type: "paragraph",
        text: "The ones who do not will find that the market moved without them.",
      },
      {
        type: "paragraph",
        text: "I organized this event because I believe in the agents and professionals in this industry. I believe the knowledge is there. I believe the commitment is there. What has been missing is the room.",
      },
      { type: "paragraph", text: "On May 22nd we build the room." },
      { type: "heading", text: "You Are Invited" },
      {
        type: "paragraph",
        text: "Real Estate Forward: Guyana 2026 & Beyond is open to real estate agents, aspiring agents, buyers, investors, and entrepreneurs who want to understand where this market is going. Free entry. Complimentary refreshments. Seats are limited.",
      },
      {
        type: "paragraph",
        text: "Register at [sherriannelcock.com/real-estate-rising](/real-estate-rising) or attend at the door.",
      },
      {
        type: "paragraph",
        text: "The floor will be open. Come ready to ask the questions that matter.",
      },
      {
        type: "note",
        text: "Sherriann Elcock is the Founder of Prestigious Services and Realty and a Founding Advisor to Guyana HomeHub. She is the organizer and moderator of Real Estate Forward: Guyana 2026 & Beyond.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
