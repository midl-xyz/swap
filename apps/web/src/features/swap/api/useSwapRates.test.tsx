import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { useSwapRates } from './useSwapRates';

const useReadContractMock = vi.fn();

vi.mock('wagmi', () => ({
  useChainId: () => 1,
  useReadContract: (args: any) => useReadContractMock(args),
}));

vi.mock('@/global', () => ({
  deployments: {
    1: { UniswapV2Router02: { address: '0xrouter' } },
  },
  uniswapV2Router02Abi: [] as any,
}));

describe('useSwapRates (useReadContract)', () => {
  beforeEach(() => {
    useReadContractMock.mockReset();
  });

  it('uses getAmountsOut for exactIn and exposes swapRates', async () => {
    useReadContractMock.mockReturnValue({
      data: [0n, 123n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    const { result } = renderHook(() =>
      useSwapRates({
        tokenIn: '0xA' as any,
        tokenOut: '0xB' as any,
        type: 'exactIn',
        value: 1n,
      }),
    );

    const lastCall = useReadContractMock.mock.lastCall?.[0];
    expect(lastCall.functionName).toBe('getAmountsOut');
    expect(lastCall.args).toEqual([1n, ['0xA', '0xB']]);

    expect(result.current.error).toBeNull();
    expect(result.current.isFetching).toBe(false);
    expect(result.current.data).toEqual([0n, 123n]);
  });

  it('uses getAmountsIn for exactOut and exposes swapRates', async () => {
    useReadContractMock.mockReturnValue({
      data: [456n, 0n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    const { result } = renderHook(() =>
      useSwapRates({
        tokenIn: '0xA' as any,
        tokenOut: '0xB' as any,
        type: 'exactOut',
        value: 2n,
      }),
    );

    const lastCall = useReadContractMock.mock.lastCall?.[0];
    expect(lastCall.functionName).toBe('getAmountsIn');
    expect(lastCall.args).toEqual([2n, ['0xA', '0xB']]);

    expect(result.current.data).toEqual([456n, 0n]);
  });

  it.each([
    [
      'missing tokenIn',
      { tokenIn: undefined, tokenOut: '0xB' as any, value: 1n },
    ],
    [
      'missing tokenOut',
      { tokenIn: '0xA' as any, tokenOut: undefined, value: 1n },
    ],
    [
      'missing value',
      { tokenIn: '0xA' as any, tokenOut: '0xB' as any, value: undefined },
    ],
  ])(
    'disables query when args are missing: %s',
    async (_label, { tokenIn, tokenOut, value }) => {
      useReadContractMock.mockReturnValue({
        data: undefined,
        error: null,
        isFetching: false,
        refetch: vi.fn(),
      });

      const { result } = renderHook(() =>
        useSwapRates({ tokenIn, tokenOut, type: 'exactIn', value }),
      );

      const lastCall = useReadContractMock.mock.lastCall?.[0];
      expect(lastCall.args).toBeUndefined();
      expect(lastCall.query?.enabled).toBe(false);
      expect(result.current.error).toBeNull();
    },
  );
});
