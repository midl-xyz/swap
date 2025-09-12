import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zeroAddress, formatUnits } from 'viem';
import { satoshisToWei } from '@midl-xyz/midl-js-executor';
import { calculateAdjustedBalance } from '@/shared/lib/fees';

// Stub problematic external UI kit to avoid ESM directory import issues in tests
vi.mock('@midl-xyz/satoshi-kit', async () => ({
  ConnectButton: () => null,
  SatoshiKitProvider: ({ children }: any) => <>{children}</>,
  createMidlConfig: () => ({}),
}));

import { SwapInput } from './SwapInput';

let mockDecimals = 18;
let mockBalance = 0n as bigint;
let mockFormattedBalance = '0';
let mockChainId = 0;
let mockFeeRate = 3n as bigint; // sats/vB

vi.mock('@/entities', async () => {
  return {
    // useToken returns token metadata (we only need decimals)
    useToken: () => ({ decimals: mockDecimals }),
  };
});

vi.mock('@/features', async () => {
  return {
    TokenButton: () => null,
    useTokenBalance: () => ({
      data: {
        balance: mockBalance,
        formattedBalance: mockFormattedBalance,
      },
    }),
  };
});

vi.mock('wagmi', async () => {
  return {
    useChainId: () => mockChainId,
  } as any;
});

vi.mock('@midl-xyz/midl-js-executor-react', async () => ({
  useBTCFeeRate: () => ({ data: mockFeeRate }),
}));

function renderWithForm(ui: React.ReactElement, defaultValues: any) {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const methods = useForm({ defaultValues });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return render(ui, { wrapper: Wrapper as React.ComponentType });
}

describe('SwapInput applyMax', () => {
  afterEach(() => cleanup());
  beforeEach(() => {
    mockDecimals = 18;
    mockChainId = 0;
  });

  it('deducts BTC network fee for BTC (zeroAddress) using current feeRate', async () => {
    const startingBalance = 10_000_000_000_000_000_000n;
    mockBalance = startingBalance;
    mockFormattedBalance = formatUnits(mockBalance, mockDecimals);

    const onMax = vi.fn();

    renderWithForm(
      <SwapInput amountName="amount" tokenName="token" onMax={onMax} />,
      {
        amount: '',
        token: zeroAddress,
      },
    );

    const useMaxBtn = screen.getByRole('button');
    fireEvent.click(useMaxBtn);

    const input = screen.getByRole('textbox');

    const expected = calculateAdjustedBalance(
      true,
      startingBalance,
      mockFeeRate,
    );
    await waitFor(() =>
      expect((input as HTMLInputElement).value).toBe(
        formatUnits(expected, mockDecimals),
      ),
    );

    await waitFor(() => expect(onMax).toHaveBeenCalledTimes(1));
    const callArg = onMax.mock.calls[0][0] as any;
    expect(callArg?.target?.value).toBe(formatUnits(expected, mockDecimals));
  });

  it('clamps to 0 when BTC balance is less than or equal to the fee', async () => {
    const feeSats = 3516 + Number(mockFeeRate * (mockFeeRate * 1000n));
    const feeWei = satoshisToWei(feeSats);
    mockBalance = feeWei - 1n; // less than fee
    mockFormattedBalance = formatUnits(mockBalance, mockDecimals);

    renderWithForm(
      <SwapInput amountName="amount" tokenName="token" />, // onMax optional
      {
        amount: '',
        token: zeroAddress,
      },
    );

    fireEvent.click(screen.getByRole('button'));

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await waitFor(() => expect(input.value).toBe('0')); // formatted clamp to 0
  });

  it('does not deduct fee for non-BTC tokens', async () => {
    const fakeToken = '0x0000000000000000000000000000000000000ABC' as const;

    const startingBalance = 1234567890123456789n; // arbitrary
    mockBalance = startingBalance;
    mockFormattedBalance = formatUnits(mockBalance, mockDecimals);

    const onMax = vi.fn();

    renderWithForm(
      <SwapInput amountName="amount" tokenName="token" onMax={onMax} />,
      {
        amount: '',
        token: fakeToken,
      },
    );

    fireEvent.click(screen.getByRole('button'));

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(formatUnits(startingBalance, mockDecimals));

    // Ensure onMax matches full balance too
    const callArg = (onMax.mock.calls[0]?.[0] ?? {}) as any;
    expect(callArg?.target?.value).toBe(
      formatUnits(startingBalance, mockDecimals),
    );
  });
});
