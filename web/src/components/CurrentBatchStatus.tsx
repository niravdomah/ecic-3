'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getReportBatches } from '@/lib/api/report-batches';
import type { ReportBatch } from '@/types/report-batch';

type WorkflowStage = {
  name: string;
  status: 'completed' | 'current' | 'future';
};

const WORKFLOW_STAGES = [
  'Create Batch',
  'Data Preparation',
  'L1 Approval',
  'L2 Approval',
  'L3 Approval',
  'Complete',
];

const STATUS_TO_STAGE_INDEX: Record<string, number> = {
  'Create Batch': 0,
  'Data Preparation': 1,
  'Level 1': 2,
  'Level 2': 3,
  'Level 3': 4,
  Complete: 5,
};

function getStageStatus(
  stageIndex: number,
  currentStageIndex: number,
  isComplete: boolean,
): 'completed' | 'current' | 'future' {
  if (isComplete) {
    return 'completed';
  }
  if (stageIndex < currentStageIndex) {
    return 'completed';
  }
  if (stageIndex === currentStageIndex) {
    return 'current';
  }
  return 'future';
}

function getStageIcon(status: 'completed' | 'current' | 'future'): string {
  switch (status) {
    case 'completed':
      return '✓';
    case 'current':
      return '●';
    case 'future':
      return '[ ]';
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = date.toLocaleDateString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  });
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${day} ${month} ${year} ${hours}:${minutes}`;
}

function formatBatchName(reportDate: string, batchId: number): string {
  const date = new Date(reportDate);
  const month = date.toLocaleDateString('en-US', {
    month: 'long',
    timeZone: 'UTC',
  });
  const year = date.getUTCFullYear();
  return `Report Batch: ${month} ${year} (ID: ${batchId})`;
}

export function CurrentBatchStatus() {
  const [batch, setBatch] = useState<ReportBatch | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBatchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getReportBatches();

      if (response.MonthlyReportBatches.length === 0) {
        setBatch(null);
      } else {
        // Filter for active batches (FinishedAt is null)
        const activeBatches = response.MonthlyReportBatches.filter(
          (b) => b.FinishedAt === null,
        );

        if (activeBatches.length > 0) {
          // Get the most recent active batch
          const mostRecent = activeBatches.reduce((latest, current) => {
            return new Date(current.CreatedAt) > new Date(latest.CreatedAt)
              ? current
              : latest;
          });
          setBatch(mostRecent);
        } else {
          // No active batches, get the most recent finished batch
          const mostRecent = response.MonthlyReportBatches.reduce(
            (latest, current) => {
              return new Date(current.CreatedAt) > new Date(latest.CreatedAt)
                ? current
                : latest;
            },
          );
          setBatch(mostRecent);
        }
      }
    } catch {
      setError('Failed to load batch status. Please refresh the page.');
      setBatch(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBatchData();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div role="status" aria-busy="true" aria-label="Loading batch status">
        <Card className="p-6">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <Skeleton className="h-20 w-full mb-4" />
          <Skeleton className="h-10 w-full" />
        </Card>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className="p-6">
        <div role="alert">
          <p className="text-destructive mb-4">{error}</p>
          <Button onClick={fetchBatchData}>Retry</Button>
        </div>
      </Card>
    );
  }

  // Empty state
  if (!batch) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground">
          No active batch. Create a new batch to get started.
        </p>
      </Card>
    );
  }

  // Active batch display
  const currentStageIndex =
    STATUS_TO_STAGE_INDEX[batch.WorkflowStatusName] ?? 0;
  const isComplete = batch.WorkflowStatusName === 'Complete';

  const workflowStages: WorkflowStage[] = WORKFLOW_STAGES.map(
    (name, index) => ({
      name,
      status: getStageStatus(index, currentStageIndex, isComplete),
    }),
  );

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Batch Header */}
        <div>
          <h3 className="text-lg font-semibold">
            {formatBatchName(batch.ReportDate, batch.ReportBatchId)}
          </h3>
          <p className="text-sm text-muted-foreground">
            Status: {batch.WorkflowStatusName}
          </p>
          <p className="text-sm text-muted-foreground">
            Created: {formatDate(batch.CreatedAt)} by System
          </p>
        </div>

        {/* Workflow Progress */}
        <div>
          <h4 className="sr-only">Workflow Progress</h4>
          <ul aria-label="Workflow Progress" className="space-y-2">
            {workflowStages.map((stage, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-sm font-mono" aria-hidden="true">
                  {getStageIcon(stage.status)}
                </span>
                <span className="text-sm">{stage.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        <div className="space-y-2">
          <p className="text-sm">Portfolio Files: 0/0 Complete</p>
          <p className="text-sm">Other Files: 0/0 Complete</p>
          <p className="text-sm">Data Checks: 0 Issues Pending</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Go to Data Confirmation</Button>
          <Button variant="outline">View File Uploads</Button>
          <Button variant="outline">View Logs</Button>
        </div>
      </div>
    </Card>
  );
}
