# Screen: Portfolio Imports Dashboard

## Purpose
Matrix view of all portfolio files organized by portfolio and file type, enabling quick identification of file upload status and management actions.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Portfolio Imports                                    Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [SFTP Import]  [Export Data]  [Refresh Status]      |
|                                                                              |
|  Matrix Grid - Click any icon to view/upload/manage file                    |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Portfolio  | Holdings | Trans    | Inst     | Income   | Cash     | Perf    | Mgmt    |
|             |          | actions  | Static   |          |          | ormance | Fees    |
|  -----------|----------|----------|----------|----------|----------|---------|---------|
|             |          |          |          |          |          |         |         |
|  Sanlam     |   [✓]    |   [✓]    |   [✓]    |   [✓]    |   [✓]    |   [✓]   |   [✓]   |
|             |          |          |          |          |          |         |         |
|  Portfolio  |   [✓]    |   [⟳]    |   [✓]    |   [✓]    |   [○]    |   [✓]   |   [✓]   |
|  Alpha      |          |          |          |          |          |         |         |
|             |          |          |          |          |          |         |         |
|  Portfolio  |   [✓]    |   [✓]    |   [✓]    |   [✓]    |   [✓]    |   [✓]   |   [○]   |
|  Beta       |          |          |          |          |          |         |         |
|             |          |          |          |          |          |         |         |
|  Portfolio  |   [✓]    |   [✓]    |   [✗]    |   [✓]    |   [✓]    |   [✓]   |   [✓]   |
|  Gamma      |          |          |          |          |          |         |         |
|             |          |          |          |          |          |         |         |
|  Portfolio  |   [○]    |   [○]    |   [○]    |   [○]    |   [○]    |   [○]   |   [○]   |
|  Delta      |          |          |          |          |          |         |         |
|             |          |          |          |          |          |         |         |
|  Portfolio  |   [✓]    |   [✓]    |   [✓]    |   [✓]    |   [✓]    |   [✓]   |   [✓]   |
|  Epsilon    |          |          |          |          |          |         |         |
|             |          |          |          |          |          |         |         |
|  Portfolio  |   [✓]    |   [✓]    |   [✓]    |   [⟳]    |   [✓]    |   [✓]   |   [✓]   |
|  Zeta       |          |          |          |          |          |         |         |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Legend:                                                                     |
|    [✓] Complete    [⟳] Processing    [✗] Failed    [○] Missing              |
|                                                                              |
|  Status Summary:                                                             |
|    Complete: 42 files    Processing: 3 files    Failed: 1 file              |
|    Missing: 5 files      Total: 51 files                                    |
|                                                                              |
|  Bulk Actions:                                                               |
|    [Re-import Sanlam]  [Re-import Portfolio Alpha]  [Re-import All]         |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| SFTP Import | Button | Trigger automatic import from SFTP folder |
| Export Data | Button | Export uploaded file data |
| Refresh Status | Button | Refresh file status indicators |
| Matrix Grid | Interactive Grid | Portfolio rows × file type columns with status icons |
| Status Icon [✓] | Clickable Icon | File complete - opens file detail modal |
| Status Icon [⟳] | Clickable Icon | File processing - opens status modal |
| Status Icon [✗] | Clickable Icon | File failed - opens error modal |
| Status Icon [○] | Clickable Icon | File missing - opens upload modal |
| Re-import Portfolio | Button | Re-import all files for specific portfolio |
| Re-import All | Button | Re-import all files for all portfolios |
| Status Summary | Counter | Shows file counts by status |
| Back to Dashboard | Link | Returns to start page |

## User Actions

- **Click Status Icon**: Opens File Upload Modal (Screen 4) with context for that specific portfolio/file type
- **SFTP Import**: Triggers automatic file import from configured SFTP folder, refreshes grid
- **Export Data**: Downloads uploaded file data as export file
- **Refresh Status**: Polls backend for updated file statuses
- **Re-import Portfolio**: Re-imports all file types for selected portfolio
- **Re-import All**: Re-imports all files for all portfolios (confirmation required)

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** File Upload Modal (Screen 4), Start Page, Other Imports Dashboard
