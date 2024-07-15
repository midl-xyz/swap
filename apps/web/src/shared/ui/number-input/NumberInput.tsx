import { Input, InputProps, mergeRefs } from '@/shared';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';
import { useMaskito } from '@maskito/react';
import { forwardRef, useRef } from 'react';

export const NumberInput = forwardRef<
  HTMLInputElement,
  InputProps & {
    precision?: number;
    postfix?: string;
  }
>(({ precision, postfix, ...props }, ref) => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  const maskRef = useMaskito({
    options: maskitoNumberOptionsGenerator({
      precision: precision ?? Infinity,
      min: 0,
      max: props.max ? parseFloat(props.max.toString()) : Infinity,
      postfix,
    }),
  });

  const refs = mergeRefs<HTMLInputElement>(inputRef, maskRef, ref);

  return (
    <Input
      {...props}
      ref={refs}
      inputMode="decimal"
      type="text"
      onInput={props.onChange}
    />
  );
});

export const parseNumberInput = (value: string = '', dot: string = '.') => {
  const trimmedValue = value.replaceAll(/\s+/g, '');

  const decimals = trimmedValue.split('.')[1];

  if (decimals?.length >= 6) {
    return trimmedValue.toString();
  }

  const parsedNumber = maskitoParseNumber(trimmedValue, dot);

  if (isNaN(parsedNumber)) {
    return '0';
  }

  return parsedNumber.toString();
};

NumberInput.displayName = 'NumberInput';
