import { useToken as useLocalToken } from '@/entities';
import { IntentionSigner } from '@/features/btc/ui/IntentionSigner';
import {
  useEstimateLiquidityPair,
  useRemoveLiquidityMidl,
} from '@/features/liquidity';
import { useGetPairStats } from '@/features/liquidity/api';
import { removeLiquidityDialogAtom } from '@/features/liquidity/model';
import { useSlippage } from '@/features/slippage';
import { TokenLogo, TokenValue } from '@/features/token';

import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  NumberInput,
  parseNumberInput,
} from '@/shared';
import { SlippageControl } from '@/widgets';
import { toPlainString } from '@/widgets/swap-form/ui/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEVMAddress, useToken } from '@midl-xyz/midl-js-executor-react';
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog';
import { useQueryClient } from '@tanstack/react-query';
import fromExponential from 'from-exponential';
import { useAtom } from 'jotai';
import { Controller, useForm } from 'react-hook-form';
import { Address, formatUnits, parseUnits, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';
import * as yup from 'yup';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

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
  const chainId = useChainId();
  const [
    {
      lpToken: { address, tokenA, tokenB },
    },
  ] = useAtom(removeLiquidityDialogAtom);
  const userAddress = useEVMAddress();

  const { handleSubmit, control, setValue, watch, formState, trigger } =
    useForm<FormData>({
      defaultValues: {
        value: '',
      },
      reValidateMode: 'onChange',
      mode: 'onChange',
      resolver: yupResolver(schema) as any,
    });
  const {
    data: { reserves, balances },
  } = useGetPairStats({
    lpTokenAddress: address,
    tokenA,
    tokenB,
    userAddress: userAddress as Address,
  });
  const queryClient = useQueryClient();
  const tokenAInfo = useLocalToken(tokenA, chainId);
  const tokenBInfo = useLocalToken(tokenB, chainId);
  const lpTokenInfo = useLocalToken(address, chainId);

  const runeA = useToken(tokenA);
  const runeB = useToken(tokenB);

  const value = watch('value');

  const parsedLPTokenBalance = formatUnits(
    balances.lpToken ?? BigInt(0),
    lpTokenInfo.decimals,
  ); // 1

  const removeLPAmount =
    parseFloat(parsedLPTokenBalance) *
    (parseFloat(parseNumberInput(value)) / 100); // 1* 0.25 = 0.25

  let parsedLPToken = parseUnits(
    Number(value) === 100
      ? parsedLPTokenBalance
      : fromExponential(removeLPAmount),
    lpTokenInfo.decimals,
  ); // 250000000000

  parsedLPToken =
    parsedLPToken > balances.lpToken ? balances.lpToken : parsedLPToken;

  const { tokenAAmount, tokenBAmount } = useEstimateLiquidityPair({
    tokenA,
    tokenB,
    liquidityAmount: parsedLPToken,
  });

  const applyMax = (percent: number) => () => {
    setValue('value', percent.toString() + '%');
    trigger();
  };

  const [slippage] = useSlippage();

  const tokenAAmountWithSlippage =
    (parseFloat(formatUnits(tokenAAmount ?? BigInt(0), tokenAInfo.decimals)) ??
      0) *
    (1 - (slippage || 0));

  const tokenBAmountWithSlippage =
    (parseFloat(formatUnits(tokenBAmount ?? BigInt(0), tokenBInfo.decimals)) ??
      0) *
    (1 - (slippage || 0));

  const { removeLiquidity, isSuccess, reset } = useRemoveLiquidityMidl({
    lpToken: {
      address,
      amount: parsedLPToken,
    },
    tokenA,
    tokenB,
  });

  const onSubmit = () => {
    removeLiquidity({
      liquidity: parsedLPToken,
      amountAMin: parseUnits(
        toPlainString(tokenAAmountWithSlippage),
        tokenAInfo.decimals,
      ),
      amountBMin: parseUnits(
        toPlainString(tokenBAmountWithSlippage),
        tokenBInfo.decimals,
      ),
      to: userAddress as Address,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20),
    });
  };

  const handleClose = () => {
    onClose?.();
    reset();
    queryClient.invalidateQueries({
      queryKey: ['GetLiquidityPositions'],
    });
  };

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
        aria-describedby={undefined}
        className={css({
          width: 'full',
          maxWidth: 450,
        })}
      >
        {isSuccess && (
          <div className={vstack({ gap: 4, alignItems: 'center' })}>
            <DialogTitle asChild>
              <h3
                className={css({
                  textStyle: 'h3',
                  textAlign: 'center',
                })}
              >
                Sign intentions to remove liquidity
              </h3>
            </DialogTitle>

            <IntentionSigner
              onClose={handleClose}
              assetsToWithdraw={[
                runeA.rune?.id ? tokenA : zeroAddress,
                runeB.rune?.id ? tokenB : zeroAddress,
              ]}
            />

            <Button onClick={handleClose}>Close</Button>
          </div>
        )}
        {!isSuccess && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={vstack({
              alignItems: 'stretch',
              gap: 4,
            })}
          >
            <DialogTitle asChild>
              <h3
                className={css({
                  textStyle: 'h3',
                })}
              >
                Remove Liquidity
              </h3>
            </DialogTitle>
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
                  value={parseUnits(
                    toPlainString(tokenAAmountWithSlippage),
                    tokenAInfo.decimals,
                  )}
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
                  value={parseUnits(
                    toPlainString(tokenBAmountWithSlippage),
                    tokenBInfo.decimals,
                  )}
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
                  1 {tokenBInfo.symbol} = {parseFloat(priceAtoB.toFixed(4))}{' '}
                  {tokenAInfo.symbol}
                </span>
                <span>
                  1 {tokenAInfo.symbol} = {parseFloat(priceBtoA.toFixed(4))}{' '}
                  {tokenBInfo.symbol}
                </span>
              </div>
            </div>

            <Button type="submit" disabled={!formState.isValid}>
              Remove Liquidity
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
