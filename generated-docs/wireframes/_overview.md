# Wireframes: InvestInsight Portfolio Reporting Platform

## Summary
InvestInsight is a comprehensive portfolio reporting and data stewardship platform designed to help investment teams prepare accurate weekly and monthly reports from multiple data sources. The system provides robust data governance capabilities including multi-level approvals, comments, and full audit trails for all key changes.

## Screens
| # | Screen | Description | File |
|---|--------|-------------|------|
| 1 | Start Page | High-level entry point for creating new report batches, monitoring current batch status, and accessing key system functions | `screen-1-start-page.md` |
| 2 | Portfolio Imports Dashboard | Matrix view of all portfolio files organized by portfolio and file type, enabling quick identification of file upload status and management actions | `screen-2-portfolio-imports.md` |
| 3 | Other Imports Dashboard | Manage non-portfolio-specific files such as index data, Bloomberg feeds, and custodian files in a simplified list format | `screen-3-other-imports.md` |
| 4 | File Upload Modal | Popup modal for viewing file status, uploading/replacing files, viewing errors, and managing individual file operations (shared by screens 2 & 3) | `screen-4-file-upload-modal.md` |
| 5 | Data Confirmation | Consolidated view to verify that all required data is complete and valid before proceeding to approvals, with direct navigation to fix screens | `screen-5-data-confirmation.md` |
| 6 | Instruments Maintenance | Create, update, and manage instrument master data with full audit trail support and navigation to incomplete records | `screen-6-instruments-maintenance.md` |
| 7 | Index Prices Maintenance | Upload, update, and view index price data with full history tracking for the current reporting batch | `screen-7-index-prices-maintenance.md` |
| 8 | Durations & YTM Maintenance | Maintain instrument duration and yield-to-maturity data with comprehensive audit tracking and visibility of outstanding items | `screen-8-durations-ytm-maintenance.md` |
| 9 | Instrument Betas Maintenance | Maintain instrument beta values with full audit capabilities and visibility of outstanding items for the current reporting batch | `screen-9-instrument-betas-maintenance.md` |
| 10 | Credit Ratings Maintenance | Manage credit rating data for instruments and view rating changes across portfolios with full audit trail support | `screen-10-credit-ratings-maintenance.md` |
| 11 | Report Comments | Capture commentary tied to specific reports within a reporting period for review and approval processes | `screen-11-report-comments.md` |
| 12 | Approvals Dashboard | Sequential sign-off capabilities with three levels of review, displaying data check summaries and report comments for approval decisions | `screen-12-approvals-dashboard.md` |
| 13 | Process Logs | Evidence for operations teams and debugging support through file process logs, monthly process logs, calculation logs, and calculation errors | `screen-13-process-logs.md` |
| 14 | Administration | Manage users, roles, and page access with all state-changing actions protected by audit trails | `screen-14-administration.md` |

## Screen Flow

### Monthly Reporting Process
```
Start Page (Create Batch)
    ↓
Portfolio Imports / Other Imports (Upload Files)
    ↓ (via File Upload Modal)
Data Confirmation (Verify Completeness)
    ↓ (Fix issues via)
Maintenance Screens (Instruments, Prices, Durations, Betas, Ratings)
    ↓
Report Comments (Add Commentary)
    ↓
Approvals Level 1 → Level 2 → Level 3
    ↓
Complete (Publish Reports)
```

### Data Maintenance Flow
```
Data Confirmation (Identify Issues)
    ↓
Instruments Maintenance
Index Prices Maintenance     } Fix incomplete data
Durations & YTM Maintenance
Instrument Betas Maintenance
Credit Ratings Maintenance
    ↓
Data Confirmation (Verify Fixed)
```

### Support & Troubleshooting Flow
```
Process Logs
    → File Process Logs (Upload issues)
    → Monthly Process Logs (Workflow issues)
    → Calculation Logs (Calculation failures)
    ↓ (Navigate to fix screens)
Maintenance Screens or File Uploads
```

## Design Notes

### Layout Patterns
- **Top Navigation Bar**: Consistent across all screens with Dashboard, Data Confirmation, Maintenance menu, and User profile
- **Breadcrumb Trail**: "← Back to Dashboard" link on all screens for easy navigation
- **Tab Navigation**: Used extensively (Data Confirmation, Maintenance screens, Process Logs, Administration) to organize related content
- **Action Bar**: Primary actions (Add, Export, Refresh) positioned below page title
- **Search & Filter Section**: Consistent placement above data grids with search box and filter dropdowns

### Grid Components
- **Status Icons**: Consistent symbols across all screens
  - `[✓]` Complete/Success (green)
  - `[⟳]` Processing (blue)
  - `[✗]` Failed/Incomplete (red)
  - `[○]` Missing/Not Started (gray)
  - `[⚠]` Warning (yellow)
