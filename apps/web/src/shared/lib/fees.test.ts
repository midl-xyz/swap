import { describe, it, expect } from 'vitest';
import { calculateAdjustedBalance } from './fees';
import { satoshisToWei } from '@midl-xyz/midl-js-executor';

function computeFeeWei(feeRate: bigint): bigint {
  const MIDL_FEE = 3516;
  const BTC_TX_SIZE = feeRate * 1000n;
  const feeSats = MIDL_FEE + Number(feeRate * BTC_TX_SIZE);
  return satoshisToWei(feeSats);
}

describe('calculateAdjustedBalance', () => {
  it('subtracts the computed BTC fee when balance is greater than the fee', () => {
    const feeRate = 3n;
    const feeWei = computeFeeWei(feeRate);
    const balance = feeWei + 123456789n;

    const adjusted = calculateAdjustedBalance(balance, feeRate);
    expect(adjusted).toBe(balance - feeWei);
  });

  it('returns 0 when balance equals the fee', () => {
    const feeRate = 5n;

    const balance = computeFeeWei(feeRate);
    const adjusted = calculateAdjustedBalance(balance, feeRate);
    expect(adjusted).toBe(0n);
  });

  it('returns 0 when balance is less than the fee (clamps to zero)', () => {
    const feeRate = 7n;
    const feeWei = computeFeeWei(feeRate);

    const balance = feeWei - 1n;
    const adjusted = calculateAdjustedBalance(balance, feeRate);
    expect(adjusted).toBe(0n);
  });

  it('no deduction when feeRate is 0 (fee becomes just MIDL_FEE converted)', () => {
    const feeRate = 0n;
    const feeWei = computeFeeWei(feeRate);

    const balance = feeWei + 10n;
    const adjusted = calculateAdjustedBalance(balance, feeRate);
    expect(adjusted).toBe(balance - feeWei);
  });

  it('handles very large feeRate values without precision loss (BigInt-safe)', () => {
    const feeRate = 1000n;
    const feeWei = computeFeeWei(feeRate);

    const balance = feeWei + 1_000_000_000_000_000_000n;
    const adjusted = calculateAdjustedBalance(balance, feeRate);
    expect(adjusted).toBe(balance - feeWei);
  });
});
