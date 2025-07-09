import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Address, Chain } from 'viem';

export const WETHByChain: Record<Chain['id'], Address> = {
  [midlRegtest.id]: '0x76818770D192A506F90e79D5cB844E708be0D7A0',
};
