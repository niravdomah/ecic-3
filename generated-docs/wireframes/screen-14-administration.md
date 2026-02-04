# Screen: Administration

## Purpose
Manage users, roles, and page access with all state-changing actions protected by audit trails.

## Wireframe
```
+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Administration                                                              |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [View Audit Trail]  [Export Settings]  [Refresh]    |
|                                                                              |
|  [ User Management ]  [ Role Management ]  [ Page Access ]                  |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  User Management                                                             |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [+ Add User]                                                                |
|                                                                              |
|  Search & Filter                                                             |
|  [Search by Name, Username, Email...]                                        |
|                                                                              |
|  Status: [All v]  Role: [All v]                                              |
|                                                                              |
|  Showing: All Users (24 users)                                 [Clear Filters]|
|                                                                              |
|  Users Grid                                                  [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | User ID | Username    | Full Name       | Email                  | Roles   |
|  |---------|-------------|-----------------|------------------------|---------|
|  | 101     | jsmith      | John Smith      | jsmith@company.com     | Admin,  |
|  |         |             |                 |                        | L1 App  |
|  | 102     | jdoe        | Jane Doe        | jdoe@company.com       | L3 App  |
|  | 103     | mwilson     | Mike Wilson     | mwilson@company.com    | L2 App  |
|  | 104     | sjohnson    | Sarah Johnson   | sjohnson@company.com   | Analyst |
|  | 105     | blee        | Brian Lee       | blee@company.com       | Analyst |
|  | 106     | amartin     | Alice Martin    | amartin@company.com    | Ops     |
|  | 107     | rwhite      | Robert White    | rwhite@company.com     | Ops     |
|  | 108     | kbrown      | Karen Brown     | kbrown@company.com     | L1 App  |
|  | 109     | dgarcia     | David Garcia    | dgarcia@company.com    | Analyst |
|  | 110     | lrodriguez  | Linda Rodriguez | lrodriguez@company.com | Viewer  |
|                                                                              |
|  | Status  | Last Login          | Created Date | Actions                    |
|  |---------|---------------------|--------------|----------------------------|
|  | Active  | 2026-03-04 08:30    | 2025-01-15   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-04 09:15    | 2025-01-15   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-03 14:45    | 2025-01-20   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-04 07:50    | 2025-02-01   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-03 16:20    | 2025-02-05   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-04 06:30    | 2025-02-10   | [Edit] [View] [Deactivate] |
|  | Inactive| 2026-02-15 11:00    | 2025-03-01   | [Edit] [View] [Activate]   |
|  | Active  | 2026-03-04 10:00    | 2025-03-15   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-03 15:30    | 2025-04-01   | [Edit] [View] [Deactivate] |
|  | Active  | 2026-03-04 09:45    | 2025-05-10   | [Edit] [View] [Deactivate] |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [← Previous]  Page 1 of 3  [Next →]                                        |
|                                                                              |
+------------------------------------------------------------------------------+

ROLE MANAGEMENT TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Administration                                                              |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [View Audit Trail]  [Export Settings]  [Refresh]    |
|                                                                              |
|  [ User Management ]  [ Role Management ]  [ Page Access ]                  |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Role Management                                                             |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  [+ Add Role]                                                                |
|                                                                              |
|  Search: [Search by Role Name...]                              [Clear]      |
|                                                                              |
|  Showing: All Roles (8 roles)                                                |
|                                                                              |
|  Roles Grid                                                  [Show/Hide Cols]|
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Role ID | Role Name       | Description                        | Users   |
|  |---------|-----------------|------------------------------------|---------|
|  | 201     | Administrator   | Full system access and config      | 2       |
|  | 202     | L1 Approver     | Level 1 approval authority         | 3       |
|  | 203     | L2 Approver     | Level 2 approval authority         | 2       |
|  | 204     | L3 Approver     | Level 3 final approval authority   | 1       |
|  | 205     | Analyst         | Data maintenance and reporting     | 8       |
|  | 206     | Operations      | File uploads and process mgmt      | 6       |
|  | 207     | Viewer          | Read-only access to reports        | 4       |
|  | 208     | Support         | Technical support access           | 2       |
|                                                                              |
|  | Status  | Created Date | Last Modified    | Actions                    |
|  |---------|--------------|------------------|----------------------------|
|  | Active  | 2025-01-01   | 2025-08-15       | [Edit] [View] [Permissions]|
|  | Active  | 2025-01-01   | 2025-06-20       | [Edit] [View] [Permissions]|
|  | Active  | 2025-01-01   | 2025-06-20       | [Edit] [View] [Permissions]|
|  | Active  | 2025-01-01   | 2025-06-20       | [Edit] [View] [Permissions]|
|  | Active  | 2025-01-01   | 2025-09-10       | [Edit] [View] [Permissions]|
|  | Active  | 2025-01-01   | 2025-07-05       | [Edit] [View] [Permissions]|
|  | Active  | 2025-01-15   | 2025-10-12       | [Edit] [View] [Permissions]|
|  | Active  | 2025-02-01   | 2025-11-08       | [Edit] [View] [Permissions]|
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Page 1 of 1                                                                 |
|                                                                              |
+------------------------------------------------------------------------------+

PAGE ACCESS TAB:

+------------------------------------------------------------------------------+
|  InvestInsight          [Dashboard] [Data Confirmation] [Maintenance]  [User]|
+------------------------------------------------------------------------------+
|                                                                              |
|  Administration                                                              |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  [← Back to Dashboard]  [View Audit Trail]  [Save Changes]  [Refresh]       |
|                                                                              |
|  [ User Management ]  [ Role Management ]  [ Page Access ]                  |
|  ═══════════════════════════════════════════════════════════════════════════ |
|                                                                              |
|  Page Access Control                                                         |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Configure which roles can access which screens and features                 |
|                                                                              |
|  Role: [Analyst                                      v ]                     |
|                                                                              |
|  Page Access Matrix                                                          |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  | Page/Screen                  | Access      | Read-Only | Full Access |    |
|  |------------------------------|-------------|-----------|-------------|    |
|  | Start Page                   | [✓]         | [ ]       | [✓]         |    |
|  | Data Confirmation            | [✓]         | [ ]       | [✓]         |    |
|  | Portfolio Imports            | [✓]         | [ ]       | [✓]         |    |
|  | Other Imports                | [✓]         | [ ]       | [✓]         |    |
|  | Instruments Maintenance      | [✓]         | [ ]       | [✓]         |    |
|  | Index Prices Maintenance     | [✓]         | [ ]       | [✓]         |    |
|  | Durations & YTM Maintenance  | [✓]         | [ ]       | [✓]         |    |
|  | Instrument Betas Maintenance | [✓]         | [ ]       | [✓]         |    |
|  | Credit Ratings Maintenance   | [✓]         | [ ]       | [✓]         |    |
|  | Report Comments              | [✓]         | [ ]       | [✓]         |    |
|  | Approvals - Level 1          | [ ]         | [ ]       | [ ]         |    |
|  | Approvals - Level 2          | [ ]         | [ ]       | [ ]         |    |
|  | Approvals - Level 3          | [ ]         | [ ]       | [ ]         |    |
|  | Process Logs                 | [✓]         | [✓]       | [ ]         |    |
|  | Administration               | [ ]         | [ ]       | [ ]         |    |
|  | Reference Data - Countries   | [✓]         | [✓]       | [ ]         |    |
|  | Reference Data - Currencies  | [✓]         | [✓]       | [ ]         |    |
|  | Reference Data - Portfolios  | [✓]         | [✓]       | [ ]         |    |
|  | Reference Data - Indexes     | [✓]         | [ ]       | [✓]         |    |
|  | Reference Data - Benchmarks  | [✓]         | [ ]       | [✓]         |    |
|                                                                              |
|  ─────────────────────────────────────────────────────────────────────────── |
|                                                                              |
|  Access Types:                                                               |
|    • Access: User can navigate to the screen                                 |
|    • Read-Only: User can view data but not create/edit/delete                |
|    • Full Access: User can view and modify data                              |
|                                                                              |
|  [Reset to Defaults]                                         [Save Changes]  |
|                                                                              |
+------------------------------------------------------------------------------+

ADD/EDIT USER MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Edit User - John Smith                                      [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  User Details                                                        |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Username*:         [jsmith                            ]             |   |
|   |  Email*:            [jsmith@company.com                ]             |   |
|   |                                                                      |   |
|   |  First Name*:       [John                              ]             |   |
|   |  Last Name*:        [Smith                             ]             |   |
|   |                                                                      |   |
|   |  Status*:           [Active                            v ]           |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Role Assignment                                                     |   |
|   |                                                                      |   |
|   |  Assigned Roles:                                                     |   |
|   |                                                                      |   |
|   |  [ ✓ ] Administrator                                                 |   |
|   |  [ ✓ ] L1 Approver                                                   |   |
|   |  [ ] L2 Approver                                                     |   |
|   |  [ ] L3 Approver                                                     |   |
|   |  [ ] Analyst                                                         |   |
|   |  [ ] Operations                                                      |   |
|   |  [ ] Viewer                                                          |   |
|   |  [ ] Support                                                         |   |
|   |                                                                      |   |
|   |  Note: Users can have multiple roles                                 |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  User Information                                                    |   |
|   |    Created: 2025-01-15 by System                                     |   |
|   |    Last Modified: 2025-08-15 by Admin                                |   |
|   |    Last Login: 2026-03-04 08:30                                      |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                        [Reset Password]  [Cancel]  [Save Changes]    |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

ADD/EDIT ROLE MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  Edit Role - Analyst                                         [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Role Details                                                        |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Role Name*:        [Analyst                           ]             |   |
|   |                                                                      |   |
|   |  Description*:                                                       |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Data maintenance and reporting responsibilities. Can update   |  |   |
|   |  | instruments, prices, durations, betas, and credit ratings.    |  |   |
|   |  | Can add report comments. Read-only access to approvals.       |  |   |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  Status*:           [Active                            v ]           |   |
|   |                                                                      |   |
|   |  * Required fields                                                   |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Assigned Users: 8                                                   |   |
|   |    • Sarah Johnson (sjohnson)                                        |   |
|   |    • Brian Lee (blee)                                                |   |
|   |    • David Garcia (dgarcia)                                          |   |
|   |    • ... (5 more)                            [View All Users]        |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Role Information                                                    |   |
|   |    Created: 2025-01-01 by System                                     |   |
|   |    Last Modified: 2025-09-10 by Admin                                |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |                 [Configure Page Access]  [Cancel]  [Save Changes]    |   |
|   +----------------------------------------------------------------------+   |
|                                                                              |
+------------------------------------------------------------------------------+

USER ACTIVITY VIEW MODAL:

+------------------------------------------------------------------------------+
|                                                                              |
|   +----------------------------------------------------------------------+   |
|   |  User Activity - John Smith                                  [✕]    |   |
|   +----------------------------------------------------------------------+   |
|   |                                                                      |   |
|   |  Activity History                                       [Export]    |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  User: jsmith (John Smith)                                           |   |
|   |  Roles: Administrator, L1 Approver                                   |   |
|   |                                                                      |   |
|   |  Showing: Last 30 days                                               |   |
|   |                                                                      |   |
|   |  +----------------------------------------------------------------+  |   |
|   |  | Date/Time         | Action         | Screen/Entity | Details   |  |
|   |  |-------------------|----------------|---------------|-----------|  |
|   |  | 2026-03-04 08:30  | Login          | System        | Success   |  |
|   |  | 2026-03-04 08:35  | View           | Start Page    | -         |  |
|   |  | 2026-03-04 08:40  | Edit           | Instrument    | ID: 1004  |  |
|   |  | 2026-03-04 08:45  | Create         | Index Price   | ID: 502   |  |
|   |  | 2026-03-04 09:00  | Approve        | L1 Approval   | Batch 1234|  |
|   |  | 2026-03-04 09:30  | View           | Process Logs  | -         |  |
|   |  | 2026-03-04 10:15  | Upload File    | Portfolio Imp | Portfolio |  |
|   |  |                   |                |               | Alpha     |  |
|   |  | 2026-03-04 11:00  | Update         | Duration      | ID: 2005  |  |
|   |  | 2026-03-04 14:30  | Create Comment | Report Cmt    | RPT-001   |  |
|   |  | 2026-03-04 16:00  | Logout         | System        | -         |  |
|   |  +----------------------------------------------------------------+  |   |
|   |                                                                      |   |
|   |  ────────────────────────────────────────────────────────────────   |   |
|   |                                                                      |   |
|   |  Activity Summary (Last 30 days):                                    |   |
|   |    • Login Count: 22                                                 |   |
|   |    • Total Actions: 347                                              |   |
|   |    • Approvals: 12                                                   |   |
|   |    • Data Changes: 156                                               |   |
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
| Add User | Button | Opens modal to create new user |
| Add Role | Button | Opens modal to create new role |
| View Audit Trail | Link | Opens full administration audit trail |
| Export Settings | Button | Exports admin configuration to file |
| Refresh | Button | Refreshes grid data from backend |
| Tab Navigation | Tabs | Switch between User Management, Role Management, Page Access |
| Search Box | Text Input | Search users/roles by name, username, email |
| Filter Dropdowns | Select | Filter by status, role |
| Clear Filters | Link | Resets all filters and search |
| Show/Hide Cols | Button | Customize visible columns |
| Users Grid | Data Table | Displays all system users |
| Roles Grid | Data Table | Displays all system roles |
| Page Access Matrix | Checkbox Grid | Configure page access by role |
| Edit | Button | Opens edit modal for user/role |
| View | Button | Opens user activity or role details |
| Deactivate/Activate | Button | Changes user status |
| Permissions | Button | Opens page access configuration for role |
| Edit User Modal | Dialog | Form to create or update user |
| Edit Role Modal | Dialog | Form to create or update role |
| Role Checkboxes | Checkboxes | Assign multiple roles to user |
| Reset Password | Button | Triggers password reset for user |
| Configure Page Access | Button | Opens page access tab for role |
| View All Users | Link | Shows full list of users with role |
| User Activity Modal | Dialog | Displays user action history |
| Save Changes | Button | Saves configuration changes |
| Reset to Defaults | Button | Resets page access to default configuration |

## User Actions

- **Add User**: Opens blank modal, admin fills details, assigns roles, clicks Save
- **Edit User**: Opens pre-populated modal, admin modifies details/roles, clicks Save Changes
- **Deactivate User**: Prompts confirmation, sets user status to Inactive (user cannot login)
- **Activate User**: Re-enables inactive user account
- **View User Activity**: Opens modal showing user's action history with summary stats
- **Reset Password**: Triggers password reset email for user
- **Add Role**: Opens blank modal, admin fills name/description, clicks Save
- **Edit Role**: Opens pre-populated modal, admin modifies details, clicks Save Changes
- **Configure Permissions**: Opens Page Access tab with role pre-selected
- **View Role Users**: Shows list of all users assigned to role
- **Configure Page Access**: Select role from dropdown, check/uncheck access/permissions, click Save Changes
- **Reset to Defaults**: Resets page access matrix to default configuration for selected role
- **Export Settings**: Downloads admin configuration (users, roles, page access) to file
- **View Audit Trail**: Opens modal showing all admin changes (user/role/permission changes) with timestamps

## Navigation

- **From:** Start Page, Top Navigation (Admin role required)
- **To:** Start Page
