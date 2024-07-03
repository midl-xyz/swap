import { Token } from '@/entities';
import { zeroAddress } from 'viem';
import { sepolia } from 'viem/chains';

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
];
