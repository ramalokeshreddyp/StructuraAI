# Training Configuration (LlamaFactory UI)

## Model and Method

- Base model: `Llama-3.2-3B-Instruct`
- Fine-tuning method: `LoRA`
- Stage: `SFT`
- Dataset: `data/curated_train.jsonl` (80 samples)

## Hyperparameters and Justification

- LoRA rank: `16`
  - Chosen as a middle point between 8 and 32 to capture schema and formatting constraints without over-parameterizing a small dataset.
- LoRA alpha: `32`
  - Set to 2x rank, consistent with common LoRA scaling practice to keep adaptation stable.
- Learning rate: `2e-4`
  - Within the recommended range (1e-4 to 3e-4); high enough for fast adaptation on small SFT data while avoiding unstable jumps.
- Epochs: `3`
  - Balanced against overfitting risk for 80 examples; enough repetitions to internalize strict JSON habits.
- Per-device batch size: `2`
  - Maximum stable size on local hardware with no OOM in the UI run.
- Gradient accumulation: `8`
  - Effective batch size of 16 while preserving memory.
- Max sequence length: `2048`
  - Covers long multi-line invoice and PO inputs with output JSON.
- LR scheduler: `cosine`
- Warmup ratio: `0.03`
- Weight decay: `0.0`
- Precision: `bf16` (fallback `fp16` depending hardware support)

## Observed Loss Curve

- Early phase: steady decline from ~1.8 to ~0.9 during first third of steps.
- Mid phase: smooth descent to ~0.55 with no instability spikes.
- Late phase: plateau around ~0.42 by end of epoch 3.
- Interpretation: healthy convergence without near-zero collapse, suggesting limited overfitting.

## Runs

- Run 1 (final): parameters above.
- No second run required because validation behavior and post-training parse improvements were already strong.

## Screenshot References

- Pre-training configuration panel: `screenshots/training_config.png`
- End-of-training loss curve: `screenshots/loss_curve.png`
