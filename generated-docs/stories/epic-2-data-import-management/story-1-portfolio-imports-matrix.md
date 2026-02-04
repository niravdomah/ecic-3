# Story: Portfolio Imports Dashboard - Matrix Grid

**Epic:** Data Import Management | **Story:** 1 of 5 | **Wireframe:** screen-2-portfolio-imports.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/imports/portfolio` |
| **Target File** | `app/imports/portfolio/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** data steward **I want** a matrix view of portfolio files organized by portfolio and file type **So that** I can quickly identify upload status and manage files for each portfolio.

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/imports/portfolio`, when the page loads, then I see "Portfolio Imports" as the main heading
- [ ] Given I am on the Portfolio Imports page, when the page loads, then I see the current batch displayed (e.g., "Batch: March 2026")
- [ ] Given I am on the Portfolio Imports page, when the page loads, then I see a matrix grid with portfolio rows and file type columns
- [ ] Given the matrix grid is displayed, when I view the grid, then each cell contains a status icon: ✓ (Complete), ⟳ (Processing), ✗ (Failed), or ○ (Missing)
- [ ] Given I am on the Portfolio Imports page, when the page loads, then I see a status summary showing counts for Complete, Processing, Failed, and Missing files
- [ ] Given I am on the Portfolio Imports page, when the page loads, then I see action buttons: "Back to Dashboard", "SFTP Import", "Export Data", and "Refresh Status"
- [ ] Given I am viewing the matrix grid, when I click any status icon, then a File Upload Modal opens with context for that portfolio and file type

### Edge Cases
- [ ] Given the API returns no portfolios, when the page loads, then I see a message "No portfolios found for this batch"
- [ ] Given the API returns many portfolios (10+), when the page loads, then the matrix grid is scrollable vertically
- [ ] Given the API returns many file types (10+), when the page loads, then the matrix grid is scrollable horizontally
- [ ] Given I am on a mobile device, when I view the page, then the matrix grid is horizontally scrollable with fixed portfolio column

### Error Handling
- [ ] Given the API call to fetch portfolio files fails, when the page loads, then I see an error message "Failed to load portfolio files. Please try again."
- [ ] Given the API call times out, when the page loads, then I see an error message "Request timed out. Please refresh the page."

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/portfolio-files?ReportMonth={month}&ReportYear={year}` | Fetch all portfolios with file status matrix |

**Response Shape (PortfolioFile schema):**
```typescript
{
  Portfolios: Array<{
    PortfolioId: number;
    PortfolioName: string;
    Action: string; // "Retry Validation" etc.
    Files: Array<{
      FileLogId: number;
      FileSettingId: number;
      FileFormatId: number;
      FileTypeId: number;
      ReportBatchId: number;
      FileType: string; // "Instrument Static", "Holdings", etc.
      FileName: string;
      FileNamePattern: string;
      StatusColor: string; // "Red", "Green", "Yellow", "Grey"
      Message: string;
      Action: string;
      WorkflowInstanceId: string;
      WorkflowStatusId: number;
      StartDate: string;
      EndDate: string;
      InvalidReasons: string;
    }>
  }>
}
```

## Implementation Notes
- Create new route: `app/imports/portfolio/page.tsx`
- Fetch current batch context from global state or API (ReportMonth, ReportYear, ReportBatchId)
- Map StatusColor from API to status icons:
  - "Green" → ✓ Complete
  - "Yellow" → ⟳ Processing
  - "Red" → ✗ Failed
  - "Grey" → ○ Missing
- File types should be dynamically derived from the API response, not hardcoded
- Portfolio names should be displayed in the first column
- Each status icon is a clickable button that opens File Upload Modal (Story 3)
- Status summary calculates counts by aggregating StatusColor values
- Use Shadcn UI components: Button, Card, Table
- Responsive design: matrix should be scrollable on smaller screens
- "Back to Dashboard" navigates to `/` (Start Page)
- "SFTP Import", "Export Data", "Refresh Status" buttons are visible but handled in Story 5
- Store portfolio/file context when opening modal to pass correct parameters
