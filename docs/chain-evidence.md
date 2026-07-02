# Chain Evidence

This document records the source evidence for all data captured in this repository.

---

## Evidence 1 — Concurrent Merkle Tree

| Evidence Item | Detail |
|---|---|
| **Source File** | `IMG_4027.jpeg` |
| **Capture Time** | 08:27 EDT, 2026-07-01 |
| **Captured Via** | Solana Explorer (`explorer.solana.com`) on mobile browser |
| **Fields Captured** | Authority, Creation Slot, Max Depth, Max Buffer Size, Canopy Depth, Current Sequence Number, Current Root, Current Number of Leaves, Remaining Leaves, Max Possible Leaves |
| **Tab Viewed** | Concurrent Merkle Tree detail tab (accessible from account `More` menu) |

### Values at Time of Capture

```
Authority:                 62Jc4...hyRmr
Creation Slot:             310,204,100
Max Depth:                 24
Max Buffer Size:           64
Canopy Depth:              7
Current Sequence Number:   12,920,932
Current Root:              HqBZE...9RkyB
Current Number of Leaves:  12,825,025
Remaining Leaves:          3,952,191
Max Possible Leaves:       16,777,216
```

---

## Evidence 2 — Program Account (MplCore)

| Evidence Item | Detail |
|---|---|
| **Source File** | `IMG_4026.jpeg` |
| **Capture Time** | 08:32 EDT, 2026-07-01 |
| **Captured Via** | Solana Explorer (`explorer.solana.com`) on mobile browser |
| **Fields Captured** | Address, Balance (SOL), Executable, Executable Data, Upgradeable, Verified Build, Security.txt, Last Deployed Slot, Upgrade Authority |
| **Tabs Verified** | Program Account detail, Security tab (security.txt: Included), Verified Build tab (Program Source Verified) |

### Values at Time of Capture

```
Address:              CoREE...NhX7d
Balance (SOL):        0.001141441
Executable:           Yes
Executable Data:      9ZC25...TdGfr
Upgradeable:          Yes
Verified Build:       Program Source Verified
Security.txt:         Included
Last Deployed Slot:   427,105,234
Upgrade Authority:    bfQVv...GFubb (Program Multisig)
```

---

## Notes on Truncated Addresses

All addresses in these screenshots are displayed in truncated form (e.g. `CoREE...NhX7d`). This is standard Solana Explorer UI behavior. Full addresses can be recovered by:

1. Navigating directly to the account on `explorer.solana.com`.
2. Using Solana RPC method `getAccountInfo` with the full public key.
3. Querying the relevant program data account via `@solana/spl-account-compression` SDK.
