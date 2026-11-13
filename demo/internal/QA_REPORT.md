# Local QA report

Date: 2026-08-23. Local URL: `http://127.0.0.1:4175/`. This is local-only evidence, not a deployed preview or a sending authorization.

## Evidence

| Check | Result | Evidence |
| --- | --- | --- |
| Desktop visual/browser check | PASS | Playwright at requested 1440×900; revised full-page capture: `../qa/playwright/final/desktop-1440x900-v2.png` (1440×3697). |
| Mobile visual/browser check | PASS | Playwright at requested 390×844; revised full-page capture: `../qa/playwright/final/mobile-390x844-v2.png` (390×3675). |
| Core content | PASS | Browser accessibility snapshot exposes the business, Plean, ASMR Massage, Head Spa, A Bit of Both, review signal and three external booking links. |
| CTA route | PASS | All three CTAs resolve in the DOM to `https://tranquil-touch-relaxation-therapy.book.app/book-now`; no form or data capture exists. |
| Business fidelity | PASS | Hero, three service cards and external CTA map one-to-one to `BUSINESS_FIDELITY_MAP.md`. |
| Image uniqueness | PASS | Two distinct concept bitmaps, each assigned to one placement; SHA-256 values recorded in `IMAGE_LEDGER.md`. |
| Client-visible internal-text scan | PASS | Scan of `index.html` and `styles.css` found no banned AI/rights/authorization/internal-governance terms. `Independent concept preview` is the permitted minimal identity label. |
| Backend / collection boundary | PASS | Static HTML/CSS only; no login, backend, forms, booking recreation, payment, analytics or data capture. |

## Bottom 40% commercial QA

- New commercial information: location and current appointment-days context, not shown in the Hero.
- Visual payoff: a unique original water-and-petal editorial image and a distinct proof block; no third-party image or invented testimonial.
- Strategy: `Specificity + Reassurance + Conversion`; the close explains why the live booking page retains dynamic choices and routes there.
- Generic-CTA check: PASS. The final CTA retains the specific booking-availability action and follows practical context rather than a generic oversized close.

## Status

- `BUSINESS-FIDELITY QA = PASS`
- `CLIENT-VISIBLE INTERNAL-TEXT GATE = PASS`
- `BOTTOM 40% COMMERCIAL QA = PASS`
- `LOCAL BROWSER QA = PASS`
- `CLIENT-SHOWABLE DEMO = HUMAN REVIEW REQUIRED` — visual/customer acceptance has not been provided by a human and no external access has been authorized.

Actual Demo Minutes: **4** (asset copied into the demo at 16:12:45+0800 to final browser capture at 16:16:43+0800; research and governance reading excluded). This is an observed production interval, not a promise for future work.
