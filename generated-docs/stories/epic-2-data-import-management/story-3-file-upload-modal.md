# Story: File Upload Modal - View & Upload

**Epic:** Data Import Management | **Story:** 3 of 5 | **Wireframe:** screen-4-file-upload-modal.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | N/A (component only) |
| **Target File** | `components/imports/FileUploadModal.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** data steward **I want** a modal dialog to view file details and upload files **So that** I can manage individual files without leaving the dashboard.

## Acceptance Criteria

### Happy Path - Portfolio File (Complete Status)
- [ ] Given I click a Complete status icon (✓) on Portfolio Imports, when the modal opens, then I see the modal heading "File Details - {PortfolioName} {FileType}"
- [ ] Given the modal is open for a Complete file, when I view the modal, then I see file information: File Type, Portfolio, Report Batch, File Log ID
- [ ] Given the modal is open for a Complete file, when I view the modal, then I see status details: Status (✓ Complete), Uploaded date/time, Uploaded By, File Name, File Size, Records processed
- [ ] Given the modal is open for a Complete file, when I view the modal, then I see validation results: Schema validation, Data type validation, Business rules validation, Duplicate check
- [ ] Given the modal is open for a Complete file, when I view the modal, then I see action buttons: "Export Current File", "Retry Validation", "Cancel File"
- [ ] Given the modal is open, when I view the modal, then I see a drag-drop upload area with accepted formats and maximum size
- [ ] Given the modal is open, when I view the modal, then I see modal footer buttons: "Close" and "Upload & Save"

### Happy Path - Other File (Missing Status)
- [ ] Given I click a Missing status icon (○) on Other Imports, when the modal opens, then I see the modal heading "File Details - {FileType}"
- [ ] Given the modal is open for a Missing file, when I view the modal, then I see file information without Portfolio field
- [ ] Given the modal is open for a Missing file, when I view the modal, then I see status "○ Missing" and message "Status: Not yet uploaded"
- [ ] Given the modal is open for a Missing file, when I view the modal, then the "Export Current File" and "Retry Validation" buttons are disabled

### Happy Path - File Upload
- [ ] Given the modal is open, when I drag a file into the upload area, then the upload area highlights to indicate the file is ready to drop
- [ ] Given the modal is open, when I drop a valid file (.csv, .xlsx, .txt), then the file name appears below the upload area
- [ ] Given the modal is open, when I click "Browse Files...", then a file browser dialog opens
- [ ] Given I select a file via the browser, when I confirm selection, then the file name appears below the upload area
- [ ] Given a file is selected, when I click "Upload & Save", then the file uploads via API and the modal shows a loading state
- [ ] Given the file upload succeeds, when the upload completes, then the modal closes and the dashboard refreshes to show updated status

### Edge Cases
- [ ] Given the modal is open, when I drop an invalid file type (.pdf, .doc), then I see an error message "Invalid file type. Accepted formats: .csv, .xlsx, .txt"
- [ ] Given the modal is open, when I drop a file larger than 50 MB, then I see an error message "File too large. Maximum size: 50 MB"
- [ ] Given a file is uploading, when I click "Close", then I see a confirmation dialog "Upload in progress. Are you sure you want to cancel?"
- [ ] Given the modal is open for a Processing file (⟳), when I view the modal, then action buttons are disabled except "Close"

### Error Handling
- [ ] Given the API call to fetch file details fails, when the modal opens, then I see an error message "Failed to load file details. Please try again."
- [ ] Given the file upload API call fails, when I click "Upload & Save", then I see an error message "Upload failed: {error message from API}"
- [ ] Given the file upload times out, when I click "Upload & Save", then I see an error message "Upload timed out. Please try again."

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/portfolio-file?ReportMonth={month}&ReportYear={year}&PortfolioId={id}&FileTypeId={id}` | Fetch portfolio file details |
| GET | `/other-file?ReportMonth={month}&ReportYear={year}&FileType={type}&FileSource={source}&FileFormat={format}` | Fetch other file details |
| POST | `/file/upload?FileSettingId={id}&FilelogId={id}&FileName={name}&User={user}&ReportBatchId={id}` | Upload file (binary body) |

**Request Body for Upload:**
- Content-Type: `application/octet-stream`
- Body: Binary file content

**Response Shape for Upload:**
```typescript
{
  FileLogId: string; // e.g., "1"
}
```

## Implementation Notes
- Create shared modal component: `components/imports/FileUploadModal.tsx`
- Modal accepts props: `isOpen`, `onClose`, `context` (portfolio/other file details)
- Context includes: `PortfolioId`, `FileTypeId`, `FileType`, `PortfolioName`, `FileSource`, `FileFormat`, `ReportMonth`, `ReportYear`, `ReportBatchId`
- Fetch file details on modal open using appropriate endpoint (portfolio vs other)
- Display validation results as checkboxes (all checked for Complete status)
- Drag-drop area uses HTML5 Drag and Drop API
- File size validation: max 50 MB
- File type validation: `.csv`, `.xlsx`, `.txt` extensions only
- Upload uses `POST /file/upload` with binary body and query parameters
- Loading state during upload: disable buttons, show spinner
- Success: close modal and trigger parent dashboard refresh
- Use Shadcn UI components: Dialog, Button, Label, Input
- Error messages display in Alert component
- "Export Current File", "Retry Validation", "Cancel File" buttons are visible but handled in Stories 4-5
