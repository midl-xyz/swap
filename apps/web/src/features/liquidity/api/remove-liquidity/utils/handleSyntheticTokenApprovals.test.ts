import { describe, expect, it, vi, beforeEach } from 'vitest';
import { handleSyntheticTokenApprovals } from '../utils/handleSyntheticTokenApprovals';
import { readContract } from '@wagmi/core';
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  maxUint256,
  parseEther,
} from 'viem';
import type { Config } from 'wagmi';

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

vi.mock('@midl-xyz/midl-js-executor-react', () => ({
  useAddTxIntention: vi.fn(),
}));

describe('handleSyntheticTokenApprovals', () => {
  const mockConfig = {} as Config;
  const mockAddTxIntention = vi.fn();
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
    addTxIntention: mockAddTxIntention,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should add approval transactions for both tokens when allowances are insufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('0.5')) // tokenA allowance
      .mockResolvedValueOnce(parseEther('1')); // tokenB allowance

    await handleSyntheticTokenApprovals(defaultParams);

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

    expect(mockAddTxIntention).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).toHaveBeenNthCalledWith(1, {
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
    expect(mockAddTxIntention).toHaveBeenNthCalledWith(2, {
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

  it('should not add approval transactions when allowances are sufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('2')) // tokenA allowance (>= 1 ETH required)
      .mockResolvedValueOnce(parseEther('3')); // tokenB allowance (>= 2 ETH required)

    await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).not.toHaveBeenCalled();
  });

  it('should add approval only for tokenA when only tokenA allowance is insufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('0.5')) // tokenA allowance (< 1 ETH required)
      .mockResolvedValueOnce(parseEther('3')); // tokenB allowance (>= 2 ETH required)

    await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).toHaveBeenCalledTimes(1);
    expect(mockAddTxIntention).toHaveBeenCalledWith({
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

  it('should add approval only for tokenB when only tokenB allowance is insufficient', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('2')) // tokenA allowance (>= 1 ETH required)
      .mockResolvedValueOnce(parseEther('1')); // tokenB allowance (< 2 ETH required)

    await handleSyntheticTokenApprovals(defaultParams);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).toHaveBeenCalledTimes(1);
    expect(mockAddTxIntention).toHaveBeenCalledWith({
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

  it('should only check and approve the synthetic token (tokenA)', async () => {
    const params = {
      ...defaultParams,
      tokenB: regularToken,
    };

    // Mock insufficient allowance for synthetic tokenA
    vi.mocked(readContract).mockResolvedValueOnce(parseEther('0.5'));

    await handleSyntheticTokenApprovals(params);

    // Should only check allowance for tokenA (synthetic)
    expect(readContract).toHaveBeenCalledTimes(1);
    expect(readContract).toHaveBeenCalledWith(mockConfig, {
      address: synthTokenA,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [mockUserAddress, mockExecutorAddress],
    });

    // Should add approval transaction only for tokenA
    expect(mockAddTxIntention).toHaveBeenCalledTimes(1);
    expect(mockAddTxIntention).toHaveBeenCalledWith({
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

  it('should only check and approve the synthetic token (tokenB)', async () => {
    const params = {
      ...defaultParams,
      tokenA: regularToken, // Non-synthetic token
    };

    // Mock insufficient allowance for synthetic tokenB
    vi.mocked(readContract).mockResolvedValueOnce(parseEther('1'));

    await handleSyntheticTokenApprovals(params);

    // Should only check allowance for tokenB (synthetic)
    expect(readContract).toHaveBeenCalledTimes(1);
    expect(readContract).toHaveBeenCalledWith(mockConfig, {
      address: synthTokenB,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [mockUserAddress, mockExecutorAddress],
    });

    // Should add approval transaction only for tokenB
    expect(mockAddTxIntention).toHaveBeenCalledTimes(1);
    expect(mockAddTxIntention).toHaveBeenCalledWith({
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

  it('should not check allowances or add approval transactions when no tokens are synthetic', async () => {
    const params = {
      ...defaultParams,
      tokenA: regularToken,
      tokenB: regularToken,
    };

    await handleSyntheticTokenApprovals(params);

    expect(readContract).not.toHaveBeenCalled();
    expect(mockAddTxIntention).not.toHaveBeenCalled();
  });

  it('should not check allowances for unknown tokens', async () => {
    const unknownTokenA =
      '0x9999999999999999999999999999999999999999' as Address;
    const unknownTokenB =
      '0x8888888888888888888888888888888888888888' as Address;

    const params = {
      ...defaultParams,
      tokenA: unknownTokenA,
      tokenB: unknownTokenB,
    };

    await handleSyntheticTokenApprovals(params);

    expect(readContract).not.toHaveBeenCalled();
    expect(mockAddTxIntention).not.toHaveBeenCalled();
  });

  it('should handle zero amounts correctly', async () => {
    const params = {
      ...defaultParams,
      amountAMin: 0n,
      amountBMin: 0n,
    };

    // Mock zero allowances
    vi.mocked(readContract).mockResolvedValueOnce(0n).mockResolvedValueOnce(0n);

    await handleSyntheticTokenApprovals(params);

    expect(readContract).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).not.toHaveBeenCalled();
  });

  it('should handle exact allowance amounts correctly', async () => {
    vi.mocked(readContract)
      .mockResolvedValueOnce(parseEther('1')) // exactly 1 ETH for tokenA
      .mockResolvedValueOnce(parseEther('2')); // exactly 2 ETH for tokenB

    await handleSyntheticTokenApprovals(defaultParams);

    // Should not add approvals since allowances are exactly sufficient
    expect(readContract).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).not.toHaveBeenCalled();
  });

  it('should handle very large amounts correctly', async () => {
    const params = {
      ...defaultParams,
      amountAMin: maxUint256,
      amountBMin: maxUint256,
    };

    vi.mocked(readContract)
      .mockResolvedValueOnce(maxUint256 - 1n)
      .mockResolvedValueOnce(maxUint256 - 1n);

    await handleSyntheticTokenApprovals(params);

    // Should add approvals since allowances are insufficient
    expect(readContract).toHaveBeenCalledTimes(2);
    expect(mockAddTxIntention).toHaveBeenCalledTimes(2);
  });

  it('should propagate readContract errors', async () => {
    const error = new Error('Contract read failed');
    vi.mocked(readContract).mockRejectedValueOnce(error);

    await expect(handleSyntheticTokenApprovals(defaultParams)).rejects.toThrow(
      'Contract read failed',
    );

    expect(readContract).toHaveBeenCalledTimes(1);
    expect(mockAddTxIntention).not.toHaveBeenCalled();
  });
});
