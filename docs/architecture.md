# Architecture

## What Is a Solana Concurrent Merkle Tree?

A Concurrent Merkle Tree (CMT) is a specialized on-chain data structure used in Solana's state compression system. It enables storing a cryptographic commitment (the root) to an arbitrarily large set of data items (leaves) on-chain, while keeping the actual leaf data off-chain or compressed. This is the foundational technology behind compressed NFTs and generalized state compression on Solana.

Key parameters:
- **Max Depth** — Determines the maximum number of leaves: `2^max_depth`. At depth 24, this tree supports up to `16,777,216` leaves.
- **Max Buffer Size** — The number of concurrent changelog entries stored on-chain. A buffer of 64 means up to 64 concurrent proof-based writes can be safely processed within the same slot.
- **Canopy Depth** — The number of top-level tree nodes stored on-chain. Higher canopy depth reduces the off-chain proof data needed to verify a leaf, at the cost of additional on-chain storage.

## How This Repo Relates to the On-Chain Accounts

This repository documents two related but distinct accounts:

### 1. Program Account (`CoREE...NhX7d`)
This is the MplCore program account. It is the executable Solana program that governs the behavior of associated token or NFT accounts. The program is:
- **Verified** — source code has been linked and confirmed via Solana's verified build infrastructure.
- **Upgradeable** — the program binary can be updated by the upgrade authority.
- **Governed by multisig** — the upgrade authority (`bfQVv...GFubb`) is a Program Multisig, meaning upgrades require multiple signers.

### 2. Concurrent Merkle Tree Account (Authority: `62Jc4...hyRmr`)
This is a CMT account associated with the above program ecosystem. It is the storage backbone for compressed assets. The authority key (`62Jc4...hyRmr`) controls the tree and must sign any administrative operations.

## Repository Layout Rationale

```
tree/          — all CMT-specific snapshot data
program/       — program account metadata and verification records
docs/          — human-readable evidence, provenance, and architecture
scripts/       — validation and RPC export tooling
.github/       — CI workflows and issue/PR templates
```

This separation ensures that program-level data and tree-level data are independently auditable and that neither contaminates the other in compliance workflows.
