'use client';

import { Button, Input, NumberInput } from '@/shared';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';
import { ArrowDownUpIcon } from 'lucide-react';
import { styled } from '~/styled-system/jsx';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const InputGroup = styled('div', {
  base: {
    bg: 'white',
    borderRadius: 'lg',
    px: 4,
    py: 4,
  },
});

const SwapInput = styled(NumberInput, {
  base: {
    textStyle: 'h4',
    borderLeft: '2px solid',
    borderLeftColor: 'transparent',
    pl: 1,
    // TODO: This doesn't look right, looks like more of a caret
    _focus: {
      outline: 'none',
      boxShadow: 'none',
      borderLeftColor: 'orange.500',
    },
  },
});

type FormData = {
  inputToken: string;
  outputToken: string;
};

export const SwapForm = () => {
  const { handleSubmit, register, setValue, getValues, watch } =
    useForm<FormData>();

  const { inputToken, outputToken } = watch();

  const onSubmit = () => {
    // TODO: Implement token swap
  };

  const onSwapInput = () => {
    const { outputToken, inputToken } = getValues();

    if (inputToken && !outputToken) {
      setValue('outputToken', inputToken);
      setValue('inputToken', '');
    }

    if (!inputToken && outputToken) {
      setValue('inputToken', outputToken);
      setValue('outputToken', '');
    }

    if (inputToken && outputToken) {
      setValue('inputToken', outputToken);
      setValue('outputToken', '');
    }
  };

  useEffect(() => {
    // TODO: Implement get token swap rate
  }, [inputToken, outputToken]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={vstack({
        gap: 8,
        alignItems: 'stretch',
        bg: 'neutral.100',
        borderRadius: '2xl',
        px: 16,
        py: 8,
        width: 'full',
        maxWidth: '1/3',
      })}
    >
      <h2
        className={css({
          textStyle: 'h2',
          textAlign: 'center',
        })}
      >
        Swap
      </h2>

      <div
        className={vstack({
          alignItems: 'stretch',
          gap: 4,
          position: 'relative',
        })}
      >
        <InputGroup>
          <label
            className={vstack({
              alignItems: 'stretch',
              gap: 2,
            })}
          >
            <span>You pay</span>
            <SwapInput placeholder="0" {...register('inputToken')} />
          </label>
        </InputGroup>

        <Button
          onClick={onSwapInput}
          aria-label="Swap input and output tokens"
          className={css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          })}
        >
          <ArrowDownUpIcon />
        </Button>
        <InputGroup>
          <label
            className={vstack({
              alignItems: 'stretch',
              gap: 2,
            })}
          >
            <span>You receive</span>
            <SwapInput placeholder="0" {...register('outputToken')} />
          </label>
        </InputGroup>
      </div>
      <Button type="submit">Confirm</Button>
    </form>
  );
};
