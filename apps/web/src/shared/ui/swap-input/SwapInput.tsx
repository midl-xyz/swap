import { useToken } from '@/entities';
import { TokenButton, useTokenBalance } from '@/features';
import { Button, InputGroup, NumberInput } from '@/shared/ui';
import { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { formatUnits } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';
import { hstack, vstack } from '~/styled-system/patterns';

export const StyledNumberInput = styled(
  NumberInput,
  {
    base: {
      textStyle: 'h4',
      flexGrow: 1,
      pl: 1,
      caretColor: 'orange.500',
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  {
    defaultProps: {
      autoComplete: 'off',
    },
  },
);

type SwapInputProps = {
  amountName: string;
  tokenName: string;
  label?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * SwapInput component.
 * Works only with the `useForm` hook from `react-hook-form`.
 */
export const SwapInput = ({
  amountName,
  tokenName,
  label,
  ...rest
}: SwapInputProps) => {
  const { control, watch, setValue } = useFormContext();
  const chainId = useChainId();
  const token = watch(tokenName);
  const tokenInfo = useToken(token, chainId);
  const balance = useTokenBalance(token);

  const applyMax = () => {
    setValue(
      amountName,
      formatUnits(balance.data?.balance ?? BigInt(0), tokenInfo.decimals),
    );
  };

  return (
    <InputGroup className={hstack()}>
      <label
        className={vstack({
          alignItems: 'stretch',
          width: '100%',
          gap: 2,
        })}
      >
        {label && <span>{label}</span>}
        <div className={hstack()}>
          <Controller
            control={control}
            name={amountName}
            render={({ field }) => <StyledNumberInput {...rest} {...field} />}
          />
          <Controller
            control={control}
            name={tokenName}
            render={({ field }) => {
              return <TokenButton {...field} chainId={chainId} />;
            }}
          />

          {balance.data?.balance !== undefined ? (
            <>
              <Button
                className={css({
                  position: 'absolute',
                  right: 4,
                  top: 1,
                  textStyle: 'caption',
                  color: 'neutral.700',
                  fontSize: 12,
                  px: 1,
                  py: 1,
                  height: 'auto',
                  borderRadius: 'sm',
                })}
                onClick={applyMax}
                appearance="ghost"
              >
                Use max
              </Button>
              <div
                className={css({
                  textStyle: 'caption',
                  position: 'absolute',
                  right: 4,
                  bottom: 1,
                  color: 'neutral.500',
                })}
              >
                Balance:{' '}
                {balance.data?.balance && balance.data?.decimals
                  ? formatUnits(balance.data?.balance, balance.data?.decimals)
                  : '0'}
              </div>
            </>
          ) : null}
        </div>
      </label>
    </InputGroup>
  );
};
