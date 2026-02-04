# Story: File Upload Modal - Error Display

**Epic:** Data Import Management | **Story:** 4 of 5 | **Wireframe:** screen-4-file-upload-modal.md (Alternative View)

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | N/A (component only) |
| **Target File** | `components/imports/FileUploadModal.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** to view validation errors in the File Upload Modal **So that** I can identify and correct data issues in failed files.

## Acceptance Criteria

### Happy Path - Failed File with Errors
- [ ] Given I click a Failed status icon (✗) on Portfolio or Other Imports, when the modal opens, then I see status "✗ Failed"
- [ ] Given the modal is open for a Failed file, when I view the modal, then I see "Records: {count} rows attempted, 0 processed"
- [ ] Given the modal is open for a Failed file, when I view the modal, then I see a "Validation Errors" section instead of "Validation Results"
- [ ] Given the modal displays validation errors, when I view the errors, then I see a table with columns: Row, Error Code, Description
- [ ] Given the modal displays validation errors, when I view the errors, then I see a summary "Showing {count} errors (scroll for more)"
- [ ] Given the modal displays validation errors, when I view the errors, then I see an "Export" button next to the "Validation Errors" heading
- [ ] Given there are many errors (15+), when I view the error table, then the table is scrollable vertically
- [ ] Given the modal is open for a Failed file, when I view action buttons, then "Retry Validation" is enabled

### Happy Path - Export Errors
- [ ] Given the modal displays validation errors, when I click the "Export" button, then the errors download as a CSV file
- [ ] Given the errors are exported, when I open the CSV file, then it contains columns: Row, Error Code, Description
- [ ] Given the errors are exported, when I open the CSV file, then the file name is "{FileType}_{PortfolioName}_errors_{timestamp}.csv"

### Edge Cases
- [ ] Given a Failed file has only 1 error, when I view the modal, then I see "Showing 1 error" (singular)
- [ ] Given a Failed file has hundreds of errors (500+), when I view the modal, then the error table displays all errors with scrolling
- [ ] Given the error table is scrollable, when I scroll to the bottom, then all errors are visible without pagination
- [ ] Given a file has failed but has no specific error records, when I view the modal, then I see a message "Validation failed. No specific error details available."

### Error Handling
- [ ] Given the API call to fetch file faults fails, when the modal opens for a Failed file, then I see an error message "Failed to load error details. Please try again."
- [ ] Given the API returns an empty error list for a Failed file, when the modal opens, then I see a message "File marked as failed but no error details found. Contact support."
- [ ] Given the error export fails, when I click "Export", then I see an error message "Failed to export errors. Please try again."

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/file/faults?FileLogId={id}` | Fetch validation errors for a failed file |

**Response Shape (FileFault schema):**
```typescript
{
  FileFault: Array<{
    Id: number;
    Exception: string;
    Message: string;
    FaultedActivityId: string;
    FaultedActivityName: string;
    Resuming: boolean;
  }>
}
```

## Implementation Notes
- Modify existing modal component: `components/imports/FileUploadModal.tsx`
- When modal opens for a Failed file (StatusColor === "Red"), fetch file faults via `GET /file/faults`
- Map `FileFault` to error table rows:
  - Row: Extract from `Message` if present, otherwise use sequential numbering
  - Error Code: Extract from `Exception` or `FaultedActivityId`
  - Description: Use `Message` field
- Error table should be scrollable with max height (e.g., 400px)
- Export errors as CSV client-side using browser download API
- CSV format:
  ```
  Row,Error Code,Description
  12,E001,Missing required field: InstrumentCode
  12,E002,Invalid ISIN format
  ...
  ```
- File name pattern: `{FileType}_{PortfolioName or 'Other'}_errors_{ISO timestamp}.csv`
- Error summary calculates total count from `FileFault` array length
- Use Shadcn UI components: Table, ScrollArea, Button
- Error count updates dynamically as errors load
- If API returns no errors for a Failed file, display fallback message
- "Retry Validation" button is enabled for Failed files (handler in Story 5)
