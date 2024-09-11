'use client';

import { Token } from '@/entities';
import { promTestnet } from '@/global/customChainsConfig';
import { zeroAddress } from 'viem';

export const tokenList: Token[] = [
  {
    symbol: 'PROM',
    name: 'Prometeus',
    address: zeroAddress,
    chainId: promTestnet.id,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfc82bb4ba86045Af6F327323a46E80412b91b27d/logo.png',
  },
];
