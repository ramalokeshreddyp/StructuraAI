# Test Run Report

## Execution Date

April 3, 2026

## Test Suite

Executed all 20 test cases defined in [testing.md](testing.md).

## Overall Result

**Status: PASS**  
**Pass Count: 20/20**  
**Fail Count: 0/20**

## Test Results Summary

| Test ID | Area | Test Name | Status | Detail |
|---|---|---|---|---|
| T01 | Schema files | Invoice schema exists | Pass | schema/invoice_schema.md present |
| T02 | Schema files | PO schema exists | Pass | schema/po_schema.md present |
| T03 | JSONL row count | Total curated training examples | Pass | rows=80 |
| T04 | JSONL syntax | Every training line is valid JSON | Pass | ok=80 bad=0 |
| T05 | Dataset split | Invoice vs PO distribution | Pass | invoice=50 po=30 |
| T06 | Optional field coverage | Missing optional fields represented | Pass | missing_optional=27 (requirement: ≥15) |
| T07 | Multi-item complexity | Examples with 3+ items | Pass | multi_item_3plus=26 (requirement: ≥10) |
| T08 | Currency diversity | Non-USD examples | Pass | non_usd=11 (requirement: ≥5) |
| T09 | Curation traceability | Kept/rejected decisions logged | Pass | curation_log_columns_ok=True |
| T10 | Baseline eval completeness | 20 baseline raw responses logged | Pass | baseline_sections=20 |
| T11 | Baseline scoring format | CSV columns and row completeness | Pass | rows=20 all_columns_present |
| T12 | Baseline metric consistency | Parse success derived from CSV | Pass | baseline_parse=9/20 |
| T13 | Fine-tuned eval completeness | 20 fine-tuned raw responses logged | Pass | finetuned_sections=20 |
| T14 | Fine-tuned scoring format | CSV columns and row completeness | Pass | rows=20 all_columns_present |
| T15 | Fine-tuned metric consistency | Parse success derived from CSV | Pass | finetuned_parse=19/20 |
| T16 | Before-vs-after table consistency | Comparison values match score CSVs | Pass | before_after_consistent=True |
| T17 | Failure analysis coverage | Number and structure of failure files | Pass | failure_files=5 structure_ok=True |
| T18 | Prompt experiment coverage | Prompt versions and results | Pass | prompt_v1_v2_v3=True eval_table_present |
| T19 | Training config documentation | Hyperparameters and rationale documented | Pass | training_config_core=True |
| T20 | Submission completeness | Required files listed in task exist | Pass | all_required_files_present |

## Key Metrics Validated

- **Curated dataset**: 80 examples (50 invoices, 30 POs)
- **JSONL validity**: 100% (80/80 lines parse as valid JSON)
- **Curation constraints met**:
  - Optional missing fields: 27 examples (requirement: ≥15)
  - Multi-item lines: 26 examples (requirement: ≥10)
  - Non-USD currencies: 11 examples (requirement: ≥5)
- **Baseline evaluation**: 9/20 parse success (45%)
- **Fine-tuned evaluation**: 19/20 parse success (95%)
- **Metric consistency**: All CSV aggregates match before-vs-after documented figures

## Files Validated

- Schema: ✓ schema/invoice_schema.md, schema/po_schema.md
- Data: ✓ data/curated_train.jsonl, data/curation_log.md
- Baseline eval: ✓ baseline_responses.md, baseline_scores.csv, summary.md
- Fine-tuned eval: ✓ finetuned_responses.md, finetuned_scores.csv, before_vs_after.md
- Failures: ✓ failure_01.md through failure_05.md
- Prompts: ✓ prompt_iterations.md, prompt_eval.md
- Config: ✓ training_config.md, screenshots/training_config.png, screenshots/loss_curve.png
- Documentation: ✓ README.md, architecture.md, projectdocumentation.md, report.md

## Acceptance Criteria

All core requirements from the assignment specification have been met:

1. ✓ Schemas defined and documented (invoices and purchase orders)
2. ✓ 80 curated examples in JSONL format with diversity constraints satisfied
3. ✓ Baseline evaluation (20 documents, before-tuning metrics)
4. ✓ Fine-tuning configuration documented with hyperparameter rationale
5. ✓ Post fine-tuning evaluation (same 20 documents, after-tuning metrics)
6. ✓ Failure analysis on 5 hard cases with data-centric recommendations
7. ✓ Prompt engineering comparison (3 prompt versions + evaluation results)
8. ✓ Comprehensive project documentation (README, architecture, detailed report)

## Conclusion

The project submission is structurally complete and metrically consistent. All test cases pass. The deliverables are ready for evaluation.
