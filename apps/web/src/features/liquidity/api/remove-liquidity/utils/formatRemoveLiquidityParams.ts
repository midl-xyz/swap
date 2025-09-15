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

type FormatRemoveLiquidityParamsOutput = {
  args:
    | SmartContractFunctionArgs<
        typeof uniswapV2Router02Abi,
        'removeLiquidityETH'
      >
    | SmartContractFunctionArgs<typeof uniswapV2Router02Abi, 'removeLiquidity'>;
  isETH: boolean;
  assetsToWithdraw: Array<{
    id: string;
    amount: bigint;
    address: Address;
  }>;
  functionName: 'removeLiquidityETH' | 'removeLiquidity';
};

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

  const ethValue =
    tokenA === WETHAddr
      ? amountAMin
      : tokenB === WETHAddr
        ? amountBMin
        : undefined;

  const isETH = Boolean(ethValue);
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
    const erc20TokenAddress = tokenA === WETHAddr ? tokenB : tokenA;
    const runeId = tokenA === erc20TokenAddress ? runeAId : runeBId;

    const erc20Min = tokenA === WETHAddr ? amountBMin : amountAMin;
    const ethMin = tokenA === WETHAddr ? amountAMin : amountBMin;

    args = [erc20TokenAddress, liquidity, erc20Min, ethMin, to, deadline];

    assetsToWithdraw = runeId
      ? [
          {
            id: runeId,
            amount: maxUint256,
            address: erc20TokenAddress,
          },
        ]
      : [];
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

  const functionName = isETH ? 'removeLiquidityETH' : 'removeLiquidity';

  return {
    args,
    isETH,
    assetsToWithdraw,
    functionName,
  };
};
