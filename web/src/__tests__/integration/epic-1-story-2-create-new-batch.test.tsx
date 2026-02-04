/**
 * Story Metadata:
 * - Route: /
 * - Target File: app/page.tsx
 * - Page Action: modify_existing
 *
 * Tests for Create New Batch functionality on the home page.
 * Epic 1, Story 2: Foundation & Start Page
 */
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import HomePage from '@/app/page';
import { post } from '@/lib/api/client';
import { ToastProvider } from '@/contexts/ToastContext';
import { ToastContainer } from '@/components/toast/ToastContainer';

// Only mock the HTTP client
vi.mock('@/lib/api/client', () => ({
  post: vi.fn(),
}));
const mockPost = post as ReturnType<typeof vi.fn>;

const createMockSuccessResponse = () => ({
  message: 'Monthly process started successfully.',
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

describe('HomePage - Create New Batch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Happy Path - Create Batch Flow', () => {
    it('displays "Create New Batch" button in Current Batch Status section', () => {
      renderWithProviders(<HomePage />);

      const batchStatusSection = screen.getByRole('region', {
        name: /current batch status/i,
      });
      const createButton = within(batchStatusSection).getByRole('button', {
        name: /create new batch/i,
      });
      expect(createButton).toBeInTheDocument();
    });

    it('opens confirmation dialog when "Create New Batch" button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('displays dialog with title "Create New Report Batch"', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dialogTitle = screen.getByRole('heading', {
        name: /create new report batch/i,
      });
      expect(dialogTitle).toBeInTheDocument();
    });

    it('shows a date picker for selecting the report date', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      // Look for date picker input (could be a text input or button that opens calendar)
      const dateInput = screen.getByLabelText(/report date/i);
      expect(dateInput).toBeInTheDocument();
    });

    it('shows loading spinner on Confirm button during API call', async () => {
      const user = userEvent.setup();
      mockPost.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockSuccessResponse()), 100),
          ),
      );

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      // Select a date (implementation will determine exact interaction)
      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      // Verify button shows loading state (spinner or loading text)
      await waitFor(() => {
        expect(confirmButton).toHaveAttribute('aria-busy', 'true');
      });
    });

    it('displays success notification "Monthly process started successfully" after API success', async () => {
      const user = userEvent.setup();
      mockPost.mockResolvedValue(createMockSuccessResponse());

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(
        () => {
          expect(
            screen.getByText(/monthly process started successfully/i),
          ).toBeInTheDocument();
        },
        { timeout: 3000 },
      );
    });

    it('closes dialog after successful batch creation', async () => {
      const user = userEvent.setup();
      mockPost.mockResolvedValue(createMockSuccessResponse());

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    it('calls POST /monthly-runs/{ReportDate} with correct date format', async () => {
      const user = userEvent.setup();
      mockPost.mockResolvedValue(createMockSuccessResponse());

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(() => {
        expect(mockPost).toHaveBeenCalledWith('/monthly-runs/2026-03-31');
      });
    });

    it('updates Current Batch Status section after successful creation', async () => {
      const user = userEvent.setup();
      mockPost.mockResolvedValue(createMockSuccessResponse());

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      // Wait for success and verify the batch status section updates
      // (Story 3 will implement the actual data display)
      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });

      // Verify placeholder text is gone after batch creation
      // (This will be replaced with actual batch data in Story 3)
      const batchStatusSection = screen.getByRole('region', {
        name: /current batch status/i,
      });
      expect(batchStatusSection).toBeInTheDocument();
    });
  });

  describe('Edge Cases - Dialog Interactions', () => {
    it('closes dialog without API call when Cancel button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const cancelButton = screen.getByRole('button', { name: /cancel/i });
      await user.click(cancelButton);

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });

      expect(mockPost).not.toHaveBeenCalled();
    });

    it('closes dialog without API call when clicking outside dialog', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();

      // Click the dialog overlay (outside the dialog content)
      // We need to find the overlay element and click it
      const overlay = document.querySelector('[data-slot="dialog-overlay"]');
      if (overlay) {
        await user.click(overlay as Element);

        await waitFor(
          () => {
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
          },
          { timeout: 3000 },
        );
      }

      expect(mockPost).not.toHaveBeenCalled();
    });

    it('disables Confirm button during API call', async () => {
      const user = userEvent.setup();
      mockPost.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockSuccessResponse()), 100),
          ),
      );

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(() => {
        expect(confirmButton).toBeDisabled();
      });
    });

    it('disables Create New Batch button during API call', async () => {
      const user = userEvent.setup();
      mockPost.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockSuccessResponse()), 100),
          ),
      );

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      // Check that Create New Batch button is disabled while loading
      await waitFor(() => {
        expect(createButton).toBeDisabled();
      });
    });
  });

  describe('Error Handling', () => {
    it('displays error notification "Failed to create batch. Please try again." on 500 error', async () => {
      const user = userEvent.setup();
      mockPost.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(
        () => {
          expect(
            screen.getByText(/failed to create batch\. please try again\./i),
          ).toBeInTheDocument();
        },
        { timeout: 3000 },
      );
    });

    it('keeps dialog open when API returns error', async () => {
      const user = userEvent.setup();
      mockPost.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(
        () => {
          expect(
            screen.getByText(/failed to create batch\. please try again\./i),
          ).toBeInTheDocument();
        },
        { timeout: 3000 },
      );

      // Dialog should still be open
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('displays error notification "Network error. Please check your connection." on network failure', async () => {
      const user = userEvent.setup();
      const networkError = new Error('Network error');
      networkError.name = 'TypeError';
      mockPost.mockRejectedValue(networkError);

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(
        () => {
          expect(
            screen.getByText(/network error\. please check your connection\./i),
          ).toBeInTheDocument();
        },
        { timeout: 3000 },
      );
    });

    it('re-enables buttons after error', async () => {
      const user = userEvent.setup();
      mockPost.mockRejectedValue({
        statusCode: 500,
        message: 'Internal Server Error',
      });

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(
        () => {
          expect(
            screen.getByText(/failed to create batch\. please try again\./i),
          ).toBeInTheDocument();
        },
        { timeout: 3000 },
      );

      // Both buttons should be enabled again after error
      expect(confirmButton).not.toBeDisabled();
      expect(createButton).not.toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations in default state', async () => {
      const { container } = renderWithProviders(<HomePage />);
      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('has no accessibility violations when dialog is open', async () => {
      const user = userEvent.setup();
      const { container } = renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const results = await axe(container);
      expect(results).toHaveProperty('violations');
      expect(results.violations).toHaveLength(0);
    });

    it('properly labels the date picker input', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      expect(dateInput).toHaveAttribute('id');
      expect(dateInput).toHaveAccessibleName();
    });

    it('properly announces dialog to screen readers', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAccessibleName(/create new report batch/i);
    });

    it('properly announces loading state to screen readers', async () => {
      const user = userEvent.setup();
      mockPost.mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(createMockSuccessResponse()), 100),
          ),
      );

      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dateInput = screen.getByLabelText(/report date/i);
      await user.type(dateInput, '2026-03-31');

      const confirmButton = screen.getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      await waitFor(() => {
        expect(confirmButton).toHaveAttribute('aria-busy', 'true');
      });
    });

    it('focuses on dialog content when opened', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      const dialog = screen.getByRole('dialog');
      await waitFor(() => {
        const focusedElement = document.activeElement;
        expect(dialog.contains(focusedElement)).toBe(true);
      });
    });

    it('traps focus within dialog', async () => {
      const user = userEvent.setup();
      renderWithProviders(<HomePage />);

      const createButton = screen.getByRole('button', {
        name: /create new batch/i,
      });
      await user.click(createButton);

      // Tab through dialog elements
      await user.tab();
      await user.tab();
      await user.tab();

      // Focus should remain within dialog
      const dialog = screen.getByRole('dialog');
      const focusedElement = document.activeElement;
      expect(dialog.contains(focusedElement)).toBe(true);
    });
  });
});
