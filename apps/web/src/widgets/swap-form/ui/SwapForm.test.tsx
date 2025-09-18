import React from 'react';
import { Address, zeroAddress, parseUnits } from 'viem';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

vi.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: () => null }),
}));

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

vi.mock('wagmi', () => ({
  useChainId: () => 1,
}));

vi.mock('use-debounce', () => ({
  useDebouncedCallback: (fn: any) => fn,
}));

// Configurable mocks
const mockUseEVMAddress = vi.fn();
mockUseEVMAddress.mockReturnValue('0x1111111111111111111111111111111111111111');

vi.mock('@midl-xyz/midl-js-executor-react', () => ({
  useEVMAddress: () => mockUseEVMAddress(),
  useBTCFeeRate: () => ({ data: 2n }),
}));

const mockToastSuccess = vi.fn();
vi.mock('react-hot-toast', () => ({
  default: {
    success: (...args: Parameters<typeof mockToastSuccess>) =>
      mockToastSuccess(...args),
  },
}));

vi.mock('@/widgets', () => ({
  SlippageControl: () => <div data-testid="slippage" />,
  SwapFormChart: () => <div data-testid="chart" />,
}));

vi.mock('@/widgets/wallet', () => ({
  Wallet: () => <div data-testid="wallet" />,
}));

vi.mock('@/widgets/swap-form/ui/SwapDetails', () => ({
  SwapDetails: () => <div data-testid="details" />,
}));

// Mock SwapDialog to allow triggering onSuccessfulSwap from test
vi.mock('@/features/swap/ui/swap-dialog/SwapDialog', () => ({
  SwapDialog: (props: any) => (
    <div data-testid="swap-dialog">
      <button data-testid="swap-success" onClick={props.onSuccessfulSwap}>
        success
      </button>
    </div>
  ),
}));

vi.mock('@/widgets/swap-form/ui/utils', () => ({
  getCorrectToken: ({ token }: any) => token,
}));

vi.mock('@/global', () => ({
  tokenList: [
    { name: 'MIDL•RUNE•STABLECOIN', symbol: 'MRSC', address: '0xstable' },
  ],
}));

vi.mock('@/entities', () => ({
  useToken: (_addr: string) => ({
    address: _addr,
    decimals: 18,
    symbol: 'TKN',
    name: 'Token',
  }),
}));

const mockSelectTokens = vi.fn();
const mockUseTokenBalance = vi.fn().mockReturnValue({
  data: { balance: 10n ** 20n, formattedBalance: '100' },
});
vi.mock('@/features', () => ({
  useLastUsedTokens: () => ({
    selectTokens: (...args: Parameters<typeof mockSelectTokens>) =>
      mockSelectTokens(...args),
  }),
  useTokenBalance: (...args: Parameters<typeof mockUseTokenBalance>) =>
    mockUseTokenBalance(...args),
  useSlippage: () => [0],
  // Minimal TokenButton to satisfy SwapInput rendering
  TokenButton: (props: any) => (
    <button type="button" data-testid="token-button" {...props} />
  ),
}));

const mockReadSwapRates = vi.fn();
let mockIsFetching = false;
let mockError: any = null;
vi.mock('@/features/swap/api/useSwapRates', () => ({
  useSwapRates: () => ({
    read: (...args: Parameters<typeof mockReadSwapRates>) =>
      mockReadSwapRates(...args),
    error: mockError,
    isFetching: mockIsFetching,
  }),
}));

const mockSwapAsync = vi.fn(async () => {});
vi.mock('@/features/swap/api/useSwapMidl', () => ({
  useSwapMidl: () => ({
    swapAsync: (...args: Parameters<typeof mockSwapAsync>) =>
      mockSwapAsync(...args),
  }),
}));

import { SwapForm } from './SwapForm';

