# Epic 2: Data Import Management

## Description
Implement the Portfolio Imports and Other Imports dashboards to enable data stewards to manage file uploads, track validation status, and handle errors. This epic delivers two specialized dashboards: a matrix view for portfolio-specific files and a list view for non-portfolio files, plus a shared file upload modal for viewing details, uploading files, and managing validation errors.

## Stories
1. **Portfolio Imports Dashboard - Matrix Grid** - Display portfolio × file type matrix with status icons and navigation | File: `story-1-portfolio-imports-matrix.md` | Status: Pending
2. **Other Imports Dashboard - File List** - Display non-portfolio files in list format with status tracking | File: `story-2-other-imports-list.md` | Status: Pending
3. **File Upload Modal - View & Upload** - Shared modal for viewing file details, uploading files, and viewing validation results | File: `story-3-file-upload-modal.md` | Status: Pending
4. **File Upload Modal - Error Display** - Display validation errors and support error export for failed files | File: `story-4-file-error-display.md` | Status: Pending
5. **File Actions - SFTP Import & Bulk Operations** - Implement SFTP import, file export, retry validation, and re-import actions | File: `story-5-file-actions.md` | Status: Pending

## Epic Success Criteria
- [ ] Portfolio Imports Dashboard displays matrix grid of portfolios × file types with accurate status icons
- [ ] Other Imports Dashboard displays list of non-portfolio files with status tracking
- [ ] File Upload Modal opens from status icons with correct context (portfolio/file type)
- [ ] Users can upload files via drag-drop or file browser
- [ ] Users can view validation errors and export error lists
- [ ] Users can trigger SFTP import, retry validation, export files, and cancel files
- [ ] Users can re-import entire portfolios or all files
- [ ] All acceptance criteria in stories 1-5 are met
- [ ] Integration tests pass for all user workflows
- [ ] Pages are responsive and accessible

## API Dependencies (from FileImporterAPIDefinition.yaml)
- `GET /portfolio-files?ReportMonth=X&ReportYear=Y` - Fetch portfolio file matrix
- `GET /portfolio-file?ReportMonth=X&ReportYear=Y&PortfolioId=X&FileTypeId=Y` - Fetch specific portfolio file details
- `GET /other-files?ReportMonth=X&ReportYear=Y` - Fetch other files list
- `GET /other-file?ReportMonth=X&ReportYear=Y&FileType=X&FileSource=X&FileFormat=X` - Fetch specific other file details
- `POST /file/upload?FileSettingId=X&FilelogId=X&FileName=X&User=X&ReportBatchId=X` - Upload file
- `GET /file/faults?FileLogId=X` - Fetch file validation errors
- `DELETE /file?FileLogId=X&FileSettingId=X&ReportBatchId=X` - Cancel file
- `POST /file?FileLogId=X&FileSettingId=X&FileFormatId=X` - Retry validation
- `GET /file?FilePath=X` - Export file
- `POST /file-reimport/{PortfolioId}?ReportBatchId=X` - Re-import portfolio files
- `POST /sftp-import` - Import files from SFTP folder

## Technical Notes
- Portfolio Imports route: `/imports/portfolio`
- Other Imports route: `/imports/other`
- File Upload Modal is a shared dialog component used by both dashboards
- Status icons: ✓ (Complete), ⟳ (Processing), ✗ (Failed), ○ (Missing)
- Matrix grid must handle dynamic number of portfolios and file types
- Modal context must include portfolio/file type information for correct API calls
- File upload supports drag-drop and file browser
- Error display must handle large error lists with scrolling/pagination
- SFTP import triggers backend workflow, then refreshes dashboard
- All API calls use `lib/api/client.ts`

## Execution Order
1. Story 1 (Portfolio Imports Matrix) - Establishes matrix dashboard and navigation
2. Story 2 (Other Imports List) - Establishes list dashboard
3. Story 3 (File Upload Modal) - Core modal functionality for viewing and uploading
4. Story 4 (File Error Display) - Extends modal with error handling
5. Story 5 (File Actions) - Implements SFTP, retry, export, cancel, re-import

Recommended sequence: 1 → 2 → 3 → 4 → 5
