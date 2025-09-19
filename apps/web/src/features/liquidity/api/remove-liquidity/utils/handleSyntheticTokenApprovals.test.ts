import { readContract } from '@wagmi/core';
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  maxUint256,
  parseEther,
} from 'viem';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Config } from 'wagmi';
import { handleSyntheticTokenApprovals } from '../utils/handleSyntheticTokenApprovals';

vi.mock('@wagmi/core', () => ({
  readContract: vi.fn(),
}));

vi.mock('@/global', () => ({
  tokenList: [
    {
      address: '0x1111111111111111111111111111111111111111',
      symbol: 'SYNTH_A',
      isSynthetic: true,
    },
    {
      address: '0x2222222222222222222222222222222222222222',
      symbol: 'SYNTH_B',
      isSynthetic: true,
    },
    {
      address: '0x3333333333333333333333333333333333333333',
      symbol: 'REGULAR',
      isSynthetic: false,
    },
  ],
}));

vi.mock('@midl-xyz/midl-js-executor', () => ({
  executorAddress: {
    regtest: '0x4444444444444444444444444444444444444444',
  },
  midlRegtest: {},
}));

describe('handleSyntheticTokenApprovals', () => {
  const mockConfig = {} as Config;
  const mockUserAddress =
    '0x5555555555555555555555555555555555555555' as Address;
  const mockExecutorAddress =
    '0x4444444444444444444444444444444444444444' as Address;

  const synthTokenA = '0x1111111111111111111111111111111111111111' as Address;
  const synthTokenB = '0x2222222222222222222222222222222222222222' as Address;
  const regularToken = '0x3333333333333333333333333333333333333333' as Address;

  const defaultParams = {
    tokenA: synthTokenA,
    tokenB: synthTokenB,
    amountAMin: parseEther('1'),
    amountBMin: parseEther('2'),
    address: mockUserAddress,
    config: mockConfig,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('adds approval transactions for both tokens when allowances are insufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('0.5')) // tokenA allowance
      .mockResolvedValueOnce(parseEther('1')); // tokenB allowance

    const result = await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(readContract).toHaveBeenNthCalledWith(1, mockConfig, {
      address: synthTokenA,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [mockUserAddress, mockExecutorAddress],
    });
    expect(readContract).toHaveBeenNthCalledWith(2, mockConfig, {
      address: synthTokenB,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [mockUserAddress, mockExecutorAddress],
    });

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      intention: {
        evmTransaction: {
          to: synthTokenA,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [mockExecutorAddress, maxUint256],
          }),
        },
      },
    });
    expect(result[1]).toEqual({
      intention: {
        evmTransaction: {
          to: synthTokenB,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [mockExecutorAddress, maxUint256],
          }),
        },
      },
    });
  });

  it('does not add approval transactions when allowances are sufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('2')) // tokenA allowance (>= 1 ETH required)
      .mockResolvedValueOnce(parseEther('3')); // tokenB allowance (>= 2 ETH required)

    const result = await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(0);
  });

  it('adds approval only for tokenA when only tokenA allowance is insufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('0.5')) // tokenA allowance (< 1 ETH required)
      .mockResolvedValueOnce(parseEther('3')); // tokenB allowance (>= 2 ETH required)

    const result = await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      intention: {
        evmTransaction: {
          to: synthTokenA,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [mockExecutorAddress, maxUint256],
          }),
        },
      },
    });
  });

  it('adds approval only for tokenB when only tokenB allowance is insufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('2')) // tokenA allowance (>= 1 ETH required)
      .mockResolvedValueOnce(parseEther('1')); // tokenB allowance (< 2 ETH required)

    const result = await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      intention: {
        evmTransaction: {
          to: synthTokenB,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [mockExecutorAddress, maxUint256],
          }),
        },
      },
    });
  });

  it('only checks and approves the synthetic token (tokenA)', async () => {
    const params = {
      ...defaultParams,
      tokenB: regularToken,
    };

    // Mock insufficient allowance for synthetic tokenA
    vi.mocked(readContract).mockResolvedValueOnce(parseEther('0.5'));

    const result = await handleSyntheticTokenApprovals(params);

    expect(readContract).toHaveBeenCalledTimes(1);
    expect(readContract).toHaveBeenCalledWith(mockConfig, {
      address: synthTokenA,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [mockUserAddress, mockExecutorAddress],
    });

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      intention: {
        evmTransaction: {
          to: synthTokenA,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [mockExecutorAddress, maxUint256],
          }),
        },
      },
    });
  });

  it('only checks and approves the synthetic token (tokenB)', async () => {
    const params = {
      ...defaultParams,
      tokenA: regularToken,
    };

    vi.mocked(readContract).mockResolvedValueOnce(parseEther('1'));

    const result = await handleSyntheticTokenApprovals(params);

    expect(readContract).toHaveBeenCalledTimes(1);
    expect(readContract).toHaveBeenCalledWith(mockConfig, {
      address: synthTokenB,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [mockUserAddress, mockExecutorAddress],
    });

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      intention: {
        evmTransaction: {
          to: synthTokenB,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [mockExecutorAddress, maxUint256],
          }),
        },
      },
    });
  });

  it('does not check allowances or add approval transactions when no tokens are synthetic', async () => {
    const params = {
      ...defaultParams,
      tokenA: regularToken,
      tokenB: regularToken,
    };

    const result = await handleSyntheticTokenApprovals(params);

    expect(readContract).not.toHaveBeenCalled();
    expect(result).toHaveLength(0);
  });

  it('does not check allowances for unknown tokens', async () => {
    const unknownTokenA =
      '0x9999999999999999999999999999999999999999' as Address;
    const unknownTokenB =
      '0x8888888888888888888888888888888888888888' as Address;

    const params = {
      ...defaultParams,
      tokenA: unknownTokenA,
      tokenB: unknownTokenB,
    };

    const result = await handleSyntheticTokenApprovals(params);

    expect(readContract).not.toHaveBeenCalled();
    expect(result).toHaveLength(0);
  });

  it('handles zero amounts correctly', async () => {
    const params = {
      ...defaultParams,
      amountAMin: 0n,
      amountBMin: 0n,
    };

    // Mock zero allowances
    vi.mocked(readContract).mockResolvedValueOnce(0n).mockResolvedValueOnce(0n);

    const result = await handleSyntheticTokenApprovals(params);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(0);
  });

  it('handles exact allowance amounts correctly', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('1')) // exactly 1 ETH for tokenA
      .mockResolvedValueOnce(parseEther('2')); // exactly 2 ETH for tokenB

    const result = await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(0);
  });

  it('handles very large amounts correctly', async () => {
    const params = {
      ...defaultParams,
      amountAMin: maxUint256,
      amountBMin: maxUint256,
    };

    vi.mocked(readContract)
      .mockResolvedValueOnce(maxUint256 - 1n)
      .mockResolvedValueOnce(maxUint256 - 1n);

    const result = await handleSyntheticTokenApprovals(params);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(2);
  });
});
