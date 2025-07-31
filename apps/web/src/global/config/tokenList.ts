import type { Token } from '@/entities';
import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { zeroAddress } from 'viem';

export const tokenList: Token[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    address: zeroAddress,
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/bitcoin/info/logo.png',
  },
  {
    symbol: 'MIDLRUNESTABLECOIN',
    name: 'MIDLRUNESTABLECOIN',
    address: '0x93a800a06BCc954020266227Fe644ec6962ad153',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/stablecoin.png',
  },
];
