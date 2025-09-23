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

  it('uses getAmountsOut for exactIn and returns raw data', async () => {
    useReadContractMock.mockReturnValue({
      data: [0n, 123n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    const { result } = renderHook(() =>
      useSwapRates({ tokenIn: '0xA' as any, tokenOut: '0xB' as any, type: 'exactIn', value: 1n })
    );

    // Ensure hook passed correct params
    const call = useReadContractMock.mock.calls.at(-1)?.[0];
    expect(call.functionName).toBe('getAmountsOut');
    expect(call.args).toEqual([1n, ['0xA', '0xB']]);

    expect(result.current.error).toBeNull();
    expect(result.current.isFetching).toBe(false);
    expect(result.current.data).toEqual([0n, 123n]);
  });

  it('uses getAmountsIn for exactOut and returns raw data', async () => {
    useReadContractMock.mockReturnValue({
      data: [456n, 0n],
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    const { result } = renderHook(() =>
      useSwapRates({ tokenIn: '0xA' as any, tokenOut: '0xB' as any, type: 'exactOut', value: 2n })
    );

    const call = useReadContractMock.mock.calls.at(-1)?.[0];
    expect(call.functionName).toBe('getAmountsIn');
    expect(call.args).toEqual([2n, ['0xA', '0xB']]);

    expect(result.current.data).toEqual([456n, 0n]);
  });

  it('disables query when args are missing', async () => {
    useReadContractMock.mockReturnValue({
      data: undefined,
      error: null,
      isFetching: false,
      refetch: vi.fn(),
    });

    renderHook(() => useSwapRates({ tokenIn: undefined, tokenOut: '0xB' as any, type: 'exactIn', value: undefined }));

    const call = useReadContractMock.mock.calls.at(-1)?.[0];
    expect(call.args).toBeUndefined();
    expect(call.query?.enabled).toBe(false);
  });
});
