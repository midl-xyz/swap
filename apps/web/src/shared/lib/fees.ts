import { satoshisToWei } from '@midl-xyz/midl-js-executor';

/**
 * Calculates the adjusted balance after deducting BTC network fees if applicable.
 *
 * @param rawBalance - current wallet balance in wei
 * @param feeRate - current BTC fee rate (sats/vB)
 * @returns adjusted balance in wei (never negative)
 */
export const calculateAdjustedBalance = (
  rawBalance: bigint,
  feeRate: bigint,
): bigint => {
  const MIDL_FEE = 1758n * feeRate;
  const BTC_TX_FEE = feeRate * 1000n;
  const feeWei = satoshisToWei(Number(MIDL_FEE + BTC_TX_FEE));
  return rawBalance > feeWei ? rawBalance - feeWei : 0n;
};
