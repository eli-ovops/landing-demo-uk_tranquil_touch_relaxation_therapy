# Actual Demo Minutes

- Observed production start: 2026-08-23 16:34:17 CST (v2 design-intent artifacts created).
- Final current-source browser capture: 2026-08-23 16:49:51 CST.
- Elapsed capture interval: 15 minutes 34 seconds.
- **Actual Demo Minutes: 16** (rounded up to the next whole minute).
- Product Gate repair capture: 2026-08-23 17:00:04 CST. This later repair interval is recorded separately from the original 16-minute build and does not rewrite the original metric.

## TIME ANOMALY REVIEW

**Verdict: SUPPORTED FOR INDEPENDENT RE-REVIEW — NOT A WAIVER, PASS OR READY CLAIM.**

Why the 16-minute first build can be assessed through actual evidence rather than elapsed time alone:

1. The replacement Owner inherited a bounded v2 directory containing already-verified public logo/studio assets plus completed `DESIGN_INTENT.md`, `BUSINESS_FIDELITY_MAP.md`, `IMAGE_LEDGER.md` and `CROSS_DEMO_SIMILARITY_CHECK.md`. The interval therefore measures continuation and implementation, not discovery from zero.
2. The implementation is a dependency-free static HTML/CSS page with two local images and one existing external booking route. No build system, generated image, backend, form, data layer, installation or deployment was performed.
3. The result has inspectable visual evidence at exact 1440×900 and 390×844 plus full-page captures. The supplied independent visual review scored the pre-repair direction `8.7 PASS`; that external result, not Owner self-rating, supports that the short interval did not automatically produce a low-grade visual direction.
4. The same independent review still caught a Product Gate failure. The identity marker and Mobile Hero were then repaired, recaptured and rechecked. This proves the time anomaly gate remained active rather than being bypassed because the visual score was high.
5. Current technical evidence records exact source/screenshot mtimes and hashes, source-to-HTTP hash equality, zero console errors, zero horizontal overflow, exact viewport sizes, CTA routing and internal-text scan results.

Residual boundary: elapsed time cannot prove visual quality. The repaired page remains `AWAITING INDEPENDENT VISUAL RE-ACCEPTANCE`; only the independent reviewer may decide whether the Product Gate now passes.

No deployment, uploading, publication, contact, login, payment, installation, deletion or Git operation occurred.
