import { useToken } from '@/entities';
import { useGetPairStats, useRemoveLiquidity } from '@/features/liquidity/api';
import { removeLiquidityDialogAtom } from '@/features/liquidity/model';
import {
  TokenLogo,
  TokenValue,
  useERC20Allowance,
  useERC20ApproveAllowance,
} from '@/features/token';
import { deployments } from '@/global';
import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
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
import { Address, formatUnits, parseUnits } from 'viem';
import { useAccount } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type RemoveLiquidityDialogProps = {
  onClose?: () => void;
} & DialogProps;

type FormData = {
  value: string;
};

const schema = yup.object().shape({
  value: yup.string().test({
    name: 'is-percent',
    message: 'Value must be a percentage',
    test: (value) => {
      const parsed = parseFloat(value ?? '');

      return !isNaN(parsed) && parsed >= 0 && parsed <= 100;
    },
  }),
});

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
  const { handleSubmit, control, setValue, watch, formState, trigger } =
    useForm<FormData>({
      defaultValues: {
        value: '',
      },
      reValidateMode: 'onChange',
      mode: 'onChange',
      resolver: yupResolver(schema) as any,
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

  const parsedLPTokenBalance = formatUnits(
    balances.lpToken ?? BigInt(0),
    lpTokenInfo.decimals,
  );

  const removeLPAmount =
    parseFloat(parsedLPTokenBalance) *
    (parseFloat(parseNumberInput(value)) / 100);

  const parsedLPToken = parseUnits(
    removeLPAmount.toString(),
    lpTokenInfo.decimals,
  );

  const shouldApprove =
    parsedLPToken > BigInt(0) && (allowance as bigint) < parsedLPToken;

  const {
    write: approve,
    isConfirmed,
    isConfirming,
    isPending,
  } = useERC20ApproveAllowance();

  const applyMax = (percent: number) => () => {
    setValue('value', percent.toString() + '%');
    trigger();
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

  let priceAtoB = 0;
  let priceBtoA = 0;

  const formattedReserveA = formatUnits(reserves.tokenA, tokenAInfo.decimals);
  const formattedReserveB = formatUnits(reserves.tokenB, tokenBInfo.decimals);

  const a = parseFloat(formattedReserveA);
  const b = parseFloat(formattedReserveB);

  try {
    priceAtoB = a / b;
    priceBtoA = b / a;
  } catch {}

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
              render={({ field, fieldState }) => (
                <NumberInput
                  appearance="secondary"
                  placeholder="Enter amount (%)"
                  postfix="%"
                  min={0}
                  precision={2}
                  className={css({
                    borderColor: fieldState.invalid ? 'red.500' : undefined,
                    borderWidth: 1,
                  })}
                  max={100}
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
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                gap: 4,
              })}
            >
              <TokenValue
                address={tokenA}
                chainId={chainId}
                value={reserves.tokenA}
                hideLogo
                hideSymbol
                className={css({
                  textStyle: 'h6',
                })}
              />
              <div className={css({ display: 'flex', gap: 1 })}>
                <TokenLogo address={tokenA} chainId={chainId} />
                {tokenAInfo.symbol}
              </div>
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                gap: 4,
              })}
            >
              <TokenValue
                address={tokenB}
                chainId={chainId}
                value={reserves.tokenB}
                hideLogo
                hideSymbol
                className={css({
                  textStyle: 'h6',
                })}
              />
              <div className={css({ display: 'flex', gap: 1 })}>
                <TokenLogo address={tokenB} chainId={chainId} />
                {tokenBInfo.symbol}
              </div>
            </div>
          </div>

          <div
            className={hstack({
              gap: 4,
              justifyContent: 'space-between',
              alignItems: 'start',
            })}
          >
            <span>Price</span>
            <div
              className={vstack({
                gap: 1,
                textAlign: 'right',
                alignItems: 'end',
              })}
            >
              <span>
                1 {tokenAInfo.symbol} = {parseFloat(priceAtoB.toFixed(4))}{' '}
                {tokenBInfo.symbol}
              </span>
              <span>
                1 {tokenBInfo.symbol} = {parseFloat(priceBtoA.toFixed(4))}{' '}
                {tokenAInfo.symbol}
              </span>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isConfirming || isPending || !formState.isValid}
          >
            {shouldApprove ? 'Approve LP Token' : 'Remove Liquidity'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
