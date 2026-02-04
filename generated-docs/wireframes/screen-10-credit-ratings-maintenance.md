# Screen: Credit Ratings Maintenance

## Purpose
Manage credit rating data for instruments and view rating changes across portfolios with full audit trail support.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Credit Ratings Maintenance                           Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [+ Add Rating]  [Retry Decision Flow]  [Refresh]    |
|                                                                              |
|  [ Current Ratings ]  [ Rating Changes ]  [ Full Audit Trail ]              |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Current Ratings                                                             |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by Instrument Code, ISIN, Country...]                               |
|                                                                              |
|  Rating Agency: [All v]  Rating Scale: [All v]  Country: [All v]            |
|                                                                              |
|  Showing: All Credit Ratings (312 records)                      [Clear Filters]|
|                                                                              |
|  Credit Ratings Grid                                         [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | ID   | Instrument | ISIN         | Country | Rating   | National | International |
|  |      | Code       |              |         | Agency   | Rating   | Rating        |
|  |------|------------|--------------|---------|----------|----------|---------------|
|  | 4001 | BD001      | ZAG000000001 | ZA      | Moody's  | AA+      | Baa3          |
|  | 4002 | BD002      | ZAG000000002 | ZA      | Moody's  | AA+      | Baa3          |
|  | 4003 | BD003      | ZAG000000003 | ZA      | Moody's  | AA+      | Baa3          |
|  | 4004 | BD004      | ZAC000000001 | ZA      | Moody's  | A+       | Ba1           |
|  | 4005 | BD005      | ZAC000000002 | ZA      | S&P      | A        | BB+           |
|  | 4006 | BD006      | ZAG000000004 | ZA      | Moody's  | AA+      | Baa3          |
|  | 4007 | BD007      | ZAC000000003 | ZA      | S&P      | A-       | BB            |
|  | 4008 | BD008      | ZAG000000005 | ZA      | Moody's  | AA+      | Baa3          |
|  | 4009 | BD009      | ZAC000000004 | ZA      | Moody's  | BBB+     | Ba2           |
|  | 4010 | BD010      | ZAG000000006 | ZA      | Moody's  | AA+      | Baa3          |
|                                                                              |
|  | Final Rating | Final Rating    | Effective | Last Changed | Last Changed |
|  | National     | International   | Date      | User         | Date         |
|  |--------------|-----------------|-----------|--------------|--------------|
|  | AA+          | Baa3            | 2026-01-15| System       | 2026-01-15   |
|  | AA+          | Baa3            | 2026-01-15| System       | 2026-01-15   |
|  | AA+          | Baa3            | 2026-01-15| System       | 2026-01-15   |
|  | A+           | Ba1             | 2026-02-10| J Smith      | 2026-02-10   |
|  | A            | BB+             | 2026-02-15| J Doe        | 2026-02-15   |
|  | AA+          | Baa3            | 2026-01-15| System       | 2026-01-15   |
|  | A-           | BB              | 2026-02-20| J Smith      | 2026-02-20   |
|  | AA+          | Baa3            | 2026-01-15| System       | 2026-01-15   |
|  | BBB+         | Ba2             | 2026-02-25| J Doe        | 2026-02-25   |
|  | AA+          | Baa3            | 2026-01-15| System       | 2026-01-15   |
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
|  [← Previous]  Page 1 of 32  [Next →]                                       |
|                                                                              |
+------------------------------------------------------------------------------+

RATING CHANGES TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Credit Ratings Maintenance                           Batch: March 2026      |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [Export Rating Changes]  [Refresh]                  |
|                                                                              |
|  [ Current Ratings ]  [ Rating Changes ]  [ Full Audit Trail ]              |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Rating Changes                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Rating changes detected between current and previous reporting periods      |
|                                                                              |
|  Status: [⚠ 8 Rating Changes Detected]                                      |
|                                                                              |
|  Search: [Search by Instrument Code, ISIN...]                   [Clear]     |
|                                                                              |
|  Filter by: Change Type: [All v]  Country: [All v]                          |
|                                                                              |
|  Rating Changes Grid                                         [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Report    | Instrument | ISIN         | Country | Current National      |
|  | Date      | Code       |              |         | Rating                |
|  |-----------|------------|--------------|---------|----------------------|
|  | 2026-03-31| BD004      | ZAC000000001 | ZA      | A+                   |
|  | 2026-03-31| BD005      | ZAC000000002 | ZA      | A                    |
|  | 2026-03-31| BD007      | ZAC000000003 | ZA      | A-                   |
|  | 2026-03-31| BD009      | ZAC000000004 | ZA      | BBB+                 |
|  | 2026-03-31| BD015      | ZAC000000010 | ZA      | BBB                  |
|  | 2026-03-31| BD018      | ZAC000000013 | ZA      | BBB-                 |
|  | 2026-03-31| BD023      | ZAC000000018 | ZA      | BB+                  |
|  | 2026-03-31| BD029      | ZAC000000024 | ZA      | BB                   |
|                                                                              |
|  | Previous    | Current         | Previous        | Change    | Change      |
|  | National    | International   | International   | Type      | Date        |
|  | Rating      | Rating          | Rating          |           |             |
|  |-------------|-----------------|-----------------|-----------|-------------|
|  | A           | Ba1             | Ba2             | Upgrade   | 2026-02-10  |
|  | A-          | BB+             | BB              | Upgrade   | 2026-02-15  |
|  | BBB+        | BB              | BB-             | Downgrade | 2026-02-20  |
|  | BBB         | Ba2             | Ba3             | Upgrade   | 2026-02-25  |
|  | BBB+        | BB+             | BB              | Downgrade | 2026-02-28  |
|  | BB+         | BB-             | B+              | Downgrade | 2026-03-01  |
|  | BB          | B+              | B               | Upgrade   | 2026-03-02  |
|  | BB-         | B               | B-              | Upgrade   | 2026-03-02  |
|                                                                              |
|  | Actions                                                                |  |
|  |------------------------------------------------------------------------|  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
|  | [View Details] [View Instrument]                                       |  |
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
|   |  Edit Credit Rating - BD004                                  [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Rating Details                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Instrument*:       [BD004 - Corp Bond XYZ 2029        v ]           |   |
|   |  ISIN:              ZAC000000001 - Read Only                         |   |
|   |  Country:           ZA - South Africa - Read Only                    |   |
|   |                                                                      |   |
|   |  Rating Agency*:    [Moody's                           v ]           |   |
|   |  Rating Scale*:     [Moody's National Scale            v ]           |   |
|   |                                                                      |   |
|   |  National Rating*:  [A+                                v ]           |   |
|   |  International      [Ba1                               v ]           |   |
|   |  Rating*:                                                            |   |
|   |                                                                      |   |
|   |  Final Rating       [A+                                  ]           |   |
|   |  National*:         (Auto-calculated from National Rating)           |   |
|   |                                                                      |   |
|   |  Final Rating       [Ba1                                 ]           |   |
|   |  International*:    (Auto-calculated from International Rating)      |   |
|   |                                                                      |   |
|   |  Effective Date*:   [2026-02-10                        ]             |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Previous Rating:                                                    |   |
|   |    National: A  →  A+ (Upgrade)                                      |   |
|   |    International: Ba2  →  Ba1 (Upgrade)                              |   |
|   |    Effective: 2026-01-15                                             |   |
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
|   |  Audit Trail - BD004 (Corp Bond XYZ 2029)                    [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Change History                                         [Export]    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Instrument: BD004 - ZAC000000001                                    |   |
|   |  Country: ZA (South Africa)                                          |   |
|   |                                                                      |   |
|   |  Showing: All rating changes                                         |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Date/Time         | User      | Field              | Change     |  |
|   |  |-------------------|-----------|--------------------|-----------  |  |
|   |  | 2026-02-10 14:30  | J Smith   | National Rating    | A → A+     |  |
|   |  | 2026-02-10 14:30  | J Smith   | International Rtng | Ba2 → Ba1  |  |
|   |  | 2026-02-10 14:30  | J Smith   | Effective Date     | 2026-01-15 |  |
|   |  |                   |           |                    | → 2026-02-10|  |
|   |  |-------------------|-----------|--------------------|-----------  |  |
|   |  | 2026-01-15 10:00  | System    | National Rating    | A- → A     |  |
|   |  | 2026-01-15 10:00  | System    | International Rtng | Ba3 → Ba2  |  |
|   |  | 2026-01-15 10:00  | System    | Effective Date     | 2025-11-20 |  |
|   |  |                   |           |                    | → 2026-01-15|  |
|   |  |-------------------|-----------|--------------------|-----------  |  |
|   |  | 2025-11-20 09:15  | J Doe     | National Rating    | BBB+ → A-  |  |
|   |  | 2025-11-20 09:15  | J Doe     | International Rtng | B+ → Ba3   |  |
|   |  | 2025-11-20 09:15  | J Doe     | Effective Date     | 2025-09-30 |  |
|   |  |                   |           |                    | → 2025-11-20|  |
|   |  |-------------------|-----------|--------------------|-----------  |  |
|   |  | 2025-09-30 11:00  | System    | [Record Created]               |  |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Rating Trend: Improving (3 upgrades in last 12 months)              |   |
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
| Add Rating | Button | Opens modal to add new credit rating |
| Retry Decision Flow | Button | Re-runs credit rating decision flow for current batch |
| Refresh | Button | Refreshes grid data from backend |
| Export Rating Changes | Button | Exports rating changes to Excel |
| Tab Navigation | Tabs | Switch between Current Ratings, Rating Changes, Full Audit Trail |
| Search Box | Text Input | Search by instrument code, ISIN, or country |
| Filter Dropdowns | Select | Filter by rating agency, scale, country, change type |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Credit Ratings Grid | Data Table | Displays all credit ratings |
| Rating Changes Grid | Data Table | Shows instruments with rating changes between periods |
| Edit | Button | Opens edit modal for selected rating |
| View History | Button | Opens audit trail modal |
| Delete | Button | Removes rating entry (with confirmation) |
| View Details | Button | Opens rating details in modal |
| View Instrument | Link | Navigates to instrument maintenance for that instrument |
| Edit/Add Modal | Dialog | Form to create or update credit rating |
| Previous Rating | Section | Shows last rating and change type |
| Audit Trail Modal | Dialog | Displays complete change history with trend analysis |

## User Actions

- **Add Rating**: Opens blank modal, user selects instrument, agency, scale, and enters ratings, clicks Save
- **Edit Rating**: Opens pre-populated modal, user modifies ratings, clicks Save Changes
- **Delete Rating**: Prompts confirmation, removes rating entry
- **View History**: Opens audit trail modal showing all historical rating changes with trend
- **Retry Decision Flow**: Re-executes automated rating decision flow for current batch
- **View Rating Changes**: Switches to Rating Changes tab to see upgrades/downgrades
- **Export Rating Changes**: Downloads Excel file of all rating changes for reporting
- **View Instrument**: Navigates to Instruments Maintenance filtered to that instrument
- **Search/Filter**: Real-time filtering of grid based on search terms and dropdown selections

## Navigation

- **From:** Start Page, Data Confirmation, Top Navigation
- **To:** Start Page, Data Confirmation, Instruments Maintenance
