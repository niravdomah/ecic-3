# Screen: Index Prices Maintenance

## Purpose
Upload, update, and view index price data with full history tracking for the current reporting batch.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Index Prices Maintenance                             Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Price]  [Upload Prices File]  [Refresh]      |
|                                                                              |
|  Search & Filter                                                             |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [Search by Index Code, Bloomberg Ticker...]                                 |
|                                                                              |
|  Report Date: [2026-03-31]  Batch Type: [Monthly v]  Status: [All v]        |
|                                                                              |
|  Showing: Index Prices for March 2026 (45 records)              [Clear Filters]|
|                                                                              |
|  Index Prices Grid                                           [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | ID   | Index    | Index Name           | Bloomberg  | Price      | Status |
|  |      | Code     |                      | Ticker     |            |        |
|  |------|----------|----------------------|------------|------------|--------|
|  | 501  | ALSI     | JSE All Share Index  | JALSH      | 78,234.50  | Active |
|  | 502  | TOP40    | JSE Top 40 Index     | JTOP       | 71,456.23  | Active |
|  | 503  | FINI     | JSE Financial Index  | JFIN       | 34,567.89  | Active |
|  | 504  | INDI     | JSE Industrial Index | JIND       | 89,012.34  | Active |
|  | 505  | RESI     | JSE Resource Index   | JRES       | 56,789.01  | Active |
|  | 506  | ALBI     | All Bond Index       | ALBITR     | 892.45     | Active |
|  | 507  | GOVI     | Govt Bond Index      | GOVI       | 845.67     | Active |
|  | 508  | STeFI    | Short Term Fixed Int | STEFICOMP  | 678.90     | Active |
|  | 509  | MSCIWORLD| MSCI World Index     | MXWO       | 3,234.56   | Active |
|  | 510  | SP500    | S&P 500 Index        | SPX        | 5,123.78   | Active |
|                                                                              |
|  | Report    | Report       | Last Changed | Last Changed | Actions           |
|  | Batch ID  | Date         | User         | Date         |                   |
|  |-----------|--------------|--------------|--------------|-------------------|
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | J Smith      | 2026-03-02   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | J Doe        | 2026-03-02   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | J Smith      | 2026-03-02   | [Edit] [History]  |
|  | 1234      | 2026-03-31   | System       | 2026-03-01   | [Edit] [History]  |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 5  [Next →]                                        |
|                                                                              |
+------------------------------------------------------------------------------+

EDIT/ADD MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Edit Index Price - ALSI                                     [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Price Details                                                       |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch*:     March 2026 (ID: 1234) - Read Only               |   |
|   |  Report Date*:      2026-03-31 - Read Only                           |   |
|   |                                                                      |   |
|   |  Index*:            [ALSI - JSE All Share Index           v ]        |   |
|   |  Bloomberg Ticker:  JALSH - Read Only                                |   |
|   |                                                                      |   |
|   |  Price*:            [78234.50                             ]          |   |
|   |                                                                      |   |
|   |  Status*:           [Active                               v ]        |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  [Quick View History]                                                |   |
|   |                                                                      |   |
|   |  Recent Prices for ALSI:                                             |   |
|   |    2026-02-28: 77,890.25                                             |   |
|   |    2026-01-31: 76,543.10                                             |   |
|   |    2025-12-31: 75,234.50                                             |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                    [Cancel]            [Save Changes]|   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

PRICE HISTORY MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Price History - ALSI (JSE All Share Index)                  [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Historical Prices                                      [Export]    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Index Code: ALSI                                                    |   |
|   |  Bloomberg Ticker: JALSH                                             |   |
|   |                                                                      |   |
|   |  Showing: Last 24 months                                             |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Report Date  | Price      | Change     | % Change | User       |  |   |
|   |  |--------------|------------|------------|----------|------------|  |   |
|   |  | 2026-03-31   | 78,234.50  | +344.25    | +0.44%   | System     |  |   |
|   |  | 2026-02-28   | 77,890.25  | +1,347.15  | +1.76%   | System     |  |   |
|   |  | 2026-01-31   | 76,543.10  | +1,308.60  | +1.74%   | System     |  |   |
|   |  | 2025-12-31   | 75,234.50  | -456.75    | -0.60%   | System     |  |   |
|   |  | 2025-11-30   | 75,691.25  | +892.30    | +1.19%   | System     |  |   |
|   |  | 2025-10-31   | 74,798.95  | +1,234.15  | +1.68%   | System     |  |   |
|   |  | 2025-09-30   | 73,564.80  | -678.45    | -0.91%   | System     |  |   |
|   |  | 2025-08-31   | 74,243.25  | +234.50    | +0.32%   | J Smith    |  |   |
|   |  | 2025-07-31   | 74,008.75  | +1,567.90  | +2.16%   | System     |  |   |
|   |  | 2025-06-30   | 72,440.85  | +890.15    | +1.24%   | System     |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Price Trend:  [■■■■■■■■■■■■■■■■■■░░] +7.8% over 12 months         |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                                       [Close]        |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

UPLOAD PRICES FILE MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Upload Index Prices File                                    [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Bulk Price Upload                                                   |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch*:     March 2026 (ID: 1234)                            |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Drag and drop price file here or click to browse              |  |   |
|   |  |                                                                |  |   |
|   |  | Accepted formats: .csv, .xlsx                                 |  |   |
|   |  | Maximum size: 10 MB                                           |  |   |
|   |  |                                                                |  |   |
|   |  | Expected columns: IndexCode, Price                            |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  [Browse Files...]  [Download Template]                              |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Upload Options:                                                     |   |
|   |    ( ) Add new prices only                                           |   |
|   |    (•) Update existing prices and add new                            |   |
|   |    ( ) Replace all prices for this batch                             |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                    [Cancel]                [Upload]  |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Add Price | Button | Opens modal to add single index price |
| Upload Prices File | Button | Opens modal for bulk price upload |
| Refresh | Button | Refreshes grid data from backend |
| Search Box | Text Input | Search by index code or Bloomberg ticker |
| Filter Dropdowns | Select | Filter by report date, batch type, status |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Index Prices Grid | Data Table | Displays all price records for current batch |
| Edit | Button | Opens edit modal for selected price |
| History | Button | Opens price history modal |
| Delete | Button | Removes price entry (with confirmation) |
| Pagination Controls | Navigation | Move between pages of results |
| Edit/Add Modal | Dialog | Form to create or update price |
| Quick View History | Section | Shows recent 3 prices inline |
| Price History Modal | Dialog | Displays complete price history with trends |
| Upload File Modal | Dialog | Bulk upload interface with options |
| Download Template | Link | Downloads Excel template for bulk upload |

## User Actions

- **Add Price**: Opens blank modal, user selects index and enters price, clicks Save
- **Edit Price**: Opens pre-populated modal, user modifies price, clicks Save Changes
- **Delete Price**: Prompts confirmation, removes price entry from batch
- **View History**: Opens history modal showing all historical prices for that index with trend visualization
- **Upload Prices File**: Opens upload modal, user drags/browses file, selects upload option, clicks Upload
- **Download Template**: Downloads Excel template with correct column structure
- **Search/Filter**: Real-time filtering of grid based on search terms and dropdown selections
- **Quick View History**: Shows last 3 prices inline in edit modal for quick reference

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** Start Page, Data Confirmation
