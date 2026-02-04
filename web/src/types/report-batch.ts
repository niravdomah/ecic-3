/**
 * Report Batch Type Definitions
 * Based on OpenAPI spec
 */

export interface ReportBatch {
  ReportBatchId: number;
  ReportDate: string;
  WorkflowInstanceId: string;
  WorkflowStatusName: string;
  CreatedAt: string;
  FinishedAt: string | null;
  LastExecutedActivityName: string;
}

export interface ReportBatchesResponse {
  MonthlyReportBatches: ReportBatch[];
}
