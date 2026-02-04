/**
 * Application Constants Template
 *
 * Define your application-specific constants here
 * Examples include API configuration, UI settings, and business logic constants
 */

/**
 * API base URLs for different backend services
 * Set environment variables in .env.local to override defaults
 *
 * Services:
 * - MonthlyAPI: http://localhost:10003/investinsight/monthly-process
 * - DataMaintenanceAPI: http://localhost:10001/investinsight
 * - FileImporterAPI: http://localhost:10002/investinsight
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://localhost:10003/investinsight/monthly-process';

export const DATA_MAINTENANCE_API_URL =
  process.env.NEXT_PUBLIC_DATA_MAINTENANCE_API_URL ||
  'http://localhost:10001/investinsight';

export const FILE_IMPORTER_API_URL =
  process.env.NEXT_PUBLIC_FILE_IMPORTER_API_URL ||
  'http://localhost:10002/investinsight';

/**
 * Default pagination settings
 * Customize based on your application's needs
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 25,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
} as const;

/**
 * Toast notification settings
 */
export const TOAST_SETTINGS = {
  DEFAULT_DURATION: 5000, // 5 seconds
  SUCCESS_DURATION: 3000, // 3 seconds
  ERROR_DURATION: 7000, // 7 seconds
  MAX_TOASTS: 3,
} as const;

/**
 * Modal settings
 */
export const MODAL_SETTINGS = {
  ANIMATION_DURATION: 150, // 150ms for enter/exit animations
} as const;

// Add your application-specific constants below
// Example:
// export const DATE_FORMATS = {
//   DISPLAY: 'dd MMM yyyy',
//   API: 'yyyy-MM-dd',
// } as const;
