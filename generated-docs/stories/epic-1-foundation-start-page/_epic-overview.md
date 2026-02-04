# Epic 1: Foundation & Start Page

## Description
Establish the InvestInsight Start Page as the central entry point for the portfolio reporting platform. This epic delivers the home page at route `/` with batch creation, status monitoring, quick navigation to key features, and batch history. The Start Page serves as the command center for data stewards to initiate and track the monthly reporting workflow.

## Stories
1. **Home Page Setup** - Replace template with Start Page structure and navigation | File: `story-1-home-page-setup.md` | Status: Pending
2. **Create New Batch** - Implement batch creation dialog and API integration | File: `story-2-create-new-batch.md` | Status: Pending
3. **Current Batch Status Display** - Show active batch status, workflow progress, and quick metrics | File: `story-3-current-batch-status.md` | Status: Pending
4. **Quick Navigation Cards** - Add navigation cards to key screens (Data Confirmation, File Uploads, etc.) | File: `story-4-quick-navigation-cards.md` | Status: Pending
5. **Batch History Table** - Display completed batches with pagination and view details | File: `story-5-batch-history-table.md` | Status: Pending

## Epic Success Criteria
- [ ] Start Page is accessible at `/` route
- [ ] Users can create new monthly report batches
- [ ] Users can see current batch status and workflow progress
- [ ] Users can navigate to key screens via quick navigation cards
- [ ] Users can view historical batch data
- [ ] All acceptance criteria in stories 1-5 are met
- [ ] Integration tests pass for all user workflows
- [ ] Page is responsive and accessible

## API Dependencies
- `POST /monthly-runs/{ReportDate}` - Create new batch
- `GET /report-batches` - Fetch all batches (current and history)
- `GET /approve-logs/{ReportBatchId}` - Fetch approval logs for batch history

## Technical Notes
- The Start Page IS the home page at `/` (not a separate route)
- Replace template placeholder in `app/page.tsx`
- Use Shadcn UI components for consistent design
- API integration via `lib/api/client.ts`
- Responsive layout with Tailwind CSS
- Navigation links to screens implemented in later epics will show "Coming Soon" placeholders

## Execution Order
1. Story 1 (Home Page Setup) - Foundation for all other stories
2. Stories 2-5 can be developed in parallel after Story 1 completes

Recommended sequence: 1 → 2 → 3 → 4 → 5
