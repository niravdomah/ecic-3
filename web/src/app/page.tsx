'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CurrentBatchStatus } from '@/components/CurrentBatchStatus';
import { post } from '@/lib/api/client';
import { useToast } from '@/contexts/ToastContext';
import type { APIError } from '@/types/api';

// Navigation cards configuration
const navigationCards = [
  {
    title: 'Data Confirmation',
    description: 'View completeness checks and issues',
    href: '/data-confirmation',
  },
  {
    title: 'File Uploads',
    description: 'Upload portfolio and other files',
    href: '/file-uploads',
  },
  {
    title: 'Instruments',
    description: 'Manage instrument master data',
    href: '/instruments',
  },
  {
    title: 'Index Prices',
    description: 'Manage index price data',
    href: '/index-prices',
  },
  {
    title: 'Approvals',
    description: 'Review and approve batches',
    href: '/approvals',
  },
  {
    title: 'Process Logs',
    description: 'View file and calculation logs',
    href: '/process-logs',
  },
];

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reportDate, setReportDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const handleCreateBatch = async () => {
    if (!reportDate) {
      return;
    }

    setIsLoading(true);

    // Transform selected date to last day of the month (API expects month-end dates)
    // Parse date parts directly to avoid timezone issues
    const [year, month] = reportDate.split('-').map(Number);
    const lastDayOfMonth = new Date(Date.UTC(year, month, 0));
    const formattedDate = lastDayOfMonth.toISOString().split('T')[0];

    try {
      await post<{ message: string }>('/monthly-report-batch', {
        ReportDate: formattedDate,
      });

      showToast({
        variant: 'success',
        title: 'Success',
        message: 'Monthly process started successfully',
      });

      setIsDialogOpen(false);
      setReportDate('');
    } catch (error) {
      // Check if this is a TypeError (network error)
      if (error instanceof Error && error.name === 'TypeError') {
        showToast({
          variant: 'error',
          title: 'Error',
          message: 'Network error. Please check your connection.',
        });
      } else {
        // Treat as API error
        const apiError = error as APIError;

        if (apiError.statusCode === 500) {
          showToast({
            variant: 'error',
            title: 'Error',
            message: 'Failed to create batch. Please try again.',
          });
        } else {
          showToast({
            variant: 'error',
            title: 'Error',
            message: 'Failed to create batch. Please try again.',
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">InvestInsight</h1>
            <div className="flex items-center gap-6">
              <a
                href="/dashboard"
                className="text-sm font-medium hover:underline"
              >
                Dashboard
              </a>
              <a
                href="/data-confirmation"
                className="text-sm font-medium hover:underline"
              >
                Data Confirmation
              </a>
              <Button variant="ghost" size="sm">
                Maintenance
              </Button>
              <Button variant="ghost" size="sm">
                User
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Current Batch Status Section */}
          <section aria-label="Current Batch Status" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Current Batch Status</h2>
              <Button
                onClick={() => setIsDialogOpen(true)}
                disabled={isLoading}
              >
                Create New Batch
              </Button>
            </div>
            <CurrentBatchStatus />
          </section>

          {/* Quick Navigation Section */}
          <section aria-label="Quick Navigation" className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Navigation</h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              role="list"
            >
              {navigationCards.map((card) => (
                <li key={card.href}>
                  <Link
                    href={card.href}
                    aria-label={card.title}
                    className="block h-full rounded-lg transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <Card className="h-full p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">
                            {card.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {card.description}
                          </p>
                        </div>
                        <ArrowRight className="size-5 text-muted-foreground flex-shrink-0 ml-2" />
                      </div>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Batch History Section */}
          <section aria-label="Batch History" className="space-y-4">
            <h2 className="text-xl font-semibold">Batch History</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                Batch history table will appear here.
              </p>
            </Card>
          </section>
        </div>
      </main>

      {/* Create New Batch Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Report Batch</DialogTitle>
            <DialogDescription>
              Select a report date to create a new monthly reporting batch.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="report-date">Report Date</Label>
              <Input
                id="report-date"
                type="date"
                value={reportDate}
                onChange={(e) => setReportDate(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateBatch}
              disabled={isLoading || !reportDate}
              aria-busy={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
