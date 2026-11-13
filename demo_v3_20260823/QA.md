# Local v3 QA Record

## Stable final evidence

| View | Path | Result |
|---|---|---|
| Desktop 1440 × 900 viewport | `qa/final/desktop-1440x900.png` | Written from local rendering; full page PNG is 1440 × 4159 px. |
| Mobile 390 × 844 viewport | `qa/final/mobile-390x844.png` | Written from local rendering; full page PNG is 390 × 4302 px. |

Captured 2026-08-23 17:11:36–17:11:39 CST using `http://127.0.0.1:4178/`. The files above are non-hidden stable evidence; `.playwright-cli/` files are not final evidence.

## Owner technical checks

| Check | Result | Evidence / constraint |
|---|---|---|
| New-directory boundary | PASS | Work is wholly within `demo_v3_20260823/`; `demo/` and `demo_v2_20260823/` were not edited. |
| New visual direction | PASS (implementation response only) | Warm editorial appointment-note direction, continuous narrative, one real arrival image, index-style services and compact appointment close. See `DESIGN_INTENT.md` and `CROSS_DEMO_SIMILARITY_CHECK.md`. |
| Image hierarchy | PASS (source/fidelity only) | One real studio hero; one real header logo; one clearly internal-ledgered original concept visual. See `IMAGE_LEDGER.md`. |
| Business copy and trust details | PASS (static copy only) | Four named services, live-menu categories, two quoted reviews, address, Google Maps external route, official opening hours, phone, email, and 73-review observation map to public sources in `BUSINESS_FIDELITY_MAP.md`. |
| Map rendering | PASS (technical only) | The final desktop and mobile captures visibly render public OpenStreetMap tiles, a postcode-centre pin and required attribution. The adjacent Google Maps link uses the exact public business address. |
| Static boundary | PASS | No form, backend, login, payment, database, tracking or embedded booking. Three CTAs target the existing official BookApp/Ovatu URL. |
| Browser rendering | PASS (technical only) | Desktop and 390px captures written; final browser console recorded 0 errors and 0 warnings. |
| Motion | PASS (technical only) | GSAP uses opacity/transform, is disabled under `prefers-reduced-motion`, and does not drive layout, scrolling or booking. HyperFrames video composition was not used because this authorised scope is a static single-page Cold Demo, not a video deliverable. |
| Client-visible internal-text scan | PASS | Page source scanned for prohibited AI/provenance/governance terms and prohibited form/account/commerce features; no matches. |

## Required independent gate

- **INDEPENDENT VISUAL ACCEPTANCE: AWAITING.**
- **Eight-metric score: NOT RUN.** A different Owner must inspect the design intent, similarity check, fidelity map, image ledger, both final screenshots, this QA record and score all eight required criteria.
- **CLIENT-SHOWABLE DEMO: FAIL until independent visual acceptance is recorded.** This producing Owner does not claim readiness.
- `ACTUAL_DEMO_MINUTES.md` is below the project threshold and requires reviewer time-anomaly analysis.

## Prohibited actions confirmation

Not performed: deployment, upload, public release, sending, customer contact, login, payment, installation, deletion or Git write.
