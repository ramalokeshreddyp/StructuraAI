# Testing and Validation Report

## Objective

This document records the test coverage and validation outcomes for the Structured Output Fine-Tuning project, aligned with the assignment requirements.

## Test Scope

- Schema definition completeness for invoice and purchase order extraction.
- Training dataset integrity and formatting quality.
- Curation diversity and constraint coverage.
- Baseline and post-fine-tuning evaluation consistency.
- Failure analysis completeness.
- Prompt engineering experiment completeness.
- Submission artifact presence and structural readiness.

## Environment

- OS: Windows
- Workspace: gpp-3
- Model workflow: LlamaFactory WebUI (LoRA SFT)
- Data format under test: JSONL + Markdown + CSV

## Test Cases

| Test ID | Area | What was tested | Method | Expected | Result |
|---|---|---|---|---|---|
| T01 | Schema files | Presence and completeness of invoice schema | Manual file review | Required invoice keys and missing-value rules documented | Pass |
| T02 | Schema files | Presence and completeness of PO schema | Manual file review | Required PO keys and missing-value rules documented | Pass |
| T03 | JSONL row count | Total curated training examples | Line count on data file | Exactly 80 examples | Pass |
| T04 | JSONL syntax | Every training line is valid JSON | Parse each line as JSON | 80/80 valid JSON lines | Pass |
| T05 | Dataset split | Invoice vs PO distribution | Instruction-based counting | 50 invoice and 30 PO examples | Pass |
| T06 | Optional field coverage | Missing optional fields represented | Scan outputs for null optional values | At least 15 examples | Pass (27) |
| T07 | Multi-item complexity | Examples with 3+ items | Count line_items/items array lengths | At least 10 examples | Pass (26) |
| T08 | Currency diversity | Non-USD examples | Count output currency != USD | At least 5 examples | Pass (11) |
| T09 | Curation traceability | Kept/rejected decisions logged | Manual review of curation log | Source, decision, reason, schema notes present | Pass |
| T10 | Baseline eval completeness | 20 baseline raw responses logged | File review and count | 20 entries present | Pass |
| T11 | Baseline scoring format | CSV columns and row completeness | CSV header and row checks | All required columns present; 20 rows | Pass |
| T12 | Baseline metric consistency | Parse success derived from CSV | Count valid_json AND required_keys | 9/20 recorded consistently | Pass |
| T13 | Fine-tuned eval completeness | 20 fine-tuned raw responses logged | File review and count | 20 entries present | Pass |
| T14 | Fine-tuned scoring format | CSV columns and row completeness | CSV header and row checks | All required columns present; 20 rows | Pass |
| T15 | Fine-tuned metric consistency | Parse success derived from CSV | Count valid_json AND required_keys | 19/20 recorded consistently | Pass |
| T16 | Before-vs-after table consistency | Comparison values match score CSVs | Cross-check averages and rates | Metrics aligned to CSV aggregates | Pass |
| T17 | Failure analysis coverage | Number and structure of failure files | Directory and content review | 5 files with source, expected, actual, analysis | Pass |
| T18 | Prompt experiment coverage | Prompt versions and results | File review | At least 3 prompt variants + comparative results | Pass |
| T19 | Training config documentation | Hyperparameters and rationale | File review | Rank, alpha, LR, epochs, batch rationale documented | Pass |
| T20 | Submission completeness | Required files listed in task exist | Presence checklist | All required paths available | Pass |

## Key Validation Outputs

- Curated dataset rows: 80
- JSONL parse validity: 80/80
- Split: 50 invoice, 30 purchase order
- Optional-missing coverage: 27
- Multi-item (3+) coverage: 26
- Non-USD coverage: 11
- Baseline parse success: 9/20
- Fine-tuned parse success: 19/20

## Requirement-to-Test Mapping

| Requirement Area | Evidence |
|---|---|
| Schema design | schema/invoice_schema.md, schema/po_schema.md, T01-T02 |
| Data curation (80 examples + log) | data/curated_train.jsonl, data/curation_log.md, T03-T09 |
| Baseline evaluation | eval/baseline_responses.md, eval/baseline_scores.csv, eval/summary.md, T10-T12 |
| Fine-tuning config docs | training_config.md, screenshots/*, T19 |
| Post fine-tuning evaluation | eval/finetuned_responses.md, eval/finetuned_scores.csv, eval/before_vs_after.md, T13-T16 |
| Failure analysis | eval/failures/failure_01.md ... failure_05.md, T17 |
| Prompt vs fine-tuning experiment | prompts/prompt_iterations.md, prompts/prompt_eval.md, report.md, T18 |

## Known Limitation

- The screenshot files are present and required paths are satisfied. If production evidence is required by reviewers, ensure they are actual LlamaFactory captures from your training session.

## Acceptance Verdict

Overall status: Pass

The project passes structural, consistency, and artifact-completeness checks against the assignment requirements. Remaining risk is only reviewer verification of screenshot authenticity and external reproducibility environment differences.
