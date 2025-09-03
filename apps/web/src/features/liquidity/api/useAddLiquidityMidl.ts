import { usePoolShare } from '@/features/liquidity/api';
import { useStateOverride } from '@/features/state-override';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import { useApproveWithOptionalDeposit } from '@/shared';
import { weiToSatoshis } from '@midl-xyz/midl-js-executor';
import {
  useAddTxIntention,
  useClearTxIntentions,
  useEVMAddress,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { useBalance, useDefaultAccount } from '@midl-xyz/midl-js-react';
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

const handleTokenApprovals = (
  token: { address: Address; amount: bigint },
  needsApprove: boolean,
  uniswapRouterAddress: Address,
  addTxIntention: any,
) => {
  const isETH = token.address === zeroAddress;

  if (isETH) return;

  if (needsApprove) {
    addTxIntention({
      intention: {
        evmTransaction: {
          to: token.address,
          data: encodeFunctionData({
            abi: erc20Abi,
            functionName: 'approve',
            args: [uniswapRouterAddress, token.amount],
          }),
        },
      },
    });
  }
};

const createRouterArgs = (
  tokenA: { address: Address; amount: bigint },
  tokenB: { address: Address; amount: bigint },
  amountAMin: bigint,
  amountBMin: bigint,
  to: Address,
  deadline: bigint,
) => {
  const isTokenAETH = tokenA.address === zeroAddress;
  const isTokenBETH = tokenB.address === zeroAddress;
  const isETH = isTokenAETH || isTokenBETH;

  if (isETH) {
    const erc20TokenAddress = isTokenAETH ? tokenB.address : tokenA.address;
    const erc20Desired = isTokenAETH ? tokenB.amount : tokenA.amount;
    const erc20Min = isTokenAETH ? amountBMin : amountAMin;
    const ethMin = isTokenAETH ? amountAMin : amountBMin;

    return {
      functionName: 'addLiquidityETH' as const,
      args: [
        erc20TokenAddress,
        erc20Desired,
        BigInt('0'),
        BigInt('0'),
        to,
        deadline,
      ] as const,
      ethValue: isTokenAETH ? tokenA.amount : tokenB.amount,
    };
  }

  return {
    functionName: 'addLiquidity' as const,
    args: [
      tokenA.address,
      tokenB.address,
      tokenA.amount,
      tokenB.amount,
      BigInt(0),
      BigInt(0),
      to,
      deadline,
    ] as const,
    ethValue: 0n,
  };
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

      handleTokenApprovals(
        tokenA,
        isTokenANeedApprove,
        deployments[chainId].UniswapV2Router02.address,
        addTxIntention,
      );

      handleTokenApprovals(
        tokenB,
        isTokenBNeedApprove,
        deployments[chainId].UniswapV2Router02.address,
        addTxIntention,
      );

      const { functionName, args, ethValue } = createRouterArgs(
        tokenA,
        tokenB,
        amountAMin,
        amountBMin,
        to,
        deadline,
      );

      const runeDeposits: {
        id: string;
        amount: bigint;
        address: `0x${string}`;
      }[] = [];

      if (runeA) {
        runeDeposits.push({
          id: runeA.id,
          amount: tokenA.amount,
          address: tokenA.address,
        });
      }

      if (runeB) {
        runeDeposits.push({
          id: runeB.id,
          amount: tokenB.amount,
          address: tokenB.address,
        });
      }

      addTxIntention({
        intention: {
          evmTransaction: {
            to: deployments[chainId].UniswapV2Router02.address,
            chainId,
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName,
              args: args,
            }),
            value: ethValue,
          },
          deposit: {
            satoshis: weiToSatoshis(ethValue),
            runes: runeDeposits,
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
