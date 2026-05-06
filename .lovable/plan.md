## Plan: Replace homepage with a 90s-style "Under Construction" page

Temporarily replace the current portfolio homepage with a nostalgic, retro "Under Construction" page inspired by mid-90s GeoCities/Angelfire webmaster aesthetics. The existing components (Hero, About, Projects, etc.) stay in the codebase untouched so we can restore them later when the redesign is ready.

### What the page will look like

- Black or tiled background (classic repeating pattern feel) with bright, clashing retro colors
- Big animated "UNDER CONSTRUCTION" banner with the iconic yellow/black hazard stripes
- A blinking "Welcome to David Runemalm's Homepage!" headline using a retro/pixel-style font
- A little "construction worker" / hard hat / digging emoji or SVG (🚧👷🛠️) as the centerpiece
- Marquee-style scrolling text ("This site is being rebuilt from the ground up — check back soon!")
- A fake visitor hit counter ("You are visitor #000042")
- "Best viewed in Netscape Navigator 4.0 at 800×600" footer joke
- "Last updated: May 2026" line
- Optional: a mailto link styled as a bright blue underlined `<a>` for contact

All styling done with Tailwind + a few custom CSS keyframes (blink, marquee) added to `index.css`. No new dependencies.

### Files to change

- `src/pages/Index.tsx` — replace contents with the new `UnderConstruction` page (keep the file as the route target so `/` still works). Remove imports of Navbar/Hero/etc. for now.
- `src/index.css` — add small keyframe animations: `blink`, `marquee`, and a hazard-stripe utility.
- `index.html` — update `<title>` and meta description to "Under Construction — David Runemalm".

### What stays untouched

- All existing components (`Hero`, `About`, `Projects`, `Experience`, `Education`, `Contact`, `Footer`, `Navbar`) remain in the repo, ready to be reused or replaced during the upcoming redesign.
- Routing, color tokens, and the rest of the design system stay as-is.

### How to revert later

When you're ready to start the real redesign, we just restore the original `Index.tsx` (or build a new one) — nothing else needs undoing.
