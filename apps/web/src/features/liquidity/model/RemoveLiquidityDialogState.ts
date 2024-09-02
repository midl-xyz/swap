import { ChainId } from '@/global';
import { atom } from 'jotai';
import { Address } from 'viem';

export const removeLiquidityDialogAtom = (chainId: ChainId) =>
  atom<{
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
      chainId,
      tokenA: '' as Address,
      tokenB: '' as Address,
    },
  });
