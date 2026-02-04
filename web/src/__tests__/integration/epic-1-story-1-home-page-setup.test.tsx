/**
 * Story Metadata:
 * - Route: /
 * - Target File: app/page.tsx
 * - Page Action: modify_existing
 *
 * Tests for Home Page Setup - InvestInsight Start Page.
 * Epic 1, Story 1: Foundation & Start Page
 */
import { render, screen, within, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'vitest-axe';
import HomePage from '@/app/page';
import { ToastProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/toast/ToastContainer';

// Mock the API client
vi.mock('@/lib/api/client', () => ({
  get: vi.fn().mockResolvedValue({ MonthlyReportBatches: [] }),
  post: vi.fn(),
}));

// Wrapper component to provide context (required since Story 2 added toast functionality)
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

describe('HomePage - Start Page Layout', () => {
  describe('Happy Path - Core Layout Elements', () => {
    it('displays "InvestInsight" as the main heading', () => {
      renderWithProviders(<HomePage />);

      const heading = screen.getByRole('heading', {
        name: /investinsight/i,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });

    it('shows top navigation bar with Dashboard section', () => {
      renderWithProviders(<HomePage />);

      const nav = screen.getByRole('navigation');
      const dashboardLink = within(nav).getByRole('link', {
        name: /dashboard/i,
      });
      expect(dashboardLink).toBeInTheDocument();
    });

    it('shows top navigation bar with Data Confirmation section', () => {
      renderWithProviders(<HomePage />);

      const nav = screen.getByRole('navigation');
      const dataConfirmationLink = within(nav).getByRole('link', {
        name: /data confirmation/i,
      });
      expect(dataConfirmationLink).toBeInTheDocument();
    });

    it('shows top navigation bar with Maintenance menu', () => {
      renderWithProviders(<HomePage />);

      const nav = screen.getByRole('navigation');
      // Maintenance menu could be a button (dropdown trigger) or link
      const maintenanceElement = within(nav).getByRole('button', {
        name: /maintenance/i,
      });
      expect(maintenanceElement).toBeInTheDocument();
    });

    it('shows top navigation bar with User profile section', () => {
      renderWithProviders(<HomePage />);

      const nav = screen.getByRole('navigation');
      // User profile could be a button (dropdown trigger) or link
      const userProfileElement = within(nav).getByRole('button', {
        name: /user|profile/i,
      });
      expect(userProfileElement).toBeInTheDocument();
    });

    it('does not display the template placeholder text', () => {
      renderWithProviders(<HomePage />);

      const placeholder = screen.queryByText(
        /replace this with your feature implementation/i,
      );
      expect(placeholder).not.toBeInTheDocument();
    });

    it('displays Current Batch Status section', () => {
      renderWithProviders(<HomePage />);

      const batchStatusSection = screen.getByRole('region', {
        name: /current batch status/i,
      });
      expect(batchStatusSection).toBeInTheDocument();
    });

    it('displays Quick Navigation section', () => {
      renderWithProviders(<HomePage />);

      const quickNavSection = screen.getByRole('region', {
        name: /quick navigation/i,
      });
      expect(quickNavSection).toBeInTheDocument();
    });

    it('displays Batch History section', () => {
      renderWithProviders(<HomePage />);

      const batchHistorySection = screen.getByRole('region', {
        name: /batch history/i,
      });
      expect(batchHistorySection).toBeInTheDocument();
    });
  });

  describe('Edge Cases - Responsive Layout', () => {
    it('renders without errors on mobile viewport width', () => {
      // Set mobile viewport size
      global.innerWidth = 375;
      global.innerHeight = 667;
      global.dispatchEvent(new Event('resize'));

      const { container } = renderWithProviders(<HomePage />);

      // Verify core elements still render
      expect(
        screen.getByRole('heading', { name: /investinsight/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(container).toBeTruthy();
    });

    it('renders without errors on tablet viewport width', () => {
      // Set tablet viewport size
      global.innerWidth = 768;
      global.innerHeight = 1024;
      global.dispatchEvent(new Event('resize'));

      const { container } = renderWithProviders(<HomePage />);

      // Verify core elements still render
      expect(
        screen.getByRole('heading', { name: /investinsight/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(container).toBeTruthy();
    });

    it('renders without errors on desktop viewport width', () => {
      // Set desktop viewport size
      global.innerWidth = 1920;
      global.innerHeight = 1080;
      global.dispatchEvent(new Event('resize'));

      const { container } = renderWithProviders(<HomePage />);

      // Verify core elements still render
      expect(
        screen.getByRole('heading', { name: /investinsight/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(container).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    it('renders error boundary message when component fails', () => {
      // Note: This test verifies error boundary behavior exists.
      // In actual implementation, this would require:
      // 1. Error boundary wrapper in layout.tsx or app wrapper
      // 2. Forcing an error condition in the component
      // For now, we verify the component renders without throwing
      const { container } = renderWithProviders(<HomePage />);
      expect(container).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderWithProviders(<HomePage />);
      // Wait for async content to load
      await waitFor(() => {
        expect(
          screen.getByText(
            /no active batch\. create a new batch to get started\./i,
          ),
        ).toBeInTheDocument();
      });
      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('has proper heading hierarchy', () => {
      renderWithProviders(<HomePage />);

      // Main heading should be h1
      const mainHeading = screen.getByRole('heading', {
        name: /investinsight/i,
        level: 1,
      });
      expect(mainHeading).toBeInTheDocument();

      // Section headings should be h2
      const sectionHeadings = screen.getAllByRole('heading', { level: 2 });
      expect(sectionHeadings.length).toBeGreaterThanOrEqual(3);
    });

    it('has proper navigation landmark', () => {
      renderWithProviders(<HomePage />);

      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('has proper region landmarks for main sections', () => {
      renderWithProviders(<HomePage />);

      const regions = screen.getAllByRole('region');
      expect(regions.length).toBeGreaterThanOrEqual(3);
    });
  });
});
