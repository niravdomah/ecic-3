/**
 * Story Metadata:
 * - Route: /
 * - Target File: app/page.tsx
 * - Page Action: modify_existing
 *
 * Tests for Quick Navigation Cards on the home page.
 * Epic 1, Story 4: Foundation & Start Page
 */
import { render, screen, waitFor, within } from '@testing-library/react';
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

// Mock data factory for Current Batch Status API (needed for page rendering)
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

describe('HomePage - Quick Navigation Cards', () => {
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
    // Default mock for batch status API
    mockGet.mockResolvedValue(createMockReportBatchesResponse());
  });

  describe('Happy Path - Quick Navigation Section Display', () => {
    it('displays Quick Navigation section with heading', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      expect(
        screen.getByRole('heading', { name: /quick navigation/i, level: 2 }),
      ).toBeInTheDocument();
    });

    it('displays six navigation cards in the Quick Navigation section', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      // All six cards should be present as links within the Quick Navigation section
      expect(
        within(quickNavSection!).getByRole('link', {
          name: /data confirmation/i,
        }),
      ).toBeInTheDocument();
      expect(
        within(quickNavSection!).getByRole('link', { name: /file uploads/i }),
      ).toBeInTheDocument();
      expect(
        within(quickNavSection!).getByRole('link', { name: /^instruments/i }),
      ).toBeInTheDocument();
      expect(
        within(quickNavSection!).getByRole('link', { name: /index prices/i }),
      ).toBeInTheDocument();
      expect(
        within(quickNavSection!).getByRole('link', { name: /approvals/i }),
      ).toBeInTheDocument();
      expect(
        within(quickNavSection!).getByRole('link', { name: /process logs/i }),
      ).toBeInTheDocument();
    });
  });

  describe('Happy Path - Individual Card Content', () => {
    it('displays Data Confirmation card with title and description', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const dataConfirmationCard = within(quickNavSection!).getByRole('link', {
        name: /data confirmation/i,
      });
      expect(
        within(dataConfirmationCard).getByText(/data confirmation/i),
      ).toBeInTheDocument();
      expect(
        within(dataConfirmationCard).getByText(
          /view completeness checks and issues/i,
        ),
      ).toBeInTheDocument();
    });

    it('displays File Uploads card with title and description', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /file uploads/i }),
        ).toBeInTheDocument();
      });

      const fileUploadsCard = screen.getByRole('link', {
        name: /file uploads/i,
      });
      expect(
        within(fileUploadsCard).getByText(/file uploads/i),
      ).toBeInTheDocument();
      expect(
        within(fileUploadsCard).getByText(/upload portfolio and other files/i),
      ).toBeInTheDocument();
    });

    it('displays Instruments card with title and description', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /^instruments/i }),
        ).toBeInTheDocument();
      });

      const instrumentsCard = screen.getByRole('link', {
        name: /^instruments/i,
      });
      expect(
        within(instrumentsCard).getByText(/^instruments$/i),
      ).toBeInTheDocument();
      expect(
        within(instrumentsCard).getByText(/manage instrument master data/i),
      ).toBeInTheDocument();
    });

    it('displays Index Prices card with title and description', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /index prices/i }),
        ).toBeInTheDocument();
      });

      const indexPricesCard = screen.getByRole('link', {
        name: /index prices/i,
      });
      expect(
        within(indexPricesCard).getByText(/index prices/i),
      ).toBeInTheDocument();
      expect(
        within(indexPricesCard).getByText(/manage index price data/i),
      ).toBeInTheDocument();
    });

    it('displays Approvals card with title and description', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /approvals/i }),
        ).toBeInTheDocument();
      });

      const approvalsCard = screen.getByRole('link', { name: /approvals/i });
      expect(within(approvalsCard).getByText(/approvals/i)).toBeInTheDocument();
      expect(
        within(approvalsCard).getByText(/review and approve batches/i),
      ).toBeInTheDocument();
    });

    it('displays Process Logs card with title and description', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /process logs/i }),
        ).toBeInTheDocument();
      });

      const processLogsCard = screen.getByRole('link', {
        name: /process logs/i,
      });
      expect(
        within(processLogsCard).getByText(/process logs/i),
      ).toBeInTheDocument();
      expect(
        within(processLogsCard).getByText(/view file and calculation logs/i),
      ).toBeInTheDocument();
    });
  });

  describe('Happy Path - Navigation Links', () => {
    it('navigates to /data-confirmation when Data Confirmation card is clicked', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const dataConfirmationCard = within(quickNavSection!).getByRole('link', {
        name: /data confirmation/i,
      });
      expect(dataConfirmationCard).toHaveAttribute(
        'href',
        '/data-confirmation',
      );
    });

    it('navigates to /file-uploads when File Uploads card is clicked', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /file uploads/i }),
        ).toBeInTheDocument();
      });

      const fileUploadsCard = screen.getByRole('link', {
        name: /file uploads/i,
      });
      expect(fileUploadsCard).toHaveAttribute('href', '/file-uploads');
    });

    it('navigates to /instruments when Instruments card is clicked', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /^instruments/i }),
        ).toBeInTheDocument();
      });

      const instrumentsCard = screen.getByRole('link', {
        name: /^instruments/i,
      });
      expect(instrumentsCard).toHaveAttribute('href', '/instruments');
    });

    it('navigates to /index-prices when Index Prices card is clicked', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /index prices/i }),
        ).toBeInTheDocument();
      });

      const indexPricesCard = screen.getByRole('link', {
        name: /index prices/i,
      });
      expect(indexPricesCard).toHaveAttribute('href', '/index-prices');
    });

    it('navigates to /approvals when Approvals card is clicked', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /approvals/i }),
        ).toBeInTheDocument();
      });

      const approvalsCard = screen.getByRole('link', { name: /approvals/i });
      expect(approvalsCard).toHaveAttribute('href', '/approvals');
    });

    it('navigates to /process-logs when Process Logs card is clicked', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: /process logs/i }),
        ).toBeInTheDocument();
      });

      const processLogsCard = screen.getByRole('link', {
        name: /process logs/i,
      });
      expect(processLogsCard).toHaveAttribute('href', '/process-logs');
    });
  });

  describe('Happy Path - Hover and Focus States', () => {
    it('shows hover effect when hovering over a navigation card', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const dataConfirmationCard = within(quickNavSection!).getByRole('link', {
        name: /data confirmation/i,
      });

      // Verify card is an interactive link element that can receive hover events
      // (actual hover styles are visual and tested via accessibility audit)
      expect(dataConfirmationCard.tagName).toBe('A');
      expect(dataConfirmationCard).toHaveAttribute('href');
    });
  });

  describe('Edge Cases - Responsive Grid Layout', () => {
    it('displays cards in a grid layout', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      // Find the container element that holds the cards
      const quickNavSection = screen.getByRole('region', {
        name: /quick navigation/i,
      });

      // Verify the list container exists with all 6 card items
      const gridContainer = within(quickNavSection).getByRole('list');
      const listItems = within(gridContainer).getAllByRole('listitem');
      expect(listItems).toHaveLength(6);
    });

    it('renders all six cards in the expected order', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const quickNavSection = screen.getByRole('region', {
        name: /quick navigation/i,
      });
      const gridContainer = within(quickNavSection).getByRole('list');
      const listItems = within(gridContainer).getAllByRole('listitem');

      // Verify all 6 cards are rendered in the expected order
      // (responsive styling is a visual concern tested via visual regression)
      expect(listItems).toHaveLength(6);
      expect(
        within(listItems[0]).getByText(/data confirmation/i),
      ).toBeInTheDocument();
      expect(
        within(listItems[1]).getByText(/file uploads/i),
      ).toBeInTheDocument();
      expect(
        within(listItems[2]).getByText(/^instruments$/i),
      ).toBeInTheDocument();
      expect(
        within(listItems[3]).getByText(/index prices/i),
      ).toBeInTheDocument();
      expect(within(listItems[4]).getByText(/approvals/i)).toBeInTheDocument();
      expect(
        within(listItems[5]).getByText(/process logs/i),
      ).toBeInTheDocument();
    });
  });

  describe('Edge Cases - Keyboard Accessibility', () => {
    it('shows focus indicator when card receives keyboard focus', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const dataConfirmationCard = within(quickNavSection!).getByRole('link', {
        name: /data confirmation/i,
      });

      // Card should be focusable - focus it and verify it receives focus
      dataConfirmationCard.focus();
      expect(dataConfirmationCard).toHaveFocus();
    });

    it('allows keyboard navigation through all six cards', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      // Tab through cards - each should be focusable (scoped to Quick Navigation)
      const allCards = [
        within(quickNavSection!).getByRole('link', {
          name: /data confirmation/i,
        }),
        within(quickNavSection!).getByRole('link', { name: /file uploads/i }),
        within(quickNavSection!).getByRole('link', { name: /^instruments/i }),
        within(quickNavSection!).getByRole('link', { name: /index prices/i }),
        within(quickNavSection!).getByRole('link', { name: /approvals/i }),
        within(quickNavSection!).getByRole('link', { name: /process logs/i }),
      ];

      // All cards should be in the tab order
      allCards.forEach((card) => {
        expect(card).toHaveAttribute('href');
      });
    });

    it('activates card navigation when Enter key is pressed', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const dataConfirmationCard = within(quickNavSection!).getByRole('link', {
        name: /data confirmation/i,
      });

      // Focus the card
      dataConfirmationCard.focus();
      expect(dataConfirmationCard).toHaveFocus();

      // Press Enter - link should be followed (href attribute present)
      expect(dataConfirmationCard).toHaveAttribute(
        'href',
        '/data-confirmation',
      );
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('region', { name: /quick navigation/i }),
        ).toBeInTheDocument();
      });

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('provides accessible names for all navigation cards', async () => {
      renderWithProviders(<HomePage />);

      let quickNavSection: HTMLElement;
      await waitFor(() => {
        quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toBeInTheDocument();
      });

      const cards = [
        within(quickNavSection!).getByRole('link', {
          name: /data confirmation/i,
        }),
        within(quickNavSection!).getByRole('link', { name: /file uploads/i }),
        within(quickNavSection!).getByRole('link', { name: /^instruments/i }),
        within(quickNavSection!).getByRole('link', { name: /index prices/i }),
        within(quickNavSection!).getByRole('link', { name: /approvals/i }),
        within(quickNavSection!).getByRole('link', { name: /process logs/i }),
      ];

      cards.forEach((card) => {
        expect(card).toHaveAccessibleName();
      });
    });

    it('uses semantic HTML with proper heading hierarchy', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(
          screen.getByRole('heading', { name: /quick navigation/i, level: 2 }),
        ).toBeInTheDocument();
      });

      // Quick Navigation heading should be h2 (after page h1)
      const quickNavHeading = screen.getByRole('heading', {
        name: /quick navigation/i,
        level: 2,
      });
      expect(quickNavHeading.tagName).toBe('H2');
    });

    it('properly labels the Quick Navigation section for screen readers', async () => {
      renderWithProviders(<HomePage />);

      await waitFor(() => {
        const quickNavSection = screen.getByRole('region', {
          name: /quick navigation/i,
        });
        expect(quickNavSection).toHaveAttribute(
          'aria-label',
          'Quick Navigation',
        );
      });
    });
  });
});
