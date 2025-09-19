import { uniswapV2Router02Abi, WETHByChain } from '@/global';
import { Address, maxUint256 } from 'viem';

type SmartContractFunctionArgs<
  abi extends readonly unknown[],
  functionName extends string,
> = any[];

type RunesToWithdraw = Array<{
  id: string;
  amount: bigint;
  address: Address;
}>;

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

type FormatRemoveLiquidityParamsOutput<T extends boolean = boolean> = Readonly<{
  isETH: T;
  assetsToWithdraw: RunesToWithdraw;
  args: T extends true
    ? SmartContractFunctionArgs<
        typeof uniswapV2Router02Abi,
        'removeLiquidityETH'
      >
    : SmartContractFunctionArgs<typeof uniswapV2Router02Abi, 'removeLiquidity'>;
  functionName: T extends true ? 'removeLiquidityETH' : 'removeLiquidity';
}>;

/**
 * @notice Formats parameters for UniswapV2 liquidity removal operations
 * @dev Determines whether to use removeLiquidityETH or removeLiquidity based on WETH presence
 *
 * @returns params.args - Function arguments array for the appropriate UniswapV2Router method
 * @returns params.isETH - Boolean indicating if native token is involved (true for removeLiquidityETH)
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

  let ethValue: bigint | undefined;
  let isETH = false;

  if (tokenA === WETHAddr) {
    ethValue = amountAMin;
    isETH = true;
  } else if (tokenB === WETHAddr) {
    ethValue = amountBMin;
    isETH = true;
  }

  let assetsToWithdraw: RunesToWithdraw = [];

  if (isETH) {
    if (tokenA === WETHAddr) {
      assetsToWithdraw = runeBId
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
        isETH: true,
        assetsToWithdraw,
        functionName: 'removeLiquidityETH',
      } as const;
    }

    assetsToWithdraw = runeAId
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
      isETH: true,
      assetsToWithdraw,
      functionName: 'removeLiquidityETH',
    } as const;
  }

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
    isETH,
    assetsToWithdraw,
    functionName: 'removeLiquidity',
  } as const;
};
