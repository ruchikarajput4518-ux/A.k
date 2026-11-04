---
name: RIVEN Noir Editorial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#000000'
  on-tertiary-container: '#767575'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: '0'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 24px
  stack-xl: 120px
  stack-lg: 64px
  stack-md: 32px
---

## Brand & Style

The design system embodies "RIVEN"—a vision of uncompromising luxury and dark sophistication. The brand personality is exclusive, authoritative, and cinematic. It targets a high-discerning audience that values silence over noise and quality over quantity.

The visual style is a fusion of **High-Contrast Minimalism** and **Editorial Luxury**. It utilizes vast amounts of negative space to create a "gallery" effect, ensuring that high-resolution photography remains the focal point. The interface should feel like a digital boutique: immersive, quiet, and deliberate. Motion should be slow and easing, mimicking the graceful movement of heavy silk or structured tailoring.

## Colors

The palette is rooted in a "Black Luxury" philosophy. 

- **Primary (Pure Black):** Used for the core background and primary surfaces to create an infinite depth.
- **Secondary (Obsidian Gold):** A muted, sophisticated gold used sparingly for high-intent actions, active states, or subtle iconography.
- **Tertiary (Charcoal/Zinc):** Used for secondary containers, borders, and subtle depth transitions to prevent a completely flat appearance.
- **Neutral (Crisp White):** Reserved strictly for typography and essential icons to ensure maximum legibility against the dark void.

Color application must follow a 90/7/3 ratio: 90% blacks/grays, 7% white, and 3% gold accents.

## Typography

Typography in this design system is the primary vehicle for luxury. 

**Headlines:** Utilize *Bodoni Moda*. Its high-contrast strokes create a rhythmic, fashion-forward appearance. Use large scales for editorial impact.
**Body:** Utilize *Hanken Grotesk*. It provides a clean, contemporary counterpoint to the serif headlines, ensuring technical specs and descriptions remain highly readable without distracting from the aesthetic.
**Labels:** Always use uppercase with generous letter spacing (0.2em) for navigation items and metadata to evoke the feeling of high-end watch face or jewelry engraving.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop to maintain editorial control, and a **Fluid Grid** for mobile.

- **Desktop:** 12-column grid with a max-width of 1440px. Large 80px side margins create an intentional "frame" around the content.
- **Mobile:** 4-column grid with 24px margins.
- **Rhythm:** Use "Stack" spacing for vertical rhythm. `stack-xl` is used between major editorial sections (e.g., Hero to Lookbook). 

Layouts should be asymmetrical where possible, utilizing white space (or "black space") as a functional element to separate products rather than using lines or borders.

## Elevation & Depth

To maintain a sophisticated, minimal aesthetic, this design system avoids traditional drop shadows.

- **Tonal Layers:** Depth is achieved through color. The base layer is `#000000`. Overlays or cards use `#1A1A1A` (Charcoal).
- **Glassmorphism:** Use sparingly for navigation bars. Apply a heavy background blur (20px) with a 10% opacity white tint to create a "smoked glass" effect.
- **Outlines:** Instead of shadows, use "Ghost Borders"—0.5px or 1px solid lines in `#FFFFFF` with 15% opacity to define boundaries on interactive elements like input fields or product cards.

## Shapes

The shape language of this design system is **Sharp (0)**. 

Luxury is communicated through architectural precision. All buttons, image containers, cards, and input fields must have 0px corner radii. Circles are permitted only for specific functional icons (like a play button or radio selector) to provide a sharp geometric contrast to the rectangular grid.

## Components

- **Buttons:** Primary buttons are solid White with Black text, no border, sharp corners. Secondary buttons are transparent with a 1px Gold or White border. Hover states should involve a subtle color inversion or a slight tracking increase in the text.
- **Inputs:** Minimalist bottom-border only. Labels use `label-caps` typography and sit above the field.
- **Cards:** Product cards are borderless. The image should occupy 100% of the card width. Text details (Price, Name) sit below the image in `label-caps` or `body-md`.
- **Navigation:** A minimal top-bar. Menu items use `label-caps`. The active state is indicated by a simple 1px underline or a color shift to Gold.
- **Chips/Tags:** Used for "Limited Edition" or "New Arrival." These should be small, outlined in 1px White (20% opacity), using `label-caps` at 10px.
- **Lists:** Separated by thin, 1px horizontal lines in `#1A1A1A`.