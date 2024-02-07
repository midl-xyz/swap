import { useState } from 'react';

const localStorageKey = 'slippage';
const DEFAULT_SLIPPAGE_VALUE = '5';

export const useSlippage = () => {
  const defaultValue = localStorage.getItem(localStorageKey);
  const [slippage, setLocalSlippage] = useState(
    defaultValue ? defaultValue : DEFAULT_SLIPPAGE_VALUE,
  );

  const setSlippage = (newSlippage: number | string) => {
    const slippage =
      typeof newSlippage === 'string' ? newSlippage : newSlippage.toString();
    localStorage.setItem(localStorageKey, slippage);
    setLocalSlippage(slippage);
  };

  const applySlippage = (amount: bigint, overrideSlippage?: number) => {
    const _slippage = overrideSlippage || Number(slippage);

    if (_slippage < 0 || _slippage > 100) {
      console.warn('slippage percent out of range 0..100: -> ', slippage);
    }

    return amount - (amount * BigInt(slippage)) / BigInt(100);
  };

  return { slippage, setSlippage, applySlippage };
};
