# Failure 03

## Source Document Text

```text
Invoice where due date appears as "Payment terms: Net 30" and tax is presented as "VAT @ 8%".
```

## Expected JSON

```json
{"vendor":"Northwind Industrial Supplies","invoice_number":"INV-X332","date":"2026-02-19","due_date":"2026-03-21","currency":"EUR","subtotal":260.0,"tax":20.8,"total":280.8,"line_items":[{"description":"industrial clamps","quantity":4,"unit_price":65.0}]}
```

## Model Output

```text
{"vendor":"Northwind Industrial Supplies","invoice_number":"INV-X332","date":"2026-02-19","due_date":null,"currency":"EUR","subtotal":260.0,"tax":20.8,"total":280.8,"line_items":[{"description":"industrial clamps","quantity":4,"unit_price":65.0}]}
```

## What Went Wrong

`due_date` was set to null despite recoverable payment terms.

## Why It Likely Failed

Insufficient training examples mapping payment terms language to normalized due dates.

## Data-Centric Fix

Add invoice examples with "Net X" payment terms and explicit expected due date normalization.
