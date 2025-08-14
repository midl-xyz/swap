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
  {
    symbol: 'DOGECOIN•DOGE•DOSU',
    name: 'DOGECOIN•DOGE•DOSU',
    address: '0xc3E1872de11A670541631c9fEc72edfA0Bb37Fb6',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/DOGE.png',
  },
  {
    symbol: 'LOBO•THE•WOLF•PUP',
    name: 'LOBO•THE•WOLF•PUP',
    address: '0x7DA6c718F95683cf5423469Ca17293cB6aF9D022',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/LOBO.png',
  },
  {
    symbol: 'MIDLGROUNDS•GEARS•TOKEN',
    name: 'MIDLGROUNDS•GEARS•TOKEN',
    address: '0x007041524A8d0Cc320325542616cf844911159b7',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/GEARS.png',
  },
];
