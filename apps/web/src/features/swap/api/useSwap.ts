import { writeContract } from "@wagmi/core";
import {
  WETHByChain,
  deployments,
  tokenConfig,
  uniswapV2Router02Abi,
  wagmiConfig,
} from "@/global";
import { Address, zeroAddress } from "viem";

export type SwapArgs = {
  tokenIn: Address;
  tokenOut: Address;
  amountIn: bigint;
  amountOutMin: bigint;
  to: Address;
  deadline: bigint;
};

// AmountIn -> AmountOutMin -> Path -> Receiver -> Deadline
type SwapERC20TokensParams = [bigint, bigint, Address[], Address, bigint];
type SwapERC20TokenForETHParams = [bigint, bigint, Address[], Address, bigint];

// AmountOut -> Path -> Receiver -> Deadline
type SwapETHForERC20TokenParams = [bigint, Address[], Address, bigint];

export const useSwap = async () => {
  // TODO: Update chainId with global chainId component
  const globalChainId = 5;

  const swap = async ({
    tokenIn,
    tokenOut,
    amountIn,
    amountOutMin,
    to,
    deadline,
  }: SwapArgs) => {
    const WETH = WETHByChain[globalChainId];
    if (!WETH) return null; // TODO: Handle that case or assert WETH in args
    if (tokenIn === zeroAddress) {
      const args: SwapETHForERC20TokenParams = [
        amountOutMin,
        [WETH, tokenOut],
        to,
        deadline,
      ];

      return writeContract(wagmiConfig, {
        address: deployments[globalChainId].UniswapV2Router02 as any,
        abi: uniswapV2Router02Abi,
        functionName: "swapExactETHForTokens",
        args,
        value: amountIn,
      });
    } else {
      if (tokenOut === zeroAddress) {
        const args: SwapERC20TokenForETHParams = [
          amountIn,
          amountOutMin,
          [tokenIn, WETH],
          to,
          deadline,
        ];

        return writeContract(wagmiConfig, {
          address: deployments[globalChainId].UniswapV2Router02 as any,
          abi: uniswapV2Router02Abi,
          functionName: "swapExactTokensForETH",
          args,
        });
      } else {
        const args: SwapERC20TokenForETHParams = [
          amountIn,
          amountOutMin,
          [tokenIn, tokenOut],
          to,
          deadline,
        ];

        return writeContract(wagmiConfig, {
          address: deployments[globalChainId].UniswapV2Router02 as any,
          abi: uniswapV2Router02Abi,
          functionName: "swapExactTokensForTokens",
          args,
        });
      }
    }
  };

  return swap;
};
