import { useToken } from '@/entities';
import {
  useGetPair,
  useGetPairStats,
  useRemoveLiquidity,
} from '@/features/liquidity/api';
import { removeLiquidityDialogAtom } from '@/features/liquidity/model';
import { useERC20Allowance, useERC20ApproveAllowance } from '@/features/token';
import { deployments } from '@/global';
import {
  DialogContent,
  Dialog,
  DialogOverlay,
  Button,
  Input,
  NumberInput,
  parseNumberInput,
  scopeKeyPredicate,
} from '@/shared';
import { SlippageControl } from '@/widgets';
import { DialogProps } from '@radix-ui/react-dialog';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Address, formatUnits, getAddress, parseUnits } from 'viem';
import { useAccount } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type RemoveLiquidityDialogProps = {
  onClose?: () => void;
} & DialogProps;

type FormData = {
  value: string;
};

export const RemoveLiquidityDialog = ({
  onClose,
  ...rest
}: RemoveLiquidityDialogProps) => {
  const [
    {
      lpToken: { address, tokenA, tokenB, chainId },
    },
  ] = useAtom(removeLiquidityDialogAtom);
  const { address: userAddress } = useAccount();
  const { handleSubmit, control, setValue, watch } = useForm<FormData>({
    defaultValues: {
      value: '',
    },
  });
  const { reserves, balances } = useGetPairStats({
    lpTokenAddress: address,
    tokenA,
    tokenB,
    userAddress: userAddress as Address,
  });

  const { removeLiquidity, hash } = useRemoveLiquidity();

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);
  const lpTokenInfo = useToken(address, chainId);

  const { data: allowance } = useERC20Allowance({
    token: address,
    spender: deployments[chainId].UniswapV2Router02.address,
    user: userAddress as Address,
  });

  const value = watch('value');

  const parsedLPToken = parseUnits(
    parseNumberInput(value),
    lpTokenInfo.decimals,
  );

  const shouldApprove =
    parsedLPToken > BigInt(0) && (allowance as bigint) < parsedLPToken;

  const parsedLPTokenBalance = formatUnits(
    balances.lpToken ?? BigInt(0),
    lpTokenInfo.decimals,
  );

  const {
    write: approve,
    isConfirmed,
    isConfirming,
    isPending,
  } = useERC20ApproveAllowance();

  const applyMax = (percent: number) => () => {
    const balance = parseFloat(parsedLPTokenBalance) * (percent / 100);
    setValue('value', balance.toString());
  };

  const queryClient = useQueryClient();

  const onSubmit = (formData: FormData) => {
    if (shouldApprove) {
      approve(
        address as Address,
        deployments[chainId].UniswapV2Router02.address,
        parsedLPToken,
      );
    }
  };

  useEffect(() => {
    if (isConfirmed) {
      toast.success('Approved LP Token');
      queryClient.invalidateQueries({
        predicate: scopeKeyPredicate(['allowance']),
      });
    }
  }, [isConfirmed, queryClient]);

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          width: 'full',
          maxWidth: 450,
        })}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={vstack({
            alignItems: 'stretch',
            gap: 4,
          })}
        >
          <h3
            className={css({
              textStyle: 'h3',
            })}
          >
            Remove Liquidity
          </h3>
          <div
            className={css({
              borderWidth: 1,
              p: 4,
              borderStyle: 'solid',
              borderColor: 'neutral.200',
              borderRadius: 'xl',
              display: 'flex',
              gap: 4,
              flexDirection: 'column',
            })}
          >
            <h6
              className={css({
                textStyle: 'h6',
              })}
            >
              Remove amount
            </h6>
            <Controller
              control={control}
              name="value"
              render={({ field }) => (
                <NumberInput
                  appearance="secondary"
                  placeholder="Enter amount"
                  {...field}
                />
              )}
            />

            <div
              className={hstack({
                gap: 4,
                flexWrap: 'wrap',
              })}
            >
              <Button appearance="secondary" onClick={applyMax(25)}>
                25%
              </Button>
              <Button appearance="secondary" onClick={applyMax(50)}>
                50%
              </Button>
              <Button appearance="secondary" onClick={applyMax(75)}>
                75%
              </Button>
              <Button appearance="secondary" onClick={applyMax(100)}>
                Max
              </Button>
            </div>
          </div>

          <SlippageControl inline />

          <Button type="submit" disabled={isConfirming || isPending}>
            {shouldApprove ? 'Approve LP Token' : 'Remove Liquidity'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
