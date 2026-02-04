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

export interface ApprovalLog {
  Id: number;
  ReportBatchId: number;
  ReportDate: string;
  Type: string;
  IsApproved: boolean;
  User: string;
  UserName?: string; // API spec uses UserName, keep both for compatibility
  Time: string;
  RejectReason: string;
}

export interface ApprovalLogsResponse {
  ApproveLogs: ApprovalLog[];
}
