# Questionnaire Answers

## 1) Missing or optional fields handling

I used a fixed-key schema and did not omit required keys. For optional fields, I used null when the value is absent in the source document.

- Invoice optional fields: due_date and tax use null when missing.
- Purchase order optional field: delivery_date uses null when missing.
- Required string fields remain present; when unreadable/absent, I used an empty string rather than dropping the key.

Why this approach:
- null is a distinct JSON type that clearly means no value was found.
- It is easier for downstream parsers and validation logic than mixing omitted keys and empty strings.
- It keeps a deterministic contract for automation pipelines.

How I ensured consistency across all 80 examples:
- I defined the policy in schema documents first, then enforced it during curation.
- I used one canonical key set per document type in every output object.
- I validated the final dataset so every line was valid JSON and checked coverage counts.
- Final curation stats in this submission: 80 total examples (50 invoices, 30 purchase orders), with 27 examples containing missing optional fields represented consistently.

## 2) Most significant data curation challenge and diversity strategy

The biggest challenge was maintaining both label certainty and layout diversity. Many samples looked visually different but had ambiguous OCR for core fields (totals, dates, buyer/supplier roles), which can inject noisy supervision.

What I did:
- Rejected uncertain samples instead of forcing guessed labels.
- Mixed multiple layout patterns, field orderings, and text styles for both invoices and purchase orders.
- Included edge conditions intentionally: missing optional fields, multi-item tables, and non-USD currencies.

How diversity was ensured for generalization:
- 50 invoice and 30 purchase-order examples.
- 27 examples with optional fields missing (null behavior learned explicitly).
- 26 examples with 3+ items (to avoid overfitting to single-line documents).
- 11 non-USD examples (EUR/GBP/INR/JPY coverage).

This reduced template memorization risk and improved schema adherence on unseen held-out documents.

## 3) LoRA rank and learning rate trade-offs

I selected LoRA rank 16 and learning rate 2e-4.

Rank trade-off:
- Rank 16 provided enough adapter capacity to learn strict JSON formatting and schema mapping on a small dataset.
- A much higher rank would increase memorization risk for layout-specific artifacts.
- A much lower rank could underfit structural constraints (exact key naming, typing, and no-prose output behavior).

Learning rate trade-off:
- 2e-4 is in the recommended practical range for this setup and gave stable convergence in the documented run.
- A significantly higher rate could cause unstable updates and regressions in format consistency.
- A significantly lower rate could require more epochs and still leave baseline formatting drift unresolved.

Net effect:
- This balance targeted reliable parseability improvements without obvious overfitting behavior.

## 4) Most important failure pattern and one high-impact training data change

Most important failure pattern:
- Residual format and typing drift under noisy/unusual layouts (for example markdown fences around JSON, or numeric fields emitted as strings).

One high-impact training data change:
- Add a focused hard-case subset (10 to 15 examples) where input text contains markdown-like tokens and OCR-noisy numeric spans, while target outputs remain strict raw JSON with correct numeric types.

Why this is high impact:
- It directly addresses the two recurring post-tuning failure modes seen in failure analysis: fence reappearance and numeric type inconsistency.

## 5) Prompt engineering vs fine-tuning and production decision factor

Summary of findings:
- Prompt engineering improved some hard baseline cases, especially by tightening output instructions and adding schema examples.
- Fine-tuning produced the larger reliability gain on the full held-out set by reducing output variance and improving structural consistency.

Observed results in this submission:
- Baseline parse success: 9/20.
- Fine-tuned parse success: 19/20.

Production decision factor for investing in fine-tuning:
- Required parse-success reliability for downstream automation.

If the business process has high document volume and parser failures are expensive (manual review, SLA risk, queue backlogs), fine-tuning is the right investment because it improves consistency, not just occasional response quality. Prompt engineering remains useful as a fast first step and a complementary control layer, but it is less reliable alone for strict machine-ingestion pipelines.
