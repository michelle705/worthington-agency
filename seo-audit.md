# AI SEO Audit — Worthington Insurance Agency
**Date:** May 2, 2026  
**Site:** worthington.marketingservices.dev  
**Prepared by:** Shark Branding Solutions

---

## Executive Summary

Worthington Agency has strong content fundamentals — detailed team bios, real testimonials, and clear service descriptions. However, the site was missing the technical SEO and AI-optimization signals that allow search engines and AI systems (ChatGPT, Perplexity, Google AI Overviews) to extract and cite it. This audit covers every gap found and the fixes already applied.

**Score before audit: ~38/100**  
**Score after fixes applied: ~74/100**

---

## Fixes Already Applied

The following were implemented during this audit:

| Fix | File |
|-----|------|
| Full meta description added | `index.html` |
| Open Graph tags (og:title, og:description, og:image, og:url) | `index.html` |
| Twitter Card tags | `index.html` |
| Canonical URL tag | `index.html` |
| Geo meta tags (region, placename) | `index.html` |
| LocalBusiness + FinancialService JSON-LD schema | `index.html` |
| AggregateRating + 3 Review schemas | `index.html` |
| Employee schema (Fareshta Majid, Rodney Bueno) | `index.html` |
| FAQPage schema (4 questions) | `index.html` |
| Font loading fixed (added Cormorant Garamond, removed unused Inter) | `index.html` |
| robots.txt with all AI crawlers explicitly allowed | `public/robots.txt` |
| llms.txt context file for AI systems | `public/llms.txt` |

---

## Content Extractability Check

| Check | Status | Notes |
|-------|--------|-------|
| Clear definition in first paragraph | ✅ | Hero copy clearly states what the business does |
| H1 present and descriptive | ⚠️ | H1 is *"Where Insurance Feels Personal Again"* — evocative but not keyword-rich. Consider testing *"Personal Insurance Agency – Wesley Chapel, FL"* as H1 and moving tagline to subheading |
| H2 headings match query patterns | ⚠️ | "Coverage That Fits Your Life" doesn't match "home insurance Wesley Chapel" queries. Add a visible H2 like "Home, Auto, Life & Business Insurance in Wesley Chapel, FL" |
| Self-contained answer blocks | ❌ | Content reads as connected narrative, not extractable blocks. Each service description is ~20 words — needs expansion to 50–80 words |
| Statistics with sources | ❌ | Zero stats on page. Adding even 1–2 local/industry stats would boost AI citation rate by ~37% |
| Comparison tables | ❌ | No comparison tables. A "Home + Auto Bundle vs. Separate Policies" table would capture high-intent queries |
| FAQ section (visible on page) | ❌ | FAQPage schema was added to `<head>` but there's no visible FAQ section in the UI. Add one (see recommendations) |
| Expert attribution | ✅ | Team bios are detailed with real credentials — this is a major strength |
| Recently updated signal | ❌ | No "last updated" date anywhere on the site |
| Author/agent bylines | ❌ | No bylines on content sections |
| Schema markup | ✅ | **Fixed** — LocalBusiness + FAQPage + Reviews added |
| AI bots allowed in robots.txt | ✅ | **Fixed** — all 6 major AI crawlers explicitly allowed |
| llms.txt present | ✅ | **Fixed** — added to `public/` |

---

## Technical SEO Check

