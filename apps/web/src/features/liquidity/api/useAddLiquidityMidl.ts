import { usePoolShare } from '@/features/liquidity/api';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import {
  useAddTxIntention,
  useClearTxIntentions,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { useMutation } from '@tanstack/react-query';
import { Address, encodeFunctionData, erc20Abi, zeroAddress } from 'viem';
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
  const clearTxIntentions = useClearTxIntentions();
  const { rune: runeA } = useToken(tokenA.address);
  const { rune: runeB } = useToken(tokenB.address);

  const isTokenANeedApprove =
    allowances.tokenA < tokenA.amount && tokenA.address !== zeroAddress;

  const isTokenBNeedApprove =
    allowances.tokenB < tokenB.amount && tokenB.address !== zeroAddress;

  const approveToken = (address: Address, runeId: string, amount: bigint) => {
    addTxIntention({
      intention: {
        hasRunesDeposit: true,
        rune: {
          id: runeId,
          value: amount,
        },
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
  };

  const {
    mutate: addLiquidity,
    mutateAsync: addLiquidityAsync,
    ...rest
  } = useMutation<void, Error, AddLiquidityVariables>({
    mutationFn: async ({ to, deadline, amountAMin, amountBMin }) => {
      clearTxIntentions();
      const isTokenAETH = tokenA.address === zeroAddress;
      const isTokenBETH = tokenB.address === zeroAddress;

      if ((!isTokenAETH && !runeA) || (!isTokenBETH && !runeB)) {
        throw new Error('Token not found');
      }

      if (runeA && !isTokenAETH) {
        if (isTokenANeedApprove) {
          approveToken(tokenA.address, runeA.id, tokenA.amount);
        } else {
          addTxIntention({
            intention: {
              hasRunesDeposit: true,
              rune: {
                id: runeA.id,
                value: tokenA.amount,
              },
            },
          });
        }
      }

      if (runeB && !isTokenBETH) {
        if (isTokenBNeedApprove) {
          approveToken(tokenB.address, runeB.id, tokenB.amount);
        } else {
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
