# Local v2 QA Record

Status: **local v2 Product Gate repair complete — AWAITING INDEPENDENT VISUAL RE-ACCEPTANCE**.

## Authority and scope

- Execution role: bounded replacement Owner for this v2 directory only.
- Delivery level: local L0 static demo; no deployment, upload, publication or customer contact.
- DS-002B SHA-256: `5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a`.
- DS-002B mtime: `2026-08-09T16:00:52+0800`.
- Customer-recognisable assets: public official material used in the minimum concept scope; `CUSTOMER AUTHORIZATION: NOT VERIFIED` as recorded in `IMAGE_LEDGER.md`.

## True render entry and source consistency

- Absolute entry: `/Volumes/EXTERNAL/海外落地页/client_uk_tranquil_touch_relaxation_therapy/demo_v2_20260823/index.html`.
- Stylesheet: `/Volumes/EXTERNAL/海外落地页/client_uk_tranquil_touch_relaxation_therapy/demo_v2_20260823/styles.css`.
- Browser source URL: `http://127.0.0.1:8765/`.
- Server document root during capture: `/Volumes/EXTERNAL/海外落地页/client_uk_tranquil_touch_relaxation_therapy/demo_v2_20260823/`.
- Final local and HTTP-served HTML SHA-256 both equal `e59b32fe8f2f30487616c7007237d571aff7dc9d2f727fa8ae77bb6f2113a767`.
- Final source mtimes: `index.html` and `styles.css` both `2026-08-23T16:59:17+0800`.
- Final screenshot mtimes: Desktop `2026-08-23T17:00:03+0800`; Mobile `2026-08-23T17:00:04+0800`.
- Verdict: both final screenshots are newer than both repaired source files and were recaptured from the v2 URL above. No old-entry or pre-repair screenshot is used as final evidence.

## Stable browser evidence

| Evidence | Exact dimensions | SHA-256 |
| --- | --- | --- |
| `qa/final/desktop-1440x900.png` | 1440 × 900 | `ffebb347bbf5283e5fc793e0e167f722b35f0fadd15292dcb6495f8405164e90` |
| `qa/final/mobile-390x844.png` | 390 × 844 | `d2bd0961de5bebb9bc9cb79fde51f0b9318a7f963ed40e3b6bb25ebbae463063` |
| `qa/full/desktop-full.png` | 1440 × 4452 | `1e78b6f3e1d1d38623a8588874774a8654370839e6e8bd39cacda077c2d3f5a9` |
| `qa/full/mobile-full.png` | 390 × 4513 | `c8c49f9cc1ac546a7b65088b38135e3267b74385203f1ddc5719b4764459c94f` |

The required `qa/final` files are exact viewport captures. The additional `qa/full` files preserve the complete page for independent visual review.

## Browser and static checks

| Check | Result | Evidence / boundary |
| --- | --- | --- |
| Entry response | PASS | Current v2 `/` returned HTTP 200 with title `Tranquil Touch Relaxation Therapy \| Plean`. |
| Local resources | PASS | `styles.css`, logo PNG and studio JPEG each returned HTTP 200 with the expected MIME type. |
| Browser console | PASS | Desktop and mobile final runs: 0 errors, 0 warnings and 0 page errors. |
| Horizontal overflow | PASS | Desktop `scrollWidth/clientWidth = 1440/1440`; Mobile `390/390`. |
| Minimum identity marker | PASS (implementation check) | `Unlisted concept preview` is naturally visible in the Hero at both viewports. Browser rects: Desktop `x60 y321 w174 h25`; Mobile `x18 y359 w157 h24`. It is a concise identity label, not a governance or rights disclaimer. |
| Mobile Hero repair | PASS (implementation check) | Mobile uses three forced semantic lines at 48px: `A quieter way` / `to choose your` / `next appointment.`; every line is `nowrap`, `your` is no longer isolated, and the official studio image is reframed to `78% 50%`. |
| Heading structure | PASS | Exactly one H1 in both viewports; section headings are H2 and experience names H3. |
| Images | PASS | Both local images completed with non-zero natural width in both browser runs. |
| Keyboard entry | PASS | First Tab reveals and focuses the visible `Skip to content` link. |
| External booking links | PASS | Three customer-visible booking links all use the official `https://tranquil-touch-relaxation-therapy.book.app/book-now`, open a new tab and include `noopener noreferrer`; live smoke check returned HTTP 200. |
| Internal links | PASS | Header logo resolves to `#top`, sensory CTA to `#listen`, skip link to `#main`; all targets exist. |
| Client-visible internal-text gate | PASS | The required identity phrase `Unlisted concept preview` is the only concept-status phrase. A separate scan found no customer-authorization, AI, provenance, placeholder, TODO, governance, rights, internal-note, readiness or showability language. Internal rights/governance records remain in Markdown only. |
| Static product boundary | PASS | No form, login, payment, database, analytics, tracking, fabricated booking UI or server-side feature. |
| Business fidelity | PASS (Owner factual check) | ASMR Massage, Head Spa, A Bit of Both, address, appointment days, review count/date and Ovatu hand-off map to `BUSINESS_FIDELITY_MAP.md`. No medical outcome, price, duration, staff or availability claim was invented. |
| Cross-demo structure | PASS (Owner implementation check) | No AI wellness Hero, serif display type, equal three-card grid, isolated giant review number or generic repeated CTA/Footer. See `CROSS_DEMO_SIMILARITY_CHECK.md`. |

## Independent review status

- Prior independent result supplied to this Owner: visual scale `8.7 PASS`, Product Gate `FAIL` for the missing identity marker and Mobile Hero treatment.
- This repair addresses only those Product Gate findings; it does not replace or self-extend the prior independent judgment.
- **INDEPENDENT VISUAL RE-ACCEPTANCE: AWAITING.**
- **CLIENT-SHOWABLE DEMO: FAIL until the independent re-acceptance gate passes.** This execution Owner does not grant READY or PASS.
- `ACTUAL_DEMO_MINUTES.md` now contains the required `TIME ANOMALY REVIEW`; its verdict is evidence-supported for re-review only, not a readiness waiver.

## Prohibited actions confirmation

Not performed: deployment, upload, publication, outreach, sending, customer contact, login, payment, installation, deletion or Git write.
