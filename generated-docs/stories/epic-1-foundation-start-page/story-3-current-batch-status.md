# Story: Current Batch Status Display

**Epic:** Foundation & Start Page | **Story:** 3 of 5 | **Wireframe:** screen-1-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** to see the current batch status at a glance **So that** I know where we are in the reporting workflow.

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the home page, when the page loads, then I see a "Current Batch Status" card displaying the active batch information
- [ ] Given the current batch data is loaded, when I view the status card, then I see the report batch name in format "Report Batch: [Month] [Year] (ID: [ID])"
- [ ] Given the current batch data is loaded, when I view the status card, then I see the status label "Status: Data Preparation"
- [ ] Given the current batch data is loaded, when I view the status card, then I see creation info "Created: [Date] [Time] by [User]"
- [ ] Given the current batch data is loaded, when I view the status card, then I see a workflow progress indicator showing stages: Create Batch → Data Preparation → L1 Approval → L2 Approval → L3 Approval → Complete
- [ ] Given the current batch data is loaded, when I view the workflow progress, then completed stages show a checkmark [✓], the current stage shows a filled circle [●], and future stages show an empty box [ ]
- [ ] Given the current batch data is loaded, when I view the status card, then I see "Portfolio Files: X/Y Complete" showing uploaded vs total files
- [ ] Given the current batch data is loaded, when I view the status card, then I see "Other Files: X/Y Complete" showing uploaded vs total files
- [ ] Given the current batch data is loaded, when I view the status card, then I see "Data Checks: X Issues Pending" showing outstanding issues
- [ ] Given the current batch data is loaded, when I view the status card, then I see three action buttons: "Go to Data Confirmation", "View File Uploads", and "View Logs"

### Edge Cases
- [ ] Given I am on the home page, when no active batch exists, then I see an empty state message "No active batch. Create a new batch to get started."
- [ ] Given I am on the home page, when the batch data is loading, then I see a skeleton loader in the Current Batch Status section
- [ ] Given the current batch is in Complete status, when I view the workflow progress, then all stages show checkmarks

### Error Handling
- [ ] Given I am on the home page, when the API fails to fetch batch data, then I see an error message "Failed to load batch status. Please refresh the page."
- [ ] Given the API failed to load batch data, when I view the status card, then I see a "Retry" button
- [ ] Given I clicked the "Retry" button, when I click it, then the API call is retried

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/report-batches` | Fetch all report batches (filter for active/latest) |

**Response (200):**
```json
{
  "MonthlyReportBatches": [
    {
      "ReportBatchId": 1234,
      "ReportDate": "2026-03-31",
      "WorkflowInstanceId": "abc123",
      "WorkflowStatusName": "Data Preparation",
      "CreatedAt": "2026-03-01T09:00:00Z",
      "FinishedAt": null,
      "LastExecutedActivityName": "FileUpload"
    }
  ]
}
```

## Implementation Notes
- Use API client to fetch report batches on component mount
- Filter for the most recent batch where `FinishedAt` is null (active batch)
- Display batch in Shadcn Card component
- Implement workflow progress as a horizontal stepper/timeline component
- Map `WorkflowStatusName` to corresponding workflow stage
- Quick status metrics (Portfolio Files, Other Files, Data Checks) will show placeholder data until those APIs are integrated in later epics
- Action buttons link to routes (to be implemented in later epics):
  - "Go to Data Confirmation" → `/data-confirmation`
  - "View File Uploads" → `/file-uploads`
  - "View Logs" → `/process-logs`
- Use React Query or SWR for data fetching and caching
- Implement loading state with Shadcn Skeleton component
- Format dates using date-fns or similar library
