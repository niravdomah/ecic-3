/**
 * Story Metadata:
 * - Route: /
 * - Target File: app/page.tsx
 * - Page Action: modify_existing
 *
 * Tests for Batch History Table on the home page.
 * Epic 1, Story 5: Foundation & Start Page
 */
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useRouter } from 'next/navigation';
import HomePage from '@/app/page';
import { get } from '@/lib/api/client';
import { ToastProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/toast/ToastContainer';

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

// Only mock the HTTP client
vi.mock('@/lib/api/client', () => ({
  get: vi.fn(),
  post: vi.fn(),
}));
const mockGet = get as ReturnType<typeof vi.fn>;
const mockUseRouter = useRouter as ReturnType<typeof vi.fn>;

// Mock data factory for Batch History API (completed batches)
const createMockCompletedBatch = (overrides = {}) => ({
  ReportBatchId: 1233,
  ReportDate: '2026-02-28',
  WorkflowInstanceId: 'xyz789',
  WorkflowStatusName: 'Complete',
  CreatedAt: '2026-02-21T08:00:00Z',
  FinishedAt: '2026-02-28T17:30:00Z',
  LastExecutedActivityName: 'L3Approval',
  ...overrides,
});

// Mock data factory for Current Batch Status API (needed for page rendering)
const createMockActiveBatch = (overrides = {}) => ({
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
  batches: ReturnType<
    typeof createMockActiveBatch | typeof createMockCompletedBatch
  >[] = [],
) => ({
  MonthlyReportBatches: batches,
});

// Mock data factory for Approval Logs API
const createMockApprovalLog = (overrides = {}) => ({
  Type: 'Level 3',
  Action: 'Approved',
  UserName: 'Jane Doe',
  CreatedAt: '2026-02-28T17:30:00Z',
  ...overrides,
});

const createMockApprovalLogsResponse = (logs = [createMockApprovalLog()]) => ({
  ApproveLogs: logs,
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

describe('HomePage - Batch History Table', () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseRouter.mockReturnValue({
      push: mockPush,
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    });
  });

  describe('Happy Path - Batch History Section Display', () => {
    it('displays Batch History section with heading when scrolling to bottom', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const batchHistorySection = screen.getByRole('region', {
          name: /batch history/i,
        });
        expect(batchHistorySection).toBeInTheDocument();
      });

      expect(
        screen.getByRole('heading', { name: /batch history/i, level: 2 }),
      ).toBeInTheDocument();
    });

    it('displays table with columns: Date, Batch ID, Status, Approved By, and Actions', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(table).toBeInTheDocument();
      });

      const table = screen.getByRole('table', { name: /batch history/i });
      expect(
        within(table).getByRole('columnheader', { name: /date/i }),
      ).toBeInTheDocument();
      expect(
        within(table).getByRole('columnheader', { name: /batch id/i }),
      ).toBeInTheDocument();
      expect(
        within(table).getByRole('columnheader', { name: /status/i }),
      ).toBeInTheDocument();
      expect(
        within(table).getByRole('columnheader', { name: /approved by/i }),
      ).toBeInTheDocument();
      expect(
        within(table).getByRole('columnheader', { name: /actions/i }),
      ).toBeInTheDocument();
    });

    it('displays report date in format "YYYY-MM-DD"', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch({
        ReportDate: '2026-02-28',
      });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText('2026-02-28')).toBeInTheDocument();
      });
    });

    it('displays batch ID number', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch({
        ReportBatchId: 1233,
      });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText('1233')).toBeInTheDocument();
      });
    });

    it('displays status "Complete"', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch({
        WorkflowStatusName: 'Complete',
      });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(within(table).getByText('Complete')).toBeInTheDocument();
      });
    });

    it('displays approver name and level in format "[Name] (L3)"', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(
          createMockApprovalLogsResponse([
            createMockApprovalLog({
              UserName: 'Jane Doe',
              Type: 'Level 3',
            }),
          ]),
        );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText('Jane Doe (L3)')).toBeInTheDocument();
      });
    });

    it('displays "View" button in Actions column', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(
          within(table).getByRole('button', { name: /view/i }),
        ).toBeInTheDocument();
      });
    });

    it('navigates to batch details page when "View" button is clicked', async () => {
      const user = userEvent.setup();
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch({ ReportBatchId: 1233 });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(
          within(table).getByRole('button', { name: /view/i }),
        ).toBeInTheDocument();
      });

      const table = screen.getByRole('table', { name: /batch history/i });
      const viewButton = within(table).getByRole('button', { name: /view/i });
      await user.click(viewButton);

      expect(mockPush).toHaveBeenCalledWith('/batch-history/1233');
    });

    it('displays pagination controls when more than 5 rows', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatches = Array.from({ length: 7 }, (_, i) =>
        createMockCompletedBatch({
          ReportBatchId: 1200 + i,
          ReportDate: `2026-0${Math.min(i + 1, 9)}-28`,
          FinishedAt: `2026-0${Math.min(i + 1, 9)}-28T17:30:00Z`,
        }),
      );

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, ...completedBatches]),
        )
        .mockResolvedValue(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('navigation', { name: /pagination/i }),
        ).toBeInTheDocument();
      });
    });

    it('shows next page of results when "Next" button is clicked', async () => {
      const user = userEvent.setup();
      const activeBatch = createMockActiveBatch();
      const completedBatches = Array.from({ length: 7 }, (_, i) =>
        createMockCompletedBatch({
          ReportBatchId: 1200 + i,
          ReportDate: `2026-0${Math.min(i + 1, 9)}-28`,
          FinishedAt: `2026-0${Math.min(i + 1, 9)}-28T17:30:00Z`,
        }),
      );

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, ...completedBatches]),
        )
        .mockResolvedValue(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('navigation', { name: /pagination/i }),
        ).toBeInTheDocument();
      });

      const pagination = screen.getByRole('navigation', {
        name: /pagination/i,
      });
      const nextButton = within(pagination).getByRole('button', {
        name: /next/i,
      });
      await user.click(nextButton);

      await waitFor(() => {
        // Page 2 should show batches with IDs 1201 and 1200 (oldest batches with descending sort)
        expect(screen.getByText('1201')).toBeInTheDocument();
        expect(screen.getByText('1200')).toBeInTheDocument();
      });
    });

    it('displays "View All →" link in section heading', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /view all/i }),
        ).toBeInTheDocument();
      });

      const viewAllLink = screen.getByRole('link', { name: /view all/i });
      expect(viewAllLink).toHaveAttribute('href', '/batch-history');
    });

    it('fetches approval logs for each completed batch', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch1 = createMockCompletedBatch({ ReportBatchId: 1233 });
      const completedBatch2 = createMockCompletedBatch({ ReportBatchId: 1232 });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([
            activeBatch,
            completedBatch1,
            completedBatch2,
          ]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse())
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(mockGet).toHaveBeenCalledWith('/report-batches');
        expect(mockGet).toHaveBeenCalledWith('/approve-logs/1233');
        expect(mockGet).toHaveBeenCalledWith('/approve-logs/1232');
      });
    });
  });

  describe('Edge Cases - Empty State', () => {
    it('displays empty state message when no completed batches exist', async () => {
      const activeBatch = createMockActiveBatch();

      mockGet.mockResolvedValueOnce(
        createMockReportBatchesResponse([activeBatch]),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/no batch history available/i),
        ).toBeInTheDocument();
      });
    });

    it('does not display table when no completed batches exist', async () => {
      const activeBatch = createMockActiveBatch();

      mockGet.mockResolvedValueOnce(
        createMockReportBatchesResponse([activeBatch]),
      );

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/no batch history available/i),
        ).toBeInTheDocument();
      });

      expect(
        screen.queryByRole('table', { name: /batch history/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('Edge Cases - Loading State', () => {
    it('displays skeleton loader in table rows while fetching batch data', async () => {
      mockGet.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(
              () =>
                resolve(
                  createMockReportBatchesResponse([
                    createMockActiveBatch(),
                    createMockCompletedBatch(),
                  ]),
                ),
              100,
            ),
          ),
      );

      renderWithProviders(<HomePage />);

      // Should show skeleton immediately
      expect(
        screen.getByRole('status', { name: /loading batch history/i }),
      ).toBeInTheDocument();

      // Skeleton should disappear after data loads
      await waitFor(() => {
        expect(
          screen.queryByRole('status', { name: /loading batch history/i }),
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases - Pagination States', () => {
    it('disables "Next" button when on last page', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatches = Array.from({ length: 7 }, (_, i) =>
        createMockCompletedBatch({
          ReportBatchId: 1200 + i,
          ReportDate: `2026-0${Math.min(i + 1, 9)}-28`,
          FinishedAt: `2026-0${Math.min(i + 1, 9)}-28T17:30:00Z`,
        }),
      );

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, ...completedBatches]),
        )
        .mockResolvedValue(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('navigation', { name: /pagination/i }),
        ).toBeInTheDocument();
      });

      // Navigate to last page
      const user = userEvent.setup();
      const pagination = screen.getByRole('navigation', {
        name: /pagination/i,
      });
      const nextButton = within(pagination).getByRole('button', {
        name: /next/i,
      });
      await user.click(nextButton);

      await waitFor(() => {
        expect(nextButton).toBeDisabled();
      });
    });

    it('disables "Previous" button when on first page', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatches = Array.from({ length: 7 }, (_, i) =>
        createMockCompletedBatch({
          ReportBatchId: 1200 + i,
          ReportDate: `2026-0${Math.min(i + 1, 9)}-28`,
          FinishedAt: `2026-0${Math.min(i + 1, 9)}-28T17:30:00Z`,
        }),
      );

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, ...completedBatches]),
        )
        .mockResolvedValue(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('navigation', { name: /pagination/i }),
        ).toBeInTheDocument();
      });

      const pagination = screen.getByRole('navigation', {
        name: /pagination/i,
      });
      const previousButton = within(pagination).getByRole('button', {
        name: /previous/i,
      });
      expect(previousButton).toBeDisabled();
    });

    it('navigates to /batch-history when "View All" link is clicked', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /view all/i }),
        ).toBeInTheDocument();
      });

      const viewAllLink = screen.getByRole('link', { name: /view all/i });
      expect(viewAllLink).toHaveAttribute('href', '/batch-history');
    });
  });

  describe('Error Handling - API Failure', () => {
    it('displays error message when API fails to fetch batch history', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/failed to load batch history/i),
        ).toBeInTheDocument();
      });
    });

    it('displays "Retry" button when API fails', async () => {
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

    it('retries API call when "Retry" button is clicked', async () => {
      const user = userEvent.setup();
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockRejectedValueOnce({
          statusCode: 500,
          message: 'Internal Server Error',
        })
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: /retry/i }),
        ).toBeInTheDocument();
      });

      const retryButton = screen.getByRole('button', { name: /retry/i });
      await user.click(retryButton);

      await waitFor(() => {
        // Verify retry succeeded by checking table is now visible (user-observable behavior)
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(table).toBeInTheDocument();
      });
    });

    it('does not display table content when error occurs', async () => {
      mockGet.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/failed to load batch history/i),
        ).toBeInTheDocument();
      });

      expect(
        screen.queryByRole('table', { name: /batch history/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('Data Filtering and Sorting', () => {
    it('only displays completed batches (where FinishedAt is not null)', async () => {
      const activeBatch = createMockActiveBatch({ FinishedAt: null });
      const completedBatch = createMockCompletedBatch({
        ReportBatchId: 1233,
        FinishedAt: '2026-02-28T17:30:00Z',
      });
      const anotherActiveBatch = createMockActiveBatch({
        ReportBatchId: 1235,
        FinishedAt: null,
      });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([
            activeBatch,
            completedBatch,
            anotherActiveBatch,
          ]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(within(table).getByText('1233')).toBeInTheDocument();
      });

      // Only one completed batch should be in the table
      const table = screen.getByRole('table', { name: /batch history/i });
      expect(within(table).queryByText('1234')).not.toBeInTheDocument();
      expect(within(table).queryByText('1235')).not.toBeInTheDocument();
    });

    it('sorts batches by FinishedAt descending (most recent first)', async () => {
      const activeBatch = createMockActiveBatch();
      const olderBatch = createMockCompletedBatch({
        ReportBatchId: 1230,
        FinishedAt: '2026-01-15T17:30:00Z',
      });
      const newerBatch = createMockCompletedBatch({
        ReportBatchId: 1233,
        FinishedAt: '2026-02-28T17:30:00Z',
      });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([
            activeBatch,
            olderBatch,
            newerBatch,
          ]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse())
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        const rows = within(table).getAllByRole('row');
        // First row is header, second row should be newer batch
        expect(within(rows[1]).getByText('1233')).toBeInTheDocument();
        expect(within(rows[2]).getByText('1230')).toBeInTheDocument();
      });
    });

    it('displays only first 5 completed batches on home page', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatches = Array.from({ length: 10 }, (_, i) =>
        createMockCompletedBatch({
          ReportBatchId: 1200 + i,
          ReportDate: `2026-0${Math.min(i + 1, 9)}-28`,
          FinishedAt: `2026-0${Math.min(i + 1, 9)}-28T17:30:00Z`,
        }),
      );

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, ...completedBatches]),
        )
        .mockResolvedValue(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        const rows = within(table).getAllByRole('row');
        // 1 header row + 5 data rows = 6 total rows
        expect(rows).toHaveLength(6);
      });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations with batch history data', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      const { container } = renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(table).toBeInTheDocument();
      });

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('has no accessibility violations with empty state', async () => {
      const activeBatch = createMockActiveBatch();

      mockGet.mockResolvedValueOnce(
        createMockReportBatchesResponse([activeBatch]),
      );

      const { container } = renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByText(/no batch history available/i),
        ).toBeInTheDocument();
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
          screen.getByText(/failed to load batch history/i),
        ).toBeInTheDocument();
      });

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('properly labels Batch History section for screen readers', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const batchHistorySection = screen.getByRole('region', {
          name: /batch history/i,
        });
        expect(batchHistorySection).toHaveAttribute(
          'aria-label',
          'Batch History',
        );
      });
    });

    it('properly labels table for screen readers', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch();

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        expect(table).toHaveAttribute('aria-label', 'Batch History');
      });
    });

    it('provides accessible names for "View" action buttons', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatch = createMockCompletedBatch({ ReportBatchId: 1233 });

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, completedBatch]),
        )
        .mockResolvedValueOnce(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const table = screen.getByRole('table', { name: /batch history/i });
        const viewButton = within(table).getByRole('button', {
          name: /view batch 1233/i,
        });
        expect(viewButton).toHaveAccessibleName();
      });
    });

    it('announces loading state to screen readers', async () => {
      mockGet.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(
              () =>
                resolve(
                  createMockReportBatchesResponse([
                    createMockActiveBatch(),
                    createMockCompletedBatch(),
                  ]),
                ),
              100,
            ),
          ),
      );

      renderWithProviders(<HomePage />);

      const skeleton = screen.getByRole('status', {
        name: /loading batch history/i,
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
        const errorMessage = screen
          .getAllByRole('alert')
          .find((el) =>
            el.textContent?.includes('Failed to load batch history'),
          );
        expect(errorMessage).toBeInTheDocument();
      });
    });

    it('properly labels pagination controls for screen readers', async () => {
      const activeBatch = createMockActiveBatch();
      const completedBatches = Array.from({ length: 7 }, (_, i) =>
        createMockCompletedBatch({
          ReportBatchId: 1200 + i,
          ReportDate: `2026-0${Math.min(i + 1, 9)}-28`,
          FinishedAt: `2026-0${Math.min(i + 1, 9)}-28T17:30:00Z`,
        }),
      );

      mockGet
        .mockResolvedValueOnce(
          createMockReportBatchesResponse([activeBatch, ...completedBatches]),
        )
        .mockResolvedValue(createMockApprovalLogsResponse());

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const pagination = screen.getByRole('navigation', {
          name: /pagination/i,
        });
        expect(pagination).toHaveAttribute('aria-label', 'Pagination');
      });
    });
  });
});
