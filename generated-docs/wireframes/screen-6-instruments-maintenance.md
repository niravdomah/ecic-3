# Screen: Instruments Maintenance

## Purpose
Create, update, and manage instrument master data with full audit trail support and navigation to incomplete records.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Instruments Maintenance                              Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Instrument]  [Export ISINs]  [Refresh]       |
|                                                                              |
|  Search & Filter                                                             |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [Search by Code, ISIN, Name...]                                             |
|                                                                              |
|  Instrument Type: [All Types v]  Status: [All Statuses v]  Asset Class: [All v] |
|                                                                              |
|  Showing: All Instruments (1,247 records)                        [Clear Filters]|
|                                                                              |
|  Instruments Grid                                            [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | ID   | Instrument | ISIN         | Name              | Type   | Asset  | Currency |
|  |      | Code       |              |                   |        | Class  |          |
|  |------|------------|--------------|-------------------|--------|--------|----------|
|  | 1001 | EQ001      | ZAE000000001 | Company A Equity  | Equity | Equity | ZAR      |
|  | 1002 | BD001      | ZAG000000001 | Gov Bond 2030     | Bond   | Govt   | ZAR      |
|  | 1003 | EQ002      | US0378331005 | Apple Inc         | Equity | Equity | USD      |
|  | 1004 | BD002      | ZAG000000002 | Gov Bond 2035     | Bond   | Govt   | ZAR      |
|  | 1005 | EQ003      | ZAE000000002 | Company B Equity  | Equity | Equity | ZAR      |
|  | 1006 | MM001      | ZAM000000001 | Money Market Fund | MM     | Cash   | ZAR      |
|  | 1007 | BD003      | ZAG000000003 | Gov Bond 2040     | Bond   | Govt   | ZAR      |
|  | 1008 | EQ004      | GB0002374006 | Diageo PLC        | Equity | Equity | GBP      |
|  | 1009 | BD004      | ZAC000000001 | Corp Bond 2028    | Bond   | Corp   | ZAR      |
|  | 1010 | EQ005      | ZAE000000003 | Company C Equity  | Equity | Equity | ZAR      |
|                                                                              |
|  | Country | Issuer        | Maturity   | Status | Last Changed | Last Changed |
|  |         |               | Date       |        | User         | Date         |
|  |---------|---------------|------------|--------|--------------|--------------|
|  | ZA      | Company A     | -          | Active | J Smith      | 2026-02-15   |
|  | ZA      | SA Treasury   | 2030-12-31 | Active | J Smith      | 2026-02-15   |
|  | US      | Apple Inc     | -          | Active | J Doe        | 2026-01-20   |
|  | ZA      | SA Treasury   | 2035-06-30 | Active | J Smith      | 2026-02-15   |
|  | ZA      | Company B     | -          | Active | J Doe        | 2026-02-10   |
|  | ZA      | MM Provider   | -          | Active | J Smith      | 2026-01-15   |
|  | ZA      | SA Treasury   | 2040-03-31 | Active | J Smith      | 2026-02-15   |
|  | GB      | Diageo PLC    | -          | Active | J Doe        | 2026-01-25   |
|  | ZA      | Company D     | 2028-09-30 | Active | J Smith      | 2026-02-12   |
|  | ZA      | Company C     | -          | Active | J Doe        | 2026-02-08   |
|                                                                              |
|  | Actions                                                                |  |
|  |------------------------------------------------------------------------|  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|  | [Edit] [View History] [Delete]                                         |  |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 125  [Next →]                                      |
|                                                                              |
+------------------------------------------------------------------------------+

EDIT/ADD MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Edit Instrument - EQ001                                     [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Instrument Details                                                  |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Instrument Code*:  [EQ001                            ]              |   |
|   |  ISIN*:             [ZAE000000001                     ]              |   |
|   |  Instrument Name*:  [Company A Equity                 ]              |   |
|   |                                                                      |   |
|   |  Instrument Type*:  [Equity                         v ]              |   |
|   |  Asset Class*:      [Equity - Listed Equity         v ]              |   |
|   |  Currency*:         [ZAR - South African Rand       v ]              |   |
|   |  Country*:          [ZA - South Africa              v ]              |   |
|   |  Issuer*:           [Company A                      v ]              |   |
|   |                                                                      |   |
|   |  Maturity Date:     [____-__-__ (Optional)            ]              |   |
|   |  Status*:           [Active                         v ]              |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Change Summary                                                      |   |
|   |                                                                      |   |
|   |  This change will be logged with your username and timestamp.        |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                    [Cancel]            [Save Changes]|   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

AUDIT TRAIL MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Audit Trail - EQ001 (Company A Equity)                      [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Change History                                         [Export]    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Showing 8 changes                                                   |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Date/Time         | User      | Field        | Old Value        |  |   |
|   |  |                   |           |              | → New Value      |  |   |
|   |  |-------------------|-----------|--------------|------------------|  |   |
|   |  | 2026-02-15 14:30  | J Smith   | InstrumentName | Company A Ord  |  |   |
|   |  |                   |           |              | → Company A Equity|  |  |
|   |  |-------------------|-----------|--------------|------------------|  |   |
|   |  | 2026-02-10 09:15  | J Doe     | AssetClass   | Equity - Other   |  |   |
|   |  |                   |           |              | → Equity - Listed|  |   |
|   |  |-------------------|-----------|--------------|------------------|  |   |
|   |  | 2026-01-28 16:45  | J Smith   | Status       | Pending          |  |   |
|   |  |                   |           |              | → Active         |  |   |
|   |  |-------------------|-----------|--------------|------------------|  |   |
|   |  | 2026-01-28 16:44  | J Smith   | ISIN         | ZAE000000000     |  |   |
|   |  |                   |           |              | → ZAE000000001   |  |   |
|   |  |-------------------|-----------|--------------|------------------|  |   |
|   |  | 2026-01-20 11:20  | J Doe     | Currency     | USD              |  |   |
|   |  |                   |           |              | → ZAR            |  |   |
|   |  |-------------------|-----------|--------------|------------------|  |   |
|   |  | 2026-01-15 10:00  | J Smith   | [Record Created]                |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                                       [Close]        |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Add Instrument | Button | Opens modal to create new instrument |
| Export ISINs | Button | Exports ISINs for incomplete instruments to Excel |
| Refresh | Button | Refreshes grid data from backend |
| Search Box | Text Input | Search by code, ISIN, or name |
| Filter Dropdowns | Select | Filter by type, status, asset class |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Instruments Grid | Data Table | Displays all instrument records with pagination |
| Edit | Button | Opens edit modal for selected instrument |
| View History | Button | Opens audit trail modal |
| Delete | Button | Soft deletes instrument (with confirmation) |
| Pagination Controls | Navigation | Move between pages of results |
| Edit/Add Modal | Dialog | Form to create or update instrument |
| Save Changes | Button | Saves instrument changes to database |
| Audit Trail Modal | Dialog | Displays complete change history |
| Export (Audit) | Button | Exports audit trail to Excel |

## User Actions

- **Add Instrument**: Opens blank modal form, user fills required fields, clicks Save to create
- **Edit Instrument**: Opens pre-populated modal, user modifies fields, clicks Save Changes
- **Delete Instrument**: Prompts confirmation, performs soft delete with audit log entry
- **View History**: Opens audit trail modal showing all changes to that instrument
- **Export ISINs**: Downloads Excel file of instruments with incomplete data for bulk correction
- **Search/Filter**: Real-time filtering of grid based on search terms and dropdown selections
- **Pagination**: Navigate through large result sets
- **Show/Hide Columns**: Customize grid view by toggling column visibility

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** Start Page, Data Confirmation
