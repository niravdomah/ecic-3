# Screen: Report Comments

## Purpose
Capture commentary tied to specific reports within a reporting period for review and approval processes.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Report Comments                                      Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Comment]  [Export Comments]  [Refresh]       |
|                                                                              |
|  Search & Filter                                                             |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [Search by Report Name...]                                                  |
|                                                                              |
|  Report Batch: [March 2026 (1234)]  Report Type: [All v]                    |
|                                                                              |
|  Showing: Comments for March 2026 (18 records)                  [Clear Filters]|
|                                                                              |
|  Comments Grid                                               [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | ID   | Report        | Report Name                   | Comment Preview    |
|  |      | List ID       |                               |                    |
|  |------|---------------|-------------------------------|--------------------|
|  | 5001 | RPT-001       | Sanlam Portfolio Report       | Portfolio performa |
|  |      |               |                               | nce exceeded...    |
|  | 5002 | RPT-002       | Portfolio Alpha Report        | Note significant c |
|  |      |               |                               | ash inflows...     |
|  | 5003 | RPT-003       | Portfolio Beta Report         | Duration increased |
|  |      |               |                               |  due to...        |
|  | 5004 | RPT-004       | Portfolio Gamma Report        | Holdings reallocat |
|  |      |               |                               | ed to...          |
|  | 5005 | RPT-001       | Sanlam Portfolio Report       | Additional comment |
|  |      |               |                               |  on fees...       |
|  | 5006 | RPT-005       | Consolidated Holdings Report  | Total AUM increase |
|  |      |               |                               | d by 3.5%...      |
|  | 5007 | RPT-006       | Risk Summary Report           | VaR metrics within |
|  |      |               |                               |  tolerance...     |
|  | 5008 | RPT-007       | Performance Attribution       | Outperformance dri |
|  |      |               |                               | ven by...         |
|  | 5009 | RPT-003       | Portfolio Beta Report         | Credit rating upgr |
|  |      |               |                               | ade noted...      |
|  | 5010 | RPT-008       | Compliance Report             | All limits observe |
|  |      |               |                               | d this period...  |
|                                                                              |
|  | Report       | Report Date  | Last Changed | Last Changed | Actions       |
|  | Batch ID     |              | User         | Date         |               |
|  |--------------|--------------|--------------|--------------|---------------|
|  | 1234         | 2026-03-31   | J Smith      | 2026-03-02   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Doe        | 2026-03-02   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Smith      | 2026-03-02   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Doe        | 2026-03-01   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Smith      | 2026-03-03   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Doe        | 2026-03-02   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Smith      | 2026-03-02   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Doe        | 2026-03-02   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Smith      | 2026-03-03   | [Edit] [Del]  |
|  | 1234         | 2026-03-31   | J Doe        | 2026-03-01   | [Edit] [Del]  |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 2  [Next →]                                        |
|                                                                              |
+------------------------------------------------------------------------------+

ADD/EDIT MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Add Report Comment                                          [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Comment Details                                                     |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch*:     March 2026 (ID: 1234) - Read Only               |   |
|   |  Report Date*:      2026-03-31 - Read Only                           |   |
|   |                                                                      |   |
|   |  Report*:           [Select Report                     v ]           |   |
|   |                                                                      |   |
|   |                     Available Reports:                               |   |
|   |                     ─────────────────────────────────────            |   |
|   |                     RPT-001 - Sanlam Portfolio Report                |   |
|   |                     RPT-002 - Portfolio Alpha Report                 |   |
|   |                     RPT-003 - Portfolio Beta Report                  |   |
|   |                     RPT-004 - Portfolio Gamma Report                 |   |
|   |                     RPT-005 - Consolidated Holdings Report           |   |
|   |                     RPT-006 - Risk Summary Report                    |   |
|   |                     RPT-007 - Performance Attribution                |   |
|   |                     RPT-008 - Compliance Report                      |   |
|   |                     RPT-009 - Asset Allocation Report                |   |
|   |                     ... (more reports)                               |   |
|   |                                                                      |   |
|   |  Comment*:                                                           |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  |                                                                |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  Characters: 0 / 5000                                                |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Formatting Tips:                                                    |   |
|   |    • Use bullet points for multiple items                            |   |
|   |    • Keep comments concise and relevant to the report                |   |
|   |    • Comments will be visible to all approvers                       |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                    [Cancel]            [Save Comment]|   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

EDIT MODAL EXAMPLE:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Edit Report Comment - ID 5001                               [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Comment Details                                                     |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch*:     March 2026 (ID: 1234) - Read Only               |   |
|   |  Report Date*:      2026-03-31 - Read Only                           |   |
|   |                                                                      |   |
|   |  Report*:           [RPT-001 - Sanlam Portfolio Report v ]           |   |
|   |                                                                      |   |
|   |  Comment*:                                                           |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Portfolio performance exceeded benchmark by 1.2% for the      |  |   |
|   |  | quarter, driven primarily by:                                 |  |   |
|   |  |                                                                |  |   |
|   |  | • Overweight position in financials sector (+0.8%)            |  |   |
|   |  | • Strong performance from equity holdings (+0.5%)             |  |   |
|   |  | • Successful duration management in fixed income (-0.1%)      |  |   |
|   |  |                                                                |  |   |
|   |  | Key considerations for next period:                           |  |   |
|   |  | - Monitor inflation impact on bond holdings                   |  |   |
|   |  | - Review currency hedging strategy                            |  |   |
|   |  | - Assess potential rebalancing needs                          |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  Characters: 487 / 5000                                              |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Last Modified: 2026-03-02 14:30 by J Smith                          |   |
|   |  Created: 2026-03-02 09:15 by J Smith                                |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                             [Delete]  [Cancel]  [Save Changes]       |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

VIEW COMMENT DETAIL (Click on row expands inline):

+------------------------------------------------------------------------------+
|  | ID   | Report        | Report Name                   | Comment Preview    |
|  |      | List ID       |                               |                    |
|  |------|---------------|-------------------------------|--------------------|
|  | 5001 | RPT-001       | Sanlam Portfolio Report       | Portfolio performa |
|  |      |               |                               | nce exceeded...    |
|  +--------------------------------------------------------------------------+
|  | Full Comment:                                                           |
|  |                                                                         |
|  | Portfolio performance exceeded benchmark by 1.2% for the quarter,       |
|  | driven primarily by:                                                    |
|  |                                                                         |
|  | • Overweight position in financials sector (+0.8%)                      |
|  | • Strong performance from equity holdings (+0.5%)                       |
|  | • Successful duration management in fixed income (-0.1%)                |
|  |                                                                         |
|  | Key considerations for next period:                                     |
|  | - Monitor inflation impact on bond holdings                             |
|  | - Review currency hedging strategy                                      |
|  | - Assess potential rebalancing needs                                    |
|  |                                                                         |
|  | Created: 2026-03-02 09:15 by J Smith                                    |
|  | Last Modified: 2026-03-02 14:30 by J Smith                              |
|  |                                                                         |
|  | [Collapse]                                                              |
|  +--------------------------------------------------------------------------+
|  | 5002 | RPT-002       | Portfolio Alpha Report        | Note significant c |
|  |      |               |                               | ash inflows...     |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Add Comment | Button | Opens modal to add new comment |
| Export Comments | Button | Exports all comments to Excel/PDF |
| Refresh | Button | Refreshes grid data from backend |
| Search Box | Text Input | Search by report name |
| Filter Dropdowns | Select | Filter by report batch and report type |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Comments Grid | Data Table | Displays all report comments for current batch |
| Comment Preview | Text | Truncated preview of comment (first 20 chars) |
| Row Click/Expand | Interaction | Click row to expand and view full comment inline |
| Edit | Button | Opens edit modal for selected comment |
| Del (Delete) | Button | Removes comment (with confirmation) |
| Add/Edit Modal | Dialog | Form to create or update comment |
| Report Dropdown | Select | Choose from available reports in batch |
| Comment Text Area | Textarea | Large text field for comment entry (5000 char limit) |
| Character Counter | Counter | Shows characters used / limit |
| Save Comment | Button | Saves new or updated comment |
| Delete (in modal) | Button | Removes comment from within edit modal |

## User Actions

- **Add Comment**: Opens blank modal, user selects report, enters comment text, clicks Save Comment
- **Edit Comment**: Opens pre-populated modal with existing comment, user modifies, clicks Save Changes
- **Delete Comment**: Prompts confirmation, removes comment from batch
- **View Full Comment**: Click on grid row to expand inline and view complete comment text
- **Collapse Comment**: Click "Collapse" to hide expanded comment view
- **Export Comments**: Downloads all comments for current batch to Excel or PDF for offline review
- **Search/Filter**: Real-time filtering of grid based on search terms and dropdown selections
- **Select Report**: Dropdown shows all reports defined in Report List for current batch

## Navigation

- **From:** Start Page, Approvals Dashboard, Top Navigation
- **To:** Start Page, Approvals Dashboard