describe('SwapForm', () => {
  beforeEach(() => {
    mockReadSwapRates.mockReset();
    mockSwapAsync.mockReset();
    mockToastSuccess.mockReset();
    mockIsFetching = false;
    mockError = null;
    mockUseEVMAddress.mockReturnValue(
      '0x1111111111111111111111111111111111111111',
    );
    mockUseTokenBalance.mockReturnValue({
      data: { balance: 10n ** 20n, formattedBalance: '100' },
    });
    mockReadSwapRates.mockImplementation(({ value, reverse }: any) =>
      reverse ? [value, 0n] : [0n, value],
    );
  });

  it('updates output amount when input amount changes', async () => {
    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [input, output] = screen.getAllByRole(
      'textbox',
    ) as HTMLInputElement[];

    fireEvent.input(input, { target: { value: '1.5' } });

    await waitFor(() => {
      expect(mockReadSwapRates).toHaveBeenCalledTimes(1);
      expect(output.value).toBe('1.5');
    });
  });

  it('updates input amount when output amount changes (reverse)', async () => {
    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [input, output] = screen.getAllByRole(
      'textbox',
    ) as HTMLInputElement[];

    fireEvent.input(output, { target: { value: '2' } });

    await waitFor(() => {
      expect(mockReadSwapRates).toHaveBeenCalledTimes(1);
      expect(input.value).toBe('2');
    });
  });

  it('renders Wallet when address equals zeroAddress', () => {
    mockUseEVMAddress.mockReturnValue(zeroAddress);

    render(<SwapForm />);

    expect(screen.getByTestId('wallet')).toBeTruthy();
  });

  it('shows fetching state text on submit button when rates are fetching', () => {
    mockIsFetching = true;

    render(<SwapForm />);

    expect(
      screen.getByRole('button', { name: 'Getting the best rate...' }),
    ).toBeTruthy();
  });

  it('disables submit and shows Insufficient Balance when input exceeds balance', async () => {
    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [input] = screen.getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.input(input, { target: { value: '101' } });

    await waitFor(() => {
      const btn = screen.getByRole('button', { name: 'Insufficient Balance' });
      expect((btn as HTMLButtonElement).disabled).toBe(true);
    });
  });

  it('disables submit and shows Insufficient liquidity when swapRatesError exists and form is filled', async () => {
    mockError = new Error('no liquidity');

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [input] = screen.getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.input(input, { target: { value: '1' } });

    await waitFor(() => {
      const btn = screen.getByRole('button', {
        name: 'Insufficient liquidity',
      });
      expect((btn as HTMLButtonElement).disabled).toBe(true);
    });
  });

  it('calls swapAsync on submit, opens dialog and onSuccessfulSwap resets form and shows toast', async () => {
    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [input] = screen.getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.input(input, { target: { value: '1' } });

    await waitFor(() => {
      const btn = screen.getByRole('button', { name: 'Swap' });
      expect((btn as HTMLButtonElement).disabled).toBe(false);
    });

    fireEvent.click(screen.getByRole('button', { name: 'Swap' }));

    await waitFor(() => {
      expect(mockSwapAsync).toHaveBeenCalledTimes(1);
    });

    // amountOutMin should equal parseUnits('1', 18) when slippage=0
    const firstCallArgs = (
      mockSwapAsync.mock.calls as unknown as any[][]
    )[0]?.[0];
    expect(firstCallArgs?.to).toBe(
      '0x1111111111111111111111111111111111111111',
    );
    expect(firstCallArgs?.amountOutMin).toBe(parseUnits('1', 18));

    // Dialog should be open
    expect(screen.getByTestId('swap-dialog')).toBeTruthy();

    // Simulate successful swap
    fireEvent.click(screen.getByTestId('swap-success'));

    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalled();
    });

    const [newInput] = screen.getAllByRole('textbox') as HTMLInputElement[];
    expect(newInput.value).toBe('');
  });

  it('swap button swaps amounts and triggers correct reverse flag when input was changed last', async () => {
    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [input] = screen.getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.change(input, { target: { value: '1.5' } });

    await waitFor(() => expect(mockReadSwapRates).toHaveBeenCalledTimes(1));

    fireEvent.click(
      screen.getByRole('button', { name: 'Swap input and output tokens' }),
    );

    await waitFor(() => {
      expect(
        mockReadSwapRates.mock.calls.some((c: any[]) => c[0]?.reverse === true),
      ).toBe(true);
    });
  });

  it('swap button triggers forward calc when output was changed last', async () => {
    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
    );

    const [, output] = screen.getAllByRole('textbox') as HTMLInputElement[];

    fireEvent.change(output, { target: { value: '2' } });

    await waitFor(() => expect(mockReadSwapRates).toHaveBeenCalledTimes(1));

    fireEvent.click(
      screen.getByRole('button', { name: 'Swap input and output tokens' }),
    );

    await waitFor(() => {
      expect(
        mockReadSwapRates.mock.calls.some((c: any[]) => !c[0]?.reverse),
      ).toBe(true);
    });
  });
});
