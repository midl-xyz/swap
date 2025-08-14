import { BalanceEntry, StateDiffEntry } from '@/features/state-override';
import { WETHByChain } from '@/global';
import { satoshisToWei } from '@midl-xyz/midl-js-executor';
import {
  Address,
  encodeAbiParameters,
  keccak256,
  toHex,
  zeroAddress,
} from 'viem';

// LUSD token requires special handling for _balances field slot
export const LUSD_TOKEN =
  '0x93a800a06BCc954020266227Fe644ec6962ad153' as Address;

export const createBalanceSlot = (userAddress: Address, slot: bigint) => {
  return keccak256(
    encodeAbiParameters(
      [{ type: 'address' }, { type: 'uint256' }],
      [userAddress, slot],
    ),
  );
};

export const createLUSDStateOverride = (
  tokenA: { address: Address; amount: bigint },
  tokenB: { address: Address; amount: bigint },
  userAddress: Address,
  balance: number,
  chainId: number,
  runeA: any,
  runeB: any,
): (StateDiffEntry | BalanceEntry)[] => {
  const slot = createBalanceSlot(userAddress, 2n);
  const slotGeneric = createBalanceSlot(userAddress, 0n);

  const isTokenALUSD =
    tokenA.address.toLowerCase() === LUSD_TOKEN.toLowerCase();
  const isTokenBLUSD =
    tokenB.address.toLowerCase() === LUSD_TOKEN.toLowerCase();

  if (!isTokenALUSD && !isTokenBLUSD) {
    return [];
  }

  const lusdToken = isTokenALUSD ? tokenA : tokenB;
  const otherToken = isTokenALUSD ? tokenB : tokenA;
  const otherRune = isTokenALUSD ? runeB : runeA;

  const customStateOverride: (StateDiffEntry | BalanceEntry)[] = [
    {
      address: LUSD_TOKEN,
      stateDiff: [
        {
          slot,
          value: toHex(lusdToken.amount, { size: 32 }),
        },
      ],
    },
  ];

  // Add ETH balance override if needed
  const isOtherTokenETH =
    otherToken.address === zeroAddress ||
    otherToken.address === WETHByChain[chainId];

  if (isOtherTokenETH) {
    customStateOverride.push({
      address: userAddress,
      balance: satoshisToWei(balance),
    });
  }

  // Add other token state override if it's a rune
  if (otherRune) {
    customStateOverride.push({
      address: otherToken.address,
      stateDiff: [
        {
          slot: slotGeneric,
          value: toHex(otherToken.amount, { size: 32 }),
        },
      ],
    });
  }

  return customStateOverride;
};

/**
 * Creates simple LUSD state override for swap operations
 */
export const createLUSDSwapStateOverride = (
  userAddress: Address,
  amount: bigint,
): StateDiffEntry[] => {
  const slot = createBalanceSlot(userAddress, 2n);

  return [
    {
      address: LUSD_TOKEN,
      stateDiff: [
        {
          slot,
          value: toHex(amount, { size: 32 }),
        },
      ],
    },
  ];
};
