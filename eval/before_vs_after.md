# Before vs After

| metric | baseline (base model) | post fine-tuning |
|---|---:|---:|
| parse success rate | 45.0% (9/20) | 95.0% (19/20) |
| avg key accuracy | 0.77 | 0.99 |
| avg value accuracy | 0.69 | 0.94 |
| responses with markdown fences | 3 | 1 |
| responses with prose preamble | 4 | 0 |
| responses with wrong schema keys | 5 | 0 |

## Notes

The same 20 held-out documents and exact same extraction prompt were used in both runs.
