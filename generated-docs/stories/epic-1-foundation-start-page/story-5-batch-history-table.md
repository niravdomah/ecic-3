# Story: Batch History Table

**Epic:** Foundation & Start Page | **Story:** 5 of 5 | **Wireframe:** screen-1-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** to view past reporting batches **So that** I can reference historical data and track completion.

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the home page, when I scroll to the bottom, then I see a "Batch History" section with a heading
- [ ] Given I am viewing the Batch History section, when the data loads, then I see a table with columns: Date, Batch ID, Status, Approved By, and Actions
- [ ] Given the batch history table has data, when I view the first row, then I see the report date in format "YYYY-MM-DD"
- [ ] Given the batch history table has data, when I view the first row, then I see the batch ID number
- [ ] Given the batch history table has data, when I view the first row, then I see the status "Complete"
- [ ] Given the batch history table has data, when I view the first row, then I see the approver name and level in format "[Name] (L3)"
- [ ] Given the batch history table has data, when I view the first row, then I see a "View" button in the Actions column
- [ ] Given I am viewing the batch history table, when I click the "View" button on a row, then I am navigated to the batch details page
- [ ] Given the batch history table has more than 5 rows, when I view the table, then I see pagination controls at the bottom
- [ ] Given I am viewing pagination controls, when I click "Next", then the table shows the next page of results
- [ ] Given I am viewing the Batch History section heading, when I look to the right, then I see a "View All →" link

### Edge Cases
- [ ] Given I am on the home page, when no completed batches exist, then I see an empty state message "No batch history available"
- [ ] Given I am on the home page, when the batch history is loading, then I see a skeleton loader in the table rows
- [ ] Given I am viewing pagination controls, when I am on the last page, then the "Next" button is disabled
- [ ] Given I am viewing pagination controls, when I am on the first page, then the "Previous" button is disabled
- [ ] Given I clicked "View All", when I navigate to that page, then I see the full paginated batch history (route: `/batch-history`)

### Error Handling
- [ ] Given I am on the home page, when the API fails to fetch batch history, then I see an error message "Failed to load batch history"
- [ ] Given the API failed to load batch history, when I view the error state, then I see a "Retry" button
- [ ] Given I clicked the "Retry" button, when I click it, then the API call is retried

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/report-batches` | Fetch all report batches |
| GET | `/approve-logs/{ReportBatchId}` | Fetch approval logs for a batch (to get approver info) |

**Response for `/report-batches` (200):**
```json
{
  "MonthlyReportBatches": [
    {
      "ReportBatchId": 1233,
      "ReportDate": "2026-02-28",
      "WorkflowInstanceId": "xyz789",
      "WorkflowStatusName": "Complete",
      "CreatedAt": "2026-02-21T08:00:00Z",
      "FinishedAt": "2026-02-28T17:30:00Z",
      "LastExecutedActivityName": "L3Approval"
    }
  ]
}
```

**Response for `/approve-logs/{ReportBatchId}` (200):**
```json
{
  "ApproveLogs": [
    {
      "Type": "Level 3",
      "Action": "Approved",
      "UserName": "Jane Doe",
      "CreatedAt": "2026-02-28T17:30:00Z"
    }
  ]
}
```

## Implementation Notes
- Fetch completed batches from `/report-batches` endpoint (filter where `FinishedAt` is not null)
- Sort batches by `FinishedAt` descending (most recent first)
- Display only first 5 batches on home page (full list on separate `/batch-history` route)
- For "Approved By" column, fetch approval logs for each batch to get the L3 approver
  - Consider batching these requests or using a single endpoint if available
  - Show loading state while fetching approver info
- Use Shadcn Table component for the data table
- Implement pagination using Shadcn Pagination component
- "View" button navigates to `/batch-history/{id}` (details page to be implemented in later epic)
- "View All" link navigates to `/batch-history` (full list page to be implemented in later epic)
- Use React Query or SWR for data fetching with appropriate caching
- Implement loading state with Shadcn Skeleton component
- Format dates using date-fns or similar library
