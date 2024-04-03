import { Address, erc20Abi } from 'viem';
import {
  useChainId,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

export const useERC20ApproveAllowance = () => {
  const globalChainId = useChainId();

  const { writeContract, data: hash, ...rest } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const write = (
    tokenAddress: Address,
    spenderAddress: Address,
    amount: bigint,
    chainId?: number,
  ) => {
    const chainIdToUse = chainId || globalChainId;

    const tx = writeContract({
      abi: erc20Abi,
      address: tokenAddress,
      functionName: 'approve',
      args: [spenderAddress, amount],
      chainId: chainIdToUse,
    });
  };

  return { write, hash, isConfirming, isConfirmed, ...rest };
};
