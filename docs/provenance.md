# Provenance

## Collection Methodology

All data in this repository was collected manually via the Solana Explorer web interface (`explorer.solana.com`) on **2026-07-01** between approximately 08:27 and 08:32 EDT.

Screenshots were taken on a mobile device and the field values were transcribed exactly as displayed in the explorer UI. No programmatic RPC queries were used at the time of initial capture. Values represent a point-in-time snapshot of the on-chain state; the Concurrent Merkle Tree's live state will have continued to change after this capture.

## Assumptions and Limitations

1. **Truncated addresses** are preserved as-is from the UI. They are not expanded or inferred.
2. **Utilization percentage** (`76.44%` in `cmt-state.json`) is computed as `12,825,025 / 16,777,216 * 100` and is a derived value, not directly displayed in the explorer.
3. **Sequence number vs. leaf count** — The sequence number (`12,920,932`) exceeds the leaf count (`12,825,025`) because sequence numbers increment on every tree operation including deletions and replacements, not just insertions.
4. **Snapshot is not live** — This repository does not auto-refresh. On-chain state will diverge from these values over time.

## Data Integrity

The canonical source of truth for all field values is the Solana blockchain itself. This repository is a human-readable audit record and compliance document, not a real-time data source.

## Maintainer

**Richard Patterson** — [`De-ASI-INTERFACE`](https://github.com/De-ASI-INTERFACE)  
Organizations: [`DeASI-INTERFACE`](https://github.com/DeASI-INTERFACE) | [`QuantumTradingInfinity`](https://github.com/QuantumTradingInfinity)  
Captured: 2026-07-01
