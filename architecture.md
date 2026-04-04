# System Architecture

## Main Objective

Design and validate a robust extraction system that consistently returns schema-compliant JSON from unstructured invoice and purchase-order text, with predictable behavior under document layout variability.

## High-Level Architecture

```mermaid
flowchart TB
  subgraph DataLayer
    S1[Schema Contracts]
    S2[Curated Training JSONL]
    S3[Curation Audit Log]
  end

  subgraph ModelLayer
    M1[Base Llama 3.2 3B]
    M2[LoRA Training in LlamaFactory]
    M3[Fine-Tuned Adapter]
  end

  subgraph RuntimeLayer
    R1[Fixed Extraction Prompt]
    R2[Inference Execution]
    R3[JSON Output]
  end

  subgraph QualityLayer
    Q1[JSON Parse Validation]
    Q2[Required Key Check]
    Q3[Key and Value Accuracy]
    Q4[Failure Analysis]
    Q5[Data-Centric Remediation]
  end

  S1 --> S2 --> M2
  S3 --> M2
  M1 --> M2 --> M3
  R1 --> R2
  M1 --> R2
  M3 --> R2
  R2 --> R3 --> Q1 --> Q2 --> Q3 --> Q4 --> Q5 --> S2
```

## Layer Responsibilities

| Layer | Responsibility | Core Artifacts |
|---|---|---|
| Data Layer | Define schema contracts and curate representative training examples | `schema/`, `data/curated_train.jsonl`, `data/curation_log.md` |
| Model Layer | Execute LoRA fine-tuning with stable hyperparameters | `training_config.md`, `screenshots/` |
| Runtime Layer | Run deterministic prompt-based extraction | `prompts/`, inference outputs |
| Quality Layer | Evaluate, score, compare, and diagnose failures | `eval/` and `eval/failures/` |

## Module Architecture

```mermaid
flowchart LR
  A[Schema Module] --> B[Curation Module]
  B --> C[Training Module]
  C --> D[Inference Module]
  D --> E[Evaluation Module]
  E --> F[Failure Analysis Module]
  F --> B
```

### Module Details

1. Schema Module
- Defines mandatory keys, optional key policy, and type expectations.

2. Curation Module
- Produces JSONL training examples with diversity across layouts, currencies, and missing fields.

3. Training Module
- Applies LoRA settings tuned for small-to-medium dataset adaptation efficiency.

4. Inference Module
- Uses one fixed prompt for both baseline and fine-tuned runs to isolate tuning impact.

5. Evaluation Module
- Scores parseability, key coverage, and value fidelity in CSV format for reproducibility.

6. Failure Analysis Module
- Provides root-cause analysis and explicit data-level remediation recommendations.

## Data and Execution Flow

```mermaid
sequenceDiagram
  participant Cur as Curator
  participant Trn as Trainer
  participant Inf as Inference Runner
  participant Eva as Evaluator

  Cur->>Cur: Define schema and curate JSONL
  Cur->>Trn: Provide curated dataset and config
  Trn->>Trn: Train LoRA adapter
  Inf->>Inf: Run baseline and fine-tuned inference
  Inf->>Eva: Submit raw outputs
  Eva->>Eva: Parse, score, compare metrics
  Eva->>Cur: Return failure patterns for next data iteration
```

## Integration Contracts

### Input Contract
- Unstructured text representing invoice or PO content.

### Output Contract
- Strict JSON object following schema key set and value typing rules.

### Evaluation Contract
- One score row per document with fields for parse validity, required-key completeness, key accuracy, value accuracy, and notes.

## Design Decisions and Rationale

1. LoRA over full fine-tuning
- Reduces memory/computation cost while retaining strong task adaptation.

2. Schema-first pipeline
- Forces deterministic output shape and minimizes post-processing ambiguity.

3. Fixed holdout and prompt for A/B evaluation
- Ensures improvement attribution remains tied to fine-tuning, not prompt drift.

4. Data-centric remediation loop
- Directly targets observed model failures for compounding quality gains.

## Performance and Scalability Strategy

1. Add schema variants for additional document classes.
2. Expand training with edge-case clusters discovered in failure reports.
3. Introduce automated validators and retry logic for production-grade robustness.
4. Maintain periodic re-training with drift monitoring and versioned evaluation baselines.

## Pros and Cons

### Advantages

- Significant parse reliability gain with manageable training cost.
- Transparent, auditable process with complete evidence trail.
- Clear separation of concerns across curation, training, evaluation, and analysis.

### Limitations

- Strongly dependent on diversity quality of curated samples.
- Residual edge-layout errors remain without targeted augmentation.
- Manual scoring effort grows with larger evaluation suites.
