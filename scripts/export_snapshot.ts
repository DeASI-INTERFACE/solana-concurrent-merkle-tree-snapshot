/**
 * export_snapshot.ts
 *
 * Scaffold for re-exporting the Concurrent Merkle Tree state from Solana RPC.
 * Replace TREE_ADDRESS and RPC_ENDPOINT with actual values before running.
 *
 * Install deps: npm install @solana/web3.js @solana/spl-account-compression
 * Run: npx ts-node scripts/export_snapshot.ts
 */

import { Connection, PublicKey } from "@solana/web3.js";
import { ConcurrentMerkleTreeAccount } from "@solana/spl-account-compression";
import * as fs from "fs";

const RPC_ENDPOINT = process.env.RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com";
const TREE_ADDRESS = process.env.TREE_ADDRESS ?? "REPLACE_WITH_FULL_TREE_ADDRESS";

async function main() {
  const connection = new Connection(RPC_ENDPOINT, "confirmed");
  const treeKey = new PublicKey(TREE_ADDRESS);

  console.log(`Fetching CMT account: ${TREE_ADDRESS}`);
  const account = await ConcurrentMerkleTreeAccount.fromAccountAddress(connection, treeKey);

  const snapshot = {
    asset_type: "solana_concurrent_merkle_tree",
    cluster: "mainnet-beta",
    source: RPC_ENDPOINT,
    captured_at: new Date().toISOString(),
    captured_by: "export_snapshot.ts",
    authority: account.getAuthority().toBase58(),
    max_depth: account.getMaxDepth(),
    max_buffer_size: account.getMaxBufferSize(),
    canopy_depth: account.getCanopyDepth(),
    current_sequence_number: account.getCurrentSeq().toString(),
    current_root: Buffer.from(account.getCurrentRoot()).toString("hex"),
    current_number_of_leaves: account.getCurrentLeafCount(),
    max_possible_leaves: Math.pow(2, account.getMaxDepth()),
    remaining_leaves: Math.pow(2, account.getMaxDepth()) - account.getCurrentLeafCount(),
  };

  const outPath = "tree/cmt-state-live.json";
  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2));
  console.log(`Snapshot written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
