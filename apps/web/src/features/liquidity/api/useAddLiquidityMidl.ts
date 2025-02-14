import { usePoolShare } from '@/features/liquidity/api';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import { useApproveWithOptionalDeposit } from '@/shared';
import {
  useAddTxIntention,
  useClearTxIntentions,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { useMutation } from '@tanstack/react-query';
import { Address, encodeFunctionData, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';

type UseAddLiquidityParams = {
  tokenA: {
    address: Address;
    amount: bigint;
  };
  tokenB: {
    address: Address;
    amount: bigint;
  };
};

export type AddLiquidityVariables = {
  amountAMin: bigint;
  amountBMin: bigint;
  to: Address;
  deadline: bigint;
};

export const useAddLiquidityMidl = ({
  tokenA,
  tokenB,
}: UseAddLiquidityParams) => {
  const {
    data: { allowances },
  } = usePoolShare({
    tokenA: tokenA.address,
    tokenB: tokenB.address,
    formValues: {
      tokenAAmount: tokenA.amount,
      tokenBAmount: tokenB.amount,
    },
  });

  const chainId = useChainId();
  const { addTxIntention } = useAddTxIntention();
  const { addApproveDepositIntention } = useApproveWithOptionalDeposit(chainId);
  const clearTxIntentions = useClearTxIntentions();
  const { rune: runeA } = useToken(tokenA.address);
  const { rune: runeB } = useToken(tokenB.address);

  const isTokenANeedApprove =
    allowances.tokenA < tokenA.amount && tokenA.address !== zeroAddress;

  const isTokenBNeedApprove =
    allowances.tokenB < tokenB.amount && tokenB.address !== zeroAddress;

  const {
    mutate: addLiquidity,
    mutateAsync: addLiquidityAsync,
    ...rest
  } = useMutation<void, Error, AddLiquidityVariables>({
    mutationFn: async ({ to, deadline, amountAMin, amountBMin }) => {
      clearTxIntentions();
      const isTokenAETH = tokenA.address === zeroAddress;
      const isTokenBETH = tokenB.address === zeroAddress;

      if (!isTokenAETH) {
        if (isTokenANeedApprove) {
          addApproveDepositIntention({
            address: tokenA.address,
            runeId: runeA?.id,
            amount: tokenA.amount,
          });
        } else if (runeA) {
          addTxIntention({
            intention: {
              hasRunesDeposit: true,
              rune: {
                id: runeA?.id,
                value: tokenA.amount,
              },
            },
          });
        }
      }

      if (runeB && !isTokenBETH) {
        if (isTokenBNeedApprove) {
          addApproveDepositIntention({
            address: tokenB.address,
            runeId: runeB.id,
            amount: tokenB.amount,
          });
        } else if (runeB) {
          addTxIntention({
            intention: {
              hasRunesDeposit: true,
              rune: {
                id: runeB.id,
                value: tokenB.amount,
              },
            },
          });
        }
      }

      const isETH =
        tokenA.address === zeroAddress || tokenB.address === zeroAddress;

      const ethValue = isETH
        ? isTokenAETH
          ? tokenA.amount
          : tokenB.amount
        : 0n;

      let args:
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'addLiquidityETH'
          >
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'addLiquidity'
          >;

      if (isETH) {
        const erc20TokenAddress = isTokenAETH ? tokenB.address : tokenA.address;

        const erc20Desired = isTokenAETH ? tokenB.amount : tokenA.amount;
        const erc20Min = isTokenAETH ? amountBMin : amountAMin;
        const ethMin = isTokenAETH ? amountAMin : amountBMin;

        args = [
          erc20TokenAddress,
          erc20Desired,
          erc20Min,
          ethMin,
          to,
          deadline,
        ];
      } else {
        args = [
          tokenA.address,
          tokenB.address,
          tokenA.amount,
          tokenB.amount,
          amountAMin,
          amountBMin,
          to,
          deadline,
        ];
      }

      const functionName = isETH ? 'addLiquidityETH' : 'addLiquidity';

      addTxIntention({
        intention: {
          evmTransaction: {
            to: deployments[chainId].UniswapV2Router02.address,
            chainId,
            type: 'btc',
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName,
              args: args as any,
            }),
            value: ethValue as any,
          },
        },
      });
    },
  });

  return {
    addLiquidity,
    addLiquidityAsync,
    ...rest,
  };
};
