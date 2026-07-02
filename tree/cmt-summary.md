# Concurrent Merkle Tree — Capacity Summary

**Captured:** 2026-07-01 at 08:27 EDT  
**Cluster:** Mainnet-Beta  
**Authority:** `62Jc4...hyRmr`

---

## Capacity Utilization

| Metric | Value |
|---|---|
| Max Possible Leaves | 16,777,216 |
| Current Leaves Used | 12,825,025 |
| Remaining Leaves | 3,952,191 |
| **Utilization** | **~76.44%** |

At the time of capture, this tree has consumed approximately **76.44% of its total leaf capacity**. With ~3.95 million leaves remaining, the tree retains meaningful operational headroom. However, given a sequence number of **12,920,932**, the tree has been active over a substantial number of write operations, suggesting consistent production-level usage.

## Tree Configuration

| Parameter | Value | Notes |
|---|---|---|
| Max Depth | 24 | Supports up to 2^24 = 16,777,216 leaves |
| Max Buffer Size | 64 | Concurrent changelog buffer; supports 64 concurrent proof-based writes per slot |
| Canopy Depth | 7 | Top 7 levels of the tree are stored on-chain; reduces proof size for leaf operations |

## Interpretation

A `max_depth` of 24 is a large production-grade tree on Solana. The `canopy_depth` of 7 means that only the bottom 17 levels require off-chain proof data, which is a standard optimization to reduce transaction size and cost for compressed NFT or state compression operations. The `max_buffer_size` of 64 allows up to 64 concurrent writes to be fast-forwarded within the same slot, which is critical for high-throughput applications.

With over 12.8 million leaves and a sequence number exceeding 12.9 million, this tree is a mature, high-usage production asset.
