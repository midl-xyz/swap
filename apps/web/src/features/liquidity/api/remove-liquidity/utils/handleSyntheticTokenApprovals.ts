import { tokenList } from '@/global';
import { executorAddress, midlRegtest } from '@midl-xyz/midl-js-executor';
import { useAddTxIntention } from '@midl-xyz/midl-js-executor-react';
import { readContract } from '@wagmi/core';
import { Address, encodeFunctionData, erc20Abi, maxUint256 } from 'viem';
import type { Config } from 'wagmi';

type HandleSyntheticTokenApprovalsInput = {
  tokenA: Address;
  tokenB: Address;
  amountAMin: bigint;
  amountBMin: bigint;
  address: Address;
  config: Config;
  addTxIntention: ReturnType<typeof useAddTxIntention>['addTxIntention'];
};

export const handleSyntheticTokenApprovals = async ({
  tokenA,
  tokenB,
  amountAMin,
  amountBMin,
  address,
  config,
  addTxIntention,
}: HandleSyntheticTokenApprovalsInput) => {
  const tokenAInList = tokenList.find(
    (token) => token.address.toLowerCase() === tokenA.toLowerCase(),
  );

  if (tokenAInList?.isSynthetic) {
    const tokenAAllowance = await readContract(config, {
      address: tokenA,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [address, executorAddress['regtest'] as Address],
    });

    if (tokenAAllowance < amountAMin) {
      addTxIntention({
        intention: {
          evmTransaction: {
            to: tokenA,
            data: encodeFunctionData({
              abi: erc20Abi,
              functionName: 'approve',
              args: [executorAddress['regtest'] as Address, maxUint256],
            }),
          },
        },
      });
    }
  }

  const tokenBInList = tokenList.find(
    (token) => token.address.toLowerCase() === tokenB.toLowerCase(),
  );

  if (tokenBInList?.isSynthetic) {
    const tokenBAllowance = await readContract(config, {
      address: tokenB,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [address, executorAddress['regtest'] as Address],
    });

    if (tokenBAllowance < amountBMin) {
      addTxIntention({
        intention: {
          evmTransaction: {
            to: tokenB,
            data: encodeFunctionData({
              abi: erc20Abi,
              functionName: 'approve',
              args: [executorAddress['regtest'] as Address, maxUint256],
            }),
          },
        },
      });
    }
  }
};
