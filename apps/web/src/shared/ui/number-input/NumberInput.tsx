import { Input, InputProps, mergeRefs } from '@/shared';
import { InputHTMLAttributes, forwardRef, useRef } from 'react';
import { useMaskito } from '@maskito/react';
import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';

export const NumberInput = forwardRef<
  HTMLInputElement,
  InputProps & {
    precision?: number;
  }
>(({ precision, ...props }, ref) => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  const maskRef = useMaskito({
    options: maskitoNumberOptionsGenerator({
      precision: precision ?? Infinity,
      min: 0,
      max: props.max ? parseFloat(props.max.toString()) : Infinity,
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

export const parseNumberInput = (value: string, dot: string = '.') => {
  const parsedNumber = maskitoParseNumber(value, dot);

  if (isNaN(parsedNumber)) {
    return '0';
  }

  return parsedNumber.toString();
};

NumberInput.displayName = 'NumberInput';
