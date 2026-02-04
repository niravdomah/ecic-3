# Screen: Durations & YTM Maintenance

## Purpose
Maintain instrument duration and yield-to-maturity data with comprehensive audit tracking and visibility of outstanding items.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Durations & YTM Maintenance                          Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Duration]  [View Outstanding]  [Refresh]     |
|                                                                              |
|  [ Current Batch Durations ]  [ Outstanding Durations ]  [ Full Audit Trail ]|
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Current Batch Durations                                                     |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by Instrument Code, ISIN...]                                        |
|                                                                              |
|  Report Batch: [March 2026 (1234)]  Status: [All v]                         |
|                                                                              |
|  Showing: Durations for March 2026 (234 records)                [Clear Filters]|
|                                                                              |
|  Durations Grid                                              [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | ID   | Instrument | ISIN         | Duration | YTM      | Status | Last      |
|  |      | Code       |              |          |          |        | Changed   |
|  |------|------------|--------------|----------|----------|--------|-----------|
|  | 2001 | BD001      | ZAG000000001 | 8.45     | 9.25%    | Active | J Smith   |
|  | 2002 | BD002      | ZAG000000002 | 12.30    | 8.75%    | Active | J Smith   |
|  | 2003 | BD003      | ZAG000000003 | 15.67    | 9.50%    | Active | System    |
|  | 2004 | BD004      | ZAC000000001 | 6.20     | 10.15%   | Active | J Doe     |
|  | 2005 | BD005      | ZAC000000002 | 4.85     | 9.80%    | Active | System    |
|  | 2006 | BD006      | ZAG000000004 | 10.25    | 8.95%    | Active | J Smith   |
|  | 2007 | BD007      | ZAC000000003 | 3.40     | 11.25%   | Active | J Doe     |
|  | 2008 | BD008      | ZAG000000005 | 7.90     | 9.10%    | Active | System    |
|  | 2009 | BD009      | ZAC000000004 | 5.15     | 10.50%   | Active | J Smith   |
|  | 2010 | BD010      | ZAG000000006 | 9.75     | 8.85%    | Active | System    |
|                                                                              |
|  | Last Changed | Report      | Report       | Actions                      |
|  | Date         | Batch ID    | Date         |                              |
|  |--------------|-------------|--------------|------------------------------|
|  | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-02   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|  | 2026-03-01   | 1234        | 2026-03-31   | [Edit] [History] [Delete]    |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 24  [Next →]                                       |
|                                                                              |
+------------------------------------------------------------------------------+

OUTSTANDING DURATIONS TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Durations & YTM Maintenance                          Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Duration]  [Export Outstanding]  [Refresh]   |
|                                                                              |
|  [ Current Batch Durations ]  [ Outstanding Durations ]  [ Full Audit Trail ]|
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Outstanding Durations                                                       |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  These instruments require duration/YTM data for the current batch           |
|                                                                              |
|  Status: [⚠ 23 Instruments Missing Duration Data]                           |
|                                                                              |
|  Search: [Search by Instrument Code, ISIN, Name...]             [Clear]     |
|                                                                              |
|  Outstanding Instruments Grid                                [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Instrument | ISIN         | Instrument Name       | Instrument | Maturity  |
|  | ID         |              |                       | Type       | Date      |
|  |------------|--------------|----------------------|------------|-----------|
|  | 1011       | ZAG000000007 | Gov Bond 2045        | Bond       | 2045-12-31|
|  | 1012       | ZAC000000005 | Corp Bond XYZ 2029   | Bond       | 2029-06-30|
|  | 1013       | ZAG000000008 | Gov Bond 2042        | Bond       | 2042-09-30|
|  | 1014       | ZAC000000006 | Corp Bond ABC 2031   | Bond       | 2031-03-31|
|  | 1015       | ZAG000000009 | Gov Bond 2038        | Bond       | 2038-12-31|
|  | 1016       | ZAC000000007 | Corp Bond DEF 2027   | Bond       | 2027-06-30|
|  | 1017       | ZAG000000010 | Gov Bond 2050        | Bond       | 2050-03-31|
|  | 1018       | ZAC000000008 | Corp Bond GHI 2032   | Bond       | 2032-09-30|
|  | 1019       | ZAG000000011 | Gov Bond 2043        | Bond       | 2043-06-30|
|  | 1020       | ZAC000000009 | Corp Bond JKL 2028   | Bond       | 2028-12-31|
|                                                                              |
|  | Instrument | Actions                                                     |
|  | Code       |                                                             |
|  |------------|-------------------------------------------------------------|
|  | BD011      | [Add Duration Data →]                                       |
|  | BD012      | [Add Duration Data →]                                       |
|  | BD013      | [Add Duration Data →]                                       |
|  | BD014      | [Add Duration Data →]                                       |
|  | BD015      | [Add Duration Data →]                                       |
|  | BD016      | [Add Duration Data →]                                       |
|  | BD017      | [Add Duration Data →]                                       |
|  | BD018      | [Add Duration Data →]                                       |
|  | BD019      | [Add Duration Data →]                                       |
|  | BD020      | [Add Duration Data →]                                       |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 3  [Next →]                                        |
|                                                                              |
+------------------------------------------------------------------------------+

EDIT/ADD MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Add Duration & YTM - BD011                              [✕]        |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Duration Details                                                    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Report Batch*:     March 2026 (ID: 1234) - Read Only               |   |
|   |  Report Date*:      2026-03-31 - Read Only                           |   |
|   |                                                                      |   |
|   |  Instrument*:       [BD011 - Gov Bond 2045             v ]           |   |
|   |  ISIN:              ZAG000000007 - Read Only                         |   |
|   |  Instrument Name:   Gov Bond 2045 - Read Only                        |   |
|   |  Maturity Date:     2045-12-31 - Read Only                           |   |
|   |                                                                      |   |
|   |  Duration*:         [_____.__                          ]             |   |
|   |  YTM*:              [___.__                            ] %           |   |
|   |                                                                      |   |
|   |  Status*:           [Active                            v ]           |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Previous Duration Values:                                           |   |
|   |    2026-02-28: Duration: 13.45, YTM: 9.15%                           |   |
|   |    2026-01-31: Duration: 13.78, YTM: 9.05%                           |   |
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
|   |  Audit Trail - BD001 (Gov Bond 2030)                         [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Change History                                         [Export]    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Instrument: BD001 - ZAG000000001                                    |   |
|   |                                                                      |   |
|   |  Showing: All changes                                                |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Date/Time         | User      | Field    | Old Value → New Value|  |
|   |  |-------------------|-----------|----------|---------------------|  |   |
|   |  | 2026-03-02 14:30  | J Smith   | Duration | 8.50 → 8.45         |  |   |
|   |  | 2026-03-02 14:30  | J Smith   | YTM      | 9.30% → 9.25%       |  |   |
|   |  |-------------------|-----------|----------|---------------------|  |   |
|   |  | 2026-02-28 10:15  | System    | Duration | 8.55 → 8.50         |  |   |
|   |  | 2026-02-28 10:15  | System    | YTM      | 9.20% → 9.30%       |  |   |
|   |  |-------------------|-----------|----------|---------------------|  |   |
|   |  | 2026-01-31 09:00  | System    | Duration | 8.60 → 8.55         |  |   |
|   |  | 2026-01-31 09:00  | System    | YTM      | 9.10% → 9.20%       |  |   |
|   |  |-------------------|-----------|----------|---------------------|  |   |
|   |  | 2025-12-31 11:45  | J Doe     | Duration | 8.70 → 8.60         |  |   |
|   |  | 2025-12-31 11:45  | J Doe     | YTM      | 9.00% → 9.10%       |  |   |
|   |  |-------------------|-----------|----------|---------------------|  |   |
|   |  | 2025-11-30 08:30  | System    | [Record Created]               |  |   |
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
| Add Duration | Button | Opens modal to add new duration/YTM entry |
| View Outstanding | Link | Switches to Outstanding Durations tab |
| Export Outstanding | Button | Exports list of instruments missing duration data |
| Refresh | Button | Refreshes grid data from backend |
| Tab Navigation | Tabs | Switch between Current Durations, Outstanding, Full Audit Trail |
| Search Box | Text Input | Search by instrument code, ISIN, or name |
| Filter Dropdowns | Select | Filter by report batch and status |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Durations Grid | Data Table | Displays all duration records for current batch |
| Outstanding Grid | Data Table | Shows instruments missing duration data |
| Edit | Button | Opens edit modal for selected duration |
| History | Button | Opens audit trail modal |
| Delete | Button | Removes duration entry (with confirmation) |
| Add Duration Data | Button | Opens add modal pre-filled with instrument |
| Edit/Add Modal | Dialog | Form to create or update duration/YTM |
| Previous Values | Section | Shows last 2 duration/YTM values for reference |
| Audit Trail Modal | Dialog | Displays complete change history |

## User Actions

- **Add Duration**: Opens blank modal, user selects instrument, enters duration and YTM, clicks Save
- **Add from Outstanding**: Clicks "Add Duration Data" from Outstanding tab, opens pre-filled modal
- **Edit Duration**: Opens pre-populated modal, user modifies values, clicks Save & Close
- **Delete Duration**: Prompts confirmation, removes entry from batch
- **View History**: Opens audit trail modal showing all historical duration/YTM values
- **View Outstanding**: Switches to Outstanding tab to see instruments requiring data
- **Export Outstanding**: Downloads Excel file of instruments needing duration data for bulk entry
- **Search/Filter**: Real-time filtering of grid based on search terms and dropdown selections

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** Start Page, Data Confirmation
