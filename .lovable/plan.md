# Solaria Cement India — Interactive Homepage

A single scroll-driven homepage that opens as a three-beat cinematic sequence, lands on the 30%-less-water proof point, then delivers the brief's substance (products, trust, specs, footer) in a compact tail.

## The scroll story (the first three screens)

One sticky, full-viewport stage that holds all three beats so the transitions are continuous rather than section-to-section jumps.

```text
Beat 01  starfield + empty metal frame        "THE WORLD'S SECOND MOST USED MATERIAL
         (uploaded image 1)                    IS ALMOST INVISIBLE."
                                               sub: You've probably never stopped to look at it.
                                               (SCROLL) cue pulses at the bottom
   |  scroll: cement fades in inside the frame
   v
Beat 02  frame filled with cement wall        "LOOK CLOSER."
         (uploaded image 2, crossfade)         sub: Because what holds the world together
                                                    deserves a closer look.
   |  scroll: frame scales past the viewport, cement becomes full-bleed background
   v
Beat 03  cement texture fills the screen      SOLARIA CEMENT
                                              Materials that stand the test of time.
```

- Both uploaded frame images are used as the real assets, uploaded to CDN storage and layered so beat 1 → beat 2 is a true crossfade (identical frame geometry, only the fill changes).
- Beat 3 zooms the same image, so the wall the user just looked at becomes the page's ground.
- Motion is driven by scroll progress, not timers, so the user controls the pace and can scrub back.
- Reduced-motion users get the three beats as plain stacked sections with fades only.

## The proof point — 30% less water

Matches the reference screenshot: section label `02 — THE PROOF POINT`, headline, short intro, then an interactive slab-size slider.

- Slider from ~200 to ~3,000 sq ft, with the bag count shown underneath.
- Two result cards side by side: Conventional OPC (baseline litres) vs Solaria (30% less), each with a fill bar; Solaria's bar is short and yellow, making the gap visible before the numbers are read.
- A closing line converts the saving into buckets a mason doesn't carry.
- Keyboard-accessible slider with live-region announcements.

## The tail (compact but complete)

- **Three product families** — General Purpose, High Strength, Blended Low Carbon: what each is for, in one homeowner sentence and one mason sentence, plus grade/BIS line.
- **Proof of trust** — 150 years (1874), plant network, quality testing, sustainability record, as a scroll-revealed stat strip.
- **Technical data** — a spec-sheet list for architects and engineers (download links are placeholders).
- **Footer** — contact, careers, investors, CSR.

## Look and feel

- Grayscale base (near-black through cement grays) with a single warm yellow accent used only for emphasis: numbers, section labels, the Solaria bar.
- Condensed heavy sans for headlines (the tall compressed caps in the reference), clean grotesque for body.
- Cement texture used as a subtle surface on section backgrounds and cards.
- WCAG AA contrast on all text; responsive down to mobile, where the sticky stage becomes shorter and the two result cards stack.

## Invented details (recorded for the submission)

A short "what we invented" note lives in the page source and rationale: litres-per-bag curing figures, plant counts, product grade names, and spec-sheet titles are plausible inventions; the 30% water figure and the 1874 founding come from the brief.

## Technical notes

- Single route: `src/routes/index.tsx` (replaces the placeholder), with sections split into components under `src/components/home/`.
- Scroll choreography via Motion for React (`useScroll` + `useTransform`) against a tall sticky container; no WebGL.
- Uploaded frame images become CDN asset pointers in `src/assets/`; a generated seamless cement texture is added for section surfaces.
- Design tokens (grays, yellow accent, fonts, radii) go into `src/styles.css`; fonts loaded via `<link>` in `__root.tsx`.
- Page-specific `head()` with title, description, og/twitter tags.
- No backend needed — the slider math is client-side.
