import { writeContract } from "@wagmi/core";
import { deployments, uniswapV2Router02Abi, wagmiConfig } from "@/global";
import { Address, zeroAddress } from "viem";

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

type AddLiquidityParams = [
  Address,
  Address,
  bigint,
  bigint,
  bigint,
  bigint,
  Address,
  bigint,
];

type AddLiquidityETHParams = [Address, bigint, bigint, bigint, Address, bigint];

export const useAddLiquidity = async () => {
  // TODO: Update chainId with global chainId component
  const globalChainId = 5;

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

    if (isETH) {
      const erc20TokenAddress = tokenA === zeroAddress ? tokenA : tokenB;
      const erc20Value =
        tokenA === zeroAddress ? amountBDesired : amountADesired;
      const erc20Min = tokenA === zeroAddress ? amountBMin : amountAMin;
      const args: AddLiquidityETHParams = [
        erc20TokenAddress,
        amountADesired,
        erc20Value,
        erc20Min,
        to,
        deadline,
      ];
      return writeContract(wagmiConfig, {
        address: deployments[globalChainId].UniswapV2Router02 as any,
        abi: uniswapV2Router02Abi,
        functionName: "addLiquidityETH",
        args,
        value: ethValue,
      });
    } else {
      const args: AddLiquidityParams = [
        tokenA,
        tokenB,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline,
      ];

      return writeContract(wagmiConfig, {
        address: deployments[globalChainId].UniswapV2Router02 as any,
        abi: uniswapV2Router02Abi,
        functionName: "addLiquidity",
        args,
      });
    }
  };

  return addLiquidity;
};
