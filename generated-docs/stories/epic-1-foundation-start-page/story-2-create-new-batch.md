# Story: Create New Batch

**Epic:** Foundation & Start Page | **Story:** 2 of 5 | **Wireframe:** screen-1-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** to create a new monthly reporting batch **So that** I can start the data collection process for a new reporting period.

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the home page, when the page loads, then I see a "Create New Batch" button in the top-right corner of the Current Batch Status section
- [ ] Given I am on the home page, when I click "Create New Batch", then a confirmation dialog opens with title "Create New Report Batch"
- [ ] Given the create batch dialog is open, when I see the dialog, then it shows a date picker for selecting the report date
- [ ] Given the create batch dialog is open, when I click "Confirm", then the button shows a loading spinner
- [ ] Given I confirmed batch creation, when the API call succeeds, then I see a success notification "Monthly process started successfully"
- [ ] Given I confirmed batch creation, when the API call succeeds, then the dialog closes
- [ ] Given I confirmed batch creation, when the API call succeeds, then the Current Batch Status section updates to show the new batch

### Edge Cases
- [ ] Given the create batch dialog is open, when I click "Cancel", then the dialog closes without making an API call
- [ ] Given the create batch dialog is open, when I click outside the dialog, then the dialog closes without making an API call
- [ ] Given I am creating a batch, when the API call is in progress, then the "Confirm" button is disabled
- [ ] Given I am creating a batch, when the API call is in progress, then the "Create New Batch" button is disabled

### Error Handling
- [ ] Given I confirmed batch creation, when the API returns a 500 error, then I see an error notification "Failed to create batch. Please try again."
- [ ] Given I confirmed batch creation, when the API returns an error, then the dialog remains open
- [ ] Given I confirmed batch creation, when the network request fails, then I see an error notification "Network error. Please check your connection."

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/monthly-runs/{ReportDate}` | Create a new monthly process batch for the given date |

**Request Example:**
```
POST /monthly-runs/2026-03-31
```

**Response (201):**
```json
{
  "message": "Monthly process started successfully."
}
```

**Response (500):**
```
Internal Server Error
```

## Implementation Notes
- Add "Create New Batch" button component in Current Batch Status section
- Implement confirmation dialog using Shadcn Dialog component
- Add date picker for selecting report date (Shadcn Calendar/DatePicker)
- Use API client from `lib/api/client.ts` for POST request
- Handle loading state with disabled button and spinner
- Use toast notifications for success/error feedback (Shadcn Toast)
- After successful creation, trigger refetch of current batch data (Story 3 dependency)
- Report date format: YYYY-MM-DD (ISO 8601)
