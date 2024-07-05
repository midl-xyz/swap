import { Token } from '@/entities';
import { zeroAddress } from 'viem';
import { sepolia } from 'viem/chains';
import BFEE from './assets/bfee.jpg';

export const tokenList: Token[] = [
  {
    symbol: 'ETH',
    name: 'Sepolia ETH',
    address: zeroAddress,
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://github.com/trustwallet/assets/blob/master/blockchains/ethereum/info/logo.png',
  },
  {
    symbol: 'WstETH',
    name: 'Wrapped stETH',
    address: '0x68328F45Ca73f26666520b8027aaA30c014D17c6',
    chainId: sepolia.id,
    decimals: 18,
    logoURI: '',
  },
  {
    symbol: 'BFEE',
    name: 'Base Fee LMA Token',
    address: '0x1230985617140956E750B9F0B223219f9738FfAf',
    chainId: sepolia.id,
    decimals: 18,
    logoURI: BFEE.src,
  },
];
