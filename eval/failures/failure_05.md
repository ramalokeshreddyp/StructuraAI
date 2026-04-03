# Failure 05

## Source Document Text

```text
Invoice with a 4-row line-item table and one wrapped description spanning two OCR lines.
```

## Expected JSON

```json
{"vendor":"Prime Clinical Labs","invoice_number":"INV-X511","date":"2026-03-25","due_date":null,"currency":"USD","subtotal":312.0,"tax":24.96,"total":336.96,"line_items":[{"description":"blood panel extended","quantity":2,"unit_price":78.0},{"description":"microbiology culture","quantity":1,"unit_price":96.0},{"description":"pathology review","quantity":1,"unit_price":60.0}]}
```

## Model Output

```text
{"vendor":"Prime Clinical Labs","invoice_number":"INV-X511","date":"2026-03-25","due_date":null,"currency":"USD","subtotal":312.0,"tax":24.96,"total":336.96,"line_items":[{"description":"blood panel extended","quantity":2,"unit_price":78.0},{"description":"microbiology culture","quantity":"1","unit_price":96.0},{"description":"pathology review","quantity":1,"unit_price":60.0}]}
```

## What Went Wrong

One nested `quantity` value was emitted as a string instead of numeric.

## Why It Likely Failed

Wrapped OCR lines in multi-item tables can cause inconsistent tokenization in numeric columns.

## Data-Centric Fix

Add 10 invoice examples with wrapped line descriptions and strict numeric typing in all item fields.
