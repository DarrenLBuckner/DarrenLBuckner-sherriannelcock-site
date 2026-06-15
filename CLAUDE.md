# CLAUDE.md — sherriannelcock.com

Personal brand site for **Sherriann Elcock**, Guyanese real estate professional.
Next.js 14 (App Router) + TypeScript + Tailwind. Static site — no CMS, no database.
Built and hosted by Caribbean HomeHub LLC; ownership transfers to Sherriann after 12
months per the Founding Advisor agreement.

---

## NON-NEGOTIABLE RULES

These are hard rules. Do not violate them, and flag any request that would.

### 1. Authorship: Sherriann is always the Author
- **Sherriann Elcock is ALWAYS the author** of content on this site.
- **Darren L. Buckner is the Founder** (of the platform / Guyana HomeHub) and the
  site's builder/host — **never the author** of Sherriann's content.
- This applies to:
  - Next.js metadata: `authors`, `creator`, and `publisher` → **Sherriann Elcock**
    (`https://sherriannelcock.com`).
  - JSON-LD `author` Person → **Sherriann Elcock**, jobTitle
    "Founder, Prestigious Services & Realty 1262", with `sameAs`
    `["https://www.youtube.com/@SherriannElcock", "https://linkedin.com/in/sherriann-elcock"]`.
- Darren **may** appear (factually, leave as-is) as: founder of Guyana HomeHub,
  event speaker/`performer`, in body copy / image captions, and the footer
  build/host credit. These are correct roles — do not strip them. Only author /
  creator / publisher attribution must be Sherriann.

### 2. Workflow
- **Show the full diff of all changed files before committing.**
- **Never commit until Darren approves.**
- Commit messages are provided per task; end them with the required Co-Authored-By line.

### 3. Tech & conventions
- **Tailwind only.** Match existing site conventions exactly. **No new dependencies.**
- Static pages only — **no CMS, no database**; content is hardcoded.
- Mobile-first responsive.
- All external links open in a new tab with `rel="noopener noreferrer"`.

### 4. Clean transfer
- The site must have **no dependencies on Portal HomeHub infrastructure** — the
  ownership transfer to Sherriann must remain clean.

---

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (run before committing to verify)
- `npm run lint` — lint
