# Security Policy

## Supported Versions

This repository contains a compliance snapshot of on-chain Solana accounts. The snapshot itself is immutable at time of capture; however, the repository contents and associated scripts are maintained.

| Component | Supported |
|---|---|
| Repository metadata and scripts | ✅ Yes |
| On-chain program (`CoREE...NhX7d`) | ✅ Yes (Verified Build, Program Multisig governance) |
| Concurrent Merkle Tree account | ✅ Yes (Authority: `62Jc4...hyRmr`) |

## Reporting a Vulnerability

If you discover a security issue related to:

- **This repository** (e.g. incorrect data, compromised scripts, or exposed keys): Please open a [Security Report Issue](./.github/ISSUE_TEMPLATE/security_report.md) or contact the maintainer directly.
- **The on-chain Solana program** (`CoREE...NhX7d`): Refer to the on-chain `security.txt` which is confirmed **Included** and verified by Solana Explorer. The program upgrade authority is a Program Multisig (`bfQVv...GFubb`), meaning any critical patch requires multi-party governance approval.
- **The Concurrent Merkle Tree** (Authority: `62Jc4...hyRmr`): Contact the authority key holder directly.

## Response Timeline

- **Acknowledgement:** Within 48 hours
- **Initial Assessment:** Within 5 business days
- **Resolution Target:** Within 30 days for critical issues

## Contact

- GitHub: [@De-ASI-INTERFACE](https://github.com/De-ASI-INTERFACE)
- Organization: [@DeASI-INTERFACE](https://github.com/DeASI-INTERFACE) | [@QuantumTradingInfinity](https://github.com/QuantumTradingInfinity)
