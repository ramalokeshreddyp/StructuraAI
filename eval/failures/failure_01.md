# Failure 01

## Source Document Text

```text
Invoice with footer-style vendor block, merged numeric columns, and OCR noise near "Invoice Number" label.
```

## Expected JSON

```json
{"vendor":"Helix Med Devices","invoice_number":"INV-X901","date":"2026-03-06","due_date":null,"currency":"USD","subtotal":145.0,"tax":11.6,"total":156.6,"line_items":[{"description":"replacement parts","quantity":2,"unit_price":72.5}]}
```

## Model Output

```text
{"vendor":"Helix Med Devices","invoice_number":"INV-X901","date":"2026-03-06","due_date":null,"currency":"USD","subtotal":145.0,"tax":"11.6","total":156.6,"line_items":[{"description":"replacement parts","quantity":2,"unit_price":72.5}]}
```

## What Went Wrong

Tax was emitted as a string instead of a float.

## Why It Likely Failed

Few training examples had OCR artifacts immediately adjacent to tax values, which can bias the model toward quoted numbers.

## Data-Centric Fix

Add 6-8 invoice examples where tax tokens include OCR noise but targets strictly preserve numeric types.
