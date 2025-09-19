import { tokenList } from '@/global';
import { executorAddress } from '@midl-xyz/midl-js-executor';
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
};

type TxIntentionParams = {
  intention: {
    evmTransaction: {
      to: Address;
      data: `0x${string}`;
    };
  };
};

const createExecutorApprovalIntention = async (
  tokenAddress: Address,
  minAmount: bigint,
  userAddress: Address,
  config: Config,
): Promise<TxIntentionParams | null> => {
  const allowance = await readContract(config, {
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [userAddress, executorAddress['regtest'] as Address],
  });

  if (allowance < minAmount) {
    return {
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
    };
  }

  return null;
};

/**
 * @notice Checks if synthetic token approvals are needed for liquidity removal and returns intentions to execute
 * @dev Checks if tokens are synthetic and returns approval intentions if needed
 * @param params Input parameters including token addresses and amounts
 * @returns Promise resolving to array of transaction intention parameters
 */
export const handleSyntheticTokenApprovals = async ({
  tokenA,
  tokenB,
  amountAMin,
  amountBMin,
  address,
  config,
}: HandleSyntheticTokenApprovalsInput): Promise<TxIntentionParams[]> => {
  if (!address || !config) {
    console.error(
      'Parameters in handleSyntheticTokenApprovals are undefined:',
      {
        address: !!address,
        config: !!config,
      },
    );
    throw new Error(
      'An error occurred with configuration. Please contact support.',
    );
  }

  const intentions: TxIntentionParams[] = [];

  const tokenAInList = tokenList.find(
    (token) => getAddress(token.address) === getAddress(tokenA),
  );

  if (tokenAInList?.isSynthetic) {
    const intention = await createExecutorApprovalIntention(
      tokenA,
      amountAMin,
      address,
      config,
    );
    if (intention) {
      intentions.push(intention);
    }
  }

  const tokenBInList = tokenList.find(
    (token) => getAddress(token.address) === getAddress(tokenB),
  );

  if (tokenBInList?.isSynthetic) {
    const intention = await createExecutorApprovalIntention(
      tokenB,
      amountBMin,
      address,
      config,
    );
    if (intention) {
      intentions.push(intention);
    }
  }

  return intentions;
};
