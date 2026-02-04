# Screen: Start Page

## Purpose
High-level entry point for users to create new report batches, monitor current batch status, and access key system functions.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Current Batch Status                                       [Create New Batch]|
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Report Batch: March 2026 (ID: 1234)                                   |  |
|  | Status: Data Preparation                                              |  |
|  | Created: 2026-03-01 09:00 by John Smith                              |  |
|  +------------------------------------------------------------------------+  |
|  |                                                                        |  |
|  | Workflow Progress:                                                     |  |
|  |   [✓] Create Batch → [●] Data Preparation → [ ] L1 Approval →        |  |
|  |   [ ] L2 Approval → [ ] L3 Approval → [ ] Complete                    |  |
|  |                                                                        |  |
|  | Quick Status:                                                          |  |
|  |   Portfolio Files: 23/28 Complete                                     |  |
|  |   Other Files: 4/4 Complete                                           |  |
|  |   Data Checks: 3 Issues Pending                                       |  |
|  |                                                                        |  |
|  | Actions:                                                               |  |
|  |   [Go to Data Confirmation]  [View File Uploads]  [View Logs]         |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  Quick Navigation                                                            |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  +-------------------+  +-------------------+  +-------------------+         |
|  | Data Confirmation |  | File Uploads      |  | Instruments       |         |
|  |                   |  |                   |  |                   |         |
|  | View completeness |  | Upload portfolio  |  | Manage instrument |         |
|  | checks and issues |  | and other files   |  | master data       |         |
|  |                   |  |                   |  |                   |         |
|  | [Open →]          |  | [Open →]          |  | [Open →]          |         |
|  +-------------------+  +-------------------+  +-------------------+         |
|                                                                              |
|  +-------------------+  +-------------------+  +-------------------+         |
|  | Index Prices      |  | Approvals         |  | Process Logs      |         |
|  |                   |  |                   |  |                   |         |
|  | Manage index      |  | Review and        |  | View file and     |         |
|  | price data        |  | approve batches   |  | calculation logs  |         |
|  |                   |  |                   |  |                   |         |
|  | [Open →]          |  | [Open →]          |  | [Open →]          |         |
|  +-------------------+  +-------------------+  +-------------------+         |
|                                                                              |
|  Batch History                                                [View All →]  |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Date         | Batch ID | Status    | Approved By      | Actions      |  |
|  |--------------|----------|-----------|------------------|--------------|  |
|  | 2026-02-28   | 1233     | Complete  | Jane Doe (L3)    | [View]       |  |
|  | 2026-02-21   | 1232     | Complete  | Jane Doe (L3)    | [View]       |  |
|  | 2026-02-14   | 1231     | Complete  | John Smith (L3)  | [View]       |  |
|  | 2026-02-07   | 1230     | Complete  | Jane Doe (L3)    | [View]       |  |
|  | 2026-01-31   | 1229     | Complete  | John Smith (L3)  | [View]       |  |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Create New Batch | Button | Initiates a new weekly or monthly report batch |
| Current Batch Status | Card | Displays active batch information and progress |
| Workflow Progress | Visual Indicator | Shows current position in workflow with checkmarks |
| Quick Status | Summary | Shows file upload and data check status counts |
| Go to Data Confirmation | Button | Navigate to data confirmation screen |
| View File Uploads | Button | Navigate to file upload screens |
| View Logs | Button | Navigate to process logs |
| Quick Navigation Cards | Link Cards | Fast access to key maintenance screens |
| Batch History Table | Data Grid | Shows recent completed batches |
| View All | Link | Opens full batch history view |

## User Actions

- **Create New Batch**: Opens dialog to create new weekly/monthly batch, sets up tasks, transitions to Data Preparation phase
- **Go to Data Confirmation**: Navigates to data confirmation screen to view completeness checks
- **View File Uploads**: Opens portfolio or other imports dashboard
- **View Logs**: Opens process logs screen
- **Open Quick Navigation Card**: Navigates to selected maintenance screen
- **View Batch History**: Opens historical batch details (read-only)
- **View All History**: Opens paginated view of all batches

## Navigation

- **From:** Login/Home (default landing page)
- **To:** Data Confirmation, File Uploads, Instruments Maintenance, Index Prices, Approvals, Process Logs, Batch History Detail
