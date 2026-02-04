# Screen: Approvals Dashboard

## Purpose
Provide sequential sign-off capabilities with three levels of review, displaying data check summaries and report comments for approval decisions.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Approvals - Level 1                                  Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [View Approval History]  [Refresh]                  |
|                                                                              |
|  [ Level 1 Approval ]  [ Level 2 Approval ]  [ Level 3 Approval ]           |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Batch Status                                                                |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Report Batch: March 2026 (ID: 1234)                                   |  |
|  | Report Date: 2026-03-31                                                |  |
|  | Current Status: Awaiting Level 1 Approval                              |  |
|  | Created: 2026-03-01 09:00 by J Smith                                  |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  Workflow Progress:                                                          |
|    [✓] Create Batch → [✓] Data Preparation → [●] L1 Approval →             |
|    [ ] L2 Approval → [ ] L3 Approval → [ ] Complete                         |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Data Checks Summary                                        [View Details →]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  +-------------------+  +-------------------+  +-------------------+         |
|  | File Uploads      |  | Reference Data    |  | Calculations      |         |
|  |                   |  |                   |  |                   |         |
|  | Status: [✓]       |  | Status: [✓]       |  | Status: [✓]       |         |
|  |                   |  |                   |  |                   |         |
|  | Portfolio Files:  |  | Instruments:      |  | All calculations  |         |
|  | 51/51 Complete    |  | 0 Incomplete      |  | completed         |         |
|  |                   |  |                   |  | successfully      |         |
|  | Other Files:      |  | Index Prices:     |  |                   |         |
|  | 7/7 Complete      |  | 0 Missing         |  | Execution time:   |         |
|  |                   |  |                   |  | 12 minutes        |         |
|  | Last Updated:     |  | Credit Ratings:   |  |                   |         |
|  | 2026-03-02 16:45  |  | 0 Incomplete      |  | Completed:        |         |
|  |                   |  |                   |  | 2026-03-02 18:30  |         |
|  |                   |  | Durations:        |  |                   |         |
|  |                   |  | 0 Missing         |  |                   |         |
|  |                   |  |                   |  |                   |         |
|  |                   |  | Betas:            |  |                   |         |
|  |                   |  | 0 Missing         |  |                   |         |
|  +-------------------+  +-------------------+  +-------------------+         |
|                                                                              |
|  Report Comments                                            [View All →]    |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Showing 5 most recent comments:                                             |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | RPT-001 - Sanlam Portfolio Report                                     |  |
|  | Author: J Smith | Date: 2026-03-02 14:30                               |  |
|  |                                                                        |  |
|  | Portfolio performance exceeded benchmark by 1.2% for the quarter...   |  |
|  | [Read More]                                                            |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | RPT-002 - Portfolio Alpha Report                                      |  |
|  | Author: J Doe | Date: 2026-03-02 13:15                                 |  |
|  |                                                                        |  |
|  | Note significant cash inflows totaling R2.5M during the period...     |  |
|  | [Read More]                                                            |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | RPT-003 - Portfolio Beta Report                                       |  |
|  | Author: J Smith | Date: 2026-03-02 11:45                               |  |
|  |                                                                        |  |
|  | Duration increased from 8.2 to 8.7 due to bond market movements...    |  |
|  | [Read More]                                                            |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | RPT-006 - Risk Summary Report                                         |  |
|  | Author: J Doe | Date: 2026-03-02 10:20                                 |  |
|  |                                                                        |  |
|  | VaR metrics within tolerance levels across all portfolios...          |  |
|  | [Read More]                                                            |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | RPT-008 - Compliance Report                                           |  |
|  | Author: J Smith | Date: 2026-03-01 16:00                               |  |
|  |                                                                        |  |
|  | All limits observed this period. No breaches detected...              |  |
|  | [Read More]                                                            |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  Previous Approvals                                         [View History →]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Approval Type    | Status   | Approved By | Date/Time         | Notes  |
|  |------------------|----------|-------------|-------------------|--------|
|  | Data Preparation | Approved | J Smith     | 2026-03-02 18:45  | -      |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Approval Decision                                                           |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Please review all data checks and comments before making your decision.     |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  |  All data checks passed successfully and calculations are complete.   |  |
|  |  Ready to proceed to Level 2 approval.                                |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|                                         [Reject Batch]    [Approve Batch]    |
|                                                                              |
+------------------------------------------------------------------------------+

