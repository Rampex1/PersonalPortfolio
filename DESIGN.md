---
name: David Zhou Portfolio
description: Single-page engineer portfolio; the two-column canon, played straight, so the impact numbers carry the page.
colors:
  accent-teal: "#5eead4"
  accent-glaze: "rgba(94, 234, 212, 0.1)"
  ink: "#e2e8f0"
  slate: "#94a3b8"
  faint-slate: "#7d8ba1"
  hairline: "#1f2a3d"
  night-navy: "#0b1324"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.65
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "tnum"
  body-sm:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "tnum"
  caption:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "tnum"
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "4rem"
  section: "6rem"
components:
  button-resume:
    backgroundColor: "transparent"
    textColor: "{colors.accent-teal}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0.55rem 1rem"
  button-resume-hover:
    backgroundColor: "{colors.accent-glaze}"
    textColor: "{colors.accent-teal}"
  tag:
    backgroundColor: "{colors.accent-glaze}"
    textColor: "{colors.accent-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  nav-link:
    textColor: "{colors.faint-slate}"
    typography: "{typography.label}"
    padding: "0.6rem 0"
  nav-link-active:
    textColor: "{colors.ink}"
  project-thumb:
    rounded: "{rounded.sm}"
    width: "7.5rem"
    height: "5rem"
---

# Design System: David Zhou Portfolio

## Overview

**Creative North Star: "The Annotated Resume"**

The page is a resume given room to breathe: a deep navy sheet, one pale ink, one teal, and hairlines where a printed CV would have rules. It takes the category-standard engineer-portfolio layout (sticky identity column on the left, scrolling evidence on the right) and refuses to decorate it. Every visual decision exists to move a recruiter's eye from name to measured result in under a minute.

Density is moderate and list-like. Content sits in rows separated by 1px hairlines, never in cards. The only color that is not a navy or slate is the teal accent, and it appears on interaction (links, hover, the active nav line) and on the technology pills. Numbers are the loudest thing in the body copy: tabular numerals everywhere, and measured results set in ink at weight 600 against slate prose.

Motion is small and functional: the nav line extends, an arrow nudges up-right, sibling rows dim. Nothing animates on load.

**Key Characteristics:**
- Dark-only navy ground, single pale ink, single teal accent.
- Two columns on desktop (5fr / 7fr), left column sticky at full viewport height.
- Hairline-separated rows; no cards, no shadows.
- Tabular numerals globally; metrics bolded in ink inside slate prose.
- One typeface (Hanken Grotesk) across every role.

## Colors

Dark-only: a cool slate scale on deep navy, with a single bright teal doing all the signalling. `html` declares `color-scheme: dark`, the scrollbar is #334155 on navy, and the theme-color meta is #0b1324. Every text pairing clears 4.5:1 on navy (Faint Slate 5.37, Slate 7.23, Signal Teal 12.5).

### Primary
- **Signal Teal** (accent-teal): links on hover, the active nav line, focus rings, text selection (teal fill, navy text), tag text, the resume button's outline and text. The only chromatic color in the system.
- **Teal Glaze** (accent-glaze): teal at 10% alpha; background of technology pills and the resume button's hover fill. It exists to carry the accent at low volume.

### Neutral
- **Frost Ink** (ink): name, headings, bolded metrics, active nav text.
- **Slate** (slate): body prose (about paragraphs, experience bullets, project descriptions), pitch line, social icons at rest.
- **Faint Slate** (faint-slate): dates, the "·" separator, list markers, inactive nav labels, footer. Lowest-priority text; still clears AA on navy (5.37:1).
- **Hairline** (hairline): 1px row dividers, thumbnail border and placeholder fill, arrow-link underline at rest.
- **Night Navy** (night-navy): page background and selection text; the mobile sticky section header uses it at 90% opacity (rgba(11, 19, 36, 0.9)) with an 8px backdrop blur.

### Named Rules
**The One Teal Rule.** Signal Teal is the only hue. It marks interaction, the resume outline, and technology tags; it never fills a section, a background band, or a heading.

**The Ink-for-Proof Rule.** In running prose, ink is reserved for measured results (percentages, multipliers, throughput, money, counts). Prose stays slate so the numbers surface on a skim.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Hanken Grotesk
**Label Font:** Hanken Grotesk, uppercase and tracked

**Character:** A plain, slightly warm grotesque that reads as competent rather than styled. Hierarchy comes from weight and size steps within one family, not from pairing.

