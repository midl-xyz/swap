import { ChainId } from '@/global';
import { atom } from 'jotai';
import { Address } from 'viem';
import { sepolia } from 'viem/chains';

export const removeLiquidityDialogAtom = atom<{
  open: boolean;
  lpToken: {
    address: Address;
    chainId: ChainId;
    tokenA: Address;
    tokenB: Address;
  };
}>({
  open: false,
  lpToken: {
    address: '' as Address,
    chainId: sepolia.id,
    tokenA: '' as Address,
    tokenB: '' as Address,
  },
});
