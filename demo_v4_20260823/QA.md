# Local QA — v4

Verification date: 2026-08-23.

| Gate | Result | Evidence / boundary |
|---|---|---|
| Desktop rendering | PASS (local) | `qa/final/desktop-1440x900.png`, captured at 1440 × 900 with a real Chromium browser. |
| Mobile rendering | PASS (local) | `qa/final/mobile-390x844.png`, captured at 390 × 844 with a real Chromium browser. |
| Console | PASS | Final local browser session reported 0 errors and 0 warnings. |
| Core factual content | PASS (local source audit) | Services, public reviews, review count observation, address, public contact and stated opening hours are mapped in `BUSINESS_FIDELITY_MAP.md`. |
| External action boundary | PASS | Booking actions point to official Ovatu Book Now; review and Maps actions point to public external sources. No form, login, payment, self-hosted booking or deployment. |
| Map attribution | PASS | Visible `© OpenStreetMap contributors` attribution is included with live OSM tiles. |
| Internal-text scan | PASS | Scan found no visible TODO, placeholder or lorem text. `CUSTOMER AUTHORIZATION: NOT VERIFIED` exists only in internal ledger documentation. |
| Social links | NOT INCLUDED | No official social account URL was verified in the inspected public sources. Fake or ambiguous social icons were intentionally not created. |
| Image integrity | CONDITIONAL | The public studio image is a factual anchor. The abstract art is an original fictional concept, explicitly recorded in `IMAGE_LEDGER.md`; it must never be described as a customer photo or service outcome. |
| Independent visual acceptance | AWAITING | Local screenshots are owner evidence, not independent acceptance. |

## Overall

`CLIENT-SHOWABLE DEMO = FAIL` pending independent visual acceptance, despite local rendering checks passing.

This is a local v4 draft only. No deployment, upload, publication, customer contact, login, form submission, payment or outreach was performed or is authorized by this QA.

