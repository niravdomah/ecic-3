/**
 * Report Batch API Endpoints
 */

import { get } from '@/lib/api/client';
import type { ReportBatchesResponse } from '@/types/report-batch';

/**
 * Fetch all report batches
 * GET /report-batches
 */
export const getReportBatches = () =>
  get<ReportBatchesResponse>('/report-batches');
