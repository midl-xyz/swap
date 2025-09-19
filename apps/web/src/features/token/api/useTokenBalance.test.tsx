import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Address } from 'viem';

import { useTokenBalance } from './useTokenBalance';

let mockIsConnected = false;
let mockOrdAddress: string | undefined = undefined;

const btcBalanceHookMock = vi.fn((..._args: any[]) => ({
  balance: 0n,
}));

vi.mock('@midl-xyz/midl-js-react', async (importActual) => {
  const actual = await importActual<any>();
  return {
    ...actual,
    useBalance: (params: any) => btcBalanceHookMock(params),
    useAccounts: () => ({
      ordinalsAccount: mockOrdAddress ? { address: mockOrdAddress } : undefined,
      isConnected: mockIsConnected,
    }),
    useRuneBalance: () => ({ balance: { balance: 0n } }),
  };
});

vi.mock('@midl-xyz/midl-js-executor-react', async (importActual) => {
  const actual = await importActual<any>();
  return {
    ...actual,
    useEVMAddress: () => undefined,
    useToken: () => ({ rune: undefined }),
  };
});

vi.mock('wagmi', () => ({
  useBalance: () => ({ data: { value: 0n } }),
  useReadContracts: () => ({ data: undefined, refetch: vi.fn() }),
}));

vi.mock('@/global', () => ({ tokenList: [] }));

const TEST_ADDRESS = '0x0000000000000000000000000000000000000001' as Address;

describe('useTokenBalance - BTC query enabled matches isConnected', () => {
  beforeEach(() => {
    btcBalanceHookMock.mockClear();
    mockIsConnected = false;
    mockOrdAddress = undefined;
  });

  it('passes enabled=false when not connected and enabled=true after connect', () => {
    const { rerender } = renderHook(() => useTokenBalance(TEST_ADDRESS));

    expect(btcBalanceHookMock).toHaveBeenCalledTimes(1);
    expect(btcBalanceHookMock.mock.calls[0]?.[0]).toEqual({
      query: { enabled: false },
    });

    mockIsConnected = true;
    rerender();

    expect(btcBalanceHookMock).toHaveBeenCalledTimes(2);
    expect(btcBalanceHookMock.mock.calls[1]?.[0]).toEqual({
      query: { enabled: true },
    });
  });

  it('keeps enabled=true when account changes while staying connected', () => {
    mockIsConnected = true;
    mockOrdAddress = 'bc1qaddr1';

    const { rerender } = renderHook(() => useTokenBalance(TEST_ADDRESS));

    expect(btcBalanceHookMock).toHaveBeenCalledTimes(1);
    expect(btcBalanceHookMock.mock.calls[0]?.[0]).toEqual({
      query: { enabled: true },
    });

    btcBalanceHookMock.mockClear();
    mockOrdAddress = 'bc1qaddr2';
    rerender();

    expect(btcBalanceHookMock).toHaveBeenCalledTimes(1);
    expect(btcBalanceHookMock.mock.calls[0]?.[0]).toEqual({
      query: { enabled: true },
    });
  });
});
