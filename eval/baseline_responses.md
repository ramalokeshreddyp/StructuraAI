# Baseline Responses (Base Model)

Prompt used:

```text
Extract fields and return ONLY valid JSON with the correct schema for invoice or purchase order. No markdown or explanation.
```

## 1. invoice_doc_01.txt
```text
{"vendor":"Acme Medical","invoice_number":"INV-A1","date":"2026-03-01","due_date":null,"currency":"USD","subtotal":120.5,"tax":9.64,"total":130.14,"line_items":[{"description":"service","quantity":1,"unit_price":120.5}]}
```
## 2. invoice_doc_02.txt
```text
```json
{"vendor":"Acme","invoice_no":"INV-A2","total":"140.00"}
```
```
## 3. invoice_doc_03.txt
```text
{"vendor":"BlueRiver","invoice_number":"INV-A3","date":"2026-03-03","due_date":null,"currency":"USD","subtotal":88.0,"tax":7.04,"total":95.04,"line_items":[{"description":"parts","quantity":2,"unit_price":44.0}]}
```
## 4. invoice_doc_04.txt
```text
I found vendor Helix and total 170. Please verify due date manually.
```
## 5. invoice_doc_05.txt
```text
{"vendor":"Helix","invoice_number":"INV-A5","date":"2026-03-05","due_date":"2026-03-20","currency":"USD","subtotal":200.0,"tax":16.0,"total":216.0,"line_items":[{"description":"device","quantity":1,"unit_price":200.0}]}
```
## 6. invoice_doc_06.txt
```text
{"vendor":"Atlas","invoice_no":"INV-A6","date":"2026-03-06","currency":"USD","total":"156.6"}
```
## 7. invoice_doc_07.txt
```text
{"vendor":"Northwind","invoice_number":"INV-A7","date":"2026-03-07","due_date":null,"currency":"EUR","subtotal":134.2,"tax":10.74,"total":144.94,"line_items":[{"description":"packing","quantity":2,"unit_price":67.1}]}
```
## 8. invoice_doc_08.txt
```text
```json
{"vendor":"Harbor","invoice_no":"INV-A8"}
```
This is likely correct.
```
## 9. invoice_doc_09.txt
```text
Invoice fields extracted below: vendor Orion, total 190.
```
## 10. invoice_doc_10.txt
```text
{"vendor":"Prime Labs","invoice_number":"INV-A10","date":"2026-03-10","due_date":null,"currency":"USD","subtotal":99.0,"tax":7.92,"total":106.92,"line_items":[{"description":"lab fee","quantity":3,"unit_price":33.0}]}
```
## 11. invoice_doc_11.txt
```text
{"vendor":"Orion","total":"170"}
```
## 12. invoice_doc_12.txt
```text
{"vendor":"Summit","invoice_number":"INV-A12","date":"2026-03-12","due_date":null,"currency":"USD","subtotal":220.0,"tax":17.6,"total":237.6,"line_items":[{"description":"maintenance","quantity":2,"unit_price":110.0}]}
```
## 13. po_doc_13.txt
```text
PO extracted: buyer Aster, supplier Delta, total 420.
```
## 14. po_doc_14.txt
```text
{"buyer":"Cobalt","supplier":"Everpeak","po_no":"PO-B14","currency":"USD","total":"420.0"}
```
## 15. po_doc_15.txt
```text
{"buyer":"Metro","supplier":"Indus","po_number":"PO-B15","date":"2026-03-15","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
## 16. po_doc_16.txt
```text
```json
{"buyer":"Sunline","supplier":"Horizon","po_number":"PO-B16","total":420.0}
```
```
## 17. po_doc_17.txt
```text
PO details: buyer Vertex, supplier Juniper.
```
## 18. po_doc_18.txt
```text
{"buyer":"Redwood","supplier":"Juniper","po_number":"PO-B18","date":"2026-03-18","delivery_date":"2026-03-27","currency":"USD","total":525.0,"items":[{"item_name":"steel","quantity":5,"unit_price":105.0}]}
```
## 19. po_doc_19.txt
```text
{"buyer":"Nimbus","currency":"USD","total":300.0}
```
## 20. po_doc_20.txt
```text
{"buyer":"Keystone","supplier":"Krypton","po_number":"PO-B20","date":"2026-03-20","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"cable","quantity":4,"unit_price":105.0}]}
```
