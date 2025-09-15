import { useERC20Allowance } from '@/features/token';
import { deployments, uniswapV2Router02Abi } from '@/global';
import { useApproveWithOptionalDeposit } from '@/shared';
import {
  useAddCompleteTxIntention,
  useAddTxIntention,
  useClearTxIntentions,
  useEVMAddress,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { useMutation } from '@tanstack/react-query';
import { Address, encodeFunctionData } from 'viem';
import { useChainId, useConfig } from 'wagmi';
import {
  formatRemoveLiquidityParams,
  handleSyntheticTokenApprovals,
} from './utils';

type UseRemoveLiquidityParams = {
  lpToken: {
    address: Address;
    amount: bigint;
  };
  tokenA: Address;
  tokenB: Address;
};

type RemoveLiquidityArgs = {
  liquidity: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: Address;
  deadline: bigint;
};

export const useRemoveLiquidityMidl = ({
  lpToken,
  tokenA,
  tokenB,
}: UseRemoveLiquidityParams) => {
  const chainId = useChainId();
  const address = useEVMAddress();
  const config = useConfig();

  const { data: allowance = 0n } = useERC20Allowance({
    token: lpToken.address,
    spender: deployments[chainId].UniswapV2Router02.address,
    user: address as Address,
  });

  const { addTxIntention } = useAddTxIntention();
  const { addApproveDepositIntention: addApproveIntention } =
    useApproveWithOptionalDeposit(chainId);
  const clearTxIntentions = useClearTxIntentions();
  const { addCompleteTxIntention } = useAddCompleteTxIntention();

  const isTokenNeedApproved = allowance < lpToken.amount;

  const runeAId = useToken(tokenA).rune?.id;
  const runeBId = useToken(tokenB).rune?.id;

  const { mutate: removeLiquidity, ...rest } = useMutation<
    void,
    Error,
    RemoveLiquidityArgs
  >({
    mutationFn: async ({ liquidity, amountAMin, amountBMin, to, deadline }) => {
      try {
        clearTxIntentions();

        if (isTokenNeedApproved) {
          try {
            addApproveIntention({
              address: lpToken.address,
              amount: lpToken.amount,
            });
          } catch (e) {
            console.error('Error adding lpToken approve intention:', e);
          }
        }
        const { args, assetsToWithdraw, functionName } =
          formatRemoveLiquidityParams({
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
          });

        try {
          addTxIntention({
            intention: {
              evmTransaction: {
                to: deployments[chainId].UniswapV2Router02.address,
                chainId,
                data: encodeFunctionData({
                  abi: uniswapV2Router02Abi,
                  functionName,
                  args: args as any,
                }),
              },
            },
          });
        } catch (e) {
          console.error('Error adding removeLiq intention:', e);
        }

        try {
          await handleSyntheticTokenApprovals({
            tokenA,
            tokenB,
            amountAMin,
            amountBMin,
            address: address as Address,
            config,
            addTxIntention,
          });
        } catch (e) {
          console.error(
            'Error adding complete transaction intention approvals for synth assets:',
            e,
          );
        }

        try {
          addCompleteTxIntention({
            runes: assetsToWithdraw,
          });
        } catch (e) {
          console.error('Error adding complete transaction intention:', e);
        }
      } catch (e) {
        console.error('Error in removeLiquidity mutation:', e);
      }
    },
  });

  return {
    removeLiquidity,
    isTokenNeedApproved,
    ...rest,
  };
};
