# Purchase Order JSON Schema

## Canonical Structure

```json
{
  "buyer": "string",
  "supplier": "string",
  "po_number": "string",
  "date": "YYYY-MM-DD",
  "delivery_date": "YYYY-MM-DD or null",
  "currency": "ISO-4217 3-letter uppercase code",
  "total": 0.0,
  "items": [
    {
      "item_name": "string",
      "quantity": 0,
      "unit_price": 0.0
    }
  ]
}
```

## Field Rules

- `buyer` (string): Name of the organization issuing the purchase order; if absent or unreadable, use an empty string `""`.
- `supplier` (string): Vendor/supplier receiving the order; if absent, use `""`.
- `po_number` (string): PO identifier (e.g., `PO-45823`) extracted verbatim; if missing, use `""`.
- `date` (YYYY-MM-DD string): Purchase order issue date in ISO format; if missing/ambiguous, use `""`.
- `delivery_date` (YYYY-MM-DD string or null): Requested delivery date in ISO format; if not present in source text, use `null`.
- `currency` (string): Three-letter ISO-4217 code inferred from the source; if unknown, use `""`.
- `total` (float): Total order value as numeric float; if absent but derivable from items, compute it, otherwise use `0.0`.
- `items` (array): Ordered item list from the PO; if no table exists, return an empty array `[]`.
- `items[].item_name` (string): Product/service name from item row; if missing, use `""`.
- `items[].quantity` (number): Requested quantity as numeric value; if missing, use `0`.
- `items[].unit_price` (float): Unit rate as numeric float; if missing, use `0.0`.

## Consistency Policy

- Always return every required top-level key.
- Never add non-schema keys (`shipping`, `terms`, `approver`, etc.).
- Use `null` only for `delivery_date` when absent; do not substitute empty string for this field.
- Return pure JSON only, without markdown fences or prose.
