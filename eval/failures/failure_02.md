# Failure 02

## Source Document Text

```text
Purchase order with compact table and title-like line "PO::BLOCK" above the fields.
```

## Expected JSON

```json
{"buyer":"Vertex Mobility","supplier":"Indus Materials","po_number":"PO-X217","date":"2026-03-17","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```

## Model Output

```text
```json
{"buyer":"Vertex Mobility","supplier":"Indus Materials","po_number":"PO-X217","date":"2026-03-17","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
```

## What Went Wrong

JSON content is correct but wrapped in markdown code fences, causing parse failure.

## Why It Likely Failed

Training coverage for prompt-like or title-like delimiters was limited for purchase-order examples.

## Data-Centric Fix

Add 8 purchase-order examples containing markdown-like text in input while target remains raw JSON without fences.
