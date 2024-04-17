import { atom } from 'jotai';
import { Address } from 'viem';

export const removeLiquidityDialogAtom = atom<{
  open: boolean;
  lpToken: {
    address: Address;
    chainId: number;
    tokenA: Address;
    tokenB: Address;
  };
}>({
  open: false,
  lpToken: {
    address: '' as Address,
    chainId: 0,
    tokenA: '' as Address,
    tokenB: '' as Address,
  },
});
