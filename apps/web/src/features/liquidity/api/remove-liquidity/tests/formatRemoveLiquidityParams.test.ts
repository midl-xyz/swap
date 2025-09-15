import { describe, expect, it, vi } from 'vitest';
import { formatRemoveLiquidityParams } from '../utils/formatRemoveLiquidityParams';
import { Address, maxUint256, parseEther } from 'viem';

vi.mock('@/global', () => ({
  WETHByChain: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as Address,
  },
  uniswapV2Router02Abi: [],
}));

describe('formatRemoveLiquidityParams:', () => {
  const mockChainId = 1;
  const mockWETHAddress =
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' as Address;
  const mockTokenA = '0x1111111111111111111111111111111111111111' as Address;
  const mockTokenB = '0x2222222222222222222222222222222222222222' as Address;
  const mockUserAddress =
    '0x3333333333333333333333333333333333333333' as Address;

  const defaultParams = {
    tokenA: mockTokenA,
    tokenB: mockTokenB,
    liquidity: parseEther('0.5'),
    amountAMin: parseEther('0.1'),
    amountBMin: parseEther('0.2'),
    to: mockUserAddress,
    deadline: BigInt(Math.floor(Date.now() / 1000) + 3600),
    chainId: mockChainId,
  };

  describe('ETH branch scenarios:', () => {
    it('should return ETH parameters when tokenA is WETH and tokenB has rune', () => {
      const params = {
        ...defaultParams,
        tokenA: mockWETHAddress,
        runeAId: undefined,
        runeBId: 'test-rune-b',
      };

      const result = formatRemoveLiquidityParams(params);

      expect(result.isETH).toBe(true);
      expect(result.functionName).toBe('removeLiquidityETH');
      expect(result.args).toEqual([
        mockTokenB,
        params.liquidity,
        params.amountBMin,
        params.amountAMin,
        params.to,
        params.deadline,
      ]);
      expect(result.assetsToWithdraw).toEqual([
        {
          id: 'test-rune-b',
          amount: maxUint256,
          address: mockTokenB,
        },
      ]);
    });

    it('should return ETH parameters when tokenB is WETH and no runes', () => {
      const params = {
        ...defaultParams,
        tokenB: mockWETHAddress,
        runeAId: undefined,
        runeBId: undefined,
      };

      const result = formatRemoveLiquidityParams(params);

      expect(result.isETH).toBe(true);
      expect(result.functionName).toBe('removeLiquidityETH');
      expect(result.args).toEqual([
        mockTokenA,
        params.liquidity,
        params.amountAMin,
        params.amountBMin,
        params.to,
        params.deadline,
      ]);
      expect(result.assetsToWithdraw).toEqual([]);
    });
  });

  describe('non-ETH scenarios:', () => {
    it('should return regular parameters when neither token is WETH', () => {
      const params = {
        ...defaultParams,
        runeAId: 'test-rune-a',
        runeBId: 'test-rune-b',
      };

      const result = formatRemoveLiquidityParams(params);

      expect(result.isETH).toBe(false);
      expect(result.functionName).toBe('removeLiquidity');
      expect(result.args).toEqual([
        mockTokenA,
        mockTokenB,
        params.liquidity,
        params.amountAMin,
        params.amountBMin,
        params.to,
        params.deadline,
      ]);
      expect(result.assetsToWithdraw).toEqual([
        {
          id: 'test-rune-a',
          amount: maxUint256,
          address: mockTokenA,
        },
        {
          id: 'test-rune-b',
          amount: maxUint256,
          address: mockTokenB,
        },
      ]);
    });

    it('should return regular parameters with no runes when tokens have no rune IDs', () => {
      const params = {
        ...defaultParams,
        runeAId: undefined,
        runeBId: undefined,
      };

      const result = formatRemoveLiquidityParams(params);

      expect(result.isETH).toBe(false);
      expect(result.functionName).toBe('removeLiquidity');
      expect(result.args).toEqual([
        mockTokenA,
        mockTokenB,
        params.liquidity,
        params.amountAMin,
        params.amountBMin,
        params.to,
        params.deadline,
      ]);
      expect(result.assetsToWithdraw).toEqual([]);
    });
  });
});
