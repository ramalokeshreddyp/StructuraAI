# Invoice JSON Schema

## Canonical Structure

```json
{
  "vendor": "string",
  "invoice_number": "string",
  "date": "YYYY-MM-DD",
  "due_date": "YYYY-MM-DD or null",
  "currency": "ISO-4217 3-letter uppercase code",
  "subtotal": 0.0,
  "tax": 0.0,
  "total": 0.0,
  "line_items": [
    {
      "description": "string",
      "quantity": 0,
      "unit_price": 0.0
    }
  ]
}
```

## Field Rules

- `vendor` (string): Legal or trading name of the issuing seller exactly as present in the document; if missing or unreadable, use an empty string `""`.
- `invoice_number` (string): Unique invoice identifier printed on the document (e.g., `INV-2026-001`); if absent, use `""`.
- `date` (YYYY-MM-DD string): Invoice issue date normalized to ISO format; if source is ambiguous or absent, use `""`.
- `due_date` (YYYY-MM-DD string or null): Payment due date normalized to ISO format; if not provided in the source, use `null`.
- `currency` (string): Three-letter ISO-4217 currency code inferred from symbol/text (`$`->`USD`, `€`->`EUR`, etc.); if unknown, use `""`.
- `subtotal` (float): Pre-tax amount represented as a numeric float (never quoted); if absent but derivable from line items, compute it, otherwise use `0.0`.
- `tax` (float or null): Tax amount as a numeric float; when no explicit tax is present, use `null`.
- `total` (float): Final payable amount as numeric float; if absent but derivable, compute it, otherwise use `0.0`.
- `line_items` (array): Ordered list of billed items; if no itemization exists, return an empty array `[]`.
- `line_items[].description` (string): Item/service label exactly from the source; if missing on an item row, use `""`.
- `line_items[].quantity` (number): Numeric quantity as integer when whole or decimal when fractional; if missing, use `0`.
- `line_items[].unit_price` (float): Unit price per item as numeric float; if missing, use `0.0`.

## Consistency Policy

- Never omit required top-level keys.
- Never introduce extra keys such as `notes`, `discount`, or `tax_rate`.
- Do not wrap JSON in markdown fences or explanatory prose.
- Preserve numeric values as numbers, not quoted strings.
