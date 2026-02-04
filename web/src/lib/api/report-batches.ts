/**
 * Report Batch API Endpoints
 */

import { get } from '@/lib/api/client';
import type {
  ReportBatchesResponse,
  ApprovalLogsResponse,
} from '@/types/report-batch';

/**
 * Fetch all report batches
 * GET /report-batches
 */
export const getReportBatches = () =>
  get<ReportBatchesResponse>('/report-batches');

/**
 * Fetch approval logs for a specific report batch
 * GET /approve-logs/{ReportBatchId}
 */
export const getApprovalLogs = (reportBatchId: number) =>
  get<ApprovalLogsResponse>(`/approve-logs/${reportBatchId}`);
