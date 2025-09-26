import { uniswapV2Router02Abi, WETHByChain } from '@/global';
import { RunesTransfer } from '@midl-xyz/midl-js-executor';
import { Address, maxUint256 } from 'viem';

type SmartContractFunctionArgs<
  abi extends readonly unknown[],
  functionName extends string,
> = any[];

type FormatRemoveLiquidityParamsInput = {
  tokenA: Address;
  tokenB: Address;
  liquidity: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: Address;
  deadline: bigint;
  chainId: number;
  runeAId?: string;
  runeBId?: string;
};

type FormatRemoveLiquidityParamsOutput = Readonly<{
  assetsToWithdraw: RunesTransfer[];
  args:
    | SmartContractFunctionArgs<
        typeof uniswapV2Router02Abi,
        'removeLiquidityETH'
      >
    | SmartContractFunctionArgs<typeof uniswapV2Router02Abi, 'removeLiquidity'>;
  functionName: 'removeLiquidityETH' | 'removeLiquidity';
}>;

/**
 * @notice Formats parameters for UniswapV2 liquidity removal operations
 * @dev Determines whether to use removeLiquidityETH or removeLiquidity based on WETH presence
 *
 * @returns params.args - Function arguments array for the appropriate UniswapV2Router method
 * @returns params.assetsToWithdraw - Array of runes to withdraw with their IDs and addresses
 * @returns params.functionName - Specific UniswapV2Router withdraw function name to call
 */
export const formatRemoveLiquidityParams = ({
  tokenA,
  tokenB,
  liquidity,
  amountAMin,
  amountBMin,
  to,
  deadline,
  chainId,
  runeAId,
  runeBId,
}: FormatRemoveLiquidityParamsInput): FormatRemoveLiquidityParamsOutput => {
  const WETHAddr = WETHByChain[chainId];
  if (tokenA === WETHAddr) {
    const assetsToWithdraw = runeBId
      ? [
          {
            id: runeBId,
            amount: maxUint256,
            address: tokenB,
          },
        ]
      : [];

    return {
      args: [tokenB, liquidity, amountBMin, amountAMin, to, deadline],
      assetsToWithdraw,
      functionName: 'removeLiquidityETH',
    } as const;
  }
  if (tokenB === WETHAddr) {
    const assetsToWithdraw = runeAId
      ? [
          {
            id: runeAId,
            amount: maxUint256,
            address: tokenA,
          },
        ]
      : [];

    return {
      args: [tokenA, liquidity, amountAMin, amountBMin, to, deadline],
      assetsToWithdraw,
      functionName: 'removeLiquidityETH',
    } as const;
  }

  // If neither token is WETH, use removeLiquidity for erc20 assets
  const assetsToWithdraw: RunesTransfer[] = [];

  const args = [
    tokenA,
    tokenB,
    liquidity,
    amountAMin,
    amountBMin,
    to,
    deadline,
  ];

  if (runeAId) {
    assetsToWithdraw.push({
      id: runeAId,
      amount: maxUint256,
      address: tokenA,
    });
  }

  if (runeBId) {
    assetsToWithdraw.push({
      id: runeBId,
      amount: maxUint256,
      address: tokenB,
    });
  }

  return {
    args,
    assetsToWithdraw,
    functionName: 'removeLiquidity',
  } as const;
};
