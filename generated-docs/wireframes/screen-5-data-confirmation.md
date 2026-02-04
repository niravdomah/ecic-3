# Screen: Data Confirmation

## Purpose
Consolidated view to verify that all required data is complete and valid before proceeding to approvals, with direct navigation to fix screens when issues are detected.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Data Confirmation                                    Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [Refresh All Checks]  [Export Summary]              |
|                                                                              |
|  [ Main File Checks ]  [ Other Checks ]  [ Portfolio Re-imports ]           |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Main File Checks                                                            |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Overall Status: [⚠ 3 Portfolios with Issues]                               |
|                                                                              |
|  Portfolio Manager Data                                          [Expand All]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Portfolio   | Holdings | Trans   | Inst    | Income  | Cash    | Perf    | Mgmt    |
|              |          | actions | Static  |         |         | ormance | Fees    |
|  ------------|----------|---------|---------|---------|---------|---------|---------|
|  Sanlam      |   [✓]    |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |
|  Portfolio   |   [✓]    |   [✓]   |   [✓]   |   [✓]   |   [✗]   |   [✓]   |   [✓]   |
|  Alpha       |          |         |         |         |         |         |         |
|  Portfolio   |   [✓]    |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |
|  Beta        |          |         |         |         |         |         |         |
|  Portfolio   |   [✓]    |   [✓]   |   [✗]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |
|  Gamma       |          |         |         |         |         |         |         |
|  Portfolio   |   [✗]    |   [✗]   |   [✗]   |   [✗]   |   [✗]   |   [✗]   |   [✗]   |
|  Delta       |          |         |         |         |         |         |         |
|  Portfolio   |   [✓]    |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |
|  Epsilon     |          |         |         |         |         |         |         |
|  Portfolio   |   [✓]    |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |   [✓]   |
|  Zeta        |          |         |         |         |         |         |         |
|                                                                              |
|  → Click [✗] to navigate to File Uploads screen                             |
|                                                                              |
|  Custodian Data                                                  [Expand All]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Portfolio   | Custodian | Custodian      | Custodian | Custodian |         |
|              | Holdings  | Transactions   | Cash      | Fees      |         |
|  ------------|-----------|----------------|-----------|-----------|         |
|  Sanlam      |   [✓]     |      [✓]       |    [✓]    |    [✓]    |         |
|  Portfolio   |   [✓]     |      [✓]       |    [✓]    |    [✓]    |         |
|  Alpha       |           |                |           |           |         |
|  Portfolio   |   [✓]     |      [✓]       |    [✓]    |    [✓]    |         |
|  Beta        |           |                |           |           |         |
|  Portfolio   |   [✓]     |      [✗]       |    [✓]    |    [✗]    |         |
|  Gamma       |           |                |           |           |         |
|  Portfolio   |   [✗]     |      [✗]       |    [✗]    |    [✗]    |         |
|  Delta       |           |                |           |           |         |
|  Portfolio   |   [✓]     |      [✓]       |    [✓]    |    [✓]    |         |
|  Epsilon     |           |                |           |           |         |
|  Portfolio   |   [✓]     |      [✓]       |    [✓]    |    [✓]    |         |
|  Zeta        |           |                |           |           |         |
|                                                                              |
|  Bloomberg Holdings                                              [Expand All]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Portfolio              | Bloomberg Holdings |                               |
|  ------------------------|--------------------|                               |
|  Sanlam                 |        [✓]         |                               |
|  Portfolio Alpha        |        [✓]         |                               |
|  Portfolio Beta         |        [✓]         |                               |
|  Portfolio Gamma        |        [✓]         |                               |
|  Portfolio Delta        |        [✗]         |                               |
|  Portfolio Epsilon      |        [✓]         |                               |
|  Portfolio Zeta         |        [✓]         |                               |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Wireframe (Other Checks Tab)
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Data Confirmation                                    Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [Refresh All Checks]  [Export Summary]              |
|                                                                              |
|  [ Main File Checks ]  [ Other Checks ]  [ Portfolio Re-imports ]           |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Other Checks Summary                                                        |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Overall Status: [⚠ 4 Data Types with Incomplete Records]                   |
|                                                                              |
|  Reference Data Completeness                                                 |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Index Prices Incomplete                                                |  |
|  |                                                                        |  |
|  | Status: [⚠]  Count: 8 missing prices                                  |  |
|  |                                                                        |  |
|  | Description: 8 indexes are missing prices for the current batch       |  |
|  |                                                                        |  |
|  | [Go to Index Prices Maintenance →]                                    |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Instruments Incomplete                                                 |  |
|  |                                                                        |  |
|  | Status: [⚠]  Count: 15 incomplete instruments                         |  |
|  |                                                                        |  |
|  | Description: 15 instruments have missing or invalid data              |  |
|  |                                                                        |  |
|  | [Go to Instruments Maintenance →]                                     |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Credit Ratings Incomplete                                              |  |
|  |                                                                        |  |
|  | Status: [✓]  Count: 0 missing ratings                                 |  |
|  |                                                                        |  |
|  | Description: All instruments have complete credit ratings             |  |
|  |                                                                        |  |
|  | [Go to Credit Ratings Maintenance →]                                  |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Instrument Durations Incomplete                                        |  |
|  |                                                                        |  |
|  | Status: [⚠]  Count: 23 missing duration entries                       |  |
|  |                                                                        |  |
|  | Description: 23 instruments missing duration/YTM data for this batch  |  |
|  |                                                                        |  |
|  | [Go to Durations & YTM Maintenance →]                                 |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Instrument Betas Incomplete                                            |  |
|  |                                                                        |  |
|  | Status: [⚠]  Count: 12 missing beta entries                           |  |
|  |                                                                        |  |
|  | Description: 12 instruments missing beta values for this batch        |  |
|  |                                                                        |  |
|  | [Go to Instrument Betas Maintenance →]                                |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Refresh All Checks | Button | Re-runs all data completeness checks |
| Export Summary | Button | Exports check results to Excel/PDF |
| Tab Navigation | Tabs | Switch between Main File Checks, Other Checks, Portfolio Re-imports |
| Portfolio Grid | Data Grid | Matrix showing file completeness by portfolio and file type |
| Status Icon [✓] | Indicator | Data complete (green) |
| Status Icon [✗] | Clickable Link | Data incomplete (red) - click to go to fix screen |
| Status Icon [⚠] | Warning Indicator | Issues detected (yellow) |
| Expand All | Link | Expands all collapsed sections |
| Check Summary Card | Card | Displays check type, count, and navigation link |
| Go to Maintenance | Link | Navigate to specific maintenance screen to resolve issues |
| Overall Status Banner | Alert | Shows high-level summary of issues |

## User Actions

- **Click [✗] Icon in Grid**: Navigates to File Uploads screen filtered to that portfolio/file type
- **Go to Maintenance Link**: Opens specific maintenance screen (Instruments, Index Prices, etc.) to resolve incomplete data
- **Refresh All Checks**: Re-polls backend to update all check statuses in real-time
- **Export Summary**: Downloads comprehensive report of all checks and their status
- **Switch Tabs**: View different categories of checks (files vs. reference data vs. re-imports)

## Navigation

- **From:** Start Page, Top Navigation
- **To:** Portfolio Imports, Other Imports, Instruments Maintenance, Index Prices Maintenance, Durations & YTM Maintenance, Instrument Betas Maintenance, Credit Ratings Maintenance, Start Page
