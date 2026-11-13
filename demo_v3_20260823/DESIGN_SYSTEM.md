# v3 Design System

Derived 2026-08-23 using the requested UI/UX design-system research, then adapted to the actual Tranquil Touch studio material.

- **Canvas:** warm paper `#f4f0e8`; calm visual density and deliberate whitespace.
- **Ink:** deep botanical near-black `#1f2a25`; appointment card `#15201b`.
- **Accent:** restrained clay `#b86245`, only for labels and interaction feedback.
- **Type:** Playfair Display for measured editorial headings; Manrope for reading; DM Mono for factual labels.
- **Interaction:** one direct booking route, 44px minimum action height, visible focus rings, and `prefers-reduced-motion` support.
- **Motion:** a 0.45–0.6s GSAP arrival sequence and 0.18–0.22s service-row feedback, using transform/opacity only. No scroll-jacking, infinite effects or motion under reduced-motion.
- **Do not use:** neon accents, dark-purple striping, generic card grids, decorative circle/pill systems, isolated oversized proof numerals, or full-screen animation for its own sake.
