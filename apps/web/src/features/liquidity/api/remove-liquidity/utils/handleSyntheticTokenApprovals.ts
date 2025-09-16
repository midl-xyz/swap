import { tokenList } from '@/global';
import { executorAddress } from '@midl-xyz/midl-js-executor';
import { useAddTxIntention } from '@midl-xyz/midl-js-executor-react';
import { readContract } from '@wagmi/core';
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  getAddress,
  maxUint256,
} from 'viem';
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

const handleExecutorApproval = async (
  tokenAddress: Address,
  minAmount: bigint,
  userAddress: Address,
  config: Config,
  addTxIntention: ReturnType<typeof useAddTxIntention>['addTxIntention'],
) => {
  const allowance = await readContract(config, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [userAddress, executorAddress['regtest'] as Address],
  });

  if (allowance < minAmount) {
    addTxIntention({
      intention: {
        evmTransaction: {
          to: tokenAddress,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [executorAddress['regtest'] as Address, maxUint256],
          }),
        },
      },
    });
  }
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
    (token) => getAddress(token.address) === getAddress(tokenA),
  );

  if (tokenAInList?.isSynthetic) {
    await handleExecutorApproval(
      tokenA,
      amountAMin,
      address,
      config,
      addTxIntention,
    );
  }

  const tokenBInList = tokenList.find(
    (token) => getAddress(token.address) === getAddress(tokenB),
  );

  if (tokenBInList?.isSynthetic) {
    await handleExecutorApproval(
      tokenB,
      amountBMin,
      address,
      config,
      addTxIntention,
    );
  }
};
