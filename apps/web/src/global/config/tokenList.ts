/* eslint-disable prettier/prettier */
'use client';

import type { Token } from '@/entities';
import { promMainnet } from '@/global/customChainsConfig';
import { zeroAddress } from 'viem';

export const tokenList: Token[] = [
  {
    symbol: 'PROM',
    name: 'Prom',
    address: zeroAddress,
    chainId: promMainnet.id,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfc82bb4ba86045Af6F327323a46E80412b91b27d/logo.png',
  },
  {
    symbol: 'WPROM',
    name: 'WProm',
    address: '0x04A21a38D5E275d6023B27504beB3095dC43B0C0',
    chainId: promMainnet.id,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfc82bb4ba86045Af6F327323a46E80412b91b27d/logo.png',
  },
  {
    symbol: 'USDT',
    name: 'USDT',
    address: '0x7e942605B5028E3B751dBB5Ef8afC5CF85a5A7eD',
    chainId: promMainnet.id,
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/926ed75410329f223a8ce6a9bc8b288d1dd6c810/blockchains/ethereum/assets/0xb977ee318010A5252774171494a1bCB98E7fab65/logo.png',
  },
  {
    symbol: 'USDT BSC Bridged',
    name: 'USDT',
    address: '0x6064C9028d069a7822d30EF17065A57524A5FcAb',
    chainId: promMainnet.id,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/926ed75410329f223a8ce6a9bc8b288d1dd6c810/blockchains/ethereum/assets/0xb977ee318010A5252774171494a1bCB98E7fab65/logo.png',
  },
  {
    symbol: 'USDC',
    name: 'USDC',
    address: '0xd9c95e2ad330E11D7Dfa58f18504049f625E955e',
    chainId: promMainnet.id,
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/77ef0d99eaf03aa766d64f7bd02eeb41c3b1604d/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    symbol: 'USDC BSC Bridged',
    name: 'USDC',
    address: '0x451c22b06a5f38a43641f6910834C90f3619cEb9',
    chainId: promMainnet.id,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/77ef0d99eaf03aa766d64f7bd02eeb41c3b1604d/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
];
