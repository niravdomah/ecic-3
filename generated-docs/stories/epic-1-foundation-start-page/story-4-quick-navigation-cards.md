# Story: Quick Navigation Cards

**Epic:** Foundation & Start Page | **Story:** 4 of 5 | **Wireframe:** screen-1-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** quick access cards to key screens **So that** I can navigate efficiently to my most-used features.

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the home page, when I scroll down past the Current Batch Status section, then I see a "Quick Navigation" section with a heading
- [ ] Given I am viewing the Quick Navigation section, when I look at the cards, then I see six cards arranged in a grid: "Data Confirmation", "File Uploads", "Instruments", "Index Prices", "Approvals", and "Process Logs"
- [ ] Given I am viewing the Data Confirmation card, when I look at it, then I see a title "Data Confirmation" and description "View completeness checks and issues"
- [ ] Given I am viewing the File Uploads card, when I look at it, then I see a title "File Uploads" and description "Upload portfolio and other files"
- [ ] Given I am viewing the Instruments card, when I look at it, then I see a title "Instruments" and description "Manage instrument master data"
- [ ] Given I am viewing the Index Prices card, when I look at it, then I see a title "Index Prices" and description "Manage index price data"
- [ ] Given I am viewing the Approvals card, when I look at it, then I see a title "Approvals" and description "Review and approve batches"
- [ ] Given I am viewing the Process Logs card, when I look at it, then I see a title "Process Logs" and description "View file and calculation logs"
- [ ] Given I am viewing a navigation card, when I click on it, then I am navigated to the corresponding route
- [ ] Given I am viewing a navigation card, when I hover over it, then the card shows a hover effect (e.g., shadow or border highlight)

### Edge Cases
- [ ] Given I am on the home page on a tablet, when I view the Quick Navigation section, then the cards arrange in a 2-column grid
- [ ] Given I am on the home page on a mobile device, when I view the Quick Navigation section, then the cards stack in a single column
- [ ] Given I am viewing a navigation card, when I focus on it using keyboard Tab, then the card shows a focus indicator

### Error Handling
- [ ] Given I clicked on a navigation card, when the target route does not exist yet, then I see a "Coming Soon" message on that page

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| N/A | N/A | No API calls - static navigation elements |

## Implementation Notes
- Create Quick Navigation section below Current Batch Status
- Implement cards using Shadcn Card component
- Cards should be clickable and act as navigation links (Next.js Link component)
- Use a responsive grid layout (3 columns desktop, 2 columns tablet, 1 column mobile)
- Target routes for navigation cards:
  - Data Confirmation → `/data-confirmation`
  - File Uploads → `/file-uploads`
  - Instruments → `/instruments`
  - Index Prices → `/index-prices`
  - Approvals → `/approvals`
  - Process Logs → `/process-logs`
- Consider adding icons to each card for visual clarity (optional, use lucide-react icons)
- Each card should show "Open →" or arrow icon to indicate it's clickable
- Implement hover and focus states using Tailwind CSS
- Cards should be keyboard accessible (Tab navigation, Enter to activate)
