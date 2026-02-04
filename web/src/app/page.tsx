'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
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
import { post } from '@/lib/api/client';
import { useToast } from '@/contexts/ToastContext';
import type { APIError } from '@/types/api';

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

    try {
      await post<{ message: string }>(`/monthly-runs/${reportDate}`);

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
            <Card className="p-6">
              <p className="text-muted-foreground">
                Batch status information will appear here.
              </p>
            </Card>
          </section>

          {/* Quick Navigation Section */}
          <section aria-label="Quick Navigation" className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Navigation</h2>
            <Card className="p-6">
              <p className="text-muted-foreground">
                Quick navigation options will appear here.
              </p>
            </Card>
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
