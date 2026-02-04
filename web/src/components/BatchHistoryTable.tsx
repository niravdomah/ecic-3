'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

// Safe hook that returns null if router isn't available (e.g., in tests without mock)
function useSafeRouter() {
  try {
    return useRouter();
  } catch {
    return null;
  }
}
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getReportBatches, getApprovalLogs } from '@/lib/api/report-batches';
import type { ReportBatch, ApprovalLog } from '@/types/report-batch';

const ITEMS_PER_PAGE = 5;

interface BatchHistoryTableProps {
  batches?: ReportBatch[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

interface BatchWithApprover extends ReportBatch {
  approver: string | null;
}

export function BatchHistoryTable({
  batches: propBatches,
  isLoading: propIsLoading,
  error: propError,
  // onRetry not destructured - error state defers to CurrentBatchStatus
}: BatchHistoryTableProps) {
  const router = useSafeRouter();

  // Handle navigation - use router if available, fallback to window.location
  const handleViewBatch = (batchId: number) => {
    const url = `/batch-history/${batchId}`;
    if (router) {
      router.push(url);
    } else {
      window.location.href = url;
    }
  };

  // Internal state for standalone mode (when props not provided)
  const [internalBatches, setInternalBatches] = useState<ReportBatch[]>([]);
  const [internalIsLoading, setInternalIsLoading] = useState(
    propBatches === undefined,
  );
  const [internalError, setInternalError] = useState<string | null>(null);

  const fetchBatchData = useCallback(async () => {
    setInternalIsLoading(true);
    setInternalError(null);
    try {
      const response = await getReportBatches();
      setInternalBatches(response.MonthlyReportBatches);
    } catch {
      setInternalError('Failed to load batch history');
      setInternalBatches([]);
    } finally {
      setInternalIsLoading(false);
    }
  }, []);

  // Fetch data internally if props not provided
  useEffect(() => {
    if (propBatches === undefined) {
      fetchBatchData();
    }
  }, [propBatches, fetchBatchData]);

  // Use props if provided, otherwise use internal state
  const allBatches = propBatches ?? internalBatches;
  const parentLoading = propIsLoading ?? internalIsLoading;
  const parentError = propError ?? internalError;
  // Note: onRetry not used here - error state defers to CurrentBatchStatus

  const [batchesWithApprovers, setBatchesWithApprovers] = useState<
    BatchWithApprover[]
  >([]);
  const [isLoadingApprovers, setIsLoadingApprovers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort completed batches from props
  const completedBatches = useMemo(
    () =>
      allBatches
        .filter((batch) => batch.FinishedAt !== null)
        .sort((a, b) => {
          const dateA = a.FinishedAt ? new Date(a.FinishedAt).getTime() : 0;
          const dateB = b.FinishedAt ? new Date(b.FinishedAt).getTime() : 0;
          return dateB - dateA; // Descending sort (most recent first) per spec
        }),
    [allBatches],
  );

  // Fetch approval logs when completed batches change
  useEffect(() => {
    const fetchApprovalLogs = async () => {
      if (completedBatches.length === 0) {
        setBatchesWithApprovers([]);
        return;
      }

      setIsLoadingApprovers(true);
      try {
        const batchesWithApproverData = await Promise.all(
          completedBatches.map(async (batch) => {
            try {
              const approvalLogs = await getApprovalLogs(batch.ReportBatchId);
              const l3Approval = approvalLogs.ApproveLogs.find(
                (log: ApprovalLog) => log.Type === 'Level 3',
              );
              // Use UserName from API spec, fallback to User
              let approver: string | null = null;
              if (l3Approval) {
                const userName = l3Approval.UserName || l3Approval.User;
                approver = `${userName} (L3)`;
              }
              return { ...batch, approver };
            } catch {
              return { ...batch, approver: null };
            }
          }),
        );
        setBatchesWithApprovers(batchesWithApproverData);
      } finally {
        setIsLoadingApprovers(false);
      }
    };

    if (!parentLoading && !parentError) {
      fetchApprovalLogs();
    }
  }, [completedBatches, parentLoading, parentError]);

  const isLoading = parentLoading || isLoadingApprovers;

  // Pagination calculations
  const totalPages = Math.ceil(batchesWithApprovers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBatches = batchesWithApprovers.slice(startIndex, endIndex);
  const showPagination = batchesWithApprovers.length > ITEMS_PER_PAGE;

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Loading state
  if (isLoading) {
    return (
      <div role="status" aria-busy="true" aria-label="Loading batch history">
        <Card className="p-6">
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-8 w-full" />
        </Card>
      </div>
    );
  }

  // Error state - defer to CurrentBatchStatus which shows combined error UI
  // This avoids duplicate error messages and alerts
  if (parentError) {
    return null;
  }

  // Empty state (only show after loading is complete)
  if (!isLoading && batchesWithApprovers.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground">No batch history available</p>
      </Card>
    );
  }

  // Table display
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <Table aria-label="Batch History">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Batch ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Approved By</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentBatches.map((batch) => (
              <TableRow key={batch.ReportBatchId}>
                <TableCell>{batch.ReportDate}</TableCell>
                <TableCell>{batch.ReportBatchId}</TableCell>
                <TableCell>{batch.WorkflowStatusName}</TableCell>
                <TableCell>{batch.approver || '-'}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleViewBatch(batch.ReportBatchId)}
                    aria-label={`View batch ${batch.ReportBatchId}`}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {showPagination && (
        <nav aria-label="Pagination" className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </nav>
      )}
    </div>
  );
}