LEVEL 3 APPROVAL WITH REJECTION:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Approvals - Level 3                                  Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [View Approval History]  [Refresh]                  |
|                                                                              |
|  [ Level 1 Approval ]  [ Level 2 Approval ]  [ Level 3 Approval ]           |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Batch Status                                                                |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  | Report Batch: March 2026 (ID: 1234)                                   |  |
|  | Report Date: 2026-03-31                                                |  |
|  | Current Status: Awaiting Level 3 Approval (Final Sign-off)            |  |
|  | Created: 2026-03-01 09:00 by J Smith                                  |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|  Workflow Progress:                                                          |
|    [✓] Create Batch → [✓] Data Preparation → [✓] L1 Approval →             |
|    [✓] L2 Approval → [●] L3 Approval → [ ] Complete                         |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Data Checks Summary                                        [View Details →]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [Same as Level 1 - all checks passed]                                      |
|                                                                              |
|  Report Comments                                            [View All →]    |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [Same comments as Level 1]                                                  |
|                                                                              |
|  Previous Approvals                                         [View History →]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Approval Type    | Status   | Approved By | Date/Time         | Notes  |
|  |------------------|----------|-------------|-------------------|--------|
|  | Data Preparation | Approved | J Smith     | 2026-03-02 18:45  | -      |
|  | Level 1          | Approved | J Doe       | 2026-03-03 09:15  | -      |
|  | Level 2          | Approved | M Wilson    | 2026-03-03 14:30  | -      |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Approval Decision                                                           |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  This is the final approval stage. Approving will publish final reports.     |
|  Rejecting requires a reason and will return the batch to Data Preparation.  |
|                                                                              |
|  +------------------------------------------------------------------------+  |
|  |  All previous approvals completed. Ready for final sign-off.          |  |
|  +------------------------------------------------------------------------+  |
|                                                                              |
|                                         [Reject Batch]    [Approve & Publish]|
|                                                                              |
+------------------------------------------------------------------------------+

REJECTION MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Reject Batch - March 2026                                   [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Rejection Details                                                   |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch:      March 2026 (ID: 1234)                            |   |
|   |  Current Level:     Level 3 Approval                                 |   |
|   |  Rejecting User:    Jane Doe (L3 Approver)                           |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Rejection Reason*:                                                  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  Characters: 0 / 2000                                                |   |
|   |                                                                      |   |
|   |  * Required field                                                    |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Impact of Rejection:                                                |   |
|   |    • Batch will return to Data Preparation phase                     |   |
|   |    • Calculations will be cleared                                    |   |
|   |    • File uploads and maintenance screens will be re-enabled         |   |
|   |    • Previous approvals will be cleared                              |   |
|   |    • Team will be notified of rejection                              |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                 [Cancel]    [Confirm Rejection]      |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

APPROVAL CONFIRMATION MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Approve Batch - March 2026                                  [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Approval Confirmation                                               |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch:      March 2026 (ID: 1234)                            |   |
|   |  Current Level:     Level 1 Approval                                 |   |
|   |  Approving User:    John Doe (L1 Approver)                           |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Please confirm your approval:                                       |   |
|   |                                                                      |   |
|   |  [ ✓ ] I have reviewed all data checks                               |   |
|   |  [ ✓ ] I have reviewed all report comments                           |   |
|   |  [ ✓ ] I confirm the data is complete and accurate                   |   |
|   |  [ ✓ ] I approve this batch to proceed to Level 2                    |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Optional Comments:                                                  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | [Enter any additional comments for the approval log...]       |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Next Step:                                                          |   |
|   |    • Batch will advance to Level 2 Approval                          |   |
|   |    • L2 approvers will be notified                                   |   |
|   |    • File uploads and maintenance remain locked                      |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                 [Cancel]    [Confirm Approval]       |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| View Approval History | Link | Opens full approval log modal |
| Refresh | Button | Refreshes dashboard data |
| Tab Navigation | Tabs | Switch between L1, L2, L3 approval views |
| Batch Status Card | Card | Displays current batch information |
| Workflow Progress | Visual Indicator | Shows progress through approval stages |
| Data Checks Summary | Cards | Three cards showing file uploads, reference data, calculations status |
| View Details | Link | Opens Data Confirmation screen |
| Report Comments | Card List | Shows most recent 5 comments with preview |
| Read More | Link | Expands comment to show full text |
| View All | Link | Opens Report Comments screen |
| Previous Approvals | Table | Shows completed approval steps |
| View History | Link | Opens detailed approval history |
| Approve Batch | Button | Opens approval confirmation modal |
| Approve & Publish | Button | Final approval button for L3 |
| Reject Batch | Button | Opens rejection modal |
| Approval Confirmation Modal | Dialog | Confirms approval with checklist |
| Rejection Modal | Dialog | Captures rejection reason (required for L3) |
| Optional Comments | Textarea | Additional notes for approval log |
| Confirm Approval | Button | Executes approval action |
| Confirm Rejection | Button | Executes rejection and workflow reset |

## User Actions

- **Review Data Checks**: View summary cards, click "View Details" to open Data Confirmation screen
- **Review Comments**: Read comment previews, click "Read More" to expand, "View All" to see complete list
- **View Approval History**: Opens modal showing all approval/rejection events for current batch
- **Approve Batch**: Clicks Approve button, completes checklist in modal, adds optional comments, confirms approval
  - L1/L2: Advances to next approval level
  - L3: Publishes final reports and completes batch
- **Reject Batch**: Clicks Reject button, enters rejection reason (required for L3, optional for L1/L2), confirms rejection
  - Returns batch to Data Preparation phase
  - Clears calculations
  - Re-enables file uploads and maintenance screens
  - Clears previous approvals
- **Switch Approval Levels**: Tabs allow viewing different approval levels (user must have appropriate role)
- **Refresh**: Updates dashboard data in real-time

## Navigation

- **From:** Start Page, Top Navigation
- **To:** Data Confirmation, Report Comments, Start Page
