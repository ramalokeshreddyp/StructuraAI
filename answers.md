# Questionnaire Answers

## 1) Missing or optional fields handling

I used a fixed-key schema and represented missing optional values as `null`, not empty strings and not omitted keys. For invoices, `due_date` and `tax` are `null` when absent; for purchase orders, `delivery_date` is `null` when absent. This keeps a deterministic output contract and makes downstream validation and parsing simpler because `null` explicitly means value not found.

I enforced this by defining the rule at schema level first, then applying it during curation and final validation. Consistency was verified across all 80 examples, including 27 examples where optional fields were intentionally missing and encoded with `null`.

## 2) Most significant data curation challenge and diversity strategy

The biggest challenge was balancing label certainty with layout diversity. Many candidate samples had OCR ambiguity in high-impact fields (dates, totals, role headers), so I rejected uncertain samples instead of guessing labels.

To improve generalization, I intentionally diversified examples across structure and content: 50 invoices and 30 purchase orders, 27 missing-optional cases, 26 examples with 3+ line items, and 11 non-USD currency examples. This reduced template memorization risk and improved robustness on held-out documents.

## 3) LoRA rank and learning-rate trade-offs

I chose LoRA rank 16 and learning rate 2e-4 as a balance between capacity and stability for an 80-example dataset.

- A much higher rank can overfit layout artifacts and memorize patterns.
- A much lower rank can underfit strict schema behavior and output formatting constraints.
- Higher learning rates risk unstable training and format regressions.
- Lower learning rates can converge too slowly and leave baseline failure modes unresolved.

Rank 16 with 2e-4 gave strong parseability gains without obvious instability.

## 4) Most important failure pattern and one high-impact training data change

The dominant residual pattern was format and type drift under noisy inputs, especially markdown fences around JSON and occasional numeric fields emitted as strings.

The highest-impact fix is to add a targeted hard-case subset (about 10 to 15 examples) containing markdown-like tokens and OCR-noisy numeric spans, with gold outputs always as strict raw JSON and correct numeric types. This directly addresses the recurring post-tuning error modes observed in failure analysis.

## 5) Prompt engineering vs fine-tuning and production decision factor

Prompt engineering helped with quick improvements and some format corrections, but fine-tuning delivered the larger reliability jump and lower output variance at scale.

In this project, parse success improved from 9/20 to 19/20 using fine-tuning on the same held-out set and prompt. In production, the key decision factor is required reliability for machine ingestion: if parse failures are operationally expensive (manual review load, SLA risk), fine-tuning is the right investment. Prompting remains useful as a complementary control layer, not the sole reliability mechanism.
