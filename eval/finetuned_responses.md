# Fine-Tuned Responses (LoRA)

Prompt used (same as baseline):

```text
Extract fields and return ONLY valid JSON with the correct schema for invoice or purchase order. No markdown or explanation.
```

## 1. invoice_doc_01.txt
```text
{"vendor":"Acme Medical","invoice_number":"INV-A1","date":"2026-03-01","due_date":null,"currency":"USD","subtotal":120.5,"tax":9.64,"total":130.14,"line_items":[{"description":"service","quantity":1,"unit_price":120.5}]}
```
## 2. invoice_doc_02.txt
```text
{"vendor":"Acme","invoice_number":"INV-A2","date":"2026-03-02","due_date":null,"currency":"USD","subtotal":140.0,"tax":11.2,"total":151.2,"line_items":[{"description":"consulting","quantity":2,"unit_price":70.0}]}
```
## 3. invoice_doc_03.txt
```text
{"vendor":"BlueRiver","invoice_number":"INV-A3","date":"2026-03-03","due_date":null,"currency":"USD","subtotal":88.0,"tax":7.04,"total":95.04,"line_items":[{"description":"parts","quantity":2,"unit_price":44.0}]}
```
## 4. invoice_doc_04.txt
```text
{"vendor":"Helix","invoice_number":"INV-A4","date":"2026-03-04","due_date":"2026-03-19","currency":"USD","subtotal":157.0,"tax":12.56,"total":169.56,"line_items":[{"description":"service","quantity":1,"unit_price":157.0}]}
```
## 5. invoice_doc_05.txt
```text
{"vendor":"Atlas","invoice_number":"INV-A5","date":"2026-03-05","due_date":"2026-03-20","currency":"USD","subtotal":200.0,"tax":16.0,"total":216.0,"line_items":[{"description":"device","quantity":1,"unit_price":200.0}]}
```
## 6. invoice_doc_06.txt
```text
{"vendor":"Northwind","invoice_number":"INV-A6","date":"2026-03-06","due_date":null,"currency":"USD","subtotal":145.0,"tax":"11.6","total":156.6,"line_items":[{"description":"parts","quantity":2,"unit_price":72.5}]}
```
## 7. invoice_doc_07.txt
```text
{"vendor":"Harbor","invoice_number":"INV-A7","date":"2026-03-07","due_date":null,"currency":"EUR","subtotal":134.2,"tax":10.74,"total":144.94,"line_items":[{"description":"packing","quantity":2,"unit_price":67.1}]}
```
## 8. invoice_doc_08.txt
```text
{"vendor":"Prime Labs","invoice_number":"INV-A8","date":"2026-03-08","due_date":"2026-03-23","currency":"USD","subtotal":111.0,"tax":8.88,"total":119.88,"line_items":[{"description":"analysis","quantity":3,"unit_price":37.0}]}
```
## 9. invoice_doc_09.txt
```text
{"vendor":"Orion","invoice_number":"INV-A9","date":"2026-03-09","due_date":null,"currency":"USD","subtotal":190.0,"tax":15.2,"total":205.2,"line_items":[{"description":"freight","quantity":2,"unit_price":95.0}]}
```
## 10. invoice_doc_10.txt
```text
{"vendor":"Summit","invoice_number":"INV-A10","date":"2026-03-10","due_date":null,"currency":"USD","subtotal":99.0,"tax":7.92,"total":106.92,"line_items":[{"description":"lab fee","quantity":3,"unit_price":33.0}]}
```
## 11. invoice_doc_11.txt
```text
{"vendor":"Tata Steel","invoice_number":"INV-A11","date":"2026-03-11","due_date":null,"currency":"INR","subtotal":170.0,"tax":13.6,"total":183.6,"line_items":[{"description":"coils","quantity":2,"unit_price":85.0}]}
```
## 12. invoice_doc_12.txt
```text
{"vendor":"Greenline","invoice_number":"INV-A12","date":"2026-03-12","due_date":null,"currency":"USD","subtotal":220.0,"tax":17.6,"total":237.6,"line_items":[{"description":"maintenance","quantity":2,"unit_price":110.0}]}
```
## 13. po_doc_13.txt
```text
{"buyer":"Aster","supplier":"Delta","po_number":"PO-F13","date":"2026-03-13","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
## 14. po_doc_14.txt
```text
{"buyer":"Cobalt","supplier":"Everpeak","po_number":"PO-F14","date":"2026-03-14","delivery_date":"2026-03-25","currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
## 15. po_doc_15.txt
```text
{"buyer":"Metro","supplier":"Granite","po_number":"PO-F15","date":"2026-03-15","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
## 16. po_doc_16.txt
```text
{"buyer":"Sunline","supplier":"Horizon","po_number":"PO-F16","date":"2026-03-16","delivery_date":"2026-03-27","currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
## 17. po_doc_17.txt
```text
```json
{"buyer":"Vertex","supplier":"Indus","po_number":"PO-F17","date":"2026-03-17","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"item-a","quantity":4,"unit_price":105.0}]}
```
```
## 18. po_doc_18.txt
```text
{"buyer":"Redwood","supplier":"Juniper","po_number":"PO-F18","date":"2026-03-18","delivery_date":"2026-03-29","currency":"USD","total":525.0,"items":[{"item_name":"steel","quantity":5,"unit_price":105.0}]}
```
## 19. po_doc_19.txt
```text
{"buyer":"Nimbus","supplier":"Krypton","po_number":"PO-F19","date":"2026-03-19","delivery_date":null,"currency":"USD","total":300.0,"items":[{"item_name":"fiber","quantity":3,"unit_price":100.0}]}
```
## 20. po_doc_20.txt
```text
{"buyer":"Keystone","supplier":"Lumen","po_number":"PO-F20","date":"2026-03-20","delivery_date":null,"currency":"USD","total":420.0,"items":[{"item_name":"cable","quantity":4,"unit_price":105.0}]}
```
