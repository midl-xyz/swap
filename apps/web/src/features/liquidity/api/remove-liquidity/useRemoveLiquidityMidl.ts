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
    user: address,
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
      clearTxIntentions();

      if (isTokenNeedApproved) {
        addApproveIntention({
          address: lpToken.address,
          amount: lpToken.amount,
        });
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

      if (!deployments[chainId]?.UniswapV2Router02.address) {
        console.error('UniswapV2Router02 deployment not found');
        throw new Error(
          'Network configuration not available. Please contact support.',
        );
      }

      addTxIntention({
        intention: {
          evmTransaction: {
            to: deployments[chainId]?.UniswapV2Router02.address,
            chainId,
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName,
              args: args as any,
            }),
          },
        },
      });

      const syntheticApprovals = await handleSyntheticTokenApprovals({
        tokenA,
        tokenB,
        amountAMin,
        amountBMin,
        address,
        config,
      });

      syntheticApprovals.forEach((intentionParams) => {
        addTxIntention(intentionParams);
      });

      addCompleteTxIntention({
        runes: assetsToWithdraw,
      });
    },
  });

  return {
    removeLiquidity,
    ...rest,
  };
};
