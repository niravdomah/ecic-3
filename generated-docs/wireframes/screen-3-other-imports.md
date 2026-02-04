# Screen: Other Imports Dashboard

## Purpose
Manage non-portfolio-specific files such as index data, Bloomberg feeds, and custodian files in a simplified list format.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Other Imports                                        Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [SFTP Import]  [Export Data]  [Refresh Status]      |
|                                                                              |
|  File Type                                    Status        Actions          |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Monthly Index Files                          [✓]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Index price data files for March 2026 reporting period   |  |
|  | Last Updated: 2026-03-01 14:30 by System                              |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Bloomberg Credit Ratings                     [✓]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Credit rating data from Bloomberg                         |  |
|  | Last Updated: 2026-03-01 10:15 by Jane Smith                          |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Bloomberg Holdings                           [⟳]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Holdings data from Bloomberg                              |  |
|  | Last Updated: 2026-03-02 08:00 by System (Processing...)              |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Custodian Files - Holdings                   [✓]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Holdings data from custodian                              |  |
|  | Last Updated: 2026-03-01 16:45 by John Smith                          |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Custodian Files - Transactions               [✗]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Transaction data from custodian                           |  |
|  | Last Updated: 2026-03-02 09:00 by System (Failed - 12 errors)         |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Custodian Files - Cash                       [✓]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Cash position data from custodian                         |  |
|  | Last Updated: 2026-03-01 16:50 by John Smith                          |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Custodian Files - Fees                       [○]      [View Details]  |  |
|  |                                                                        |  |
|  | Description: Fee data from custodian                                   |  |
|  | Status: Not yet uploaded                                               |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Legend:                                                                     |
|    [✓] Complete    [⟳] Processing    [✗] Failed    [○] Missing              |
|                                                                              |
|  Status Summary:                                                             |
|    Complete: 4 files    Processing: 1 file    Failed: 1 file                |
|    Missing: 1 file      Total: 7 files                                      |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| SFTP Import | Button | Trigger automatic import from SFTP folder |
| Export Data | Button | Export uploaded file data |
| Refresh Status | Button | Refresh file status indicators |
| File Row | Interactive Card | Displays file type, description, status, and metadata |
| Status Icon [✓] | Clickable Icon | File complete |
| Status Icon [⟳] | Clickable Icon | File processing |
| Status Icon [✗] | Clickable Icon | File failed |
| Status Icon [○] | Clickable Icon | File missing |
| View Details | Button | Opens File Upload Modal for this file type |
| Back to Dashboard | Link | Returns to start page |
| Status Summary | Counter | Shows file counts by status |

## User Actions

- **Click Status Icon or View Details**: Opens File Upload Modal (Screen 4) with context for that specific file type
- **SFTP Import**: Triggers automatic file import from configured SFTP folder
- **Export Data**: Downloads uploaded file data as export file
- **Refresh Status**: Polls backend for updated file statuses

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation, Portfolio Imports Dashboard
- **To:** File Upload Modal (Screen 4), Start Page, Portfolio Imports Dashboard
