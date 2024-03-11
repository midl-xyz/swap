import { Input, mergeRefs } from '@/shared';
import { InputHTMLAttributes, forwardRef, useRef } from 'react';
import { useMaskito } from '@maskito/react';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

export const NumberInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  const maskRef = useMaskito({
    options: maskitoNumberOptionsGenerator({
      precision: Infinity,
      min: 0,
    }),
  });

  const refs = mergeRefs<HTMLInputElement>(inputRef, maskRef, ref);

  return <Input {...props} ref={refs} inputMode="decimal" type="text" />;
});

NumberInput.displayName = 'NumberInput';
