import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Address, Chain } from 'viem';

export const WETHByChain: Record<Chain['id'], Address> = {
  [midlRegtest.id]: '0xC726845d8b6f0586A12D31ec5075e47B28c8eC4A',
};
