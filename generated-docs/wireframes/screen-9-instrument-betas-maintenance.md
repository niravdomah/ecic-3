# Screen: Instrument Betas Maintenance

## Purpose
Maintain instrument beta values with full audit capabilities and visibility of outstanding items for the current reporting batch.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Instrument Betas Maintenance                         Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Beta]  [View Outstanding]  [Refresh]         |
|                                                                              |
|  [ Current Batch Betas ]  [ Outstanding Betas ]  [ Full Audit Trail ]       |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Current Batch Betas                                                         |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by Instrument Code, ISIN...]                                        |
|                                                                              |
|  Report Batch: [March 2026 (1234)]  Status: [All v]                         |
|                                                                              |
|  Showing: Betas for March 2026 (156 records)                    [Clear Filters]|
|                                                                              |
|  Betas Grid                                                  [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | ID   | Instrument | ISIN         | Instrument Name      | Beta   | Status |
|  |      | Code       |              |                      |        |        |
|  |------|------------|--------------|----------------------|--------|--------|
|  | 3001 | EQ001      | ZAE000000001 | Company A Equity     | 1.25   | Active |
|  | 3002 | EQ002      | US0378331005 | Apple Inc            | 1.10   | Active |
|  | 3003 | EQ003      | ZAE000000002 | Company B Equity     | 0.85   | Active |
|  | 3004 | EQ004      | GB0002374006 | Diageo PLC           | 0.75   | Active |
|  | 3005 | EQ005      | ZAE000000003 | Company C Equity     | 1.45   | Active |
|  | 3006 | EQ006      | ZAE000000004 | Company D Equity     | 1.05   | Active |
|  | 3007 | EQ007      | US5949181045 | Microsoft Corp       | 1.15   | Active |
|  | 3008 | EQ008      | ZAE000000005 | Company E Equity     | 0.95   | Active |
|  | 3009 | EQ009      | US0231351067 | Amazon.com Inc       | 1.30   | Active |
|  | 3010 | EQ010      | ZAE000000006 | Company F Equity     | 1.20   | Active |
|                                                                              |
|  | Last Changed | Last Changed | Report      | Report       | Actions       |
|  | User         | Date         | Batch ID    | Date         |               |
|  |--------------|--------------|-------------|--------------|---------------|
|  | J Smith      | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | System       | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | J Doe        | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | System       | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | J Smith      | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | J Doe        | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | System       | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | J Smith      | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | System       | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [Hist] |
|  | J Doe        | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [Hist] |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 16  [Next →]                                       |
|                                                                              |
+------------------------------------------------------------------------------+

OUTSTANDING BETAS TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Instrument Betas Maintenance                         Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Beta]  [Export Outstanding]  [Refresh]       |
|                                                                              |
|  [ Current Batch Betas ]  [ Outstanding Betas ]  [ Full Audit Trail ]       |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Outstanding Betas                                                           |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  These instruments require beta values for the current batch                 |
|                                                                              |
|  Status: [⚠ 12 Instruments Missing Beta Data]                               |
|                                                                              |
|  Search: [Search by Instrument Code, ISIN, Name...]             [Clear]     |
|                                                                              |
|  Outstanding Instruments Grid                                [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Instrument | ISIN         | Instrument Name       | Instrument | Asset    |
|  | ID         |              |                       | Type       | Class    |
|  |------------|--------------|----------------------|------------|----------|
|  | 1021       | ZAE000000007 | Company G Equity     | Equity     | Equity   |
|  | 1022       | US88160R1014 | Tesla Inc            | Equity     | Equity   |
|  | 1023       | ZAE000000008 | Company H Equity     | Equity     | Equity   |
|  | 1024       | US30303M1027 | Meta Platforms Inc   | Equity     | Equity   |
|  | 1025       | ZAE000000009 | Company I Equity     | Equity     | Equity   |
|  | 1026       | US0605051046 | Bank of America      | Equity     | Equity   |
|  | 1027       | ZAE000000010 | Company J Equity     | Equity     | Equity   |
|  | 1028       | US67066G1040 | NVIDIA Corp          | Equity     | Equity   |
|  | 1029       | ZAE000000011 | Company K Equity     | Equity     | Equity   |
|  | 1030       | US17275R1023 | Cisco Systems Inc    | Equity     | Equity   |
|  | 1031       | ZAE000000012 | Company L Equity     | Equity     | Equity   |
|  | 1032       | US4581401001 | Intel Corp           | Equity     | Equity   |
|                                                                              |
|  | Instrument | Currency | Actions                                          |
|  | Code       |          |                                              |
|  |------------|----------|----------------------------------------------|
|  | EQ011      | ZAR      | [Add Beta Data →]                            |
|  | EQ012      | USD      | [Add Beta Data →]                            |
|  | EQ013      | ZAR      | [Add Beta Data →]                            |
|  | EQ014      | USD      | [Add Beta Data →]                            |
|  | EQ015      | ZAR      | [Add Beta Data →]                            |
|  | EQ016      | USD      | [Add Beta Data →]                            |
|  | EQ017      | ZAR      | [Add Beta Data →]                            |
|  | EQ018      | USD      | [Add Beta Data →]                            |
|  | EQ019      | ZAR      | [Add Beta Data →]                            |
|  | EQ020      | USD      | [Add Beta Data →]                            |
|  | EQ021      | ZAR      | [Add Beta Data →]                            |
|  | EQ022      | USD      | [Add Beta Data →]                            |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Page 1 of 1                                                                 |
|                                                                              |
+------------------------------------------------------------------------------+

EDIT/ADD MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Add Beta Value - EQ011                                      [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Beta Details                                                        |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch*:     March 2026 (ID: 1234) - Read Only               |   |
|   |  Report Date*:      2026-03-31 - Read Only                           |   |
|   |                                                                      |   |
|   |  Instrument*:       [EQ011 - Company G Equity          v ]           |   |
|   |  ISIN:              ZAE000000007 - Read Only                         |   |
|   |  Instrument Name:   Company G Equity - Read Only                     |   |
|   |  Instrument Type:   Equity - Read Only                               |   |
|   |  Asset Class:       Equity - Listed Equity - Read Only               |   |
|   |                                                                      |   |
|   |  Beta*:             [_.__                              ]             |   |
|   |                                                                      |   |
|   |  Status*:           [Active                            v ]           |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Previous Beta Values:                                               |   |
|   |    2026-02-28: 1.15                                                  |   |
|   |    2026-01-31: 1.12                                                  |   |
|   |    2025-12-31: 1.18                                                  |   |
|   |                                                                      |   |
|   |  Beta typically ranges from 0.0 to 2.0:                              |   |
|   |    < 1.0 = Less volatile than market                                 |   |
|   |    = 1.0 = Same volatility as market                                 |   |
|   |    > 1.0 = More volatile than market                                 |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                                    [Cancel]            [Save & Close]|   |
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
|   |  Instrument: EQ001 - ZAE000000001                                    |   |
|   |                                                                      |   |
|   |  Showing: All changes                                                |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Date/Time         | User      | Field  | Old Value → New Value |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2026-03-02 14:30  | J Smith   | Beta   | 1.28 → 1.25          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2026-02-28 10:15  | System    | Beta   | 1.22 → 1.28          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2026-01-31 09:00  | System    | Beta   | 1.20 → 1.22          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2025-12-31 11:45  | J Doe     | Beta   | 1.18 → 1.20          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2025-11-30 08:30  | System    | Beta   | 1.15 → 1.18          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2025-10-31 14:00  | J Smith   | Beta   | 1.19 → 1.15          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2025-09-30 09:20  | System    | Beta   | 1.17 → 1.19          |  |
|   |  |-------------------|-----------|--------|----------------------|  |   |
|   |  | 2025-08-31 10:30  | System    | [Record Created]             |  |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Beta Trend:  [■■■■■■■■■■■■■■■░░░░░] +5.9% over 12 months          |   |
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
| Add Beta | Button | Opens modal to add new beta entry |
| View Outstanding | Link | Switches to Outstanding Betas tab |
| Export Outstanding | Button | Exports list of instruments missing beta data |
| Refresh | Button | Refreshes grid data from backend |
| Tab Navigation | Tabs | Switch between Current Betas, Outstanding, Full Audit Trail |
| Search Box | Text Input | Search by instrument code, ISIN, or name |
| Filter Dropdowns | Select | Filter by report batch and status |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Betas Grid | Data Table | Displays all beta records for current batch |
| Outstanding Grid | Data Table | Shows instruments missing beta data |
| Edit | Button | Opens edit modal for selected beta |
| Hist (History) | Button | Opens audit trail modal |
| Delete | Button | Removes beta entry (with confirmation) |
| Add Beta Data | Button | Opens add modal pre-filled with instrument |
| Edit/Add Modal | Dialog | Form to create or update beta value |
| Previous Values | Section | Shows last 3 beta values for reference |
| Beta Guide | Help Text | Explains beta value ranges and meaning |
| Audit Trail Modal | Dialog | Displays complete change history with trend |

## User Actions

- **Add Beta**: Opens blank modal, user selects instrument, enters beta value, clicks Save
- **Add from Outstanding**: Clicks "Add Beta Data" from Outstanding tab, opens pre-filled modal
- **Edit Beta**: Opens pre-populated modal, user modifies beta value, clicks Save & Close
- **Delete Beta**: Prompts confirmation, removes entry from batch
- **View History**: Opens audit trail modal showing all historical beta values with trend visualization
- **View Outstanding**: Switches to Outstanding tab to see instruments requiring beta data
- **Export Outstanding**: Downloads Excel file of instruments needing beta values for bulk entry
- **Search/Filter**: Real-time filtering of grid based on search terms and dropdown selections

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** Start Page, Data Confirmation
