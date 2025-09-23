import { describe, it, expect } from 'vitest';
import { calculateAdjustedBalance } from './fees';

describe('calculateAdjustedBalance', () => {
  it('is linear with respect to balance when far above the fee (same feeRate)', () => {
    const feeRate = 3n;
    const big = 10_000_000_000_000_000_000n;
    const delta = 123_456_789n;

    const a1 = calculateAdjustedBalance(big, feeRate);
    const a2 = calculateAdjustedBalance(big + delta, feeRate);

    expect(a2 - a1).toBe(delta);
  });

  it('never returns a negative value and clamps small balances to 0', () => {
    const feeRate = 7n;
    expect(calculateAdjustedBalance(0n, feeRate)).toBe(0n);
    expect(calculateAdjustedBalance(1n, feeRate)).toBe(0n);
  });

  it('higher feeRate never increases the adjusted balance (monotonic wrt feeRate)', () => {
    const balance = 10_000_000_000_000_000_000n;
    const lowFee = 1n;
    const highFee = 10n;

    const low = calculateAdjustedBalance(balance, lowFee);
    const high = calculateAdjustedBalance(balance, highFee);

    expect(high <= low).toBe(true);
  });

  it('with extremely large feeRate and modest balance, result becomes 0 (full fee consumption)', () => {
    const balance = 1_000_000_000_000n;
    const veryHighFee = 1_000_000n;

    const adjusted = calculateAdjustedBalance(balance, BigInt(veryHighFee));
    expect(adjusted).toBe(0n);
  });

  it('returns a bigint and is deterministic for same inputs', () => {
    const balance = 123_456_789_000_000_000n;
    const feeRate = 5n;
    const a = calculateAdjustedBalance(balance, feeRate);
    const b = calculateAdjustedBalance(balance, feeRate);

    expect(typeof a).toBe('bigint');
    expect(a).toBe(b);
  });
});
