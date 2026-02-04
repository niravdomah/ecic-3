/**
 * Story Metadata:
 * - Route: /
 * - Target File: app/page.tsx
 * - Page Action: modify_existing
 *
 * Tests for Current Batch Status Display on the home page.
 * Epic 1, Story 3: Foundation & Start Page
 */
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import HomePage from '@/app/page';
import { get } from '@/lib/api/client';
import { ToastProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/toast/ToastContainer';

// Only mock the HTTP client
vi.mock('@/lib/api/client', () => ({
  get: vi.fn(),
  post: vi.fn(),
}));
const mockGet = get as ReturnType<typeof vi.fn>;

// Mock data factory based on OpenAPI spec
const createMockReportBatch = (overrides = {}) => ({
  ReportBatchId: 1234,
  ReportDate: '2026-03-31',
  WorkflowInstanceId: 'abc123',
  WorkflowStatusName: 'Data Preparation',
  CreatedAt: '2026-03-01T09:00:00Z',
  FinishedAt: null,
  LastExecutedActivityName: 'FileUpload',
  ...overrides,
});

const createMockReportBatchesResponse = (
  batches = [createMockReportBatch()],
) => ({
  MonthlyReportBatches: batches,
});

// Wrapper component to provide context
function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <ToastContainer />
    </ToastProvider>
  );
}

// Helper function to render with providers
function renderWithProviders(ui: React.ReactElement) {
  return render(ui, { wrapper: TestWrapper });
}

