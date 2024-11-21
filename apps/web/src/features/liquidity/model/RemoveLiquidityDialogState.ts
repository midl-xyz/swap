import { ChainId } from '@/global';
import { promMainnet } from '@/global/customChainsConfig';
import { atom } from 'jotai';
import { Address } from 'viem';

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
    chainId: promMainnet.id,
    tokenA: '' as Address,
    tokenB: '' as Address,
  },
});
