# Contributing

Thank you for your interest in contributing to this repository.

## Ground Rules

1. **Do not remove or alter any snapshot field.** The core value of this repository is completeness. Any PR that removes a field from `cmt-metadata.json`, `cmt-state.json`, or `program-metadata.json` without a documented on-chain justification will be rejected.
2. **All chain-derived data must be cited.** If you add or update a value, link to the Solana Explorer transaction or account page that supports the change.
3. **Scripts must remain idempotent.** Validation and export scripts should produce the same output for the same on-chain state.
4. **No private keys, RPC credentials, or wallet keypairs** may be committed to this repository under any circumstances.

## Workflow

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-update`
3. Make changes and run `python scripts/validate_snapshot.py` to confirm no fields are missing.
4. Open a pull request using the provided PR template.
5. A maintainer will review within 5 business days.

## Reporting Issues

Use the GitHub Issue templates in `.github/ISSUE_TEMPLATE/`.
