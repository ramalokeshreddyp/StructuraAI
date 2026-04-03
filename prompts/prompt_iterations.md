# Prompt Iterations (Base Model Only)

## Scope

Focused on the 3 worst baseline documents: `invoice_doc_04.txt`, `invoice_doc_09.txt`, `po_doc_17.txt`.

## Prompt v1

```text
Extract all fields from the document and return valid JSON.
```

Issue: model frequently returned prose and partial key sets.

## Prompt v2

```text
You are an extraction engine. Return ONLY a JSON object with exact schema keys.
Do not include markdown, explanations, or extra keys.
If a field is missing, use null according to schema.
```

Improvement: fewer prose preambles, but occasional code fences and wrong keys persisted.

## Prompt v3 (few-shot constrained)

```text
Task: extract invoice or PO fields.
Output rules:
1) Return exactly one JSON object.
2) No markdown fences.
3) Use these exact keys only.
4) Numeric fields must be numbers, not strings.

Example invoice output:
{"vendor":"...","invoice_number":"...","date":"YYYY-MM-DD","due_date":null,"currency":"USD","subtotal":0.0,"tax":null,"total":0.0,"line_items":[{"description":"...","quantity":0,"unit_price":0.0}]}

Example PO output:
{"buyer":"...","supplier":"...","po_number":"...","date":"YYYY-MM-DD","delivery_date":null,"currency":"USD","total":0.0,"items":[{"item_name":"...","quantity":0,"unit_price":0.0}]}
```

Improvement: best prompt-only behavior, but one response still used markdown fences and one had type mismatch.
