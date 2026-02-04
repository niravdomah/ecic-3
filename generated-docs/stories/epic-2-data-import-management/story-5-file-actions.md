# Story: File Actions - SFTP Import & Bulk Operations

**Epic:** Data Import Management | **Story:** 5 of 5 | **Wireframe:** screen-2-portfolio-imports.md, screen-3-other-imports.md, screen-4-file-upload-modal.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | N/A (component only) |
| **Target File** | Multiple files (dashboards and modal) |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** to perform bulk file operations and manage individual file actions **So that** I can efficiently import, export, retry, and cancel files.

## Acceptance Criteria

### Happy Path - SFTP Import (Dashboard)
- [ ] Given I am on Portfolio Imports or Other Imports page, when I click "SFTP Import", then a confirmation dialog appears: "Import files from SFTP folder? This will process all pending files."
- [ ] Given the SFTP Import confirmation dialog is open, when I click "Confirm", then the API call triggers and a loading indicator appears
- [ ] Given the SFTP Import succeeds, when the operation completes, then I see a success message "SFTP import completed successfully" and the dashboard refreshes
- [ ] Given the dashboard refreshes after SFTP Import, when I view the status icons, then newly imported files show updated statuses

### Happy Path - Refresh Status (Dashboard)
- [ ] Given I am on Portfolio Imports or Other Imports page, when I click "Refresh Status", then the page re-fetches file data from the API
- [ ] Given the Refresh Status succeeds, when the data loads, then status icons update to reflect current file states
- [ ] Given the Refresh Status is in progress, when I view the button, then it shows a loading spinner and is disabled

### Happy Path - Export Current File (Modal)
- [ ] Given the File Upload Modal is open for a Complete file, when I click "Export Current File", then the file downloads via API
- [ ] Given the file export succeeds, when the download completes, then the file is saved with its original name (e.g., "sanlam_holdings_202603.csv")
- [ ] Given the file export is in progress, when I view the button, then it shows a loading state

### Happy Path - Retry Validation (Modal)
- [ ] Given the File Upload Modal is open for a Failed file, when I click "Retry Validation", then a confirmation dialog appears: "Retry validation for this file? This will re-run validation rules."
- [ ] Given the Retry Validation confirmation dialog is open, when I click "Confirm", then the API call triggers and a loading indicator appears in the modal
- [ ] Given the Retry Validation succeeds, when the operation completes, then the modal closes and the dashboard refreshes to show updated status

### Happy Path - Cancel File (Modal)
- [ ] Given the File Upload Modal is open for any file with status Complete, Processing, or Failed, when I click "Cancel File", then a confirmation dialog appears: "Cancel this file? This will remove it from the batch and reset status to Missing."
- [ ] Given the Cancel File confirmation dialog is open, when I click "Confirm", then the API call triggers and a loading indicator appears in the modal
- [ ] Given the Cancel File succeeds, when the operation completes, then the modal closes and the dashboard refreshes to show status icon as ○ (Missing)

### Happy Path - Re-import Portfolio (Portfolio Imports Only)
- [ ] Given I am on the Portfolio Imports page, when I view bulk actions, then I see "Re-import {PortfolioName}" buttons for each portfolio
- [ ] Given I click a "Re-import {PortfolioName}" button, when the button is clicked, then a confirmation dialog appears: "Re-import all files for {PortfolioName}? This will re-process all file types for this portfolio."
- [ ] Given the Re-import confirmation dialog is open, when I click "Confirm", then the API call triggers and a loading indicator appears
- [ ] Given the Re-import succeeds, when the operation completes, then I see a success message "Re-import initiated for {PortfolioName}" and the dashboard refreshes

### Happy Path - Export Data (Dashboard)
- [ ] Given I am on Portfolio Imports or Other Imports page, when I click "Export Data", then a confirmation dialog appears: "Export all uploaded file data? This may take a moment for large datasets."
- [ ] Given the Export Data confirmation dialog is open, when I click "Confirm", then the export initiates and a loading indicator appears
- [ ] Given the export succeeds, when the download completes, then a file is saved with name "portfolio_imports_export_{timestamp}.xlsx" or "other_imports_export_{timestamp}.xlsx"

### Edge Cases
- [ ] Given the SFTP Import finds no new files, when the operation completes, then I see a message "No new files found in SFTP folder"
- [ ] Given I click "Cancel File" on a Missing file, when the modal opens, then the "Cancel File" button is disabled
- [ ] Given I initiate multiple actions simultaneously, when operations are in progress, then all action buttons are disabled until completion
- [ ] Given a Re-import operation is running, when I view the dashboard, then the affected portfolio's status icons show ⟳ (Processing)

### Error Handling
- [ ] Given the SFTP Import API call fails, when the operation fails, then I see an error message "SFTP import failed: {error message from API}"
- [ ] Given the Export Current File API call fails, when I click "Export Current File", then I see an error message "Export failed: {error message from API}"
- [ ] Given the Retry Validation API call fails, when the operation fails, then I see an error message "Retry validation failed: {error message from API}"
- [ ] Given the Cancel File API call fails, when the operation fails, then I see an error message "Cancel failed: {error message from API}"
- [ ] Given the Re-import Portfolio API call fails, when the operation fails, then I see an error message "Re-import failed: {error message from API}"
- [ ] Given the Export Data API call fails, when the operation fails, then I see an error message "Export failed: {error message from API}"

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/sftp-import` | Import files from SFTP folder |
| GET | `/file?FilePath={path}` | Export uploaded file |
| POST | `/file?FileLogId={id}&FileSettingId={id}&FileFormatId={id}` | Retry validation for a file |
| DELETE | `/file?FileLogId={id}&FileSettingId={id}&ReportBatchId={id}` | Cancel file |
| POST | `/file-reimport/{PortfolioId}?ReportBatchId={id}` | Re-import all files for portfolio |

**Response Shapes:**
- SFTP Import: `{ Message: string }`
- Export File: Binary file stream (`application/octet-stream`)
- Retry Validation: `{ Message: string }` (e.g., "Validation retry initiated")
- Cancel File: `{ Message: string }`
- Re-import Portfolio: `{ Message: string }`

## Implementation Notes
- Modify existing components: `app/imports/portfolio/page.tsx`, `app/imports/other/page.tsx`, `components/imports/FileUploadModal.tsx`
- All destructive actions (Cancel, Re-import) require confirmation dialogs before API calls
- SFTP Import triggers backend workflow, then polls for status updates (or refreshes after fixed delay)
- Export Current File uses `FilePath` from file details response
- Retry Validation requires `FileLogId`, `FileSettingId`, `FileFormatId` from file details
- Cancel File requires `FileLogId`, `FileSettingId`, `ReportBatchId` from file details
- Re-import Portfolio requires `PortfolioId` and `ReportBatchId`
- Export Data endpoint not explicitly defined in OpenAPI - may need to use existing export endpoint or implement client-side export from fetched data
- Use Shadcn UI components: AlertDialog, Button (with loading states)
- Loading states: disable all action buttons while operation is in progress
- Success messages display as Toast notifications
- Error messages display as Alert components
- After any operation completes, refresh the dashboard data to show updated statuses
- "Export Data" may export to Excel using a library like `xlsx` if no dedicated API endpoint exists
