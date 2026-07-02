#!/usr/bin/env python3
"""
validate_snapshot.py

Validates that all required fields are present and non-null in the CMT and
program metadata JSON files. Exits with code 1 if any field is missing.
"""

import json
import sys
from pathlib import Path

REQUIRED_CMT_FIELDS = [
    "asset_type",
    "cluster",
    "source",
    "captured_at",
    "captured_from_file",
    "captured_by",
    "authority",
    "creation_slot",
    "max_depth",
    "max_buffer_size",
    "canopy_depth",
    "current_sequence_number",
    "current_root",
    "current_number_of_leaves",
    "remaining_leaves",
    "max_possible_leaves",
]

REQUIRED_PROGRAM_FIELDS = [
    "asset_type",
    "cluster",
    "source",
    "captured_at",
    "captured_from_file",
    "captured_by",
    "address",
    "balance_sol",
    "executable",
    "executable_data",
    "upgradeable",
    "verified_build",
    "verified_build_status",
    "security_txt_included",
    "last_deployed_slot",
    "upgrade_authority",
    "upgrade_authority_type",
]

def validate_file(path: Path, required_fields: list[str]) -> bool:
    print(f"\nValidating: {path}")
    if not path.exists():
        print(f"  ERROR: File not found: {path}")
        return False
    with open(path) as f:
        data = json.load(f)
    missing = [field for field in required_fields if field not in data or data[field] is None]
    if missing:
        for field in missing:
            print(f"  MISSING FIELD: {field}")
        return False
    print(f"  OK: All {len(required_fields)} required fields present.")
    return True

def main():
    base = Path(__file__).parent.parent
    results = [
        validate_file(base / "tree" / "cmt-metadata.json", REQUIRED_CMT_FIELDS),
        validate_file(base / "program" / "program-metadata.json", REQUIRED_PROGRAM_FIELDS),
    ]
    if all(results):
        print("\nAll snapshots valid.")
        sys.exit(0)
    else:
        print("\nValidation FAILED. One or more required fields are missing.")
        sys.exit(1)

if __name__ == "__main__":
    main()
