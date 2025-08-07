import { deployments } from '@/global';
import { useAddTxIntention } from '@midl-xyz/midl-js-executor-react';
import { Address, encodeFunctionData, erc20Abi } from 'viem';

type ApproveIntentionParams = {
  address: Address;
  runeId?: string;
  amount: bigint;
};

export const useApproveWithOptionalDeposit = (chainId: number) => {
  const { addTxIntention } = useAddTxIntention();
  const addApproveDepositIntention = ({
    address,
    runeId,
    amount,
  }: ApproveIntentionParams) =>
    addTxIntention({
      intention: {
        ...(runeId
          ? {
              hasRunesDeposit: true,
              runes: [
                {
                  id: runeId,
                  value: amount,
                  address,
                },
              ],
            }
          : {}),
        evmTransaction: {
          to: address,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [deployments[chainId].UniswapV2Router02.address, amount],
          }),
        },
      },
    });

  return { addApproveDepositIntention };
};
