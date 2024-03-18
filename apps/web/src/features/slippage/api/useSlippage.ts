import { useState } from 'react';

const localStorageKey = 'slippage';
const DEFAULT_SLIPPAGE_VALUE = '5';

export const useSlippage = () => {
  let defaultValue: string | null = null;
  if (typeof window !== 'undefined') {
    defaultValue = localStorage.getItem(localStorageKey);
  }
  const [slippage, setLocalSlippage] = useState(
    defaultValue ? defaultValue : DEFAULT_SLIPPAGE_VALUE,
  );

  const setSlippage = (newSlippage: number | string) => {
    const slippage = newSlippage.toString();
    localStorage.setItem(localStorageKey, slippage);
    setLocalSlippage(slippage);
  };

  const applySlippage = (amount: bigint, overrideSlippage?: number) => {
    const slip = overrideSlippage || Number(slippage);

    if (slip < 0 || slip > 100) {
      console.warn('slippage percent out of range 0..100: -> ', slippage);
    }

    return amount - (amount * BigInt(slippage)) / BigInt(100);
  };

  return { slippage, setSlippage, applySlippage };
};
