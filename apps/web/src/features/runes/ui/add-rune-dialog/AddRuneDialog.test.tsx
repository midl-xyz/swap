import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { Wrapper } from '@/__tests__';
import { AddRuneDialog } from './AddRuneDialog';

const mockAddRuneAsync = vi.fn();
const mockClearIntentions = vi.fn();

const RUNE = {
  id: 'RUNE123',
  symbol: 'RUNE',
  spaced_name: 'RU NE',
};

vi.mock('@midl-xyz/midl-js-react', async (importActual) => {
  const actual = await importActual<any>();
  return {
    ...actual,
    useRune: () => ({ rune: RUNE }),
  };
});

vi.mock('@midl-xyz/midl-js-executor-react', async (importActual) => {
  const actual = await importActual<any>();
  return {
    ...actual,
    useAddRuneERC20Intention: () => ({
      addRuneERC20Async: mockAddRuneAsync,
      isPending: false,
      error: undefined,
    }),
    useClearTxIntentions: () => mockClearIntentions,
    useAddTxIntention: () => ({ txIntentions: [] }),
    useFinalizeBTCTransaction: () => ({
      data: undefined,
      finalizeBTCTransaction: vi.fn(),
      isSuccess: false,
      isPending: false,
    }),
    useSignIntention: () => ({
      signIntention: vi.fn(),
      isPending: false,
      isSuccess: false,
    }),
    useSignIntentions: () => ({
      signIntentions: vi.fn(),
      data: undefined,
      isPending: false,
      isSuccess: false,
    }),
    useSendBTCTransactions: () => ({
      sendBTCTransactions: vi.fn(),
      isSuccess: false,
    }),
    useERC20Rune: () => ({ erc20Address: undefined, erc20State: {} }),
    useBTCFeeRate: () => ({ data: 1n }),
  };
});

vi.mock('@midl-xyz/midl-js-connectors', async (importActual) => {
  const actual = await importActual<any>();
  return {
    ...actual,
    xverseConnector: () => ({ id: 'xverse' }),
  };
});

describe('AddRuneDialog', () => {
  beforeEach(() => {
    mockAddRuneAsync.mockReset();
    mockClearIntentions.mockReset();
  });

  it('renders initial state and allows to start adding token', async () => {
    const onClose = vi.fn();
    mockAddRuneAsync.mockResolvedValue({});

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: /Add token to the MIDL ecosystem/i }),
    ).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /Add token/i });
    expect(btn).toBeEnabled();

    expect(screen.getByText(/RU NE/i)).toBeInTheDocument();

    fireEvent.click(btn);
    expect(mockAddRuneAsync).toHaveBeenCalledWith({
      runeId: RUNE.id,
    });
  });

  it('switches to intention signer mode after intention is created', async () => {
    const onClose = vi.fn();
    mockAddRuneAsync.mockResolvedValue({});

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    const btn = screen.getByRole('button', { name: /Add token/i });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /Sign add rune intentions/i }),
      ).toBeInTheDocument();
    });

    expect(screen.getByTestId('intention-signer')).toBeInTheDocument();
  });

  it('stays on initial screen when intention creation fails', async () => {
    const onClose = vi.fn();
    mockAddRuneAsync.mockRejectedValue(new Error('Failed'));

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    const btn = screen.getByRole('button', { name: /Add token/i });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          name: /Add token to the MIDL ecosystem/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it('clears intentions on close via escape key', async () => {
    const onClose = vi.fn();

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    const content = screen
      .getByRole('heading', { name: /Add token/i })
      .closest('[role="dialog"]');

    expect(content).not.toBeNull();
    fireEvent.keyDown(content!, { key: 'Escape' });

    expect(mockClearIntentions).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });
});
