import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { atom } from 'jotai';
import { Address, Chain } from 'viem';

export const removeLiquidityDialogAtom = atom<{
  open: boolean;
  lpToken: {
    address: Address;
    chainId: Chain['id'];
    tokenA: Address;
    tokenB: Address;
  };
}>({
  open: false,
  lpToken: {
    address: '' as Address,
    chainId: midlRegtest.id,
    tokenA: '' as Address,
    tokenB: '' as Address,
  },
});
