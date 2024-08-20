import { Token } from '@/entities';
import { promTestnet } from '@/global';
import { zeroAddress } from 'viem';
import { sepolia } from 'viem/chains';
import BFEE from './assets/bfee.jpg';

export const tokenList: Token[] = [
  {
    symbol: 'WstETH',
    name: 'Wrapped stETH',
    address: '0x68328F45Ca73f26666520b8027aaA30c014D17c6',
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/f82a103c62148ab6ec3ee7bf74774324fcc8fbd6/blockchains/optimism/assets/0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb/logo.png',
  },
  {
    symbol: 'BFEE',
    name: 'Base Fee LMA Token',
    address: '0x1230985617140956E750B9F0B223219f9738FfAf',
    chainId: sepolia.id,
    decimals: 18,
    logoURI: BFEE.src,
  },
  {
    symbol: 'ETH',
    name: 'Sepolia ETH',
    address: zeroAddress,
    chainId: sepolia.id,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  },
  {
    symbol: 'PROM',
    name: 'Prometeus',
    address: zeroAddress,
    chainId: promTestnet.id,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/8825/standard/Ticker.png?1696508978',
  },
];
