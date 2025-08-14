import { usePoolShare } from '@/features/liquidity/api';
import {
  BalanceEntry,
  StateDiffEntry,
  useStateOverride,
} from '@/features/state-override';
import { WETHByChain } from '@/global';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import { useApproveWithOptionalDeposit } from '@/shared';
import { satoshisToWei, weiToSatoshis } from '@midl-xyz/midl-js-executor';
import {
  useAddTxIntention,
  useClearTxIntentions,
  useEVMAddress,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { useBalance, useDefaultAccount } from '@midl-xyz/midl-js-react';
import { useMutation } from '@tanstack/react-query';
import {
  Address,
  encodeAbiParameters,
  encodeFunctionData,
  keccak256,
  toHex,
  zeroAddress,
} from 'viem';
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

// NOTICE: This is a hack that allows to use tokens with unusual _balances field slot
const LUSD_TOKEN = '0x93a800a06BCc954020266227Fe644ec6962ad153' as Address;

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
  const userAddress = useEVMAddress();
  const account = useDefaultAccount();
  const [, setStateOverride] = useStateOverride();

  const { balance } = useBalance({ address: account?.address });

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
              runes: [
                {
                  id: runeA?.id,
                  value: tokenA.amount,
                  address: tokenA.address,
                },
              ],
            },
          });
        }
      }

      if (!isTokenBETH) {
        if (isTokenBNeedApprove) {
          addApproveDepositIntention({
            address: tokenB.address,
            runeId: runeB?.id,
            amount: tokenB.amount,
          });
        } else if (runeB) {
          addTxIntention({
            intention: {
              hasRunesDeposit: true,
              runes: [
                {
                  id: runeB.id,
                  value: tokenB.amount,
                  address: tokenB.address,
                },
              ],
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
          BigInt('0'),
          BigInt('0'),
          to,
          deadline,
        ];
      } else {
        args = [
          tokenA.address,
          tokenB.address,
          tokenA.amount,
          tokenB.amount,
          BigInt(0),
          BigInt(0),
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
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName,
              args: args,
            }),
            value: ethValue,
          },
          satoshis: isETH ? weiToSatoshis(ethValue) : undefined,
        },
      });
      const slot = keccak256(
        encodeAbiParameters(
          [
            {
              type: 'address',
            },
            { type: 'uint256' },
          ],
          [userAddress, 2n],
        ),
      );

      const slotGeneric = keccak256(
        encodeAbiParameters(
          [
            {
              type: 'address',
            },
            { type: 'uint256' },
          ],
          [userAddress, 0n],
        ),
      );

      if (tokenA.address.toLowerCase() === LUSD_TOKEN.toLowerCase()) {
        const customStateOverride: (StateDiffEntry | BalanceEntry)[] = [
          {
            address: LUSD_TOKEN as Address,
            stateDiff: [
              {
                slot,
                value: toHex(tokenA.amount, { size: 32 }),
              },
            ],
          },
        ];
        if (
          tokenB.address === zeroAddress ||
          tokenB.address === WETHByChain[chainId]
        ) {
          const ethOverride: BalanceEntry = {
            address: userAddress,
            balance: satoshisToWei(balance),
          };
          customStateOverride.push(ethOverride);
        }

        if (runeB) {
          customStateOverride.push({
            address: tokenB.address,
            stateDiff: [
              {
                slot: slotGeneric,
                value: toHex(tokenB.amount, { size: 32 }),
              },
            ],
          });
        }

        setStateOverride(customStateOverride);
      } else if (tokenB.address.toLowerCase() === LUSD_TOKEN.toLowerCase()) {
        const customStateOverride: (StateDiffEntry | BalanceEntry)[] = [
          {
            address: LUSD_TOKEN as Address,
            stateDiff: [
              {
                slot,
                value: toHex(tokenB.amount, { size: 32 }),
              },
            ],
          },
        ];

        if (
          tokenA.address === zeroAddress ||
          tokenA.address === WETHByChain[chainId]
        ) {
          const ethOverride: BalanceEntry = {
            address: userAddress,
            balance: satoshisToWei(balance),
          };
          customStateOverride.push(ethOverride);
        }

        if (runeA) {
          customStateOverride.push({
            address: tokenA.address,
            stateDiff: [
              {
                slot: slotGeneric,
                value: toHex(tokenA.amount, { size: 32 }),
              },
            ],
          });
        }

        setStateOverride(customStateOverride);
      } else {
        //setStateOverride([]);
      }
    },
  });

  return {
    addLiquidity,
    addLiquidityAsync,
    ...rest,
  };
};
