import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Address, Chain } from 'viem';

export const WETHByChain: Record<Chain['id'], Address> = {
  [midlRegtest.id]: '0x4845eDa0AD9ad8256d1FA7eBcd16E5F35100f600',
};
