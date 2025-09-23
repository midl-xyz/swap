import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { Wrapper } from '@/__tests__';
import { AddRuneDialog } from './AddRuneDialog';

const mockAddRune = vi.fn();
const mockWaitForTx = vi.fn();

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
    useWaitForTransaction: () => ({
      waitForTransaction: mockWaitForTx,
      isSuccess: false,
      reset: vi.fn(),
    }),
  };
});

vi.mock('@midl-xyz/midl-js-executor-react', async (importActual) => {
  const actual = await importActual<any>();
  return {
    ...actual,
    useAddRuneERC20: () => ({
      addRuneERC20: mockAddRune,
      data: undefined,
      isPending: false,
      error: undefined,
      reset: vi.fn(),
    }),
    useERC20Rune: () => ({ erc20Address: undefined, erc20State: {} }),
    useBTCFeeRate: () => ({ data: 1n }),
  };
});

describe('AddRuneDialog', () => {
  beforeEach(() => {
    mockAddRune.mockReset();
    mockWaitForTx.mockReset();
  });

  it('renders initial state and allows to start adding token', async () => {
    const onClose = vi.fn();

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: /Add token to the MIDL ecosystem/i }),
    ).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /Add token/i });
    expect(btn).toBeEnabled();

    expect(screen.getByText(/RU NE/i)).toBeInTheDocument();
    expect(screen.getByText(/BTC\)/i)).toBeInTheDocument();

    fireEvent.click(btn);
    expect(mockAddRune).toHaveBeenCalledWith({
      runeId: RUNE.id,
      publish: true,
    });
  });

  it('shows confirming state after broadcast and provides explorer link', async () => {
    const onClose = vi.fn();

    const modExec = await import('@midl-xyz/midl-js-executor-react');
    vi.spyOn(modExec, 'useAddRuneERC20').mockReturnValue({
      addRuneERC20: mockAddRune,
      data: { tx: { id: 'abcd' } },
      isPending: false,
      error: undefined,
      reset: vi.fn(),
    } as any);

    const modReact = await import('@midl-xyz/midl-js-react');
    vi.spyOn(modReact, 'useWaitForTransaction').mockReturnValue({
      waitForTransaction: mockWaitForTx,
      isSuccess: false,
      reset: vi.fn(),
    } as any);

    const modExec2 = await import('@midl-xyz/midl-js-executor-react');
    vi.spyOn(modExec2, 'useERC20Rune').mockReturnValue({
      erc20Address: '0x0000000000000000000000000000000000000000',
      erc20State: { dataUpdatedAt: Date.now() },
    } as any);

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: /Confirming transaction/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Waiting for the transaction to be confirmed/i),
    ).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /View transaction/i });
    expect(link).toHaveAttribute('href');
    expect(link.getAttribute('href')).toMatch(/\/tx\/abcd$/);
  });

  it('shows success message when BTC confirmed and ERC20 ready and can be closed', async () => {
    const onClose = vi.fn();

    const modExec = await import('@midl-xyz/midl-js-executor-react');
    vi.spyOn(modExec, 'useAddRuneERC20').mockReturnValue({
      addRuneERC20: mockAddRune,
      data: { tx: { id: 'abcd' } },
      isPending: false,
      error: undefined,
      reset: vi.fn(),
    } as any);

    const modReact = await import('@midl-xyz/midl-js-react');
    vi.spyOn(modReact, 'useWaitForTransaction').mockReturnValue({
      waitForTransaction: mockWaitForTx,
      isSuccess: true,
      reset: vi.fn(),
    } as any);

    vi.spyOn(modExec, 'useERC20Rune').mockReturnValue({
      erc20Address: '0x0000000000000000000000000000000000000001',
      erc20State: { dataUpdatedAt: Date.now() },
    } as any);

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: /Transaction confirmed/i }),
    ).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /Close/i });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it('shows error message from mutation while confirming', async () => {
    const onClose = vi.fn();

    const modExec = await import('@midl-xyz/midl-js-executor-react');
    vi.spyOn(modExec, 'useAddRuneERC20').mockReturnValue({
      addRuneERC20: mockAddRune,
      data: { tx: { id: 'errtx' } },
      isPending: false,
      error: new Error('Boom goes the tx'),
      reset: vi.fn(),
    } as any);

    const modReact = await import('@midl-xyz/midl-js-react');
    vi.spyOn(modReact, 'useWaitForTransaction').mockReturnValue({
      waitForTransaction: mockWaitForTx,
      isSuccess: false,
      reset: vi.fn(),
    } as any);

    vi.spyOn(modExec, 'useERC20Rune').mockReturnValue({
      erc20Address: '0x0000000000000000000000000000000000000000',
      erc20State: { dataUpdatedAt: Date.now() },
    } as any);

    render(<AddRuneDialog open onClose={onClose} />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: /Confirming transaction/i }),
    ).toBeInTheDocument();

    // Error message is shown instead of loader
    expect(screen.getByText(/Boom goes the tx/i)).toBeInTheDocument();
  });

  it('shows fallback error after repeated zero-address polling (retries exhausted)', async () => {
    const onClose = vi.fn();

    const modExec = await import('@midl-xyz/midl-js-executor-react');
    vi.spyOn(modExec, 'useAddRuneERC20').mockReturnValue({
      addRuneERC20: mockAddRune,
      data: { tx: { id: 'zzz' } },
      isPending: false,
      error: undefined,
      reset: vi.fn(),
    } as any);

    const modReact = await import('@midl-xyz/midl-js-react');
    vi.spyOn(modReact, 'useWaitForTransaction').mockReturnValue({
      waitForTransaction: mockWaitForTx,
      isSuccess: true, // BTC confirmed to start EVM polling
      reset: vi.fn(),
    } as any);

    // Return zeroAddress with increasing dataUpdatedAt values to simulate polling
    let tick = Date.now();
    const erc20Spy = vi.spyOn(modExec, 'useERC20Rune');
    erc20Spy.mockImplementation(
      () =>
        ({
          erc20Address: '0x0000000000000000000000000000000000000000',
          erc20State: { dataUpdatedAt: tick },
        }) as any,
    );

    const { rerender } = render(<AddRuneDialog open onClose={onClose} />, {
      wrapper: Wrapper,
    });

    for (let i = 0; i < 6; i++) {
      tick += 1;
      erc20Spy.mockImplementation(
        () =>
          ({
            erc20Address: '0x0000000000000000000000000000000000000000',
            erc20State: { dataUpdatedAt: tick },
          }) as any,
      );
      rerender(<AddRuneDialog open onClose={onClose} />);
    }

    expect(
      screen.getByText(
        /Failed to add the token. Please try doing it once again./i,
      ),
    ).toBeInTheDocument();
  });
});