### Hierarchy
- **Display** (700, clamp 2.5rem to 3.25rem, 1.05, tight negative tracking): the name, once, in the left column.
- **Headline** (500, 1.125rem): the role line under the name.
- **Title** (600, 1rem, 1.4): experience role · company, project titles.
- **Body** (400, 1rem, 1.65): about paragraphs and pitch; capped near 65ch (pitch at 22rem).
- **Body small** (400, 0.9375rem): experience bullets and project descriptions.
- **Caption** (400, 0.8125rem): dates, "Source" links, footer.
- **Label** (600, 0.75rem, 0.12em tracking, uppercase): section nav and mobile sticky section headings only. Tags use the same size at weight 500, sentence case.

### Named Rules
**The Tabular Rule.** `font-variant-numeric: tabular-nums` is set on body and inherited everywhere; dates and metrics must align and never jitter.

**The One Family Rule.** Every role uses Hanken Grotesk. Do not introduce a second display or mono face.

## Layout

Mobile first, single column with a 1.5rem gutter. At 1024px the page becomes a two-column grid (5fr / 7fr, 4rem gap, 3rem side padding) inside a 1180px max-width container. The left column is sticky, 100vh tall, padded 6rem top and bottom, with identity and nav at the top and the resume/social row pinned to the bottom. The right column scrolls; sections are separated by 6rem and carry a scroll-margin so anchor jumps land below the top edge.

Rows (experience, projects) use 1.5rem vertical padding with a hairline on top of every row except the first. From 640px, each row is a two-column grid: a fixed rail (8.5rem for dates, 7.5rem for thumbnails) beside the content. Section headings are visually hidden on desktop because the sticky nav already names each section; on mobile they become sticky translucent bars.

**The Rail Rule.** Metadata (dates, thumbnails) lives in a fixed-width left rail of each row; titles and prose always start on the same vertical line.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is conveyed by the sticky left column, by hairline dividers, and on mobile by the translucent blurred section bar (navy at 90%, 8px blur). Focus is a 2px Signal Teal outline offset 3px.

**The Flat Sheet Rule.** Nothing lifts off the page. Separation is a 1px hairline or whitespace, never a shadow or a filled card.

## Shapes

Mostly square. Two radii exist: a gentle 6px on the resume button and project thumbnails, and full pills (999px) on technology tags. Rows and sections have no corners because they have no boxes. Thumbnails carry a 1px hairline border; the resume button carries a 1px teal one.

## Components

### Buttons
There is exactly one button: the resume link, outlined rather than filled.
- **Shape:** gently rounded (6px).
- **Resting:** transparent with a 1px Signal Teal border and teal text, 0.875rem weight 500, document icon leading, 0.55rem × 1rem padding.
- **Hover:** fills with Teal Glaze, text stays teal (0.2s).
- **Focus:** global 2px teal outline.

### Arrow links
Text links that close a section ("View full resume", "All projects on GitHub"): weight 600, a hairline underline as a bottom border, an up-right arrow. On hover text and underline turn teal and the arrow nudges 2px up-right with an expo-out ease.

### Tags (chips)
- **Style:** Teal Glaze pill, Signal Teal text, 0.75rem weight 500, 0.2rem × 0.65rem padding, 0.5rem gap, wrapping.
- **State:** static; tags are labels, not filters.

### Experience row
Date rail (caption, faint) beside: title as "Role · Company", a bulleted list in body-small slate with faint markers and ink-bold metrics, then tags. Signature behavior: on hover-capable devices, hovering any row dims its siblings to 50% opacity (0.25s).

### Project row
120×80 thumbnail (6px radius, hairline border) beside title, description, and an optional "Source" caption link with a GitHub icon. The title is the link, followed by a faint up-right arrow that turns teal and nudges on hover.

### Navigation
Desktop only. Uppercase tracked labels in Faint Slate, each preceded by a 1px line 2rem wide in current color. Hover and active set text to ink and extend the line to 4rem (0.35s expo-out); the active line turns Signal Teal. Active state is scroll-spy driven (section whose top passed 40% of the viewport). On mobile the nav is hidden and sticky section headings take over.

### Social links
Icon-only links (GitHub, LinkedIn, Email) at 1.25rem in slate, turning teal on hover, each with an aria-label.

## Do's and Don'ts

### Do:
- **Do** keep Signal Teal to interaction states, focus, selection, the resume outline, and tags.
- **Do** separate list items with a 1px hairline and 1.5rem padding, first row unruled.
- **Do** bold measured results in ink inside slate prose.
- **Do** use tabular numerals for any date or metric.
- **Do** keep motion to color shifts, line extension, 2px arrow nudges, and sibling dimming; respect reduced motion.

### Don't:
- **Don't** put content in cards or add box-shadows.
- **Don't** add a light theme or a filled accent button; the system is dark-only and the accent never fills a surface beyond the 10% glaze.
- **Don't** introduce a second accent hue or a second typeface.
- **Don't** set a tracked uppercase label above a heading as a kicker; uppercase labels are for the nav and the mobile section bars only.
- **Don't** animate content in on load or on scroll.
