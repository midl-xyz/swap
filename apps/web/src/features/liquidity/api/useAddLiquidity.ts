import { deployments, uniswapV2Router02Abi } from '@/global';
import { Address, zeroAddress } from 'viem';
import {
  useChainId,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

export type AddLiquidityArgs = {
  tokenA: Address;
  tokenB: Address;
  amountADesired: bigint;
  amountBDesired: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: Address;
  deadline: bigint;
};

export const useAddLiquidity = () => {
  const globalChainId = useChainId();

  const { writeContract, data: hash, ...rest } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const addLiquidity = async ({
    tokenA,
    tokenB,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline,
  }: AddLiquidityArgs) => {
    const ethValue =
      tokenA === zeroAddress
        ? amountADesired
        : tokenB === zeroAddress
          ? amountBDesired
          : undefined;

    const isETH = Boolean(ethValue);

    let args:
      | SmartContractFunctionArgs<
          typeof uniswapV2Router02Abi,
          'addLiquidityETH'
        >
      | SmartContractFunctionArgs<typeof uniswapV2Router02Abi, 'addLiquidity'>;

    if (isETH) {
      const erc20TokenAddress = tokenA === zeroAddress ? tokenA : tokenB;
      const erc20Value =
        tokenA === zeroAddress ? amountBDesired : amountADesired;
      const erc20Min = tokenA === zeroAddress ? amountBMin : amountAMin;

      args = [
        erc20TokenAddress,
        amountADesired,
        erc20Value,
        erc20Min,
        to,
        deadline,
      ];
    } else {
      args = [
        tokenA,
        tokenB,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline,
      ];
    }

    const functionName = isETH ? 'addLiquidityETH' : 'addLiquidity';

    return writeContract({
      address: deployments[globalChainId].UniswapV2Router02.address,
      abi: uniswapV2Router02Abi,
      functionName,
      args: args as any,
      value: ethValue as any,
    });
  };

  return {
    addLiquidity,
    hash,
    isConfirming,
    isConfirmed,
    ...rest,
  };
};
