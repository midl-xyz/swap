import { uniswapV2Router02Abi, WETHByChain } from '@/global';
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
  args:
    | SmartContractFunctionArgs<
        typeof uniswapV2Router02Abi,
        'removeLiquidityETH'
      >
    | SmartContractFunctionArgs<typeof uniswapV2Router02Abi, 'removeLiquidity'>;
  isETH: boolean; // this value shows if the function involves removeLiquidityETH function or not. Set in a separate field for better readability
  assetsToWithdraw: Array<{
    id: string;
    amount: bigint;
    address: Address;
  }>;
  functionName: 'removeLiquidityETH' | 'removeLiquidity';
}>;

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
  let isEth = false;

  if (tokenA === WETHAddr) {
    ethValue = amountAMin;
    isEth = true;
  } else if (tokenB === WETHAddr) {
    ethValue = amountBMin;
    isEth = true;
  }

  let assetsToWithdraw: Array<{
    id: string;
    amount: bigint;
    address: Address;
  }> = [];

  let args:
    | SmartContractFunctionArgs<
        typeof uniswapV2Router02Abi,
        'removeLiquidityETH'
      >
    | SmartContractFunctionArgs<typeof uniswapV2Router02Abi, 'removeLiquidity'>;

  if (isETH) {
    if (tokenA === WETHAddr) {
      const runeId = runeBId;

      assetsToWithdraw = runeId
        ? [
            {
              id: runeId,
              amount: maxUint256,
              address: tokenB,
            },
          ]
        : [];

      return {
        args: [tokenB, liquidity, amountBMin, amountAMin, to, deadline],
        isETH,
        assetsToWithdraw,
        functionName: 'removeLiquidityETH',
      };
    } else {
      const runeId = runeAId;

      assetsToWithdraw = runeId
        ? [
            {
              id: runeId,
              amount: maxUint256,
              address: tokenB,
            },
          ]
        : [];

      return {
        args: [tokenA, liquidity, amountAMin, amountBMin, to, deadline],
        isETH,
        assetsToWithdraw,
        functionName: 'removeLiquidityETH',
      };
    }
  } else {
    args = [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline];

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
  }

  return {
    args,
    isETH,
    assetsToWithdraw,
    functionName: 'removeLiquidity',
  };
};
