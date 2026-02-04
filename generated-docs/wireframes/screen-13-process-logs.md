# Screen: Process Logs

## Purpose
Provide evidence for operations teams and support debugging of workflow issues through file process logs, monthly process logs, calculation logs, and calculation errors.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Process Logs                                         Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [Export Logs]  [Refresh]                            |
|                                                                              |
|  [ File Process Logs ]  [ Monthly Process Logs ]  [ Calculation Logs ]      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  File Process Logs                                                           |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by File Name, Portfolio...]                                         |
|                                                                              |
|  File Type: [All v]  Status: [All v]  Date Range: [Last 7 Days v]           |
|                                                                              |
|  Showing: File logs for March 2026 (58 files)                  [Clear Filters]|
|                                                                              |
|  File Process Grid                                           [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | File     | Portfolio    | File Type       | Status    | Upload      | Uploaded |
|  | Log ID   |              |                 |           | Timestamp   | By       |
|  |----------|--------------|-----------------|-----------|-------------|----------|
|  | 8001     | Sanlam       | Holdings        | Complete  | 2026-03-01  | System   |
|  |          |              |                 |           | 14:30:15    |          |
|  | 8002     | Sanlam       | Transactions    | Complete  | 2026-03-01  | System   |
|  |          |              |                 |           | 14:30:45    |          |
|  | 8003     | Portfolio A  | Holdings        | Complete  | 2026-03-01  | J Smith  |
|  |          |              |                 |           | 15:20:12    |          |
|  | 8004     | Portfolio A  | Transactions    | Processing| 2026-03-02  | System   |
|  |          |              |                 |           | 08:15:30    |          |
|  | 8005     | Portfolio B  | Cash            | Complete  | 2026-03-01  | J Doe    |
|  |          |              |                 |           | 16:45:00    |          |
|  | 8006     | Portfolio C  | Inst Static     | Failed    | 2026-03-02  | J Smith  |
|  |          |              |                 |           | 09:15:22    |          |
|  | 8007     | -            | Index Prices    | Complete  | 2026-03-01  | System   |
|  |          |              |                 |           | 10:00:00    |          |
|  | 8008     | Portfolio D  | Holdings        | Complete  | 2026-03-01  | System   |
|  |          |              |                 |           | 14:35:18    |          |
|  | 8009     | Portfolio D  | Performance     | Complete  | 2026-03-01  | J Smith  |
|  |          |              |                 |           | 16:20:45    |          |
|  | 8010     | -            | Bloomberg       | Complete  | 2026-03-01  | System   |
|  |          |              | Credit Ratings  |           | 10:15:30    |          |
|                                                                              |
|  | Validation | Processing | Completion | Records   | Faults | Actions       |
|  | Status     | Time       | Time       | Processed | Count  |               |
|  |------------|------------|------------|-----------|--------|---------------|
|  | Passed     | 00:02:15   | 14:32:30   | 1,247     | 0      | [View] [Export]|
|  | Passed     | 00:01:45   | 14:32:30   | 892       | 0      | [View] [Export]|
|  | Passed     | 00:03:20   | 15:23:32   | 1,056     | 0      | [View] [Export]|
|  | In Progress| -          | -          | -         | -      | [View] [Cancel]|
|  | Passed     | 00:01:10   | 16:46:10   | 234       | 0      | [View] [Export]|
|  | Failed     | 00:00:45   | 09:16:07   | 0         | 15     | [View Faults]  |
|  | Passed     | 00:05:30   | 10:05:30   | 45        | 0      | [View] [Export]|
|  | Passed     | 00:02:05   | 14:37:23   | 1,189     | 0      | [View] [Export]|
|  | Passed     | 00:01:30   | 16:22:15   | 678       | 0      | [View] [Export]|
|  | Passed     | 00:03:15   | 10:18:45   | 312       | 0      | [View] [Export]|
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 6  [Next →]                                        |
|                                                                              |
+------------------------------------------------------------------------------+

MONTHLY PROCESS LOGS TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Process Logs                                         Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [Export Logs]  [Refresh]                            |
|                                                                              |
|  [ File Process Logs ]  [ Monthly Process Logs ]  [ Calculation Logs ]      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Monthly Process Logs                                                        |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Workflow execution history for monthly reporting batches                    |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by Event Name...]                                                   |
|                                                                              |
|  Report Batch: [March 2026 (1234) v]  Date Range: [Last 30 Days v]          |
|                                                                              |
|  Showing: Process logs for March 2026                          [Clear Filters]|
|                                                                              |
|  Monthly Process Grid                                        [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Report      | Report       | Event Name                | Executed At      |
|  | Batch ID    | Date         |                           |                  |
|  |-------------|--------------|---------------------------|------------------|
|  | 1234        | 2026-03-31   | CreateReportBatch         | 2026-03-01 09:00 |
|  | 1234        | 2026-03-31   | TransitionToDataPrep      | 2026-03-01 09:00 |
|  | 1234        | 2026-03-31   | FileUploadStarted         | 2026-03-01 14:30 |
|  | 1234        | 2026-03-31   | FileValidationComplete    | 2026-03-01 16:50 |
|  | 1234        | 2026-03-31   | AllFilesComplete          | 2026-03-02 10:30 |
|  | 1234        | 2026-03-31   | DataConfirmationPassed    | 2026-03-02 17:00 |
|  | 1234        | 2026-03-31   | RunCalculations           | 2026-03-02 18:00 |
|  | 1234        | 2026-03-31   | CalculationsSuccessful    | 2026-03-02 18:30 |
|  | 1234        | 2026-03-31   | DataPrepApproved          | 2026-03-02 18:45 |
|  | 1234        | 2026-03-31   | TransitionToL1Approval    | 2026-03-02 18:45 |
|  | 1234        | 2026-03-31   | L1Approved                | 2026-03-03 09:15 |
|  | 1234        | 2026-03-31   | TransitionToL2Approval    | 2026-03-03 09:15 |
|  | 1234        | 2026-03-31   | L2Approved                | 2026-03-03 14:30 |
|  | 1234        | 2026-03-31   | TransitionToL3Approval    | 2026-03-03 14:30 |
|  | 1234        | 2026-03-31   | L3Approved                | 2026-03-04 10:00 |
|  | 1234        | 2026-03-31   | PublishFinalReports       | 2026-03-04 10:00 |
|  | 1234        | 2026-03-31   | TransitionToComplete      | 2026-03-04 10:01 |
|                                                                              |
|  | Last Executed          | Duration  | Status    | Actions               |
|  | Activity Name          |           |           |                       |
|  |------------------------|-----------|-----------|------------------------|
|  | CreateBatchActivity    | 00:00:05  | Success   | [View Details]        |
|  | DataPrepActivity       | 00:00:02  | Success   | [View Details]        |
|  | FileUploadActivity     | 02:20:00  | Success   | [View Details]        |
|  | ValidationActivity     | 00:30:15  | Success   | [View Details]        |
|  | FileCheckActivity      | 00:05:20  | Success   | [View Details]        |
|  | ConfirmationActivity   | 00:02:10  | Success   | [View Details]        |
|  | CalculationActivity    | 00:30:00  | Success   | [View Details]        |
|  | CalcCompleteActivity   | 00:00:05  | Success   | [View Details]        |
|  | ApprovalActivity       | 00:00:03  | Success   | [View Details]        |
|  | L1TransitionActivity   | 00:00:02  | Success   | [View Details]        |
|  | L1ApprovalActivity     | 00:00:03  | Success   | [View Details]        |
|  | L2TransitionActivity   | 00:00:02  | Success   | [View Details]        |
|  | L2ApprovalActivity     | 00:00:03  | Success   | [View Details]        |
|  | L3TransitionActivity   | 00:00:02  | Success   | [View Details]        |
|  | L3ApprovalActivity     | 00:00:03  | Success   | [View Details]        |
|  | PublishActivity        | 00:00:45  | Success   | [View Details]        |
|  | CompleteActivity       | 00:00:01  | Success   | [View Details]        |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Page 1 of 1                                                                 |
|                                                                              |
+------------------------------------------------------------------------------+

CALCULATION LOGS TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Process Logs                                         Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [Export Logs]  [Refresh]                            |
|                                                                              |
|  [ File Process Logs ]  [ Monthly Process Logs ]  [ Calculation Logs ]      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Calculation Logs                                                            |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Detailed execution logs for calculation processes                           |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by Calculation Name...]                                             |
|                                                                              |
|  Status: [All v]  Report Batch: [March 2026 (1234) v]                       |
|                                                                              |
|  Showing: Calculation logs for March 2026 (12 calculations)    [Clear Filters]|
|                                                                              |
|  Calculation Logs Grid                                       [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Calc     | Calculation Name           | Status    | Start Time       | End Time |
|  | Log ID   |                            |           |                  |          |
|  |----------|----------------------------|-----------|------------------|----------|
|  | 9001     | Portfolio Valuation        | Success   | 2026-03-02 18:00 | 18:05    |
|  | 9002     | Performance Attribution    | Success   | 2026-03-02 18:05 | 18:08    |
|  | 9003     | Risk Metrics               | Success   | 2026-03-02 18:08 | 18:12    |
|  | 9004     | Asset Allocation           | Success   | 2026-03-02 18:12 | 18:15    |
|  | 9005     | Duration Analysis          | Success   | 2026-03-02 18:15 | 18:18    |
|  | 9006     | Yield Calculations         | Success   | 2026-03-02 18:18 | 18:20    |
|  | 9007     | Credit Rating Summary      | Success   | 2026-03-02 18:20 | 18:22    |
|  | 9008     | Beta Calculations          | Success   | 2026-03-02 18:22 | 18:24    |
|  | 9009     | Cashflow Projection        | Success   | 2026-03-02 18:24 | 18:26    |
|  | 9010     | Compliance Checks          | Success   | 2026-03-02 18:26 | 18:28    |
|  | 9011     | Fee Calculations           | Success   | 2026-03-02 18:28 | 18:29    |
|  | 9012     | Report Generation          | Success   | 2026-03-02 18:29 | 18:30    |
|                                                                              |
|  | Duration | Records  | Errors | Actions                                    |
|  |          | Processed| Count  |                                            |
|  |----------|----------|--------|-------------------------------------------|
|  | 00:05:12 | 15,247   | 0      | [View Details] [Export]                   |
|  | 00:03:45 | 8,456    | 0      | [View Details] [Export]                   |
|  | 00:04:20 | 12,389   | 0      | [View Details] [Export]                   |
|  | 00:03:15 | 9,234    | 0      | [View Details] [Export]                   |
|  | 00:02:50 | 3,456    | 0      | [View Details] [Export]                   |
|  | 00:02:10 | 2,890    | 0      | [View Details] [Export]                   |
|  | 00:01:45 | 1,567    | 0      | [View Details] [Export]                   |
|  | 00:02:05 | 4,234    | 0      | [View Details] [Export]                   |
|  | 00:01:55 | 6,789    | 0      | [View Details] [Export]                   |
|  | 00:02:00 | 5,678    | 0      | [View Details] [Export]                   |
|  | 00:01:20 | 1,234    | 0      | [View Details] [Export]                   |
|  | 00:00:45 | 892      | 0      | [View Details] [Export]                   |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Total Execution Time: 00:30:42 | All Calculations: Success                 |
|                                                                              |
|  Page 1 of 1                                                                 |
|                                                                              |
+------------------------------------------------------------------------------+

CALCULATION ERRORS VIEW (When errors exist):

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Calculation Errors - Portfolio Valuation                                    |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Calculation Logs]  [Export Errors]  [Retry Calculation]         |
|                                                                              |
|  Error Details                                                               |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Calculation Log ID:  9001                                                   |
|  Calculation Name:    Portfolio Valuation                                    |
|  Status:              Failed                                                 |
|  Start Time:          2026-03-02 18:00:15                                    |
|  End Time:            2026-03-02 18:02:30                                    |
|  Duration:            00:02:15                                               |
|  Records Attempted:   15,247                                                 |
|  Records Processed:   12,340                                                 |
|  Errors Encountered:  45                                                     |
|                                                                              |
|  Error Details Grid                                          [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Error  | Error     | Full Error Message                                  |
|  | ID     | Prefix    |                                                     |
|  |--------|-----------|-----------------------------------------------------|
|  | 10001  | VAL_ERR   | Missing price data for instrument BD015 on          |
|  |        |           | 2026-03-31. Cannot calculate position value.        |
|  | 10002  | VAL_ERR   | Missing price data for instrument EQ023 on          |
|  |        |           | 2026-03-31. Cannot calculate position value.        |
|  | 10003  | DIV_ZERO  | Division by zero in yield calculation for           |
|  |        |           | instrument BD018. Check maturity date.              |
|  | 10004  | VAL_ERR   | Missing price data for instrument BD022 on          |
|  |        |           | 2026-03-31. Cannot calculate position value.        |
|  | 10005  | CURR_ERR  | Currency conversion rate not found for USD/ZAR      |
|  |        |           | on 2026-03-31. Cannot convert instrument EQ034.     |
|  | 10006  | VAL_ERR   | Missing price data for instrument EQ045 on          |
|  |        |           | 2026-03-31. Cannot calculate position value.        |
|  | 10007  | DATA_ERR  | Invalid holding quantity for instrument BD012.      |
|  |        |           | Quantity cannot be negative.                        |
|  | 10008  | VAL_ERR   | Missing price data for instrument BD028 on          |
|  |        |           | 2026-03-31. Cannot calculate position value.        |
|  | 10009  | CURR_ERR  | Currency conversion rate not found for GBP/ZAR      |
|  |        |           | on 2026-03-31. Cannot convert instrument EQ056.     |
|  | 10010  | VAL_ERR   | Missing price data for instrument EQ067 on          |
|  |        |           | 2026-03-31. Cannot calculate position value.        |
|                                                                              |
|  | Timestamp         | Affected Portfolio | Actions                         |
|  |-------------------|--------------------|---------------------------------|
|  | 2026-03-02 18:01  | Portfolio Alpha    | [View Instrument]               |
|  | 2026-03-02 18:01  | Portfolio Beta     | [View Instrument]               |
|  | 2026-03-02 18:01  | Portfolio Gamma    | [View Instrument]               |
|  | 2026-03-02 18:01  | Portfolio Delta    | [View Instrument]               |
|  | 2026-03-02 18:02  | Sanlam             | [View Rates]                    |
|  | 2026-03-02 18:02  | Portfolio Epsilon  | [View Instrument]               |
|  | 2026-03-02 18:02  | Portfolio Beta     | [View Holdings]                 |
|  | 2026-03-02 18:02  | Portfolio Zeta     | [View Instrument]               |
|  | 2026-03-02 18:02  | Portfolio Alpha    | [View Rates]                    |
|  | 2026-03-02 18:02  | Portfolio Gamma    | [View Instrument]               |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 5  [Next →]                                        |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Export Logs | Button | Exports current tab's logs to Excel/CSV |
| Refresh | Button | Refreshes log data from backend |
| Tab Navigation | Tabs | Switch between File Logs, Monthly Logs, Calculation Logs |
| Search Box | Text Input | Search logs by relevant fields |
| Filter Dropdowns | Select | Filter by file type, status, date range, batch |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| File Process Grid | Data Table | Displays file upload/processing logs |
| Monthly Process Grid | Data Table | Shows workflow execution history |
| Calculation Logs Grid | Data Table | Displays calculation execution logs |
| View | Button | Opens detailed view modal |
| View Details | Button | Opens expanded log details |
| Export | Button | Exports single log entry data |
| View Faults | Button | Opens file faults/errors view |
| Cancel | Button | Cancels in-progress file processing |
| View Instrument | Link | Navigates to Instruments Maintenance for error context |
| View Holdings | Link | Navigates to relevant holdings data |
| View Rates | Link | Opens currency rates or pricing data |
| Retry Calculation | Button | Re-runs failed calculation |
| Error Details Grid | Data Table | Shows calculation errors with full messages |

## User Actions

- **View File Logs**: Default tab shows file upload and validation history with status and fault counts
- **View Monthly Logs**: Switch to Monthly Process Logs tab to see workflow execution events and transitions
- **View Calculation Logs**: Switch to Calculation Logs tab to see calculation execution with timing and status
- **View Errors**: Click "View Faults" or error count to open detailed error view with messages
- **Export Logs**: Downloads current view to Excel/CSV for offline analysis
- **Retry Calculation**: Re-executes failed calculation after fixing data issues
- **Navigate to Fix**: Click instrument/holdings/rates links to navigate to relevant fix screens
- **Search/Filter**: Real-time filtering across all log types
- **View Details**: Opens modal with expanded log information and metadata

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** Start Page, Instruments Maintenance, Holdings screens, Currency/Rates screens
