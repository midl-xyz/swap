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
    symbol: 'MIDL•RUNE•STABLECOIN',
    name: 'MIDL•RUNE•STABLECOIN',
    address: '0x93a800a06BCc954020266227Fe644ec6962ad153',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/stablecoin.png',
  },
  {
    symbol: 'DOG•GO•TO•THE•MOON',
    name: 'DOG•GO•TO•THE•MOON',
    address: '0xb5212bc057d93a5e6625f278A7a719637e4FD01B',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/DOGGOTOTHEMOON.png',
  },
];
