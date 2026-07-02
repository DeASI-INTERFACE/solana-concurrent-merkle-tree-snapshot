# Solana Concurrent Merkle Tree Snapshot

> **Cluster:** Mainnet-Beta  
> **Snapshot Date:** 2026-07-01T08:37:00-04:00  
> **Captured By:** Richard Patterson (`De-ASI-INTERFACE`)  
> **Source:** Solana Explorer UI (`explorer.solana.com`)

This repository contains a compliance-oriented snapshot of two related Solana on-chain accounts observed on Mainnet-Beta:

1. **A Concurrent Merkle Tree account** — the primary asset, captured at sequence number `12,920,932` with `12,825,025` leaves used out of a maximum of `16,777,216`.
2. **A Program Account (MplCore)** — the associated Solana program, which is source-verified, includes `security.txt`, and is governed by a Program Multisig upgrade authority.

This repository is intended as an authoritative, auditable record of the on-chain state at the time of capture. It does not claim ownership over any on-chain account beyond what is already established on-chain through the authority keys. All truncated addresses are preserved exactly as displayed in the Solana Explorer UI.

---

## Repository Structure

```
solana-concurrent-merkle-tree-snapshot/
├─ README.md
├─ LICENSE
├─ SECURITY.md
├─ security.txt
├─ .gitignore
├─ .editorconfig
├─ CHANGELOG.md
├─ CONTRIBUTING.md
├─ CODE_OF_CONDUCT.md
├─ tree/
│  ├─ cmt-metadata.json
│  ├─ cmt-state.json
│  ├─ cmt-summary.md
│  └─ proofs/.gitkeep
├─ program/
│  ├─ program-metadata.json
│  ├─ verified-build.json
│  └─ security-metadata.json
├─ docs/
│  ├─ chain-evidence.md
│  ├─ provenance.md
│  └─ architecture.md
├─ scripts/
│  ├─ validate_snapshot.py
│  └─ export_snapshot.ts
└─ .github/
   ├─ workflows/validate.yml
   ├─ ISSUE_TEMPLATE/bug_report.md
   ├─ ISSUE_TEMPLATE/security_report.md
   └─ PULL_REQUEST_TEMPLATE.md
```

---

## Quick Reference: Concurrent Merkle Tree

| Field | Value |
|---|---|
| Authority | `62Jc4...hyRmr` |
| Creation Slot | `310,204,100` |
| Max Depth | `24` |
| Max Buffer Size | `64` |
| Canopy Depth | `7` |
| Current Sequence Number | `12,920,932` |
| Current Root | `HqBZE...9RkyB` |
| Current Number of Leaves | `12,825,025` |
| Remaining Leaves | `3,952,191` |
| Max Possible Leaves | `16,777,216` |

## Quick Reference: Program Account

| Field | Value |
|---|---|
| Address | `CoREE...NhX7d` |
| Balance (SOL) | `0.001141441` |
| Executable | `Yes` |
| Executable Data | `9ZC25...TdGfr` |
| Upgradeable | `Yes` |
| Verified Build | `Program Source Verified` |
| Security.txt | `Included` |
| Last Deployed Slot | `427,105,234` |
| Upgrade Authority | `bfQVv...GFubb` (Program Multisig) |

---

## Verification

- Verified build status was confirmed via Solana Explorer `Verified Build` tab.
- `security.txt` inclusion was confirmed via Solana Explorer `Security` tab.
- Upgrade authority is tagged as **Program Multisig**, indicating governance control rather than a single private key.
- Source: [explorer.solana.com](https://explorer.solana.com)

---

## License

Apache-2.0. See [LICENSE](./LICENSE).
