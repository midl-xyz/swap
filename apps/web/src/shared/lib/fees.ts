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
  const MIDL_FEE = 3516;
  const BTC_TX_SIZE = feeRate * 1000n;
  const feeWei = satoshisToWei(MIDL_FEE + Number(feeRate * BTC_TX_SIZE));
  return rawBalance > feeWei ? rawBalance - feeWei : 0n;
};
