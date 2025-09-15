import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { useSwapRates } from './useSwapRates';

const readContractMock = vi.fn();

vi.mock('@wagmi/core', () => ({
  readContract: (
    ...args: Parameters<typeof readContractMock>
  ) => readContractMock(...args),
}));

vi.mock('wagmi', () => ({
  useChainId: () => 1,
  useConfig: () => ({}) as any,
}));

vi.mock('@/global', () => ({
  deployments: {
    1: { UniswapV2Router02: { address: '0xrouter' } },
  },
  uniswapV2Router02Abi: [] as any,
}));

describe('useSwapRates (renderHook)', () => {
  beforeEach(() => {
    readContractMock.mockReset();
    cleanup();
  });

  it('calls getAmountsOut by default and returns result', async () => {
    readContractMock.mockResolvedValueOnce([0n, 123n]);

    const { result } = renderHook(() => useSwapRates());

    let res: any;
    await act(async () => {
      res = await result.current.read({
        value: 1n as any,
        pair: ['0xA', '0xB'] as any,
      });
    });

    expect(readContractMock).toHaveBeenCalledTimes(1);
    const firstCall = readContractMock.mock.calls[0]!;
    const callArgs = (firstCall && firstCall[1]) as any;
    expect(callArgs.functionName).toBe('getAmountsOut');
    expect(callArgs.args).toEqual([1n, ['0xA', '0xB']]);

    await waitFor(() => {
      expect(result.current.isFetching).toBe(false);
      expect(result.current.error).toBeNull();
    });
    expect(Array.isArray(res)).toBe(true);
    expect((res as any).map((x: any) => x.toString())).toEqual(['0', '123']);
  });

  it('calls getAmountsIn when reverse=true', async () => {
    readContractMock.mockResolvedValueOnce([456n, 0n]);

    const { result } = renderHook(() => useSwapRates());

    let res: any;
    await act(async () => {
      res = await result.current.read({
        value: 2n as any,
        pair: ['0xA', '0xB'] as any,
        reverse: true,
      });
    });

    expect(readContractMock).toHaveBeenCalledTimes(1);
    const firstCall = readContractMock.mock.calls[0]!;
    const callArgs = (firstCall && firstCall[1]) as any;
    expect(callArgs.functionName).toBe('getAmountsIn');
    expect(callArgs.args).toEqual([2n, ['0xA', '0xB']]);

    await waitFor(() => {
      expect(result.current.error).toBeNull();
    });
    expect((res as any).map((x: any) => x.toString())).toEqual(['456', '0']);
  });

  it('sets error when readContract throws and resets isFetching', async () => {
    readContractMock.mockRejectedValueOnce(new Error('boom'));

    const { result } = renderHook(() => useSwapRates());

    await act(async () => {
      await result.current.read({
        value: 1n as any,
        pair: ['0xA', '0xB'] as any,
      });
    });

    await waitFor(() => {
      expect(result.current.isFetching).toBe(false);
      expect(!!result.current.error).toBe(true);
    });
  });
});
