import { WETHByChain, deployments, uniswapV2Router02Abi } from "@/global";
import {
  Abi,
  Address,
  ContractFunctionArgs,
  ContractFunctionName,
  zeroAddress,
} from "viem";
import { useChainId, useWriteContract } from "wagmi";

export type SwapArgs = {
  tokenIn: Address;
  tokenOut: Address;
  amountIn: bigint;
  amountOutMin: bigint;
  to: Address;
  deadline: bigint;
};

// ERC20/ERC20 or ERC20/ETH Swap params: AmountIn -> AmountOutMin -> Path -> Receiver -> Deadline

// ETH/ERC20 params: AmountOut -> Path -> Receiver -> Deadline

type SmartContractFunctionArgs<
  abi extends Abi,
  functionName extends ContractFunctionName<abi, "payable" | "nonpayable">,
> = ContractFunctionArgs<abi, "payable" | "nonpayable", functionName>;

export const useSwap = async () => {
  const globalChainId = useChainId();
  const { writeContract } = useWriteContract();

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

    let args:
      | SmartContractFunctionArgs<
          typeof uniswapV2Router02Abi,
          "swapExactETHForTokens"
        >
      | SmartContractFunctionArgs<
          typeof uniswapV2Router02Abi,
          "swapExactTokensForETH"
        >
      | SmartContractFunctionArgs<
          typeof uniswapV2Router02Abi,
          "swapExactTokensForTokens"
        >;

    let txName:
      | "swapExactETHForTokens"
      | "swapExactTokensForETH"
      | "swapExactTokensForTokens";

    if (tokenIn === zeroAddress) {
      txName = "swapExactETHForTokens";
      args = [amountOutMin, [WETH, tokenOut], to, deadline];
    } else if (tokenOut === zeroAddress) {
      txName = "swapExactTokensForETH";
      args = [amountIn, amountOutMin, [tokenIn, WETH], to, deadline];
    } else {
      txName = "swapExactTokensForTokens";
      args = [amountIn, amountOutMin, [tokenIn, tokenOut], to, deadline];
    }

    return writeContract({
      address: deployments[globalChainId].UniswapV2Router02 as any,
      abi: uniswapV2Router02Abi,
      functionName: txName,
      args: args as any,
      value: amountIn as any,
    });
  };

  return swap;
};
