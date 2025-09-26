import { config, Wrapper } from '@/__tests__';
import '@testing-library/jest-dom/vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Address, parseUnits, zeroAddress } from 'viem';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SwapForm } from './SwapForm';
import { AddressPurpose, connect, disconnect } from '@midl-xyz/midl-js-core';

const mockUseSwapRates = vi.fn();
const mockUseTokenBalance = vi.fn();
const mockUseSwapMidl = vi.fn();

vi.mock('next/navigation', () => require('next-router-mock/navigation'));
vi.mock('@/features/swap/api/useSwapRates', () => {
  return {
    useSwapRates: (...args: any[]) => mockUseSwapRates(...args),
  };
});
vi.mock('@/widgets/wallet/ui/Wallet', async () => {
  return {
    Wallet: () => {
      return <button data-testid="connectButton" />;
    },
  };
});
vi.mock('@/features/token/api/useTokenBalance', async () => {
  return {
    useTokenBalance: (...args: any[]) => mockUseTokenBalance(...args),
  };
});
vi.mock('@/features/swap/api/useSwapMidl', async () => {
  return {
    useSwapMidl: (...args: any[]) => mockUseSwapMidl(...args),
  };
});

describe('SwapForm', () => {
  beforeEach(async () => {
    await connect(config, { purposes: [AddressPurpose.Ordinals] });

    vi.useFakeTimers({
      shouldAdvanceTime: true,
    });

    mockUseSwapRates.mockReturnValue({
      data: null,
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    mockUseSwapMidl.mockReturnValue({
      swapAsync: vi.fn(),
    });

    mockUseTokenBalance.mockReturnValue({
      data: {},
      isFetching: false,
    });
  });

  afterEach(() => {
    vi.resetModules();
    vi.useRealTimers();
    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  it('updates output amount when input amount changes', async () => {
    const user = userEvent.setup();

    mockUseSwapRates.mockReturnValue({
      data: null,
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const input = screen.getByTestId('inputTokenAmount');
    const output = screen.getByTestId('outputTokenAmount');

    await user.type(input, '1.5');

    mockUseSwapRates.mockReturnValue({
      data: [2000000000000000000n, 150000000000000000n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });
    vi.advanceTimersByTime(250);

    await waitFor(() => expect(output).toHaveValue('0.15'));

    await user.type(input, '0');

    mockUseSwapRates.mockReturnValue({
      data: null,
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });
    vi.advanceTimersByTime(250);

    await waitFor(() => expect(output).toHaveValue(''));
  });

  it('updates input amount when output amount changes (reverse)', async () => {
    const user = userEvent.setup();

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const input = screen.getByTestId('inputTokenAmount');
    const output = screen.getByTestId('outputTokenAmount');

    await user.type(output, '1.5');

    mockUseSwapRates.mockReturnValue({
      data: [2000000000000000000n, 150000000000000000n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });
    vi.advanceTimersByTime(250);

    await waitFor(() => expect(input).toHaveValue('2'));
  });

  it('renders Wallet (ConnectButton) when address equals zeroAddress', async () => {
    await disconnect(config);

    render(<SwapForm />, { wrapper: Wrapper });

    expect(screen.getByTestId('connectButton')).toBeTruthy();
  });

  it('shows fetching state text on submit button when rates are fetching', async () => {
    const user = userEvent.setup();
    mockUseSwapRates.mockReturnValue({
      data: null,
      error: null,
      isFetching: true,
      refetch: vi.fn(),
    });

    render(<SwapForm />, { wrapper: Wrapper });

    const input = screen.getByTestId('inputTokenAmount');

    await user.type(input, '1');

    vi.advanceTimersByTime(250);

    const btn = screen.getByTestId('swapButton');

    expect(btn).toBeDisabled();
    expect(btn).toHaveTextContent('Getting the best rate...');
  });

  it('disables submit and shows Insufficient Balance when input exceeds balance', async () => {
    const user = userEvent.setup();

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      { wrapper: Wrapper },
    );

    const input = screen.getByTestId('inputTokenAmount');

    user.type(input, '101');

    await waitFor(() => {
      const btn = screen.getByRole('button', { name: 'Insufficient Balance' });
      expect((btn as HTMLButtonElement).disabled).toBe(true);
    });
  });

  it('disables submit and shows Insufficient liquidity when swapRatesError exists and form is filled', async () => {
    mockUseTokenBalance.mockReturnValue({
      data: {
        balance: 100000000000000000000000n,
        decimals: 18,
      },
      isFetching: false,
    });

    mockUseSwapRates.mockReturnValue({
      data: null,
      error: new Error('no liquidity'),
      isFetching: false,
      refetch: vi.fn(),
    });

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      { wrapper: Wrapper },
    );

    const input = screen.getByTestId('inputTokenAmount');
    const output = screen.getByTestId('outputTokenAmount');
    const btn = screen.getByTestId('swapButton');
    await userEvent.type(input, '1');
    await userEvent.type(output, '1');
    vi.advanceTimersByTime(250);

    await waitFor(() => {
      expect(btn).toBeDisabled();
      expect(btn).toHaveTextContent('Insufficient liquidity');
    });
  });

  it('calls swapAsync on submit, opens dialog and onSuccessfulSwap resets form and shows toast', async () => {
    const mockSwapAsync = vi.fn();

    mockUseSwapMidl.mockReturnValue({
      swapAsync: mockSwapAsync,
    });

    mockUseTokenBalance.mockReturnValue({
      data: {
        balance: 2000000000000000000n,
        decimals: 18,
      },
      isFetching: false,
    });

    const user = userEvent.setup();

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      { wrapper: Wrapper },
    );

    const input = screen.getByTestId('inputTokenAmount');
    const output = screen.getByTestId('outputTokenAmount');

    await user.type(input, '1.5');

    mockUseSwapRates.mockReturnValue({
      data: [2000000000000000000n, 150000000000000000n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    vi.advanceTimersByTime(250);

    const btn = screen.getByTestId('swapButton');

    await waitFor(() => expect(btn).not.toBeDisabled());
    expect(btn).toHaveTextContent('Swap');

    await user.click(btn);

    await waitFor(() => expect(mockSwapAsync).toHaveBeenCalled());

    vi.mock('@/features/swap/ui/swap-dialog/SwapDialog', async () => {
      return {
        SwapDialog: ({
          onSuccessfulSwap,
        }: {
          onSuccessfulSwap: () => void;
        }) => {
          return (
            <div data-testid="swap-dialog">
              SwapDialog
              <button data-testid="swap-success" onClick={onSuccessfulSwap}>
                Success
              </button>
            </div>
          );
        },
      };
    });

    expect(screen.getByTestId('swap-dialog')).toBeTruthy();
    await user.click(screen.getByTestId('swap-success'));

    await waitFor(() => {
      expect(input).toHaveValue('');
      expect(output).toHaveValue('');
      expect(screen.getByText('Swap successful')).toBeInTheDocument();
    });
  });

  it('swap button swaps amounts and triggers correct reverse flag when input was changed last', async () => {
    const user = userEvent.setup();

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      {
        wrapper: Wrapper,
      },
    );
    const input = screen.getByTestId('inputTokenAmount');
    const output = screen.getByTestId('outputTokenAmount');

    await user.type(input, '1.5');
    vi.advanceTimersByTime(250);

    await waitFor(() =>
      expect(mockUseSwapRates).toHaveBeenLastCalledWith(
        expect.objectContaining({ type: 'exactIn' }),
      ),
    );

    const btn = screen.getByRole('button', {
      name: 'Swap input and output tokens',
    });

    await user.click(btn);

    await waitFor(() => expect(input).toHaveValue(''));
    expect(output).toHaveValue('1.5');

    vi.advanceTimersByTime(250);

    await waitFor(() =>
      expect(mockUseSwapRates).toHaveBeenLastCalledWith(
        expect.objectContaining({ type: 'exactOut' }),
      ),
    );
  });

  it('swap button triggers forward calc when output was changed last', async () => {
    const user = userEvent.setup();

    render(
      <SwapForm
        inputToken={'0x00000000000000000000000000000000000000aa' as Address}
        outputToken={'0x00000000000000000000000000000000000000bb' as Address}
      />,
      {
        wrapper: Wrapper,
      },
    );

    const input = screen.getByTestId('inputTokenAmount');
    const output = screen.getByTestId('outputTokenAmount');

    await user.type(output, '1.5');
    vi.advanceTimersByTime(250);

    await waitFor(() =>
      expect(mockUseSwapRates).toHaveBeenLastCalledWith(
        expect.objectContaining({ type: 'exactOut' }),
      ),
    );

    const btn = screen.getByRole('button', {
      name: 'Swap input and output tokens',
    });

    await user.click(btn);

    await waitFor(() => expect(output).toHaveValue(''));
    expect(input).toHaveValue('1.5');
    await waitFor(() =>
      expect(mockUseSwapRates).toHaveBeenLastCalledWith(
        expect.objectContaining({ type: 'exactIn' }),
      ),
    );
  });
});