- **Action Buttons**: Right-aligned in grid rows (Edit, View, Delete, History)
- **Pagination**: Bottom-aligned with "← Previous | Page X of Y | Next →"
- **Show/Hide Columns**: Available on all data grids

### Modal Patterns
- **Size**: Large modals for forms with multiple sections, medium for simple forms
- **Header**: Title with close button `[✕]` in top-right
- **Sections**: Divided by horizontal lines with section headings
- **Footer**: Action buttons right-aligned (Cancel, Save/Confirm)
- **Required Fields**: Marked with asterisk `*` and noted at bottom

### Interactive Elements
- **Expandable Rows**: Click to expand inline details (Report Comments, Process Logs)
- **Clickable Status Icons**: Opens modals with context (File Uploads, Data Confirmation)
- **Read More Links**: Expands truncated content inline
- **Direct Navigation Links**: "Go to [Screen]" buttons navigate to fix screens

### Workflow-Aware UI
- **Progress Indicators**: Visual workflow progress on Start Page and Approvals
- **State-Based Access**: File uploads and maintenance screens become inaccessible after first approval
- **Rejection Impact**: Clear messaging about workflow reset when rejecting batches
- **Approval Checklists**: Required confirmations before approval actions

### Accessibility Considerations
- **Form Labels**: All inputs have clear labels
- **Button Text**: Action buttons use clear verbs (Save, Cancel, Approve, Reject)
- **Error Messages**: Detailed validation errors with row numbers and error codes
- **Status Indicators**: Both icon and text status for screen readers

### Responsive Behavior
- **Grid Scrolling**: Horizontal scroll for wide data grids
- **Modal Sizing**: Modals sized appropriately for content
- **Card Layouts**: Summary cards in 3-column layout on Start Page and Approvals
- **Collapsible Sections**: Expandable sections in Data Confirmation for large datasets

## Key User Journeys

### Operations Lead Journey
1. Start Page → Create New Batch
2. Portfolio Imports → Upload files via SFTP or manual
3. Data Confirmation → Identify incomplete data (3 issues)
4. Navigate to fix screens → Instruments, Index Prices
5. Data Confirmation → Verify all green
6. Notify L1 approver → Batch ready for approval

### Analyst Journey
1. Data Confirmation → See 15 instruments incomplete
2. Instruments Maintenance → Add/update instrument data
3. Index Prices Maintenance → Add 8 missing prices
4. Durations & YTM Maintenance → Add 23 duration entries
5. Report Comments → Add commentary for key portfolios
6. Data Confirmation → Verify issues resolved

### Approver Journey (L1/L2/L3)
1. Approvals Dashboard → Review batch status
2. View data checks summary → All green
3. Read report comments → 5 comments reviewed
4. View previous approvals → L1, L2 completed
5. Approve batch → Confirm checklist → Complete

### Administrator Journey
1. Administration → User Management
2. Add User → Assign roles (Analyst, L1 Approver)
3. Role Management → Edit role permissions
4. Page Access → Configure screen access for role
5. View Audit Trail → Review admin changes

## Technical Implementation Notes

### API Integration Points
- All screens connect to REST API endpoints documented in specification
- CRUD operations for all maintenance screens
- File upload/download endpoints for imports and exports
- Approval log endpoints for workflow state management
- Audit trail endpoints for change tracking

### Real-Time Updates
- Status indicators should poll for updates (File uploads, Calculations)
- Refresh buttons trigger manual data reload
- Workflow progress updates automatically

### Error Handling
- Validation errors displayed inline in modals
- File upload errors shown in dedicated error view
- Calculation errors navigable to fix screens
- User-friendly error messages with actionable guidance

### Performance Considerations
- Large grids use pagination (10-50 rows per page)
- Search/filter operations client-side where possible
- Export operations handled asynchronously for large datasets
- Modal content loaded on-demand

### Security & Permissions
- Role-based access control enforced at screen level
- Page access matrix configurable per role
- Audit trails capture all state-changing operations
- Workflow state prevents unauthorized data changes

## Development Priorities

### Phase 1: Core Workflow
1. Start Page
2. Portfolio/Other Imports + File Upload Modal
3. Data Confirmation
4. Approvals Dashboard

### Phase 2: Data Maintenance
5. Instruments Maintenance
6. Index Prices Maintenance
7. Durations & YTM Maintenance
8. Instrument Betas Maintenance
9. Credit Ratings Maintenance
10. Report Comments

### Phase 3: Support & Admin
11. Process Logs
12. Administration

### Cross-Cutting Concerns (All Phases)
- Authentication & Authorization
- Top Navigation Bar
- Audit Trail Infrastructure
- API Client Integration
- Error Handling Framework
