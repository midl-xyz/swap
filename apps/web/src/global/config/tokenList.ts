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
    symbol: 'MIDL•RUNES•STABLECOIN',
    name: 'MIDL•RUNES•STABLECOIN',
    address: '0x77C43B3D65ab5e61ABaD7f7966B0472E35A26c4C',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/stablecoin.png',
  },
  {
    symbol: 'DOG•GO•TO•THE•MOON',
    name: 'DOG•GO•TO•THE•MOON',
    address: '0x4734543E04cB0ab4D87101968df833ABf31755B8',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/DOGGOTOTHEMOON.png',
  },
  {
    symbol: 'DOGECOIN•DOGE•DOSU',
    name: 'DOGECOIN•DOGE•DOSU',
    address: '0x053575a6Cf441fb9911220B21a1675520b353838',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/DOGE.png',
  },
  {
    symbol: 'LOBO•THE•WOLF•PUP',
    name: 'LOBO•THE•WOLF•PUP',
    address: '0xbF786741bd91898b16eC6Ed9725F5cCaf5ac1615',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/LOBO.png',
  },
  {
    symbol: 'MIDLGROUNDS•GEARS•TOKEN',
    name: 'MIDLGROUNDS•GEARS•TOKEN',
    address: '0xEf073E6F6aFcb9b9C227f51c9E3f624B935f9b9E',
    chainId: midlRegtest.id,
    decimals: 18,
    logoURI: '/images/GEARS.png',
  },
];
