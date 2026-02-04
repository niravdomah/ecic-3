# Story: Home Page Setup

**Epic:** Foundation & Start Page | **Story:** 1 of 5 | **Wireframe:** screen-1-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** data steward **I want** a dedicated Start Page **So that** I can access InvestInsight's key features from a consistent entry point.

## Acceptance Criteria

### Happy Path
- [ ] Given I visit `/`, when the page loads, then I see "InvestInsight" as the main heading
- [ ] Given I am on the home page, when the page loads, then I see a top navigation bar with Dashboard, Data Confirmation, Maintenance menu, and User profile sections
- [ ] Given I am on the home page, when the page loads, then the template placeholder "Replace this with your feature implementation" is no longer visible
- [ ] Given I am on the home page, when the page loads, then I see three main sections: Current Batch Status, Quick Navigation, and Batch History

### Edge Cases
- [ ] Given I am on the home page on a mobile device, when the page loads, then the layout adapts to the smaller screen size
- [ ] Given I am on the home page, when I resize the browser window, then the layout responds appropriately without breaking

### Error Handling
- [ ] Given I am on the home page, when the page fails to load, then I see an error boundary message

## API Endpoints (from OpenAPI spec)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| N/A | N/A | No API calls in this story - static layout only |

## Implementation Notes
- Replace template content in `app/page.tsx` with InvestInsight Start Page structure
- Create top navigation component with Dashboard, Data Confirmation, Maintenance dropdown, User profile
- Establish three main content sections (will be populated in subsequent stories):
  - Current Batch Status section (placeholder card)
  - Quick Navigation section (placeholder grid)
  - Batch History section (placeholder table)
- Use Shadcn UI components for consistent styling
- Ensure responsive layout using Tailwind CSS
- This story focuses on structure only - data fetching comes in later stories