describe('HomePage - Current Batch Status Display', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Happy Path - Active Batch Display', () => {
    it('displays Current Batch Status card when the page loads', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const batchStatusSection = screen.getByRole('region', {
          name: /current batch status/i,
        });
        expect(batchStatusSection).toBeInTheDocument();
      });
    });

    it('displays report batch name in format "Report Batch: [Month] [Year] (ID: [ID])"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/report batch: march 2026 \(id: 1234\)/i),
        ).toBeInTheDocument();
      });
    });

    it('displays status label "Status: Data Preparation"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/status: data preparation/i),
        ).toBeInTheDocument();
      });
    });

    it('displays creation info "Created: [Date] [Time] by [User]"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        // Format: "Created: 01 Mar 2026 09:00 by System"
        expect(screen.getByText(/created:/i)).toBeInTheDocument();
        expect(screen.getByText(/01 mar 2026/i)).toBeInTheDocument();
      });
    });

    it('displays workflow progress indicator with 6 stages', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');
        expect(stages).toHaveLength(6);
        expect(
          within(stages[0]).getByText(/create batch/i),
        ).toBeInTheDocument();
        expect(
          within(stages[1]).getByText(/data preparation/i),
        ).toBeInTheDocument();
        expect(within(stages[2]).getByText(/l1 approval/i)).toBeInTheDocument();
        expect(within(stages[3]).getByText(/l2 approval/i)).toBeInTheDocument();
        expect(within(stages[4]).getByText(/l3 approval/i)).toBeInTheDocument();
        expect(within(stages[5]).getByText(/complete/i)).toBeInTheDocument();
      });
    });

    it('shows completed stages with checkmark, current stage with filled circle, future stages with empty box', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');

        // Create Batch should be completed (checkmark)
        expect(within(stages[0]).getByText(/✓/)).toBeInTheDocument();

        // Data Preparation should be current (filled circle)
        expect(within(stages[1]).getByText(/●/)).toBeInTheDocument();

        // Future stages should show empty box
        expect(within(stages[2]).getByText(/\[\s*\]/)).toBeInTheDocument();
      });
    });

    it('displays "Portfolio Files: X/Y Complete"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/portfolio files:.*complete/i),
        ).toBeInTheDocument();
      });
    });

    it('displays "Other Files: X/Y Complete"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText(/other files:.*complete/i)).toBeInTheDocument();
      });
    });

    it('displays "Data Checks: X Issues Pending"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText(/data checks:/i)).toBeInTheDocument();
        expect(screen.getByText(/issues pending/i)).toBeInTheDocument();
      });
    });

    it('displays three action buttons: "Go to Data Confirmation", "View File Uploads", "View Logs"', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: /go to data confirmation/i }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('button', { name: /view file uploads/i }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('button', { name: /view logs/i }),
        ).toBeInTheDocument();
      });
    });

    it('calls GET /report-batches when component mounts', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(mockGet).toHaveBeenCalledWith('/report-batches');
      });
    });
  });

  describe('Edge Cases - No Active Batch', () => {
    it('displays empty state message when no active batch exists', async () => {
      mockGet.mockResolvedValue({ MonthlyReportBatches: [] });
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(
            /no active batch\. create a new batch to get started\./i,
          ),
        ).toBeInTheDocument();
      });
    });

    it('does not display action buttons when no active batch exists', async () => {
      mockGet.mockResolvedValue({ MonthlyReportBatches: [] });
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.queryByRole('button', { name: /go to data confirmation/i }),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByRole('button', { name: /view file uploads/i }),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByRole('button', { name: /view logs/i }),
        ).not.toBeInTheDocument();
      });
    });

    it('filters for the most recent active batch when multiple batches exist', async () => {
      const olderBatch = createMockReportBatch({
        ReportBatchId: 1233,
        ReportDate: '2026-02-28',
        CreatedAt: '2026-02-01T09:00:00Z',
      });
      const newerBatch = createMockReportBatch({
        ReportBatchId: 1235,
        ReportDate: '2026-04-30',
        CreatedAt: '2026-04-01T09:00:00Z',
      });

      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([olderBatch, newerBatch]),
      );
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        // Should display the newer batch (ID: 1235)
        expect(
          screen.getByText(/report batch: april 2026 \(id: 1235\)/i),
        ).toBeInTheDocument();
      });
    });

    it('ignores finished batches when finding active batch', async () => {
      const finishedBatch = createMockReportBatch({
        ReportBatchId: 1233,
        FinishedAt: '2026-03-15T10:00:00Z',
      });
      const activeBatch = createMockReportBatch({
        ReportBatchId: 1234,
        FinishedAt: null,
      });

      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([finishedBatch, activeBatch]),
      );
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        // Should display the active batch (ID: 1234)
        expect(
          screen.getByText(/report batch: march 2026 \(id: 1234\)/i),
        ).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases - Loading State', () => {
    it('displays skeleton loader while fetching batch data', async () => {
      mockGet.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockReportBatchesResponse()), 100),
          ),
      );

      renderWithProviders(<HomePage />);

      // Should show skeleton immediately
      expect(
        screen.getByRole('status', { name: /loading batch status/i }),
      ).toBeInTheDocument();

      // Skeleton should disappear after data loads
      await waitFor(() => {
        expect(
          screen.queryByRole('status', { name: /loading batch status/i }),
        ).not.toBeInTheDocument();
      });
    });

    it('displays actual content after loading completes', async () => {
      mockGet.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockReportBatchesResponse()), 50),
          ),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/report batch: march 2026/i),
        ).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases - Complete Status', () => {
    it('shows all stages with checkmarks when batch is complete', async () => {
      const completeBatch = createMockReportBatch({
        WorkflowStatusName: 'Complete',
        FinishedAt: '2026-03-15T10:00:00Z',
      });

      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([completeBatch]),
      );
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');

        // All 6 stages should show checkmarks
        stages.forEach((stage) => {
          expect(within(stage).getByText(/✓/)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Error Handling - API Failure', () => {
    it('displays error message when API fails to fetch batch data', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(
            /failed to load batch status\. please refresh the page\./i,
          ),
        ).toBeInTheDocument();
      });
    });

    it('displays Retry button when API fails', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: /retry/i }),
        ).toBeInTheDocument();
      });
    });

    it('retries API call when Retry button is clicked', async () => {
      const user = userEvent.setup();
      mockGet.mockRejectedValueOnce({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: /retry/i }),
        ).toBeInTheDocument();
      });

      // Clear mock and set up successful response
      mockGet.mockClear();
      mockGet.mockResolvedValue(createMockReportBatchesResponse());

      const retryButton = screen.getByRole('button', { name: /retry/i });
      await user.click(retryButton);

      await waitFor(() => {
        expect(mockGet).toHaveBeenCalledWith('/report-batches');
        expect(
          screen.getByText(/report batch: march 2026/i),
        ).toBeInTheDocument();
      });
    });

    it('does not display batch content when error occurs', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/failed to load batch status/i),
        ).toBeInTheDocument();
      });

      expect(screen.queryByText(/report batch:/i)).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /go to data confirmation/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('Workflow Status Mapping', () => {
    it('maps "Data Preparation" status to stage 2 as current', async () => {
      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([
          createMockReportBatch({ WorkflowStatusName: 'Data Preparation' }),
        ]),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');

        // Stage 1 (Create Batch) should be completed
        expect(within(stages[0]).getByText(/✓/)).toBeInTheDocument();

        // Stage 2 (Data Preparation) should be current
        expect(within(stages[1]).getByText(/●/)).toBeInTheDocument();
      });
    });

    it('maps "Level 1" status to stage 3 as current', async () => {
      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([
          createMockReportBatch({ WorkflowStatusName: 'Level 1' }),
        ]),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');

        // Stages 1-2 should be completed
        expect(within(stages[0]).getByText(/✓/)).toBeInTheDocument();
        expect(within(stages[1]).getByText(/✓/)).toBeInTheDocument();

        // Stage 3 (L1 Approval) should be current
        expect(within(stages[2]).getByText(/●/)).toBeInTheDocument();
      });
    });

    it('maps "Level 2" status to stage 4 as current', async () => {
      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([
          createMockReportBatch({ WorkflowStatusName: 'Level 2' }),
        ]),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');

        // Stages 1-3 should be completed
        expect(within(stages[0]).getByText(/✓/)).toBeInTheDocument();
        expect(within(stages[1]).getByText(/✓/)).toBeInTheDocument();
        expect(within(stages[2]).getByText(/✓/)).toBeInTheDocument();

        // Stage 4 (L2 Approval) should be current
        expect(within(stages[3]).getByText(/●/)).toBeInTheDocument();
      });
    });

    it('maps "Level 3" status to stage 5 as current', async () => {
      mockGet.mockResolvedValue(
        createMockReportBatchesResponse([
          createMockReportBatch({ WorkflowStatusName: 'Level 3' }),
        ]),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        const stages = within(workflowProgress).getAllByRole('listitem');

        // Stages 1-4 should be completed
        expect(within(stages[0]).getByText(/✓/)).toBeInTheDocument();
        expect(within(stages[1]).getByText(/✓/)).toBeInTheDocument();
        expect(within(stages[2]).getByText(/✓/)).toBeInTheDocument();
        expect(within(stages[3]).getByText(/✓/)).toBeInTheDocument();

        // Stage 5 (L3 Approval) should be current
        expect(within(stages[4]).getByText(/●/)).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations with active batch', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      const { container } = renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/report batch: march 2026/i),
        ).toBeInTheDocument();
      });

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('has no accessibility violations with empty state', async () => {
      mockGet.mockResolvedValue({ MonthlyReportBatches: [] });
      const { container } = renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText(/no active batch/i)).toBeInTheDocument();
      });

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('has no accessibility violations with error state', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });
      const { container } = renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/failed to load batch status/i),
        ).toBeInTheDocument();
      });

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('properly labels workflow progress list for screen readers', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const workflowProgress = screen.getByRole('list', {
          name: /workflow progress/i,
        });
        expect(workflowProgress).toHaveAttribute(
          'aria-label',
          'Workflow Progress',
        );
      });
    });

    it('provides accessible names for action buttons', async () => {
      mockGet.mockResolvedValue(createMockReportBatchesResponse());
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const dataConfirmationBtn = screen.getByRole('button', {
          name: /go to data confirmation/i,
        });
        const fileUploadsBtn = screen.getByRole('button', {
          name: /view file uploads/i,
        });
        const logsBtn = screen.getByRole('button', { name: /view logs/i });

        expect(dataConfirmationBtn).toHaveAccessibleName();
        expect(fileUploadsBtn).toHaveAccessibleName();
        expect(logsBtn).toHaveAccessibleName();
      });
    });

    it('announces loading state to screen readers', async () => {
      mockGet.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockReportBatchesResponse()), 100),
          ),
      );

      renderWithProviders(<HomePage />);

      const skeleton = screen.getByRole('status', {
        name: /loading batch status/i,
      });
      expect(skeleton).toHaveAttribute('aria-busy', 'true');
    });

    it('announces error state to screen readers with role="alert"', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const errorMessage = screen.getByRole('alert');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent(/failed to load batch status/i);
      });
    });
  });
});
