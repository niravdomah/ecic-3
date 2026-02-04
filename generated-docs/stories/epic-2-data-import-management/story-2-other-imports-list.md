# Story: Other Imports Dashboard - File List

**Epic:** Data Import Management | **Story:** 2 of 5 | **Wireframe:** screen-3-other-imports.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/imports/other` |
| **Target File** | `app/imports/other/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** data steward **I want** a list view of non-portfolio files **So that** I can track and manage index data, Bloomberg feeds, and custodian files.

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/imports/other`, when the page loads, then I see "Other Imports" as the main heading
- [ ] Given I am on the Other Imports page, when the page loads, then I see the current batch displayed (e.g., "Batch: March 2026")
- [ ] Given I am on the Other Imports page, when the page loads, then I see a list of file cards, each showing file type, description, status icon, and metadata
- [ ] Given I am viewing a file card, when I view the card, then I see the file type name as the card heading
- [ ] Given I am viewing a file card, when I view the card, then I see a status icon: ✓ (Complete), ⟳ (Processing), ✗ (Failed), or ○ (Missing)
- [ ] Given I am viewing a file card, when I view the card, then I see "Last Updated" information with date, time, and user
- [ ] Given I am viewing a file card, when I view the card, then I see a "View Details" button
- [ ] Given I am on the Other Imports page, when the page loads, then I see a status summary showing counts for Complete, Processing, Failed, and Missing files
- [ ] Given I am on the Other Imports page, when the page loads, then I see action buttons: "Back to Dashboard", "SFTP Import", "Export Data", and "Refresh Status"
- [ ] Given I am viewing a file card, when I click the status icon or "View Details" button, then a File Upload Modal opens with context for that file type

### Edge Cases
- [ ] Given the API returns no other files, when the page loads, then I see a message "No other files configured for this batch"
- [ ] Given the API returns many files (20+), when the page loads, then the file list is scrollable
- [ ] Given a file has not been uploaded yet, when I view its card, then "Last Updated" shows "Status: Not yet uploaded"
- [ ] Given a file is processing, when I view its card, then "Last Updated" shows "Processing..." status
- [ ] Given a file has failed, when I view its card, then "Last Updated" shows "Failed - {count} errors"

### Error Handling
- [ ] Given the API call to fetch other files fails, when the page loads, then I see an error message "Failed to load other files. Please try again."
- [ ] Given the API call times out, when the page loads, then I see an error message "Request timed out. Please refresh the page."

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/other-files?ReportMonth={month}&ReportYear={year}` | Fetch all non-portfolio files |

**Response Shape (OtherFile schema):**
```typescript
{
  Files: Array<{
    FileLogId: number;
    FileSettingId: number;
    FileSource: string; // "Custodian", "Bloomberg", etc.
    FileFormat: string; // "Zar", "Usd", etc.
    FileFormatId: number;
    FileType: string; // "Holdings", "Transactions", "Index Prices", etc.
    ReportBatchId: number;
    FileName: string;
    FileNamePattern: string;
    StatusColor: string; // "Red", "Green", "Yellow", "Grey"
    Message: string;
    Action: string;
    WorkflowInstanceId: string;
    WorkflowStatusName: string; // "Complete", "Processing", etc.
    StartDate: string;
    EndDate: string;
    InvalidReasons: string;
  }>
}
```

## Implementation Notes
- Create new route: `app/imports/other/page.tsx`
- Fetch current batch context from global state or API (ReportMonth, ReportYear, ReportBatchId)
- Map StatusColor from API to status icons:
  - "Green" → ✓ Complete
  - "Yellow" → ⟳ Processing
  - "Red" → ✗ Failed
  - "Grey" → ○ Missing
- File cards should display:
  - Heading: `FileType` (e.g., "Monthly Index Files")
  - Description: Derived from `FileSource` and `FileFormat` (e.g., "Bloomberg Credit Ratings - USD format")
  - Status: Icon based on `StatusColor`
  - Last Updated: Format `EndDate` or `StartDate` with user from workflow metadata
- Each status icon and "View Details" button opens File Upload Modal (Story 3)
- Status summary calculates counts by aggregating StatusColor values
- Use Shadcn UI components: Button, Card
- Responsive design: cards stack vertically on smaller screens
- "Back to Dashboard" navigates to `/` (Start Page)
- "SFTP Import", "Export Data", "Refresh Status" buttons are visible but handled in Story 5
- Store file context when opening modal to pass correct parameters (FileType, FileSource, FileFormat)
