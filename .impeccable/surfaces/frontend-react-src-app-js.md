---
version: 1
slug: "frontend-react-src-app-js"
primary_target: "frontend_react/src/App.js"
related_targets: []
---

# Surface: portfolio home (single page)

Mode: Persuade. Audience: new-grad SWE recruiters (backend/infra), <60s skim. Action: open resume / email / LinkedIn.
Content is static in App.js (ABOUT, EXPERIENCE, PROJECTS); Experience mirrors the resume. Sanity removed 2026-11-18.

## Direction contract
THESIS: Category standard, played straight: the engineer-portfolio two-column layout (craft bar: brittanychiang.com), refusing novelty. The layout gets out of the way of the impact numbers.
OWN-WORLD: Dark-only, deep navy ground (#0b1324), ink #e2e8f0, secondary #94a3b8, faint #7d8ba1, hairlines #1f2a3d, one accent (teal #5eead4, 10% glaze for pills and the resume hover) for links, the active nav, and the outlined resume button. Hanken Grotesk (replaced Geist after the detector's overused-font finding), tabular numerals for dates and metrics. Hairline rules, no cards and no shadows; tags are small tinted pills.
STORY: Who (name, role, one line) → proof (AWS/StreamingFast/NRC with measured bullets) → range (projects) → the person (running). Resume always one click away.
FIRST VIEWPORT: Desktop: left column sticky with name ~3.25rem, role, one-sentence pitch, section nav with an active indicator, and Resume/GitHub/LinkedIn/Email at the bottom. Right column opens on About, and Experience starts above the fold. Mobile: single column, name block, then content.
FORM: canon (standing exit), seed: seed:c73aadba49b76f1c. Signature interaction: the scroll-spy nav line extends on the active section; experience rows dim their siblings on hover.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
