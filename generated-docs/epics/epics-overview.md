# InvestInsight Epics Overview

## Epic 1: Foundation & Start Page
**Description:** Establish the home page with batch creation, status display, and navigation to key screens.
**Dependencies:** None (foundational)

## Epic 2: Data Import Management
**Description:** Implement Portfolio Imports and Other Imports dashboards with file upload, status tracking, and error handling.
**Dependencies:** Epic 1

## Epic 3: Data Confirmation & Validation
**Description:** Build the three-tab Data Confirmation screen with file checks, other checks, and portfolio re-imports.
**Dependencies:** Epic 2

## Epic 4: Core Data Maintenance
**Description:** Implement the five critical maintenance screens: Instruments, Index Prices, Durations & YTM, Instrument Betas, and Credit Ratings.
**Dependencies:** Epic 3

## Epic 5: Workflow & Approvals
**Description:** Build the multi-level approval system (L1, L2, L3) with reject/approve actions and workflow state management.
**Dependencies:** Epics 2-4

## Epic 6: Comments, Logs & Administration
**Description:** Implement Report Comments, Process Logs, Calculation Logs, and Administration screens (users, roles, page access).
**Dependencies:** Epics 1-5

## Epic 7: Reference Data Management
**Description:** Build CRUD screens for all reference data entities (Countries, Currencies, Asset Managers, Portfolios, Indexes, Benchmarks, Credit Rating Scales, Transforms, Fee Rates, File Settings, Report List).
**Dependencies:** Can be built in parallel with other epics
