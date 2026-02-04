# Screen: File Upload Modal

## Purpose
Popup modal for viewing file status, uploading/replacing files, viewing errors, and managing individual file operations. Shared by Portfolio Imports and Other Imports dashboards.

## Wireframe
```
+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  File Details - Sanlam Holdings                              [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  File Information                                                    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  File Type:        Holdings                                          |   |
|   |  Portfolio:        Sanlam                                            |   |
|   |  Report Batch:     March 2026 (ID: 1234)                             |   |
|   |  File Log ID:      5678                                              |   |
|   |                                                                      |   |
|   |  Status:           [✓ Complete]                                      |   |
|   |  Uploaded:         2026-03-01 14:30:15                               |   |
|   |  Uploaded By:      Jane Smith                                        |   |
|   |  File Name:        sanlam_holdings_202603.csv                        |   |
|   |  File Size:        2.4 MB                                            |   |
|   |  Records:          1,247 rows processed                              |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Validation Results                                                  |   |
|   |                                                                      |   |
|   |    [✓] Schema validation passed                                      |   |
|   |    [✓] Data type validation passed                                   |   |
|   |    [✓] Business rules validation passed                              |   |
|   |    [✓] No duplicate records found                                    |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Actions                                                             |   |
|   |                                                                      |   |
|   |  [ Upload New File ]                                                 |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Drag and drop file here or click to browse                     |  |   |
|   |  |                                                                |  |   |
|   |  | Accepted formats: .csv, .xlsx, .txt                           |  |   |
|   |  | Maximum size: 50 MB                                           |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  [Browse Files...]                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  [ Export Current File ]  [ Retry Validation ]  [ Cancel File ]     |   |
|   |                                                                      |   |
|   |                                          [Close]    [Upload & Save]  |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

ALTERNATIVE VIEW - Failed Status with Errors:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  File Details - Portfolio Gamma Instrument Static           [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  File Information                                                    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  File Type:        Instrument Static                                 |   |
|   |  Portfolio:        Portfolio Gamma                                   |   |
|   |  Report Batch:     March 2026 (ID: 1234)                             |   |
|   |  File Log ID:      5679                                              |   |
|   |                                                                      |   |
|   |  Status:           [✗ Failed]                                        |   |
|   |  Uploaded:         2026-03-02 09:15:00                               |   |
|   |  Uploaded By:      John Smith                                        |   |
|   |  File Name:        gamma_instrument_static_202603.xlsx               |   |
|   |  File Size:        1.8 MB                                            |   |
|   |  Records:          892 rows attempted, 0 processed                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Validation Errors                                        [Export]  |   |
|   |                                                                      |   |
|   |  Showing 15 errors (scroll for more)                                 |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Row | Error Code | Description                                |  |   |
|   |  |-----|------------|-------------------------------------------|  |   |
|   |  | 12  | E001       | Missing required field: InstrumentCode    |  |   |
|   |  | 12  | E002       | Invalid ISIN format                       |  |   |
|   |  | 45  | E003       | Invalid date format in MaturityDate       |  |   |
|   |  | 67  | E001       | Missing required field: InstrumentCode    |  |   |
|   |  | 89  | E004       | Currency code not found in reference data |  |   |
|   |  | 103 | E005       | Instrument type invalid                   |  |   |
|   |  | 124 | E002       | Invalid ISIN format                       |  |   |
|   |  | 156 | E006       | Duplicate InstrumentCode                  |  |   |
|   |  | 178 | E001       | Missing required field: InstrumentCode    |  |   |
|   |  | 201 | E003       | Invalid date format in MaturityDate       |  |   |
|   |  | 223 | E004       | Currency code not found in reference data |  |   |
|   |  | 245 | E007       | Country code not found in reference data  |  |   |
|   |  | 267 | E002       | Invalid ISIN format                       |  |   |
|   |  | 289 | E001       | Missing required field: InstrumentCode    |  |   |
|   |  | 301 | E008       | Issuer ID not found in reference data     |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Actions                                                             |   |
|   |                                                                      |   |
|   |  [ Upload Corrected File ]                                           |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Drag and drop file here or click to browse                     |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  [Browse Files...]                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  [ Export Errors ]  [ Retry Validation ]  [ Cancel File ]           |   |
|   |                                                                      |   |
|   |                                          [Close]    [Upload & Save]  |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+
```

## Elements

| Element | Type | Description |
|---------|------|-------------|
| Close [✕] | Button | Close modal without changes |
| File Information | Section | Displays file metadata and status |
| Status Indicator | Badge | Visual status (Complete, Processing, Failed, Missing) |
| Validation Results | Section | Shows validation checks (if complete) |
| Validation Errors Table | Data Grid | Lists all validation errors with row numbers and codes |
| Upload Area | Drag-Drop Zone | Area to drag files or click to browse |
| Browse Files | Button | Opens file browser dialog |
| Export Current File | Button | Downloads the uploaded file |
| Export Errors | Button | Downloads error list as Excel/CSV |
| Retry Validation | Button | Re-runs validation on current file |
| Cancel File | Button | Cancels/removes the file from the batch |
| Close | Button | Close modal without changes |
| Upload & Save | Button | Upload selected file and save to batch |

## User Actions

- **View Status**: Modal displays when status icon is clicked from Imports dashboards
- **Upload New/Corrected File**: User drags file or browses to select, then clicks Upload & Save
- **Export Current File**: Downloads the currently uploaded file
- **Export Errors**: Downloads validation error list for correction
- **Retry Validation**: Re-runs validation rules on current file (after backend corrections)
- **Cancel File**: Removes file from batch (confirmation dialog), returns to Missing status
- **Close**: Closes modal without making changes

## Navigation

- **From:** Portfolio Imports Dashboard (Screen 2), Other Imports Dashboard (Screen 3)
- **To:** Returns to calling dashboard after close/save
