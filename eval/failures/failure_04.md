# Failure 04

## Source Document Text

```text
PO with supplier and buyer labels reversed in one section and corrected in a footer block.
```

## Expected JSON

```json
{"buyer":"Nimbus Warehousing","supplier":"Nova Industrial","po_number":"PO-X404","date":"2026-03-22","delivery_date":"2026-04-01","currency":"USD","total":612.0,"items":[{"item_name":"storage rack","quantity":6,"unit_price":102.0}]}
```

## Model Output

```text
{"buyer":"Nova Industrial","supplier":"Nimbus Warehousing","po_number":"PO-X404","date":"2026-03-22","delivery_date":"2026-04-01","currency":"USD","total":612.0,"items":[{"item_name":"storage rack","quantity":6,"unit_price":102.0}]}
```

## What Went Wrong

Buyer and supplier values were swapped.

## Why It Likely Failed

Training data underrepresents contradictory header/footer label conflicts.

## Data-Centric Fix

Add 5-6 PO samples with intentionally conflicting label regions and correct role assignment targets.
