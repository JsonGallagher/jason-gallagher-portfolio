# Homepage content and review notes

Updated October 1, 2026. These notes record the content sources and local validation completed before publication.

## Sources

The starting site was repository commit `a2be51f364dfc9b71e375aa54561dd2ccb0e39b1`. Its `Experience.jsx`, `Testimonials.jsx`, `Skills.jsx`, and `src/data/projects.js` supplied the professional claims and project descriptions. The live site and the existing two-page `Jason_Gallagher_Resume_26.pdf` at the preserved `/resume` destination were inspected. The résumé's RE/MAX role agrees with the selected acquisition and HubSpot claims.

The Market Data project screenshots already in this repository show agent-oriented, client-ready analytics. Its [existing source repository](https://github.com/JsonGallagher/market-data) also documents agents as the intended audience, client talking points, and ApexCharts. This supports the homepage's intended use and corrects the outdated Chart.js stack label. The featured image is the existing `market_data-3.png`, showing actual charts. No new user adoption or business impact is claimed for this personal project.

## Claim scope

| Claim | Employer and source | Editorial treatment |
| --- | --- | --- |
| $300M+ | Berkshire Hathaway HomeServices; original Experience | Team sales volume supported over 10 years. Never labeled personally generated or marketing-attributed revenue. |
| 34% lower CPA | RE/MAX Properties; original Experience and résumé | Associated with restructuring Google/Meta spend toward highest-converting segments. Kept separate from customer acquisition cost. |
| 2× lead volume and 50% lower CAC | RE/MAX Properties; original Experience and résumé | Segmentation and lifecycle automation. No additional measurement period, budget, or attribution method. |
| 21% better MQL-to-SQL conversion; 50% faster first contact | RE/MAX Properties; original Experience, Testimonials, and résumé | Lead scoring, routing, and nurture. Acronyms expanded for readers. |
| 40+ agents trained; 80% CRM adoption; 38% lift in qualified lead flow | Berkshire Hathaway HomeServices; original Experience and Testimonials | Agent enablement, not marketing team headcount. The older Expertise section's conflicting “38% YoY pipeline growth” wording is not reused. |
| 23% better lead-to-close rate | Berkshire Hathaway HomeServices; original Experience | SEO content, landing page optimization, and the sales-marketing feedback loop. No percentage-point interpretation added. |
| First marketing hire, decade of function building, two promotions | Berkshire Hathaway HomeServices; original Experience | Leadership scope, without inventing direct reports or team size. |

Case-study challenges and “what changed” are concise editorial syntheses of the documented work. They add no new numerical results, budgets, implementation dates, or causal claims. Capability descriptions link to the work that demonstrates them. Marketing leadership is explicitly grounded in real estate; earlier telecom/SMB sales experience is described separately. Unsupported B2B SaaS employment implications were removed from the about copy and structured metadata.

## Source claims to reconfirm

- Confirm that the RE/MAX Marketing Director role is still current; “Aug 2024 – Present” is retained from the existing site and résumé.
- Confirm the source-reported metrics and their baselines. The sources do not establish measurement periods, sample sizes, the definition of acquisition cost, or whether conversion changes are relative percentages or percentage points. The copy preserves the original percentage wording and adds none of these details.
- Confirm the $300M+ figure remains the intended cumulative team-sales figure for the Berkshire Hathaway HomeServices decade. Its scope follows the user's explicit instruction.

## Implementation and validation

The homepage follows the requested order: positioning/results → three marketing case studies → two recent roles → Market Data Dashboard → about and focused capabilities → contact. Earlier individual roles and creative project cards are removed from the homepage; the résumé and all five Projects entries remain available. Email is the primary contact, and phone links and telephone metadata are removed.

Instrument Serif, DM Sans, the established palette, theme toggle/storage, portrait, and responsive layouts are preserved. The `#expertise`, `#experience`, `#projects`, `#about`, `#skills`, `/projects`, `/shelf`, and `/resume` URLs remain usable. New case-study/contact anchors improve direct navigation. A local résumé fallback matches the existing production redirect. Project deep links now scroll to the intended project.

Validation performed:

- `npm run build` and `git diff --check` pass. No test or lint scripts are defined by the repository.
- Browser checks at 1440×900 and 390×844 in light/dark modes; additional overflow/navigation checks at widths 320, 768, and 1024 pass.
- Homepage and Projects heading hierarchy, section order, anchor targets, image loading, and project deep links checked.
- Computed text contrast checks on rendered homepage content in both modes meet AA thresholds; observed minimum normal-text contrast is 4.54:1 in light mode and 5.76:1 in dark mode. Screenshot text embedded inside project imagery is not part of this DOM text check.
- Keyboard focus outline, skip-to-content activation, mobile menu Tab navigation, Escape dismissal/focus return, menu collapse after section selection, and section focus checked.
- Dashboard carousel advances, the existing source repositories for Market Data/Beat Canvas/808Lab load, LinkedIn resolves to Jason's profile, and email/GitHub links retain their professional destinations.
- Local `/resume` opens the same public two-page Google Drive PDF. Metadata JSON parses; employment dates/employers match the visible roles; résumé fallback and redirect destinations match.
- No browser console errors observed during the homepage/project checks. No outbound contact message was sent.

Review screenshots are in [homepage-review](homepage-review/). Local preview: `http://127.0.0.1:5174/` while the development server is running. Production deployment is triggered by a push to `main`; no push was made.