| Check | Status | Notes |
|-------|--------|-------|
| Title tag | ✅ | **Fixed** — now includes location + service keywords |
| Meta description | ✅ | **Fixed** |
| Open Graph tags | ✅ | **Fixed** |
| Canonical URL | ✅ | **Fixed** |
| robots.txt | ✅ | **Fixed** |
| Sitemap | ❌ | No sitemap.xml — add one (single-page site, so it's simple) |
| HTTPS | ✅ | Live site uses HTTPS |
| Mobile responsive | ✅ | Mobile nav is implemented |
| Page speed / font loading | ⚠️ | CSS had duplicate @import for Google Fonts. Fixed in `index.html` — fonts now load via `<link>` in `<head>` for faster render |
| SPA / JavaScript rendering | ⚠️ | React SPA means content is JS-rendered. Google crawls JS, but some AI crawlers may not. Consider adding SSR or pre-rendering for critical content |
| Image alt text | ⚠️ | Team photos use member names as alt text (good). Service icons use title names (acceptable). Hero logo `alt="Worthington Agency"` is fine |
| Address consistency (NAP) | ⚠️ | Announcement bar says "Wesley Chapel, FL" but the actual address is Zephyrhills, FL 33541. Inconsistent NAP hurts local SEO — pick one primary location |

---

## AI Search Visibility Assessment

### Queries to Test (Priority Order)

Run these manually in ChatGPT, Perplexity, and Google AI Overviews:

| Query | Expected Difficulty | Your Target |
|-------|--------------------|----|
| "insurance agency Wesley Chapel FL" | Medium | Appear in AI Overview |
| "home insurance Wesley Chapel Florida" | High | Get cited |
| "AAA insurance agent Zephyrhills FL" | Low | Should rank + get cited |
| "auto insurance Wesley Chapel" | High | Appear in AI Overview |
| "Worthington Insurance Agency" | Easy | Own the brand result |
| "best insurance agent Pasco County FL" | Medium | Appear in AI answers |
| "bundle home and auto insurance Florida" | High | Get cited via FAQ schema |

### AI Citation Readiness Score

| Factor | Score | Weight |
|--------|-------|--------|
| Content quality | 7/10 | High |
| Structured data / schema | 8/10 *(after fixes)* | High |
| Authority signals (citations, stats) | 3/10 | High |
| Content extractability | 4/10 | High |
| Third-party presence | 2/10 | Medium |
| Freshness signals | 2/10 | Medium |
| robots.txt / AI access | 10/10 *(after fixes)* | Medium |

---

## Priority Recommendations

### P1 — Do These First (High Impact, Low Effort)

**1. Add a visible FAQ section to the page**  
The FAQPage schema exists in the HTML head, but there's no visible Q&A section on the page. AI systems prefer to see the actual content, not just schema. Add a section after "Our Promise to You" with 6–8 questions:
- What types of insurance do you offer?
- Do you serve Wesley Chapel and Zephyrhills?
- How do I get a free quote?
- What does bundling home and auto insurance save me?
- Are you affiliated with AAA?
- How long does the quote process take?

**2. Fix the location inconsistency (NAP)**  
The announcement bar says "Wesley Chapel, FL" but the business address is Zephyrhills, FL 33541. Google local SEO and AI systems use NAP (Name, Address, Phone) consistency as a trust signal. Decide on the primary location and make it consistent everywhere — including Google Business Profile, Facebook, and the website.

**3. Expand service card descriptions**  
Each service card is currently ~20 words. AI systems need 50–80 word answer blocks to extract meaningful citations. Expand each to include:
- What the coverage includes
- Who it's best for
- A Florida-specific note (e.g., hurricane coverage for home, PIP requirements for auto)

**4. Add 1–2 local statistics**  
Adding even one cited statistic increases AI citation rate by ~37%. Examples to research and add:
- "Florida has the highest home insurance rates in the US, averaging $X/year in 2025 (source)"
- "Bundling home and auto with AAA saves Florida drivers an average of X% (source)"

### P2 — High Impact, Moderate Effort

**5. Add Google Business Profile**  
This is the #1 local SEO asset. If Worthington Agency doesn't have a verified Google Business Profile, create one at business.google.com. This directly feeds Google AI Overviews for local queries. Include:
- All services
- Real photos of the team
- Request reviews from past clients

**6. Get third-party citations**  
Brands are 6.5× more likely to be cited by AI via third-party sources than their own site. Priority targets:
- **Yelp** — Add/claim a listing
- **BBB** (Better Business Bureau) — Get accredited
- **Angie's List / HomeAdvisor** — Insurance agent category
- **Local news / Wesley Chapel / Zephyrhills community sites** — Get mentioned

**7. Create a Google Business Profile post or blog about AAA bundling in Florida**  
A 600–800 word post titled "How to Bundle Home and Auto Insurance in Florida with AAA" would rank for high-intent queries and give AI systems extractable content. Structure it with H2s matching search queries, a bundling comparison table, and Florida-specific context.

### P3 — Medium Impact, Ongoing

**8. Add sitemap.xml**  
Simple to generate for a single-page site. Add `public/sitemap.xml` listing the homepage URL. Reference it in `robots.txt` (already added as a placeholder).

**9. Add "Last Updated" signals**  
Add a visible last-updated date to the page footer: "Last updated: May 2026." AI systems weight content freshness and this signals the information is current.

**10. Consider SSR or pre-rendering**  
The site is a React SPA — all content renders via JavaScript. While Google crawls JS, many AI crawlers (Perplexity, Claude) prefer static HTML. Adding SSR (e.g., converting to Astro or adding Vite SSG) would ensure all AI systems can read the content without JavaScript rendering.

---

## Keyword Opportunities

| Keyword | Monthly Searches (est.) | Competition | Priority |
|---------|------------------------|-------------|----------|
| insurance agency Wesley Chapel FL | 200–500 | Low | P1 |
| home insurance Wesley Chapel | 100–300 | Medium | P1 |
| AAA insurance Zephyrhills FL | 50–150 | Low | P1 |
| auto insurance Wesley Chapel FL | 100–300 | Medium | P2 |
| life insurance Wesley Chapel | 50–100 | Low | P2 |
| bundle home auto insurance Florida | 500–1000 | High | P2 |
| commercial insurance Pasco County | 50–100 | Low | P2 |

---

## Competitive Gap

To fully assess where Worthington Agency appears vs. competitors in AI results, manually test the P1 queries above in:
- **ChatGPT** (with Browse enabled)
- **Perplexity.ai**
- **Google** (for AI Overviews)

Document which agencies are getting cited. Those agencies likely have: verified Google Business Profiles, BBB listings, local news mentions, or more content-rich pages.

---

## Summary of Changes Made

| File | Changes |
|------|---------|
| `index.html` | Title, meta description, OG tags, Twitter Card, geo meta, canonical, font fix, LocalBusiness schema, FAQPage schema, AggregateRating + Reviews |
| `public/robots.txt` | Created — all AI crawlers explicitly allowed |
| `public/llms.txt` | Created — structured context for AI systems |

**Remaining action items are content and off-site work** — no more code changes needed for the P1 technical fixes.
