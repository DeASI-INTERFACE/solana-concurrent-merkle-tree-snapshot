# Changelog

All notable changes to this repository will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] - 2026-07-01

### Added
- Initial compliant repository structure
- `tree/cmt-metadata.json` — full Concurrent Merkle Tree snapshot (Mainnet-Beta)
  - Authority: `62Jc4...hyRmr`
  - Creation Slot: `310,204,100`
  - Max Depth: `24`, Max Buffer Size: `64`, Canopy Depth: `7`
  - Sequence Number: `12,920,932`
  - Current Root: `HqBZE...9RkyB`
  - Leaves: `12,825,025` used / `16,777,216` max
- `tree/cmt-state.json` — normalized machine-readable state record
- `tree/cmt-summary.md` — human-readable capacity and utilization summary
- `program/program-metadata.json` — MplCore program account snapshot
  - Address: `CoREE...NhX7d`
  - Balance: `0.001141441 SOL`
  - Verified Build: `Program Source Verified`
  - Security.txt: `Included`
  - Last Deployed Slot: `427,105,234`
  - Upgrade Authority: `bfQVv...GFubb` (Program Multisig)
- `program/verified-build.json` — build verification metadata
- `program/security-metadata.json` — on-chain security posture record
- `docs/chain-evidence.md` — evidence linkage to source screenshots
- `docs/provenance.md` — capture methodology and assumptions
- `docs/architecture.md` — repository and on-chain architecture explanation
- `scripts/validate_snapshot.py` — field completeness validator
- `scripts/export_snapshot.ts` — RPC-based snapshot re-export scaffold
- `.github/workflows/validate.yml` — CI validation on every PR
- Issue templates and PR template
- `SECURITY.md`, `security.txt`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`
