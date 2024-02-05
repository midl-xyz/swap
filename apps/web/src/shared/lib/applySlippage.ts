const DEFAULT_SLIPPAGE_VALUE = 5;

export const applySlippage = (amount: bigint, overrideSlippage?: number) => {
  const globalSlippage = () => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('slippage');
      return result ? Number(result) : DEFAULT_SLIPPAGE_VALUE;
    }
    return DEFAULT_SLIPPAGE_VALUE;
  };
  const slippage = overrideSlippage || globalSlippage();
  if (slippage < 0 || slippage > 100) {
    console.warn('slippage percent out of range 0..100: -> ', slippage);
  }

  return amount - (amount * BigInt(slippage)) / BigInt(100);
};
