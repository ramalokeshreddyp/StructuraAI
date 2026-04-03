# Prompt-Only Evaluation on 3 Hard Documents

| document | baseline prompt parse success | best prompt-only parse success (v3) | fine-tuned parse success |
|---|---:|---:|---:|
| invoice_doc_04.txt | 0 | 1 | 1 |
| invoice_doc_09.txt | 0 | 1 | 1 |
| po_doc_17.txt | 0 | 0 | 0 |

## Notes

- Prompt v3 fixed 2/3 hard cases on the base model.
- One difficult PO case still failed due markdown fence formatting.
- Fine-tuned model matched or exceeded prompt-only behavior, but still had one formatting failure on this subset.
