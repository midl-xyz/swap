import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom/vitest';

import { Address, parseUnits, zeroAddress } from 'viem';

vi.mock('@midl-xyz/satoshi-kit', async () => ({
  ConnectButton: () => null,
  SatoshiKitProvider: ({ children }: any) => <>{children}</>,
  createMidlConfig: () => ({}),
}));

const LP: Address = '0x00000000000000000000000000000000000000aa';
const A: Address = '0x00000000000000000000000000000000000000a1';
const B: Address = '0x00000000000000000000000000000000000000b2';
const USER: Address = '0x0000000000000000000000000000000000000c01';

let mockIsSuccess = false;
let mockRemoveLiquidity = vi.fn();
let mockReset = vi.fn();
let mockRunePresent = true;

vi.mock('@/features/liquidity/api/useRemoveLiquidityMidl', () => ({
  useRemoveLiquidityMidl: () => ({
    removeLiquidity: mockRemoveLiquidity,
    isSuccess: mockIsSuccess,
    reset: mockReset,
  }),
}));

vi.mock('@/features/liquidity/api/useGetPairStats', () => ({
  useGetPairStats: () => ({
    data: {
      reserves: {
        tokenA: 1000000000000000000n, // 1 A
        tokenB: 2000000000000000000n, // 2 B
      },
      balances: {
        lpToken: 1000000000000000000n, // 1 LP
        tokenA: 0n,
        tokenB: 0n,
      },
    },
  }),
}));

vi.mock('@/features/liquidity', () => ({
  useEstimateLiquidityPair: () => ({
    tokenAAmount: 500000000000000000n, // 0.5 A
    tokenBAmount: 1000000000000000000n, // 1 B
  }),
}));

vi.mock('@/features/slippage', () => ({
  useSlippage: () => [0.01], // 1%
}));

vi.mock('@/features/token', () => ({
  TokenLogo: () => <div data-testid="token-logo" />,
  TokenValue: () => <span />,
}));

vi.mock('@/entities', () => ({
  useToken: (addr: Address) => ({
    address: addr,
    symbol: addr === A ? 'AAA' : addr === B ? 'BBB' : 'LP',
    decimals: 18,
  }),
}));

vi.mock('@midl-xyz/midl-js-executor-react', async (importOriginal) => {
  const original =
    await importOriginal<typeof import('@midl-xyz/midl-js-executor-react')>();
  return {
    ...original,
    useEVMAddress: () => USER,
    useToken: () =>
      mockRunePresent ? { rune: { id: 'rune-1' } } : { rune: undefined },
    useERC20Rune: () => ({ rune: { id: 'rune-1', symbol: 'AAA' } }),
  } as unknown as typeof original;
});

vi.mock('jotai', async (importOriginal) => {
  const original = await importOriginal<typeof import('jotai')>();
  return {
    ...original,
    useAtom: () => [
      {
        lpToken: {
          address: LP,
          tokenA: A,
          tokenB: B,
        },
      },
      vi.fn(),
    ],
  };
});

vi.mock('wagmi', () => ({
  useChainId: () => 1,
}));

vi.mock('@/features/btc/ui/IntentionSigner', () => ({
  IntentionSigner: ({
    onClose,
    assetsToWithdraw,
  }: {
    onClose: () => void;
    assetsToWithdraw: Address[];
  }) => (
    <div
      data-testid="intention-signer"
      data-assets={JSON.stringify(assetsToWithdraw)}
    >
      Intention Signer Stub
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

import { RemoveLiquidityDialog } from './RemoveLiquidityDialog';

function renderWithClient(ui: React.ReactElement) {
  const client = new QueryClient();
  return render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>,
  );
}

describe('RemoveLiquidityDialog', () => {
  beforeEach(() => {
    mockIsSuccess = false;
    mockRemoveLiquidity = vi.fn();
    mockReset = vi.fn();
    mockRunePresent = true;
    cleanup();
  });

  it('renders initial remove form with title and quick percentage buttons', () => {
    renderWithClient(<RemoveLiquidityDialog open onClose={() => {}} />);

    expect(
      screen.getByRole('heading', { name: 'Remove Liquidity' }),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Enter amount (%)')).toBeInTheDocument();

    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
  });

  it('quick buttons set value and enable submit; submit calls removeLiquidity with correct params', async () => {
    renderWithClient(<RemoveLiquidityDialog open onClose={() => {}} />);

    const submit = screen.getByRole('button', { name: 'Remove Liquidity' });
    expect(submit).toBeDisabled();

    fireEvent.click(screen.getByText('25%'));

    await waitFor(() => expect(submit).not.toBeDisabled());

    fireEvent.click(submit);

    await waitFor(() => expect(mockRemoveLiquidity).toHaveBeenCalled());

    const arg = mockRemoveLiquidity.mock.calls[0][0];

    expect(arg.liquidity).toEqual(250000000000000000n);
    expect(arg.to).toEqual(USER);

    const expectedA = parseUnits('0.495', 18);
    const expectedB = parseUnits('0.99', 18);
    expect(
      arg.amountAMin - expectedA <= 1000n &&
        expectedA - arg.amountAMin <= 1000n,
    ).toBe(true);
    expect(
      arg.amountBMin - expectedB <= 1000n &&
        expectedB - arg.amountBMin <= 1000n,
    ).toBe(true);
  });

  it('shows price lines computed from reserves', () => {
    renderWithClient(<RemoveLiquidityDialog open onClose={() => {}} />);

    expect(
      screen.getByText((_, el) => el?.textContent === '1 BBB = 0.5 AAA'),
    ).toBeInTheDocument();
    expect(
      screen.getByText((_, el) => el?.textContent === '1 AAA = 2 BBB'),
    ).toBeInTheDocument();
  });

  it('validation: >100 invalid keeps submit disabled; 0 and 100 valid', async () => {
    renderWithClient(<RemoveLiquidityDialog open onClose={() => {}} />);

    const input = screen.getByPlaceholderText(
      'Enter amount (%)',
    ) as HTMLInputElement;
    const submit = screen.getByRole('button', { name: 'Remove Liquidity' });

    fireEvent.change(input, { target: { value: '150%' } });
    await waitFor(() => expect(submit).toBeDisabled());

    fireEvent.change(input, { target: { value: '0%' } });
    await waitFor(() => expect(submit).not.toBeDisabled());

    fireEvent.change(input, { target: { value: '100%' } });
    await waitFor(() => expect(submit).not.toBeDisabled());
  });

  it('after success shows BTC signing step with proper header and zeroAddress for assets when rune missing; and close triggers reset and invalidation', async () => {
    mockIsSuccess = true;
    mockRunePresent = false;

    const spyInvalidate = vi.spyOn(QueryClient.prototype, 'invalidateQueries');
    const onClose = vi.fn();

    renderWithClient(<RemoveLiquidityDialog open onClose={onClose} />);

    expect(
      screen.getByText('Sign intentions to remove liquidity'),
    ).toBeInTheDocument();

    const signer = screen.getByTestId('intention-signer');
    const assets = JSON.parse(signer.getAttribute('data-assets') || '[]');
    expect(assets).toEqual([zeroAddress, zeroAddress]);

    fireEvent.click(screen.getByText('Close'));

    await waitFor(() => expect(onClose).toHaveBeenCalled());
    expect(mockReset).toHaveBeenCalled();
    expect(spyInvalidate).toHaveBeenCalled();

    spyInvalidate.mockRestore();
  });
});
